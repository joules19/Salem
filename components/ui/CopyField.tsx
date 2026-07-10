'use client'

import { useState, useCallback } from 'react'

interface CopyFieldProps {
  label: string
  value: string
}

export default function CopyField({ label, value }: CopyFieldProps) {
  const [state, setState] = useState<'idle' | 'copied'>('idle')

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value)
      setState('copied')
      setTimeout(() => setState('idle'), 2000)
    } catch {
      // fallback for older browsers
      const el = document.createElement('textarea')
      el.value = value
      el.style.position = 'fixed'
      el.style.opacity = '0'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setState('copied')
      setTimeout(() => setState('idle'), 2000)
    }
  }, [value])

  const copied = state === 'copied'

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="w-full text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      aria-label={`Copy ${label}: ${value}`}
    >
      <div
        className="flex items-center justify-between px-5 py-4 gap-4 transition-all duration-200"
        style={{
          background: copied
            ? 'rgba(201,162,39,0.12)'
            : 'rgba(147,50,143,0.1)',
          border: copied
            ? '1px solid rgba(201,162,39,0.45)'
            : '1px solid rgba(147,50,143,0.22)',
        }}
      >
        <div>
          <p className="font-display text-[9px] font-bold tracking-[2px] uppercase text-white/40 mb-1">
            {label}
          </p>
          <p
            className="font-display text-[24px] font-black tracking-[4px] leading-none transition-colors duration-200"
            style={{ color: copied ? 'var(--gold)' : 'white' }}
          >
            {value}
          </p>
        </div>

        {/* Icon container */}
        <div
          className="relative w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-200"
          style={{
            border: copied
              ? '1px solid rgba(201,162,39,0.55)'
              : '1px solid rgba(201,162,39,0.2)',
            background: copied ? 'rgba(201,162,39,0.15)' : 'transparent',
          }}
          aria-hidden
        >
          {/* Copy icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-4 h-4 absolute transition-all duration-200"
            style={{
              color: 'rgba(201,162,39,0.6)',
              opacity: copied ? 0 : 1,
              transform: copied ? 'scale(0.6)' : 'scale(1)',
            }}
          >
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>

          {/* Check icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 absolute transition-all duration-200"
            style={{
              color: 'var(--gold)',
              opacity: copied ? 1 : 0,
              transform: copied ? 'scale(1)' : 'scale(0.6)',
            }}
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>

      {/* Copied confirmation bar */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: copied ? '28px' : '0px' }}
      >
        <div
          className="flex items-center gap-2 px-5 py-1"
          style={{ background: 'rgba(201,162,39,0.08)' }}
        >
          <span
            className="w-[5px] h-[5px] rounded-full bg-gold flex-shrink-0"
            style={{ animation: copied ? 'blink 1.2s ease infinite' : 'none' }}
            aria-hidden
          />
          <span className="font-display text-[9px] font-bold tracking-[2px] uppercase text-gold">
            Copied to clipboard
          </span>
        </div>
      </div>
    </button>
  )
}
