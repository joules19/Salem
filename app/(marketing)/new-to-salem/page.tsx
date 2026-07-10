import type { Metadata } from 'next'
import Image from 'next/image'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Divider from '@/components/ui/Divider'
import Accordion from '@/components/about/Accordion'

export const metadata: Metadata = {
  title: 'New to Salem',
  description:
    'New to Salem International Christian Centre? Discover our welcome, service times, leadership training and community programmes. We are glad you are here.',
  alternates: { canonical: 'https://salemeurope.org/new-to-salem' },
  openGraph: {
    title: 'New to Salem | Salem International Christian Centre',
    description:
      'Welcome to Salem — discover our service times, leadership training and community.',
    url: 'https://salemeurope.org/new-to-salem',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Salem International Christian Centre' }],
  },
  twitter: {
    title: 'New to Salem | Salem International Christian Centre',
    description: 'Welcome to Salem — discover our service times, leadership training and community.',
    images: ['/images/hero.jpg'],
  },
}

const serviceTimes = [
  {
    day: 'Every Sunday',
    time: '10am – 12pm',
    name: 'Extraordinary Life Service',
    highlight: true,
  },
  {
    day: 'Every Monday',
    time: '12am – 1am',
    name: 'Prophetic Prayer',
    note: 'Contact admin for venue details · 7pm – 6pm',
  },
  {
    day: 'Every Wednesday',
    time: '7pm – 8pm',
    name: 'KDF and SCF Fellowship',
  },
  {
    day: 'Every Third Friday of The Month',
    time: '7pm – 5am',
    name: 'All Night Service',
  },
  {
    day: 'Every Third Saturday of The Month',
    time: '7pm – 1pm',
    name: "Let's Talk",
  },
  {
    day: 'First Saturday of Each Month',
    time: '5pm – 8pm',
    name: 'Next Level',
  },
]

const trainingModules = [
  {
    title: '1414 / 1',
    content:
      'This class is for all new converts and those who want to be serious with the Lord. The curriculum is designed to last for six weeks after which water baptism and the baptism in the Holy-Spirit is administered.',
  },
  {
    title: '1414 / 2',
    content:
      'This six week class is designed with the aim of making disciples for the kingdom. We are called to make disciples, and not converts — no new member is allowed to remain at the level of a convert for long. In this class you are taught about developing your spirit from its infancy to maturity. By the time you graduate from this class, the character of Christ is formed in you, which automatically makes you a teacher to others.',
  },
  {
    title: '1414 / 3',
    content:
      'This class is designed to train workers in the church. You are shown the vision of the commission as delivered to God\'s servant the Archbishop. We acquaint you with the core values of the commission and our mandate — leaders are those that "know the way, go the way and then show the way" (John Maxwell). Every member of the class is made to read several books of the Archbishop so as to drink into the grace of the commission. After a successful session, those that qualify are ordained to hold offices in the church.',
  },
  {
    title: 'Leadership Fire Conference',
    content:
      'This training is for all ordained leaders in the church. Four times in the year, all leaders are called back to a day session of training to recast the vision again and keep the fire of zeal and zest burning. This is organised at diocesan level and is compulsory for all leaders.',
  },
]

const leadershipItems = [
  {
    title: 'The Bible says in the book of Matthew 5:14–16',
    content: (
      <ol className="flex flex-col gap-3 list-none">
        {[
          'Ye are the light of the world. A city that is set on a hill cannot be hid.',
          'Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house.',
          'Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.',
        ].map((v, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="font-display text-[11px] font-black text-gold mt-[2px] flex-shrink-0">
              {i + 1 + 13}.
            </span>
            <span>{v}</span>
          </li>
        ))}
      </ol>
    ),
  },
  {
    title: 'Leadership Training',
    content:
      'It is a known fact that light sets the pace just as the dawn that begins the day. This means that the church, as the light of the world, is to demonstrate leadership to the world. Let your light so shine that people will see your work and glorify your father which is in heaven. Leadership requires training — even if you are born with the potential to lead, you still require sharpening for effectiveness. This is the reason for the training department in the church: to sharpen you and raise you as a global giant for God.',
  },
]

