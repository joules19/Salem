'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { type ReactNode } from 'react'

interface NavItem {
  href: string
  label: string
  icon: ReactNode
  badge?: number
  superAdminOnly?: boolean
}

const navItems: NavItem[] = [
  {
    href: '/admin/dashboard',
    label: 'Dashboard',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    href: '/admin/submissions/contact',
    label: 'Contact',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    href: '/admin/submissions/prayers',
    label: 'Prayer Requests',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    href: '/admin/submissions/food-bank',
    label: 'Food Bank',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    href: '/admin/users',
    label: 'Users',
    superAdminOnly: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    href: '/admin/audit-log',
    label: 'Audit Log',
    superAdminOnly: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
]

interface Props {
  role: string
  onClose?: () => void
}

export default function Sidebar({ role, onClose }: Props) {
  const pathname = usePathname()
  const isSuperAdmin = role === 'super_admin'

  const visible = navItems.filter((item) => !item.superAdminOnly || isSuperAdmin)

  return (
    <nav className="flex flex-col h-full" aria-label="Admin navigation">
      {/* Logo */}
      <div className="flex-shrink-0 border-b border-gray-100 px-5 py-4">
        <Image
          src="/images/Logo-Final1.png"
          alt="Salem International Christian Centre"
          width={110}
          height={36}
          className="h-9 w-auto"
        />
        <div className="mt-1 text-[10px] uppercase tracking-widest text-gray-400">
          Admin Panel
        </div>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <div className="mb-2">
          <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Navigation</p>
          {visible.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 mb-0.5 text-[13px] font-medium transition-all duration-150 no-underline rounded-none ${active
                    ? 'text-[#93328f] bg-purple-50 border-l-[3px] border-[#93328f] pl-[9px]'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-[3px] border-transparent'
                  }`}
              >
                <span className={active ? 'text-[#93328f]' : 'text-gray-400'}>{item.icon}</span>
                {item.label}
                {item.badge ? (
                  <span className="ml-auto min-w-[20px] h-5 px-1.5 flex items-center justify-center text-[10px] font-bold text-white rounded-full" style={{ background: '#93328f' }}>
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Bottom brand accent */}
      <div className="px-6 py-5 border-t border-gray-100 flex-shrink-0">
        <div className="text-[10px] text-gray-400 leading-relaxed">
          Salem International<br />Christian Centre
        </div>
        <div className="mt-1 h-[2px] w-8" style={{ background: '#C9A227' }} />
      </div>
    </nav>
  )
}
