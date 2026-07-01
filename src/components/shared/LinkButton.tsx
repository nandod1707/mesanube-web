import Link from 'next/link'
import React from 'react'

type Variant = 'primary' | 'outline'

type LinkButtonBaseProps = {
  variant?: Variant
  className?: string
  children: React.ReactNode
  /** Show the diagonal arrow (defaults on for `primary`, off for `outline`). */
  withArrow?: boolean
}

type AsLink = LinkButtonBaseProps & { href: string; onClick?: never; type?: never }
type AsButton = LinkButtonBaseProps & {
  href?: never
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
}

type LinkButtonProps = AsLink | AsButton

const BASE =
  'inline-flex items-center justify-center gap-1.5 rounded-full px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--olive)] focus-visible:outline-offset-2'

const VARIANT: Record<Variant, string> = {
  primary:
    'group bg-[var(--olive)] text-white transition-[background-color,transform] duration-300 hover:bg-[var(--olive-dark)] active:scale-[0.98]',
  outline:
    'border border-[var(--divider)] bg-white text-black transition-[border-color,background-color] duration-200 hover:border-[var(--olive)] hover:bg-[var(--olive-tint)]',
}

function Arrow() {
  return (
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
  )
}

/**
 * Canonical link/button used for in-page navigation CTAs (e.g. "Ver cómo
 * funciona", "Ver planes"). Replaces the per-page `PrimaryButton` / `SoftButton`
 * that were redefined in 16 files. For the trial/demo dialog CTAs use
 * `TrialButton` / `DemoButton` from `CtaButtons` instead.
 */
export function LinkButton({
  variant = 'primary',
  className = '',
  children,
  withArrow,
  ...rest
}: LinkButtonProps) {
  const showArrow = withArrow ?? variant === 'primary'
  const classes = `${BASE} ${VARIANT[variant]} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      {showArrow && <Arrow />}
    </>
  )

  if ('href' in rest && rest.href) {
    return (
      <Link href={rest.href} className={classes}>
        {content}
      </Link>
    )
  }

  const { onClick, type = 'button' } = rest as AsButton
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
