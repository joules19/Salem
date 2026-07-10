import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export default function LatestSermon() {
  return (
    <section style={{ background: '#0e0010' }} aria-labelledby="sermon-heading">
      <div className="max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
        <SectionEyebrow className="mb-8">Latest Sermon</SectionEyebrow>

        <RevealWrapper>
          <div
            className="grid grid-cols-2 gap-0 max-md:grid-cols-1 overflow-hidden"
            style={{ border: '1px solid rgba(147, 50, 143, 0.3)' }}
          >
            {/* Video column */}
            <div className="relative" style={{ background: '#111' }}>
              <div
                className="w-full flex flex-col items-center justify-center gap-4 relative overflow-hidden"
                style={{
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg, #1a0010, #2a0020)',
                }}
              >
                <button
                  className="w-[72px] h-[72px] rounded-full bg-gold flex items-center justify-center cursor-pointer transition-transform hover:scale-[1.08] hover:bg-gold-light border-none"
                  aria-label="Play sermon: Your Dominion Mandate Part 3 by Bishop David Onimisi"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#0e0010] ml-1">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
                <p className="font-display text-[11px] font-bold tracking-[2px] uppercase text-white/75">
                  Watch on YouTube &bull; @SalemEurope
                </p>
              </div>
            </div>

            {/* Info column */}
            <div
              className="flex flex-col justify-center px-10 py-10"
              style={{ background: '#140012' }}
            >
              <div className="font-display text-[10px] font-bold tracking-[3px] uppercase text-gold mb-3">
                Current Series &mdash; Your Dominion Mandate
              </div>
              <h2
                id="sermon-heading"
                className="font-serif text-[24px] font-bold text-white leading-[1.3] mb-3"
              >
                Your Dominion Mandate (Part 3)
              </h2>
              <div className="font-display text-[11px] font-semibold tracking-[1.5px] uppercase text-salem-light mb-5">
                Bishop David Onimisi &bull; Salem Europe
              </div>
              <p className="text-[14px] text-white/75 font-light leading-[1.65] mb-7">
                Through powerful praise, prophetic worship, and scriptural teachings, explore what it truly means to
                walk in the authority God intended for His people.
              </p>
              <a href="https://youtube.com/@SalemEurope" target="_blank" rel="noopener noreferrer" className="btn-purple self-start">
                Watch Now
              </a>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
