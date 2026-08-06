'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'

import { APP_REGISTER_URL } from '@/config/app'
import { useTrialDialog } from './TrialDialog'

type Variant = 'primary' | 'soft'

const VARIANT_CLASS: Record<Variant, string> = {
  primary:
    'bg-[#485c11] text-white hover:bg-[#3a4c0d]',
  soft: 'bg-[#dfecc6] text-black hover:bg-[#d0e1ac]',
}

function BaseButton({
  variant,
  onClick,
  children,
  className = '',
  withArrow = false,
}: {
  variant: Variant
  onClick: () => void
  children: ReactNode
  className?: string
  withArrow?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-1.5 rounded-full px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] transition-[background-color,transform] duration-300 active:scale-[0.98] ${VARIANT_CLASS[variant]} ${className}`}
    >
      <span>{children}</span>
      {withArrow && (
        <svg
          width="10"
          height="10"
          viewBox="0 0 6 7"
          fill="none"
          className="translate-y-px transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        >
          <path
            d="M0.5 6L5.5 1M5.5 1H1.5M5.5 1V5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="square"
          />
        </svg>
      )}
    </button>
  )
}

function BaseLink({
  variant,
  children,
  className = '',
  withArrow = false,
}: {
  variant: Variant
  children: ReactNode
  className?: string
  withArrow?: boolean
}) {
  return (
    <Link
      href={APP_REGISTER_URL}
      className={`group inline-flex items-center justify-center gap-1.5 rounded-full px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] transition-[background-color,transform] duration-300 active:scale-[0.98] ${VARIANT_CLASS[variant]} ${className}`}
    >
      <span>{children}</span>
      {withArrow && (
        <svg
          width="10"
          height="10"
          viewBox="0 0 6 7"
          fill="none"
          className="translate-y-px transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        >
          <path
            d="M0.5 6L5.5 1M5.5 1H1.5M5.5 1V5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="square"
          />
        </svg>
      )}
    </Link>
  )
}

/**
 * Links straight to the app's registration page — does not open the trial dialog.
 */
export function TrialButton({
  children = 'Probalo gratis',
  variant = 'primary',
  className = '',
}: {
  children?: ReactNode
  variant?: Variant
  className?: string
}) {
  return (
    <BaseLink variant={variant} className={className} withArrow={variant === 'primary'}>
      {children}
    </BaseLink>
  )
}

export function DemoButton({
  children = 'Agendá una demo',
  variant = 'soft',
  className = '',
}: {
  children?: ReactNode
  variant?: Variant
  className?: string
}) {
  const { openDemo } = useTrialDialog()
  return (
    <BaseButton
      variant={variant}
      onClick={openDemo}
      className={className}
      withArrow={variant === 'primary'}
    >
      {children}
    </BaseButton>
  )
}

/**
 * Underlined-link version of the demo CTA — used inline next to a TrialButton.
 */
export function DemoLink({
  children = 'Agendá una demo →',
  tone = 'dark',
  className = '',
}: {
  children?: ReactNode
  tone?: 'dark' | 'muted'
  className?: string
}) {
  const { openDemo } = useTrialDialog()
  const color =
    tone === 'muted'
      ? 'text-[#6f6f6f] hover:text-black'
      : 'text-black hover:text-[#485c11]'
  return (
    <button
      type="button"
      onClick={openDemo}
      className={`text-[14px] font-bold leading-[1.4] tracking-[-0.35px] underline underline-offset-2 transition-colors ${color} ${className}`}
    >
      {children}
    </button>
  )
}

/**
 * Underlined-link version of the trial CTA — same shape as DemoLink. Links
 * straight to the app's registration page — does not open the trial dialog.
 */
export function TrialLink({
  children = 'Probalo gratis →',
  tone = 'dark',
  className = '',
}: {
  children?: ReactNode
  tone?: 'dark' | 'muted'
  className?: string
}) {
  const color =
    tone === 'muted'
      ? 'text-[#6f6f6f] hover:text-black'
      : 'text-black hover:text-[#485c11]'
  return (
    <Link
      href={APP_REGISTER_URL}
      className={`text-[14px] font-bold leading-[1.4] tracking-[-0.35px] underline underline-offset-2 transition-colors ${color} ${className}`}
    >
      {children}
    </Link>
  )
}
