'use client'

import { useState } from 'react'
import Link from 'next/link'
import RoleBadge from './RoleBadge'
import Alert from './Alert'
import { useToast } from './Toast'
import { useRouter } from 'next/navigation'

interface UserRow {
  id: string
  name: string
  email: string
  role: string
  roleLabel: string
  isActive: boolean
  createdAt: string
}

export default function UsersClient({ users, currentUserId }: { users: UserRow[]; currentUserId: string }) {
  const { toast } = useToast()
  const router = useRouter()
  const [confirmId, setConfirmId] = useState<string | null>(null)
  const [confirmAction, setConfirmAction] = useState<'deactivate' | 'activate'>('deactivate')
  const [confirming, setConfirming] = useState(false)

  const userToConfirm = users.find((u) => u.id === confirmId)

  async function handleToggleActive() {
    if (!confirmId) return
    const active = confirmAction === 'activate'
    setConfirming(true)
    try {
      const res = await fetch(`/api/admin/users/${confirmId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: active }),
      })
      if (!res.ok) throw new Error()
      toast(`User ${active ? 'activated' : 'deactivated'}`, 'success')
      router.refresh()
    } catch {
      toast('Action failed', 'error')
    } finally {
      setConfirming(false)
      setConfirmId(null)
    }
  }

  return (
    <>
      <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                {['Name', 'Email', 'Role', 'Status', 'Joined', 'Actions'].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0"
                        style={{ background: '#93328f' }}
                      >
                        {u.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-[13px] font-medium text-gray-900">{u.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-600">{u.email}</td>
                  <td className="px-6 py-4"><RoleBadge role={u.role} label={u.roleLabel} /></td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide rounded-full ${u.isActive ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${u.isActive ? 'bg-green-500' : 'bg-gray-400'}`} />
                      {u.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-500">
                    {new Date(u.createdAt).toLocaleDateString('en-GB')}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/admin/users/${u.id}`}
                        className="text-[12px] font-medium text-[#93328f] hover:underline no-underline"
                      >
                        Edit
                      </Link>
                      {u.id === currentUserId ? (
                        <span className="text-[12px] text-gray-300 select-none" title="You cannot deactivate your own account">
                          Deactivate
                        </span>
                      ) : (
                        <button
                          onClick={() => {
                            setConfirmId(u.id)
                            setConfirmAction(u.isActive ? 'deactivate' : 'activate')
                          }}
                          className={`text-[12px] font-medium bg-transparent border-0 cursor-pointer p-0 ${u.isActive ? 'text-red-500 hover:text-red-700' : 'text-green-600 hover:text-green-800'}`}
                        >
                          {u.isActive ? 'Deactivate' : 'Activate'}
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-3 border-t border-gray-100 text-[11px] text-gray-400">
          {users.length} user{users.length !== 1 ? 's' : ''}
        </div>
      </div>

      {confirmId && userToConfirm && (
        <Alert
          title={confirmAction === 'deactivate' ? 'Deactivate User' : 'Activate User'}
          message={`Are you sure you want to ${confirmAction} ${userToConfirm.name}?`}
          confirmLabel={confirmAction === 'deactivate' ? 'Deactivate' : 'Activate'}
          variant={confirmAction === 'deactivate' ? 'danger' : 'warning'}
          onConfirm={handleToggleActive}
          onCancel={() => setConfirmId(null)}
          loading={confirming}
        />
      )}
    </>
  )
}
