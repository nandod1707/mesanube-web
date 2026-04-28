import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoLink, TrialButton } from '@/components/shared/CtaButtons'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Funciones — Todo lo que Incluye el Sistema POS Mesanube | Mesanube',
  description:
    'Comanda digital, arqueo de caja, carta QR, monitor de cocina, reportes y fidelización. Sistema POS completo para restaurantes y cafeterías argentinas.',
}

/* ── Static data ── */

const navItems = [
  { href: '#funciones', label: 'Funciones' },
  { href: '/precios', label: 'Precios' },
  { href: '#contacto', label: 'Empezá' },
]

const featureCards = [
  {
    icon: '⚡',
    title: 'Comanda digital',
    body: 'El pedido va del celular del mozo a cocina en segundos. Sin papel, sin gritos, sin pedidos que se pierden.',
    href: '/funciones/comanda-digital',
    label: 'Ver comanda digital',
    badge: null,
  },
  {
    icon: '💰',
    title: 'Arqueo de caja',
    body: 'Cerrá el turno con el control exacto del efectivo, las transferencias y los pagos con tarjeta. Sin calculadora, sin diferencias sin explicación.',
    href: '/funciones/arqueo-de-caja',
    label: 'Ver arqueo de caja',
    badge: null,
  },
  {
    icon: '📱',
    title: 'Carta QR',
    body: 'Tu menú digital en el celular del cliente. Lo actualizás en segundos y el cambio aparece en todas las mesas al instante.',
    href: '/funciones/carta-qr',
    label: 'Ver carta QR',
    badge: null,
  },
  {
    icon: '🖥️',
    title: 'Monitor de cocina',
    body: 'Los pedidos llegan a la pantalla de cocina en tiempo real, en orden. El cocinero marca "listo" y el mozo lo sabe.',
    href: '/funciones/monitor-de-cocina',
    label: 'Ver monitor de cocina',
    badge: null,
  },
  {
    icon: '📊',
    title: 'Reportes y analítica',
    body: 'Qué vendiste, cuánto, a qué hora y con qué medio de pago. Una pantalla, sin planillas.',
    href: '/funciones/reportes-y-analitica',
    label: 'Ver reportes',
    badge: 'Plan Avanzado',
  },
  {
    icon: '👨‍💼',
    title: 'App para mozos',
    body: 'Tus mozos toman pedidos, ven las cuentas y cobran propinas desde el celular que ya tienen en el bolsillo. Sin hardware nuevo.',
    href: '/funciones/app-para-mozos',
    label: 'Ver app para mozos',
    badge: null,
  },
  {
    icon: '🧾',
    title: 'Facturación electrónica ARCA',
    body: 'Facturas A, B y C integradas en el mismo sistema donde tomás el pedido y cerrás la mesa. Sin app separada, sin proceso manual.',
    href: '/funciones/facturacion-electronica-arca',
    label: 'Ver facturación ARCA',
    badge: null,
  },
  {
    icon: '⭐',
    title: 'Fidelización',
    body: 'El primer módulo de fidelización con gamificación para restaurantes argentinos. Tus clientes acumulan puntos y vuelven solos.',
    href: '/funciones/fidelizacion',
    label: 'Quiero acceso anticipado',
    badge: 'Próximamente',
  },
]

/* ── Button primitives ── */

