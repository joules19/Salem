import Link from 'next/dist/client/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[76px] overflow-hidden" aria-label="Welcome to Salem">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 80% at 60% 40%, rgba(147, 50, 143, 0.38) 0%, transparent 65%),
              radial-gradient(ellipse 50% 60% at 10% 80%, rgba(147, 50, 143, 0.18) 0%, transparent 60%),
              linear-gradient(160deg, rgba(14, 0, 16, 0.90) 0%, rgba(26, 5, 24, 0.78) 40%, rgba(14, 0, 16, 0.90) 100%)
            `,
          }}
        />
      </div>

      {/* Decorative grid */}
      <div className="hero-grid-pattern z-[1]" aria-hidden />

      {/* Animated orbs */}
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none z-[1]"
        style={{
          width: 700, height: 700,
          background: 'rgba(147, 50, 143, 0.14)',
          top: -150, right: -150,
          filter: 'blur(90px)',
          animation: 'orb1 9s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none z-[1]"
        style={{
          width: 450, height: 450,
          background: 'rgba(201, 162, 39, 0.07)',
          bottom: -80, left: '5%',
          filter: 'blur(90px)',
          animation: 'orb2 12s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none z-[1]"
        style={{
          width: 300, height: 300,
          background: 'rgba(147, 50, 143, 0.10)',
          top: '30%', left: '30%',
          filter: 'blur(90px)',
          animation: 'orb3 7s ease-in-out infinite',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-[1280px] mx-auto w-full px-[52px] py-[60px] grid grid-cols-[1.1fr_1fr] gap-[80px] items-center max-md:grid-cols-1 max-md:px-6 max-md:text-center max-md:gap-10">

        {/* Left — headline */}
        <div>
          <div className="font-display text-[11px] font-bold tracking-[4px] uppercase text-gold mb-[22px] flex items-center gap-[14px] animate-fade-up max-md:justify-center">
            <span className="w-9 h-px bg-gold flex-shrink-0 max-md:hidden" aria-hidden />
            Salem International Christian Centre
          </div>

          <h1
            className="font-display font-black uppercase leading-[.88] tracking-[-2px] mb-[30px] animate-fade-up-d1"
            style={{ fontSize: 'clamp(58px, 7.5vw, 104px)' }}
          >
            <span className="block">Raising</span>
            <span className="block text-gold">A Great</span>
            <span
              className="block"
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.5)', color: 'transparent' }}
            >
              Army.
            </span>
          </h1>

          <p className="font-serif text-[19px] italic font-normal text-white/75 leading-[1.75] max-w-[460px] mb-10 animate-fade-up-d2 max-md:mx-auto">
            A Pentecostal Assembly on a God-given mandate — baptised into Jesus by one Spirit, united across nations and ethnicities, on mission for the revival of Europe.
          </p>

          <div className="flex gap-4 flex-wrap items-center animate-fade-up-d2 max-md:justify-center">
            <Link href="/new-to-salem" className="btn-gold">New to Salem?</Link>
            <Link href="/about-us" className="btn-ghost">More About Us</Link>
          </div>
        </div>

        {/* Right — service info panel */}
        <div className="flex flex-col gap-4 animate-fade-up-d2">

          {/* Service box: in-person */}
          <div
            className="relative overflow-hidden"
            style={{
              background: 'rgba(147, 50, 143, 0.12)',
              border: '1px solid rgba(147, 50, 143, 0.35)',
              padding: '26px 30px',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gold" aria-hidden />
            <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-2">
              Sunday Services
            </div>
            <div className="font-display text-[38px] font-black text-white tracking-[-1px] leading-none">
              10AM &mdash; 12PM
            </div>
            <p className="text-[13px] text-white/75 mt-1.5 font-light leading-[1.5]">
              Unit 11C, New Horizon Business Centre, The Pinnacles, Barrows Road, Harlow, Essex CM19 5FN
            </p>
            <div className="inline-flex items-center gap-1.5 bg-gold text-[#0e0010] font-display text-[10px] font-extrabold tracking-[2px] uppercase px-3 py-[5px] mt-[10px]">
              <span className="w-[7px] h-[7px] rounded-full bg-[#0e0010]" style={{ animation: 'blink 1.4s ease infinite' }} aria-hidden />
              Live Every Sunday
            </div>
          </div>

          {/* Service box: online */}
          <div
            className="relative overflow-hidden"
            style={{
              background: 'rgba(147, 50, 143, 0.12)',
              border: '1px solid rgba(147, 50, 143, 0.35)',
              padding: '26px 30px',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gold" aria-hidden />
            <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-2">
              Stream Online
            </div>
            <div className="font-display text-[38px] font-black text-white tracking-[-1px] leading-none">
              @SalemEurope
            </div>
            <p className="text-[13px] text-white/75 mt-1.5 font-light leading-[1.5]">
              Watch live on YouTube every Sunday &bull; Free bus from Stratford London @ 8:45AM &amp; 9AM (from Harlow)
            </p>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-3 gap-px"
            style={{
              background: 'rgba(147, 50, 143, 0.3)',
              border: '1px solid rgba(147, 50, 143, 0.3)',
            }}
          >
            {[
              { val: '2026', label: 'Conquest of Love' },
              { val: 'Sundays', label: 'Harlow, Essex' },
              { val: 'Global', label: 'Online Access' },
            ].map(({ val, label }) => (
              <div key={label} className="bg-[#0e0010] py-[18px] px-4 text-center">
                <div className="font-display text-[20px] font-black text-gold leading-none">{val}</div>
                <div className="font-display text-[9px] tracking-[2px] uppercase text-white/50 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
