'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export type NavItem = {
  /**
   * Where the link goes. Three forms supported:
   *   - `#section` — scrolls to a section on the current page
   *   - `/#section` — navigates to the homepage and scrolls to that section
   *   - `/path` — normal route navigation
   */
  href: string
  label: string
}

const defaultItems: NavItem[] = [
  { href: '/#funciones', label: 'Funciones' },
  { href: '/#precios', label: 'Precios' },
  { href: '/#contacto', label: 'Empezá' },
]

export default function FloatingNav({ items = defaultItems }: { items?: NavItem[] }) {
  const [hidden, setHidden] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const past = y > 600
      const goingDown = y > lastY.current + 4
      lastY.current = y
      setHidden(!past || (past && goingDown && y > 900))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.getElementById(href.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    // For '/#x' or '/path' let Next.js Link handle navigation normally.
  }

  return (
    <nav
      aria-label="Navegación de secciones"
      data-hidden={hidden}
      className="nav-pill fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full border border-black/5 bg-white/55 px-5 py-3 text-[13px] font-bold tracking-[-0.35px] text-black shadow-[0_6px_30px_rgba(0,0,0,0.08)] backdrop-blur-lg sm:gap-7 sm:px-6 sm:py-4 sm:text-[14px]"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={handleClick(item.href)}
          className="relative whitespace-nowrap transition-colors hover:text-[#485c11]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
