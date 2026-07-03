import React from 'react'

type CardTitleProps = {
  children: React.ReactNode
  className?: string
  as?: 'h3' | 'h4' | 'p'
}

/**
 * Canonical card / list-item title: small serif display type, black, tight.
 * The fixed 18px counterpart to `SectionTitle` (which is the large clamped
 * section heading). Used for feature cards, step titles, solution cards, etc.
 */
export function CardTitle({ children, className = '', as: Tag = 'h3' }: CardTitleProps) {
  return (
    <Tag
      className={`font-display text-[18px] leading-none tracking-[-0.54px] text-[var(--heading)] ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}
