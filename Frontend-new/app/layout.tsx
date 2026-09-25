import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Chakra_Petch, Fraunces, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

/**
 * The wordmark's own face, loaded separately from everything else.
 *
 * A logo should not shift when someone decides the rest of the app reads better in a different
 * font — it is a fixed asset that happens to be set in type rather than drawn. Geist stays the
 * body face and Fraunces the headings; this is only ever used by BrandMark.
 *
 * Chakra Petch at 700. The mark's corners are chamfered — cut at 45 degrees — not rounded, which
 * is the detail that decides the face: the geometric sans (Rubik, Poppins) draw a round 'o', and
 * the squared grotesques (Anybody, Saira) round their corners rather than cutting them.
 *
 * Checked by measurement rather than by eye, against the supplied artwork: matching the word to
 * the same width, the artwork's ink box is 5.63 wide per unit high and 40.5% covered. Chakra
 * Petch 700 gives 5.59 and 42.3%. Anybody 800, which this replaces, gives 6.11 — visibly too
 * wide and too heavy, and the reason the previous attempt did not look right.
 */
const brandFace = Chakra_Petch({
  subsets: ['latin'],
  variable: '--font-brand',
  weight: ['700'],
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Talanton — SACCO Credit Pipeline',
  description:
    'Talanton helps SACCOs lend to high-yield SMEs with confidence through cash-flow-based vetting and milestone-gated disbursement. Growth through safety.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#10261b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${brandFace.variable} ${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-background`}
    >
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
