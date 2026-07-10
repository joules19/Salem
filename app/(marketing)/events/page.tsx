import type { Metadata } from 'next'
import Image from 'next/image'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import Divider from '@/components/ui/Divider'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Upcoming events at Salem International Christian Centre — the Europe Outpouring Conference 2025, 11th–14th September. Theme: Beauty and Sacrifice of Faith.',
  alternates: { canonical: 'https://salemeurope.org/events' },
  openGraph: {
    title: 'Events — Salem International Christian Centre',
    description: 'Europe Outpouring Conference 2025 · 11th–14th September · Beauty and Sacrifice of Faith',
    url: 'https://salemeurope.org/events',
  },
}

const busSchedule = [
  { date: '11', day: 'THU', rows: [{ dep: '17:45 / 18:00', from: 'Stratford', ret: '21:30' }, { dep: '18:00', from: 'Harlow', ret: '21:30' }] },
  { date: '12', day: 'FRI', rows: [{ dep: '17:45 / 18:00', from: 'Stratford', ret: '21:30' }, { dep: '18:00', from: 'Harlow', ret: '21:30' }] },
  { date: '13', day: 'SAT', rows: [{ dep: '17:45 / 18:00', from: 'Stratford', ret: '21:30' }, { dep: '18:00', from: 'Harlow', ret: '21:30' }] },
  { date: '14', day: 'SUN', rows: [{ dep: '17:45 / 18:00', from: 'Stratford', ret: '21:30' }, { dep: '18:00', from: 'Harlow', ret: '21:30' }] },
]

