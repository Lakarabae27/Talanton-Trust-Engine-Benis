'use client'

/**
 * The Talanton wordmark, in one place.
 *
 * It is set in type rather than drawn, which is why it is a component and not an image file: it
 * stays crisp at any size, inverts cleanly for the deep-green sidebars, and needs no separate
 * asset per background. The trade-off is that it must pin its own face, weight, colour and
 * spacing — a logo that inherits the app's heading font would quietly redesign itself the next
 * time someone changed that font.
 *
 * Everything below is fixed on purpose. If the mark needs to change, change it here; six
 * components used to type the word out by hand and there was no single thing to edit.
 */

/** Deep forest green — the wordmark on any light ground. */
const INK = '#14402a'

/** The dot. Yellow-green, and the one piece of colour in the mark. */
const DOT = '#8cc63f'

export function BrandMark({
  tone = 'dark',
  size = 'md',
  caption,
}: {
  /** 'dark' for light backgrounds, 'light' for the deep-green sidebars. */
  tone?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
  /** Optional line beneath the wordmark, e.g. "SACCO Credit Pipeline". */
  caption?: string
}) {
  // The dot is drawn rather than typed. A full stop renders differently in every face — square in
  // some, lozenge in others — and this one has to be a circle.
  const metrics = {
    sm: { word: '1.125rem', dot: '0.24em', gap: '0.10em', caption: 'text-[0.55rem]' },
    md: { word: '1.5rem', dot: '0.23em', gap: '0.09em', caption: 'text-[0.6rem]' },
    lg: { word: '2.25rem', dot: '0.22em', gap: '0.08em', caption: 'text-[0.65rem]' },
  }[size]

  const wordColor = tone === 'light' ? '#ffffff' : INK
  const captionColor = tone === 'light' ? 'text-white/60' : 'text-gray-500'

  return (
    <div className="flex items-center gap-2.5">
      <div className="leading-none">
        <span
          className="flex items-baseline"
          style={{
            fontFamily: 'var(--font-brand-stack)',
            fontWeight: 700,
            fontSize: metrics.word,
            lineHeight: 1,
            // Slightly tightened, as the mark is set. Left to default the letters sit looser than
            // the artwork.
            letterSpacing: '-0.015em',
            color: wordColor,
          }}
        >
          Talanton
          <span
            aria-hidden="true"
            style={{
              display: 'inline-block',
              width: metrics.dot,
              height: metrics.dot,
              marginLeft: metrics.gap,
              borderRadius: '50%',
              backgroundColor: DOT,
              // Sits on the baseline with the letters, not below it.
              verticalAlign: 'baseline',
              flexShrink: 0,
            }}
          />
        </span>
        {caption && (
          <span
            className={`mt-1 block font-medium uppercase tracking-widest ${metrics.caption} ${captionColor}`}
          >
            {caption}
          </span>
        )}
      </div>
    </div>
  )
}
