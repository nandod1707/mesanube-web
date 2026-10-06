import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { UseCaseTopNav } from '@/components/usecase'
import { getSupportDirectory } from '@/utilities/support'

import { SupportSidebar } from './SupportSidebar'

type SupportShellProps = {
  children: React.ReactNode
  activeSection?: string
  activeArticle?: string
}

/**
 * Help-center frame for every /soporte route: site nav, a sticky section sidebar on desktop, the
 * page content, and the site footer.
 */
export async function SupportShell({ children, activeSection, activeArticle }: SupportShellProps) {
  const sections = await getSupportDirectory()
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <UseCaseTopNav />
      <div className="flex w-full max-w-[1500px] gap-12 pt-6 pb-[80px] lg:pt-10 xl:gap-16">
        {sections.length > 0 && (
          <aside className="hidden w-[260px] shrink-0 lg:block">
            <div className="sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto border-r border-[var(--divider)] pr-6">
              <SupportSidebar
                sections={sections}
                activeSection={activeSection}
                activeArticle={activeArticle}
              />
            </div>
          </aside>
        )}
        <main className="flex min-w-0 flex-1 flex-col gap-12">{children}</main>
      </div>
      <SiteFooter />
    </div>
  )
}
