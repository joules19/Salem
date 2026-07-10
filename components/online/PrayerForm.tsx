'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function PrayerForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/submissions/prayer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const inputCls =
    'w-full bg-transparent font-body text-[14px] text-white placeholder-white/30 px-5 py-4 outline-none transition-colors duration-200'
  const wrapCls =
    'border border-white/[.15] focus-within:border-gold/60 transition-colors duration-200'

  if (status === 'sent') {
    return (
      <div className="text-center py-14">
        <div
          className="inline-flex items-center justify-center w-16 h-16 mb-6"
          style={{ background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.4)' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" className="w-7 h-7">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="font-display text-[14px] font-bold tracking-[2px] uppercase text-white mb-3">
          Message Received
        </div>
        <p className="font-body text-[14px] text-white/60">
          Thank you — we will be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3" noValidate>
      <div className={wrapCls}>
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={set('name')}
          required
          className={inputCls}
          aria-label="Your name"
        />
      </div>
      <div className={wrapCls}>
        <input
          type="email"
          placeholder="Email address"
          value={form.email}
          onChange={set('email')}
          required
          className={inputCls}
          aria-label="Email address"
        />
      </div>
      <div className={wrapCls}>
        <textarea
          placeholder="Your prayer request or message…"
          value={form.message}
          onChange={set('message')}
          required
          rows={5}
          className={`${inputCls} resize-none`}
          aria-label="Your prayer request or message"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-gold mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending…' : 'Submit'}
      </button>
    </form>
  )
}
