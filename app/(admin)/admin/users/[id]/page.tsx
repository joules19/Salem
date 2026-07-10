import { getUserById, getAllRoles } from '@/lib/db/queries/users'
import { notFound } from 'next/navigation'
import EditUserForm from '@/components/admin/EditUserForm'

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [user, roles] = await Promise.all([getUserById(id), getAllRoles()])
  if (!user) notFound()

  const serialized = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: (user.role as { name: string }).name,
    roleId: user.roleId,
    roleLabel: (user.role as { label: string }).label,
    isActive: user.isActive,
  }
  const serializedRoles = roles.map((r) => ({ id: r.id, name: r.name, label: r.label }))

  return (
    <div className="max-w-[600px] mx-auto">
      <div className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#C9A227' }}>Users</p>
        <h1 className="text-[28px] font-bold text-gray-900">Edit User</h1>
      </div>
      <EditUserForm user={serialized} roles={serializedRoles} />
    </div>
  )
}
