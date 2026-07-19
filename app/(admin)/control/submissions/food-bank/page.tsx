import { Suspense } from 'react'
import { getFoodBankRequests, getFoodBankStats } from '@/lib/db/queries/food-bank'
import { SkeletonTable, SkeletonStatCard } from '@/components/admin/Skeleton'
import SubmissionsTable from '@/components/admin/SubmissionsTable'

const PARCEL_LABELS: Record<string, string> = {
  one: 'One Person',
  two: 'Two Persons',
  four: 'Four Persons',
  other: 'Other',
}

async function FoodBankContent() {
  const [rows, stats] = await Promise.all([
    getFoodBankRequests(),
    getFoodBankStats(),
  ])

  const serialized = rows.map((r) => ({
    ...r,
    createdAt: r.createdAt.toISOString(),
    _parcel: PARCEL_LABELS[r.parcelSize] ?? r.parcelSize,
    _date: new Date(r.createdAt).toLocaleDateString('en-GB'),
  })) as Record<string, unknown>[]

  return (
    <SubmissionsTable
      title="Food Bank Requests"
      rows={serialized}
      statCards={[
        { label: 'Total' },
        { label: 'Pending', statusValue: 'pending' },
        { label: 'Collected', statusValue: 'collected' },
      ]}
      terminalStatuses={['collected']}
      confirmActions={[
        { value: 'approved',   message: 'Approve this request? The applicant will be expecting to collect their parcel.' },
        { value: 'collected',  message: 'Mark as collected? This is final and cannot be undone.', warning: true },
        { value: 'cancelled',  message: 'Cancel this request? The applicant will need to resubmit if they still need assistance.', warning: true },
      ]}
      columns={[
        { key: 'referenceCode', label: 'Ref Code', mono: true },
        { key: 'name', label: 'Name' },
        { key: '_parcel', label: 'Parcel' },
        { key: 'status', label: 'Status', badge: true },
        { key: '_date', label: 'Date' },
      ]}
      statusActions={[
        { label: 'Pending', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Collected', value: 'collected' },
        { label: 'Cancelled', value: 'cancelled' },
      ]}
      statusField="status"
      detailFields={[
        { label: 'Reference Code', key: 'referenceCode' },
        { label: 'Name', key: 'name' },
        { label: 'Email', key: 'email' },
        { label: 'Phone', key: 'phone' },
        { label: 'Benefactor Type', key: 'benefactorType' },
        { label: 'Parcel Size', key: '_parcel' },
        { label: 'Parcel (Other)', key: 'parcelSizeOther' },
        { label: 'Status', key: 'status' },
        { label: 'Received', key: '_date' },
      ]}
    />
  )
}

export default function FoodBankPage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#C9A227' }}>
          Submissions
        </p>
        <h1 className="text-[28px] font-bold text-gray-900">Food Bank Requests</h1>
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
        <FoodBankContent />
      </Suspense>
    </div>
  )
}
