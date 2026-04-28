import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoButton, TrialButton } from '@/components/shared/CtaButtons'
import { FaqSection } from '@/components/shared/FaqSection'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Reportes y Analítica para Restaurantes — Ventas, Productos y Medios de Pago | Mesanube',
  description:
    'Reportes de ventas integrados al POS. Qué vendiste, cuándo, qué producto rinde más y cómo pagan tus clientes. Para restaurantes y bares argentinos. Solo Plan Avanzado.',
}

/* ─────────────────────────────────────────────
   Static data
───────────────────────────────────────────── */
const navItems = [
  { href: '#que-muestran', label: 'Reportes' },
  { href: '#desde-el-celular', label: 'Desde el celular' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#contacto', label: 'Empezá' },
]

type ReportCard = { title: string; description: string }

const reportCards: ReportCard[] = [
  {
    title: 'Ventas por período',
    description:
      'Comparación día a día, semana a semana o mes a mes. Ves si estás creciendo, si hay una caída, y en qué momento del día o de la semana pasan las cosas.',
  },
  {
    title: 'Productos más vendidos',
    description:
      'Qué ítems salen más. Cuáles tienen menos movimiento. Información concreta para decidir qué mantener en la carta, qué promocionar y qué sacar.',
  },
  {
    title: 'Ventas por medio de pago',
    description:
      'Cuánto entró en efectivo, cuánto en tarjeta, cuánto por transferencia. Útil para el arqueo y para entender los costos de cada medio (las tarjetas tienen comisión).',
  },
  {
    title: 'Ventas por mozo',
    description:
      'Qué vendió cada integrante del equipo de salón. Información para motivar, para entender diferencias de rendimiento, para tomar decisiones de horario.',
  },
]

type FaqItem = { q: string; a: string }

const faqItems: FaqItem[] = [
  {
    q: '¿Los reportes están en todos los planes?',
    a: 'No. Los reportes están disponibles únicamente en el Plan Avanzado ($34.000/mes). El Plan Básico no los incluye.',
  },
  {
    q: '¿Con qué frecuencia se actualizan los reportes?',
    a: 'En tiempo real. Los datos de ventas se actualizan con cada transacción. No hay que esperar al cierre del día para ver los números.',
  },
  {
    q: '¿Los reportes se pueden exportar?',
    a: 'Sí, los reportes son exportables para guardarlos o compartirlos con el contador.',
  },
  {
    q: '¿Qué diferencia hay entre los reportes y el arqueo de caja?',
    a: 'El arqueo de caja es el control de efectivo por turno: cuánto había, cuánto entró, cuánto salió, si hay diferencia. Los reportes son el análisis de ventas: qué vendiste, cuánto, con qué producto y en qué momento. Son complementarios, no lo mismo.',
  },
  {
    q: '¿Puedo ver los reportes sin estar en el local?',
    a: 'Sí. Desde cualquier celular o computadora con acceso a internet y tu usuario de Mesanube.',
  },
]

/* ─────────────────────────────────────────────
   Shared button components
───────────────────────────────────────────── */
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

function SoftButton({
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
      className={`inline-flex items-center justify-center gap-1.5 rounded-full border border-[#e9e9e9] bg-white px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-black transition-[border-color,background-color] duration-200 hover:border-[#485c11] hover:bg-[#f7faf0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#485c11] focus-visible:outline-offset-2 ${className}`}
    >
      {children}
    </Link>
  )
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function ReportesYAnaliticaPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav items={navItems} />

      {/* ── Top nav ── */}
      <nav className="flex w-full max-w-[1500px] items-center justify-between py-5">
        <Link
          href="/"
          className="text-[22px] leading-[1.2] tracking-[-1px] text-black sm:text-[28px]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
        >
          mesanube
        </Link>
        <TrialButton>Probá gratis</TrialButton>
      </nav>

      {/* ── Hero ── */}
      <header className="w-full max-w-[1500px] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
        <Reveal>
          <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
            Funciones — Reportes y analítica
          </p>
          <h1
            className="word-rise mb-6 font-display text-black"
            style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-2px, -0.4vw, -5px)',
            }}
          >
            {'Reportes — lo que vendiste, sin planillas de Excel'.split(' ').map((word, i) => (
              <span key={i} style={{ animationDelay: `${i * 60}ms`, marginRight: '0.22em' }}>
                {word}
              </span>
            ))}
          </h1>
          <p className="mb-8 max-w-[520px] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            ¿Cuál es tu plato más rentable? ¿A qué hora vendés más? ¿Qué medio de pago usa tu
            clientela? Con los reportes de Mesanube lo sabés al instante, sin armar nada a mano.
          </p>
          <div className="flex flex-wrap gap-3">
            <TrialButton>Incluido en el Plan Avanzado — Probá gratis</TrialButton>
            <SoftButton href="#que-muestran">Ver los reportes</SoftButton>
          </div>
        </Reveal>

        {/* Hero image block */}
        <Reveal delay={1} className="mt-12 w-full">
          <div
            className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]"
            style={{ aspectRatio: '16/7' }}
          >
            <Image
              src="/figma/hero-mountains.png"
              alt="Panel de reportes de Mesanube mostrando ventas y analítica"
              fill
              sizes="(max-width: 1500px) 100vw, 1500px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </header>

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        {/* ── La diferencia entre adivinar y saber ── */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                Por qué los datos importan
              </p>
              <h2
                className="font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                La diferencia entre adivinar y saber
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                La mayoría de los dueños de restaurantes toman decisiones de menú, de horario y de
                personal basándose en sensaciones. &ldquo;Me parece que el milanesa vende más los
                viernes&rdquo;. &ldquo;Creo que el turno del mediodía es más flojo&rdquo;. &ldquo;Me
                da la sensación de que la gente paga más con tarjeta&rdquo;.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Con reportes, esas sensaciones se confirman o se corrigen. Y cuando sabés qué
                funciona realmente, las decisiones cuestan menos.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Qué muestran los reportes ── */}
        <section
          id="que-muestran"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="mb-12">
            <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Qué muestran los reportes
            </p>
            <h2
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Lo que importa, en un vistazo
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
            {reportCards.map((card, i) => (
              <Reveal
                key={card.title}
                delay={(i % 2) as 0 | 1 | 2 | 3 | 4}
                className="flex flex-col items-start gap-6 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <div>
                  <h3 className="mb-2 text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black">
                    {card.title}
                  </h3>
                  <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Desde el celular ── */}
        <section
          id="desde-el-celular"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="flex flex-col gap-6">
              <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                Para el dueño que revisa desde el celular
              </p>
              <h2
                className="font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Los datos donde estés
              </h2>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                No hace falta estar en el local para ver los reportes. Desde tu celular, podés
                revisar las ventas del día, la semana o el mes en cualquier momento.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Si algo se ve raro, lo sabés antes de que sea tarde.
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  'Ventas en tiempo real desde cualquier dispositivo',
                  'Exportación para compartir con el contador',
                  'Acceso con tu usuario habitual de Mesanube',
                  'Sin instalar nada adicional',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
                  >
                    <span className="mt-[2px] text-[#485c11]" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal
              delay={1}
              className="relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]"
              style={{ minHeight: '360px' }}
            >
              <Image
                src="/figma/columns.png"
                alt="Reportes de Mesanube accesibles desde celular"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </section>

        {/* ── Testimonial ── */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div
              className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]"
              style={{ aspectRatio: '550/624' }}
            >
              <Image
                src="/figma/sphere.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col justify-center gap-6">
              <blockquote>
                <p
                  className="font-display text-black"
                  style={{
                    fontSize: 'clamp(24px, 3vw, 40px)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.5px',
                  }}
                >
                  &ldquo;Antes cerraba el mes y no sabía bien qué había vendido ni cuánto. Ahora
                  entro al panel y en dos minutos veo todo: qué funcionó, qué no y qué tengo que
                  cambiar.&rdquo;
                </p>
                <footer className="mt-4 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#929292]">
                  — Luciana V., Café Central, Palermo
                </footer>
              </blockquote>
            </div>
          </div>
        </Reveal>

        {/* ── Precio ── */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="mx-auto max-w-[600px] rounded-[20px] border border-[#e9e9e9] p-8 text-center">
            <p className="mb-4 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Incluido en el Plan Avanzado
            </p>
            <p
              className="mb-2 font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              $34.000
              <span className="text-[#6f6f6f]" style={{ fontSize: '0.5em', letterSpacing: '-0.5px' }}>
                /mes
              </span>
            </p>
            <p className="mb-6 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Reportes completos, monitor de cocina, app para mozos, control de stock, recetas y
              facturación ARCA. Sin módulos adicionales.
            </p>
            <ul className="mb-8 flex flex-col gap-2 text-left">
              {[
                'Ventas por período, producto, mozo y medio de pago',
                'Actualización en tiempo real con cada transacción',
                'Exportación para el contador',
                'Acceso desde cualquier celular o computadora',
                'Soporte directo por WhatsApp',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
                >
                  <span className="text-[#485c11]" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <TrialButton className="w-full">Empezá tu prueba gratuita</TrialButton>
            <p className="mt-3 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#929292]">
              30 días gratis. Sin tarjeta de crédito.
            </p>
          </div>
        </Reveal>

        {/* ── FAQ ── */}
        <FaqSection heading="Lo que nos preguntan seguido" items={faqItems} />

        {/* ── CTA final ── */}
        <Reveal
          as="section"
          id="contacto"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                Empezá hoy
              </p>
              <h2
                className="font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Empezá a tomar decisiones con datos — 30 días gratis
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Los reportes están en el Plan Avanzado. Sin tarjeta de crédito. Si querés ver un
                ejemplo de los reportes en acción antes de empezar, agendá una demo.
              </p>
              <div className="flex flex-wrap gap-3">
                <TrialButton>Empezá tu prueba gratuita</TrialButton>
                <DemoButton>Agendá una demo</DemoButton>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <PrimaryButton href="/precios">Ver todos los planes</PrimaryButton>
                <SoftButton href="/funciones">Ver todas las funciones</SoftButton>
              </div>
            </div>
          </div>
        </Reveal>
      </main>

      {/* ── Footer ── */}
      <footer className="flex w-full max-w-[1500px] flex-col items-start justify-end gap-[50px] border-t border-[#e9e9e9] pt-10 pb-5 sm:gap-[80px]">
        <nav
          aria-label="Navegación del pie de página"
          className="flex h-10 w-full items-center justify-between"
        >
          <div className="flex items-center gap-5 text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-black sm:gap-[27px]">
            <Link
              href="#que-muestran"
              className="transition-colors duration-150 hover:text-[#485c11]"
            >
              Reportes
            </Link>
            <Link href="#faq" className="transition-colors duration-150 hover:text-[#485c11]">
              Preguntas
            </Link>
            <Link href="#contacto" className="transition-colors duration-150 hover:text-[#485c11]">
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
