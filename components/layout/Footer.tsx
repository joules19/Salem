import Image from 'next/image'
import Link from 'next/link'

const navigate = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'New to Salem', href: '/new-to-salem' },
  { label: 'Events', href: '/events' },
  { label: 'Food Bank', href: '/food-bank' },
  { label: 'Online', href: '/online' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Church Branches', href: '/about-us#branches' },
]

const services = [
  { label: 'Sunday Worship', href: '/new-to-salem#services' },
  { label: 'Live Streaming', href: '/online' },
  { label: 'Give / Donate', href: '/give' },
]

const connect = [
  {
    label: 'YouTube',
    sub: '@SalemEurope',
    href: 'https://www.youtube.com/channel/UC7B3rQRKN5_4rvhFQoNEiwQ',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    sub: 'Salem Intl Europe',
    href: 'https://www.facebook.com/Salemeurope',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    sub: '@salemeurope',
    href: 'https://www.instagram.com/salemeurope',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    sub: '@salemeurope',
    href: 'https://x.com/salemeurope',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

const linkCls = 'text-[13px] text-white/50 no-underline font-light transition-colors hover:text-gold'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[#93328f]/30"
      style={{ background: '#06000a', padding: '72px 52px 32px' }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-[60px] mb-14 max-md:grid-cols-1 max-md:gap-10">

          {/* Brand column */}
          <div>
            <Image
              src="/images/Logo-Final.png"
              alt="Salem International Christian Centre"
              width={90}
              height={36}
              className="h-9 w-auto object-contain mb-[18px]"
            />
            <p className="text-[13px] text-white/50 font-light leading-[1.7] max-w-[240px] mb-5">
              A Pentecostal Assembly on a God-given mandate — baptised by one Spirit, united across nations, on mission for the revival of Europe.
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-[13px] text-white/50 font-light leading-[1.5]">
                Unit 11C, New Horizon Business Centre,<br />
                The Pinnacles, Barrows Road,<br />
                Harlow, Essex CM19 5FN
              </p>
              <p className="text-[13px] text-white/50 font-light">
                <a href="mailto:admin@salemeurope.org" className="text-white/50 no-underline transition-colors hover:text-gold">
                  admin@salemeurope.org
                </a>
              </p>
              <p className="text-[13px] text-white/50 font-light">Sundays: 10AM – 12PM</p>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-5">Navigate</div>
            <ul className="list-none flex flex-col gap-2.5">
              {navigate.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkCls}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-5">Services</div>
            <ul className="list-none flex flex-col gap-2.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkCls}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-5">Connect</div>
            <ul className="list-none flex flex-col gap-3">
              {connect.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group no-underline"
                    aria-label={item.label}
                  >
                    <span className="flex-shrink-0 text-white/40 group-hover:text-gold transition-colors">
                      {item.icon}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[13px] text-white/70 font-light group-hover:text-gold transition-colors leading-tight">{item.label}</span>
                      <span className="text-[11px] text-white/35 font-light leading-tight">{item.sub}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[.06] flex items-center justify-between gap-5 flex-wrap">
          <p className="font-display text-[11px] tracking-[0.5px] text-white/50">
            &copy; 2026 Salem International Christian Centre. All rights reserved.
          </p>
          {/* <p className="font-display text-[11px] tracking-[0.5px] text-[rgba(147,50,143,0.6)]">
            Registered Charity · Harlow, Essex
          </p> */}
        </div>
      </div>
    </footer>
  )
}
