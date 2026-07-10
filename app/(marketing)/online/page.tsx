import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Divider from '@/components/ui/Divider'
import PrayerForm from '@/components/online/PrayerForm'

export const metadata: Metadata = {
  title: 'Online',
  description:
    'Watch Salem live, access sermon videos, podcasts and moments online. Join our digital community and stay connected with Salem International Christian Centre.',
  alternates: { canonical: 'https://salemeurope.org/online' },
  openGraph: {
    title: 'Online | Salem International Christian Centre',
    description: 'Watch Salem live, access sermon videos, podcasts and moments online.',
    url: 'https://salemeurope.org/online',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Salem International Christian Centre' }],
  },
  twitter: {
    title: 'Online | Salem International Christian Centre',
    description: 'Watch Salem live, access sermon videos, podcasts and moments online.',
    images: ['/images/hero.jpg'],
  },
}

const mediaCards = [
  {
    id: 'sermon-videos',
    label: 'Sermon Videos',
    sub: 'Links to our YouTube page',
    href: 'https://www.youtube.com/channel/UC7B3rQRKN5_4rvhFQoNEiwQ',
    image: '/images/youtube_img.png',
    imageAlt: 'Archbishop Sam Amaga preaching',
    badge: null,
    icon: (
      <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-900/50">
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>
    ),
  },
  {
    id: 'podcasts',
    label: 'Podcasts',
    sub: 'of past sermons and more',
    href: 'https://www.youtube.com/channel/UC7B3rQRKN5_4rvhFQoNEiwQ',
    image: '/images/podcast_img.png',
    imageAlt: 'Salem congregation worship',
    badge: null,
    icon: (
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: 'rgba(147,50,143,0.9)', boxShadow: '0 8px 24px rgba(147,50,143,0.5)' }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
          <circle cx="12" cy="12" r="3" />
          <path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4" />
          <path d="M3.5 3.5a13 13 0 0 0 0 17M20.5 3.5a13 13 0 0 1 0 17" />
        </svg>
      </div>
    ),
  },
  {
    id: 'live-stream',
    label: 'Live Stream',
    sub: 'Every Sunday with Bishop David Onimisi',
    href: 'https://www.facebook.com/Salemeurope',
    image: '/images/facebook_img.png',
    imageAlt: 'Bishop David Onimisi and Rev. Mrs Esther Onimisi',
    badge: (
      <div className="flex items-center gap-1.5 bg-[#1877f2] px-3 py-1 text-white font-display text-[10px] font-bold tracking-[1px]">
        <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        LIVE
      </div>
    ),
    icon: null,
  },
  {
    id: 'moments',
    label: 'Moments',
    sub: 'When the presence of God overflows',
    href: 'https://www.youtube.com/channel/UC7B3rQRKN5_4rvhFQoNEiwQ',
    image: '/images/moments_img.png',
    imageAlt: 'Salem worship moments',
    badge: null,
    icon: (
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: 'rgba(201,162,39,0.9)', boxShadow: '0 8px 24px rgba(201,162,39,0.4)' }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>
    ),
  },
]

const connectCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Join Our Community',
    body: 'We would love to get to know you and welcome you into one of our community groups. Send us a message using the button below.',
    cta: 'Get in Touch',
    href: '#connect-form',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Send Your Testimonies',
    body: 'Are you thankful for anything our Father in Heaven has done in your life? We would love to know and rejoice with you.',
    cta: 'Share Your Story',
    href: '#connect-form',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    title: 'Let\'s Pray Together',
    body: 'At Salem, we worship and pray for each other as a community, strong in faith in the power of God. Send us your prayer request.',
    cta: 'Send Prayer Request',
    href: '#connect-form',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Leadership Training',
    body: 'If you desire training, send us a message and one of our team leaders will get back to you with steps on how to get involved.',
    cta: 'Start Training',
    href: '/new-to-salem#training',
  },
]

