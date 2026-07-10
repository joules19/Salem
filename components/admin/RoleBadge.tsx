const styles: Record<string, string> = {
  super_admin: 'bg-purple-100 text-purple-700 border border-purple-200',
  admin: 'bg-amber-50 text-amber-700 border border-amber-200',
  member: 'bg-gray-100 text-gray-600 border border-gray-200',
}

export default function RoleBadge({ role, label }: { role: string; label: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase rounded-full ${styles[role] ?? styles.member}`}>
      {label}
    </span>
  )
}
