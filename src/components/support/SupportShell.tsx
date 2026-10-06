import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { UseCaseTopNav } from '@/components/usecase'

/** Page frame for every /soporte route: nav, centered content column and footer. */
export function SupportShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <UseCaseTopNav />
      <main className="flex w-full flex-col items-center">{children}</main>
      <SiteFooter />
    </div>
  )
}
