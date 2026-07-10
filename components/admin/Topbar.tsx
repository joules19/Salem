'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import RoleBadge from './RoleBadge'
import Spinner from '@/components/ui/Spinner'

interface Props {
  name: string
  email: string
  role: string
  roleLabel: string
  onMenuClick: () => void
}

export default function Topbar({ name, email, role, roleLabel, onMenuClick }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [signingOut, setSigningOut] = useState(false)

  async function handleSignOut() {
    setSigningOut(true)
    const supabase = createClient()
    await supabase.auth.signOut()
    window.location.assign('/admin/login')
  }

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center px-4 lg:px-6 gap-4 flex-shrink-0 z-[100] relative">
      {/* Hamburger — mobile only */}
      <button
        onClick={onMenuClick}
        className="lg:hidden w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 bg-transparent border-0 cursor-pointer"
        aria-label="Open navigation"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Brand mark — mobile */}
      <div className="lg:hidden flex items-center gap-2">
        <div className="w-6 h-6 flex items-center justify-center" style={{ background: '#93328f' }}>
          <span className="text-white font-bold text-[9px]">S</span>
        </div>
        <span className="text-[12px] font-semibold text-gray-800">Salem Admin</span>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <RoleBadge role={role} label={roleLabel} />

        {/* User menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-2 bg-transparent border-0 cursor-pointer p-1"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0"
              style={{ background: '#93328f' }}
            >
              {name.charAt(0).toUpperCase()}
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-[12px] font-medium text-gray-800 leading-tight">{name}</div>
              <div className="text-[11px] text-gray-400">{email}</div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-gray-400 hidden sm:block">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {menuOpen && (
            <>
              <div className="fixed inset-0 z-[90]" onClick={() => setMenuOpen(false)} />
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 shadow-lg z-[91]">
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="text-[12px] font-medium text-gray-800">{name}</div>
                  <div className="text-[11px] text-gray-400 truncate">{email}</div>
                </div>
                <button
                  onClick={handleSignOut}
                  disabled={signingOut}
                  className="w-full text-left px-4 py-3 text-[13px] text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2 bg-transparent border-0 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {signingOut ? (
                    <Spinner className="h-4 w-4" />
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                  )}
                  {signingOut ? 'Signing out…' : 'Sign out'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
