import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createContactSubmission } from '@/lib/db/queries/contact'
import { logActivity, getIpFromRequest } from '@/lib/db/audit'
import { resend, FROM, ADMIN_EMAIL } from '@/lib/email/resend'
import { render } from '@react-email/components'
import ContactConfirmation from '@/lib/email/templates/contact-confirmation'

const schema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email().max(200),
  subject: z.string().max(200).optional(),
  message: z.string().min(1).max(5000),
})

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 422 })

  try {
    const submission = await createContactSubmission(parsed.data)

    await logActivity({
      action: 'submission.created',
      entity: 'contact_submission',
      entityId: submission.id,
      payload: { email: parsed.data.email },
      ipAddress: getIpFromRequest(req),
    })

    // Confirmation to submitter + notification to admin
    await Promise.allSettled([
      resend.emails.send({
        from: FROM,
        to: parsed.data.email,
        subject: 'We received your message — Salem International Christian Centre',
        react: ContactConfirmation({ firstName: parsed.data.firstName, subject: parsed.data.subject }),
      }),
      resend.emails.send({
        from: FROM,
        to: ADMIN_EMAIL,
        subject: `New Contact Message — ${parsed.data.firstName} ${parsed.data.lastName}`,
        html: `<p><strong>From:</strong> ${parsed.data.firstName} ${parsed.data.lastName} (${parsed.data.email})</p><p><strong>Subject:</strong> ${parsed.data.subject ?? '—'}</p><p><strong>Message:</strong></p><p>${parsed.data.message.replace(/\n/g, '<br/>')}</p>`,
      }),
    ])

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 })
  }
}
