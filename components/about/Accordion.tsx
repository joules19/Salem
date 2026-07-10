'use client'

import { useState } from 'react'

interface AccordionItem {
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  defaultOpen?: number | null
  variant?: 'purple' | 'dark'
}

export default function Accordion({ items, defaultOpen = 0, variant = 'purple' }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen ?? null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  const trackColor = variant === 'purple' ? 'rgba(255,255,255,0.18)' : 'rgba(147,50,143,0.35)'
  const openBg = variant === 'purple' ? 'rgba(0,0,0,0.22)' : 'rgba(147,50,143,0.08)'
  const closedBg = variant === 'purple' ? 'rgba(0,0,0,0.12)' : 'transparent'
  const borderColor = variant === 'purple' ? 'rgba(255,255,255,0.12)' : 'rgba(147,50,143,0.25)'

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            style={{
              background: isOpen ? openBg : closedBg,
              border: `1px solid ${borderColor}`,
              transition: 'background 0.25s ease',
            }}
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between px-6 py-[18px] text-left group"
            >
              <span className="font-display text-[13px] font-bold tracking-[1.5px] uppercase text-white group-hover:text-gold transition-colors duration-200">
                {item.title}
              </span>
              <span
                aria-hidden
                className="flex-shrink-0 ml-4 w-[26px] h-[26px] border flex items-center justify-center transition-all duration-300"
                style={{
                  borderColor: isOpen ? 'var(--gold)' : trackColor,
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  background: isOpen ? 'var(--gold)' : 'transparent',
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#0e0010' : 'currentColor'} strokeWidth="2.5" className="w-3.5 h-3.5">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>

            <div
              className="overflow-hidden"
              style={{
                maxHeight: isOpen ? '600px' : '0px',
                transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              <div className="px-6 pb-6 pt-1 font-body text-[15px] font-light text-white/80 leading-[1.75]">
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
