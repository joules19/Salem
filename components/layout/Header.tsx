'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import MobileDrawer from './MobileDrawer'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLink = (active: boolean) =>
    `relative font-display text-[9px] font-bold tracking-[1.5px] uppercase px-[13px] py-[10px] block no-underline transition-colors duration-200
    after:content-[''] after:absolute after:bottom-1 after:left-[13px] after:right-[13px] after:h-[2px] after:bg-gold after:origin-left after:transition-transform after:duration-200
    ${active ? 'text-white after:scale-x-100' : 'text-white/75 hover:text-white after:scale-x-0 hover:after:scale-x-100'}`

  const isEvents = pathname === '/events'

  const sep = (
    <li className="w-px h-4 bg-white/[.12] mx-1.5 flex-shrink-0 self-center" aria-hidden />
  )

  return (
    <>
      <nav
        id="site-nav"
        className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between h-[76px] px-[52px] max-md:px-5 backdrop-blur-[20px] transition-all duration-300 ${scrolled
            ? 'bg-[#0e0010]/[.98] border-b border-[#93328f]/50 shadow-[0_2px_32px_rgba(0,0,0,0.55)]'
            : 'bg-[#0e0010]/[.92] border-b border-[#93328f]/30'
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/Logo-Final.png"
            alt="Salem International Christian Centre"
            width={110}
            height={44}
            className="h-[44px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center list-none">
          <li>
            <Link href="/about-us" className={navLink(pathname === '/about-us')}>About Us</Link>
          </li>

          <li>
            <Link href="/new-to-salem" className={navLink(pathname === '/new-to-salem')}>New to Salem</Link>
          </li>

          {sep}

          {/* Events — direct link */}
          <li>
            <Link href="/events" className={navLink(isEvents)}>Events</Link>
          </li>

          <li>
            <Link href="/food-bank" className={navLink(pathname === '/food-bank')}>Food Bank</Link>
          </li>



          <li>
            <Link href="/online" className={navLink(pathname === '/online')}>Online</Link>
          </li>

          <li>
            <a href="#kdf" className={navLink(false)}>KDF Centers</a>
          </li>

          <li>
            <Link href="/new-to-salem#community" className={navLink(false)}>Community</Link>
          </li>
          {sep}

          <li>
            <Link href="/contact-us" className={navLink(pathname === '/contact-us')}>Contact us</Link>
          </li>
        </ul>

        {/* Right: socials + Give CTA + hamburger */}
        <div className="flex items-center gap-[18px]">
          <div className="hidden md:flex items-center gap-[14px]">
            <a href="https://www.youtube.com/channel/UC7B3rQRKN5_4rvhFQoNEiwQ" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold hover:-translate-y-px transition-all flex items-center" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/Salemeurope" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold hover:-translate-y-px transition-all flex items-center" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/salemeurope" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold hover:-translate-y-px transition-all flex items-center" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://x.com/salemeurope" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-gold hover:-translate-y-px transition-all flex items-center" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          <div className="hidden md:block w-px h-[22px] bg-white/[.15] flex-shrink-0" aria-hidden />

          <Link
            href="/give"
            className="hidden md:inline font-display text-[10px] font-extrabold tracking-[2.5px] uppercase text-gold border border-gold/55 px-[22px] py-[9px] whitespace-nowrap transition-all hover:bg-gold hover:text-[#0e0010] hover:border-gold hover:shadow-[0_0_20px_rgba(201,162,39,0.35)] no-underline"
          >
            Give
          </Link>

          <button
            className="flex md:hidden flex-col justify-center gap-[5px] bg-transparent border-none cursor-pointer p-1 w-9 h-9"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            aria-controls="nav-drawer"
          >
            <span className="block h-0.5 bg-white/75 rounded-sm" />
            <span className="block h-0.5 bg-white/75 rounded-sm" />
            <span className="block h-0.5 bg-white/75 rounded-sm w-[65%]" />
          </button>
        </div>
      </nav>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