export default function OnlinePage() {
  return (
    <main id="main">

      {/* ── HERO — 4 MEDIA CARDS ── */}
      <section
        aria-labelledby="online-heading"
        className="relative overflow-hidden"
        style={{ minHeight: '92vh' }}
      >
        {/* Background */}
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

        {/* Purple-dark gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(170deg, rgba(14,0,16,0.92) 0%, rgba(42,13,40,0.60) 40%, rgba(14,0,16,0.97) 100%)',
          }}
        />

        {/* Dot grid */}
        <div aria-hidden className="absolute inset-0 hero-grid-pattern opacity-25" />

        {/* Decorative orbit rings — right */}
        <svg
          aria-hidden
          viewBox="0 0 500 500"
          className="absolute -right-24 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.055] pointer-events-none"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="0.8"
        >
          {[230, 185, 140, 95, 50].map((r) => (
            <circle key={r} cx="250" cy="250" r={r} />
          ))}
          <line x1="250" y1="20" x2="250" y2="480" />
          <line x1="20" y1="250" x2="480" y2="250" />
          <line x1="87" y1="87" x2="413" y2="413" />
          <line x1="413" y1="87" x2="87" y2="413" />
        </svg>

        {/* Gold orb — top left */}
        <div
          aria-hidden
          className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,162,39,0.10) 0%, transparent 65%)',
            animation: 'orb1 14s ease-in-out infinite',
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-[52px] max-md:px-6 pt-[140px] pb-[80px] max-md:pt-28 max-md:pb-14">

          {/* Heading */}
          <div className="text-center mb-16 max-md:mb-10" style={{ animation: 'fadeUp 0.85s ease both' }}>
            <SectionEyebrow className="justify-center mb-5">Salem Europe</SectionEyebrow>
            <h1
              id="online-heading"
              className="font-display font-black uppercase text-white leading-[0.92] tracking-[-1px]"
              style={{ fontSize: 'clamp(50px, 9vw, 108px)' }}
            >
              Online<br /><span className="text-gold">Mediums.</span>
            </h1>
            <div className="mx-auto mt-6 h-[3px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="mt-6 font-body text-[16px] text-white/60 max-w-lg mx-auto">
              Access sermons, live worship, and community resources — wherever you are in the world.
            </p>
          </div>

          {/* 4 Media Cards */}
          <div
            className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1 flex-1"
            style={{ animation: 'fadeUp 0.95s ease 0.15s both', minHeight: '420px' }}
          >
            {mediaCards.map(({ id, label, sub, href, image, imageAlt, badge, icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden block no-underline h-full"
                style={{
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 2,
                  minHeight: '420px',
                }}
                aria-label={label}
              >
                {/* Card image */}
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                />

                {/* Dark gradient scrim */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(14,0,16,0.95) 0%, rgba(14,0,16,0.50) 45%, rgba(14,0,16,0.15) 100%)',
                  }}
                />

                {/* Badge top-left (e.g. Facebook LIVE) */}
                {badge && (
                  <div className="absolute top-4 left-4 z-10">
                    {badge}
                  </div>
                )}

                {/* Play / icon — centre */}
                {icon && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-90 group-hover:opacity-100 transition-opacity">
                    {icon}
                  </div>
                )}

                {/* Label — bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-6 pt-8">
                  <div className="font-display text-[14px] font-black tracking-[1.5px] uppercase text-white mb-1">
                    {label}
                  </div>
                  <div className="font-body text-[12px] text-white/60 leading-snug">
                    {sub}
                  </div>
                </div>

                {/* Gold bottom border reveal on hover */}
                <div
                  aria-hidden
                  className="absolute bottom-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: 'var(--gold)' }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── WORD FOR TODAY / WISDOM FOR LIVING ── */}
      <section
        aria-labelledby="word-heading"
        className="relative overflow-hidden"
      >
        {/* Decorative wave */}
        <svg
          aria-hidden
          viewBox="0 0 1440 200"
          className="absolute top-0 left-0 w-full opacity-[0.06] pointer-events-none"
          preserveAspectRatio="none"
        >
          <path d="M0,100 C360,200 720,0 1080,100 C1260,150 1380,120 1440,110 L1440,0 L0,0 Z" fill="var(--gold)" />
        </svg>

        {/* Orb purple right */}
        <div
          aria-hidden
          className="absolute -right-20 top-0 w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(147,50,143,0.12) 0%, transparent 65%)',
            animation: 'orb2 16s ease-in-out infinite',
          }}
        />

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] max-md:px-6 py-[96px] max-md:py-16">
          <RevealWrapper>
            <div
              className="grid grid-cols-2 max-md:grid-cols-1 overflow-hidden"
              style={{ border: '1px solid rgba(147,50,143,0.25)' }}
            >
              {/* Left — big label */}
              <div
                className="flex flex-col justify-center px-14 py-16 max-md:px-8 max-md:py-10 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #2a0d28 0%, #6e2469 60%, #93328f 100%)',
                }}
              >
                {/* Dot pattern */}
                <div className="absolute inset-0 band-pattern opacity-60" aria-hidden />
                {/* Large faint text watermark */}
                <div
                  aria-hidden
                  className="absolute bottom-[-20px] left-[-10px] font-display font-black text-white/[.05] leading-none select-none pointer-events-none"
                  style={{ fontSize: 120 }}
                >
                  WORD
                </div>
                <div className="relative z-[1]">
                  <SectionEyebrow className="mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    Daily Devotion
                  </SectionEyebrow>
                  <h2
                    id="word-heading"
                    className="font-display font-black uppercase text-white leading-[0.9]"
                    style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
                  >
                    Word<br />For<br />Today.
                  </h2>
                </div>
              </div>

              {/* Right — verse */}
              <div
                className="px-14 py-16 max-md:px-8 max-md:py-10"
                style={{ background: 'rgba(147,50,143,0.06)', borderLeft: '1px solid rgba(147,50,143,0.20)' }}
              >
                <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-6 underline underline-offset-4">
                  Wisdom for Living
                </div>

                <div className="font-display text-[12px] font-bold tracking-[1.5px] uppercase text-white/60 mb-3">
                  Romans 5:17 KJV
                </div>

                <blockquote className="font-serif text-[18px] italic text-white/85 leading-[1.85] mb-7 border-l-4 border-gold pl-6">
                  &ldquo;For if by one man&apos;s offence death reigned by one; much more they which receive
                  abundance of grace and of the gift of righteousness shall reign in life by one,
                  Jesus Christ.&rdquo;
                </blockquote>

                <div
                  className="pt-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-3">
                    Application
                  </div>
                  <p className="font-body text-[15px] text-white/70 leading-relaxed">
                    A triumphant life is now yours in Christ Jesus. Take charge.
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="purple" />

      {/* ── NEW TO SALEM CTA ── */}
      <section
        aria-labelledby="nts-heading"
        className="relative overflow-hidden"
        style={{ minHeight: '55vh' }}
      >
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover object-[center_60%]"
          sizes="100vw"
          style={{ filter: 'grayscale(85%) brightness(0.22)' }}
          aria-hidden
        />

        {/* Gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,0,16,0.65) 0%, rgba(74,24,71,0.50) 50%, rgba(14,0,16,0.80) 100%)',
          }}
        />

        {/* Starburst art */}
        <svg
          aria-hidden
          viewBox="0 0 500 500"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.04] pointer-events-none"
          fill="none"
          stroke="white"
          strokeWidth="0.6"
        >
          {Array.from({ length: 20 }).map((_, i) => {
            const a = (i * 18 * Math.PI) / 180
            return <line key={i} x1={250} y1={250} x2={250 + 240 * Math.sin(a)} y2={250 - 240 * Math.cos(a)} />
          })}
          {[230, 170, 110, 60].map((r) => <circle key={r} cx={250} cy={250} r={r} />)}
        </svg>

        <div className="relative z-10 max-w-[1280px] mx-auto px-[52px] max-md:px-6 py-[100px] max-md:py-16 flex flex-col items-center text-center">
          <RevealWrapper>
            <SectionEyebrow className="justify-center mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Join the Family
            </SectionEyebrow>
            <h2
              id="nts-heading"
              className="section-h2 mb-7"
            >
              New to Salem?
            </h2>
            <p className="font-body text-[17px] text-white/70 max-w-xl leading-relaxed mb-3">
              God has sent us with a mandate, to be a major player in the revival of Europe.
              You can be part of this army of revival. I look forward to seeing you.
            </p>
            <p className="font-display text-[11px] font-bold tracking-[1.5px] text-gold mb-10">
              Bishop David &amp; Rev. Esther Onimisi
            </p>
            <Link href="/new-to-salem" className="btn-gold">
              More Info
            </Link>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── 4 CONNECT CARDS ── */}
      <section
        aria-labelledby="connect-heading"
        className="band relative overflow-hidden"
      >
        <div className="band-pattern" aria-hidden />

        {/* Wave bottom */}
        <svg
          aria-hidden
          viewBox="0 0 1440 120"
          className="absolute bottom-0 left-0 w-full opacity-[0.07] pointer-events-none"
          preserveAspectRatio="none"
        >
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,70 1440,65 L1440,120 L0,120 Z" fill="white" />
        </svg>

        {/* Gold orb */}
        <div
          aria-hidden
          className="absolute right-[-80px] top-[-60px] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,162,39,0.09) 0%, transparent 65%)',
            animation: 'orb3 17s ease-in-out infinite',
          }}
        />

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] max-md:px-6 py-[96px] max-md:py-16">
          <RevealWrapper>
            <div className="text-center mb-14">
              <SectionEyebrow className="justify-center mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Get Involved
              </SectionEyebrow>
              <h2 id="connect-heading" className="section-h2">
                Connect with Us.
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {connectCards.map(({ icon, title, body, cta, href }) => (
                <a
                  key={title}
                  href={href}
                  className="group flex flex-col p-8 no-underline transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(0,0,0,0.25)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-6 text-gold transition-colors duration-200 group-hover:text-white"
                    style={{
                      background: 'rgba(201,162,39,0.10)',
                      border: '1px solid rgba(201,162,39,0.30)',
                    }}
                  >
                    {icon}
                  </div>
                  <div className="font-display text-[13px] font-black tracking-[1.5px] uppercase text-white mb-3">
                    {title}
                  </div>
                  <p className="font-body text-[13px] text-white/60 leading-relaxed flex-1 mb-6">
                    {body}
                  </p>
                  <div className="font-display text-[10px] font-bold tracking-[2px] uppercase text-gold flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                    {cta}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="purple" />

      {/* ── PRAYER / CONTACT FORM ── */}
      <section
        id="connect-form"
        aria-labelledby="form-heading"
        className="relative overflow-hidden"
        style={{ scrollMarginTop: '100px' }}
      >
        {/* Background — dark with open-book art */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0e0010 0%, #1a0420 50%, #0e0010 100%)',
          }}
        />

        {/* Diagonal line art */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(147,50,143,0.04) 0px, rgba(147,50,143,0.04) 1px, transparent 1px, transparent 52px)',
          }}
        />

        {/* Large decorative cross / compass art */}
        <svg
          aria-hidden
          viewBox="0 0 600 600"
          className="absolute right-[-80px] bottom-[-80px] w-[500px] h-[500px] opacity-[0.045] pointer-events-none"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="0.8"
        >
          {[280, 220, 160, 100, 50].map((r) => <circle key={r} cx="300" cy="300" r={r} />)}
          <line x1="300" y1="20" x2="300" y2="580" />
          <line x1="20" y1="300" x2="580" y2="300" />
          <line x1="103" y1="103" x2="497" y2="497" />
          <line x1="497" y1="103" x2="103" y2="497" />
        </svg>

        {/* Orb left */}
        <div
          aria-hidden
          className="absolute -left-20 top-1/3 w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(147,50,143,0.10) 0%, transparent 65%)',
            animation: 'orb1 14s ease-in-out infinite',
          }}
        />

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] max-md:px-6 py-[96px] max-md:py-16">
          <RevealWrapper>
            <div className="grid grid-cols-[1fr_1fr] gap-[80px] items-center max-md:grid-cols-1 max-md:gap-10">

              {/* Left — copy */}
              <div>
                <SectionEyebrow className="mb-4">We&apos;re Here for You</SectionEyebrow>
                <h2 id="form-heading" className="section-h2 mb-7">
                  Don&apos;t<br />Miss<br /><span className="text-gold">Out.</span>
                </h2>
                <p className="font-body text-[16px] text-white/70 leading-relaxed mb-8">
                  Send us your prayer requests, testimonies, or simply say hello.
                  Our team reads every message and we believe in the power of
                  community prayer.
                </p>
                <div className="flex flex-col gap-5">
                  {[
                    { icon: '✦', label: 'Prayer Requests', detail: 'We pray over every request' },
                    { icon: '✦', label: 'Testimonies', detail: 'Share what God has done' },
                    { icon: '✦', label: 'Connect', detail: 'Join a community group' },
                  ].map(({ icon, label, detail }) => (
                    <div key={label} className="flex items-start gap-4">
                      <span className="text-gold text-[10px] mt-[5px] flex-shrink-0">{icon}</span>
                      <div>
                        <div className="font-display text-[12px] font-bold tracking-[1.5px] uppercase text-white">{label}</div>
                        <div className="font-body text-[13px] text-white/50">{detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — form */}
              <div>
                <PrayerForm />
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── STAY CONNECTED ── */}
      <section
        aria-labelledby="social-heading"
        className="relative overflow-hidden"
        style={{ background: 'var(--purple)' }}
      >
        <div className="band-pattern" aria-hidden />

        {/* Orb */}
        <div
          aria-hidden
          className="absolute -right-16 -bottom-16 w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,162,39,0.10) 0%, transparent 65%)',
            animation: 'orb2 15s ease-in-out infinite',
          }}
        />

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] max-md:px-6 py-[96px] max-md:py-16">
          <RevealWrapper>
            <div className="text-center mb-14">
              <SectionEyebrow className="justify-center mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Follow Us
              </SectionEyebrow>
              <h2 id="social-heading" className="section-h2">
                Stay Connected.
              </h2>
              <p className="mt-5 font-body text-[15px] text-white/65 max-w-md mx-auto">
                Stay updated with sermons, events, and community life across all our platforms.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-lg:grid-cols-2">
              {[
                {
                  name: 'YouTube',
                  handle: '@SalemEurope',
                  sub: 'Sermons, Live Streams & More',
                  href: 'https://www.youtube.com/channel/UC7B3rQRKN5_4rvhFQoNEiwQ',
                  accent: '#ff0000',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
                {
                  name: 'Facebook',
                  handle: 'Salem Intl Christian Centre',
                  sub: 'Community & Live Prayer',
                  href: 'https://www.facebook.com/Salemeurope',
                  accent: '#1877f2',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  name: 'Instagram',
                  handle: '@SalemEurope',
                  sub: 'Moments & Daily Inspiration',
                  href: 'https://www.instagram.com/salemeurope',
                  accent: '#e1306c',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
              ].map(({ name, handle, sub, href, accent, icon }) => (
                <a
                  key={name}
                  href={href}
                  className="group flex items-center gap-5 p-7 no-underline transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(0,0,0,0.28)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={`${name} — ${handle}`}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: accent, color: 'white', boxShadow: `0 4px 20px ${accent}55` }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div className="font-display text-[13px] font-bold tracking-[1px] uppercase text-white mb-0.5">
                      {name}
                    </div>
                    <div className="font-display text-[11px] font-bold text-gold mb-1">{handle}</div>
                    <div className="font-body text-[12px] text-white/50">{sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />

    </main>
  )
}
