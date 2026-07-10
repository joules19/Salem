'use client'

import Spinner from '@/components/ui/Spinner'

interface AlertProps {
  title: string
  message: string
  confirmLabel?: string
  cancelLabel?: string
  onConfirm: () => void
  onCancel: () => void
  variant?: 'danger' | 'warning'
  loading?: boolean
}

export default function Alert({
  title,
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  variant = 'danger',
  loading = false,
}: AlertProps) {
  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
      <div className="bg-white max-w-sm w-full shadow-xl p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full ${variant === 'danger' ? 'bg-red-100' : 'bg-amber-100'}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-5 h-5 ${variant === 'danger' ? 'text-red-600' : 'text-amber-600'}`}>
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <div>
            <h3 className="text-[15px] font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-[13px] text-gray-500 leading-snug">{message}</p>
          </div>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            disabled={loading}
            className="px-4 py-2 text-[13px] font-medium text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors bg-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className={`px-4 py-2 text-[13px] font-medium text-white transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${variant === 'danger' ? 'bg-red-600 hover:bg-red-700' : 'bg-amber-600 hover:bg-amber-700'}`}
          >
            {loading ? (
              <span className="flex items-center gap-2"><Spinner />{confirmLabel}…</span>
            ) : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
