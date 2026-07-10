const config: Record<string, { bg: string; text: string; dot: string }> = {
  new:       { bg: 'bg-blue-50',   text: 'text-blue-700',   dot: 'bg-blue-500' },
  read:      { bg: 'bg-gray-100',  text: 'text-gray-600',   dot: 'bg-gray-400' },
  replied:   { bg: 'bg-green-50',  text: 'text-green-700',  dot: 'bg-green-500' },
  prayed:    { bg: 'bg-purple-50', text: 'text-purple-700', dot: 'bg-purple-500' },
  pending:   { bg: 'bg-amber-50',  text: 'text-amber-700',  dot: 'bg-amber-500' },
  approved:  { bg: 'bg-green-50',  text: 'text-green-700',  dot: 'bg-green-500' },
  collected: { bg: 'bg-gray-100',  text: 'text-gray-600',   dot: 'bg-gray-400' },
  cancelled: { bg: 'bg-red-50',    text: 'text-red-600',    dot: 'bg-red-500' },
}

export default function StatusBadge({ status }: { status: string }) {
  const s = config[status] ?? config.read
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide rounded-full ${s.bg} ${s.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  )
}
