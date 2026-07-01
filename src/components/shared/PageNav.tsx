import Link from 'next/link'
import React from 'react'

import { TrialButton } from './CtaButtons'

type PageNavProps = {
  /** Trial CTA label. */
  cta?: string
  className?: string
}

/**
 * Canonical top navigation bar for internal pages: wordmark on the left, trial
 * CTA on the right. Replaces the `<nav>` block copy-pasted at the top of every
 * page. (The floating anchor nav is a separate `FloatingNav` component.)
 */
export function PageNav({ cta = 'Probá gratis', className = '' }: PageNavProps) {
  return (
    <nav
      className={`flex w-full max-w-[1500px] items-center justify-between py-5 ${className}`.trim()}
    >
      <Link
        href="/"
        className="text-[22px] leading-[1.2] tracking-[-1px] text-black sm:text-[28px]"
        style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
      >
        mesanube
      </Link>
      <TrialButton>{cta}</TrialButton>
    </nav>
  )
}
