import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Welcome from '@/components/sections/Welcome'
import Vision from '@/components/sections/Vision'
import Mandate from '@/components/sections/Mandate'
import CurrentSeries from '@/components/sections/CurrentSeries'
import LatestSermon from '@/components/sections/LatestSermon'
import FoodBank from '@/components/sections/FoodBank'
import StayConnected from '@/components/sections/StayConnected'
import Give from '@/components/sections/Give'
import Divider from '@/components/ui/Divider'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Salem International Christian Centre — a Pentecostal Assembly in Harlow, Essex. Join us Sundays 10AM–12PM or stream live on YouTube @SalemEurope. On mission for the revival of Europe.',
  alternates: { canonical: 'https://salemeurope.org' },
  openGraph: {
    title: 'Salem International Christian Centre',
    description:
      'A Pentecostal Assembly on a God-given mandate — baptised into Jesus by one Spirit, united across nations and ethnicities, on mission for the revival of Europe.',
    url: 'https://salemeurope.org',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Salem International Christian Centre' }],
  },
  twitter: {
    title: 'Salem International Christian Centre',
    description: 'A Pentecostal Assembly on a God-given mandate — on mission for the revival of Europe.',
    images: ['/images/hero.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: 'Salem International Christian Centre',
  alternateName: 'Salem Europe',
  url: 'https://salemeurope.org',
  logo: 'https://salemeurope.org/images/Logo-Final.png',
  email: 'admin@salemeurope.org',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 11C, New Horizon Business Centre, The Pinnacles, Barrows Road',
    addressLocality: 'Harlow',
    addressRegion: 'Essex',
    postalCode: 'CM19 5FN',
    addressCountry: 'GB',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: 'Sunday',
    opens: '10:00',
    closes: '12:00',
  },
  sameAs: [
    'https://youtube.com/@SalemEurope',
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <Divider variant="gold" />
      <Welcome />
      <Divider variant="purple" />
      <Vision />
      <Divider variant="gold" />
      <Mandate />
      <CurrentSeries />
      <LatestSermon />
      <Divider variant="purple" />
      <FoodBank />
      <StayConnected />
      <Give />
      <Divider variant="gold" />
    </>
  )
}
