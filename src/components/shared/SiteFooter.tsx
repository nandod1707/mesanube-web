import Link from 'next/link'
import React from 'react'

import { FOOTER_NAV, type NavItem } from '@/config/nav'

type SiteFooterProps = {
  links?: NavItem[]
}

export function SiteFooter({ links = FOOTER_NAV }: SiteFooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="flex w-full max-w-[1500px] flex-col items-start justify-end gap-[50px] border-t border-[#e9e9e9] pt-10 pb-5 sm:gap-[80px]">
      <nav
        aria-label="Navegación del pie de página"
        className="flex h-10 w-full items-center justify-between"
      >
        <div className="flex items-center gap-5 text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-black sm:gap-[27px]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-150 hover:text-[#485c11]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:items-end sm:gap-10">
        <Link
          href="/"
          className="text-[22px] leading-[1.2] tracking-[-1px] text-black sm:text-[28px]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
        >
          mesanube
        </Link>
        <div className="flex flex-1 items-center gap-4 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
          <p>© Mesanube.</p>
          <p>{year}</p>
        </div>
        <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
