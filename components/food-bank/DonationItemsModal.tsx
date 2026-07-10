'use client'

import { useEffect, useRef } from 'react'

interface Props {
  open: boolean
  onClose: () => void
}

const categories: { heading: string; items: string[] }[] = [
  {
    heading: 'Tinned Goods',
    items: [
      'Baked beans',
      'Chicken in sauce',
      'Fruit (tinned)',
      'Hot dogs',
      'Meatballs',
      'Mild curry sauces (tinned/bottled)',
      'Other beans (red kidney beans, chickpeas…)',
      'Pasta sauce (tinned/bottled)',
      'Peas',
      'Potatoes',
      'Red meat (bolognaise, mince, stewed, chilli, corned, ham…)',
      'Rice pudding',
      'Soup',
      'Sweetcorn',
      'Tomatoes',
    ],
  },
  {
    heading: 'Cereals, Grains & Staples',
    items: [
      'Cereal',
      'Packets of rice (500g if possible)',
      'Porridge oats',
      'Powdered mashed potato (like Smash)',
      'Sugar (small bags if possible, 500g)',
    ],
  },
  {
    heading: 'Beverages',
    items: [
      'Bottles of squash',
      'Hot chocolate',
      'Jars of coffee',
      'UHT juice',
      'UHT semi-skimmed milk',
      'UHT whole milk',
    ],
  },
  {
    heading: 'Snacks & Spreads',
    items: [
      'Biscuits',
      'Crackers (cream crackers or similar)',
      'Jam or marmalade',
      'Jars of curry sauce to go with rice',
      'Jars of sandwich paste',
      'Snacks (snack bars, small bags of nuts, dried fruit…)',
    ],
  },
  {
    heading: 'Other',
    items: [
      'Custard',
      'Jars or pouches of baby food',
      'Used, clean, strong "bags for life" / strong carrier bags',
    ],
  },
]

export default function DonationItemsModal({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
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
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/75 backdrop-blur-[4px] z-[300] transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal
        aria-label="Foods needed for the food parcel"
        aria-hidden={!open}
        className={`fixed inset-0 z-[310] flex items-center justify-center px-4 pt-[88px] pb-4 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div
          className="relative w-full max-w-[720px] max-h-[92vh] overflow-y-auto"
          style={{
            background: 'linear-gradient(160deg, #1a0018 0%, #0e0010 100%)',
            border: '1px solid rgba(147,50,143,0.45)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gold top bar */}
          <div className="h-[3px] w-full bg-gold" />

          <div className="p-8 max-md:p-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="font-display text-[9px] font-bold tracking-[3px] uppercase text-gold mb-1">
                  Willing Donors
                </p>
                <h2 className="font-display text-[20px] font-black uppercase tracking-[-0.5px] text-white">
                  Foods for the Food Parcel
                </h2>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                className="flex-shrink-0 border border-white/[.12] text-white/60 p-2 hover:text-gold hover:border-gold/40 transition-all bg-transparent cursor-pointer"
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Categories */}
            <div className="flex flex-col gap-6 mb-7">
              {categories.map((cat) => (
                <div key={cat.heading}>
                  <p className="font-display text-[11px] font-bold tracking-[2px] uppercase text-gold mb-3">
                    {cat.heading}
                  </p>
                  <ul className="flex flex-col">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="group relative flex items-center gap-3 pl-2 pr-1 py-[10px] text-[15px] text-white/75 font-light leading-[1.5] transition-all duration-200 hover:text-white hover:pl-4 hover:bg-[rgba(201,162,39,0.05)] border-b border-[rgba(147,50,143,0.14)] hover:border-[rgba(201,162,39,0.2)] cursor-default select-none"
                      >
                        {/* Left accent bar */}
                        <span
                          className="absolute left-0 top-[3px] bottom-[3px] w-[2px] bg-gold origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-200"
                          aria-hidden
                        />
                        {/* Bullet */}
                        <span
                          className="w-[6px] h-[6px] rounded-full bg-gold/45 flex-shrink-0 transition-all duration-200 group-hover:bg-gold group-hover:scale-[1.5] group-hover:shadow-[0_0_6px_rgba(201,162,39,0.8)]"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Warning */}
            <div
              className="flex items-start gap-3 px-5 py-4 mb-6"
              style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.3)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 flex-shrink-0 text-red-400 mt-0.5" aria-hidden>
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/><circle cx="12" cy="17" r="1" fill="currentColor"/>
              </svg>
              <p className="text-[13px] text-white/70 font-light leading-[1.6]">
                <strong className="text-white/90">Please note:</strong> We do not accept perishable food items such as
                fresh vegetables, eggs, fresh meat, or fresh fish.
              </p>
            </div>

            {/* Point of Donation */}
            <div
              className="relative overflow-hidden mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(147,50,143,0.18) 0%, rgba(74,24,71,0.35) 100%)',
                border: '1px solid rgba(147,50,143,0.4)',
              }}
            >
              {/* Subtle corner orb */}
              <div
                className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top right, rgba(201,162,39,0.1) 0%, transparent 70%)' }}
                aria-hidden
              />

              {/* Gold top rule */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" aria-hidden />

              <div className="p-6">
                <p className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-5 flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5" aria-hidden>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  Point of Donation
                </p>

                <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4">
                  {/* Church name */}
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.3)' }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-gold" aria-hidden>
                        <path d="M3 22V9l9-7 9 7v13H3z"/>
                        <path d="M9 22V12h6v10"/>
                        <path d="M12 2v4M10 4h4"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-display text-[9px] font-bold tracking-[2px] uppercase text-white/40 mb-1">Church</p>
                      <p className="text-[13px] text-white/90 font-light leading-[1.55]">
                        Salem International<br />Christian Centre
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.3)' }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-gold" aria-hidden>
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <path d="M3 9h18M9 21V9"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-display text-[9px] font-bold tracking-[2px] uppercase text-white/40 mb-1">Address</p>
                      <address className="not-italic text-[13px] text-white/90 font-light leading-[1.55]">
                        Unit 11C, New Horizon<br />Business Park<br />
                        The Pinnacle, Barrows Road
                      </address>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.3)' }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-gold" aria-hidden>
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-display text-[9px] font-bold tracking-[2px] uppercase text-white/40 mb-1">Location</p>
                      <p className="text-[13px] text-white/90 font-light leading-[1.55]">
                        Harlow, Essex<br />
                        <span className="font-display font-bold tracking-[1px] text-gold text-[12px]">CM19 5FN</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sign-off */}
            <p className="text-center font-serif italic text-[15px] text-gold/70 mb-6">
              Thank you and God bless you.
            </p>

            <button onClick={onClose} className="btn-gold w-full">Close →</button>
          </div>
        </div>
      </div>
    </>
  )
}
