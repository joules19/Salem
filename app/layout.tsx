import type { Metadata } from 'next'
import { Montserrat, Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Salem International Christian Centre',
    default: 'Salem International Christian Centre',
  },
  description:
    'A Pentecostal Assembly on a God-given mandate — baptised into Jesus by one Spirit, united across nations and ethnicities, on mission for the revival of Europe.',
  metadataBase: new URL('https://salemeurope.org'),
  openGraph: {
    siteName: 'Salem International Christian Centre',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SalemEurope',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable} ${lato.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[500] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-gold focus:text-[#0e0010] focus:font-bold focus:font-display focus:text-xs focus:tracking-widest focus:uppercase"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
