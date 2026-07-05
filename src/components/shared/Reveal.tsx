'use client'

import { useEffect, useRef } from 'react'

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements
  delay?: 0 | 1 | 2 | 3 | 4
  once?: boolean
  /**
   * Fade in on load instead of on scroll. Use for above-the-fold content that
   * the IntersectionObserver would otherwise leave hidden until the user
   * scrolls (e.g. a tall hero pushed just below the initial viewport).
   */
  immediate?: boolean
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
  [key: string]: unknown
}

export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  once = true,
  immediate = false,
  className = '',
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Reveal on load, no scroll needed.
    if (immediate) {
      const id = requestAnimationFrame(() => el.classList.add('is-visible'))
      return () => cancelAnimationFrame(id)
    }

    // Above-the-fold elements: trigger fade-in on load without waiting for scroll
    // (the 0.15 IntersectionObserver threshold can leave tall hero blocks hidden).
    const rect = el.getBoundingClientRect()
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0
    if (alreadyVisible) {
      const id = requestAnimationFrame(() => el.classList.add('is-visible'))
      if (once) return () => cancelAnimationFrame(id)
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            if (once) io.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('is-visible')
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [once, immediate])

  const delayClass =
    delay === 1
      ? 'reveal-delay-1'
      : delay === 2
        ? 'reveal-delay-2'
        : delay === 3
          ? 'reveal-delay-3'
          : delay === 4
            ? 'reveal-delay-4'
            : ''

  const El = Tag as React.ElementType
  return (
    <El ref={ref} className={`reveal ${delayClass} ${className}`.trim()} {...rest}>
      {children}
    </El>
  )
}
