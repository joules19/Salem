import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)
export const FROM = process.env.RESEND_FROM ?? 'Salem <noreply@salemeurope.org>'
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'admin@salemeurope.org'