export default function NewToSalemPage() {
  return (
    <main id="main">

      {/* ── HERO ── */}
      <section
        aria-labelledby="welcome-heading"
        className="relative overflow-hidden"
        style={{ minHeight: '88vh' }}
      >
        {/* Background */}
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{ filter: 'grayscale(60%) brightness(0.35)' }}
          aria-hidden
        />

        {/* Purple gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(14,0,16,0.90) 0%, rgba(74,24,71,0.55) 45%, rgba(14,0,16,0.95) 100%)',
          }}
        />

        {/* Dot grid */}
        <div aria-hidden className="absolute inset-0 hero-grid-pattern opacity-30" />

        {/* Decorative concentric rings — top right */}
        <svg
          aria-hidden
          viewBox="0 0 320 320"
          className="absolute -top-16 -right-16 w-[320px] h-[320px] opacity-[0.06] pointer-events-none"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1"
        >
          {[150, 110, 72, 36].map((r) => (
            <circle key={r} cx="160" cy="160" r={r} />
          ))}
          <line x1="160" y1="10" x2="160" y2="310" />
          <line x1="10" y1="160" x2="310" y2="160" />
        </svg>

        {/* Decorative concentric rings — bottom left */}
        <svg
          aria-hidden
          viewBox="0 0 240 240"
          className="absolute -bottom-12 -left-12 w-[240px] h-[240px] opacity-[0.05] pointer-events-none"
          fill="none"
          stroke="var(--purple-light)"
          strokeWidth="1"
        >
          {[110, 75, 40].map((r) => (
            <circle key={r} cx="120" cy="120" r={r} />
          ))}
        </svg>

        {/* Floating orb */}
        <div
          aria-hidden
          className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 65%)',
            animation: 'orb1 14s ease-in-out infinite',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-[52px] max-md:px-6 pt-[160px] pb-[100px] max-md:pt-32 max-md:pb-16">
          <div className="grid grid-cols-[1fr_1fr] gap-16 items-center max-md:grid-cols-1">

            {/* Left — leader photo */}
            <div style={{ animation: 'fadeUp 1s ease 0.1s both' }}>
              <div className="leader-photo-frame" style={{ maxWidth: 440 }}>
                <Image
                  src="/images/second.png"
                  alt="Bishop David Onimisi and Rev. Mrs Esther Onimisi"
                  width={440}
                  height={520}
                  className="w-full object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 40vw"
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
                <div className="absolute bottom-0 left-0 right-0 z-[3] px-7 pb-[26px] pt-8">
                  <div className="font-display text-[13px] font-bold tracking-[2px] uppercase text-white mb-[5px]">
                    Bishop David Onimisi
                  </div>
                  <div className="font-display text-[10px] font-medium tracking-[2.5px] uppercase text-gold">
                    &amp; Rev. Mrs Esther Onimisi
                  </div>
                </div>
              </div>
            </div>

            {/* Right — welcome text */}
            <div style={{ animation: 'fadeUp 1s ease 0.25s both' }}>
              <SectionEyebrow className="mb-5">Welcome</SectionEyebrow>
              <h1
                id="welcome-heading"
                className="font-display font-black uppercase text-white leading-[0.92] tracking-[-1px] mb-8"
                style={{ fontSize: 'clamp(42px, 7vw, 80px)' }}
              >
                New to<br /><span className="text-gold">Salem.</span>
              </h1>
              <div className="space-y-5 font-body text-[16px] text-white/75 leading-relaxed">
                <p>
                  I would like to welcome you to the warm embrace of this Family Church where
                  Loving God and loving one another is a cherished culture. Your peculiarity is
                  treasured and integrated here and your spiritual life will be built on the
                  strong foundation of Faith and the power of the Holy Ghost.
                </p>
                <p>
                  Our services and programmes are tailored towards imparting you, to be
                  impactful to your world. You will find some of these packages available on
                  this website and there&apos;s lots more to equip you with that you&apos;ll be
                  able to take away from joining any of our worship services.
                </p>
                <p>
                  God has sent us with a mandate, to be a major player in the revival of
                  Europe. You can be part of this army of revival. I look forward to seeing you.
                </p>
              </div>
              <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(201,162,39,0.25)' }}>
                <div className="font-display text-[11px] font-bold tracking-[2px] uppercase text-gold">
                  Thanks for browsing,
                </div>
                <div className="font-display text-[13px] font-bold tracking-[1px] text-white mt-1">
                  Bishop David &amp; Rev. Esther Onimisi
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── SERVICE TIMES ── */}
      <section
        aria-labelledby="services-heading"
        className="band relative overflow-hidden"
      >
        <div className="band-pattern" aria-hidden />

        {/* Wave art top */}
        <svg
          aria-hidden
          viewBox="0 0 1440 120"
          className="absolute top-0 left-0 w-full opacity-[0.08] pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>

        {/* Clock art — right */}
        <svg
          aria-hidden
          viewBox="0 0 200 200"
          className="absolute right-8 top-1/2 -translate-y-1/2 w-[260px] h-[260px] opacity-[0.06] pointer-events-none"
          fill="none"
          stroke="white"
          strokeWidth="1"
        >
          <circle cx="100" cy="100" r="96" />
          <circle cx="100" cy="100" r="4" fill="white" />
          {/* Hour marks */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180
            const x1 = 100 + 82 * Math.sin(angle)
            const y1 = 100 - 82 * Math.cos(angle)
            const x2 = 100 + 90 * Math.sin(angle)
            const y2 = 100 - 90 * Math.cos(angle)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          })}
          {/* Hands — 10:10 pose */}
          <line x1="100" y1="100" x2="68" y2="48" strokeWidth="2" strokeLinecap="round" />
          <line x1="100" y1="100" x2="132" y2="48" strokeWidth="2" strokeLinecap="round" />
          <line x1="100" y1="100" x2="100" y2="140" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        {/* Orb left */}
        <div
          aria-hidden
          className="absolute -left-24 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,162,39,0.1) 0%, transparent 65%)',
            animation: 'orb3 16s ease-in-out infinite',
          }}
        />

        <div id="services" className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="text-center mb-16">
              <SectionEyebrow className="justify-center mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Harlow, Essex
              </SectionEyebrow>
              <h2
                id="services-heading"
                className="section-h2"
              >
                Service Times.
              </h2>
              <p className="mt-5 font-body text-[15px] text-white/60 max-w-xl mx-auto">
                Our church meets regularly to fellowship in the presence of God. Below are the
                times for our weekly and monthly services held at our Harlow branch.
              </p>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-lg:grid-cols-2">
              {serviceTimes.map(({ day, time, name, note, highlight }) => (
                <div
                  key={name}
                  className="relative overflow-hidden p-7"
                  style={{
                    background: highlight
                      ? 'rgba(201,162,39,0.12)'
                      : 'rgba(0,0,0,0.22)',
                    border: highlight
                      ? '1px solid rgba(201,162,39,0.40)'
                      : '1px solid rgba(255,255,255,0.10)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {highlight && (
                    <div
                      aria-hidden
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ background: 'var(--gold)' }}
                    />
                  )}
                  <div className="font-display text-[10px] font-bold tracking-[2.5px] uppercase text-gold mb-3">
                    {day}
                  </div>
                  <div
                    className="font-display font-black text-white leading-none mb-3"
                    style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
                  >
                    {time}
                  </div>
                  <div className="font-display text-[12px] font-bold tracking-[1px] uppercase text-white/80">
                    {name}
                  </div>
                  {note && (
                    <div className="font-body text-[12px] text-white/45 mt-2 leading-snug">
                      {note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── COMMUNITY ── */}
      <section
        aria-labelledby="community-heading"
        className="relative overflow-hidden"
        style={{ minHeight: '60vh' }}
      >
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
          style={{ filter: 'grayscale(80%) brightness(0.22)' }}
          aria-hidden
        />

        {/* Purple tint */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,0,16,0.75) 0%, rgba(110,36,105,0.55) 50%, rgba(14,0,16,0.85) 100%)',
          }}
        />

        {/* Decorative star-burst */}
        <svg
          aria-hidden
          viewBox="0 0 400 400"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.05] pointer-events-none"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1"
        >
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 22.5 * Math.PI) / 180
            return (
              <line
                key={i}
                x1={200}
                y1={200}
                x2={200 + 195 * Math.sin(angle)}
                y2={200 - 195 * Math.cos(angle)}
              />
            )
          })}
          <circle cx="200" cy="200" r="195" />
          <circle cx="200" cy="200" r="120" />
          <circle cx="200" cy="200" r="60" />
        </svg>

        <div id="community" className="relative z-10 max-w-[1280px] mx-auto px-[52px] max-md:px-6 py-[120px] max-md:py-20 flex flex-col items-center text-center">
          <RevealWrapper>
            <SectionEyebrow className="justify-center mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Get Involved
            </SectionEyebrow>
            <h2
              id="community-heading"
              className="section-h2 mb-6"
            >
              Community.
            </h2>
            <p className="font-body text-[17px] text-white/70 max-w-lg mb-10 leading-relaxed">
              Become a part of the Salem community and join one of our teams —
              serving, growing, and making a difference together.
            </p>
            <div
              className="inline-flex items-center gap-3 px-9 py-4 font-display text-[11px] font-bold tracking-[2.5px] uppercase"
              style={{
                background: 'rgba(147,50,143,0.25)',
                border: '1px solid rgba(147,50,143,0.5)',
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: 'var(--gold)' }}
                aria-hidden
              />
              Coming Soon
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="purple" />

      {/* ── LEADERSHIP TRAINING + TRAINING MODULES ── */}
      <section
        aria-labelledby="training-heading"
        className="relative overflow-hidden"
      >
        {/* Background diagonal stripe art */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(147,50,143,0.04) 0px, rgba(147,50,143,0.04) 1px, transparent 1px, transparent 60px)',
          }}
        />

        {/* Orb top-right */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(147,50,143,0.10) 0%, transparent 65%)',
            animation: 'orb2 18s ease-in-out infinite',
          }}
        />

        {/* Orb bottom-left */}
        <div
          aria-hidden
          className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,162,39,0.07) 0%, transparent 65%)',
            animation: 'orb1 13s ease-in-out infinite',
          }}
        />

        {/* Decorative cross — centre background */}
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.025] pointer-events-none"
          fill="none"
          stroke="var(--purple-light)"
          strokeWidth="0.5"
        >
          <line x1="50" y1="0" x2="50" y2="100" />
          <line x1="0" y1="50" x2="100" y2="50" />
          {[45, 40, 35, 30, 20, 10].map((r) => (
            <circle key={r} cx="50" cy="50" r={r} />
          ))}
        </svg>

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            {/* Section header */}
            <div className="text-center mb-16">
              <SectionEyebrow className="justify-center mb-4">Discipleship</SectionEyebrow>
              <h2
                id="training-heading"
                className="section-h2"
              >
                Training &amp; Growth.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">

              {/* Left — Leadership Training */}
              <div>
                {/* Column label */}
                <div
                  className="flex items-center gap-4 mb-8 pb-5"
                  style={{ borderBottom: '1px solid rgba(201,162,39,0.25)' }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.35)' }}
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" className="w-5 h-5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[15px] font-black tracking-[2px] uppercase text-white">
                    Leadership Training
                  </h3>
                </div>
                <Accordion items={leadershipItems} defaultOpen={0} variant="dark" />
              </div>

              {/* Right — Training Modules */}
              <div>
                <div
                  className="flex items-center gap-4 mb-8 pb-5"
                  style={{ borderBottom: '1px solid rgba(147,50,143,0.35)' }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(147,50,143,0.12)', border: '1px solid rgba(147,50,143,0.35)' }}
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--purple-light)" strokeWidth="1.8" className="w-5 h-5">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[15px] font-black tracking-[2px] uppercase text-white">
                    Training Modules
                  </h3>
                </div>
                <Accordion items={trainingModules} defaultOpen={null} variant="dark" />
              </div>

            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />

    </main>
  )
}
