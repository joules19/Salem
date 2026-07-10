import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

const visionItems = [
  'To raise a great army of people who will live holy and live ready lives in order to be rewardable when Jesus returns.',
  'To establish at least 300 million souls in over 150,000 churches worldwide if Jesus tarries.',
  'To establish ministries as component parts of achieving our God-given objectives.',
]

export default function Vision() {
  return (
    <section className="band" id="vision" aria-labelledby="vision-heading">
      <div className="band-pattern" aria-hidden />
      <div className="relative z-[1] max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
        <RevealWrapper>
          <div className="grid grid-cols-2 gap-[80px] items-center max-md:grid-cols-1 max-md:gap-10">

            {/* Left — vision list */}
            <div>
              <SectionEyebrow className="mb-4" style={{ color: 'var(--gold)' }}>Our Vision</SectionEyebrow>
              <h2 id="vision-heading" className="section-h2 mb-9">
                Our<br />Vision.
              </h2>
              <ol className="flex flex-col" style={{ listStyle: 'none' }}>
                {visionItems.map((text, i) => (
                  <li
                    key={i}
                    className="flex gap-0 items-stretch border-b border-white/[.12] first:border-t first:border-white/[.12]"
                  >
                    <div className="font-display text-[11px] font-black tracking-[1px] text-gold min-w-[52px] py-[22px] flex-shrink-0 flex items-start">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="py-[22px] pr-6 text-[15px] font-light text-white/85 leading-[1.65] flex-1">
                      {text}
                    </div>
                  </li>
                ))}
              </ol>
              <a
                href="#mandate"
                className="inline-block mt-8 border-2 border-white/50 px-10 py-[14px] font-display text-[12px] font-bold tracking-[2px] uppercase text-white no-underline transition-all hover:border-white hover:bg-white/[.08]"
              >
                Read More
              </a>
            </div>

            {/* Right — service times card */}
            <div>
              <div
                className="text-center"
                style={{
                  background: 'rgba(0, 0, 0, .35)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 255, 255, .25)',
                  padding: '40px',
                }}
              >
                <div className="inline-block bg-white text-[#0e0010] font-display text-[13px] font-black tracking-[2px] uppercase px-6 py-[10px] mb-5">
                  Service Times
                </div>
                <div className="font-display text-[18px] font-bold tracking-[4px] uppercase text-white mb-[14px]">
                  Sundays
                </div>
                <div className="flex items-baseline justify-center gap-2">
                  <div
                    className="font-display font-black text-white tracking-[-2px] leading-none"
                    style={{ fontSize: 'clamp(44px, 6vw, 72px)' }}
                  >
                    10AM
                  </div>
                  <div className="font-display text-[24px] font-black text-gold mx-2">&mdash;</div>
                  <div
                    className="font-display font-black text-white tracking-[-2px] leading-none"
                    style={{ fontSize: 'clamp(44px, 6vw, 72px)' }}
                  >
                    12PM
                  </div>
                </div>
                <div className="mt-5 font-display text-[12px] font-bold tracking-[2px] uppercase text-white/75">
                  Live Streamed On
                </div>
                <div className="flex items-center justify-center gap-2.5 mt-2.5">
                  <span className="bg-red-600 text-white font-display text-[11px] font-black tracking-[1px] px-3 py-[5px]">
                    LIVE
                  </span>
                  <span className="font-serif text-[18px] font-bold text-white">
                    You<span className="text-red-600">Tube</span>
                  </span>
                </div>
                <div className="font-display text-[14px] font-bold tracking-[2px] uppercase text-white mt-2">
                  @SALEMEUROPE
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
