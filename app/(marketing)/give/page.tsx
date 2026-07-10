import type { Metadata } from 'next'
import Image from 'next/image'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Divider from '@/components/ui/Divider'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import CopyField from '@/components/ui/CopyField'

export const metadata: Metadata = {
  title: 'Give',
  description:
    'Support the mission of Salem International Christian Centre. Give online via PayPal or bank transfer. Your generosity fuels local community work, church planting, and the revival of Europe.',
  alternates: { canonical: 'https://salemeurope.org/give' },
  openGraph: {
    title: 'Give — Salem International Christian Centre',
    description: 'Your giving fuels local community work, church planting, and global outreach. Give online via PayPal or direct bank transfer.',
    url: 'https://salemeurope.org/give',
    images: [{ url: '/images/giving.jpg', width: 1200, height: 630, alt: 'Give to Salem International Christian Centre' }],
  },
  twitter: {
    title: 'Give — Salem International Christian Centre',
    description: 'Support the mission. Give online via PayPal or bank transfer.',
    images: ['/images/giving.jpg'],
  },
}

const impactItems = [
  'Plant churches across Europe and beyond',
  'Send relief packages to victims of natural disaster',
  'Keep our faith-building social media platforms running',
  'Build robust campus fellowships impacting the youth',
  'Train hands for missions',
]

