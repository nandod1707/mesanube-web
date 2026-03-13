import React from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  heading: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={alignClass}>
      {eyebrow && (
        <p className="eyebrow mb-3">{eyebrow}</p>
      )}
      <h2
        className="text-[var(--dark-green)] font-medium leading-[1.1] tracking-[-0.02em] mb-4"
        style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
      >
        {heading}
      </h2>
      {description && (
        <p className="text-[var(--medium-green)] text-base leading-relaxed">{description}</p>
      )}
    </div>
  )
}
