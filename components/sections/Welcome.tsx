import Image from 'next/image'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export default function Welcome() {
  return (
    <section id="about" aria-labelledby="welcome-heading">
      <div className="max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
        <RevealWrapper>
          <div className="grid grid-cols-[1.1fr_1fr] gap-[80px] items-start max-md:grid-cols-1 max-md:gap-10">

            {/* Left — text */}
            <div>
              <SectionEyebrow className="mb-4">Welcome to Salem</SectionEyebrow>
              <h2 id="welcome-heading" className="section-h2 mb-7">
                You Belong<br />
                <span className="text-gold">Here.</span>
              </h2>

              <p className="font-serif text-[18px] text-white/75 leading-[1.8] mb-[18px]">
                On behalf of the members and leadership of this great church, I would like to appreciate you for taking
                time to browse through our website.
              </p>
              <p className="font-serif text-[18px] text-white/75 leading-[1.8] mb-[18px]">
                Salem International Christian Centre is a Pentecostal Assembly whose membership is made up of people
                from various ethnicity, cities and nations; who are baptised into Jesus by one Spirit. And together as
                a family we are on a God given mandate to be a part of the revival of Europe.
              </p>
              <p className="font-serif text-[18px] text-white/75 leading-[1.8] mb-[18px]">
                On this website, you will be able to know who we are, our vision and mission, our core values, our
                branches in other cities, and our service times.
              </p>
              <p className="font-serif text-[18px] text-white/75 leading-[1.8] mb-[18px]">
                The contact details are also on display, and we will like you to contact us, should you want to know
                more. It&apos;s a pleasure and honour to have you shown interest in us.
              </p>
              <p className="font-serif text-[18px] text-white/75 leading-[1.8] mb-7">
                I Look forward to welcoming you to any of our services.{' '}
                <em>Be exceptionally blessed.</em>
              </p>
              <p className="font-display text-[11px] font-bold tracking-[2px] uppercase text-gold">
                &mdash; Bishop David &amp; Rev. Esther Onimisi
              </p>
            </div>

            {/* Right — photo + quote */}
            <div>
              <div className="leader-photo-frame">
                <Image
                  src="/images/bishop_with_wife.png"
                  alt="Bishop David and Rev. Esther Onimisi, Senior Pastors of Salem Europe"
                  width={600}
                  height={460}
                  className="w-full object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gold corner accents */}
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
                    Bishop David &amp; Rev. Esther Onimisi
                  </div>
                  <div className="font-display text-[10px] font-medium tracking-[2.5px] uppercase text-gold">
                    Senior Pastors &middot; Salem Europe
                  </div>
                </div>
              </div>

              {/* Quote card */}
              <div
                className="relative overflow-hidden mt-5 p-9"
                style={{
                  background: 'rgba(147, 50, 143, 0.10)',
                  border: '1px solid rgba(147, 50, 143, 0.35)',
                }}
              >
                <span
                  aria-hidden
                  className="absolute top-[-30px] left-4 font-serif text-[140px] leading-none pointer-events-none select-none"
                  style={{ color: 'var(--purple)', opacity: 0.2 }}
                >
                  &ldquo;
                </span>
                <blockquote className="font-serif text-[17px] italic text-white/90 leading-[1.8] mb-6 relative z-[1]">
                  &ldquo;We aren&apos;t just a congregation; we are a family on a mission. We&apos;d love to get to know
                  you, pray with you, and help you find your place in the Kingdom.&rdquo;
                </blockquote>
                <div className="font-display text-[11px] font-bold tracking-[2px] uppercase text-gold">
                  New to Salem?
                </div>
                <div className="font-display text-[10px] tracking-[1px] text-white/50 mt-1">
                  Send your name &amp; details to{' '}
                  <a href="mailto:admin@salemeurope.org" className="text-gold/80 hover:text-gold transition-colors">
                    admin@salemeurope.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