export default function GivePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex items-center pt-[76px] overflow-hidden"
        aria-labelledby="give-heading"
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

        <div className="relative z-[3] max-w-[1280px] mx-auto px-[52px] py-[80px] w-full max-md:px-6 max-md:py-16">
          <div className="grid grid-cols-[1.1fr_1fr] gap-[72px] items-center max-lg:grid-cols-1 max-lg:gap-12">

            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-3 font-display text-[10px] font-bold tracking-[4px] uppercase text-gold mb-5 animate-fade-up">
                <span className="w-7 h-px bg-gold flex-shrink-0" aria-hidden />
                Give · Salem International Christian Centre
              </div>

              <h1
                id="give-heading"
                className="font-display font-black uppercase leading-[.9] tracking-[-2px] mb-6 animate-fade-up-d1"
                style={{ fontSize: 'clamp(46px, 5.5vw, 84px)' }}
              >
                <span className="block text-white">Support</span>
                <span className="block text-gold">The</span>
                <span className="block text-white">Kingdom.</span>
              </h1>

              <p className="font-serif text-[19px] max-md:text-[17px] italic text-white/65 leading-[1.7] max-w-[480px] mb-8 animate-fade-up-d2">
                &ldquo;Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
                <span className="block font-display not-italic text-[9px] tracking-[3px] uppercase text-gold mt-2 font-bold">
                  2 Corinthians 9:7 (ESV)
                </span>
              </p>

              <div className="flex items-center gap-4 flex-wrap animate-fade-up-d2">
                <a
                  href="https://paypal.me/salemhq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Give via PayPal →
                </a>
                <a href="#bank-transfer" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,.35)' }}>
                  Bank Transfer
                </a>
              </div>
            </div>

            {/* Right — giving methods preview cards */}
            <div className="flex flex-col gap-4 animate-fade-up-d2">

              {/* PayPal card */}
              <a
                href="https://paypal.me/salemhq"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group block no-underline"
                style={{
                  background: 'rgba(147,50,143,0.12)',
                  border: '1px solid rgba(147,50,143,0.38)',
                  padding: '26px 28px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gold transition-all duration-300 group-hover:w-[3px]" aria-hidden />
                <div
                  className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at top right, rgba(201,162,39,0.1) 0%, transparent 70%)' }}
                  aria-hidden
                />
                <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-2">Online Giving</div>
                <div className="font-display text-[28px] font-black text-white tracking-[-0.5px] leading-none mb-1">
                  PayPal
                </div>
                <div className="font-display text-[13px] font-bold tracking-[1px] text-white/55 mb-3">
                  paypal.me/salemhq
                </div>
                <div className="inline-flex items-center gap-2 bg-gold text-[#0e0010] font-display text-[10px] font-extrabold tracking-[2px] uppercase px-3 py-[5px] transition-all duration-200 group-hover:bg-gold-light">
                  Give Now →
                </div>
              </a>

              {/* Bank stats strip */}
              <div
                className="grid grid-cols-2 gap-px"
                style={{ background: 'rgba(147,50,143,0.3)', border: '1px solid rgba(147,50,143,0.3)' }}
              >
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-gold" aria-hidden>
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <line x1="2" y1="10" x2="22" y2="10" />
                      </svg>
                    ), val: 'Bank', label: 'Transfer'
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-gold" aria-hidden>
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    ), val: 'PayPal', label: 'Online'
                  },

                ].map(({ icon, val, label }) => (
                  <div key={label} className="bg-[#0e0010] py-5 px-3 flex flex-col items-center gap-2 text-center">
                    {icon}
                    <div className="font-display text-[15px] font-black text-gold leading-none">{val}</div>
                    <div className="font-display text-[8px] tracking-[2px] uppercase text-white/45">{label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── Giving Methods ── */}
      <section
        id="bank-transfer"
        className="relative overflow-hidden py-[80px] max-md:py-[56px] px-[52px] max-md:px-6"
        style={{ background: 'linear-gradient(160deg, #150012 0%, #0e0010 60%, #150012 100%)' }}
        aria-labelledby="methods-heading"
      >
        {/* Corner glows */}
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none" style={{ background: 'radial-gradient(circle at top left, rgba(147,50,143,0.14) 0%, transparent 65%)' }} aria-hidden />
        <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom right, rgba(201,162,39,0.07) 0%, transparent 65%)' }} aria-hidden />
        {/* Subtle dot texture */}
        <div className="band-pattern absolute inset-0 opacity-[0.12]" aria-hidden />
        {/* Cross watermark — centred right, theology of generous giving */}
        <div
          className="absolute right-[-24px] top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ opacity: 0.045 }}
          aria-hidden
        >
          <svg viewBox="0 0 200 200" className="w-[340px] h-[340px] text-gold fill-current">
            <rect x="85" y="0" width="30" height="200" />
            <rect x="0" y="85" width="200" height="30" />
          </svg>
        </div>
        {/* Soft purple orb — depth */}
        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 pointer-events-none"
          style={{ width: 600, height: 220, background: 'radial-gradient(ellipse 60% 100% at 50% 100%, rgba(147,50,143,0.08) 0%, transparent 70%)', filter: 'blur(2px)' }}
          aria-hidden
        />

        <div className="relative z-[1] max-w-[1100px] mx-auto">
          <RevealWrapper>
            <div className="text-center mb-12">
              <SectionEyebrow className="mb-3">Ways to Give</SectionEyebrow>
              <h2
                id="methods-heading"
                className="font-display text-[34px] max-md:text-[26px] font-black uppercase tracking-[-0.5px] text-white"
              >
                Choose Your Method
              </h2>
              <p className="text-[15px] text-white/55 mt-3 max-w-[460px] mx-auto font-light">
                Every gift, large or small, is a seed sown into eternal ground.
              </p>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">

            {/* Bank Transfer */}
            <RevealWrapper>
              <div
                className="relative overflow-hidden h-full"
                style={{
                  background: 'rgba(147,50,143,0.08)',
                  border: '1px solid rgba(147,50,143,0.3)',
                }}
              >
                {/* Gold top bar */}
                <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" aria-hidden />

                <div className="p-8 max-md:p-6">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-5"
                    style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.3)' }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-gold" aria-hidden>
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>

                  <p className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-2">Direct Bank Transfer</p>
                  <h3 className="font-display text-[22px] font-black uppercase tracking-[-0.5px] text-white mb-6">
                    Church Account
                  </h3>

                  <div className="flex flex-col gap-4">
                    <CopyField label="Sort Code" value="20-32-06" />
                    <CopyField label="Account Number" value="03869296" />
                  </div>

                  {/* <p className="text-[12px] text-white/35 font-light mt-4 leading-[1.6]">
                    Please use your name as the payment reference so we can acknowledge your gift.
                  </p> */}
                </div>
              </div>
            </RevealWrapper>

            {/* PayPal */}
            <RevealWrapper>
              <div
                className="relative overflow-hidden h-full"
                style={{
                  background: 'rgba(147,50,143,0.08)',
                  border: '1px solid rgba(147,50,143,0.3)',
                }}
              >
                <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" aria-hidden />

                <div className="p-8 max-md:p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-5"
                    style={{ background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.3)' }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-gold" aria-hidden>
                      <rect x="1" y="4" width="22" height="16" rx="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                  </div>

                  <p className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-2">Online Payment</p>
                  <h3 className="font-display text-[22px] font-black uppercase tracking-[-0.5px] text-white mb-6">
                    PayPal
                  </h3>

                  {/* PayPal display box */}
                  <div
                    className="flex flex-col items-center justify-center text-center p-8 mb-6 flex-1"
                    style={{
                      background: 'linear-gradient(135deg, #0d1117 0%, #1a1a2e 100%)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {/* PayPal wordmark in brand blue on dark */}
                    <div className="mb-3" aria-hidden>
                      <svg viewBox="0 0 101 32" className="h-8 w-auto" aria-hidden>
                        <path fill="#009CDE" d="M12.237 2.8H6.437c-.4 0-.8.3-.8.8L3.237 18.9c0 .3.2.6.5.6h2.8c.4 0 .8-.3.8-.8l.7-4.2c.1-.4.4-.8.8-.8h1.8c3.8 0 6-1.8 6.6-5.4.3-1.6 0-2.8-.7-3.7-.8-.9-2.1-1.8-4.3-1.8zm.7 5.3c-.3 2-1.9 2-3.4 2h-.9l.6-3.8c0-.2.2-.4.4-.4h.4c1 0 2 0 2.5.6.3.4.4 1 .4 1.6z" />
                        <path fill="#003087" d="M35.437 8.1h-2.8c-.2 0-.4.2-.4.4l-.1.7-.2-.3c-.6-.9-2-1.2-3.4-1.2-3.2 0-5.9 2.4-6.4 5.8-.3 1.7.1 3.3 1 4.4.9 1 2.1 1.5 3.6 1.5 2.6 0 4-.7 4-2.6l-.1.7c0 .3.2.6.5.6h2.5c.4 0 .8-.3.8-.8l1.5-8.7c.1-.3-.2-.5-.5-.5zm-3.9 5.6c-.3 1.6-1.5 2.7-3.1 2.7-.8 0-1.4-.3-1.8-.7-.4-.5-.6-1.1-.5-1.9.3-1.6 1.6-2.7 3.1-2.7.8 0 1.4.3 1.8.7.4.5.6 1.2.5 1.9z" />
                        <path fill="#009CDE" d="M56.337 8.1h-2.8c-.2 0-.5.1-.6.3l-3.5 5.2-1.5-5c-.1-.3-.4-.5-.7-.5h-2.8c-.3 0-.6.3-.5.6l2.8 8.3-2.7 3.8c-.2.3 0 .7.3.7h2.8c.2 0 .5-.1.6-.3l8.6-12.4c.3-.4.1-.7-.2-.7z" />
                        <path fill="#003087" d="M64.237 2.8h-5.8c-.4 0-.8.3-.8.8L55.237 18.9c0 .3.2.6.5.6h3c.3 0 .5-.2.6-.5l.8-4.5c.1-.4.4-.8.8-.8h1.8c3.8 0 6-1.8 6.6-5.4.3-1.6 0-2.8-.7-3.7-.8-.9-2.1-1.8-4.4-1.8zm.7 5.3c-.3 2-1.9 2-3.4 2h-.9l.6-3.8c0-.2.2-.4.4-.4h.4c1 0 2 0 2.5.6.3.4.4 1 .4 1.6z" />
                        <path fill="#009CDE" d="M87.137 8.1h-2.8c-.2 0-.4.2-.4.4l-.1.7-.2-.3c-.6-.9-2-1.2-3.4-1.2-3.2 0-5.9 2.4-6.4 5.8-.3 1.7.1 3.3 1 4.4.9 1 2.1 1.5 3.6 1.5 2.6 0 4-.7 4-2.6l-.1.7c0 .3.2.6.5.6h2.5c.4 0 .8-.3.8-.8l1.5-8.7c.1-.3-.1-.5-.5-.5zm-3.9 5.6c-.3 1.6-1.5 2.7-3.1 2.7-.8 0-1.4-.3-1.8-.7-.4-.5-.6-1.1-.5-1.9.3-1.6 1.6-2.7 3.1-2.7.8 0 1.4.3 1.8.7.4.5.6 1.2.5 1.9z" />
                        <path fill="#003087" d="M91.037 3.1l-2.4 15.4c0 .3.2.6.5.6h2.4c.4 0 .8-.3.8-.8L94.737 3c0-.3-.2-.6-.5-.6H91.537c-.2.1-.5.3-.5.7z" />
                      </svg>
                    </div>
                    <p className="font-display text-[11px] font-bold tracking-[2px] uppercase text-white/40 mb-2">Give at</p>
                    <p className="font-display text-[22px] font-black text-white tracking-[1px]">
                      paypal.me/<span className="text-gold">salemhq</span>
                    </p>
                  </div>

                  <a
                    href="https://paypal.me/salemhq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-center w-full"
                  >
                    Give via PayPal →
                  </a>
                </div>
              </div>
            </RevealWrapper>

          </div>
        </div>
      </section>

      <Divider variant="purple" />

      {/* ── Impact of Your Gift ── */}
      <section
        className="relative overflow-hidden py-[80px] max-md:py-[56px] px-[52px] max-md:px-6"
        style={{ background: '#0e0010' }}
        aria-labelledby="impact-heading"
      >
        {/* Corner glow — gold top right */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(201,162,39,0.08) 0%, transparent 60%)' }} aria-hidden />
        {/* Corner glow — purple bottom left */}
        <div className="absolute bottom-0 left-0 w-[440px] h-[440px] pointer-events-none" style={{ background: 'radial-gradient(circle at bottom left, rgba(147,50,143,0.14) 0%, transparent 65%)' }} aria-hidden />
        {/* Dot texture — left half only */}
        <div
          className="band-pattern absolute top-0 left-0 bottom-0 w-1/2 opacity-[0.10]"
          aria-hidden
        />
        {/* Heart watermark — love expressed through giving */}
        <div
          className="absolute left-[52%] top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ opacity: 0.04 }}
          aria-hidden
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-[320px] h-[320px] text-gold">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
        {/* Thin horizontal gold rule spanning full width — mid-section depth */}
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{ top: '50%', height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(201,162,39,0.08) 30%, rgba(201,162,39,0.08) 70%, transparent 100%)' }}
          aria-hidden
        />

        <div className="relative z-[1] max-w-[1280px] mx-auto">
          <div className="grid grid-cols-[1fr_1fr] gap-[80px] items-center max-lg:grid-cols-1 max-lg:gap-12">

            {/* Left — copy */}
            <RevealWrapper>
              <SectionEyebrow className="mb-3">Why It Matters</SectionEyebrow>
              <h2
                id="impact-heading"
                className="font-display text-[36px] max-md:text-[26px] font-black uppercase tracking-[-0.5px] text-white mb-6"
              >
                Impact of<br />Your Gift
              </h2>

              <p className="text-[16px] text-white/70 font-light leading-[1.8] mb-4">
                Giving is an expression of our love for God. It&apos;s an opportunity to release what is yours into your life. Giving precedes receiving — until you give you can&apos;t receive.
              </p>
              <p className="text-[16px] text-white/70 font-light leading-[1.8] mb-7">
                Aside this supernatural result of giving, lives are changed across the globe as you help to minister the gospel of salvation.
              </p>

              <div className="mb-6">
                <p className="font-display text-[11px] font-bold tracking-[2px] uppercase text-gold mb-4">
                  When you give, you help us to:
                </p>
                <ul className="flex flex-col gap-3">
                  {impactItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-white/75 font-light leading-[1.6]">
                      <span
                        className="mt-[7px] w-[6px] h-[6px] rounded-full bg-gold flex-shrink-0"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-serif text-[18px] italic text-gold/80 leading-[1.6]">
                Therefore give with joy into this fertile soil.
              </p>
            </RevealWrapper>

            {/* Right — image */}
            <RevealWrapper>
              <div className="giving-photo-frame relative">
                <Image
                  src="/images/giving.jpg"
                  alt="Hands extended in generosity — representing the act of giving"
                  width={620}
                  height={440}
                  className="w-full object-cover object-center"
                  style={{ height: 440 }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay label */}
                <div
                  className="absolute bottom-0 right-0 px-6 py-4"
                  style={{ background: 'rgba(14,0,16,0.85)', backdropFilter: 'blur(8px)' }}
                >
                  <p className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold">Online</p>
                  <p className="font-serif text-[22px] italic text-white leading-tight">Giving</p>
                </div>
              </div>
            </RevealWrapper>

          </div>
        </div>
      </section>

      <Divider variant="gold" />


      {/* ── Footer note ── */}
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
        {/* Concentric diamond rings */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ opacity: 0.05 }}
          aria-hidden
        >
          <svg viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="0.8" className="w-[480px] h-[480px] text-gold">
            <polygon points="200,20  380,200  200,380  20,200" />
            <polygon points="200,70  330,200  200,330  70,200" />
            <polygon points="200,120 280,200  200,280  120,200" />
            <polygon points="200,160 240,200  200,240  160,200" />
          </svg>
        </div>
        <RevealWrapper>
          <p className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-3">Thank You</p>
          <p className="text-[15px] text-white/55 font-light max-w-[480px] mx-auto">
            For questions about giving or to arrange a standing order, please contact us at{' '}
            <a href="mailto:admin@salemeurope.org" className="text-white/75 hover:text-gold transition-colors">
              admin@salemeurope.org
            </a>
          </p>
        </RevealWrapper>
      </section>
    </>
  )
}
