import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '@/components/ui/RevealWrapper'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export default function Give() {
  return (
    <section id="give" style={{ background: '#0e0010' }} aria-labelledby="give-heading">
      <div className="max-w-[1280px] mx-auto px-[52px] py-[96px] max-md:px-6 max-md:py-16">
        <RevealWrapper>
          <div className="grid grid-cols-2 gap-[80px] items-center max-md:grid-cols-1 max-md:gap-10 max-md:text-center">
            <div>
              <SectionEyebrow className="mb-4 max-md:justify-center">Give Online</SectionEyebrow>
              <h2 id="give-heading" className="section-h2 mb-7">
                Support<br />The <span className="text-gold">Kingdom.</span>
              </h2>
              <p className="font-serif text-[18px] text-white/75 leading-[1.8] mb-7">
                Your giving fuels the mission — from local community work and the food bank, to global outreach and
                church planting. Every seed sown is a step toward the revival of Europe.
              </p>
              <Link href="/give" className="btn-gold">Give Now &rarr;</Link>
            </div>

            <div className="giving-photo-frame">
              <Image
                src="/images/giving.jpg"
                alt="Two hands sharing, representing generosity and giving"
                width={600}
                height={280}
                className="w-full object-cover object-center"
                style={{ height: 280 }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
