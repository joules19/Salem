'use client'

import { createContext, useCallback, useContext, useState, useEffect, type ReactNode } from 'react'

type Variant = 'success' | 'error' | 'info'

interface Toast {
  id: string
  message: string
  variant: Variant
}

interface ToastCtx {
  toast: (message: string, variant?: Variant) => void
}

const ToastContext = createContext<ToastCtx>({ toast: () => {} })

export function useToast() {
  return useContext(ToastContext)
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = useCallback((message: string, variant: Variant = 'info') => {
    const id = Math.random().toString(36).slice(2)
    setToasts((prev) => [...prev, { id, message, variant }])
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4000)
  }, [])

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const icons: Record<Variant, string> = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
  }

  const styles: Record<Variant, string> = {
    success: 'border-l-[3px] border-green-500 bg-white',
    error: 'border-l-[3px] border-red-500 bg-white',
    info: 'border-l-[3px] bg-white',
  }

  const iconStyles: Record<Variant, string> = {
    success: 'bg-green-100 text-green-600',
    error: 'bg-red-100 text-red-600',
    info: 'bg-purple-100 text-[#93328f]',
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-3 pointer-events-none" aria-live="polite">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto flex items-start gap-3 px-4 py-3 shadow-lg min-w-[280px] max-w-[360px] ${styles[t.variant]}`}
            style={{ border: '1px solid #e5e7eb', animation: 'slideInRight 0.25s ease' }}
          >
            <span className={`w-6 h-6 flex-shrink-0 flex items-center justify-center text-[11px] font-bold rounded-full ${iconStyles[t.variant]}`}>
              {icons[t.variant]}
            </span>
            <p className="text-[13px] text-gray-700 leading-snug flex-1 pt-0.5">{t.message}</p>
            <button
              onClick={() => dismiss(t.id)}
              className="text-gray-400 hover:text-gray-600 flex-shrink-0 text-[16px] leading-none bg-transparent border-0 cursor-pointer p-0"
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
