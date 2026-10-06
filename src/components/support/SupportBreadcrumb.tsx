import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export type Crumb = { label: string; href?: string }

/** Visible breadcrumb for /soporte pages (the JSON-LD breadcrumb is rendered separately). */
export function SupportBreadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Ruta">
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[13px] leading-[1.4] tracking-[-0.14px]">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight aria-hidden="true" className="size-3.5 text-[var(--caption)]" />}
            {item.href ? (
              <Link href={item.href} className="text-[var(--olive)] hover:text-[var(--heading)]">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[var(--body)]">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
