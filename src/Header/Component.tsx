import Link from 'next/link'
import React from 'react'

import { MesanubeLogo } from '@/components/Logo/MesanubeLogo'
import { NavLink } from './NavLink'

const navLinks = [
  { label: 'Para tu negocio', href: '/para' },
  { label: 'Funciones', href: '/funciones' },
  { label: 'Precios', href: '/precios' },
  { label: 'Blog', href: '/blog' },
]

export async function Header() {
  return (
    <>
      {/* Logo — fixed top-left */}
      <Link
        href="/"
        aria-label="Mesanube — inicio"
        style={{
          position: 'fixed',
          top: '0.75rem',
          left: '1rem',
          zIndex: 50,
          color: 'rgb(36, 52, 29)',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        <MesanubeLogo size="md" />
      </Link>

      {/* Nav pill — fixed top-right */}
      <nav
        aria-label="Navegación principal"
        style={{
          position: 'fixed',
          top: '0.75rem',
          right: '1rem',
          zIndex: 50,
          background: 'rgb(255, 247, 238)',
          borderRadius: '9999px',
          boxShadow: '0 4px 24px rgba(36, 52, 29, 0.10)',
          padding: '0.2rem',
        }}
      >
        <div
          style={{
            background: 'rgb(36, 52, 29)',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.125rem',
          }}
          className="p-1 md:pl-4 md:pr-1"
        >
          {/* Nav links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-px">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}

            {/* Separator */}
            <span
              style={{
                display: 'block',
                width: '1px',
                height: '1rem',
                background: 'rgba(255, 247, 238, 0.2)',
                margin: '0 0.25rem',
                flexShrink: 0,
              }}
              aria-hidden="true"
            />

            <NavLink href="/login">Iniciá sesión</NavLink>
          </div>

          {/* CTA — always visible */}
          <NavLink href="/registro" variant="cta">
            Probá gratis
          </NavLink>
        </div>
      </nav>
    </>
  )
}
