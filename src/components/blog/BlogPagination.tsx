import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { blogPagePath } from '@/utilities/blog'
import { cn } from '@/utilities/ui'

const PILL =
  'inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-full px-4 text-[14px] font-bold leading-[1.4] tracking-[-0.35px] transition-[border-color,background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--olive)]'
const IDLE = 'border border-[var(--divider)] bg-white text-black hover:border-[var(--olive)] hover:bg-[var(--olive-tint)]'

/** Server-rendered archive pagination: previous / page numbers / next, as plain links. */
export function BlogPagination({ page, totalPages }: { page: number; totalPages: number }) {
  if (totalPages <= 1) return null
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav aria-label="Paginación del blog" className="flex w-full flex-wrap items-center justify-center gap-2">
      {page > 1 && (
        <Link href={blogPagePath(page - 1)} className={cn(PILL, IDLE)} rel="prev">
          <ArrowLeft aria-hidden="true" className="size-4" />
          Anteriores
        </Link>
      )}
      {pages.map((n) =>
        n === page ? (
          <span key={n} aria-current="page" className={cn(PILL, 'bg-[var(--olive)] text-white')}>
            {n}
          </span>
        ) : (
          <Link key={n} href={blogPagePath(n)} className={cn(PILL, IDLE)}>
            {n}
          </Link>
        ),
      )}
      {page < totalPages && (
        <Link href={blogPagePath(page + 1)} className={cn(PILL, IDLE)} rel="next">
          Siguientes
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      )}
    </nav>
  )
}
