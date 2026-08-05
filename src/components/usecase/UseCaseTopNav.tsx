import Link from 'next/link'
import React from 'react'

import { APP_LOGIN_URL, APP_REGISTER_URL } from '@/config/app'
import { CtaLink } from '@/components/shared/CtaLink'

/**
 * Top navigation bar shared by every /para/* use-case page:
 * wordmark on the left, login/register CTAs on the right.
 */
export function UseCaseTopNav({ cta = 'Creá tu cuenta' }: { cta?: string }) {
  return (
    <nav className="flex w-full max-w-[1500px] items-center justify-between py-5">
      <Link
        href="/"
        className="text-[26px] leading-[1.2] tracking-[-1.2px] text-[var(--heading)] sm:text-[30px] sm:tracking-[-1.5px]"
        style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
      >
        mesanube
      </Link>
      {/* Hidden on mobile — these CTAs live inside the FloatingNav hamburger menu there. */}
      <div className="hidden items-center gap-3 lg:flex">
        <CtaLink href={APP_LOGIN_URL} variant="outline">
          Ingresar
        </CtaLink>
        <CtaLink href={APP_REGISTER_URL} variant="primary">
          {cta}
        </CtaLink>
      </div>
    </nav>
  )
}
