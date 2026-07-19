import { Suspense } from 'react'
import { getPrayerRequests, getPrayerStats } from '@/lib/db/queries/prayer'
import { SkeletonTable, SkeletonStatCard } from '@/components/admin/Skeleton'
import SubmissionsTable from '@/components/admin/SubmissionsTable'

async function PrayersContent() {
  const [rows, stats] = await Promise.all([
    getPrayerRequests(),
    getPrayerStats(),
  ])

  const serialized = rows.map((r) => ({
    ...r,
    createdAt: r.createdAt.toISOString(),
    _preview: r.message.slice(0, 80) + (r.message.length > 80 ? '…' : ''),
    _date: new Date(r.createdAt).toLocaleDateString('en-GB'),
  })) as Record<string, unknown>[]

  return (
    <SubmissionsTable
      title="Prayer Requests"
      rows={serialized}
      statCards={[
        { label: 'Total' },
        { label: 'New', statusValue: 'new', sub: 'Unread' },
        { label: 'Prayed', statusValue: 'prayed' },
      ]}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: '_preview', label: 'Request', muted: true },
        { key: 'status', label: 'Status', badge: true },
        { key: '_date', label: 'Date' },
      ]}
      statusActions={[
        { label: 'New', value: 'new' },
        { label: 'Read', value: 'read' },
        { label: 'Prayed', value: 'prayed' },
      ]}
      statusField="status"
      detailFields={[
        { label: 'Name', key: 'name' },
        { label: 'Email', key: 'email' },
        { label: 'Prayer Request', key: 'message', multiline: true },
        { label: 'Status', key: 'status' },
        { label: 'Received', key: '_date' },
      ]}
      reply={{ enabled: true, type: 'prayer', nameField: 'name', emailField: 'email' }}
      confirmActions={[
        { value: 'prayed', message: 'Mark as prayed? Confirm you have prayed over this request.' },
      ]}
    />
  )
}

export default function PrayersPage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#C9A227' }}>
          Submissions
        </p>
        <h1 className="text-[28px] font-bold text-gray-900">Prayer Requests</h1>
      </div>

      <Suspense
        fallback={
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {[1, 2, 3].map((i) => <SkeletonStatCard key={i} />)}
            </div>
            <SkeletonTable rows={6} cols={5} />
          </div>
        }
      >
        <PrayersContent />
      </Suspense>
    </div>
  )
}
