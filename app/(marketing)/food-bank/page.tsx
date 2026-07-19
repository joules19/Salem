import type { Metadata } from 'next'
import Image from 'next/image'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Divider from '@/components/ui/Divider'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import FoodBankInteractive from '@/components/food-bank/FoodBankInteractive'
import WillingDonorsCTA from '@/components/food-bank/WillingDonorsCTA'

export const metadata: Metadata = {
  title: 'Food Bank',
  description:
    'Salem Food Bank — serving anyone in need in Harlow and surrounding areas. Open every Wednesday 1pm–4pm. Food parcels available for individuals and families of all sizes.',
  alternates: { canonical: 'https://salemeurope.org/food-bank' },
  openGraph: {
    title: 'Salem Food Bank — Salem International Christian Centre',
    description:
      'Open every Wednesday 1pm–4pm in Harlow. We provide food parcels for individuals and families — no questions asked.',
    url: 'https://salemeurope.org/food-bank',
  },
}

const parcels = [
  { num: '1', label: 'One Person', desc: 'A weekly food parcel tailored for a single individual.' },
  { num: '2', label: 'Two-Person Family', desc: 'Sufficient provisions for a couple or two-person household.' },
  { num: '3', label: 'Four-Person Family', desc: 'A generous parcel for families of three to four.' },
  { num: '4', label: 'Other', desc: 'Speak to our team about larger household requirements.' },
]

const steps = [
  {
    step: '01',
    title: 'Complete the SHFB Form',
    body: 'Fill in your details using the "Request a Parcel" form on this page. You will receive a unique reference code by email.',
    cta: true,
  },
  {
    step: '02',
    title: 'Receive Your Code',
    body: 'A reference code will be sent to your email address. Keep this safe — you will need it every time you collect.',
    cta: false,
  },
  {
    step: '03',
    title: 'Collect Your Parcel',
    body: 'Bring your reference code and a valid photo ID to our premises every Wednesday between 1pm and 4pm.',
    cta: false,
  },
]

