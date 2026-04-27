'use client'

import { useEffect, useRef, useState } from 'react'

const items = [
  { id: 'funciones', label: 'Funciones' },
  { id: 'comparativa', label: 'Comparativa' },
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'contacto', label: 'Empezá' },
]

export default function FloatingNav() {
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

  const jump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      aria-label="Navegación de secciones"
      data-hidden={hidden}
      className="nav-pill fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full border border-black/5 bg-white/55 px-5 py-3 text-[13px] font-bold tracking-[-0.35px] text-black shadow-[0_6px_30px_rgba(0,0,0,0.08)] backdrop-blur-lg sm:gap-7 sm:px-6 sm:py-4 sm:text-[14px]"
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={jump(item.id)}
          className="relative whitespace-nowrap transition-colors hover:text-[#485c11]"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
