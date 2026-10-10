import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export const metadata: Metadata = {
  title: 'KDF Centers',
  description:
    'KDF Centers at Salem International Christian Centre — something exciting is coming soon. Stay connected for updates.',
  alternates: { canonical: 'https://salemeurope.org/kdf' },
  openGraph: {
    title: 'KDF Centers | Salem International Christian Centre',
    description: 'Something exciting is coming soon. Stay connected for updates.',
    url: 'https://salemeurope.org/kdf',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Salem International Christian Centre' }],
  },
  twitter: {
    title: 'KDF Centers | Salem International Christian Centre',
    description: 'Something exciting is coming soon. Stay connected for updates.',
    images: ['/images/hero.jpg'],
  },
}

export default function KDFPage() {
  return (
    <main id="main">
      <section
        aria-labelledby="kdf-heading"
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: '100dvh' }}
      >
        {/* Background image */}
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          aria-hidden
        />

        {/* Deep overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,0,16,0.80) 0%, rgba(74,24,71,0.65) 50%, rgba(14,0,16,0.92) 100%)',
          }}
        />

        {/* Dot grid */}
        <div aria-hidden className="absolute inset-0 hero-grid-pattern opacity-30" />

        {/* Decorative cross top-left */}
        <svg aria-hidden viewBox="0 0 80 80" className="absolute top-10 left-10 w-20 h-20 opacity-10 text-gold" fill="none" stroke="currentColor" strokeWidth="1">
          <line x1="40" y1="0" x2="40" y2="80" />
          <line x1="0" y1="40" x2="80" y2="40" />
          <circle cx="40" cy="40" r="38" />
          <circle cx="40" cy="40" r="20" />
        </svg>

        {/* Decorative cross bottom-right */}
        <svg aria-hidden viewBox="0 0 80 80" className="absolute bottom-10 right-10 w-20 h-20 opacity-10 text-gold" fill="none" stroke="currentColor" strokeWidth="1">
          <line x1="40" y1="0" x2="40" y2="80" />
          <line x1="0" y1="40" x2="80" y2="40" />
          <circle cx="40" cy="40" r="38" />
          <circle cx="40" cy="40" r="20" />
        </svg>

        {/* Large faint watermark */}
        <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span
            className="font-display font-black text-white tracking-[12px] uppercase opacity-[0.04]"
            style={{ fontSize: 'clamp(60px, 16vw, 180px)' }}
          >
            KDF
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto" style={{ animation: 'fadeUp 0.9s ease both' }}>
          <SectionEyebrow className="justify-center mb-5">Salem International Christian Centre</SectionEyebrow>

          <h1
            id="kdf-heading"
            className="font-display font-black uppercase text-white leading-none tracking-[-1px] mb-4"
            style={{ fontSize: 'clamp(48px, 9vw, 100px)' }}
          >
            KDF Centers
          </h1>

          <div className="mx-auto my-6 h-[3px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* Coming soon badge */}
          <div className="inline-block mb-8">
            <span
              className="font-display text-[11px] font-bold tracking-[4px] uppercase px-5 py-2"
              style={{
                color: '#C9A227',
                border: '1px solid rgba(201,162,39,0.45)',
                background: 'rgba(201,162,39,0.08)',
              }}
            >
              Coming Soon
            </span>
          </div>

          <p className="font-body text-[16px] text-white/70 leading-relaxed mb-10">
            We&apos;re building something for our KDF Centers. Stay tuned for updates.
            Get in touch and we&apos;ll keep you informed.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/contact-us" className="btn-gold">
              Get in Touch
            </Link>
            <Link
              href="/"
              className="font-display text-[10px] font-bold tracking-[2px] uppercase text-white/60 hover:text-white transition-colors no-underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