export default function FoodBankPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex items-center pt-[76px] overflow-hidden"
        aria-labelledby="fb-heading"
      >
        {/* Background image */}
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{ filter: 'grayscale(70%) brightness(0.28)' }}
          aria-hidden
        />
        {/* Deep overlay */}
        <div
          aria-hidden
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,0,16,0.72) 0%, rgba(74,24,71,0.60) 50%, rgba(14,0,16,0.88) 100%)',
          }}
        />
        {/* Dot grid */}
        <div className="hero-grid-pattern absolute inset-0 z-[2] opacity-40" aria-hidden />

        {/* Content */}
        <div className="relative z-[3] max-w-[1280px] mx-auto px-[52px] py-[72px] w-full max-md:px-6 max-md:py-14">
          <div className="grid grid-cols-[1.1fr_1fr] gap-[72px] items-center max-lg:grid-cols-1 max-lg:gap-12">

            {/* ── Left — text ── */}
            <div>
              <div className="inline-flex items-center gap-3 font-display text-[10px] font-bold tracking-[4px] uppercase text-gold mb-5 animate-fade-up">
                <span className="w-7 h-px bg-gold flex-shrink-0" aria-hidden />
                Community Service · Salem International Christian Centre
              </div>

              <h1
                id="fb-heading"
                className="font-display font-black uppercase leading-[.9] tracking-[-2px] mb-5 animate-fade-up-d1"
                style={{ fontSize: 'clamp(46px, 5.5vw, 84px)' }}
              >
                <span className="block text-white">Salem</span>
                <span className="block text-gold">Food</span>
                <span className="block text-white">Bank</span>
              </h1>

              <p className="font-serif text-[18px] max-md:text-[16px] italic text-white/65 leading-[1.7] max-w-[480px] mb-8 animate-fade-up-d2">
                &ldquo;For I was hungry and you gave Me food; I was thirsty and you gave Me drink.&rdquo;
                <span className="block font-display not-italic text-[9px] tracking-[3px] uppercase text-gold mt-2 font-bold">
                  Matthew 25:35 (NKJV)
                </span>
              </p>

              {/* Interactive CTA buttons + modals */}
              <FoodBankInteractive />
            </div>

            {/* ── Right — collection info cards ── */}
            <div className="flex flex-col gap-4 animate-fade-up-d2">

              {/* Main collection card */}
              <div
                className="relative overflow-hidden"
                style={{
                  background: 'rgba(147,50,143,0.12)',
                  border: '1px solid rgba(147,50,143,0.38)',
                  padding: '28px 30px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Gold left accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gold" aria-hidden />
                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at top right, rgba(201,162,39,0.1) 0%, transparent 70%)' }}
                  aria-hidden
                />

                <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-3">
                  Weekly Collection
                </div>
                <div
                  className="font-display font-black text-white tracking-[-1.5px] leading-none mb-1"
                  style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
                >
                  1PM &mdash; 4PM
                </div>
                <div className="font-display text-[13px] font-bold tracking-[3px] uppercase text-white/55 mb-4">
                  Every Wednesday
                </div>

                <p className="text-[13px] text-white/55 font-light leading-[1.65] mb-4">
                  Unit 11C, New Horizon Business Centre<br />
                  The Pinnacles, Barrows Road<br />
                  Harlow, Essex CM19&nbsp;5FN
                </p>

                <div className="inline-flex items-center gap-2 bg-gold text-[#0e0010] font-display text-[10px] font-extrabold tracking-[2px] uppercase px-3 py-[6px]">
                  <span
                    className="w-[7px] h-[7px] rounded-full bg-[#0e0010] flex-shrink-0"
                    style={{ animation: 'blink 1.4s ease infinite' }}
                    aria-hidden
                  />
                  Open Every Week
                </div>
              </div>

              {/* Stat cards row */}
              <div
                className="grid grid-cols-3 gap-px"
                style={{ background: 'rgba(147,50,143,0.3)', border: '1px solid rgba(147,50,143,0.3)' }}
              >
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-gold" aria-hidden>
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                        <polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/>
                      </svg>
                    ),
                    val: '4',
                    label: 'Parcel Sizes',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-gold" aria-hidden>
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    ),
                    val: 'Free',
                    label: 'No Cost',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-gold" aria-hidden>
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    ),
                    val: 'All',
                    label: 'Welcome',
                  },
                ].map(({ icon, val, label }) => (
                  <div key={label} className="bg-[#0e0010] py-5 px-3 flex flex-col items-center gap-2 text-center">
                    {icon}
                    <div className="font-display text-[18px] font-black text-gold leading-none">{val}</div>
                    <div className="font-display text-[8px] tracking-[2px] uppercase text-white/45">{label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section
        className="relative overflow-hidden py-[72px] max-md:py-[52px] px-[52px] max-md:px-6"
        style={{ background: '#0e0010' }}
      >
        {/* Purple radial — top left */}
        <div
          className="absolute top-0 left-0 w-[480px] h-[480px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at top left, rgba(147,50,143,0.13) 0%, transparent 65%)' }}
          aria-hidden
        />
        {/* Gold radial — bottom right */}
        <div
          className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(circle at bottom right, rgba(201,162,39,0.06) 0%, transparent 65%)' }}
          aria-hidden
        />
        {/* Cross watermark */}
        <div
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ opacity: 0.04 }}
          aria-hidden
        >
          <svg viewBox="0 0 200 200" className="w-72 h-72 text-gold fill-current">
            <rect x="85" y="0" width="30" height="200" />
            <rect x="0" y="85" width="200" height="30" />
          </svg>
        </div>

        <div className="relative z-[1] max-w-[820px] mx-auto">
          <RevealWrapper>
            <SectionEyebrow className="mb-3">Our Mission</SectionEyebrow>
            <h2 className="font-display text-[28px] max-md:text-[22px] font-black uppercase tracking-[-0.5px] text-white mb-5">
              Reaching Our Neighbourhood
            </h2>
            <p className="text-[16px] text-white/75 font-light leading-[1.75] mb-4">
              Salem International Christian Church Harlow is on a mission to reach out and support those in our neighbourhood who require help with food this season. We believe that the love of Christ is made real through tangible acts of service — and the food bank is one of the most direct ways we can demonstrate that love to the people of Harlow and the surrounding areas.
            </p>
            <p className="text-[16px] text-white/75 font-light leading-[1.75]">
              No referral, no church membership, and no questions are needed. If you are in need, we are here for you.
            </p>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />


      {/* ── Food Parcel Categories ── */}
      <section
        className="py-[72px] max-md:py-[52px] px-[52px] max-md:px-6"
        style={{ background: 'linear-gradient(160deg, #150012 0%, #0e0010 60%, #150012 100%)' }}
        aria-labelledby="parcels-heading"
      >
        <div className="max-w-[1100px] mx-auto">
          <RevealWrapper>
            <div className="text-center mb-12 max-md:mb-8">
              <SectionEyebrow className="mb-3">What We Provide</SectionEyebrow>
              <h2
                id="parcels-heading"
                className="font-display text-[34px] max-md:text-[24px] font-black uppercase tracking-[-0.5px] text-white"
              >
                Food Parcel Categories
              </h2>
              <p className="text-[15px] text-white/55 mt-3 max-w-[480px] mx-auto font-light">
                The church&apos;s food bank issues a parcel of dried goods in four categories.
              </p>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
            {parcels.map((p) => (
              <RevealWrapper key={p.num}>
                <div
                  className="flex items-start gap-5 p-6"
                  style={{ background: 'rgba(147,50,143,0.07)', border: '1px solid rgba(147,50,143,0.22)' }}
                >
                  <span
                    className="font-display text-[36px] font-black leading-none flex-shrink-0"
                    style={{ color: 'rgba(201,162,39,0.3)' }}
                    aria-hidden
                  >
                    {p.num}
                  </span>
                  <div>
                    <h3 className="font-display text-[13px] font-extrabold uppercase tracking-[2px] text-gold mb-1.5">
                      {p.label}
                    </h3>
                    <p className="text-[13px] text-white/60 font-light leading-[1.65]">{p.desc}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      <Divider variant="purple" />

      {/* ── How to Receive ── */}
      <section
        className="relative overflow-hidden py-[72px] max-md:py-[52px] px-[52px] max-md:px-6"
        style={{ background: '#0e0010' }}
        aria-labelledby="how-heading"
      >
        {/* Gold radial — top right */}
        <div
          className="absolute top-0 right-0 w-[520px] h-[520px] pointer-events-none"
          style={{ background: 'radial-gradient(circle at top right, rgba(201,162,39,0.07) 0%, transparent 60%)' }}
          aria-hidden
        />
        {/* Purple radial — bottom left */}
        <div
          className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(circle at bottom left, rgba(147,50,143,0.12) 0%, transparent 65%)' }}
          aria-hidden
        />
        {/* Concentric rings — centred, process motif */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ opacity: 0.035 }}
          aria-hidden
        >
          <svg viewBox="0 0 400 400" className="w-[560px] h-[560px]" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--gold)' }}>
            <circle cx="200" cy="200" r="75" />
            <circle cx="200" cy="200" r="130" />
            <circle cx="200" cy="200" r="185" />
          </svg>
        </div>

        <div className="relative z-[1] max-w-[1100px] mx-auto">
          <RevealWrapper>
            <div className="text-center mb-12 max-md:mb-8">
              <SectionEyebrow className="mb-3">Simple Process</SectionEyebrow>
              <h2
                id="how-heading"
                className="font-display text-[34px] max-md:text-[24px] font-black uppercase tracking-[-0.5px] text-white"
              >
                How to Receive a Parcel
              </h2>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mb-10">
            {steps.map((s) => (
              <RevealWrapper key={s.step}>
                <div
                  className="p-7 max-md:p-6 h-full flex flex-col"
                  style={{
                    background: 'linear-gradient(135deg, rgba(147,50,143,0.12) 0%, rgba(147,50,143,0.04) 100%)',
                    border: '1px solid rgba(147,50,143,0.25)',
                  }}
                >
                  <p className="font-display text-[10px] font-extrabold tracking-[3px] uppercase text-gold mb-3">
                    Step {s.step}
                  </p>
                  <h3 className="font-display text-[14px] font-black uppercase tracking-[0.5px] text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-white/60 font-light leading-[1.7] flex-1">{s.body}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>

          {/* Hours callout */}
          <RevealWrapper>
            <div
              className="flex items-center gap-5 p-6 max-md:flex-col max-md:text-center"
              style={{ background: 'rgba(201,162,39,0.06)', border: '1px solid rgba(201,162,39,0.28)' }}
            >
              <svg
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                className="w-9 h-9 flex-shrink-0 max-md:mx-auto"
                style={{ color: 'var(--gold)' }}
                aria-hidden
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <p className="text-[16px] text-white font-light">
                The food bank is open{' '}
                <strong className="font-semibold">every Wednesday</strong> between{' '}
                <strong className="font-semibold">1pm and 4pm</strong>.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── Willing Donors ── */}
      <section
        className="py-[72px] max-md:py-[52px] px-[52px] max-md:px-6"
        style={{ background: 'linear-gradient(135deg, var(--purple-darker), var(--purple-dark))' }}
        aria-labelledby="donors-heading"
      >
        <div className="max-w-[860px] mx-auto text-center">
          <RevealWrapper>
            <SectionEyebrow className="mb-3">Make a Difference</SectionEyebrow>
            <h2
              id="donors-heading"
              className="font-display text-[34px] max-md:text-[24px] font-black uppercase tracking-[-0.5px] text-white mb-5"
            >
              Willing Donors
            </h2>
            <p className="text-[15px] text-white/70 font-light leading-[1.75] mb-4 max-w-[660px] mx-auto">
              We sincerely appreciate the generosity of those who would like to contribute to the food parcels given to those in need. Click the button below to see the full list of items we need — your donation goes directly to someone who requires it most.
            </p>
            <p className="text-[15px] text-white/70 font-light leading-[1.75] mb-9 max-w-[660px] mx-auto">
              Financial donations are also warmly welcomed. Every contribution, large or small, makes a real difference to a family in our community.
            </p>
            <WillingDonorsCTA />
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="purple" />

      {/* ── Location ── */}
      <section
        className="relative overflow-hidden py-[52px] max-md:py-[40px] px-[52px] max-md:px-6 text-center"
        style={{ background: '#0e0010' }}
      >
        {/* Centred gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 55% 120% at 50% 50%, rgba(201,162,39,0.06) 0%, transparent 70%)' }}
          aria-hidden
        />
        {/* Map-pin watermark */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ opacity: 0.04 }}
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="w-64 h-64 text-gold fill-current">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          </svg>
        </div>

        <RevealWrapper>
          <p className="font-display text-[10px] font-extrabold tracking-[3px] uppercase text-gold mb-3">Find Us</p>
          <p className="text-[15px] text-white/65 font-light">
            Unit 11C, New Horizon Business Centre, The Pinnacles, Barrows Road, Harlow, Essex CM19 5FN
          </p>
          <p className="text-[14px] text-white/45 font-light mt-1.5">
            Every Wednesday &middot; 1pm – 4pm
          </p>
        </RevealWrapper>
      </section>
    </>
  )
}
