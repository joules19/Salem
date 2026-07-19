import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { randomUUID } from 'crypto'
import nodemailer from 'nodemailer'
import { createFoodBankRequest } from '@/lib/db/queries/food-bank'
import { logActivity, getIpFromRequest } from '@/lib/db/audit'

export const runtime = 'nodejs'

// ── Rate limiter (in-memory, resets on cold start) ──────────────────────────
const rateStore = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60 * 60 * 1000 // 1 hour

function getIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateStore.get(ip)
  if (!entry || now > entry.resetAt) {
    rateStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count++
  return false
}

// ── Validation schema ────────────────────────────────────────────────────────
const schema = z.object({
  cookieConsent: z.literal('accept'),
  benefactorType: z.enum(['new', 'existing']),
  parcelSize: z.enum(['one', 'two', 'four', 'other']),
  parcelSizeOther: z.string().max(120).optional(),
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100)
    .regex(/^[\p{L}\s'\-]+$/u, 'Name contains invalid characters'),
  phone: z
    .string()
    .max(20)
    .transform((v) => v.replace(/[\s\-\(\)]/g, ''))
    .refine((v) => {
      const normalised = v.startsWith('+44') ? '0' + v.slice(3) : v
      return /^0[1-9]\d{8,9}$/.test(normalised)
    }, 'Enter a valid UK phone number (e.g. 07700 900000 or +44 7700 900000)'),
  email: z.string().email('Enter a valid email address').max(200),
  _honey: z.string().optional(),
})

// ── Helpers ──────────────────────────────────────────────────────────────────
function generateCode(): string {
  return 'SHFB-' + randomUUID().replace(/-/g, '').slice(0, 8).toUpperCase()
}

function parcelLabel(size: string, other?: string): string {
  return (
    { one: 'One Person', two: 'Two Persons Family', four: 'Four Persons Family' }[size] ??
    `Other${other ? ` — ${other}` : ''}`
  )
}

// ── Email ────────────────────────────────────────────────────────────────────
async function sendEmails(data: z.infer<typeof schema>, code: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })

  const label = parcelLabel(data.parcelSize, data.parcelSizeOther)
  const from = process.env.SMTP_FROM ?? 'noreply@salemeurope.org'
  const adminTo = process.env.ADMIN_EMAIL ?? 'admin@salemeurope.org'

  const baseStyle = `font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto`

  await transporter.sendMail({
    from,
    to: data.email,
    subject: 'Salem Food Bank — Your Reference Code',
    html: `
      <div style="${baseStyle};background:#0e0010;color:#fff;padding:40px 36px;border-top:4px solid #C9A227">
        <p style="font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#C9A227;margin:0 0 24px">
          Salem International Christian Centre
        </p>
        <h1 style="font-size:22px;color:#fff;margin:0 0 6px">Food Bank Order Confirmed</h1>
        <p style="color:rgba(255,255,255,.6);font-size:14px;margin:0 0 28px">
          Dear ${data.name},
        </p>
        <p style="color:rgba(255,255,255,.75);font-size:15px;line-height:1.6;margin:0 0 24px">
          Thank you for your request. Your unique reference code is shown below.
          <strong style="color:#fff"> Please bring this code alongside a valid photo ID</strong>
          when you come to collect your parcel.
        </p>
        <div style="background:rgba(147,50,143,.2);border:1px solid rgba(201,162,39,.5);padding:22px 28px;text-align:center;margin:0 0 28px">
          <p style="color:rgba(255,255,255,.5);font-size:10px;letter-spacing:3px;text-transform:uppercase;margin:0 0 8px">
            Your Reference Code
          </p>
          <p style="color:#C9A227;font-size:34px;font-weight:bold;letter-spacing:5px;margin:0">${code}</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;color:rgba(255,255,255,.7)">
          <tr><td style="padding:5px 0;width:130px">Parcel</td><td style="color:#fff">${label}</td></tr>
          <tr><td style="padding:5px 0">Collection</td><td style="color:#fff">Every Wednesday · 1pm – 4pm</td></tr>
          <tr><td style="padding:5px 0;vertical-align:top">Address</td>
            <td style="color:#fff">Unit 11C, New Horizon Business Centre<br>The Pinnacles, Barrows Road<br>Harlow, Essex CM19 5FN</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid rgba(147,50,143,.3);margin:28px 0"/>
        <p style="color:rgba(255,255,255,.35);font-size:12px;margin:0">
          God bless you · Salem International Christian Centre · admin@salemeurope.org
        </p>
      </div>`,
  })

  await transporter.sendMail({
    from,
    to: adminTo,
    subject: `New Food Bank Request — ${code}`,
    html: `
      <div style="${baseStyle};padding:28px;background:#f9f9f9;border-top:4px solid #93328f">
        <h2 style="color:#93328f;margin:0 0 20px;font-size:18px">New Food Bank Order — ${code}</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          ${[
            ['Code', code],
            ['Benefactor', data.benefactorType === 'new' ? 'New' : 'Existing'],
            ['Parcel', label],
            ['Name', data.name],
            ['Email', data.email],
            ['Phone', data.phone],
          ]
            .map(
              ([k, v]) =>
                `<tr><td style="padding:7px 12px 7px 0;color:#555;width:120px;vertical-align:top">${k}</td>
                 <td style="padding:7px 0;font-weight:600">${v}</td></tr>`,
            )
            .join('')}
        </table>
      </div>`,
  })
}

// ── Handler ──────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  if (!req.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json({ error: 'Invalid content type' }, { status: 400 })
  }

  if (isRateLimited(getIp(req))) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in an hour.' },
      { status: 429 },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const result = schema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: 'Please check your details and try again.' },
      { status: 422 },
    )
  }

  // Honeypot — silently succeed to avoid bot fingerprinting
  if (result.data._honey) {
    return NextResponse.json({ success: true })
  }

  const code = generateCode()

  try {
    // Save to DB first
    const saved = await createFoodBankRequest({
      referenceCode: code,
      benefactorType: result.data.benefactorType,
      parcelSize: result.data.parcelSize,
      parcelSizeOther: result.data.parcelSizeOther,
      name: result.data.name,
      phone: result.data.phone,
      email: result.data.email,
    })

    await logActivity({
      action: 'submission.created',
      entity: 'food_bank_request',
      entityId: saved.id,
      payload: { code, email: result.data.email },
      ipAddress: getIpFromRequest(req),
    })
  } catch (err) {
    console.error('[food-bank] db error:', err)
    // Continue even if DB save fails — don't block the user
  }

  sendEmails(result.data, code).catch((err) =>
    console.error('[food-bank] email error:', err),
  )

  return NextResponse.json({ success: true, code })
}
