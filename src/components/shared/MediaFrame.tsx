import Image from 'next/image'
import React from 'react'

type MediaFrameProps = {
  src: string
  /** Required unless `decorative` — then it's forced empty + aria-hidden. */
  alt?: string
  /** CSS aspect-ratio string, e.g. `'16/7'` or `'550/624'`. */
  aspectRatio: string
  priority?: boolean
  sizes?: string
  /** Extra classes for the frame wrapper (e.g. layout width). */
  className?: string
  /** Purely decorative image: empty alt + aria-hidden. */
  decorative?: boolean
}

/**
 * Canonical rounded media frame: 20px radius, olive-tinted placeholder bg, and a
 * `next/image fill` that covers it. Centralizes the `rounded-[20px] … bg-[var(--media-bg)]`
 * + `object-cover` pattern used ~51 times.
 */
export function MediaFrame({
  src,
  alt = '',
  aspectRatio,
  priority = false,
  sizes = '(max-width: 1500px) 100vw, 1500px',
  className = '',
  decorative = false,
}: MediaFrameProps) {
  return (
    <div
      className={`zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[var(--media-bg)] ${className}`.trim()}
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={decorative ? '' : alt}
        aria-hidden={decorative || undefined}
        fill
        sizes={sizes}
        className="object-cover"
        priority={priority}
      />
    </div>
  )
}
