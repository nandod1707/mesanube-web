'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { APP_LOGIN_URL, APP_REGISTER_URL } from '@/config/app'
import { WHATSAPP_URL } from '@/config/contact'
import { MAIN_NAV as items } from '@/config/nav'

import { CtaLink } from './CtaLink'

export default function FloatingNav() {
  const [hidden, setHidden] = useState(true)
  const [open, setOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    // Slide in on load (after first paint so the transition runs from hidden).
    const reveal = requestAnimationFrame(() => setHidden(false))

    const onScroll = () => {
      const y = window.scrollY
      const goingDown = y > lastY.current + 4
      const goingUp = y < lastY.current - 4
      lastY.current = y
      if (y < 80) setHidden(false)
      else if (goingDown) setHidden(true)
      else if (goingUp) setHidden(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(reveal)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Lock body scroll and close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    setOpen(false)
    // Smooth-scroll when the hash target already lives on the current page (home).
    if (href.startsWith('/#') && typeof window !== 'undefined' && window.location.pathname === '/') {
      const el = document.getElementById(href.slice(2))
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <>
      {/* Desktop: centered glass pill with inline links (lg and up) */}
      <nav
        aria-label="Navegación principal"
        data-hidden={hidden}
        className="nav-pill fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 items-center gap-7 rounded-full border border-black/5 bg-white/55 px-6 py-4 text-[14px] font-bold tracking-[-0.35px] text-black shadow-[0_6px_30px_rgba(0,0,0,0.08)] backdrop-blur-lg lg:flex"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={handleNav(item.href)}
            className="whitespace-nowrap transition-colors hover:text-[var(--olive)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile/tablet: glass hamburger button, top-right (md and below) */}
      <button
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        data-hidden={hidden}
        onClick={() => setOpen(true)}
        className="fixed right-4 top-4 z-50 flex size-12 items-center justify-center rounded-full border border-black/5 bg-white/55 text-black shadow-[0_6px_30px_rgba(0,0,0,0.08)] backdrop-blur-lg transition-[transform,opacity] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] data-[hidden=true]:pointer-events-none data-[hidden=true]:-translate-y-[150%] data-[hidden=true]:opacity-0 lg:hidden"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      {/* WhatsApp FAB: bottom-right, same glass treatment as the header nav pill. */}
      <Link
        href={`${WHATSAPP_URL}?text="Hola! Me gustaría recibir más información de Mesanube para mi local."`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex size-16 items-center justify-center rounded-full border border-black/5 bg-white/55 shadow-[0_6px_30px_rgba(0,0,0,0.08)] backdrop-blur-lg transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
      >
        <Image src="/media/logo-whatsapp.svg" alt="" width={28} height={28} aria-hidden="true" />
      </Link>

      {/* Mobile full-screen menu overlay. z-[60] sits above the nav (z-50). */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
          className="fixed inset-0 z-[60] flex flex-col bg-white/55 backdrop-blur-2xl lg:hidden"
        >
          <div className="flex items-center justify-between px-6 py-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-[26px] font-medium leading-[1.2] tracking-[-1.2px] text-black"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              mesanube
            </Link>
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="flex size-12 items-center justify-center rounded-full text-black transition-colors hover:bg-black/5"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav aria-label="Navegación principal" className="flex flex-col px-6 pt-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNav(item.href)}
                className="border-b border-black/5 py-5 text-[26px] font-bold tracking-[-0.6px] text-[var(--heading)] transition-colors hover:text-[var(--olive)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 px-6 pb-10 pt-8">
            <CtaLink href={APP_LOGIN_URL} variant="outline" className="w-full">
              Ingresar
            </CtaLink>
            <CtaLink href={APP_REGISTER_URL} variant="primary" className="w-full">
              Creá tu cuenta
            </CtaLink>
          </div>
        </div>
      )}
    </>
  )
}
