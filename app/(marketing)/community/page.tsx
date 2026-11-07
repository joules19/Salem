import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import RevealWrapper from '@/components/ui/RevealWrapper'

export const metadata: Metadata = {
  title: 'Community',
  description:
    'Salem Communities — where every member finds their place. Discover Salem Men and our growing family of community fellowships at Salem International Christian Centre.',
  alternates: { canonical: 'https://salemeurope.org/community' },
  openGraph: {
    title: 'Community | Salem International Christian Centre',
    description:
      'Where every member finds their place. Discover Salem Men and our growing family of community fellowships.',
    url: 'https://salemeurope.org/community',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Salem Communities' }],
  },
  twitter: {
    title: 'Community | Salem International Christian Centre',
    description:
      'Where every member finds their place. Discover Salem Men and our growing family of community fellowships.',
    images: ['/images/hero.jpg'],
  },
}

const salemMenObjectives = [
  { title: 'Spiritual Growth', body: 'Develop a deeper relationship with God through prayer, Bible study, worship, and fellowship.' },
  { title: 'Godly Leadership', body: 'Raise men of integrity, wisdom, and character who lead by biblical principles.' },
  { title: 'Family Responsibility', body: 'Equip men to be loving husbands, responsible fathers, and spiritual leaders in their homes.' },
  { title: 'Brotherhood & Fellowship', body: 'Build strong relationships through mutual encouragement, mentorship, accountability, and support.' },
  { title: 'Personal Development', body: 'Empower men to pursue excellence in their careers, businesses, finances, and personal lives.' },
  { title: 'Service & Community Impact', body: 'Inspire men to serve in the church, support those in need, and make a positive difference in their communities.' },
]

