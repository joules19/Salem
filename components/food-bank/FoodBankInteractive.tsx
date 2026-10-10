'use client'

import { useEffect, useState } from 'react'
import FoodBankRequestModal from './FoodBankRequestModal'
import DonationItemsModal from './DonationItemsModal'

// ─── Config ───────────────────────────────────────────────────────────────────
// Set NEXT_PUBLIC_FOOD_BANK_FORM=google in .env.local to use the Google Form.
// Any other value (or unset) uses the native FoodBankRequestModal.
const USE_GOOGLE_FORM = process.env.NEXT_PUBLIC_FOOD_BANK_FORM === 'google'
const GOOGLE_FORM_URL =
  (process.env.NEXT_PUBLIC_FOOD_BANK_GOOGLE_FORM_URL ??
    'https://docs.google.com/forms/d/e/1FAIpQLSccqiJCwniHw4uR4guvpLeWyFUKdxIFQ5VegbDhOroz9QgVBg/viewform') +
  '?embedded=true'
// ─────────────────────────────────────────────────────────────────────────────

function GoogleFormModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/75 backdrop-blur-[4px] z-[300] transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal
        aria-label="Food Bank Request Form"
        aria-hidden={!open}
        className={`fixed inset-0 z-[310] flex items-center justify-center px-4 pt-[88px] pb-4 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div
          className="relative w-full max-w-[640px] flex flex-col"
          style={{
            height: 'min(82vh, 780px)',
            background: 'linear-gradient(160deg, #1a0018 0%, #0e0010 100%)',
            border: '1px solid rgba(147,50,143,0.45)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-[3px] w-full bg-gold flex-shrink-0" />
          <div className="flex items-center justify-between px-6 py-4 flex-shrink-0" style={{ borderBottom: '1px solid rgba(147,50,143,0.25)' }}>
            <div>
              <p className="font-display text-[9px] font-bold tracking-[3px] uppercase text-gold mb-0.5">Salem Harlow Food Bank</p>
              <h2 className="font-display text-[18px] font-black uppercase tracking-[-0.5px] text-white">Order Request</h2>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 border border-white/[.12] text-white/60 p-2 hover:text-gold hover:border-gold/40 transition-all bg-transparent cursor-pointer"
              aria-label="Close form"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <iframe
            src={GOOGLE_FORM_URL}
            className="flex-1 w-full"
            title="Food Bank Order Request"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </>
  )
}

export default function FoodBankInteractive() {
  const [requestOpen, setRequestOpen] = useState(false)
  const [donationOpen, setDonationOpen] = useState(false)

  return (
    <>
      <div className="flex items-center gap-4 flex-wrap animate-fade-up-d2">
        <button onClick={() => setRequestOpen(true)} className="btn-gold">
          Request a Parcel →
        </button>
        <button
          onClick={() => setDonationOpen(true)}
          className="btn-ghost"
          style={{ borderColor: 'rgba(255,255,255,.35)' }}
        >
          See What We Need
        </button>
      </div>

      {USE_GOOGLE_FORM
        ? <GoogleFormModal open={requestOpen} onClose={() => setRequestOpen(false)} />
        : <FoodBankRequestModal open={requestOpen} onClose={() => setRequestOpen(false)} />
      }
      <DonationItemsModal open={donationOpen} onClose={() => setDonationOpen(false)} />
    </>
  )
}
