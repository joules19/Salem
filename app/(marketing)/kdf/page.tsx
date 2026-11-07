import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import RevealWrapper from '@/components/ui/RevealWrapper'
import KDFPostcodeFinder from '@/components/sections/KDFPostcodeFinder'
import { kdfCentres } from '@/lib/kdf-centres'

export const metadata: Metadata = {
  title: 'Kingdom Dominion Force',
  description:
    'Kingdom Dominion Force (KDF) is the neighbourhood-based fellowship and outreach arm of Salem International Christian Centre — taking the Gospel to every neighbourhood, transforming lives and building stronger communities.',
  alternates: { canonical: 'https://salemeurope.org/kdf' },
  openGraph: {
    title: 'Kingdom Dominion Force | Salem International Christian Centre',
    description:
      'Taking the Gospel to Every Neighbourhood, Transforming Lives and Building Stronger Communities.',
    url: 'https://salemeurope.org/kdf',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Kingdom Dominion Force — Salem International Christian Centre',
      },
    ],
  },
  twitter: {
    title: 'Kingdom Dominion Force | Salem International Christian Centre',
    description:
      'Taking the Gospel to Every Neighbourhood, Transforming Lives and Building Stronger Communities.',
    images: ['/images/hero.jpg'],
  },
}

const objectives = [
  {
    num: '01',
    title: 'Establish Christ-Centred Fellowships',
    body: 'Vibrant KDF Centres within neighbourhoods, bringing the Church closer to the people and providing accessible opportunities for worship, prayer, fellowship and spiritual growth.',
    icon: (
      <svg viewBox="0 0 36 36" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
        <line x1="18" y1="4" x2="18" y2="32" />
        <line x1="6" y1="13" x2="30" y2="13" />
        <circle cx="18" cy="18" r="14" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Promote Spiritual Growth & Discipleship',
    body: 'Nurture believers in the knowledge of God\'s Word, strengthen their faith and equip them to live victorious Christian lives demonstrating the character and love of Jesus Christ.',
    icon: (
      <svg viewBox="0 0 36 36" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 7 C4 7 13 5 18 8 C23 5 32 7 32 7 L32 29 C32 29 23 27 18 30 C13 27 4 29 4 29 Z" />
        <line x1="18" y1="8" x2="18" y2="30" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Strengthen Fellowship & Relationships',
    body: 'Build a loving, caring and united community of believers where members develop meaningful relationships, encourage one another and support each other spiritually and practically.',
    icon: (
      <svg viewBox="0 0 36 36" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
        <circle cx="12" cy="11" r="5" />
        <path d="M2 30 C2 22 22 22 22 30" />
        <circle cx="26" cy="11" r="5" />
        <path d="M18 30 C18 22 36 22 36 30" opacity="0.45" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Advance Neighbourhood Evangelism',
    body: 'Reach individuals and families within our neighbourhoods with the Gospel of Jesus Christ, bringing salvation, hope and transformation to homes and communities.',
    icon: (
      <svg viewBox="0 0 36 36" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M6 13 L20 8 L20 28 L6 23 Z" />
        <rect x="2" y="13" width="4" height="10" rx="1" />
        <path d="M20 13 C22 11 27 10 30 9" />
        <path d="M20 18 L29 18" />
        <path d="M20 23 C22 25 27 26 30 27" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Encourage Prayer & Spiritual Revival',
    body: 'Raise prayerful believers who intercede for their families, neighbours, communities, the Church and the nations, creating an atmosphere for spiritual revival and the manifestation of God\'s power.',
    icon: (
      <svg viewBox="0 0 36 36" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M18 32 C10 32 7 25 11 20 C11 24 15 24 15 20 C15 15 17 10 22 8 C20 15 25 15 25 22 C27 20 27 15 25 10 C32 15 32 25 26 29 C26 31 23 33 18 32 Z" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Promote Care, Compassion & Support',
    body: 'Demonstrate the love of Christ through practical acts of kindness, visitation, encouragement and support for individuals and families, particularly those facing challenges or in need of care.',
    icon: (
      <svg viewBox="0 0 36 36" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M18 30 L6 18 C3 15 3 9 6 7 C9 4 14 5 18 11 C22 5 27 4 30 7 C33 9 33 15 30 18 Z" />
        <line x1="18" y1="17" x2="18" y2="23" />
        <line x1="15" y1="20" x2="21" y2="20" />
      </svg>
    ),
  },
  {
    num: '07',
    title: 'Develop & Mobilise Kingdom Leaders',
    body: 'Identify, nurture and equip believers for leadership and service, empowering them to use their God-given gifts and abilities to strengthen the Church and positively influence their communities.',
    icon: (
      <svg viewBox="0 0 36 36" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M4 26 L6 12 L14 20 L18 8 L22 20 L30 12 L32 26 Z" />
        <line x1="4" y1="30" x2="32" y2="30" />
        <circle cx="18" cy="9" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="6.5" cy="13" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="29.5" cy="13" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: '08',
    title: 'Encourage Active Participation',
    body: 'Ensure that every member of the Church is connected to a KDF Centre within their neighbourhood and actively involved in fellowship, discipleship, evangelism and the collective mission of advancing God\'s Kingdom.',
    icon: (
      <svg viewBox="0 0 36 36" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="28" cy="12" r="2.5" />
        <circle cx="28" cy="24" r="2.5" />
        <circle cx="18" cy="30" r="2.5" />
        <circle cx="8" cy="24" r="2.5" />
        <circle cx="8" cy="12" r="2.5" />
        <circle cx="18" cy="18" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

const howItWorks = [
  {
    label: 'Neighbourhood-Based',
    body: 'Every church member is expected to belong to a KDF Centre within their neighbourhood.',
  },
  {
    label: 'Weekly Fellowship',
    body: 'Each centre meets once a week at an agreed location and time convenient for its members.',
  },
  {
    label: 'Spiritual Activities',
    body: 'Meetings provide prayer, Bible study, worship, testimonies and spiritual encouragement.',
  },
  {
    label: 'Pastoral Care',
    body: 'Members care for one another and respond to the spiritual and practical needs of fellow members.',
  },
  {
    label: 'Community Outreach',
    body: 'Centres engage in neighbourhood evangelism, visitation and demonstrating the love of Christ.',
  },
]

export default function KDFPage() {
  return (
    <main id="main">

      {/* ── HERO ── */}
      <section
        aria-labelledby="kdf-heading"
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: '100dvh' }}
      >
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,0,16,0.75) 0%, rgba(74,24,71,0.6) 50%, rgba(14,0,16,0.95) 100%)',
          }}
        />
        <div aria-hidden className="absolute inset-0 hero-grid-pattern opacity-25" />

        {/* Decorative crosses */}
        <svg aria-hidden viewBox="0 0 80 80" className="absolute top-10 left-10 w-20 h-20 opacity-10 text-gold" fill="none" stroke="currentColor" strokeWidth="1">
          <line x1="40" y1="0" x2="40" y2="80" />
          <line x1="0" y1="40" x2="80" y2="40" />
          <circle cx="40" cy="40" r="38" />
          <circle cx="40" cy="40" r="20" />
        </svg>
        <svg aria-hidden viewBox="0 0 80 80" className="absolute bottom-10 right-10 w-20 h-20 opacity-10 text-gold" fill="none" stroke="currentColor" strokeWidth="1">
          <line x1="40" y1="0" x2="40" y2="80" />
          <line x1="0" y1="40" x2="80" y2="40" />
          <circle cx="40" cy="40" r="38" />
          <circle cx="40" cy="40" r="20" />
        </svg>

        {/* KDF watermark */}
        <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="font-display font-black text-white tracking-[16px] uppercase opacity-[0.035]"
            style={{ fontSize: 'clamp(72px, 18vw, 220px)' }}
          >
            KDF
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto" style={{ animation: 'fadeUp 0.9s ease both' }}>
          <SectionEyebrow className="justify-center mb-6 max-md:before:hidden">
            Sam Amaga Ministries
          </SectionEyebrow>

          <h1
            id="kdf-heading"
            className="font-display font-black uppercase text-white leading-none tracking-[-2px] mb-5"
            style={{ fontSize: 'clamp(52px, 10vw, 108px)' }}
          >
            Kingdom<br />
            <span className="text-gold">Dominion</span><br />
            Force
          </h1>

          <div className="mx-auto my-6 h-[2px] w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <p className="font-serif italic text-[17px] text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Taking the Gospel to Every Neighbourhood, Transforming Lives and Building Stronger Communities
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="#find-centre" className="btn-gold">
              Find Your Centre
            </a>
            <a
              href="#about-kdf"
              className="font-display text-[10px] font-bold tracking-[2px] uppercase text-white/60 hover:text-white transition-colors no-underline"
            >
              Learn More ↓
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-gold to-transparent" />
        </div>
      </section>

      {/* ── ABOUT KDF ── */}
      <section id="about-kdf" className="band" aria-labelledby="about-heading">
        <div className="band-pattern" aria-hidden />
        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="grid grid-cols-[1fr_1fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-12">

              {/* Left — description */}
              <div>
                <SectionEyebrow className="mb-5" style={{ color: 'var(--gold)' }}>
                  Kingdom Dominion Force
                </SectionEyebrow>
                <h2 id="about-heading" className="section-h2 mb-7">
                  The Church<br />
                  <span className="text-gold">In Your</span><br />
                  Neighbourhood.
                </h2>
                <p className="font-body text-[16px] text-white/75 leading-[1.75] mb-6">
                  Kingdom Dominion Force (KDF) is the neighbourhood-based fellowship and outreach arm of Sam Amaga Ministries, established to advance the Kingdom of God through prayer, fellowship, evangelism, discipleship and community engagement.
                </p>
                <p className="font-body text-[16px] text-white/65 leading-[1.75] mb-8">
                  KDF brings the Church closer to the people by establishing fellowship centres within neighbourhoods and communities — creating opportunities for believers to grow spiritually, build meaningful relationships, care for one another and reach others with the transforming power of the Gospel.
                </p>
                <div
                  className="inline-block font-serif italic text-[15px] text-white/80 leading-relaxed px-7 py-5"
                  style={{ borderLeft: '3px solid var(--gold)', background: 'rgba(201,162,39,0.06)' }}
                >
                  Every member of the Church is expected to belong to a KDF Centre within their neighbourhood.
                </div>
              </div>

              {/* Right — how it works */}
              <div>
                <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-6">
                  How KDF Centres Operate
                </div>
                <ol className="flex flex-col" style={{ listStyle: 'none' }}>
                  {howItWorks.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-0 items-stretch border-b border-white/[.1] first:border-t first:border-white/[.1]"
                    >
                      <div className="font-display text-[11px] font-black tracking-[1px] text-gold min-w-[46px] py-[22px] flex-shrink-0 flex items-start">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="py-[22px] pr-4 flex-1">
                        <div className="font-display text-[12px] font-black uppercase tracking-[1px] text-white mb-[5px]">
                          {item.label}
                        </div>
                        <div className="font-body text-[13px] text-white/60 leading-relaxed">
                          {item.body}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* Stats strip */}
                <div className="grid grid-cols-3 gap-3 mt-8">
                  {[
                    { value: '14', label: 'Centres' },
                    { value: '5+', label: 'Regions' },
                    { value: '7', label: 'Key Areas' },
                  ].map(stat => (
                    <div
                      key={stat.label}
                      className="text-center py-5"
                      style={{
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <div className="font-display font-black text-gold leading-none" style={{ fontSize: 32 }}>
                        {stat.value}
                      </div>
                      <div className="font-display text-[10px] font-bold tracking-[2px] uppercase text-white/50 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── OBJECTIVES ── */}
      <section id="objectives" aria-labelledby="objectives-heading">
        <div className="max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="text-center mb-14">
              <SectionEyebrow className="justify-center mb-5 max-md:before:hidden">
                Kingdom Purpose
              </SectionEyebrow>
              <h2 id="objectives-heading" className="section-h2">
                Our <span className="text-gold">Objectives</span>
              </h2>
            </div>
          </RevealWrapper>

          <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {objectives.map((obj) => (
              <RevealWrapper key={obj.num}>
                <div className="kdf-obj-card relative h-full flex flex-col p-6">
                  {/* Corner cut accent */}
                  <div
                    aria-hidden
                    className="absolute top-0 right-0 w-[14px] h-[14px]"
                    style={{ background: 'rgba(201,162,39,0.3)' }}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <span className="font-display text-[11px] font-black tracking-[3px] text-gold">
                      {obj.num}
                    </span>
                    <span className="kdf-obj-icon text-gold">
                      {obj.icon}
                    </span>
                  </div>

                  <h3 className="font-display text-[13px] font-black uppercase tracking-[0.5px] text-white mb-3 leading-tight flex-shrink-0">
                    {obj.title}
                  </h3>
                  <p className="font-body text-[12px] text-white/60 leading-relaxed flex-1">
                    {obj.body}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIBLICAL FOUNDATION ── */}
      <section className="band" aria-label="Biblical foundation">
        <div className="band-pattern" aria-hidden />
        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <SectionEyebrow className="justify-center mb-8 max-md:before:hidden" style={{ color: 'var(--gold)' }}>
                Our Biblical Foundation
              </SectionEyebrow>

              {/* Giant quote mark */}
              <div
                aria-hidden
                className="font-serif font-black leading-none text-gold opacity-20 mb-2 select-none"
                style={{ fontSize: 'clamp(80px, 14vw, 160px)', lineHeight: 0.8 }}
              >
                &ldquo;
              </div>

              <blockquote className="font-serif italic text-white/90 leading-[1.8] mb-6" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)' }}>
                And daily in the temple, and in every house, they did not cease teaching and preaching Jesus as the Christ.
              </blockquote>

              <div className="font-display text-[11px] font-bold tracking-[3px] uppercase text-gold">
                Acts 5:42 (NKJV)
              </div>

              <div className="mx-auto mt-8 h-[1px] w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />

              <p className="font-body text-[14px] text-white/55 leading-relaxed mt-8 max-w-xl mx-auto">
                The Kingdom Dominion Force reflects the pattern of the early Church, where believers gathered both in larger congregations and in homes, growing together in faith, fellowship and the ministry of God&rsquo;s Word.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── OUR VISION ── */}
      <section aria-labelledby="vision-kdf-heading">
        <div className="max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="text-center max-w-4xl mx-auto">
              <SectionEyebrow className="justify-center mb-6 max-md:before:hidden">
                Our Vision
              </SectionEyebrow>
              <h2
                id="vision-kdf-heading"
                className="font-display font-black uppercase text-white leading-[1.05] tracking-[-1px] mb-8"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
              >
                A KDF Centre in Every Neighbourhood,<br className="max-md:hidden" />
                a Fellowship for Every Member,<br className="max-md:hidden" />
                and the{' '}
                <span className="text-gold">Transforming Power of Christ</span>
                {' '}in Every Community.
              </h2>

              <div className="mx-auto my-7 h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

              <p className="font-body text-[15px] text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
                Through Kingdom Dominion Force, we seek to build a Church that extends beyond Sunday worship into the everyday lives of people — strengthening families, nurturing disciples, winning souls and establishing the influence of God&rsquo;s Kingdom throughout our neighbourhoods.
              </p>

              {/* Word banner */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {['Connect', 'Fellowship', 'Grow', 'Serve', 'Transform'].map((word, i) => (
                  <span key={word} className="flex items-center gap-6">
                    <span className="font-display text-[11px] font-black tracking-[3px] uppercase text-white/80">
                      {word}
                    </span>
                    {i < 4 && (
                      <span
                        aria-hidden
                        className="w-[5px] h-[5px] rounded-full bg-gold opacity-50"
                      />
                    )}
                  </span>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ── FIND YOUR CENTRE ── */}
      <section id="find-centre" aria-labelledby="finder-heading" style={{ background: 'rgba(14,0,16,0.95)' }}>
        <div
          aria-hidden
          className="w-full h-[1px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.4) 40%, rgba(147,50,143,0.4) 60%, transparent)' }}
        />

        <div className="max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          {/* Postcode finder */}
          <RevealWrapper>
            <div className="text-center mb-10">
              <SectionEyebrow className="justify-center mb-5 max-md:before:hidden">
                Your Neighbourhood
              </SectionEyebrow>
              <h2 id="finder-heading" className="section-h2 mb-3">
                Find Your <span className="text-gold">KDF Centre</span>
              </h2>
              <p className="font-body text-[15px] text-white/55 max-w-lg mx-auto">
                Enter your postcode below to discover the KDF Centre serving your neighbourhood.
              </p>
            </div>
            <KDFPostcodeFinder />
          </RevealWrapper>

          {/* Divider */}
          <div className="my-16 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* All centres — grouped by region */}
          <RevealWrapper>
            <div className="text-center mb-10">
              <div className="font-display text-[10px] font-bold tracking-[4px] uppercase text-gold mb-2">
                All KDF Centres
              </div>
              <div className="font-body text-[13px] text-white/40">
                {kdfCentres.length} centres across Essex, London, Harlow, Greater London and Kent
              </div>
            </div>

            {(() => {
              const regionOrder = ['Essex', 'East London', 'Harlow', 'Greater London', 'Kent']
              const grouped = kdfCentres.reduce<Record<string, typeof kdfCentres>>(
                (acc, c) => { (acc[c.region] ??= []).push(c); return acc },
                {}
              )
              const regionCols: Record<string, string> = {
                'Essex':         'grid-cols-5 max-xl:grid-cols-3 max-sm:grid-cols-2',
                'East London':   'grid-cols-1',
                'Harlow':        'grid-cols-4 max-md:grid-cols-2',
                'Greater London':'grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1',
                'Kent':          'grid-cols-1',
              }
              return (
                <div className="flex flex-col gap-10">
                  {regionOrder.map(region => {
                    const centres = grouped[region] ?? []
                    return (
                      <div key={region}>
                        {/* Region header */}
                        <div className="flex items-center gap-4 mb-5">
                          <span className="font-display text-[10px] font-black tracking-[4px] uppercase text-gold whitespace-nowrap">
                            {region}
                          </span>
                          <div className="flex-1 h-px bg-white/10" aria-hidden />
                          <span className="font-display text-[11px] font-bold text-white/40 whitespace-nowrap">
                            {centres.length} {centres.length === 1 ? 'centre' : 'centres'}
                          </span>
                        </div>

                        {/* Per-region grid — same col count as centre count so heights always match */}
                        <div className={`grid gap-3 ${regionCols[region] ?? 'grid-cols-3'}`}>
                          {centres.map(centre => (
                            <div
                              key={centre.id}
                              className="kdf-centre-card p-5"
                            >
                              <div className="font-display text-[15px] font-black uppercase tracking-[0.5px] text-white mb-3 leading-tight">
                                {centre.name}
                              </div>
                              {centre.areas.length > 4 ? (
                                <div className="flex gap-6 flex-wrap">
                                  {Array.from(
                                    { length: Math.ceil(centre.areas.length / 4) },
                                    (_, i) => centre.areas.slice(i * 4, i * 4 + 4)
                                  ).map((chunk, i) => (
                                    <div key={i} className="flex flex-col gap-[6px]">
                                      {chunk.map(area => (
                                        <span key={area} className="font-body text-[15px] text-white/75 leading-snug">
                                          {area}
                                        </span>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div className="flex flex-col gap-[6px]">
                                  {centre.areas.map(area => (
                                    <span key={area} className="font-body text-[15px] text-white/75 leading-snug">
                                      {area}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })()}
          </RevealWrapper>
        </div>

        <div
          aria-hidden
          className="w-full h-[1px]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.4) 40%, rgba(147,50,143,0.4) 60%, transparent)' }}
        />
      </section>

      {/* ── CTA ── */}
      <section className="band" aria-labelledby="cta-heading">
        <div className="band-pattern" aria-hidden />
        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16 text-center">
          <RevealWrapper>
            {/* Large decorative cross */}
            <svg
              aria-hidden
              viewBox="0 0 60 60"
              className="w-16 h-16 mx-auto mb-8 text-gold opacity-40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <line x1="30" y1="0" x2="30" y2="60" />
              <line x1="0" y1="30" x2="60" y2="30" />
              <circle cx="30" cy="30" r="28" />
              <circle cx="30" cy="30" r="14" />
            </svg>

            <SectionEyebrow className="justify-center mb-6 max-md:before:hidden" style={{ color: 'var(--gold)' }}>
              Be Part of a KDF Centre
            </SectionEyebrow>

            <h2
              id="cta-heading"
              className="font-display font-black uppercase text-white leading-[1.0] tracking-[-1px] mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
            >
              Every Member Has<br />a Place.
            </h2>

            <p className="font-body text-[16px] text-white/65 leading-relaxed mb-10 max-w-xl mx-auto">
              Every neighbourhood is a mission field, and every KDF Centre is an opportunity to demonstrate the love and power of Jesus Christ. Join the KDF Centre in your neighbourhood and become an active part of what God is doing in your community.
            </p>

            <div className="flex items-center justify-center gap-5 flex-wrap">
              <a href="#find-centre" className="btn-gold">
                Find Your Centre
              </a>
              <Link
                href="/contact-us"
                className="font-display text-[10px] font-bold tracking-[2px] uppercase text-white/60 hover:text-white transition-colors no-underline"
              >
                Get in Touch →
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>

    </main>
  )
}
