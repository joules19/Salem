import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import RevealWrapper from '@/components/ui/RevealWrapper'
import Divider from '@/components/ui/Divider'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Salem International Christian Centre. Find our address, phone, email, and send us a message. Located in Harlow, Essex CM19 5FN.',
  alternates: { canonical: 'https://salemeurope.org/contact-us' },
  openGraph: {
    title: 'Contact Us | Salem International Christian Centre',
    description: 'Get in touch with Salem International Christian Centre in Harlow, Essex.',
    url: 'https://salemeurope.org/contact-us',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Salem International Christian Centre' }],
  },
  twitter: {
    title: 'Contact Us | Salem International Christian Centre',
    description: 'Get in touch with Salem International Christian Centre in Harlow, Essex.',
    images: ['/images/hero.jpg'],
  },
}

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Salemeurope',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/salemeurope',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UC7B3rQRKN5_4rvhFQoNEiwQ',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/salemeurope',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-7 h-7">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

export default function ContactUsPage() {
  return (
    <main id="main">

      {/* ── HERO — CONTACT & VISITING INFO ── */}
      <section
        aria-labelledby="contact-heading"
        className="relative overflow-hidden"
        style={{ minHeight: '70vh' }}
      >
        {/* Background image */}
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{ filter: 'grayscale(40%) brightness(0.3)' }}
          aria-hidden
        />

        {/* Purple gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, rgba(74,24,71,0.85) 0%, rgba(147,50,143,0.65) 40%, rgba(42,13,40,0.90) 100%)',
          }}
        />

        {/* Dot grid */}
        <div aria-hidden className="absolute inset-0 band-pattern opacity-50" />

        {/* Decorative concentric rings — top right */}
        <svg
          aria-hidden
          viewBox="0 0 400 400"
          className="absolute -top-20 -right-20 w-[380px] h-[380px] opacity-[0.07] pointer-events-none"
          fill="none"
          stroke="white"
          strokeWidth="0.8"
        >
          {[180, 140, 100, 62, 28].map((r) => <circle key={r} cx="200" cy="200" r={r} />)}
          <line x1="200" y1="20" x2="200" y2="380" />
          <line x1="20" y1="200" x2="380" y2="200" />
          <line x1="73" y1="73" x2="327" y2="327" />
          <line x1="327" y1="73" x2="73" y2="327" />
        </svg>

        {/* Decorative rings — bottom left */}
        <svg
          aria-hidden
          viewBox="0 0 300 300"
          className="absolute -bottom-12 -left-12 w-[260px] h-[260px] opacity-[0.06] pointer-events-none"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="0.8"
        >
          {[130, 95, 58, 24].map((r) => <circle key={r} cx="150" cy="150" r={r} />)}
        </svg>

        {/* Gold orb */}
        <div
          aria-hidden
          className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,162,39,0.10) 0%, transparent 65%)',
            animation: 'orb2 16s ease-in-out infinite',
          }}
        />

        {/* Wave art bottom */}
        <svg
          aria-hidden
          viewBox="0 0 1440 80"
          className="absolute bottom-0 left-0 w-full opacity-[0.08] pointer-events-none"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,48 1440,44 L1440,80 L0,80 Z" fill="white" />
        </svg>

        <div className="relative z-10 max-w-[1280px] mx-auto px-[52px] max-md:px-6 pt-[140px] pb-[80px] max-md:pt-28 max-md:pb-16">

          {/* Heading */}
          <div className="text-center mb-16 max-md:mb-12" style={{ animation: 'fadeUp 0.85s ease both' }}>
            <SectionEyebrow className="justify-center mb-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Get in Touch
            </SectionEyebrow>
            <h1
              id="contact-heading"
              className="font-display font-black uppercase text-white leading-[0.92] tracking-[-1px]"
              style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
            >
              Contact &amp; Visiting Info
            </h1>
            <div className="mx-auto mt-6 h-[3px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          {/* Info cards */}
          <div
            className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-14 max-sm:grid-cols-1"
            style={{ animation: 'fadeUp 0.95s ease 0.15s both' }}
          >
            {/* Address */}
            <div
              className="px-8 py-7 text-center"
              style={{
                background: 'rgba(0,0,0,0.30)',
                border: '1px solid rgba(255,255,255,0.14)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-4">
                Worship Gatherings
              </div>
              <address className="not-italic font-body text-[14px] text-white/75 leading-loose">
                Unit 11C, New Horizon Business Park<br />
                The Pinnacles, Barrows Road<br />
                Harlow, Essex<br />
                CM19 5FN
              </address>
            </div>

            {/* Phone & Email */}
            <div
              className="px-8 py-7 text-center"
              style={{
                background: 'rgba(0,0,0,0.30)',
                border: '1px solid rgba(255,255,255,0.14)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-4">
                Phone &amp; Email
              </div>
              <div className="font-body text-[14px] text-white/75 leading-loose">
                <a href="tel:01279411222" className="block hover:text-gold transition-colors">
                  01279 411 222
                </a>
                <a href="mailto:admin@salemeurope.org" className="block hover:text-gold transition-colors">
                  admin@salemeurope.org
                </a>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div
            className="flex items-center justify-center gap-6"
            style={{ animation: 'fadeUp 1s ease 0.3s both' }}
          >
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-14 h-14 flex items-center justify-center text-white/70 transition-all duration-200 hover:text-white hover:-translate-y-1"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Divider variant="gold" />

      {/* ── SEND US A MESSAGE ── */}
      <section aria-labelledby="form-heading" className="relative overflow-hidden">

        {/* Background diagonal lines */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, rgba(147,50,143,0.04) 0px, rgba(147,50,143,0.04) 1px, transparent 1px, transparent 52px)',
          }}
        />

        {/* Orb top-right */}
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(147,50,143,0.10) 0%, transparent 65%)',
            animation: 'orb1 14s ease-in-out infinite',
          }}
        />

        {/* Orb bottom-left */}
        <div
          aria-hidden
          className="absolute -bottom-16 -left-16 w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,162,39,0.07) 0%, transparent 65%)',
            animation: 'orb3 18s ease-in-out infinite',
          }}
        />

        {/* Decorative compass SVG */}
        <svg
          aria-hidden
          viewBox="0 0 400 400"
          className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-[320px] h-[320px] opacity-[0.04] pointer-events-none"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="0.8"
        >
          {[180, 140, 95, 52, 20].map((r) => <circle key={r} cx="200" cy="200" r={r} />)}
          <line x1="200" y1="20" x2="200" y2="380" />
          <line x1="20" y1="200" x2="380" y2="200" />
          <line x1="73" y1="73" x2="327" y2="327" />
          <line x1="327" y1="73" x2="73" y2="327" />
        </svg>

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] max-md:px-6 py-[96px] max-md:py-16">
          <RevealWrapper>
            <div className="text-center mb-14">
              <SectionEyebrow className="justify-center mb-4">Direct Message</SectionEyebrow>
              <h2
                id="form-heading"
                className="section-h2"
              >
                Send Us a Message.
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </RevealWrapper>
        </div>
      </section>

      <Divider variant="purple" />

      {/* ── FIND US HERE — MAP ── */}
      <section aria-labelledby="map-heading" className="relative overflow-hidden">

        {/* Top art strip */}
        <div
          aria-hidden
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg, transparent, var(--purple) 30%, var(--gold) 70%, transparent)' }}
        />

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] max-md:px-6 pt-[80px] pb-0 max-md:pt-14">
          <RevealWrapper>
            <div className="text-center mb-10">
              <SectionEyebrow className="justify-center mb-4">Harlow, Essex</SectionEyebrow>
              <h2
                id="map-heading"
                className="section-h2"
              >
                Find Us Here.
              </h2>
            </div>
          </RevealWrapper>
        </div>

        {/* Map embed — full width */}
        <div className="relative w-full" style={{ height: '480px' }}>
          {/* Gold border top */}
          <div
            aria-hidden
            className="absolute top-0 left-[52px] right-[52px] max-md:left-6 max-md:right-6 h-[2px] z-10"
            style={{ background: 'linear-gradient(90deg, transparent, var(--gold) 30%, var(--gold) 70%, transparent)' }}
          />
          <iframe
            title="Salem International Christian Centre location"
            src="https://maps.google.com/maps?q=Unit+11C,+New+Horizon+Business+Centre,+Barrows+Road,+Harlow,+Essex,+CM19+5FN&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(20%) contrast(1.05)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Purple blend overlay — pointer-events-none so map stays interactive */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'rgba(147,50,143,0.18)' }}
          />
        </div>
      </section>

      {/* ── LOOKING FOR ANOTHER BRANCH ── */}
      <section
        aria-label="Find another branch"
        className="band relative overflow-hidden"
      >
        <div className="band-pattern" aria-hidden />

        {/* Wave top */}
        <svg
          aria-hidden
          viewBox="0 0 1440 60"
          className="absolute top-0 left-0 w-full opacity-[0.08] pointer-events-none"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,36 1440,33 L1440,0 L0,0 Z" fill="white" />
        </svg>

        {/* Gold orb */}
        <div
          aria-hidden
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,162,39,0.12) 0%, transparent 65%)',
            animation: 'orb2 12s ease-in-out infinite',
          }}
        />

        <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] max-md:px-6 py-[56px] max-md:py-12">
          <div className="flex items-center justify-between gap-8 max-md:flex-col max-md:text-center">
            <div>
              <p className="font-display text-[20px] font-bold tracking-[1px] text-white max-md:text-[17px]">
                Looking for another branch&hellip;?
              </p>
              <p className="font-body text-[14px] text-white/55 mt-1">
                We have Salem family across the whole of the UK.
              </p>
            </div>
            <Link
              href="/about-us#branches"
              className="btn-ghost flex-shrink-0"
            >
              Click Here
            </Link>
          </div>
        </div>
      </section>

      <Divider variant="gold" />

    </main>
  )
}
