import { Suspense } from 'react'
import { getAuditLogs } from '@/lib/db/queries/audit'
import { SkeletonTable } from '@/components/admin/Skeleton'

async function AuditContent() {
  const logs = await getAuditLogs()

  return (
    <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              {['Action', 'Entity', 'User', 'IP Address', 'Time'].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {logs.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center text-[13px] text-gray-400">
                  No audit records yet
                </td>
              </tr>
            ) : (
              logs.map((log) => {
                const user = log.user as { name: string; email: string } | null
                return (
                  <tr key={log.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="font-mono text-[12px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                        {log.action}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[13px] text-gray-600">
                      <span>{log.entity}</span>
                      {log.entityId && (
                        <span className="text-[11px] text-gray-400 ml-1 font-mono">
                          #{log.entityId.slice(0, 8)}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {user ? (
                        <div>
                          <div className="text-[13px] font-medium text-gray-800">{user.name}</div>
                          <div className="text-[11px] text-gray-400">{user.email}</div>
                        </div>
                      ) : (
                        <span className="text-[12px] text-gray-400 italic">System</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-[12px] font-mono text-gray-500">{log.ipAddress ?? '—'}</td>
                    <td className="px-6 py-4 text-[12px] text-gray-500 whitespace-nowrap">
                      {log.createdAt.toLocaleDateString('en-GB')}{' '}
                      {log.createdAt.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-3 border-t border-gray-100 text-[11px] text-gray-400">
        {logs.length} records (most recent 500)
      </div>
    </div>
  )
}

export default function AuditLogPage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#C9A227' }}>
          Security
        </p>
        <h1 className="text-[28px] font-bold text-gray-900">Audit Log</h1>
        <p className="text-[13px] text-gray-500 mt-1">Read-only record of all admin activity.</p>
      </div>
      <Suspense fallback={<SkeletonTable rows={8} cols={5} />}>
        <AuditContent />
      </Suspense>
    </div>
  )
}
