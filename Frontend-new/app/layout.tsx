import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Anybody, Fraunces, Geist, Geist_Mono } from 'next/font/google'
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
 * Anybody at 800, because the mark's bowls are squared rectangles with softened corners, not
 * circles. A geometric sans (Poppins, Rubik) draws a round 'o' and loses the mark entirely; the
 * techy squared faces (Tomorrow, Chakra Petch) chamfer their corners, which it also is not.
 * The weight is 800 rather than 700 — at 700 the strokes are visibly lighter than the artwork.
 */
const brandFace = Anybody({
  subsets: ['latin'],
  variable: '--font-brand',
  weight: ['800'],
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
