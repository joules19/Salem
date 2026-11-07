import type { Metadata } from 'next'
import Image from 'next/image'
import eocPoster from '@/public/images/EOC-26-Main.jpeg'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import Divider from '@/components/ui/Divider'
import RevealWrapper from '@/components/ui/RevealWrapper'

export const metadata: Metadata = {
  title: "Europe Outpouring Conference '26",
  description:
    'Join us for the Europe Outpouring Conference 2026 — 10th–13th September at Salem Europe, Harlow, Essex. Theme: The Beauty and Blessing of Revival. Based on Isaiah 32:15.',
  alternates: { canonical: 'https://salemeurope.org/eoc-26' },
  openGraph: {
    title: "Europe Outpouring Conference '26 | Salem International Christian Centre",
    description: "EOC '26 · 10th–13th September 2026 · The Beauty and Blessing of Revival",
    url: 'https://salemeurope.org/eoc-26',
    images: [{ url: '/images/EOC-26-Main.jpeg', width: 1200, height: 1350, alt: "Europe Outpouring Conference '26" }],
  },
  twitter: {
    title: "Europe Outpouring Conference '26",
    description: "EOC '26 · 10th–13th September 2026 · The Beauty and Blessing of Revival",
    images: ['/images/EOC-26-Main.jpeg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: "Europe Outpouring Conference '26",
  description: 'The Beauty and Blessing of Revival — annual conference hosted by Salem International Christian Centre.',
  startDate: '2026-09-10T19:00:00',
  endDate: '2026-09-13T12:00:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'New Horizon Business Centre',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 11c, The Pinnacles, Barrows Road',
      addressLocality: 'Harlow',
      addressRegion: 'Essex',
      postalCode: 'CM19 5FM',
      addressCountry: 'GB',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Salem International Christian Centre',
    url: 'https://salemeurope.org',
  },
  image: 'https://salemeurope.org/images/EOC-26-Main.jpeg',
  url: 'https://salemeurope.org/eoc-26',
}

const schedule = [
  { day: 'Thursday', date: '10th Sept', time: '7:00PM – 9:00PM' },
  { day: 'Friday', date: '11th Sept', time: '7:00PM – 9:00PM' },
  { day: 'Saturday', date: '12th Sept', time: '11AM–1PM · 3–5PM · 6–9PM' },
  { day: 'Sunday', date: '13th Sept', time: '10:00AM – 12NOON' },
]

const ministers = [
  { image: '/images/eoc-minister1.jpeg', name: 'Archbishop Sam Amaga', role: 'Chief Host' },
  { image: '/images/eoc-minister2.jpeg', name: 'Continental Bishop David Onimisi', role: 'Host' },
  { image: '/images/eoc-minister3.jpeg', name: 'Bishop Enobong Etteh', role: 'Guest Speaker' },
  { image: '/images/eoc-minister4.jpeg', name: 'Bishop Hillary Ogoliegbune', role: 'Guest Speaker' },
  { image: '/images/eoc-minister5.jpeg', name: 'Bishop John Francis', role: 'Guest Speaker' },
  { image: '/images/eoc-minister6.jpeg', name: 'Pastor Theophilus Sunday', role: 'Guest Minister' },
  { image: '/images/eoc-minister7.jpeg', name: 'Rev. Ade Adefala', role: 'Guest Speaker' },
  { image: '/images/eoc-minister8.jpeg', name: 'Pastor Brad Norman', role: 'Guest Speaker' },
  { image: '/images/eoc-minister9.jpeg', name: 'Bishop John Ibenu', role: 'Guest Speaker' },
]

const recapVideos = [
  { id: '_Zh9GjNuem0', start: 2063, title: 'Europe Outpouring Conference 2025 — Session 1' },
  { id: 'vTK4o8MosyQ', start: 3043, title: 'Europe Outpouring Conference 2025 — Session 2' },
  { id: 'dmdujt5AeIk', start: 0,    title: 'Europe Outpouring Conference 2025 — Session 3' },
  { id: 'dIMa0ZAnd5g', start: 0,    title: 'Europe Outpouring Conference 2025 — Session 4' },
]

export default function EOC26Page() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section
        aria-labelledby="eoc-heading"
        className="relative"
        style={{ paddingTop: '76px', background: '#0e0010' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          {/* Left — event details */}
          <div className="flex flex-col justify-center py-[72px] px-[52px] xl:pl-[calc((100vw-1280px)/2+52px)] max-md:px-6 max-md:py-10 max-md:order-2 max-md:items-center max-md:text-center">
            <div className="font-display text-[9px] font-bold tracking-[3px] uppercase text-gold mb-5">
              Salem International Christian Centre Presents
            </div>

            <h1
              id="eoc-heading"
              className="font-display font-black text-white uppercase leading-none tracking-[-2px] mb-1"
              style={{ fontSize: 'clamp(32px, 4.5vw, 60px)' }}
            >
              Europe<br />Outpouring<br />Conference
            </h1>
            <div
              className="font-display font-black text-gold leading-none tracking-[-3px] mb-8"
              style={{ fontSize: 'clamp(56px, 8vw, 108px)' }}
            >
              &apos;26
            </div>

            <div
              className="px-6 py-4 mb-8 self-start max-md:self-center"
              style={{
                background: 'rgba(147,50,143,0.12)',
                border: '1px solid rgba(147,50,143,0.35)',
              }}
            >
              <div className="font-display text-[9px] font-bold tracking-[3px] uppercase text-gold/70 mb-1">Theme</div>
              <div className="font-display text-[14px] font-black text-white uppercase tracking-wide leading-snug">
                The Beauty and Blessing of Revival
              </div>
            </div>

            <div className="space-y-2.5 mb-8">
              <div className="flex items-center gap-3 max-md:justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold flex-shrink-0" aria-hidden>
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="font-body text-[14px] text-white/70">10th–13th September 2026</span>
              </div>
              <div className="flex items-start gap-3 max-md:justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold flex-shrink-0 mt-0.5" aria-hidden>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span className="font-body text-[14px] text-white/70 leading-snug">
                  Unit 11c, New Horizon Business Centre,<br className="max-md:hidden" /> Harlow, Essex CM19 5FM
                </span>
              </div>
            </div>

            {/* Registration closed */}
            <div className="relative inline-block group self-start max-md:self-center">
              <div
                role="button"
                aria-disabled="true"
                aria-label="Registration closed — this event has passed"
                tabIndex={-1}
                className="inline-flex items-center gap-3 font-display text-[11px] font-extrabold tracking-[2.5px] uppercase px-8 py-4 cursor-not-allowed select-none"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: 'rgba(255,255,255,0.28)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Registration Closed
              </div>
              <div
                role="tooltip"
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 z-10 pointer-events-none opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
              >
                <div
                  className="text-center px-5 py-4"
                  style={{ background: '#180018', border: '1px solid rgba(201,162,39,0.45)', boxShadow: '0 8px 32px rgba(0,0,0,0.75)' }}
                >
                  <div className="font-display text-[9px] font-bold tracking-[2.5px] uppercase text-gold mb-2">Event Has Passed</div>
                  <p className="font-body text-[13px] text-white/70 leading-snug">
                    Registration for EOC &apos;26 is now closed.<br />Stay tuned for EOC &apos;27.
                  </p>
                </div>
                <div
                  aria-hidden
                  className="absolute top-full left-1/2 -translate-x-1/2"
                  style={{ width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '7px solid rgba(201,162,39,0.45)' }}
                />
              </div>
            </div>
            <p className="mt-3 font-display text-[9px] font-bold tracking-[2px] uppercase text-white/30">
              This event has passed
            </p>
          </div>

          {/* Right — poster image */}
          <div className="relative overflow-hidden max-md:order-1 md:max-h-screen">
            <Image
              src={eocPoster}
              alt="Europe Outpouring Conference '26 — Archbishop Sam Amaga (Chief Host) and Continental Bishop David Onimisi (Host)"
              placeholder="blur"
              priority
              className="w-full h-auto block md:h-full md:object-cover md:object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              aria-hidden
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent, #0e0010)' }}
            />
          </div>

        </div>
      </section>

      {/* ── SCHEDULE ── */}
      <section aria-labelledby="schedule-heading" className="band relative overflow-hidden">
        <div className="band-pattern" aria-hidden />

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[72px] max-md:px-6 max-md:py-14">
          <RevealWrapper>

            {/* Heading */}
            <div className="text-center mb-10">
              <SectionEyebrow className="justify-center mb-4 max-md:before:hidden max-md:text-center">
                Salem International Christian Centre Presents
              </SectionEyebrow>
              <h2
                id="schedule-heading"
                className="font-display font-black text-white uppercase leading-none tracking-[-1px] mb-3"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
              >
                10<sup style={{ fontSize: '0.55em', verticalAlign: 'super' }}>th</sup>
                {' '}–{' '}
                13<sup style={{ fontSize: '0.55em', verticalAlign: 'super' }}>th</sup>
                {' '}September 2026
              </h2>
              <p className="font-body text-[15px] text-white/65 leading-relaxed">
                Unit 11c, New Horizon Business Centre, The Pinnacles,<br className="max-md:hidden" />
                {' '}Barrows Road, Harlow, Essex CM19 5FM
              </p>
            </div>

            {/* Day-by-day grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-10">
              {schedule.map(({ day, date, time }) => (
                <div
                  key={day}
                  className="text-center px-4 py-6"
                  style={{
                    background: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderTop: '2px solid var(--gold)',
                  }}
                >
                  <div className="font-display text-[9px] font-bold tracking-[2px] uppercase text-gold mb-1">{day}</div>
                  <div className="font-display text-[11px] font-bold text-white/60 mb-2">{date}</div>
                  <div className="font-display text-[12px] font-black text-white leading-snug">{time}</div>
                </div>
              ))}
            </div>

            {/* Contact row */}
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <a
                href="tel:+441279417222"
                className="flex items-center gap-2 font-display text-[11px] font-bold tracking-[1px] text-white/65 hover:text-gold transition-colors no-underline"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96A16 16 0 0 0 16 17.04l1.12-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +441 279 417 222
              </a>
              <div className="w-px h-4 bg-white/15" aria-hidden />
              <a
                href="mailto:admin@salemeurope.org"
                className="flex items-center gap-2 font-display text-[11px] font-bold tracking-[1px] text-white/65 hover:text-gold transition-colors no-underline"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                admin@salemeurope.org
              </a>
            </div>

          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── THEME / ABOUT ── */}
      <section aria-labelledby="theme-heading" className="relative overflow-hidden">
        {/* Subtle diagonal pattern */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(147,50,143,0.04) 0px, rgba(147,50,143,0.04) 1px, transparent 1px, transparent 48px)',
          }}
        />
        {/* Gold orb */}
        <div
          aria-hidden
          className="absolute right-[-80px] top-[-60px] w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.07) 0%, transparent 65%)' }}
        />

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="grid grid-cols-[2fr_3fr] gap-[80px] max-md:grid-cols-1 max-md:gap-10">

              {/* Left */}
              <div className="flex flex-col justify-start">
                <SectionEyebrow className="mb-4">Isaiah 32:15</SectionEyebrow>
                <h2 id="theme-heading" className="section-h2 mb-6">
                  The<br />Theme.
                </h2>
                <div
                  className="relative overflow-hidden px-7 py-8 text-center mt-4"
                  style={{
                    background: 'rgba(147,50,143,0.08)',
                    border: '1px solid rgba(147,50,143,0.30)',
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute top-0 left-1/2 -translate-x-1/2 font-display font-black leading-none pointer-events-none select-none"
                    style={{ fontSize: 90, color: 'var(--purple)', opacity: 0.12, top: -8 }}
                  >
                    EOC
                  </div>
                  <div className="relative z-[1]">
                    <div className="font-display text-[9px] font-bold tracking-[3px] uppercase text-gold mb-3">
                      Theme
                    </div>
                    <div className="font-display text-[17px] font-black text-white leading-tight uppercase tracking-wide">
                      The Beauty and<br />Blessing of Revival
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div>
                <h3 className="font-display text-[22px] font-black text-white mb-5 leading-tight">
                  Experience The Beauty and Blessing of Revival!
                </h3>

                <blockquote className="font-serif text-[17px] italic text-white/85 leading-[1.8] border-l-4 border-gold pl-6 max-md:pl-4 mb-6">
                  &ldquo;Until the Spirit is poured upon us from on high, and the wilderness becomes a
                  fruitful field, and the fruitful field is counted as a forest.&rdquo;
                  <footer className="font-display text-[9px] font-bold tracking-[2px] uppercase text-gold mt-3 not-italic">
                    — Isaiah 32:15
                  </footer>
                </blockquote>

                <p className="font-body text-[15px] text-white/75 leading-relaxed mb-4">
                  At Europe Outpouring Conference 2026, we are gathering around a transformative vision drawn
                  from this scripture. This theme represents a profound spiritual shift — Revival brings the
                  beauty of God&apos;s presence into dry, weary places, turning life&apos;s wildernesses into
                  fruitful ground and causing existing blessings to multiply beyond measure.
                </p>
                <p className="font-body text-[15px] text-white/75 leading-relaxed mb-8">
                  It is a promise of spiritual renewal, supernatural restoration, and lasting fruitfulness for
                  every life, family, and nation represented. Come expecting dynamic worship, life-changing
                  teachings, and a powerful outpouring of the Holy Spirit — we look forward to welcoming you!
                </p>

                {/* Registration closed — event has passed */}
                <div>
                  <div className="relative inline-block group">
                    <div
                      role="button"
                      aria-disabled="true"
                      aria-label="Registration closed — this event has passed"
                      tabIndex={-1}
                      className="inline-flex items-center gap-3 font-display text-[11px] font-extrabold tracking-[2.5px] uppercase px-8 py-4 cursor-not-allowed select-none"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        color: 'rgba(255,255,255,0.28)',
                        border: '1px solid rgba(255,255,255,0.10)',
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      Registration Closed
                    </div>

                    {/* Hover tooltip */}
                    <div
                      role="tooltip"
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 z-10 pointer-events-none opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                    >
                      <div
                        className="text-center px-5 py-4"
                        style={{
                          background: '#180018',
                          border: '1px solid rgba(201,162,39,0.45)',
                          boxShadow: '0 8px 32px rgba(0,0,0,0.75)',
                        }}
                      >
                        <div className="font-display text-[9px] font-bold tracking-[2.5px] uppercase text-gold mb-2">
                          Event Has Passed
                        </div>
                        <p className="font-body text-[13px] text-white/70 leading-snug">
                          Registration for EOC &apos;26 is now closed.<br />Stay tuned for EOC &apos;27.
                        </p>
                      </div>
                      {/* Arrow */}
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2"
                        aria-hidden
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: '7px solid transparent',
                          borderRight: '7px solid transparent',
                          borderTop: '7px solid rgba(201,162,39,0.45)',
                        }}
                      />
                    </div>
                  </div>

                  <p className="mt-3 font-display text-[9px] font-bold tracking-[2px] uppercase text-white/30">
                    This event has passed
                  </p>
                </div>
              </div>

            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="purple" />

      {/* ── MEET THE MINISTERS ── */}
      <section
        aria-labelledby="ministers-heading"
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0e0010 0%, #130018 50%, #0e0010 100%)' }}
      >
        {/* Dot grid background */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Purple orb centre-left */}
        <div
          aria-hidden
          className="absolute left-[-120px] bottom-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(147,50,143,0.10) 0%, transparent 65%)' }}
        />

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>

            <div className="text-center mb-12">
              <h2
                id="ministers-heading"
                className="font-serif text-[28px] font-normal text-white tracking-[1px]"
              >
                — Meet the Ministers —
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ministers.map(({ image, name, role }) => (
                <div
                  key={name}
                  className="relative overflow-hidden group"
                  style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.55)' }}
                >
                  <Image
                    src={image}
                    alt={`${name} — ${role}, Europe Outpouring Conference '26`}
                    width={600}
                    height={750}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>

          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── 2025 RECAP ── */}
      <section aria-labelledby="recap-heading" className="band relative overflow-hidden">
        <div className="band-pattern" aria-hidden />

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>

            <div className="text-center mb-12">
              <h2
                id="recap-heading"
                className="font-serif text-[28px] font-normal text-white tracking-[1px]"
              >
                — 2025 Recap —
              </h2>
              <p className="mt-3 font-body text-[15px] text-white/60">
                Relive the highlights from Europe Outpouring Conference 2025.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {recapVideos.map(({ id, start, title }) => (
                <div
                  key={id}
                  className="relative w-full overflow-hidden"
                  style={{
                    paddingBottom: '56.25%',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${id}${start ? `?start=${start}` : ''}`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 'none' }}
                  />
                </div>
              ))}
            </div>

          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />
    </main>
  )
}
