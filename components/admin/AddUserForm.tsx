'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from './Toast'
import Spinner from '@/components/ui/Spinner'

interface Role { id: string; name: string; label: string }

type FormState = { name: string; email: string; password: string; roleId: string }
type Errors = Partial<Record<keyof FormState, string>>

function validate(form: FormState): Errors {
  const errors: Errors = {}
  if (!form.name.trim()) {
    errors.name = 'Full name is required'
  } else if (form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }
  if (!form.email.trim()) {
    errors.email = 'Email address is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address'
  }
  if (!form.password) {
    errors.password = 'Password is required'
  } else if (form.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }
  return errors
}

export default function AddUserForm({ roles }: { roles: Role[] }) {
  const router = useRouter()
  const { toast } = useToast()
  const [form, setForm] = useState<FormState>({ name: '', email: '', password: '', roleId: roles[0]?.id ?? '' })
  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((prev) => ({ ...prev, [k]: undefined }))
  }

  const inputCls = (hasError: boolean) =>
    `w-full px-4 py-3 text-[14px] text-gray-900 border outline-none transition-colors bg-white placeholder:text-gray-300 ${
      hasError ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-[#93328f]'
    }`

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, name: form.name.trim(), email: form.email.trim() }),
      })
      if (!res.ok) {
        const d = await res.json()
        throw new Error(d.error ?? 'Failed to create user')
      }
      toast('User created and welcome email sent', 'success')
      router.push('/admin/users')
      router.refresh()
    } catch (err) {
      toast(err instanceof Error ? err.message : 'Something went wrong', 'error')
    } finally {
      setLoading(false)
    }
  }

  const labelCls = 'block text-[12px] font-semibold text-gray-700 uppercase tracking-wide mb-2'

  return (
    <div className="bg-white border border-gray-100 shadow-sm p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
        <div>
          <label className={labelCls}>Full Name</label>
          <input
            type="text"
            value={form.name}
            onChange={set('name')}
            placeholder="Jane Doe"
            className={inputCls(!!errors.name)}
          />
          {errors.name && <p className="mt-1.5 text-[11px] text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label className={labelCls}>Email Address</label>
          <input
            type="email"
            value={form.email}
            onChange={set('email')}
            placeholder="jane@salemeurope.org"
            className={inputCls(!!errors.email)}
          />
          {errors.email && <p className="mt-1.5 text-[11px] text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className={labelCls}>Temporary Password</label>
          <input
            type="text"
            value={form.password}
            onChange={set('password')}
            placeholder="Min. 8 characters"
            className={inputCls(!!errors.password)}
          />
          {errors.password
            ? <p className="mt-1.5 text-[11px] text-red-600">{errors.password}</p>
            : <p className="mt-1.5 text-[11px] text-gray-400">User will be asked to change this after first login.</p>
          }
        </div>

        <div>
          <label className={labelCls}>Role</label>
          <select value={form.roleId} onChange={set('roleId')} className={`${inputCls(false)} cursor-pointer`}>
            {roles.map((r) => (
              <option key={r.id} value={r.id}>{r.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wide text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors bg-white cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 py-2.5 text-[12px] font-bold uppercase tracking-widest text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            style={{ background: '#93328f' }}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2"><Spinner />Creating…</span>
            ) : 'Create User & Send Email'}
          </button>
        </div>
      </form>
    </div>
  )
}
