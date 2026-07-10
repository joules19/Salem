'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from './Toast'
import RoleBadge from './RoleBadge'
import Spinner from '@/components/ui/Spinner'

interface Role { id: string; name: string; label: string }
interface UserData {
  id: string; name: string; email: string
  role: string; roleId: string; roleLabel: string; isActive: boolean
}

export default function EditUserForm({ user, roles }: { user: UserData; roles: Role[] }) {
  const router = useRouter()
  const { toast } = useToast()
  const [roleId, setRoleId] = useState(user.roleId)
  const [newPassword, setNewPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loading, setLoading] = useState(false)

  const inputCls = (hasError: boolean) =>
    `w-full px-4 py-3 text-[14px] text-gray-900 border outline-none transition-colors bg-white placeholder:text-gray-300 ${
      hasError ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-[#93328f]'
    }`

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (newPassword && newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters')
      return
    }

    setLoading(true)
    try {
      const body: Record<string, string> = { roleId }
      if (newPassword) body.password = newPassword

      const res = await fetch(`/api/admin/users/${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error()
      toast('User updated successfully', 'success')
      if (newPassword) toast('Password updated', 'info')
      router.push('/admin/users')
      router.refresh()
    } catch {
      toast('Failed to update user', 'error')
    } finally {
      setLoading(false)
    }
  }

  const labelCls = 'block text-[12px] font-semibold text-gray-700 uppercase tracking-wide mb-2'

  return (
    <div className="bg-white border border-gray-100 shadow-sm p-8">
      {/* User info */}
      <div className="flex items-center gap-4 pb-6 mb-6 border-b border-gray-100">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-[16px] font-bold flex-shrink-0" style={{ background: '#93328f' }}>
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <div className="text-[15px] font-semibold text-gray-900">{user.name}</div>
          <div className="text-[13px] text-gray-500">{user.email}</div>
          <div className="mt-1"><RoleBadge role={user.role} label={user.roleLabel} /></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
        <div>
          <label className={labelCls}>Role</label>
          <select value={roleId} onChange={(e) => setRoleId(e.target.value)} className={`${inputCls(false)} cursor-pointer`}>
            {roles.map((r) => (
              <option key={r.id} value={r.id}>{r.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelCls}>Reset Password (optional)</label>
          <input
            type="text"
            value={newPassword}
            onChange={(e) => { setNewPassword(e.target.value); setPasswordError('') }}
            placeholder="Leave blank to keep current password"
            className={inputCls(!!passwordError)}
          />
          {passwordError
            ? <p className="mt-1.5 text-[11px] text-red-600">{passwordError}</p>
            : <p className="mt-1.5 text-[11px] text-gray-400">Min. 8 characters. Leave blank to keep the current password.</p>
          }
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
              <span className="flex items-center justify-center gap-2"><Spinner />Saving…</span>
            ) : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  )
}
