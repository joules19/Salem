import { Suspense } from 'react'
import { getContactSubmissions, getContactStats } from '@/lib/db/queries/contact'
import { SkeletonTable, SkeletonStatCard } from '@/components/admin/Skeleton'
import SubmissionsTable from '@/components/admin/SubmissionsTable'

async function ContactContent() {
  const [rows, stats] = await Promise.all([
    getContactSubmissions(),
    getContactStats(),
  ])

  const serialized = rows.map((r) => ({
    ...r,
    createdAt: r.createdAt.toISOString(),
    _name: `${r.firstName} ${r.lastName}`,
    _subject: r.subject || '—',
    _date: new Date(r.createdAt).toLocaleDateString('en-GB'),
  })) as Record<string, unknown>[]

  return (
    <SubmissionsTable
      title="Contact Messages"
      rows={serialized}
      statCards={[
        { label: 'Total' },
        { label: 'New', statusValue: 'new', sub: 'Unread' },
        { label: 'Replied', statusValue: 'replied' },
      ]}
      columns={[
        { key: '_name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: '_subject', label: 'Subject' },
        { key: 'status', label: 'Status', badge: true },
        { key: '_date', label: 'Date' },
      ]}
      statusActions={[
        { label: 'New', value: 'new' },
        { label: 'Read', value: 'read' },
        { label: 'Replied', value: 'replied' },
      ]}
      statusField="status"
      detailFields={[
        { label: 'First Name', key: 'firstName' },
        { label: 'Last Name', key: 'lastName' },
        { label: 'Email', key: 'email' },
        { label: 'Subject', key: '_subject' },
        { label: 'Message', key: 'message', multiline: true },
        { label: 'Status', key: 'status' },
        { label: 'Received', key: '_date' },
      ]}
      reply={{ enabled: true, type: 'contact', nameField: 'firstName', emailField: 'email' }}
      confirmActions={[
        { value: 'replied', message: 'Mark as replied? Only do this after you have sent a response to the sender.' },
      ]}
    />
  )
}

export default function ContactPage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#C9A227' }}>
          Submissions
        </p>
        <h1 className="text-[28px] font-bold text-gray-900">Contact Messages</h1>
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
        <ContactContent />
      </Suspense>
    </div>
  )
}
