import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { MesanubeLogo } from '@/components/Logo/MesanubeLogo'
import { IntroSection } from '@/components/Homepage/IntroSection'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Mesanube — POS y comanda digital para restaurantes y cafeterías en Argentina',
  description:
    'Sistema de gestión para restaurantes argentinos. Comanda digital, facturación ARCA, control de caja y app para mozos. Probá 30 días gratis, sin tarjeta.',
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const businessTypes = [
  {
    emoji: '☕',
    name: 'Cafeterías',
    tagline: 'Pedidos rápidos, carta QR y ARCA sin vueltas',
    href: '/para/cafeterias',
  },
  {
    emoji: '🍕',
    name: 'Pizzerías',
    tagline: 'Delivery, mostrador y salón en un solo sistema',
    href: '/para/pizzerias',
  },
  {
    emoji: '🍷',
    name: 'Bares',
    tagline: 'Comanda ágil para múltiples mozos y mesas',
    href: '/para/bares',
  },
  {
    emoji: '🥩',
    name: 'Parrillas y restaurantes',
    tagline: 'Control completo de sala y cocina',
    href: '/para/parrillas',
  },
  {
    emoji: '🌙',
    name: 'Dark kitchens',
    tagline: 'Gestión de pedidos sin salón',
    href: '/para/dark-kitchens',
  },
  {
    emoji: '🏢',
    name: 'Cadenas multilocal',
    tagline: 'Control centralizado de múltiples sucursales',
    href: '/para/cadenas-multilocal',
  },
]

const features = [
  {
    icon: '🖥️',
    title: 'Comanda digital',
    description: 'Tomá pedidos desde cualquier dispositivo, enviá directo a cocina',
    href: '/funciones/comanda-digital',
  },
  {
    icon: '📊',
    title: 'Arqueo de caja',
    description: 'Cerrá cada turno con control total del efectivo',
    href: '/funciones/arqueo-de-caja',
  },
  {
    icon: '📱',
    title: 'App para mozos',
    description: 'Pedidos, cuentas y propinas digitales desde el celular',
    href: '/funciones/app-para-mozos',
  },
  {
    icon: '📋',
    title: 'Carta QR',
    description: 'Menú digital que tus clientes escanean en la mesa',
    href: '/funciones/carta-qr',
  },
  {
    icon: '🍳',
    title: 'Monitor de cocina',
    description: 'Los pedidos llegan solos, sin papel ni gritos',
    href: '/funciones/monitor-de-cocina',
  },
  {
    icon: '📈',
    title: 'Reportes',
    description: 'Vendido por día, producto, turno y medio de pago',
    href: '/funciones/reportes-y-analitica',
  },
]

