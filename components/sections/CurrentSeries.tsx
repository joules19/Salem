import Image from 'next/image'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export default function CurrentSeries() {
  return (
    <section className="band" id="series" aria-labelledby="series-heading">
      <div className="band-pattern" aria-hidden />
      <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
        <RevealWrapper>
          <div className="grid grid-cols-2 gap-[60px] items-center max-md:grid-cols-1 max-md:gap-10">

            {/* Left — series artwork */}
            <div>
              <div className="series-artwork-frame">
                <Image
                  src="/images/fourth.png"
                  alt="Your Dominion Mandate series flyer"
                  width={600}
                  height={520}
                  className="w-full object-cover object-top"
                  style={{ height: 520 }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Bus route info */}
              <div
                className="mt-4 text-[13px] text-white/75 font-light"
                style={{
                  background: 'rgba(0, 0, 0, .4)',
                  border: '1px solid rgba(255, 255, 255, .15)',
                  padding: '16px 20px',
                }}
              >
                <strong className="text-white font-normal">Sundays in May — Dates:</strong>{' '}
                3rd, 10th, 17th, 24th, 31st &bull; 10:00AM – 12:00PM<br />
                Unit 11C, New Horizon Business Centre, The Pinnacles, Barrows Road, Harlow CM19 5FN<br /><br />
                <strong className="text-white font-normal">Free Bus Shuttles from Stratford London @ 8:45AM &amp; 9AM — From Harlow</strong>
                <div className="mt-2.5 text-[12px] text-white/60">
                  Stops: Salem Church &rarr; Lidl &rarr; Stable Tye &rarr; Tye Green Carpark &rarr; Prentice Place &rarr; Church Langley &rarr; Tesco &rarr; Netherwell Pharmacy &rarr; ADY Convenience Store &rarr; Addison Surgery &rarr; Salem Church
                </div>
              </div>
            </div>

            {/* Right — series info */}
            <div>
              <SectionEyebrow className="mb-3" style={{ color: 'var(--gold)' }}>
                Upcoming @ Salem
              </SectionEyebrow>

              <div className="mb-5">
                <span className="font-serif text-[20px] italic text-gold block mb-1">New Series</span>
                <h2
                  id="series-heading"
                  className="font-display font-black uppercase tracking-[-1px] leading-[.95] text-white"
                  style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
                >
                  Your<br />Dominion<br />Mandate
                </h2>
              </div>

              <div className="font-display text-[10px] font-bold tracking-[2px] uppercase text-gold mb-5">
                Host: Bishop David Onimisi
              </div>

              <p className="text-[15px] font-light text-white/85 leading-[1.75] mb-4">
                Are you ready to step into the fullness of your divine authority? This May, we invite you to join us for
                a transforming series: <strong className="font-semibold">Dominion Mandate</strong>, hosted by our very
                own Bishop David Onimisi.
              </p>
              <p className="text-[15px] font-light text-white/85 leading-[1.75] mb-7">
                Through powerful praise, prophetic worship, and scriptural teachings, we will explore what it truly means
                to walk in the authority God intended for His people. This isn&apos;t just a series; it&apos;s a call to
                reclaim your ground and live a life of influence and purpose.
              </p>

              {/* Join us box */}
              <div
                className="mb-5"
                style={{
                  background: 'rgba(0, 0, 0, .35)',
                  border: '1px solid rgba(255, 255, 255, .2)',
                  padding: '24px 28px',
                }}
              >
                <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-4">Join Us</div>
                {[
                  { label: 'In-person', text: 'Transport will be provided from Stratford. More information on bus pickup times can be found on the flyer.' },
                  { label: 'Online', text: 'On YouTube, @SalemEurope' },
                ].map(({ label, text }) => (
                  <div key={label} className="flex gap-3 mb-3.5 text-[14px] text-white/80 font-light items-start leading-[1.5]">
                    <strong className="font-display text-[10px] font-bold tracking-[1.5px] uppercase text-white flex-shrink-0 mt-0.5">{label}</strong>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* New to Salem box */}
              <div
                className="mb-6"
                style={{
                  background: 'rgba(0, 0, 0, .35)',
                  border: '1px solid rgba(255, 255, 255, .2)',
                  padding: '24px 28px',
                }}
              >
                <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-4">New to Salem?</div>
                <p className="text-[14px] text-white/80 font-light leading-[1.65] mb-4">
                  Whether you&apos;re joining us in the sanctuary for the first time or tuning in online, we want you
                  to know: <strong className="font-semibold">You belong here.</strong> We aren&apos;t just a
                  congregation; we are a family on a mission.
                </p>
                <p className="font-display text-[13px] font-semibold tracking-[1px] text-gold">
                  Send your name and details to{' '}
                  <a href="mailto:admin@salemeurope.org" className="underline hover:text-gold-light transition-colors">
                    admin@salemeurope.org
                  </a>
                </p>
              </div>

              <a href="#" className="btn-gold">View More</a>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
