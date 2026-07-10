import { Suspense } from 'react'
import { getAllUsers } from '@/lib/db/queries/users'
import { createClient } from '@/lib/supabase/server'
import { SkeletonTable } from '@/components/admin/Skeleton'
import Link from 'next/link'
import UsersClient from '@/components/admin/UsersClient'

async function UsersContent() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const users = await getAllUsers()
  const serialized = users.map((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    isActive: u.isActive,
    role: (u.role as { name: string }).name,
    roleLabel: (u.role as { label: string }).label,
    createdAt: u.createdAt.toISOString(),
  }))
  return <UsersClient users={serialized} currentUserId={user?.id ?? ''} />
}

export default function UsersPage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#C9A227' }}>
            Admin
          </p>
          <h1 className="text-[28px] font-bold text-gray-900">Users</h1>
        </div>
        <Link
          href="/admin/users/new"
          className="flex items-center gap-2 px-4 py-2.5 text-[12px] font-bold uppercase tracking-widest text-white no-underline flex-shrink-0"
          style={{ background: '#93328f' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add User
        </Link>
      </div>

      <Suspense fallback={<SkeletonTable rows={5} cols={5} />}>
        <UsersContent />
      </Suspense>
    </div>
  )
}
