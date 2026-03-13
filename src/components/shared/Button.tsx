import Link from 'next/link'
import React from 'react'

type Variant = 'primary' | 'ghost' | 'dark'

type ButtonBaseProps = {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

type ButtonAsLink = ButtonBaseProps & {
  href: string
  onClick?: never
  type?: never
}

type ButtonAsButton = ButtonBaseProps & {
  href?: never
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
}

type ButtonProps = ButtonAsLink | ButtonAsButton

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[var(--yellow)] text-[var(--dark-green)] hover:bg-[var(--warm-yellow)] focus-visible:outline-[var(--forest-green)]',
  ghost:
    'bg-transparent text-[var(--warm-white)] border border-[rgba(255,247,238,0.4)] hover:border-[rgba(255,247,238,0.7)] focus-visible:outline-[var(--forest-green)]',
  dark:
    'bg-[var(--dark-green)] text-[var(--warm-white)] hover:bg-[var(--medium-green)] focus-visible:outline-[var(--forest-green)]',
}

const baseClasses =
  'inline-flex items-center gap-1.5 rounded-full px-8 py-[0.85rem] text-base font-medium font-[var(--font-dm-sans),DM_Sans,system-ui,sans-serif] no-underline transition-colors duration-150 ease-linear focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer'

export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  const classes = [baseClasses, variantClasses[variant], className].filter(Boolean).join(' ')

  if ('href' in rest && rest.href) {
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    )
  }

  const { onClick, type = 'button' } = rest as ButtonAsButton
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
