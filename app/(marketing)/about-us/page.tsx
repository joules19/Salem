import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Divider from '@/components/ui/Divider'
import Accordion from '@/components/about/Accordion'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Salem International Christian Centre — our story, vision, mission, core values, and branches across the UK. Founded on a God-given mandate in 1986.',
  alternates: { canonical: 'https://salemeurope.org/about-us' },
  openGraph: {
    title: 'About Us | Salem International Christian Centre',
    description:
      'Our story, vision, mission, core values, and branches across the UK. Founded on a God-given mandate in 1986.',
    url: 'https://salemeurope.org/about-us',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Salem International Christian Centre' }],
  },
  twitter: {
    title: 'About Us | Salem International Christian Centre',
    description: 'Our story, vision, mission, core values, and branches across the UK.',
    images: ['/images/hero.jpg'],
  },
}

const coreValues = [
  {
    title: 'Practical Peace and Righteousness',
    content: 'This is our Jesus centred heritage. Salem means peace and righteousness. We are committed to raising a people who are committed to a life style of peace and holiness.',
  },
  {
    title: 'Faith and Wisdom',
    content: 'Practical spirituality forms the bedrock of our very existence. We are raising people who are: strong in the faith of our Lord Jesus Christ; committed to a life of faith that pleases the Lord (Hebrews 11:6); committed to a life of practical wisdom that will guarantee their heritage on earth (Proverbs 9:9-12).',
  },
  {
    title: 'Intimacy with the Holy Spirit',
    content: 'There can never be true spirituality without a personal intimate relationship with the Holy Spirit. We are committed to raising Pastors, Leaders and a people who personally experience the person of the Holy Spirit. Every notable, remarkable and mighty act in ministry and life are a direct reflection of the presence, the power and the blessing of the Holy Spirit.',
  },
  {
    title: 'Confidence and Positive Mentality',
    content: 'We are raising a people who are expected to exhibit leadership traits, character and habits that reflect confidence and dignity at all levels.',
  },
  {
    title: 'Capacity Building',
    content: 'We are committed to raising a people who themselves show commitment to a lifestyle of continuous studies and personal development, striving to be relevant to the overall vision.',
  },
  {
    title: 'Integrity',
    content: 'A man may rise to the top by craftiness, but only integrity can keep him there. Salemites worldwide are therefore expected to demonstrate honesty, uprightness and trustworthiness at all times. They must be transparent and be a people of virtue.',
  },
  {
    title: 'Responsibility',
    content: 'Doing the right thing at the right time and for the right reasons is one of the values we want Salemites worldwide to hold dear. We believe in discipline for effective leadership.',
  },
  {
    title: 'Diligence',
    content: 'Only the diligent eventually stand before kings, therefore, Salemites worldwide are expected to be strongly committed to a diligent lifestyle. We extol the virtues of hard work and quality input to achieve great output and a consistent strive towards excellence.',
  },
  {
    title: 'Sacrifice',
    content: 'Going up requires giving up something. Sacrifice is the ultimate price for outstanding leadership. For this reason, Salemites worldwide are expected to go extra-mile, paying the extra price in the attainment of their goals.',
  },
]

