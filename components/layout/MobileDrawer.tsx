'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const drawerLinks = [
  { group: 'Discover' },
  { label: 'About Us', href: '/about-us' },
  { label: 'New to Salem', href: '/new-to-salem' },
  { group: 'Events & Community' },
  { label: 'Events', href: '/events' },
  { label: 'Food Bank', href: '/food-bank' },
  { label: 'Online', href: '/online' },
  { label: 'Community', href: '/new-to-salem#community' },
  { group: 'Connect' },
  { label: 'KDF Centers', href: '#' },
  { label: 'Contact us', href: '/contact-us' },
  // { label: 'Give', href: '/give' },

]

interface Props {
  open: boolean
  onClose: () => void
}

export default function MobileDrawer({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const linkCls = (href: string) => {
    const active = pathname === href || (href !== '/' && pathname.startsWith(href.split('#')[0]))
    return `font-display text-[12px] font-bold tracking-[2px] uppercase py-4 border-b border-white/[.07] flex items-center justify-between transition-all no-underline ${active
        ? 'text-gold pl-1.5 border-l-2 border-l-gold'
        : 'text-white/75 hover:text-gold hover:pl-1.5'
      }`
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/65 backdrop-blur-[3px] z-[190] transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal
        aria-label="Navigation menu"
        aria-hidden={!open}
        className={`fixed top-0 right-0 bottom-0 w-[min(320px,85vw)] z-[195] flex flex-col transition-transform duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          background: 'linear-gradient(160deg, #180018 0%, #0e0010 100%)',
          borderLeft: '1px solid rgba(147,50,143,0.4)',
          padding: '28px 32px 48px',
        }}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          className="self-end border border-white/[.12] text-white/75 p-2 flex items-center justify-center mb-8 transition-all hover:text-gold hover:border-gold/50 cursor-pointer bg-transparent"
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <Link
          href="/give"
          onClick={onClose}
          className="font-display text-[11px] font-extrabold tracking-[2.5px] uppercase text-[#0e0010] bg-gold px-6 py-[14px] text-center mb-7 hover:opacity-85 transition-opacity no-underline block"
        >
          Give
        </Link>

        <ul className="list-none flex flex-col flex-1 overflow-y-auto">
          {drawerLinks.map((item, i) => {
            if ('group' in item) {
              return (
                <li
                  key={i}
                  className="font-display text-[9px] font-extrabold tracking-[3px] uppercase text-gold/70 pt-[22px] pb-1 first:pt-0"
                >
                  {item.group}
                </li>
              )
            }
            return (
              <li key={i}>
                <Link href={item.href} onClick={onClose} className={linkCls(item.href)}>
                  {item.label}
                  <span className="text-[18px] opacity-35 transition-all group-hover:opacity-100">›</span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-[22px] pt-7 border-t border-[#93328f]/30 mt-5">
          <a href="https://www.youtube.com/channel/UC7B3rQRKN5_4rvhFQoNEiwQ" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors flex items-center" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/Salemeurope" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors flex items-center" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/salemeurope" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors flex items-center" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://x.com/salemeurope" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold transition-colors flex items-center" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
