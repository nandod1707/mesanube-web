import Link from 'next/link'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'

/** Top navigation bar for /funciones/* feature pages: wordmark + trial CTA. */
export function FeatureTopNav({ cta = 'Probá gratis' }: { cta?: string }) {
  return (
    <nav className="flex w-full max-w-[1500px] items-center justify-between py-5">
      <Link
        href="/"
        className="text-[22px] leading-[1.2] tracking-[-1px] text-[var(--heading)] sm:text-[28px]"
        style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
      >
        mesanube
      </Link>
      {/* Hidden on mobile — the CTA lives inside the FloatingNav hamburger menu there. */}
      <TrialButton className="hidden lg:inline-flex">{cta}</TrialButton>
    </nav>
  )
}
