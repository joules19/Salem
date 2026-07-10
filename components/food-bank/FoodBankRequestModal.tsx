'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'

interface Props {
  open: boolean
  onClose: () => void
}

type Step = 'form' | 'loading' | 'success'

const PARCEL_OPTIONS = [
  { value: 'one', label: 'One Person' },
  { value: 'two', label: 'Two Persons Family' },
  { value: 'four', label: 'Four Persons Family' },
  { value: 'other', label: 'Other' },
] as const

export default function FoodBankRequestModal({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const [step, setStep] = useState<Step>('form')
  const [code, setCode] = useState('')
  const [apiError, setApiError] = useState('')

  // Form state
  const [consent, setConsent] = useState<'accept' | 'refuse' | ''>('')
  const [benefactor, setBenefactor] = useState<'new' | 'existing' | ''>('')
  const [parcel, setParcel] = useState<'one' | 'two' | 'four' | 'other' | ''>('')
  const [parcelOther, setParcelOther] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [honey, setHoney] = useState('')

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

  function resetForm() {
    setStep('form')
    setCode('')
    setApiError('')
    setConsent('')
    setBenefactor('')
    setParcel('')
    setParcelOther('')
    setName('')
    setPhone('')
    setEmail('')
    setHoney('')
  }

  function handleClose() {
    onClose()
    // Delay reset so exit animation plays first
    setTimeout(resetForm, 400)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (consent !== 'accept') return
    setApiError('')
    setStep('loading')

    try {
      const res = await fetch('/api/food-bank/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cookieConsent: consent,
          benefactorType: benefactor,
          parcelSize: parcel,
          parcelSizeOther: parcel === 'other' ? parcelOther : undefined,
          name,
          phone,
          email,
          _honey: honey,
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.')
      setCode(data.code ?? '')
      setStep('success')
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Something went wrong.')
      setStep('form')
    }
  }

  const inputCls =
    'w-full bg-transparent border text-white text-[14px] font-light px-4 py-3 outline-none transition-colors placeholder:text-white/30 focus:border-gold/70'
  const radioCls = (selected: boolean) =>
    `flex items-start gap-3 p-4 cursor-pointer transition-all border ${
      selected
        ? 'border-gold/60 bg-gold/8'
        : 'border-white/[.12] hover:border-white/25 bg-transparent'
    }`

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/75 backdrop-blur-[4px] z-[300] transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={handleClose}
        aria-hidden
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal
        aria-label="Salem Food Bank Order Request"
        aria-hidden={!open}
        className={`fixed inset-0 z-[310] flex items-center justify-center px-4 pt-[88px] pb-4 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={(e) => e.target === e.currentTarget && handleClose()}
      >
        <div
          className="relative w-full max-w-[600px] max-h-[92vh] overflow-y-auto"
          style={{
            background: 'linear-gradient(160deg, #1a0018 0%, #0e0010 100%)',
            border: '1px solid rgba(147,50,143,0.45)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(147,50,143,0.15)',
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
                  Salem Harlow Food Bank
                </p>
                <h2 className="font-display text-[20px] font-black uppercase tracking-[-0.5px] text-white">
                  Order Request
                </h2>
              </div>
              <button
                ref={closeRef}
                onClick={handleClose}
                className="flex-shrink-0 border border-white/[.12] text-white/60 p-2 hover:text-gold hover:border-gold/40 transition-all bg-transparent cursor-pointer"
                aria-label="Close form"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* ── Success state ── */}
            {step === 'success' && (
              <div className="text-center py-6">
                <div
                  className="w-14 h-14 mx-auto mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.4)' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-gold">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-[18px] font-black uppercase text-white mb-2">Order Received</h3>
                <p className="text-[14px] text-white/60 mb-7 font-light leading-[1.65]">
                  A confirmation has been sent to <strong className="text-white/80">{email}</strong>. Your unique reference code is:
                </p>
                <div
                  className="px-6 py-5 mb-7"
                  style={{ background: 'rgba(147,50,143,0.15)', border: '1px solid rgba(201,162,39,0.4)' }}
                >
                  <p className="font-display text-[9px] font-bold tracking-[3px] uppercase text-gold mb-2">Reference Code</p>
                  <p className="font-display text-[30px] font-black tracking-[5px] text-gold">{code}</p>
                </div>
                <p className="text-[13px] text-white/50 font-light leading-[1.65] mb-7">
                  Please bring this code and a valid photo ID to collect your parcel.<br />
                  <strong className="text-white/70">Every Wednesday · 1pm – 4pm</strong>
                </p>
                <button onClick={handleClose} className="btn-gold">Close</button>
              </div>
            )}

            {/* ── Loading state ── */}
            {step === 'loading' && (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <svg className="animate-spin" width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="rgba(201,162,39,0.2)" strokeWidth="2.5" />
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="#C9A227" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <p className="font-display text-[11px] font-bold tracking-[2px] uppercase text-white/50">
                  Submitting…
                </p>
              </div>
            )}

            {/* ── Form ── */}
            {step === 'form' && (
              <form onSubmit={handleSubmit} noValidate>
                <p className="text-[13px] text-white/60 font-light leading-[1.65] mb-6">
                  After completing this form you will be sent a reference code via email, which you must bring with your photo ID to collect your pre-packed food basket.
                  <span className="block mt-1 text-white/45">Only dried foods are offered.</span>
                </p>

                {/* Error banner */}
                {apiError && (
                  <div
                    className="flex items-center gap-3 px-4 py-3 mb-5 text-[13px] text-white/80"
                    style={{ background: 'rgba(220,38,38,0.12)', border: '1px solid rgba(220,38,38,0.35)' }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 flex-shrink-0 text-red-400">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><circle cx="12" cy="16" r="1" fill="currentColor" />
                    </svg>
                    {apiError}
                  </div>
                )}

                {/* ── Cookie / terms consent ── */}
                <fieldset className="mb-6 border-0 p-0">
                  <legend className="font-display text-[10px] font-bold tracking-[2.5px] uppercase text-gold mb-3">
                    Terms &amp; Conditions <span className="text-red-400 ml-0.5" aria-hidden>*</span>
                  </legend>
                  <div className="flex flex-col gap-2">
                    {([['accept', 'I accept'], ['refuse', 'I refuse (No food parcel will be offered)']] as const).map(([val, lbl]) => (
                      <label key={val} className={radioCls(consent === val)}>
                        <input
                          type="radio"
                          name="consent"
                          value={val}
                          checked={consent === val}
                          onChange={() => setConsent(val)}
                          className="mt-0.5 accent-gold flex-shrink-0"
                          required
                        />
                        <span className={`text-[13px] font-light ${consent === val ? 'text-white' : 'text-white/60'}`}>{lbl}</span>
                      </label>
                    ))}
                  </div>
                  {consent === 'refuse' && (
                    <p className="text-[12px] text-red-400/80 mt-2 pl-1">
                      You must accept the terms to proceed with your order.
                    </p>
                  )}
                </fieldset>

                {/* Rest of form — only shown after consent */}
                {consent === 'accept' && (
                  <>
                    {/* ── New / existing ── */}
                    <fieldset className="mb-6 border-0 p-0">
                      <legend className="font-display text-[10px] font-bold tracking-[2.5px] uppercase text-gold mb-3">
                        Are you a new or existing benefactor? <span className="text-red-400 ml-0.5" aria-hidden>*</span>
                      </legend>
                      <div className="flex flex-col gap-2">
                        {([['new', 'I am a new benefactor'], ['existing', 'I am an existing benefactor']] as const).map(([val, lbl]) => (
                          <label key={val} className={radioCls(benefactor === val)}>
                            <input
                              type="radio"
                              name="benefactor"
                              value={val}
                              checked={benefactor === val}
                              onChange={() => setBenefactor(val)}
                              className="mt-0.5 accent-gold flex-shrink-0"
                              required
                            />
                            <span className={`text-[13px] font-light ${benefactor === val ? 'text-white' : 'text-white/60'}`}>{lbl}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    {/* ── Parcel size ── */}
                    <fieldset className="mb-6 border-0 p-0">
                      <legend className="font-display text-[10px] font-bold tracking-[2.5px] uppercase text-gold mb-1">
                        Parcel size <span className="text-red-400 ml-0.5" aria-hidden>*</span>
                      </legend>
                      <p className="text-[11px] text-white/40 font-light mb-3">
                        Please come with proof of family size (IDs for all persons counted).
                      </p>
                      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
                        {PARCEL_OPTIONS.map(({ value, label }) => (
                          <label key={value} className={radioCls(parcel === value)}>
                            <input
                              type="radio"
                              name="parcel"
                              value={value}
                              checked={parcel === value}
                              onChange={() => setParcel(value)}
                              className="mt-0.5 accent-gold flex-shrink-0"
                              required
                            />
                            <span className={`text-[13px] font-light ${parcel === value ? 'text-white' : 'text-white/60'}`}>{label}</span>
                          </label>
                        ))}
                      </div>
                      {parcel === 'other' && (
                        <div className="mt-3">
                          <input
                            type="text"
                            value={parcelOther}
                            onChange={(e) => setParcelOther(e.target.value)}
                            placeholder="Please specify…"
                            maxLength={120}
                            className={inputCls}
                            style={{ borderColor: 'rgba(147,50,143,0.4)' }}
                          />
                        </div>
                      )}
                    </fieldset>

                    {/* ── Personal details ── */}
                    <div className="flex flex-col gap-4 mb-6">
                      <div>
                        <label className="block font-display text-[10px] font-bold tracking-[2.5px] uppercase text-gold mb-2">
                          Full Name <span className="text-red-400 ml-0.5" aria-hidden>*</span>
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Person collecting the food parcel"
                          required
                          minLength={2}
                          maxLength={100}
                          autoComplete="name"
                          className={inputCls}
                          style={{ borderColor: 'rgba(147,50,143,0.4)' }}
                        />
                      </div>

                      <div>
                        <label className="block font-display text-[10px] font-bold tracking-[2.5px] uppercase text-gold mb-2">
                          Contact Phone Number <span className="text-red-400 ml-0.5" aria-hidden>*</span>
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+44 7700 000000"
                          required
                          minLength={7}
                          maxLength={20}
                          autoComplete="tel"
                          className={inputCls}
                          style={{ borderColor: 'rgba(147,50,143,0.4)' }}
                        />
                      </div>

                      <div>
                        <label className="block font-display text-[10px] font-bold tracking-[2.5px] uppercase text-gold mb-2">
                          Email Address <span className="text-red-400 ml-0.5" aria-hidden>*</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                          maxLength={200}
                          autoComplete="email"
                          className={inputCls}
                          style={{ borderColor: 'rgba(147,50,143,0.4)' }}
                        />
                      </div>
                    </div>

                    {/* Honeypot — visually hidden from humans */}
                    <div aria-hidden style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                      <label htmlFor="fb-website">Website</label>
                      <input
                        id="fb-website"
                        type="text"
                        name="website"
                        value={honey}
                        onChange={(e) => setHoney(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!consent || !benefactor || !parcel || !name || !phone || !email}
                      className="btn-gold w-full disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      Place Order →
                    </button>

                    <p className="text-[11px] text-white/30 font-light text-center mt-4">
                      Your details are kept confidential and used only to process your food parcel request.
                    </p>
                  </>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
