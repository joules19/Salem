'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
import Spinner from '@/components/ui/Spinner'

interface Props {
  notice?: string
}

type Errors = { email?: string; password?: string }

function validate(email: string, password: string): Errors {
  const errors: Errors = {}
  if (!email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'Enter a valid email address'
  }
  if (!password) errors.password = 'Password is required'
  return errors
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

export default function LoginForm({ notice }: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)

  const inputCls = (hasError: boolean) =>
    `w-full px-4 py-3 text-[14px] text-gray-900 border outline-none transition-colors bg-white placeholder:text-gray-300 ${hasError ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-[#93328f]'
    }`

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setServerError('')
    const errs = validate(email, password)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithPassword({ email: email.trim(), password })
    setLoading(false)

    if (authError) {
      setServerError('Invalid email or password. Please try again.')
      return
    }

    window.location.assign('/admin/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[420px]">

        <div className="bg-white shadow-xl overflow-hidden">
          {/* Gold shimmer top strip */}
          <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #9a7a1c, #C9A227, #e4c060, #C9A227, #9a7a1c)' }} />

          {/* Header */}
          <div className="flex flex-col items-center pt-10 pb-8 px-8 border-b border-gray-100">
            <Image
              src="/images/Logo-Final1.png"
              alt="Salem International Christian Centre"
              width={140}
              height={48}
              className="h-12 w-auto mb-6"
            />
            <h1
              className="text-[21px] font-bold tracking-wide mb-1"
              style={{ background: 'linear-gradient(135deg, #93328f 30%, #C9A227)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Salem Admin
            </h1>
            <p className="text-[12px] text-gray-400 tracking-wide">Sign in to your account</p>
          </div>

          {/* Form body */}
          <div className="px-8 pt-7 pb-10">
            {notice && (
              <div className="mb-6 flex items-start gap-3 px-4 py-3 bg-amber-50 border border-amber-200 text-amber-700 text-[13px] leading-snug">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden>
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><circle cx="12" cy="16" r="1" fill="currentColor" />
                </svg>
                {notice}
              </div>
            )}

            {serverError && (
              <div className="mb-6 flex items-start gap-3 px-4 py-3 bg-red-50 border border-red-200 text-red-700 text-[13px] leading-snug">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden>
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><circle cx="12" cy="16" r="1" fill="currentColor" />
                </svg>
                {serverError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })) }}
                  autoComplete="email"
                  placeholder="you@salemeurope.org"
                  className={inputCls(!!errors.email)}
                />
                {errors.email && <p className="mt-1.5 text-[11px] text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })) }}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className={`${inputCls(!!errors.password)} pr-11`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors bg-transparent border-0 cursor-pointer p-1"
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                {errors.password && <p className="mt-1.5 text-[11px] text-red-600">{errors.password}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 mt-2 text-[12px] font-bold uppercase tracking-widest text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: '#93328f' }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2"><Spinner />Signing in…</span>
                ) : 'Sign In'}
              </button>
            </form>
          </div>
        </div>

        <p className="text-center text-[11px] text-gray-400 mt-6">
          Salem International Christian Centre &bull; Admin Panel
        </p>
      </div>
    </div>
  )
}
