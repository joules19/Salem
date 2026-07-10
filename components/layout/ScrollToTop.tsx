'use client'

import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    const btn = document.getElementById('scroll-top')
    if (!btn) return

    const onScroll = () => {
      btn.classList.toggle('visible', window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    btn.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      btn.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <button id="scroll-top" aria-label="Scroll to top">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}
