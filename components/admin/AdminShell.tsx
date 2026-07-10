'use client'

import { useState, useEffect, type ReactNode } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { ToastProvider, useToast } from './Toast'
import { createClient } from '@/lib/supabase/client'

const IDLE_MS = 30 * 60 * 1000   // 30 minutes
const WARN_MS = 29 * 60 * 1000   // warn 1 minute before
const EVENTS = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'] as const

function IdleGuard() {
  const { toast } = useToast()

  useEffect(() => {
    let logoutTimer: ReturnType<typeof setTimeout>
    let warnTimer: ReturnType<typeof setTimeout>

    function reset() {
      clearTimeout(logoutTimer)
      clearTimeout(warnTimer)

      warnTimer = setTimeout(() => {
        toast('You will be signed out in 1 minute due to inactivity.', 'info')
      }, WARN_MS)

      logoutTimer = setTimeout(async () => {
        const supabase = createClient()
        await supabase.auth.signOut()
        window.location.assign('/admin/login?error=timeout')
      }, IDLE_MS)
    }

    reset()
    EVENTS.forEach((ev) => window.addEventListener(ev, reset, { passive: true }))

    return () => {
      clearTimeout(logoutTimer)
      clearTimeout(warnTimer)
      EVENTS.forEach((ev) => window.removeEventListener(ev, reset))
    }
  }, [toast])

  return null
}

export interface AdminUser {
  id: string
  name: string
  email: string
  role: string
  roleLabel: string
}

interface Props {
  user: AdminUser
  children: ReactNode
}

export default function AdminShell({ user, children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <ToastProvider>
      <IdleGuard />
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar — desktop */}
        <aside className="hidden lg:flex w-60 flex-col bg-white border-r border-gray-100 flex-shrink-0">
          <Sidebar role={user.role} />
        </aside>

        {/* Sidebar — mobile drawer */}
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 z-[150] bg-black/30 backdrop-blur-[2px] lg:hidden"
              onClick={() => setSidebarOpen(false)}
              aria-hidden
            />
            <aside className="fixed top-0 left-0 bottom-0 z-[160] w-72 bg-white flex flex-col shadow-xl lg:hidden">
              <Sidebar role={user.role} onClose={() => setSidebarOpen(false)} />
            </aside>
          </>
        )}

        {/* Main area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <Topbar
            name={user.name}
            email={user.email}
            role={user.role}
            roleLabel={user.roleLabel}
            onMenuClick={() => setSidebarOpen(true)}
          />
          <main className="flex-1 overflow-y-auto p-5 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </ToastProvider>
  )
}
