import SectionEyebrow from '@/components/ui/SectionEyebrow'

export default function ChurchUpdates() {
  return (
    <section id="updates" style={{ background: '#0e0010' }} aria-labelledby="updates-heading">
      <div className="grid grid-cols-2 max-md:grid-cols-1">

        {/* Left — purple */}
        <div
          className="relative overflow-hidden px-[52px] py-20 max-md:px-6 max-md:py-16"
          style={{ background: 'var(--purple)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(0,0,0,.3) 0%, transparent 70%)' }}
            aria-hidden
          />
          <div className="relative z-[1]">
            <SectionEyebrow className="mb-5" style={{ color: 'var(--gold)' }}>Latest</SectionEyebrow>
            <h2
              id="updates-heading"
              className="font-display font-black uppercase tracking-[-2px] leading-[.92] text-white"
              style={{ fontSize: 'clamp(44px, 6vw, 80px)' }}
            >
              <span className="block">Church</span>
              <span className="block">Updates</span>
              <span
                className="block font-serif italic font-normal normal-case tracking-normal"
                style={{ fontSize: '0.65em', color: 'var(--gold)', letterSpacing: 0 }}
              >
                &amp; announcements
              </span>
            </h2>

            <div className="mt-8">
              <div className="flex gap-2 mb-7">
                <div className="w-6 h-1 bg-white rounded-sm" />
                <div className="w-2 h-1 bg-white/30 rounded-sm" />
              </div>
              <p className="text-[14px] text-white/75 font-light leading-[1.65]">
                Stay updated with everything happening at Salem — events, announcements, and ministry news.
              </p>
              <a href="#" className="btn-ghost inline-block mt-6">All Announcements</a>
            </div>
          </div>
        </div>

        {/* Right — dark */}
        <div className="px-[52px] py-20 max-md:px-6 max-md:py-16" style={{ background: '#1a0518' }}>
          <SectionEyebrow className="mb-5">Theme of the Year</SectionEyebrow>
          <h3
            className="font-display font-black leading-[1.1] text-white mb-5"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            <span className="text-gold">2026:</span> Our Year in the Conquest of Love
          </h3>
          <p className="font-serif text-[16px] italic text-white/75 leading-[1.7] mb-7">
            Walking in the fullness of divine authority God has placed within each one of us as His people.
          </p>

          {/* Sermon video placeholder */}
          <div
            className="flex flex-col items-center justify-center gap-4 text-[#93328f]"
            style={{
              height: 320,
              background: 'rgba(147, 50, 143, 0.08)',
              border: '2px dashed rgba(147, 50, 143, 0.4)',
            }}
            role="img"
            aria-label="Latest sermon video thumbnail placeholder"
          >
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95C23 15.86 23 12 23 12s0-3.86-.46-5.58z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
            </svg>
            <span className="font-display text-[11px] tracking-[2px] uppercase text-center opacity-60">
              YouTube: Your Dominion Mandate (Part 3)<br />Bishop David Onimisi — Salem Europe
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
