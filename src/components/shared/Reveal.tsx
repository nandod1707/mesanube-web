'use client'

import { useEffect, useRef } from 'react'

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements
  delay?: 0 | 1 | 2 | 3 | 4
  once?: boolean
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
  [key: string]: unknown
}

export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  once = true,
  className = '',
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

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
  }, [once])

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