export default function CommunityPage() {
  return (
    <main id="main">

      {/* ── HERO ── */}
      <section
        aria-labelledby="community-heading"
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
              'linear-gradient(180deg, rgba(14,0,16,0.78) 0%, rgba(74,24,71,0.62) 50%, rgba(14,0,16,0.95) 100%)',
          }}
        />
        <div aria-hidden className="absolute inset-0 hero-grid-pattern opacity-25" />

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

        <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="font-display font-black text-white tracking-[10px] uppercase opacity-[0.035]"
            style={{ fontSize: 'clamp(44px, 14vw, 180px)' }}
          >
            Community
          </span>
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto" style={{ animation: 'fadeUp 0.9s ease both' }}>
          <SectionEyebrow className="justify-center mb-6 max-md:before:hidden">
            Salem International Christian Centre
          </SectionEyebrow>
          <h1
            id="community-heading"
            className="font-display font-black uppercase text-white leading-none tracking-[-2px] mb-5"
            style={{ fontSize: 'clamp(52px, 10vw, 108px)' }}
          >
            Salem<br />
            <span className="text-gold">Communities</span>
          </h1>
          <div className="mx-auto my-6 h-[2px] w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="font-serif italic text-[17px] text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Where every member finds their place, their people, and their purpose.
          </p>
          <a href="#our-communities" className="btn-gold">
            Explore Communities
          </a>
        </div>
      </section>

      {/* ── OUR COMMUNITIES ── */}
      <section id="our-communities" aria-labelledby="communities-list-heading">
        <div className="max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
          <RevealWrapper>
            <SectionEyebrow className="mb-5">Our Communities</SectionEyebrow>
            <h2 id="communities-list-heading" className="section-h2 mb-16">
              Find Your <span className="text-gold">Fellowship</span>
            </h2>
          </RevealWrapper>

          {/* ─ Salem Men entry ─ */}
          <RevealWrapper>
            <article
              aria-labelledby="salem-men-heading"
              className="relative"
              style={{
                background: 'rgba(147,50,143,0.05)',
                border: '1px solid rgba(147,50,143,0.25)',
              }}
            >
              {/* Gold top bar */}
              <div className="h-[3px] bg-gradient-to-r from-gold via-gold-light to-transparent" />

              <div className="p-10 max-md:p-6">
                <div className="grid grid-cols-[1fr_1.1fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-10">

                  {/* Left — identity */}
                  <div>
                    <div className="font-display text-[9px] font-black tracking-[3px] uppercase text-gold mb-3">
                      Men&rsquo;s Fellowship
                    </div>
                    <h3
                      id="salem-men-heading"
                      className="font-display font-black uppercase text-white leading-none tracking-[-1px] mb-1"
                      style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
                    >
                      Salem Men
                    </h3>
                    <div className="font-display text-[13px] font-bold tracking-[1px] text-gold/80 uppercase mb-6">
                      Raising Men of Power, Purpose and Impact
                    </div>

                    <p className="font-body text-[15px] text-white/70 leading-[1.75] mb-4">
                      Salem Men is the men&rsquo;s fellowship of Salem International Christian Centre, committed to raising godly men who demonstrate spiritual strength, integrity, leadership, and excellence in every area of life.
                    </p>
                    <p className="font-body text-[15px] text-white/60 leading-[1.75] mb-8">
                      Our mission is to equip and empower men to fulfil their God-given purpose, become effective leaders in their homes, the church and society, and positively impact their communities for Christ.
                    </p>

                    {/* Vision */}
                    <div
                      className="p-5 mb-8"
                      style={{
                        background: 'rgba(0,0,0,0.25)',
                        borderLeft: '3px solid var(--gold)',
                      }}
                    >
                      <div className="font-display text-[9px] font-black tracking-[2.5px] uppercase text-gold mb-2">
                        Our Vision
                      </div>
                      <p className="font-display text-[13px] font-bold text-white leading-relaxed">
                        To raise Men of Power, Men of Purpose and Men of Impact who advance God&rsquo;s Kingdom and leave a lasting legacy for future generations.
                      </p>
                    </div>

                    {/* Scripture */}
                    <div
                      className="p-5 mb-8"
                      style={{
                        background: 'rgba(147,50,143,0.1)',
                        border: '1px solid rgba(147,50,143,0.3)',
                      }}
                    >
                      <div
                        aria-hidden
                        className="font-serif font-black text-gold opacity-25 leading-none mb-1 select-none"
                        style={{ fontSize: 36 }}
                      >
                        &ldquo;
                      </div>
                      <blockquote className="font-serif italic text-white/80 text-[14px] leading-[1.8] mb-2">
                        Watch, stand fast in the faith, be brave, be strong. Let all that you do be done with love.
                      </blockquote>
                      <div className="font-display text-[9px] font-bold tracking-[2.5px] uppercase text-gold">
                        1 Corinthians 16:13–14
                      </div>
                    </div>

                    <Link href="/contact-us" className="btn-gold">
                      Join Salem Men
                    </Link>
                  </div>

                  {/* Right — objectives */}
                  <div>
                    <div className="font-display text-[9px] font-black tracking-[3px] uppercase text-gold mb-6">
                      Our Objectives
                    </div>
                    <ol className="flex flex-col" style={{ listStyle: 'none' }}>
                      {salemMenObjectives.map((obj, i) => (
                        <li
                          key={obj.title}
                          className="flex gap-0 items-stretch border-b border-white/[.08] first:border-t first:border-white/[.08]"
                        >
                          <div className="font-display text-[11px] font-black tracking-[1px] text-gold min-w-[42px] py-[20px] flex-shrink-0 flex items-start">
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          <div className="py-[20px] pr-4 flex-1">
                            <div className="font-display text-[12px] font-black uppercase tracking-[0.5px] text-white mb-[4px]">
                              {obj.title}
                            </div>
                            <div className="font-body text-[12px] text-white/55 leading-relaxed">
                              {obj.body}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                </div>
              </div>
            </article>
          </RevealWrapper>
        </div>
      </section>

    </main>
  )
}
