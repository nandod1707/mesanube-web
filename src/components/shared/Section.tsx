import React from 'react'

type Background = 'cream' | 'warm-white' | 'pale-cream' | 'dark-green'

type SectionProps = {
  children: React.ReactNode
  className?: string
  background?: Background
  id?: string
}

const bgClasses: Record<Background, string> = {
  cream: 'bg-[var(--cream-bg)]',
  'warm-white': 'bg-[var(--warm-white)]',
  'pale-cream': 'bg-[var(--pale-cream)]',
  'dark-green': 'bg-[var(--dark-green)]',
}

export function Section({ children, className, background = 'cream', id }: SectionProps) {
  return (
    <section
      id={id}
      className={[bgClasses[background], className].filter(Boolean).join(' ')}
      style={{ padding: 'var(--section-padding-y) var(--section-padding-x)' }}
    >
      {children}
    </section>
  )
}
