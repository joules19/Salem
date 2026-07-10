import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getUserById } from '@/lib/db/queries/users'
import { updateContactStatus } from '@/lib/db/queries/contact'
import { updatePrayerStatus } from '@/lib/db/queries/prayer'
import { logActivity, getIpFromRequest } from '@/lib/db/audit'
import { resend, FROM } from '@/lib/email/resend'
import { render } from '@react-email/components'
import AdminReplyEmail from '@/lib/email/templates/admin-reply'
import { z } from 'zod'

const schema = z.object({
  id: z.string().uuid(),
  type: z.enum(['contact', 'prayer']),
  recipientName: z.string(),
  recipientEmail: z.string().email(),
  replyBody: z.string().min(1).max(5000),
})

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const profile = await getUserById(user.id)
  if (!profile) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 422 })

  const { id, type, recipientName, recipientEmail, replyBody } = parsed.data
  const subject = type === 'prayer' ? 'Response to Your Prayer Request' : 'Re: Your Message to Salem'

  try {
    await resend.emails.send({
      from: FROM,
      to: recipientEmail,
      subject,
      react: AdminReplyEmail({
        recipientName,
        replyBody,
        adminName: profile.name,
        type,
      }),
    })

    if (type === 'contact') {
      await updateContactStatus(id, 'replied')
    } else {
      await updatePrayerStatus(id, 'prayed')
    }

    await logActivity({
      userId: profile.id,
      action: 'submission.reply_sent',
      entity: type === 'contact' ? 'contact_submission' : 'prayer_request',
      entityId: id,
      payload: { recipientEmail },
      ipAddress: getIpFromRequest(req),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send reply' }, { status: 500 })
  }
}