const branches = [
  {
    title: 'Salem Europe Headquarters',
    content: (
      <address className="not-italic leading-loose">
        <div className="font-semibold text-white mb-1">Bishop David &amp; Rev. Mrs Esther Onimisi</div>
        Salem International Christian Centre<br />
        Unit 11c New Horizon Business Centre<br />
        Barrows Road, Harlow, Essex CM19 5FN<br />
        <span className="text-gold/80 text-[13px]">social</span> @SalemEurope &nbsp;·&nbsp;
        <a href="mailto:admin@salemeurope.org" className="text-gold hover:underline">admin@salemeurope.org</a>
      </address>
    ),
  },
  {
    title: 'Salem Aberdeen',
    content: (
      <address className="not-italic leading-loose">
        <div className="font-semibold text-white mb-1">Rev. Eddyson &amp; Pastor Mrs Mary Ofem</div>
        191 Victoria Road, Torry, Aberdeen AB11 9NE<br />
        <a href="mailto:salem.aberdeen@salemeurope.org" className="text-gold hover:underline">salem.aberdeen@salemeurope.org</a>
      </address>
    ),
  },
  {
    title: 'Salem Belfast',
    content: (
      <address className="not-italic leading-loose">
        <div className="font-semibold text-white mb-1">Rev. Ezekiella Sam-Amaga Eniola</div>
        South Belfast Quaker Meeting House<br />
        22 Marlborough Park N, Belfast BT9 6HJ<br />
        <span className="text-gold/80 text-[13px]">t</span> 07498975162
      </address>
    ),
  },
  {
    title: 'Salem Cardiff',
    content: (
      <address className="not-italic leading-loose">
        <div className="font-semibold text-white mb-1">Rev. Kennedy &amp; Rev. Mrs Joyce Bintei Sam-Amaga</div>
        Eastern Leisure Centre, Llarumney Avenue<br />
        Cardiff CF3 4DN<br />
        <a href="mailto:salem.cardiff@salemeurope.org" className="text-gold hover:underline">salem.cardiff@salemeurope.org</a>
      </address>
    ),
  },
  {
    title: 'Salem Edinburgh',
    content: (
      <address className="not-italic leading-loose">
        <div className="font-semibold text-white mb-1">Rev. Comfort E-Adejoh</div>
        Newbattle Road, Midlothian EH22 3LH<br />
        <a href="mailto:salem.edinburgh@salemeurope.org" className="text-gold hover:underline">salem.edinburgh@salemeurope.org</a>
      </address>
    ),
  },
  {
    title: 'Salem Glasgow',
    content: (
      <address className="not-italic leading-loose">
        <div className="font-semibold text-white mb-1">Pst. Akin Orekoya</div>
        8 Harmony Square Govan, Glasgow G51 3LW<br />
        <a href="mailto:salem.glasgow@salemeurope.org" className="text-gold hover:underline">salem.glasgow@salemeurope.org</a>
      </address>
    ),
  },
  {
    title: 'Salem Plymouth',
    content: (
      <address className="not-italic leading-loose">
        <div className="font-semibold text-white mb-1">Rev. Juliet Joseph</div>
        Davie Hall, 1–9 Clifton Place, Plymouth PL4 8HU<br />
        <a href="mailto:Salem.Plymouth@salemeurope.org" className="text-gold hover:underline">Salem.Plymouth@salemeurope.org</a>
      </address>
    ),
  },
  {
    title: 'Salem South London',
    content: (
      <address className="not-italic leading-loose">
        <div className="font-semibold text-white mb-1">Rev. Wonu Adebiyi</div>
        Newlands Academy, Stuart Road<br />
        Peckham Rye, London SE15 3AZ<br />
        <span className="text-gold/80 text-[13px]">social</span> @SalemSouthLDN &nbsp;·&nbsp;
        <a href="mailto:southlondon@salemeurope.org" className="text-gold hover:underline">southlondon@salemeurope.org</a>
      </address>
    ),
  },
]

