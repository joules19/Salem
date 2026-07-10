import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createPrayerRequest } from '@/lib/db/queries/prayer'
import { logActivity, getIpFromRequest } from '@/lib/db/audit'
import { resend, FROM, ADMIN_EMAIL } from '@/lib/email/resend'
import PrayerConfirmation from '@/lib/email/templates/prayer-confirmation'

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  message: z.string().min(1).max(5000),
})

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 422 })

  try {
    const submission = await createPrayerRequest(parsed.data)

    await logActivity({
      action: 'submission.created',
      entity: 'prayer_request',
      entityId: submission.id,
      payload: { email: parsed.data.email },
      ipAddress: getIpFromRequest(req),
    })

    await Promise.allSettled([
      resend.emails.send({
        from: FROM,
        to: parsed.data.email,
        subject: 'Your prayer request has been received — Salem',
        react: PrayerConfirmation({ name: parsed.data.name }),
      }),
      resend.emails.send({
        from: FROM,
        to: ADMIN_EMAIL,
        subject: `New Prayer Request — ${parsed.data.name}`,
        html: `<p><strong>From:</strong> ${parsed.data.name} (${parsed.data.email})</p><p><strong>Request:</strong></p><p>${parsed.data.message.replace(/\n/g, '<br/>')}</p>`,
      }),
    ])

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to save request' }, { status: 500 })
  }
}
