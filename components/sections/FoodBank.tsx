import Link from 'next/link'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export default function FoodBank() {
  return (
    <section
      id="foodbank"
      aria-labelledby="foodbank-heading"
      className="border-t border-b"
      style={{
        background: 'linear-gradient(135deg, var(--purple-darker), var(--purple-dark))',
        borderColor: 'rgba(147, 50, 143, .4)',
        padding: '60px 52px',
      }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-10 flex-wrap max-md:px-0 max-md:flex-col max-md:items-start">
        <div className="flex-1 min-w-[260px]">
          <SectionEyebrow className="mb-2">Community Service</SectionEyebrow>
          <h2
            id="foodbank-heading"
            className="font-display text-[32px] font-black uppercase tracking-[-1px] text-white mb-2"
          >
            Food Bank
          </h2>
          <p className="text-[15px] text-white/75 font-light max-w-[500px] leading-[1.6]">
            We believe in loving our community beyond the walls of the church. Our food bank serves anyone in need —
            no questions asked. Come as you are.
          </p>
        </div>

        <div className="flex flex-col gap-3 items-start">
          <Link href="/food-bank" className="btn-gold">Learn More &rarr;</Link>
          <Link href="#contact" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,.4)' }}>Volunteer &rarr;</Link>
        </div>
      </div>
    </section>
  )
}
