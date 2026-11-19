import Link from 'next/link'
import React from 'react'

/** Underlined olive link for use inside body copy (same treatment as links in blog prose). */
export function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[var(--olive)] underline underline-offset-2 transition-colors duration-150 hover:text-[var(--heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--olive)]"
    >
      {children}
    </Link>
  )
}