export default function EventsPage() {
  return (
    <>
      {/* ── Conference Hero ── */}
      <section
        className="relative min-h-[90vh] flex items-center pt-[76px] overflow-hidden"
        aria-labelledby="conf-heading"
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
          <div className="grid grid-cols-[1fr_auto] gap-[80px] items-center max-lg:grid-cols-1 max-lg:gap-12">

            {/* Left — text */}
            <div className="max-lg:text-center">
              <div
                className="inline-flex items-center gap-3 font-display text-[10px] font-bold tracking-[4px] uppercase text-gold mb-6 animate-fade-up"
              >
                <span className="w-7 h-px bg-gold flex-shrink-0 max-lg:hidden" aria-hidden />
                Salem International Christian Centre Presents
              </div>

              <h1
                id="conf-heading"
                className="font-display font-black uppercase leading-[.88] tracking-[-2px] mb-4 animate-fade-up-d1"
                style={{ fontSize: 'clamp(52px, 8vw, 112px)' }}
              >
                <span className="block">Europe</span>
                <span className="block text-gold">Outpouring</span>
                <span className="block">Conference</span>
              </h1>

              <div
                className="font-display font-black leading-none mb-6 animate-fade-up-d1"
                style={{ fontSize: 'clamp(60px, 9vw, 140px)', color: 'rgba(147,50,143,0.35)' }}
                aria-hidden
              >
                2025
              </div>

              <div className="flex items-center gap-4 mb-3 max-lg:justify-center animate-fade-up-d2">
                <span className="w-6 h-px bg-gold opacity-60" aria-hidden />
                <span className="font-display text-[13px] font-bold tracking-[4px] uppercase text-gold">
                  11th &ndash; 14th September 2025
                </span>
                <span className="w-6 h-px bg-gold opacity-60" aria-hidden />
              </div>

              <p className="font-serif text-[22px] italic text-white/80 mb-8 max-lg:mx-auto max-lg:max-w-[480px] animate-fade-up-d2">
                &ldquo;Beauty and Sacrifice of Faith&rdquo;
              </p>

              <div
                className="flex items-center gap-4 flex-wrap mb-10 max-lg:justify-center animate-fade-up-d2"
              >
                <div
                  className="flex items-center gap-3 px-4 py-3"
                  style={{ background: 'rgba(147,50,143,0.15)', border: '1px solid rgba(147,50,143,0.35)' }}
                >
                  <span className="font-display text-[9px] font-bold tracking-[2px] uppercase text-gold">Host</span>
                  <span className="font-display text-[12px] font-bold tracking-[1px] uppercase text-white">Bishop David Onimisi</span>
                </div>
                <div
                  className="flex items-center gap-3 px-4 py-3"
                  style={{ background: 'rgba(147,50,143,0.15)', border: '1px solid rgba(147,50,143,0.35)' }}
                >
                  <span className="font-display text-[9px] font-bold tracking-[2px] uppercase text-gold">Keynote</span>
                  <span className="font-display text-[12px] font-bold tracking-[1px] uppercase text-white">Archbishop Sam Amaga</span>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap max-lg:justify-center animate-fade-up-d2">
                <a href="#why-attend" className="btn-gold">Why Attend &darr;</a>
                <a href="#bus-schedule" className="btn-ghost">Bus Schedule</a>
              </div>
            </div>

            {/* Right — conference graphic */}
            <div className="hidden lg:flex flex-col items-center gap-0 animate-fade-up-d1">
              <div
                className="relative text-center px-10 py-12 min-w-[340px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(147,50,143,0.2) 0%, rgba(74,24,71,0.3) 100%)',
                  border: '1px solid rgba(147,50,143,0.5)',
                  boxShadow: '0 0 0 1px rgba(201,162,39,0.15), 0 20px 60px rgba(147,50,143,0.35)',
                }}
              >
                {/* Corner accents */}
                {(['tl', 'tr', 'bl', 'br'] as const).map((pos) => (
                  <span
                    key={pos}
                    aria-hidden
                    className="absolute z-[3] w-5 h-5 pointer-events-none"
                    style={{
                      top: pos.startsWith('t') ? 8 : undefined,
                      bottom: pos.startsWith('b') ? 8 : undefined,
                      left: pos.endsWith('l') ? 8 : undefined,
                      right: pos.endsWith('r') ? 8 : undefined,
                      borderTop: pos.startsWith('t') ? '2px solid var(--gold)' : undefined,
                      borderBottom: pos.startsWith('b') ? '2px solid var(--gold)' : undefined,
                      borderLeft: pos.endsWith('l') ? '2px solid var(--gold)' : undefined,
                      borderRight: pos.endsWith('r') ? '2px solid var(--gold)' : undefined,
                    }}
                  />
                ))}

                <div className="font-display text-[9px] font-bold tracking-[4px] uppercase text-gold/70 mb-4">
                  Salem Intl Christian Centre
                </div>
                <div
                  className="font-display font-black uppercase leading-none text-white mb-1"
                  style={{ fontSize: 42, letterSpacing: -1 }}
                >
                  Europe
                </div>
                <div
                  className="font-display font-black uppercase leading-none text-gold mb-1"
                  style={{ fontSize: 42, letterSpacing: -1 }}
                >
                  Outpouring
                </div>
                <div
                  className="font-display font-black uppercase leading-none text-white"
                  style={{ fontSize: 32, letterSpacing: -1 }}
                >
                  Conference{' '}
                  <span className="text-gold">2025</span>
                </div>

                <div
                  className="my-5 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.5), transparent)' }}
                  aria-hidden
                />

                <div className="font-display text-[11px] font-bold tracking-[3px] uppercase text-gold mb-1">
                  11th &ndash; 14th Sept
                </div>
                <div className="font-serif text-[16px] italic text-white/80">
                  Beauty &amp; Sacrifice of Faith
                </div>

                <div
                  className="mt-5 pt-5 flex flex-col gap-2 text-left"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className="font-display text-[9px] tracking-[2px] uppercase text-gold/70">Host</div>
                  <div className="font-display text-[11px] font-bold tracking-[1px] uppercase text-white">
                    Bishop David Onimisi
                  </div>
                  <div className="font-display text-[9px] tracking-[2px] uppercase text-gold/70 mt-1">Keynote</div>
                  <div className="font-display text-[11px] font-bold tracking-[1px] uppercase text-white">
                    Archbishop Sam Amaga
                  </div>
                  <div className="font-display text-[9px] text-white/40 mt-1">Salem Family Worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── Why Attend ── */}
      <section
        id="why-attend"
        aria-labelledby="why-attend-heading"
        style={{ background: '#0e0010' }}
      >
        <div className="max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="grid grid-cols-[1fr_1.3fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">

              {/* Left */}
              <div className="sticky top-32 max-md:static">
                <SectionEyebrow className="mb-5">Why Attend?</SectionEyebrow>
                <h2
                  id="why-attend-heading"
                  className="font-serif font-bold text-white leading-[1.05] mb-6"
                  style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
                >
                  Beauty and<br />
                  Sacrifice<br />
                  <em className="text-gold not-italic">in Faith</em>
                </h2>
                <div
                  className="h-px w-16 mb-6"
                  style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
                  aria-hidden
                />
                <a href="#bus-schedule" className="btn-ghost inline-block">View Bus Schedule</a>
              </div>

              {/* Right — body text */}
              <div className="space-y-6">
                {[
                  <>
                    It&apos;s that profound season again when the voice of this Commission is released to speak
                    prophetically upon the Continent of Europe, centered entirely on the transformative theme of{' '}
                    <strong className="text-white font-semibold">&ldquo;The Beauty and Sacrifice of Faith.&rdquo;</strong>
                  </>,
                  <>
                    Beloved, faith is not merely a belief; it is a profound journey that reveals an unparalleled{' '}
                    <strong className="text-white font-semibold">beauty</strong> while simultaneously calling for{' '}
                    <strong className="text-white font-semibold">sacrifice</strong>. God, in His timeless wisdom,
                    promised Joshua the land, a beautiful inheritance. Yet, possessing it demanded the{' '}
                    <strong className="text-white font-semibold">sacrifice</strong> of unwavering obedience, persistent
                    trust, and the willingness to face formidable challenges. His journey exemplifies how the beauty of
                    God&apos;s promise is often unlocked through our willingness to lay down our own plans and embrace His.
                  </>,
                  <>
                    Similarly, David, on the very threshold of his promised kingship, faced immense personal trials and
                    the <strong className="text-white font-semibold">sacrifice</strong> of waiting, enduring, and trusting
                    in God&apos;s timing. His story beautifully illustrates that even in the midst of profound personal
                    cost, the <strong className="text-white font-semibold">beauty</strong> of God&apos;s presence and
                    faithfulness shines brightest, sustaining us through every season.
                  </>,
                  <>
                    Today, as we navigate a complex world, the profound truth of faith&apos;s beauty and its inherent call
                    to sacrifice remains paramount, even among believers. It&apos;s a call to see the divine artistry in
                    surrender, the profound grace in hardship, and the ultimate glory in yielding our lives to a higher
                    purpose. God has meticulously brought together anointed vessels to illuminate this sacred journey,
                    guiding us to fully embrace the{' '}
                    <strong className="text-white font-semibold">beauty</strong> found in every{' '}
                    <strong className="text-white font-semibold">sacrifice</strong> of faith.
                  </>,
                ].map((para, i) => (
                  <p key={i} className="font-body text-[17px] font-light text-white/75 leading-[1.85]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="purple" />

      {/* ── Featured Speakers ── */}
      <section
        className="band"
        aria-labelledby="speakers-heading"
      >
        <div className="band-pattern" aria-hidden />
        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="text-center mb-14">
              <SectionEyebrow className="justify-center mb-4" style={{ color: 'var(--gold)' }}>
                Featured Speakers
              </SectionEyebrow>
              <h2 id="speakers-heading" className="section-h2">
                Meet the <span style={{ color: 'var(--gold)' }}>Speakers</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
              {/* Bishop David */}
              <div className="text-center">
                <div className="leader-photo-frame mx-auto" style={{ maxWidth: 420 }}>
                  <Image
                    src="/images/third.png"
                    alt="Bishop David and Rev. Esther Onimisi"
                    width={420}
                    height={380}
                    className="w-full object-cover object-top"
                    sizes="(max-width: 768px) 90vw, 420px"
                  />
                  {(['tl', 'tr', 'bl', 'br'] as const).map((pos) => (
                    <span
                      key={pos}
                      aria-hidden
                      className="absolute z-[3] w-[22px] h-[22px] pointer-events-none"
                      style={{
                        top: pos.startsWith('t') ? 10 : undefined,
                        bottom: pos.startsWith('b') ? 10 : undefined,
                        left: pos.endsWith('l') ? 10 : undefined,
                        right: pos.endsWith('r') ? 10 : undefined,
                        borderTop: pos.startsWith('t') ? '2px solid var(--gold)' : undefined,
                        borderBottom: pos.startsWith('b') ? '2px solid var(--gold)' : undefined,
                        borderLeft: pos.endsWith('l') ? '2px solid var(--gold)' : undefined,
                        borderRight: pos.endsWith('r') ? '2px solid var(--gold)' : undefined,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-5">
                  <div
                    className="inline-block font-display text-[9px] font-bold tracking-[3px] uppercase text-[#0e0010] bg-gold px-3 py-1.5 mb-3"
                  >
                    Host
                  </div>
                  <div className="font-display text-[16px] font-bold tracking-[1px] uppercase text-white mb-1">
                    Bishop David Onimisi
                  </div>
                  <div className="font-display text-[11px] tracking-[2px] uppercase text-gold/80">
                    Senior Pastor &middot; Salem Europe
                  </div>
                </div>
              </div>

              {/* Archbishop Sam */}
              <div className="text-center">
                <div className="leader-photo-frame mx-auto" style={{ maxWidth: 420 }}>
                  <Image
                    src="/images/second.png"
                    alt="Archbishop Sam Amaga and Bishop Love Sam-Amaga"
                    width={420}
                    height={380}
                    className="w-full object-cover object-top"
                    sizes="(max-width: 768px) 90vw, 420px"
                  />
                  {(['tl', 'tr', 'bl', 'br'] as const).map((pos) => (
                    <span
                      key={pos}
                      aria-hidden
                      className="absolute z-[3] w-[22px] h-[22px] pointer-events-none"
                      style={{
                        top: pos.startsWith('t') ? 10 : undefined,
                        bottom: pos.startsWith('b') ? 10 : undefined,
                        left: pos.endsWith('l') ? 10 : undefined,
                        right: pos.endsWith('r') ? 10 : undefined,
                        borderTop: pos.startsWith('t') ? '2px solid var(--gold)' : undefined,
                        borderBottom: pos.startsWith('b') ? '2px solid var(--gold)' : undefined,
                        borderLeft: pos.endsWith('l') ? '2px solid var(--gold)' : undefined,
                        borderRight: pos.endsWith('r') ? '2px solid var(--gold)' : undefined,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-5">
                  <div
                    className="inline-block font-display text-[9px] font-bold tracking-[3px] uppercase text-[#0e0010] bg-gold px-3 py-1.5 mb-3"
                  >
                    Keynote Speaker
                  </div>
                  <div className="font-display text-[16px] font-bold tracking-[1px] uppercase text-white mb-1">
                    Archbishop Sam Amaga
                  </div>
                  <div className="font-display text-[11px] tracking-[2px] uppercase text-gold/80">
                    Salem Family Worldwide
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── Bus Schedule ── */}
      <section
        id="bus-schedule"
        aria-labelledby="bus-heading"
        style={{ background: '#0e0010' }}
      >
        <div className="max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="text-center mb-12">
              <SectionEyebrow className="justify-center mb-4">Bus Schedule</SectionEyebrow>
              <h2 id="bus-heading" className="section-h2">
                Europe Outpouring<br />
                <span className="text-gold">Bus Schedule</span>
              </h2>
            </div>

            <div
              className="overflow-hidden"
              style={{
                background: 'rgba(147,50,143,0.08)',
                border: '1px solid rgba(147,50,143,0.35)',
              }}
            >
              {/* Header */}
              <div
                className="px-10 py-8 text-center max-md:px-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(147,50,143,0.3) 0%, rgba(74,24,71,0.4) 100%)',
                  borderBottom: '1px solid rgba(147,50,143,0.3)',
                }}
              >
                <h3
                  className="font-display font-black uppercase tracking-[-1px] leading-none text-white"
                  style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
                >
                  Europe <span className="text-gold">Outpouring</span>
                </h3>
                <p className="font-display text-[13px] font-bold tracking-[3px] uppercase text-white/70 mt-2">
                  Bus Schedule
                </p>
              </div>

              {/* Departure locations */}
              <div
                className="grid grid-cols-2 gap-0 max-md:grid-cols-1"
                style={{ borderBottom: '1px solid rgba(147,50,143,0.3)' }}
              >
                {[
                  {
                    label: 'Departure Location 1',
                    name: 'Stratford Station',
                    address: '6 Station St, London, E15 1DA',
                  },
                  {
                    label: 'Departure Location 2',
                    name: 'Harlow Holiday Inn',
                    address: 'Crown Gate, Harlow CM20 1NB',
                  },
                ].map(({ label, name, address }, i) => (
                  <div
                    key={name}
                    className="flex items-start gap-4 px-10 py-7 max-md:px-6"
                    style={{
                      borderRight: i === 0 ? '1px solid rgba(147,50,143,0.3)' : undefined,
                      borderBottom: 'none',
                    }}
                  >
                    {/* Pin icon */}
                    <div className="flex-shrink-0 mt-1">
                      <svg viewBox="0 0 24 24" fill="var(--gold)" width="22" height="22" aria-hidden>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-display text-[9px] font-bold tracking-[2px] uppercase text-gold/70 mb-1">
                        {label}
                      </div>
                      <div className="font-display text-[14px] font-bold tracking-[1px] uppercase text-white mb-0.5">
                        {name}
                      </div>
                      <div className="text-[13px] text-white/60 font-light">{address}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Schedule table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ background: 'rgba(147,50,143,0.2)', borderBottom: '1px solid rgba(147,50,143,0.3)' }}>
                      <th className="font-display text-[10px] font-bold tracking-[2px] uppercase text-gold/80 text-left px-10 py-4 max-md:px-6 w-[120px]">
                        Date
                      </th>
                      <th className="font-display text-[10px] font-bold tracking-[2px] uppercase text-white/60 text-left px-6 py-4 underline">
                        Departure
                      </th>
                      <th className="font-display text-[10px] font-bold tracking-[2px] uppercase text-white/60 text-left px-6 py-4">
                        From
                      </th>
                      <th className="font-display text-[10px] font-bold tracking-[2px] uppercase text-white/60 text-right px-10 py-4 max-md:px-6 underline">
                        Return
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {busSchedule.map(({ date, day, rows }, di) =>
                      rows.map((row, ri) => (
                        <tr
                          key={`${di}-${ri}`}
                          style={{
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                            background: di % 2 === 0 ? 'rgba(147,50,143,0.04)' : 'transparent',
                          }}
                        >
                          {ri === 0 ? (
                            <td className="px-10 py-5 max-md:px-6 align-top" rowSpan={rows.length}>
                              <div className="flex items-baseline gap-2">
                                <span
                                  className="font-display font-black text-gold leading-none"
                                  style={{ fontSize: 40 }}
                                >
                                  {date}
                                </span>
                                <span className="font-display text-[13px] font-bold tracking-[2px] uppercase text-white/60">
                                  {day}
                                </span>
                              </div>
                            </td>
                          ) : null}
                          <td className="px-6 py-4 font-display text-[15px] font-semibold tracking-[0.5px] text-white">
                            {row.dep}
                          </td>
                          <td className="px-6 py-4 font-display text-[13px] font-normal tracking-[1px] uppercase text-white/70">
                            {row.from}
                          </td>
                          <td className="px-10 py-4 max-md:px-6 font-display text-[15px] font-semibold tracking-[0.5px] text-white text-right">
                            {row.ret}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Bus schedule footer note */}
              <div
                className="px-10 py-5 max-md:px-6"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)' }}
              >
                <p className="text-[12px] text-white/40 font-light">
                  * Bus times may be subject to change. Contact{' '}
                  <a href="mailto:admin@salemeurope.org" className="text-gold/70 hover:text-gold transition-colors">
                    admin@salemeurope.org
                  </a>{' '}
                  for the latest information.
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="purple" />

      {/* ── Register CTA ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--purple)' }}
        aria-labelledby="register-heading"
      >
        <div className="band-pattern" aria-hidden />
        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[80px] max-md:px-6 max-md:py-16 text-center">
          <SectionEyebrow className="justify-center mb-4" style={{ color: 'var(--gold)' }}>
            Don&apos;t Miss It
          </SectionEyebrow>
          <h2
            id="register-heading"
            className="font-display font-black uppercase text-white leading-none tracking-[-1px] mb-4"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Join Us for the<br />
            <span className="text-gold">Conference</span>
          </h2>
          <p className="font-serif text-[18px] italic text-white/80 max-w-[560px] mx-auto leading-[1.75] mb-10">
            Register your interest and we will be in touch with full details, location information, and how to book your seat.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:admin@salemeurope.org" className="btn-gold">Register Interest</a>
            <Link href="/contact-us" className="btn-ghost">Contact Us</Link>
          </div>
          <p className="mt-6 font-display text-[11px] tracking-[1px] uppercase text-white/40">
            admin@salemeurope.org &bull; +44 1279 417222
          </p>
        </div>
      </section>
    </>
  )
}
