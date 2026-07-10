import { getAllRoles } from '@/lib/db/queries/users'
import AddUserForm from '@/components/admin/AddUserForm'

export default async function NewUserPage() {
  const roles = await getAllRoles()
  const serialized = roles.map((r) => ({ id: r.id, name: r.name, label: r.label }))

  return (
    <div className="max-w-[600px] mx-auto">
      <div className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#C9A227' }}>
          Users
        </p>
        <h1 className="text-[28px] font-bold text-gray-900">Add New User</h1>
      </div>
      <AddUserForm roles={serialized} />
    </div>
  )
}
