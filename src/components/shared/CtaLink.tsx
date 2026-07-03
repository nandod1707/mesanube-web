import Link from 'next/link'
import React from 'react'

type Variant = 'primary' | 'soft' | 'outline'

type CtaLinkProps = {
  href: string
  children: React.ReactNode
  variant?: Variant
  className?: string
  /** Opens in a new tab with safe rel. */
  external?: boolean
}

const BASE =
  'inline-flex items-center justify-center gap-1.5 rounded-full px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] active:scale-[0.98]'

const VARIANT: Record<Variant, string> = {
  primary:
    'group bg-[var(--olive)] text-white transition-[background-color,transform] duration-300 hover:bg-[var(--olive-dark)]',
  soft: 'bg-[var(--olive-soft)] text-black transition-[background-color,transform] duration-300 hover:bg-[var(--olive-soft-hover)]',
  outline:
    'border border-[var(--divider)] bg-white text-black transition-[border-color,background-color] duration-200 hover:border-[var(--olive)] hover:bg-[var(--olive-tint)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--olive)] focus-visible:outline-offset-2',
}

/**
 * Pill link CTA used for in-page anchors and external links. `primary` is the
 * olive pill with an arrow; `soft` is the pale olive pill; `outline` is the
 * bordered white pill. For the trial/demo dialog CTAs use TrialButton/DemoButton.
 */
export function CtaLink({ href, children, variant = 'primary', className = '', external }: CtaLinkProps) {
  const extra = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <Link href={href} className={`${BASE} ${VARIANT[variant]} ${className}`.trim()} {...extra}>
      <span>{children}</span>
      {variant === 'primary' && (
        <svg
          width="10"
          height="10"
          viewBox="0 0 6 7"
          fill="none"
          className="translate-y-px transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        >
          <path d="M0.5 6L5.5 1M5.5 1H1.5M5.5 1V5" stroke="currentColor" strokeWidth="1" strokeLinecap="square" />
        </svg>
      )}
    </Link>
  )
}
