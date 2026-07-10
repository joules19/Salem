import { Suspense } from 'react'
import { createClient } from '@/lib/supabase/server'
import { getUserById } from '@/lib/db/queries/users'
import { getContactStats } from '@/lib/db/queries/contact'
import { getPrayerStats } from '@/lib/db/queries/prayer'
import { getFoodBankStats } from '@/lib/db/queries/food-bank'
import { getAllUsers } from '@/lib/db/queries/users'
import { SkeletonStatCard } from '@/components/admin/Skeleton'
import Link from 'next/link'

async function Stats() {
  const [contact, prayer, foodBank, usersList] = await Promise.all([
    getContactStats(),
    getPrayerStats(),
    getFoodBankStats(),
    getAllUsers(),
  ])

  const cards = [
    {
      label: 'Contact Messages',
      total: contact.total,
      sub: `${contact.new} unread`,
      href: '/admin/submissions/contact',
      color: '#93328f',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      label: 'Prayer Requests',
      total: prayer.total,
      sub: `${prayer.new} unread`,
      href: '/admin/submissions/prayers',
      color: '#93328f',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
    },
    {
      label: 'Food Bank Requests',
      total: foodBank.total,
      sub: `${foodBank.pending} pending`,
      href: '/admin/submissions/food-bank',
      color: '#C9A227',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      ),
    },
    {
      label: 'Total Users',
      total: usersList.length,
      sub: 'Admin team',
      href: '/admin/users',
      color: '#374151',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
      {cards.map((c) => (
        <Link key={c.label} href={c.href} className="block no-underline group">
          <div className="bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-sm"
                style={{ background: `${c.color}15`, color: c.color }}
              >
                {c.icon}
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-300 group-hover:text-gray-400 transition-colors">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <div className="text-[28px] font-bold text-gray-900 leading-none mb-1">{c.total}</div>
            <div className="text-[12px] font-semibold text-gray-700 mb-1">{c.label}</div>
            <div className="text-[11px] text-gray-400">{c.sub}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const profile = user ? await getUserById(user.id) : null

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Page header */}
      <div className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: '#C9A227' }}>
          Overview
        </p>
        <h1 className="text-[28px] font-bold text-gray-900">
          Welcome back, {profile?.name?.split(' ')[0] ?? 'Admin'}
        </h1>
        <p className="text-[13px] text-gray-500 mt-1">
          Here&apos;s what&apos;s happening across the Salem community.
        </p>
      </div>

      {/* Stats */}
      <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
            {[1, 2, 3, 4].map((i) => <SkeletonStatCard key={i} />)}
          </div>
        }
      >
        <Stats />
      </Suspense>

      {/* Quick links */}
      <div className="bg-white border border-gray-100 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
          <div className="w-1 h-5 rounded-full" style={{ background: '#93328f' }} />
          <h2 className="text-[14px] font-semibold text-gray-900">Quick Actions</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'View all contact messages', href: '/admin/submissions/contact' },
            { label: 'Review prayer requests', href: '/admin/submissions/prayers' },
            { label: 'Manage food bank orders', href: '/admin/submissions/food-bank' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 p-4 border border-gray-100 hover:border-[#93328f]/30 hover:bg-purple-50/50 transition-all no-underline group"
            >
              <span className="text-[13px] text-gray-700 group-hover:text-[#93328f] transition-colors font-medium flex-1">
                {item.label}
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#93328f] transition-colors flex-shrink-0">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
