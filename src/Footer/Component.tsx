import Link from 'next/link'
import React from 'react'

import { MesanubeLogo } from '@/components/Logo/MesanubeLogo'

const businessLinks = [
  { label: 'Cafeterías', href: '/para/cafeterias' },
  { label: 'Restaurantes', href: '/para/restaurantes' },
  { label: 'Bares', href: '/para/bares' },
  { label: 'Pizzerías', href: '/para/pizzerias' },
  { label: 'Parrillas', href: '/para/parrillas' },
]

const featureLinks = [
  { label: 'Comanda digital', href: '/funciones/comanda-digital' },
  { label: 'Facturación ARCA', href: '/funciones/facturacion-electronica-arca' },
  { label: 'App para mozos', href: '/funciones/app-para-mozos' },
  { label: 'Reportes', href: '/funciones/reportes-y-analitica' },
  { label: 'Carta QR', href: '/funciones/carta-qr' },
  { label: 'Arqueo de caja', href: '/funciones/arqueo-de-caja' },
]

const marqueeText = 'Organizá tu restaurante \u273e Organizá tu restaurante \u273e Organizá tu restaurante \u273e Organizá tu restaurante \u273e '

export async function Footer() {
  return (
    <footer className="mt-auto" style={{ background: 'rgb(255, 254, 252)', paddingTop: '4rem' }}>
      {/* Footer card with squircle top edge */}
      <div
        className="clip-squircle-top"
        style={{
          background: 'rgb(248, 137, 103)',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '1.5rem',
        }}
      >
        {/* Decorative SVG radial lines */}
        <svg
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '28rem',
            height: '28rem',
            opacity: 0.18,
            pointerEvents: 'none',
          }}
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="200" y1="200" x2="400" y2="50" stroke="white" strokeWidth="1" />
          <line x1="200" y1="200" x2="400" y2="150" stroke="white" strokeWidth="1" />
          <line x1="200" y1="200" x2="380" y2="280" stroke="white" strokeWidth="1" />
          <line x1="200" y1="200" x2="310" y2="380" stroke="white" strokeWidth="1" />
          <line x1="200" y1="200" x2="200" y2="400" stroke="white" strokeWidth="1" />
          <line x1="200" y1="200" x2="80" y2="390" stroke="white" strokeWidth="1" />
          <line x1="200" y1="200" x2="30" y2="320" stroke="white" strokeWidth="1" />
          <line x1="200" y1="200" x2="10" y2="200" stroke="white" strokeWidth="1" />
        </svg>

        {/* Headline marquee */}
        <div
          style={{
            overflow: 'hidden',
            paddingBottom: '1.5rem',
            paddingTop: '0.5rem',
          }}
          aria-hidden="true"
        >
          <div
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'marquee 28s linear infinite',
              willChange: 'transform',
            }}
          >
            <span
              style={{
                fontSize: '5rem',
                fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
                fontWeight: 500,
                color: 'rgb(255, 247, 238)',
                whiteSpace: 'nowrap',
                paddingRight: '0',
                letterSpacing: '-0.01em',
                lineHeight: 1,
              }}
            >
              {marqueeText}
            </span>
            <span
              style={{
                fontSize: '5rem',
                fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
                fontWeight: 500,
                color: 'rgb(255, 247, 238)',
                whiteSpace: 'nowrap',
                letterSpacing: '-0.01em',
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              {marqueeText}
            </span>
          </div>
        </div>

        {/* Inner content card */}
        <div
          style={{
            background: 'rgb(255, 247, 238)',
            borderRadius: '0.857rem',
            margin: '0 0.714rem 0.714rem',
            padding: '2.5rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2.5rem',
              justifyContent: 'space-between',
            }}
          >
            {/* Left: Logo + tagline */}
            <div style={{ flex: '1 1 16rem', maxWidth: '22rem' }}>
              <Link
                href="/"
                aria-label="Mesanube — inicio"
                style={{
                  color: 'rgb(36, 52, 29)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  marginBottom: '1rem',
                }}
              >
                <MesanubeLogo size="lg" />
              </Link>
              <p
                style={{
                  color: 'rgb(73, 87, 67)',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  marginTop: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                El POS que organiza tu restaurante y te ayuda a ganar más.
              </p>

              {/* CTA */}
              <Link
                href="/registro"
                style={{
                  display: 'inline-block',
                  background: 'rgb(255, 190, 13)',
                  color: 'rgb(36, 52, 29)',
                  borderRadius: '9999px',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
                  textDecoration: 'none',
                  marginBottom: '0.75rem',
                }}
              >
                Probá {process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis
              </Link>

              <br />

              <Link
                href="https://wa.me/5491100000000"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'rgb(92, 125, 79)',
                  fontSize: '0.857rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  marginTop: '0.5rem',
                }}
              >
                {/* WhatsApp icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablá con nosotros
              </Link>
            </div>

            {/* Middle: Nav columns */}
            <div
              style={{
                display: 'flex',
                gap: '3rem',
                flex: '1 1 24rem',
                flexWrap: 'wrap',
              }}
            >
              {/* Para tu negocio */}
              <div>
                <h3
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgb(115, 126, 109)',
                    marginBottom: '1rem',
                  }}
                >
                  Para tu negocio
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {businessLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{
                          color: 'rgb(73, 87, 67)',
                          fontSize: '0.9rem',
                          textDecoration: 'none',
                          fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Funciones */}
              <div>
                <h3
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgb(115, 126, 109)',
                    marginBottom: '1rem',
                  }}
                >
                  Funciones
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {featureLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{
                          color: 'rgb(73, 87, 67)',
                          fontSize: '0.9rem',
                          textDecoration: 'none',
                          fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: '1px solid rgb(220, 228, 217)',
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <p style={{ color: 'rgb(115, 126, 109)', fontSize: '0.8rem', margin: 0 }}>
              &copy; {new Date().getFullYear()} Mesanube. Todos los derechos reservados.
            </p>
            <p style={{ color: 'rgb(115, 126, 109)', fontSize: '0.8rem', margin: 0 }}>
              Hecho con ♥ en Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