const trustItems = [
  'Facturación ARCA incluida',
  '100% hecho en Argentina',
  'Sin costos ocultos',
  'Cancelá cuando querés',
  'Soporte por WhatsApp',
]

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main style={{ flex: 1 }}>
      {/* ── HERO ─────────────────────────────── */}
      <section
        style={{
          minHeight: '100svh',
          padding: '0.714rem 0.714rem 3.36rem',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Hero inner container — squircle */}
        <div
          className="clip-squircle"
          style={{
            flex: 1,
            background: 'linear-gradient(160deg, rgb(36, 52, 29) 0%, rgb(57, 80, 46) 45%, rgb(73, 100, 60) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '7rem 2rem 4rem',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 'calc(100svh - 4.074rem)',
          }}
        >
          {/* Decorative diagonal lines */}
          <svg
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M-100 600 L500 -50" stroke="white" strokeWidth="1" strokeOpacity="0.08" />
            <path d="M100 700 L700 -50" stroke="white" strokeWidth="1" strokeOpacity="0.06" />
            <path d="M300 800 L900 0" stroke="white" strokeWidth="1" strokeOpacity="0.08" />
            <path d="M600 800 L1200 100" stroke="white" strokeWidth="1" strokeOpacity="0.06" />
            <path d="M900 800 L1400 200" stroke="white" strokeWidth="1" strokeOpacity="0.05" />
          </svg>

          {/* MesanubeLogo — large, warm white, centered at top of hero */}
          <div style={{ color: 'rgb(255, 247, 238)', marginBottom: '2.5rem' }}>
            <MesanubeLogo size="lg" />
          </div>

          {/* H1 */}
          <h1
            style={{
              color: 'rgb(255, 247, 238)',
              fontSize: 'clamp(2.4rem, 6vw, 8.29rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              textAlign: 'center',
              maxWidth: '16ch',
              margin: '0 auto 1.5rem',
            }}
          >
            El POS que organiza tu restaurante y te ayuda a ganar más
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: 'rgba(255, 247, 238, 0.8)',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.3rem)',
              lineHeight: '1.5',
              textAlign: 'center',
              maxWidth: '52ch',
              margin: '0 auto 2.5rem',
            }}
          >
            Comanda digital, facturación ARCA y control de caja — diseñado para bares, cafeterías y
            restaurantes argentinos.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}
          >
            <Link
              href="/registro"
              style={{
                background: 'rgb(255, 190, 13)',
                color: 'rgb(36, 52, 29)',
                borderRadius: '9999px',
                padding: '0.85rem 2rem',
                fontSize: '1rem',
                fontWeight: 500,
                fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              Probá 30 días gratis →
            </Link>
            <Link
              href="/demo"
              style={{
                background: 'transparent',
                color: 'rgb(255, 247, 238)',
                borderRadius: '9999px',
                padding: '0.85rem 2rem',
                fontSize: '1rem',
                fontWeight: 400,
                fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
                textDecoration: 'none',
                border: '1px solid rgba(255, 247, 238, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              Agendá una demo →
            </Link>
          </div>

          {/* Social proof */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'rgba(255, 247, 238, 0.7)',
              fontSize: '0.857rem',
              textAlign: 'center',
            }}
          >
            <span aria-label="5 estrellas" role="img">⭐⭐⭐⭐⭐</span>
            <span>
              &quot;No pensé que iba a ser tan fácil&quot; — María G., Cafetería La Calma, Palermo
            </span>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────── */}
      <section
        style={{
          background: 'rgb(255, 254, 252)',
          borderTop: '1px solid rgb(220, 228, 217)',
          borderBottom: '1px solid rgb(220, 228, 217)',
          padding: '1.25rem 2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem 2rem',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 'clamp(1rem, 4vw, 2rem)',
            paddingRight: 'clamp(1rem, 28vw, 440px)',
          }}
        >
          {trustItems.map((item) => (
            <span
              key={item}
              style={{
                color: 'rgb(73, 87, 67)',
                fontSize: '0.857rem',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '1.1rem',
                  height: '1.1rem',
                  borderRadius: '9999px',
                  background: 'rgb(92, 125, 79)',
                  color: 'rgb(255, 247, 238)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                ✓
              </span>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── INTRO SECTION (client, animated) ───── */}
      <IntroSection />

      {/* ── PARA QUÉ TIPO DE LOCAL ─────────────── */}
      <section
        style={{
          padding: '5.714rem 2rem',
          background: 'rgb(255, 254, 252)',
        }}
      >
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          {/* Tagline */}
          <p
            style={{
              color: 'rgb(92, 125, 79)',
              fontSize: '0.857rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Tipos de negocio
          </p>

          <h2
            style={{
              color: 'rgb(36, 52, 29)',
              fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              maxWidth: '20ch',
              marginBottom: '1rem',
            }}
          >
            Pensado para cada tipo de negocio gastronómico
          </h2>

          <p
            style={{
              color: 'rgb(73, 87, 67)',
              fontSize: '1rem',
              lineHeight: '1.5',
              maxWidth: '52ch',
              marginBottom: '3.214rem',
            }}
          >
            Mesanube se adapta al ritmo de tu local — ya sea una cafetería con 3 mesas o una cadena
            con varios locales.
          </p>

          {/* Cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))',
              gap: '1rem',
            }}
          >
            {businessTypes.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                style={{
                  background: 'rgb(255, 247, 238)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  textDecoration: 'none',
                  display: 'block',
                  border: '1px solid rgb(220, 228, 217)',
                  transition: 'border-color 200ms ease, box-shadow 200ms ease',
                }}
              >
                <span
                  style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}
                  aria-hidden="true"
                >
                  {type.emoji}
                </span>
                <h3
                  style={{
                    color: 'rgb(36, 52, 29)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    marginBottom: '0.35rem',
                  }}
                >
                  {type.name}
                </h3>
                <p style={{ color: 'rgb(73, 87, 67)', fontSize: '0.857rem', lineHeight: '1.4', margin: 0 }}>
                  {type.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES STICKY CARDS ──────────────── */}
      <section
        style={{
          padding: '5.714rem 2rem',
          background: 'rgb(255, 249, 241)',
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)]"
          style={{
            maxWidth: '72rem',
            margin: '0 auto',
            gap: '3rem',
          }}
        >
          {/* Left sticky panel */}
          <div
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <p
              style={{
                color: 'rgb(92, 125, 79)',
                fontSize: '0.857rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Funciones
            </p>
            <h2
              style={{
                color: 'rgb(36, 52, 29)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
                marginBottom: '1rem',
              }}
            >
              Todo lo que necesitás para gestionar tu local
            </h2>
            <p
              style={{
                color: 'rgb(73, 87, 67)',
                fontSize: '1rem',
                lineHeight: '1.5',
                marginBottom: '1.5rem',
              }}
            >
              Desde que abrís hasta que cerrás la caja, Mesanube te cubre.
            </p>
            <Link
              href="/funciones"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.71rem',
                height: '2.71rem',
                borderRadius: '50%',
                background: 'rgb(255, 190, 13)',
                color: 'rgb(36, 52, 29)',
                textDecoration: 'none',
                fontSize: '1.2rem',
              }}
              aria-label="Ver todas las funciones"
            >
              →
            </Link>
          </div>

          {/* Right scrolling cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {features.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                style={{
                  background: 'rgb(255, 247, 238)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  textDecoration: 'none',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  border: '1px solid rgb(220, 228, 217)',
                }}
              >
                <span
                  style={{
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    lineHeight: 1,
                    marginTop: '0.1rem',
                  }}
                  aria-hidden="true"
                >
                  {feature.icon}
                </span>
                <div>
                  <h3
                    style={{
                      color: 'rgb(36, 52, 29)',
                      fontSize: '1rem',
                      fontWeight: 500,
                      marginBottom: '0.3rem',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ color: 'rgb(73, 87, 67)', fontSize: '0.9rem', lineHeight: '1.4', margin: 0 }}>
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCA SECTION ─────────────────────── */}
      <section
        style={{
          padding: '5.714rem 2rem',
          background: 'rgb(255, 254, 252)',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '72rem', margin: '0 auto', position: 'relative' }}>
          {/* Decorative image panels (colored gradient placeholders) */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '-1rem',
              top: '-2rem',
              width: '14rem',
              height: '20rem',
              borderRadius: '1.5rem',
              background: 'linear-gradient(160deg, rgb(122, 150, 111) 0%, rgb(73, 87, 67) 100%)',
              opacity: 0.25,
              transform: 'rotate(-3deg)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '0',
              bottom: '-2rem',
              width: '18rem',
              height: '12rem',
              borderRadius: '1.5rem',
              background: 'linear-gradient(160deg, rgb(225, 234, 244) 0%, rgb(112, 155, 202) 100%)',
              opacity: 0.3,
              transform: 'rotate(2deg)',
            }}
          />

          {/* Foreground card */}
          <div
            style={{
              background: 'rgb(255, 247, 238)',
              borderRadius: '1rem',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              maxWidth: '44rem',
              margin: '0 auto',
              position: 'relative',
              zIndex: 1,
              border: '1px solid rgb(220, 228, 217)',
            }}
          >
            <p
              style={{
                color: 'rgb(92, 125, 79)',
                fontSize: '0.857rem',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Diferencial Mesanube
            </p>
            <h2
              style={{
                color: 'rgb(36, 52, 29)',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
                marginBottom: '1rem',
              }}
            >
              Facturación electrónica ARCA — ya incluida en tu POS
            </h2>
            <p
              style={{
                color: 'rgb(73, 87, 67)',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '1.75rem',
              }}
            >
              En Mesanube no tenés que instalar ninguna app extra para cumplir con ARCA. Emitís
              facturas A, B y C directamente desde tu POS, con impresión en ticket térmico. Sin
              complicaciones con el contador.
            </p>
            <Link
              href="/funciones/facturacion-electronica-arca"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgb(255, 190, 13)',
                color: 'rgb(36, 52, 29)',
                borderRadius: '9999px',
                padding: '0.75rem 1.5rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
                textDecoration: 'none',
              }}
            >
              Ver cómo funciona →
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMING SOON ──────────────────────── */}
      <section
        style={{
          padding: '5.714rem 2rem',
          background: 'rgb(255, 249, 241)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative image placeholders */}
        <div
          aria-hidden="true"
          className="clip-squircle"
          style={{
            position: 'absolute',
            left: 'clamp(1rem, 5vw, 6rem)',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 'clamp(8rem, 14vw, 14rem)',
            height: 'clamp(10rem, 18vw, 18rem)',
            background: 'linear-gradient(160deg, rgb(255, 190, 13) 0%, rgb(246, 110, 70) 100%)',
            opacity: 0.25,
          }}
        />
        <div
          aria-hidden="true"
          className="clip-squircle"
          style={{
            position: 'absolute',
            right: 'clamp(1rem, 5vw, 6rem)',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 'clamp(8rem, 14vw, 14rem)',
            height: 'clamp(10rem, 18vw, 18rem)',
            background: 'linear-gradient(160deg, rgb(92, 125, 79) 0%, rgb(36, 52, 29) 100%)',
            opacity: 0.18,
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '44rem', margin: '0 auto' }}>
          {/* Rotating badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '5.79rem',
              height: '5.79rem',
              borderRadius: '50%',
              background: 'rgb(36, 52, 29)',
              marginBottom: '2rem',
              animation: 'rotate 20s linear infinite',
              willChange: 'transform',
            }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 100 100" width="5.79rem" height="5.79rem" style={{ borderRadius: '50%' }}>
              <defs>
                <path
                  id="circle"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text fontSize="10.5" fill="rgb(255, 190, 13)" fontFamily="DM Sans, sans-serif" fontWeight="500" letterSpacing="1.5">
                <textPath href="#circle">COMING SOON · COMING SOON · </textPath>
              </text>
            </svg>
          </div>

          <p
            style={{
              color: 'rgb(92, 125, 79)',
              fontSize: '0.857rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Próximamente
          </p>

          <h2
            style={{
              color: 'rgb(36, 52, 29)',
              fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              marginBottom: '1.25rem',
            }}
          >
            El primer POS argentino que hace que tus clientes vuelvan solos
          </h2>

          <p
            style={{
              color: 'rgb(73, 87, 67)',
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '2rem',
            }}
          >
            Estamos construyendo el primer módulo de fidelización con gamificación para restaurantes
            argentinos. Puntos, recompensas, desafíos — todo integrado con tu POS.
          </p>

          <Link
            href="/funciones/fidelizacion"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgb(36, 52, 29)',
              color: 'rgb(255, 247, 238)',
              borderRadius: '9999px',
              padding: '0.75rem 1.75rem',
              fontSize: '0.9rem',
              fontWeight: 500,
              fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
              textDecoration: 'none',
            }}
          >
            Quiero acceso anticipado →
          </Link>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────── */}
      <section
        style={{
          padding: '5.714rem 2rem',
          background: 'rgb(255, 254, 252)',
        }}
      >
        <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
          <p
            style={{
              color: 'rgb(92, 125, 79)',
              fontSize: '0.857rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Precios
          </p>

          <h2
            style={{
              color: 'rgb(36, 52, 29)',
              fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              marginBottom: '0.75rem',
            }}
          >
            Precios transparentes y simples
          </h2>

          <p
            style={{
              color: 'rgb(73, 87, 67)',
              fontSize: '1rem',
              lineHeight: '1.5',
              marginBottom: '3rem',
            }}
          >
            Elegí el plan que se adapta a tu local. Todos incluyen prueba gratuita de 30 días.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            {/* Básico */}
            <div
              style={{
                background: 'rgb(255, 247, 238)',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid rgb(220, 228, 217)',
              }}
            >
              <p
                style={{
                  color: 'rgb(73, 87, 67)',
                  fontSize: '0.857rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.5rem',
                }}
              >
                Básico
              </p>
              <p
                style={{
                  color: 'rgb(36, 52, 29)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  marginBottom: '0.25rem',
                }}
              >
                $19.000
                <span style={{ fontSize: '1rem', fontWeight: 400, color: 'rgb(73, 87, 67)' }}>
                  /mes
                </span>
              </p>
              <p style={{ color: 'rgb(73, 87, 67)', fontSize: '0.857rem', marginBottom: '1.5rem' }}>
                Perfecto para cafeterías pequeñas
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                {['Comanda digital', 'Carta QR', 'Facturación ARCA', 'Arqueo de caja'].map(
                  (item) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'rgb(73, 87, 67)',
                        fontSize: '0.9rem',
                      }}
                    >
                      <span
                        style={{
                          color: 'rgb(92, 125, 79)',
                          fontWeight: 700,
                          fontSize: '0.8rem',
                        }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ),
                )}
              </ul>
              <Link
                href="/registro"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: 'rgb(36, 52, 29)',
                  color: 'rgb(255, 247, 238)',
                  borderRadius: '9999px',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
                  textDecoration: 'none',
                }}
              >
                Empezar gratis
              </Link>
            </div>

            {/* Avanzado */}
            <div
              style={{
                background: 'rgb(36, 52, 29)',
                borderRadius: '1rem',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Popular badge */}
              <span
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'rgb(255, 190, 13)',
                  color: 'rgb(36, 52, 29)',
                  borderRadius: '9999px',
                  padding: '0.2rem 0.7rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                Más popular
              </span>
              <p
                style={{
                  color: 'rgba(255, 247, 238, 0.7)',
                  fontSize: '0.857rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.5rem',
                }}
              >
                Avanzado
              </p>
              <p
                style={{
                  color: 'rgb(255, 247, 238)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  marginBottom: '0.25rem',
                }}
              >
                $34.000
                <span style={{ fontSize: '1rem', fontWeight: 400, color: 'rgba(255,247,238,0.6)' }}>
                  /mes
                </span>
              </p>
              <p
                style={{
                  color: 'rgba(255, 247, 238, 0.7)',
                  fontSize: '0.857rem',
                  marginBottom: '1.5rem',
                }}
              >
                Para bares y restaurantes
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                {[
                  'Todo el plan Básico',
                  'App para mozos',
                  'Monitor de cocina (KDS)',
                  'Control de stock',
                  'Reportes avanzados',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'rgb(255, 247, 238)',
                      fontSize: '0.9rem',
                    }}
                  >
                    <span
                      style={{
                        color: 'rgb(255, 190, 13)',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/registro"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: 'rgb(255, 190, 13)',
                  color: 'rgb(36, 52, 29)',
                  borderRadius: '9999px',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
                  textDecoration: 'none',
                }}
              >
                Empezar gratis
              </Link>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              href="/precios"
              style={{
                color: 'rgb(92, 125, 79)',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Ver todos los planes y comparar →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────── */}
      <section
        style={{
          padding: '6rem 2rem',
          background: 'rgb(36, 52, 29)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '44rem', margin: '0 auto' }}>
          <h2
            style={{
              color: 'rgb(255, 247, 238)',
              fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              marginBottom: '1rem',
            }}
          >
            ¿Listo para dejar el papel atrás?
          </h2>

          <p
            style={{
              color: 'rgba(255, 247, 238, 0.75)',
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '2.5rem',
            }}
          >
            Probá Mesanube gratis por 30 días. Sin tarjeta de crédito. Sin permanencia. Sin
            complicaciones.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Link
              href="/registro"
              style={{
                background: 'rgb(255, 190, 13)',
                color: 'rgb(36, 52, 29)',
                borderRadius: '9999px',
                padding: '0.9rem 2.25rem',
                fontSize: '1rem',
                fontWeight: 500,
                fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              Empezá tu prueba gratuita →
            </Link>
            <Link
              href="/demo"
              style={{
                background: 'transparent',
                color: 'rgb(255, 247, 238)',
                borderRadius: '9999px',
                padding: '0.9rem 2rem',
                fontSize: '1rem',
                fontWeight: 400,
                fontFamily: 'var(--font-dm-sans), DM Sans, system-ui, sans-serif',
                textDecoration: 'none',
                border: '1px solid rgba(255, 247, 238, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              O agendá una demo de 20 minutos →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
