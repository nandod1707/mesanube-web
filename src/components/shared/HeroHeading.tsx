import styles from './HeroHeading.module.css'

type HeroHeadingProps = {
  /** Full headline text; split on spaces so each word animates in. */
  text: string
  /** Extra layout classes (e.g. `mb-6`, `w-full`, `text-center`). */
  className?: string
}

/**
 * Large serif hero headline shared by every internal page.
 * Words rise in behind per-word masks so the tight display line-height
 * never clips glyphs, even when the headline wraps to multiple lines.
 */
export function HeroHeading({ text, className }: HeroHeadingProps) {
  return (
    <h1 className={`${styles.heading} font-display text-black ${className ?? ''}`.trim()}>
      {text.split(' ').map((word, i) => (
        <span key={i} className={styles.word}>
          <span className={styles.inner} style={{ animationDelay: `${i * 60}ms` }}>
            {word}
          </span>
        </span>
      ))}
    </h1>
  )
}
