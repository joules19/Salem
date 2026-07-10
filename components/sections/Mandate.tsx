import Image from 'next/image'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export default function Mandate() {
  return (
    <section id="mandate" aria-labelledby="mandate-heading">
      <div className="max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
        <RevealWrapper>
          <div className="grid grid-cols-[1fr_1.1fr] gap-[80px] items-center max-md:grid-cols-1 max-md:gap-10">

            {/* Left — leader photo */}
            <div>
              <div className="leader-photo-frame mb-8">
                <Image
                  src="/images/second.png"
                  alt="Archbishop Sam Amaga and Bishop Love Sam-Amaga"
                  width={600}
                  height={520}
                  className="w-full object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                {(['tl','tr','bl','br'] as const).map((pos) => (
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

            {/* Right — mandate text */}
            <div>
              <SectionEyebrow className="mb-4">Our Mandate</SectionEyebrow>
              <h2 id="mandate-heading" className="section-h2 mb-0">
                Our<br /><span className="text-gold">Mandate.</span>
              </h2>

              <blockquote
                className="font-serif text-[19px] italic font-normal text-white/90 leading-[1.8] border-l-4 border-gold pl-8 my-7"
              >
                &ldquo;The Lord said to His servant, Archbishop Sam Amaga on the 15th of March 1986: &lsquo;I AM sending
                you to raise me an Army, not one great man, but a great people who are strong in Faith and cannot be
                defeated by the devil, in close intimacy with the Holy Spirit, empowered by wisdom to reign in their
                spheres of life.&rsquo; This therefore is our passion and pursuit. Over the years we&apos;ve seen many
                made mighty in our midst and you&apos;re welcome to be one of them.&rdquo;
              </blockquote>

              <div className="font-display text-[12px] font-bold tracking-[2px] uppercase text-gold mt-6">
                Archbishop Sam Amaga &amp; Bishop Love Sam-Amaga.
              </div>

              {/* Year card */}
              <div
                className="relative overflow-hidden text-center mt-8 px-9 py-12"
                style={{
                  background: 'rgba(147, 50, 143, 0.08)',
                  border: '1px solid rgba(147, 50, 143, 0.35)',
                }}
              >
                <div
                  aria-hidden
                  className="font-display font-black absolute top-[10px] left-1/2 -translate-x-1/2 leading-none whitespace-nowrap pointer-events-none select-none"
                  style={{ fontSize: 120, color: 'var(--purple)', opacity: 0.18 }}
                >
                  2026
                </div>
                <div className="relative z-[1]">
                  <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-3">
                    This Year &mdash; 2026
                  </div>
                  <div className="font-display text-[28px] font-black uppercase leading-[1.05] text-white mb-3">
                    Our Year in the<br />Conquest of Love
                  </div>
                  <div className="font-serif text-[16px] italic text-white/75">
                    Walking in the fullness of divine authority
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