function PrimaryButton({
  children,
  href = '#contacto',
  className = '',
}: {
  children: React.ReactNode
  href?: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-1.5 rounded-full bg-[#485c11] px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-white transition-[background-color,transform] duration-300 hover:bg-[#3a4c0d] active:scale-[0.98] ${className}`}
    >
      <span>{children}</span>
      <svg
        width="10"
        height="10"
        viewBox="0 0 6 7"
        fill="none"
        className="translate-y-px transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        <path
          d="M0.5 6L5.5 1M5.5 1H1.5M5.5 1V5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="square"
        />
      </svg>
    </Link>
  )
}

function SoftButton({ children, href = '#' }: { children: React.ReactNode; href?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#dfecc6] px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-black transition-[background-color,transform] duration-300 hover:bg-[#d0e1ac] active:scale-[0.98]"
    >
      {children}
    </Link>
  )
}

/* ── Page ── */

export default function FuncionesPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav items={navItems} />

      {/* Top nav */}
      <nav className="flex w-full max-w-[1500px] items-center justify-between pt-5 pb-10 sm:pt-5 sm:pb-20">
        <Link
          href="/"
          className="text-[26px] leading-[1.2] tracking-[-1.2px] text-black sm:text-[30px] sm:tracking-[-1.5px]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
        >
          mesanube
        </Link>
        <TrialButton>Probá gratis</TrialButton>
      </nav>

      {/* Hero */}
      <header className="flex w-full max-w-[1500px] flex-col items-start gap-[60px] overflow-clip sm:gap-[100px]">
        <div className="flex w-full flex-col items-start gap-6">
          <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
            Funciones
          </p>
          <h1
            className="word-rise w-full font-display text-black"
            style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-2px, -0.4vw, -5px)',
            }}
          >
            <span>Todo lo que necesitás para gestionar tu local — en un solo sistema.</span>
          </h1>
          <p className="max-w-[52ch] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Desde que abrís hasta que cerrás la caja. Mesanube conecta la sala, la cocina y la caja
            en tiempo real, sin apps separadas, sin hardware especial.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <TrialButton>Probá gratis 30 días</TrialButton>
            <p className="text-[13px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Sin tarjeta de crédito. Sin permanencia.
            </p>
          </div>
        </div>
      </header>

      <main className="flex w-full flex-col items-start">
        {/* Feature cards index */}
        <section
          id="funciones"
          className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:pt-[80px] sm:pb-[60px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Las funciones de Mesanube
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Todo lo que necesitás, nada que no necesitás.
            </p>
          </Reveal>

          <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((f, i) => (
              <Reveal
                key={f.href}
                delay={Math.min((i % 3) + 1, 4) as 1 | 2 | 3 | 4}
                as="article"
                className="flex flex-col items-start gap-6 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <div className="flex w-full flex-col items-start gap-5">
                  <div className="flex w-full items-center gap-3">
                    <span className="text-[22px] leading-none" aria-hidden="true">
                      {f.icon}
                    </span>
                    <p className="font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                      {f.title}
                    </p>
                    {f.badge && (
                      <span className="ml-auto shrink-0 rounded-full bg-[#dfecc6] px-2.5 py-0.5 font-mono text-[11px] font-bold tracking-[-0.14px] text-[#485c11]">
                        {f.badge}
                      </span>
                    )}
                  </div>
                  <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    {f.body}
                  </p>
                </div>
                <Link
                  href={f.href}
                  className="text-[13px] font-bold leading-[1.4] tracking-[-0.14px] text-[#485c11] underline underline-offset-2 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#485c11] focus-visible:outline-offset-2"
                  aria-label={`${f.label} — ${f.title}`}
                >
                  {f.label} →
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Why integrated */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:flex-row lg:items-start lg:gap-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:w-1/2 lg:gap-10">
            <h2
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              La diferencia entre apps separadas y un sistema real
            </h2>
          </Reveal>
          <Reveal delay={1} className="flex w-full flex-col items-start gap-6 lg:w-1/2 lg:pt-2">
            <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Muchos locales terminan usando cuatro aplicaciones distintas: una para tomar pedidos,
              otra para facturar, otra para el menú, otra para los reportes. Y cuando algo falla,
              nadie sabe en qué app está el problema.
            </p>
            <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              En Mesanube cada función está integrada en el mismo sistema. El pedido que toma el mozo
              es el mismo que llega a cocina, el mismo que genera la factura ARCA y el mismo que suma
              al reporte del día. Sin pasos manuales. Sin información duplicada. Sin que el error de
              una app arruine el dato en otra.
            </p>
            <PrimaryButton href="/precios">Ver planes y precios</PrimaryButton>
          </Reveal>
        </section>

        {/* CTA final */}
        <section
          id="contacto"
          className="flex w-full max-w-[1500px] flex-col items-center gap-10 border-t border-[#e9e9e9] px-6 py-[80px] sm:px-24 sm:py-[120px] lg:px-[300px]"
        >
          <Reveal
            as="h2"
            className="w-full text-center font-display text-black"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
            }}
          >
            Probá todas las funciones gratis por 30 días
          </Reveal>
          <Reveal
            delay={1}
            as="p"
            className="w-full text-center text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
          >
            Sin tarjeta de crédito. Sin permanencia. Si querés ver cómo funciona en tu tipo de
            local, agendá una demo.
          </Reveal>
          <Reveal delay={2} className="flex w-full flex-col items-center gap-4">
            <TrialButton className="w-full">Empezá tu prueba gratuita</TrialButton>
            <DemoLink tone="muted">¿Querés verlo en acción? Agendá una demo →</DemoLink>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex w-full max-w-[1500px] flex-col items-start justify-end gap-[50px] border-t border-[#e9e9e9] pt-10 pb-5 sm:gap-[80px]">
        <nav aria-label="Navegación del footer" className="flex h-10 w-full items-center justify-between">
          <div className="flex items-center gap-5 text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-black sm:gap-[27px]">
            <Link href="#funciones" className="transition-colors hover:text-[#485c11]">
              Funciones
            </Link>
            <Link href="/precios" className="transition-colors hover:text-[#485c11]">
              Precios
            </Link>
            <Link href="#contacto" className="transition-colors hover:text-[#485c11]">
              Empezá
            </Link>
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
            <p>2026</p>
          </div>
          <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
            Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  )
}
