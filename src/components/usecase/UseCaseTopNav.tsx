import Link from 'next/link'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'

/**
 * Top navigation bar shared by every /para/* use-case page:
 * wordmark on the left, trial CTA on the right.
 */
export function UseCaseTopNav({ cta = 'Probá gratis' }: { cta?: string }) {
  return (
    <nav className="flex w-full max-w-[1500px] items-center justify-between pt-5 pb-10 sm:pt-5 sm:pb-20">
      <Link
        href="/"
        className="text-[26px] leading-[1.2] tracking-[-1.2px] text-[var(--heading)] sm:text-[30px] sm:tracking-[-1.5px]"
        style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
      >
        mesanube
      </Link>
      <TrialButton>{cta}</TrialButton>
    </nav>
  )
}
