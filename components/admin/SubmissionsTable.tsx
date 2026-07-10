'use client'

import { useState } from 'react'
import StatusBadge from './StatusBadge'
import SlideOver from './SlideOver'
import { useToast } from './Toast'
import Spinner from '@/components/ui/Spinner'

interface Column {
  key: string
  label: string
  badge?: boolean
  mono?: boolean
  muted?: boolean
}

interface StatCard {
  label: string
  statusValue?: string
  sub?: string
}

interface Action {
  label: string
  value: string
}

interface ConfirmAction {
  value: string
  message: string
  warning?: boolean  // amber/red tone vs neutral
}

interface ReplyConfig {
  enabled: boolean
  type: 'contact' | 'prayer'
  nameField: string
  emailField: string
}

interface Props {
  title: string
  rows: Record<string, unknown>[]
  columns: Column[]
  statCards: StatCard[]
  statusActions: Action[]
  statusField?: string
  detailFields: { label: string; key: string; multiline?: boolean }[]
  reply?: ReplyConfig
  terminalStatuses?: string[]
  confirmActions?: ConfirmAction[]
}

export default function SubmissionsTable({
  title,
  rows,
  columns,
  statCards,
  statusActions,
  statusField = 'status',
  detailFields,
  reply,
  terminalStatuses = [],
  confirmActions = [],
}: Props) {
  const { toast } = useToast()
  const [localRows, setLocalRows] = useState(rows)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selected, setSelected] = useState<Record<string, unknown> | null>(null)
  const [pendingConfirm, setPendingConfirm] = useState<{
    id: string; action: Action; confirm: ConfirmAction
  } | null>(null)
  const [replyBody, setReplyBody] = useState('')
  const [sendingReply, setSendingReply] = useState(false)

  const filtered = localRows.filter((r) => {
    const matchStatus = statusFilter === 'all' || r[statusField] === statusFilter
    const matchSearch = !search || Object.values(r).some((v) =>
      String(v ?? '').toLowerCase().includes(search.toLowerCase()),
    )
    return matchStatus && matchSearch
  })

  function applyStatusUpdate(id: string, status: string) {
    setLocalRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [statusField]: status } : r)),
    )
    setSelected((prev) => (prev?.id === id ? { ...prev, [statusField]: status } : prev))
  }

  async function handleStatusChange(id: string, status: string) {
    const entityType = reply?.type === 'contact' ? 'contact' : reply?.type === 'prayer' ? 'prayers' : 'food-bank'
    applyStatusUpdate(id, status)
    try {
      const res = await fetch(`/api/admin/submissions/${entityType}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      if (!res.ok) throw new Error()
      toast('Status updated', 'success')
    } catch {
      applyStatusUpdate(id, String(selected?.[statusField] ?? ''))
      toast('Failed to update status', 'error')
    }
  }

  function handleActionClick(action: Action) {
    if (!selected) return
    const confirmCfg = confirmActions.find((c) => c.value === action.value)
    if (confirmCfg) {
      setPendingConfirm({ id: String(selected.id), action, confirm: confirmCfg })
    } else {
      handleStatusChange(String(selected.id), action.value)
    }
  }

  function handleConfirm() {
    if (!pendingConfirm) return
    handleStatusChange(pendingConfirm.id, pendingConfirm.action.value)
    setPendingConfirm(null)
  }

  async function handleReply() {
    if (!selected || !reply || !replyBody.trim()) return
    setSendingReply(true)
    try {
      const res = await fetch('/api/admin/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: selected.id,
          type: reply.type,
          recipientName: selected[reply.nameField],
          recipientEmail: selected[reply.emailField],
          replyBody,
        }),
      })
      if (!res.ok) throw new Error()
      toast('Reply sent successfully', 'success')
      setReplyBody('')
    } catch {
      toast('Failed to send reply', 'error')
    } finally {
      setSendingReply(false)
    }
  }

  const isTerminal = selected ? terminalStatuses.includes(String(selected[statusField])) : false

  return (
    <div>
      {/* Stat strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((c) => {
          const value = c.statusValue
            ? localRows.filter((r) => r[statusField] === c.statusValue).length
            : localRows.length
          return (
            <div key={c.label} className="bg-white border border-gray-100 shadow-sm p-5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-2">{c.label}</div>
              <div className="text-[28px] font-bold text-gray-900 leading-none mb-1">{value}</div>
              {c.sub && <div className="text-[11px] text-gray-400">{c.sub}</div>}
            </div>
          )
        })}
      </div>

      {/* Table card */}
      <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <h2 className="text-[15px] font-semibold text-gray-900 flex-shrink-0">{title}</h2>
          <div className="flex gap-3 flex-wrap sm:ml-auto">
            <div className="relative">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 pr-3 py-2 text-[13px] border border-gray-200 outline-none focus:border-[#93328f] bg-white text-gray-900 placeholder:text-gray-300 w-48"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 text-[13px] border border-gray-200 outline-none focus:border-[#93328f] bg-white text-gray-700"
            >
              <option value="all">All statuses</option>
              {statusActions.map((a) => (
                <option key={a.value} value={a.value}>{a.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                {columns.map((col) => (
                  <th key={col.key} className="px-6 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="px-6 py-16 text-center text-[13px] text-gray-400">
                    No records found
                  </td>
                </tr>
              ) : (
                filtered.map((row) => (
                  <tr
                    key={String(row.id)}
                    className="border-b border-gray-50 hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => { setSelected(row); setPendingConfirm(null) }}
                  >
                    {columns.map((col) => (
                      <td key={col.key} className="px-6 py-4 text-[13px] text-gray-700">
                        {col.badge
                          ? <StatusBadge status={String(row[col.key] ?? '')} />
                          : col.mono
                          ? <span className="font-mono text-[12px] font-semibold text-[#93328f]">{String(row[col.key] ?? '—')}</span>
                          : col.muted
                          ? <span className="block max-w-[260px] truncate text-gray-400">{String(row[col.key] ?? '—')}</span>
                          : String(row[col.key] ?? '—')}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-3 border-t border-gray-100 text-[11px] text-gray-400">
          {filtered.length} of {localRows.length} records
        </div>
      </div>

      {/* Detail slide-over */}
      <SlideOver
        open={!!selected}
        onClose={() => { setSelected(null); setPendingConfirm(null) }}
        title="Submission Detail"
      >
        {selected && (
          <div>
            {/* Fields */}
            <div className="space-y-5 mb-8">
              {detailFields.map((f) => (
                <div key={f.key}>
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">{f.label}</dt>
                  {f.multiline ? (
                    <dd className="text-[14px] text-gray-800 leading-relaxed whitespace-pre-wrap bg-gray-50 p-3 border border-gray-100">
                      {String(selected[f.key] ?? '—')}
                    </dd>
                  ) : (
                    <dd className="text-[14px] text-gray-800">{String(selected[f.key] ?? '—')}</dd>
                  )}
                </div>
              ))}
            </div>

            {/* Status section */}
            <div className="mb-8">
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-3">Update Status</dt>

              {isTerminal ? (
                /* Terminal state */
                <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 border border-gray-200 text-[12px] text-gray-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 flex-shrink-0 text-gray-400">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  This record is <strong className="text-gray-700 mx-1">{String(selected[statusField])}</strong> and cannot be changed.
                </div>

              ) : pendingConfirm ? (
                /* Inline confirm step */
                <div className={`border p-4 ${pendingConfirm.confirm.warning ? 'bg-amber-50 border-amber-200' : 'bg-blue-50 border-blue-200'}`}>
                  <div className="flex items-start gap-3 mb-4">
                    {pendingConfirm.confirm.warning ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 flex-shrink-0 text-amber-500 mt-0.5">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" /><circle cx="12" cy="17" r="1" fill="currentColor" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 flex-shrink-0 text-blue-500 mt-0.5">
                        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><circle cx="12" cy="16" r="1" fill="currentColor" />
                      </svg>
                    )}
                    <p className={`text-[13px] leading-relaxed ${pendingConfirm.confirm.warning ? 'text-amber-800' : 'text-blue-800'}`}>
                      {pendingConfirm.confirm.message}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleConfirm}
                      className="flex-1 py-2 text-[12px] font-bold uppercase tracking-widest text-white transition-colors cursor-pointer border-0"
                      style={{ background: pendingConfirm.confirm.warning ? '#b45309' : '#93328f' }}
                    >
                      Yes, confirm
                    </button>
                    <button
                      onClick={() => setPendingConfirm(null)}
                      className="flex-1 py-2 text-[12px] font-medium text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      Go back
                    </button>
                  </div>
                </div>

              ) : (
                /* Normal action buttons */
                <div className="flex flex-wrap gap-2">
                  {statusActions.map((a) => (
                    <button
                      key={a.value}
                      disabled={selected[statusField] === a.value}
                      onClick={() => handleActionClick(a)}
                      className="px-3 py-1.5 text-[12px] font-medium border transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{
                        background: selected[statusField] === a.value ? '#93328f' : 'white',
                        color: selected[statusField] === a.value ? 'white' : '#374151',
                        borderColor: selected[statusField] === a.value ? '#93328f' : '#e5e7eb',
                      }}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Reply panel */}
            {reply?.enabled && (
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-3">Send Reply</dt>
                <textarea
                  value={replyBody}
                  onChange={(e) => setReplyBody(e.target.value)}
                  rows={5}
                  placeholder="Type your reply…"
                  className="w-full text-[13px] text-gray-800 border border-gray-200 p-3 outline-none focus:border-[#93328f] resize-none bg-white placeholder:text-gray-300"
                />
                <button
                  onClick={handleReply}
                  disabled={sendingReply || !replyBody.trim()}
                  className="mt-3 w-full py-2.5 text-[12px] font-bold uppercase tracking-widest text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: '#93328f' }}
                >
                  {sendingReply ? (
                    <span className="flex items-center justify-center gap-2"><Spinner />Sending…</span>
                  ) : 'Send Reply'}
                </button>
              </div>
            )}
          </div>
        )}
      </SlideOver>
    </div>
  )
}
