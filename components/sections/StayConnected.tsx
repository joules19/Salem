import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

const socials = [
  {
    name: 'YouTube',
    handle: '@SalemEurope',
    href: 'https://www.youtube.com/channel/UC7B3rQRKN5_4rvhFQoNEiwQ',
    fullWidth: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'Salem Intl Christian Centre London',
    href: 'https://www.facebook.com/Salemeurope',
    fullWidth: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    handle: '@SalemEurope',
    href: 'https://x.com/salemeurope',
    fullWidth: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@SalemEurope',
    href: 'https://www.instagram.com/salemeurope',
    fullWidth: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  // {
  //   name: 'TikTok',
  //   handle: '@SalemEurope',
  //   href: '#',
  //   fullWidth: true,
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
  //       <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.73z" />
  //     </svg>
  //   ),
  // },
]

export default function StayConnected() {
  return (
    <section
      id="connect"
      className="relative overflow-hidden"
      style={{ background: 'var(--purple)' }}
      aria-labelledby="connect-heading"
    >
      <div className="band-pattern" aria-hidden />
      <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
        <RevealWrapper>
          <div className="grid grid-cols-2 gap-[80px] items-center max-md:grid-cols-1 max-md:gap-10">

            {/* Left — social cards */}
            <div>
              <SectionEyebrow className="mb-4" style={{ color: 'var(--gold)' }}>Social Media</SectionEyebrow>
              <h2 id="connect-heading" className="section-h2 mb-3">
                Stay<br />Connected.
              </h2>
              <p className="text-[16px] text-white/80 font-light leading-[1.65] mb-8">
                Follow us across all platforms to stay updated with sermons, events, testimonies, and community life at Salem.
              </p>

              <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
                {socials.map(({ name, handle, href, fullWidth, icon }) => (
                  <a
                    key={name}
                    href={href}
                    className={`flex items-center gap-3.5 px-[22px] py-5 no-underline transition-all hover:border-gold${fullWidth ? ' col-span-2 max-md:col-span-1' : ''}`}
                    style={{
                      background: 'rgba(0, 0, 0, .3)',
                      border: '1px solid rgba(255, 255, 255, .2)',
                    }}
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={`${name} — ${handle}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/[.08] flex items-center justify-center text-white flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div className="font-display text-[12px] font-bold tracking-[1.5px] uppercase text-white">
                        {name}
                      </div>
                      <div className="text-[12px] text-gold font-light mt-0.5">{handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — decorative brand panel */}
            <div
              className="relative flex flex-col items-center justify-center text-center overflow-hidden max-md:hidden"
              style={{
                minHeight: 420,
                background: 'linear-gradient(160deg, rgba(0,0,0,0.45) 0%, rgba(42,13,40,0.55) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              aria-hidden
            >
              {/* Faint watermark */}
              <span
                className="absolute inset-0 flex items-center justify-center font-display font-black text-white uppercase pointer-events-none select-none"
                style={{ fontSize: 'clamp(60px, 10vw, 120px)', opacity: 0.04, letterSpacing: '0.15em' }}
              >
                Salem
              </span>

              {/* Decorative cross */}
              <svg
                viewBox="0 0 120 120"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-gold mb-8"
                style={{ width: 80, height: 80, opacity: 0.55 }}
              >
                <line x1="60" y1="0" x2="60" y2="120" />
                <line x1="0" y1="60" x2="120" y2="60" />
                <circle cx="60" cy="60" r="58" />
                <circle cx="60" cy="60" r="32" />
              </svg>

              <div className="relative z-[1] px-10">
                <p className="font-serif text-[19px] italic text-white/85 leading-[1.8] mb-5">
                  &ldquo;A great people — strong in faith, intimate with the Holy Spirit, empowered by wisdom.&rdquo;
                </p>
                <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold">
                  The Salem Mandate
                </div>
              </div>

              {/* Corner accents */}
              {(['tl', 'tr', 'bl', 'br'] as const).map((pos) => (
                <span
                  key={pos}
                  className="absolute w-5 h-5 pointer-events-none"
                  style={{
                    top: pos.startsWith('t') ? 16 : undefined,
                    bottom: pos.startsWith('b') ? 16 : undefined,
                    left: pos.endsWith('l') ? 16 : undefined,
                    right: pos.endsWith('r') ? 16 : undefined,
                    borderTop: pos.startsWith('t') ? '1px solid rgba(201,162,39,0.5)' : undefined,
                    borderBottom: pos.startsWith('b') ? '1px solid rgba(201,162,39,0.5)' : undefined,
                    borderLeft: pos.endsWith('l') ? '1px solid rgba(201,162,39,0.5)' : undefined,
                    borderRight: pos.endsWith('r') ? '1px solid rgba(201,162,39,0.5)' : undefined,
                  }}
                />
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
