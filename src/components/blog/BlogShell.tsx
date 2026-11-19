import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { UseCaseTopNav } from '@/components/usecase'

/** Site frame for every /blog route: nav, the page content, and the site footer. */
export function BlogShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <UseCaseTopNav />
      <main className="flex w-full max-w-[1500px] flex-col items-center">{children}</main>
      <SiteFooter />
    </div>
  )
}
