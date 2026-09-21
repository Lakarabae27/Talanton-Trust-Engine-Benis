import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Geist, Geist_Mono, Noto_Serif } from 'next/font/google'
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
 * The wordmark's own face, loaded separately from the body serif.
 *
 * A logo should not shift when someone decides the rest of the app reads better in a different
 * serif — it is a fixed asset that happens to be set in type rather than drawn. Fraunces stays
 * where it is for headings; this is only ever used by BrandMark.
 */
const brandSerif = Noto_Serif({
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
      className={`light ${brandSerif.variable} ${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-background`}
    >
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
