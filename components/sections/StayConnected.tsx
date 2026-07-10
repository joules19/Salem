import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

const socials = [
  {
    name: 'YouTube',
    handle: '@SalemEurope',
    href: 'https://youtube.com/@SalemEurope',
    fullWidth: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95C23 15.86 23 12 23 12s0-3.86-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'Salem Intl Christian Centre London',
    href: '#',
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
    href: '#',
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
    href: '#',
    fullWidth: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@SalemEurope',
    href: '#',
    fullWidth: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.73z" />
      </svg>
    ),
  },
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

            {/* Right — phone mockups */}
            <div className="flex justify-center items-end gap-5 max-md:hidden" aria-hidden>
              {[
                { label: 'Facebook', detail: 'Salem International\nChristian Centre\nLondon', bg: 'linear-gradient(160deg,#2a0025,var(--purple-darker))' },
                { label: 'YouTube', detail: 'Salem Europe\nConquest Of Faith · SUBSCRIBE', bg: 'linear-gradient(160deg,#1a0015,#2a0020)' },
              ].map(({ label, detail, bg }, i) => (
                <div
                  key={label}
                  className="overflow-hidden"
                  style={{
                    width: 180,
                    background: 'rgba(0,0,0,.4)',
                    border: '2px solid rgba(255,255,255,.2)',
                    borderRadius: 28,
                    marginBottom: i === 0 ? 30 : 0,
                  }}
                >
                  <div
                    className="flex flex-col items-center justify-center gap-2.5 p-5"
                    style={{ aspectRatio: '9/16', background: bg }}
                  >
                    <div
                      className="w-full text-center"
                      style={{
                        background: 'rgba(255,255,255,.06)',
                        border: '1px dashed rgba(255,255,255,.2)',
                        borderRadius: 8,
                        padding: 12,
                      }}
                    >
                      <div className="font-display text-[9px] text-white/50 tracking-[1px] uppercase mb-1.5">{label}</div>
                      <div className="font-display text-[11px] font-bold text-gold whitespace-pre-line">{detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
