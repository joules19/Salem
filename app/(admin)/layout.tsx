import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getUserById } from '@/lib/db/queries/users'
import AdminShell from '@/components/admin/AdminShell'
import type { Role } from '@/lib/db/schema'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let adminUser = null
  if (user) {
    const profile = await getUserById(user.id)

    if (!profile) {
      redirect('/admin/signout')
    }

    if (!profile.isActive) {
      redirect('/admin/signout?error=inactive')
    }

    const role = profile.role as Role
    adminUser = {
      id: profile.id,
      name: profile.name,
      email: profile.email,
      role: role.name,
      roleLabel: role.label,
    }
  }

  return (
    <div className="min-h-screen" style={{ background: '#f8fafc', color: '#111827' }}>
      {adminUser ? (
        <AdminShell user={adminUser}>
          {children}
        </AdminShell>
      ) : (
        children
      )}
    </div>
  )
}
