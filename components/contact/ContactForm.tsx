'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/submissions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
    } catch {
      setStatus('idle')
    }
  }

  const inputCls =
    'w-full bg-transparent font-body text-[14px] text-white placeholder-white/30 px-5 py-4 outline-none'
  const wrapCls =
    'border border-white/[.15] focus-within:border-gold/60 transition-colors duration-200'

  if (status === 'sent') {
    return (
      <div className="text-center py-20">
        <div
          className="inline-flex items-center justify-center w-16 h-16 mb-6"
          style={{ background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.4)' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" className="w-7 h-7">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="font-display text-[15px] font-bold tracking-[2px] uppercase text-white mb-3">
          Message Sent
        </div>
        <p className="font-body text-[14px] text-white/55">
          Thank you for reaching out — we will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4" noValidate>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <div className={wrapCls}>
          <input type="text" placeholder="First Name" value={form.firstName} onChange={set('firstName')} required className={inputCls} aria-label="First name" />
        </div>
        <div className={wrapCls}>
          <input type="text" placeholder="Last Name" value={form.lastName} onChange={set('lastName')} required className={inputCls} aria-label="Last name" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <div className={wrapCls}>
          <input type="email" placeholder="Email Address" value={form.email} onChange={set('email')} required className={inputCls} aria-label="Email address" />
        </div>
        <div className={wrapCls}>
          <input type="text" placeholder="Subject" value={form.subject} onChange={set('subject')} className={inputCls} aria-label="Subject" />
        </div>
      </div>
      <div className={wrapCls}>
        <textarea placeholder="Message" value={form.message} onChange={set('message')} required rows={6} className={`${inputCls} resize-none`} aria-label="Message" />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-gold disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending…' : 'Submit'}
        </button>
      </div>
    </form>
  )
}
