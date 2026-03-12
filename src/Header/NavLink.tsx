'use client'

import Link from 'next/link'
import React from 'react'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'cta'
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, variant = 'default' }) => {
  if (variant === 'cta') {
    return (
      <Link
        href={href}
        className="nav-cta-link"
        style={{
          background: 'rgb(255, 190, 13)',
          color: 'rgb(36, 52, 29)',
          borderRadius: '9999px',
          padding: '0.5rem 1rem',
          fontSize: '0.857rem',
          fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
          fontWeight: 500,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="nav-pill-link"
      style={{
        color: 'rgb(255, 247, 238)',
        fontSize: '0.857rem',
        fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
        fontWeight: 400,
        textDecoration: 'none',
        padding: '0.4rem 0.75rem',
        borderRadius: '9999px',
        whiteSpace: 'nowrap',
        opacity: 0.7,
        transition: 'opacity 150ms ease',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLAnchorElement).style.opacity = '1'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'
      }}
    >
      {children}
    </Link>
  )
}