export default function AboutUsPage() {
  return (
    <main id="main">

      {/* ── HERO ── */}
      <section
        aria-labelledby="about-heading"
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: '52vh' }}
      >
        {/* Background image */}
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden
        />

        {/* Deep overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,0,16,0.72) 0%, rgba(74,24,71,0.60) 50%, rgba(14,0,16,0.88) 100%)',
          }}
        />

        {/* Dot grid art */}
        <div
          aria-hidden
          className="absolute inset-0 hero-grid-pattern opacity-40"
        />

        {/* Decorative cross top-left */}
        <svg
          aria-hidden
          viewBox="0 0 80 80"
          className="absolute top-10 left-10 w-20 h-20 opacity-10 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <line x1="40" y1="0" x2="40" y2="80" />
          <line x1="0" y1="40" x2="80" y2="40" />
          <circle cx="40" cy="40" r="38" />
          <circle cx="40" cy="40" r="20" />
        </svg>

        {/* Decorative cross bottom-right */}
        <svg
          aria-hidden
          viewBox="0 0 80 80"
          className="absolute bottom-10 right-10 w-20 h-20 opacity-10 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <line x1="40" y1="0" x2="40" y2="80" />
          <line x1="0" y1="40" x2="80" y2="40" />
          <circle cx="40" cy="40" r="38" />
          <circle cx="40" cy="40" r="20" />
        </svg>

        {/* Large faint watermark text */}
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <span
            className="font-display font-black text-white tracking-[12px] uppercase opacity-[0.04]"
            style={{ fontSize: 'clamp(80px, 18vw, 200px)' }}
          >
            Salem
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6" style={{ animation: 'fadeUp 0.9s ease both' }}>
          <SectionEyebrow className="justify-center mb-5">Salem International Christian Centre</SectionEyebrow>
          <h1
            id="about-heading"
            className="font-display font-black uppercase text-white leading-none tracking-[-1px]"
            style={{ fontSize: 'clamp(52px, 10vw, 110px)' }}
          >
            About Us
          </h1>
          {/* Gold underline bar */}
          <div className="mx-auto mt-6 h-[3px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="mt-6 font-body text-[16px] text-white/70 max-w-md mx-auto leading-relaxed">
            A people on a God-given mandate — raised to change nations.
          </p>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── OUR LEADERS ── */}
      <section
        className="band relative overflow-hidden"
        aria-labelledby="leaders-heading"
      >
        <div className="band-pattern" aria-hidden />

        {/* Decorative orb */}
        <div
          aria-hidden
          className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,162,39,0.12) 0%, transparent 65%)',
            animation: 'orb1 12s ease-in-out infinite',
          }}
        />

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="grid grid-cols-[1fr_1fr] gap-[80px] items-center max-md:grid-cols-1 max-md:gap-10">

              {/* Left — text */}
              <div>
                <SectionEyebrow className="mb-4">Leadership</SectionEyebrow>
                <h2 id="leaders-heading" className="section-h2 mb-8">
                  Our<br /><span className="text-gold">Leaders.</span>
                </h2>
                <p className="font-body text-[16px] text-white/75 leading-relaxed mb-8">
                  Find out more about Archbishop Sam Amaga, Bishop Love Sam Amaga,
                  Bishop David Onimisi and Rev. Mrs Esther Onimisi — the shepherds
                  God has placed over Salem Europe.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    ['Archbishop Sam Amaga', 'Founder & Senior Pastor'],
                    ['Bishop Love Sam-Amaga', 'Co-Founder'],
                    ['Bishop David Onimisi', 'Salem Europe HQ'],
                    ['Rev. Mrs Esther Onimisi', 'Salem Europe HQ'],
                  ].map(([name, role]) => (
                    <div
                      key={name}
                      className="flex items-center gap-4 border-b border-white/[.1] pb-4"
                    >
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: 'var(--gold)' }}
                      />
                      <div>
                        <div className="font-display text-[13px] font-bold tracking-[1px] text-white">{name}</div>
                        <div className="font-body text-[12px] text-white/50 tracking-[0.5px]">{role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — photo */}
              <div>
                <div className="leader-photo-frame">
                  <Image
                    src="/images/second.png"
                    alt="Archbishop Sam Amaga and Bishop Love Sam-Amaga, founders of Salem International Christian Centre"
                    width={640}
                    height={560}
                    className="w-full object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                      Archbishop Sam Amaga
                    </div>
                    <div className="font-display text-[10px] font-medium tracking-[2.5px] uppercase text-gold">
                      &amp; Bishop Love Sam-Amaga
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── OUR STORY ── */}
      <section aria-labelledby="story-heading" className="relative overflow-hidden">
        {/* Background art: subtle diagonal lines */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(147,50,143,0.04) 0px, rgba(147,50,143,0.04) 1px, transparent 1px, transparent 48px)',
          }}
        />
        {/* Orb left */}
        <div
          aria-hidden
          className="absolute left-[-120px] top-[20%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(147,50,143,0.12) 0%, transparent 65%)',
            animation: 'orb2 15s ease-in-out infinite',
          }}
        />

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="grid grid-cols-[2fr_3fr] gap-[80px] max-md:grid-cols-1 max-md:gap-10">

              {/* Left */}
              <div className="flex flex-col justify-start">
                <SectionEyebrow className="mb-4">Since 1986</SectionEyebrow>
                <h2 id="story-heading" className="section-h2 mb-6">
                  Our<br />Story.
                </h2>
                {/* Year badge */}
                <div
                  className="relative overflow-hidden mt-4 px-7 py-10 text-center"
                  style={{
                    background: 'rgba(147,50,143,0.08)',
                    border: '1px solid rgba(147,50,143,0.30)',
                  }}
                >
                  <div
                    aria-hidden
                    className="font-display font-black absolute top-0 left-1/2 -translate-x-1/2 leading-none pointer-events-none select-none"
                    style={{ fontSize: 100, color: 'var(--purple)', opacity: 0.18, top: -10 }}
                  >
                    1986
                  </div>
                  <div className="relative z-[1]">
                    <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-2">
                      Founded
                    </div>
                    <div className="font-display text-[36px] font-black text-white leading-none">
                      7th March
                    </div>
                    <div className="font-display text-[14px] font-bold tracking-[2px] text-white/60 mt-1">
                      1986
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div>
                <div className="mb-8">
                  <div className="font-display text-[11px] font-bold tracking-[3px] uppercase text-gold mb-5">
                    The Beginning
                  </div>
                  <p className="font-body text-[16px] text-white/80 leading-relaxed mb-5">
                    It was the 7th of March 1986 that the Lord spoke to His servant
                    Archbishop Sam Amaga and gave him a mandate to raise an army — a great people who are:
                  </p>
                  <ul className="flex flex-col gap-3 mb-6">
                    {[
                      'Strong in faith.',
                      'Empowered by wisdom.',
                      'Intimate with the Holy Ghost.',
                      'Doing exploit in life and for God.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-[7px] w-[6px] h-[6px] rounded-full flex-shrink-0"
                          aria-hidden
                          style={{ background: 'var(--gold)' }}
                        />
                        <span className="font-body text-[15px] text-white/75">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote
                  className="font-serif text-[18px] italic font-normal text-white/90 leading-[1.8] border-l-4 border-gold pl-8 mb-6"
                >
                  &ldquo;The Lord said to His servant, Archbishop Sam Amaga on the 15th of March 1986:
                  &lsquo;I AM sending you to raise me an Army, not one great man, but a great people who are
                  strong in Faith and cannot be defeated by the devil, in close intimacy with the Holy Spirit,
                  empowered by wisdom to reign in their spheres of life.&rsquo;&rdquo;
                </blockquote>

                <div className="font-display text-[11px] font-bold tracking-[2px] uppercase text-gold">
                  Archbishop Sam Amaga &amp; Bishop Love Sam-Amaga
                </div>

                {/* Our Mandate */}
                <div
                  className="mt-10 pt-10"
                  style={{ borderTop: '1px solid rgba(147,50,143,0.30)' }}
                >
                  <div className="font-display text-[11px] font-bold tracking-[3px] uppercase text-gold mb-5">
                    Our Mandate
                  </div>
                  <p className="font-body text-[16px] text-white/80 leading-relaxed">
                    Thus the mandate to raise people who are change agents in the hand of the Lord was delivered.
                    Foundation Faith Church, therefore, is the first 10 years of church planting labour that
                    Archbishop Sam Amaga, his wife and five children and the host of ministers he raised embarked
                    upon in the city of Port-Harcourt, Nigeria. Since then it has grown into the worldwide ministry
                    today, known as Salem International Christian Centre.
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="purple" />

      {/* ── OUR MISSION ── */}
      <section
        aria-labelledby="mission-heading"
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0e0010 0%, #1a0420 50%, #0e0010 100%)' }}
      >
        {/* Decorative crosses pattern */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { top: '8%', left: '5%', size: 60, opacity: 0.06 },
            { top: '60%', left: '2%', size: 40, opacity: 0.05 },
            { top: '20%', right: '4%', size: 80, opacity: 0.06 },
            { top: '75%', right: '6%', size: 50, opacity: 0.05 },
          ].map((item, i) => (
            <svg
              key={i}
              viewBox="0 0 60 60"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1"
              className="absolute"
              style={{ width: item.size, height: item.size, top: item.top, left: (item as any).left, right: (item as any).right, opacity: item.opacity }}
            >
              <line x1="30" y1="0" x2="30" y2="60" />
              <line x1="0" y1="30" x2="60" y2="30" />
              <circle cx="30" cy="30" r="28" />
            </svg>
          ))}
        </div>

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="grid grid-cols-[2fr_3fr] gap-[80px] max-md:grid-cols-1 max-md:gap-10">
              <div>
                <SectionEyebrow className="mb-4">Purpose</SectionEyebrow>
                <h2 id="mission-heading" className="section-h2 mb-6">
                  Our<br /><span className="text-gold">Mission.</span>
                </h2>
              </div>
              <div>
                <ul className="flex flex-col gap-5 mb-8">
                  {[
                    'To raise the great army of people who shall live holy and live ready and be rewardable when Jesus returns.',
                    'To establish 300 million of such army of people in over 150,000 churches worldwide if Jesus tarries — more shall be established.',
                    'To establish ministries as component parts of achieving our God-given objectives.',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-5 pb-5 border-b border-white/[.08]"
                    >
                      <div className="font-display text-[11px] font-black tracking-[1px] text-gold min-w-[32px] pt-[3px]">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span className="font-body text-[15px] text-white/75 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-[15px] text-white/70 mb-5 leading-relaxed">
                  To achieve these laudable goals, we are focusing on raising people:
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Who will not settle for the average, but strive for distinctive achievement in the area of their calling.',
                    'Who will not be imprisoned by their disappointment, but will go all out to realise their dreams.',
                    'Who will not be ruled by the fear of their darkest mistakes, but shall walk with the Holy Spirit to focus on the opportunities and create the opportunity for others to excel.',
                    'Who are empowered in their spirit, soul and body to go out there and evangelise the gospel with all boldness and authority in Christ Jesus.',
                    'Who will pursue every Godly opportunity with passion and create room for others to achieve.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-[8px] w-[5px] h-[5px] rounded-full flex-shrink-0"
                        aria-hidden
                        style={{ background: 'var(--gold)' }}
                      />
                      <span className="font-body text-[15px] text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── OUR VISION ── */}
      <section aria-labelledby="vision-heading" className="relative overflow-hidden">
        {/* Orb right */}
        <div
          aria-hidden
          className="absolute right-[-100px] bottom-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 65%)',
            animation: 'orb3 18s ease-in-out infinite',
          }}
        />
        {/* Background line art */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(147,50,143,0.03) 0px, rgba(147,50,143,0.03) 1px, transparent 1px, transparent 56px)',
          }}
        />

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="grid grid-cols-[3fr_2fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">

              {/* Left — content */}
              <div>
                <SectionEyebrow className="mb-4">Habakkuk 2:2–3</SectionEyebrow>
                <h2 id="vision-heading" className="section-h2 mb-8">
                  Our<br />Vision.
                </h2>

                <div
                  className="mb-8 px-8 py-7"
                  style={{
                    background: 'rgba(147,50,143,0.08)',
                    borderLeft: '3px solid var(--gold)',
                  }}
                >
                  <div className="font-display text-[11px] font-bold tracking-[3px] uppercase text-gold mb-4">
                    The Vision Made Plain
                  </div>
                  <p className="font-serif text-[17px] italic text-white/85 leading-[1.8] mb-5">
                    &ldquo;I AM sending you to raise me an Army, not one great man, but a great people who are
                    Strong in Faith and cannot be defeated by the devil, In close intimacy with the Holy Spirit,
                    Empowered by wisdom to reign in their spheres of life, Strong in the Word and Prayer,
                    walking in covenant prosperity and taking Nations for God.&rdquo;
                  </p>
                  <div className="font-display text-[11px] font-bold tracking-[2px] uppercase text-gold">
                    Archbishop Sam Amaga &amp; Bishop Love Sam-Amaga
                  </div>
                </div>

                <ul className="flex flex-col">
                  {[
                    'Who will not be imprisoned by their disappointment, but will go all out to realise their dreams.',
                    'Who will not be ruled by the fear of their darkest mistakes, but shall walk with the Holy Spirit to focus on the opportunities and create the opportunity for others to excel.',
                    'Who are empowered in their spirit, soul and body to go out there and evangelise the gospel with all boldness and authority in Christ Jesus.',
                    'Who will pursue every Godly opportunity with passion and create room for others to achieve.',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-0 items-stretch border-b border-white/[.1] first:border-t first:border-white/[.1]"
                    >
                      <div className="font-display text-[11px] font-black tracking-[1px] text-gold min-w-[48px] py-[20px] flex-shrink-0 flex items-start">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="py-[20px] pr-4 text-[15px] font-light text-white/80 leading-[1.65] flex-1">
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — stat block */}
              <div className="flex flex-col gap-5">
                <div
                  className="text-center p-9"
                  style={{
                    background: 'rgba(0,0,0,0.35)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderTop: '3px solid var(--gold)',
                  }}
                >
                  <div
                    className="font-display font-black text-white leading-none mb-2"
                    style={{ fontSize: 'clamp(48px, 6vw, 72px)' }}
                  >
                    40+
                  </div>
                  <div className="font-display text-[11px] font-bold tracking-[2px] uppercase text-gold">
                    Years of Ministry
                  </div>
                </div>

                <div
                  className="text-center p-9"
                  style={{
                    background: 'rgba(147,50,143,0.12)',
                    border: '1px solid rgba(147,50,143,0.3)',
                  }}
                >
                  <div
                    className="font-display font-black text-white leading-none mb-2"
                    style={{ fontSize: 'clamp(48px, 6vw, 72px)' }}
                  >
                    8+
                  </div>
                  <div className="font-display text-[11px] font-bold tracking-[2px] uppercase text-gold">
                    UK Branches
                  </div>
                </div>

                <div
                  className="text-center p-9"
                  style={{
                    background: 'rgba(0,0,0,0.25)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="font-serif text-[17px] italic text-white/80 leading-relaxed">
                    &ldquo;In these years, we have seen God save a multitude of people, seen His amazing
                    acts in healing, and seen God make many mighty.&rdquo;
                  </div>
                </div>
              </div>

            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="purple" />

      {/* ── OUR CORE VALUES ── */}
      <section
        className="band relative overflow-hidden"
        aria-labelledby="values-heading"
      >
        <div className="band-pattern" aria-hidden />

        {/* Decorative wave shapes */}
        <svg
          aria-hidden
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full opacity-[0.07] pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C360,320 720,0 1080,160 C1260,240 1380,200 1440,180 L1440,320 L0,320 Z"
            fill="white"
          />
        </svg>
        <svg
          aria-hidden
          viewBox="0 0 1440 320"
          className="absolute top-0 right-0 w-full opacity-[0.06] pointer-events-none"
          preserveAspectRatio="none"
          style={{ transform: 'scaleY(-1)' }}
        >
          <path
            d="M0,160 C360,320 720,0 1080,160 C1260,240 1380,200 1440,180 L1440,320 L0,320 Z"
            fill="white"
          />
        </svg>

        {/* Orb centre */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(201,162,39,0.07) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="grid grid-cols-[2fr_3fr] gap-[80px] max-md:grid-cols-1 max-md:gap-10">
              <div>
                <SectionEyebrow className="mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Who We Are
                </SectionEyebrow>
                <h2 id="values-heading" className="section-h2 mb-6">
                  Our Core<br />Values.
                </h2>
                <p className="font-body text-[15px] text-white/65 leading-relaxed">
                  These values shape every Salemite — defining how we live, lead,
                  and serve in our communities and beyond.
                </p>
              </div>
              <div>
                <Accordion items={coreValues} defaultOpen={0} variant="purple" />
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── OUR BRANCHES ── */}
      <section id="branches" aria-labelledby="branches-heading" className="relative overflow-hidden" style={{ scrollMarginTop: '76px' }}>
        {/* Hero image desaturated background */}
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          style={{ filter: 'grayscale(100%) brightness(0.18)' }}
          aria-hidden
        />

        {/* Purple tint overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(42,13,40,0.82) 0%, rgba(14,0,16,0.88) 100%)',
          }}
        />

        {/* Geometric art — map pin SVG shapes */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { top: '10%', left: '3%', r: 120 },
            { top: '65%', right: '2%', r: 90 },
          ].map((c, i) => (
            <svg
              key={i}
              viewBox="0 0 200 200"
              className="absolute opacity-[0.05]"
              style={{
                width: c.r * 2,
                height: c.r * 2,
                top: c.top,
                left: (c as any).left,
                right: (c as any).right,
              }}
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1"
            >
              <circle cx="100" cy="100" r="98" />
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="20" />
              <line x1="100" y1="0" x2="100" y2="200" />
              <line x1="0" y1="100" x2="200" y2="100" />
            </svg>
          ))}
        </div>

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <div className="grid grid-cols-[2fr_3fr] gap-[80px] max-md:grid-cols-1 max-md:gap-10">
              <div>
                <SectionEyebrow className="mb-4">United Across the UK</SectionEyebrow>
                <h2 id="branches-heading" className="section-h2 mb-6">
                  Our<br />Branches.
                </h2>
                <p className="font-body text-[15px] text-white/65 leading-relaxed mb-8">
                  The Salem family across the United Kingdom — one vision, many expressions.
                </p>
                {/* <Link
                  href="/give"
                  className="btn-gold"
                >
                  Support a Branch
                </Link> */}
              </div>
              <div>
                <Accordion items={branches} defaultOpen={null} variant="dark" />
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="gold" />

    </main>
  )
}
