import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'

export const metadata: Metadata = {
  title: 'Mesanube — POS y comanda digital para restaurantes en Argentina',
  description:
    'Sistema de gestión para restaurantes argentinos. Comanda digital, facturación ARCA, control de caja y app para mozos. Probá 30 días gratis, sin tarjeta.',
}

/* ── Static data ── */

const benefits = [
  {
    icon: '/figma/icon-cable.svg',
    title: 'Comanda digital',
    body: 'Los pedidos llegan directo a cocina. Sin papel, sin errores, en segundos.',
  },
  {
    icon: '/figma/icon-earth.svg',
    title: 'Facturación ARCA',
    body: 'Factura electrónica integrada desde el primer día. Cero burocracia extra.',
  },
  {
    icon: '/figma/icon-account.svg',
    title: 'App para mozos',
    body: 'Tu equipo toma pedidos y pagos desde el celular. Sin correr a la caja.',
  },
  {
    icon: '/figma/icon-chart.svg',
    title: 'Reportes en tiempo real',
    body: 'Cerrá cada turno con los números exactos. Sin sorpresas al final del día.',
  },
]

const valueProps = [
  'Sin errores en cocina: La comanda llega al instante, el plato sale bien.',
  'Caja controlada: Abrí y cerrá cada turno con un toque, con reportes automáticos.',
  'ARCA integrado: Facturación electrónica sin vueltas, sin papel extra.',
  'Todo desde el celular: Tu equipo gestiona pedidos y pagos en movimiento.',
]

const logos = [
  '/figma/logo1.png',
  '/figma/logo2.png',
  '/figma/logo3.png',
  '/figma/logo4.png',
  '/figma/logo5.png',
  '/figma/logo6.png',
]

const tableColumns = [
  {
    name: 'Mesanube',
    highlight: true,
    rows: [
      { ok: true, text: 'Comanda digital' },
      { ok: true, text: 'Facturación ARCA' },
      { ok: true, text: 'App para mozos' },
      { ok: true, text: 'Reportes automáticos' },
      { ok: true, text: 'Gestión de mesas' },
      { ok: true, text: 'Soporte en Argentina' },
    ],
  },
  {
    name: 'Otros POS',
    rows: [
      { ok: true, text: 'Comanda básica' },
      { ok: false, text: 'Facturación separada' },
      { ok: true, text: 'App limitada' },
      { ok: false, text: 'Reportes manuales' },
      { ok: true, text: 'Gestión básica' },
      { ok: false, text: 'Soporte genérico' },
    ],
  },
  {
    name: 'Papel y lápiz',
    rows: [
      { ok: false, text: 'Sin comanda' },
      { ok: false, text: 'Facturación manual' },
      { ok: false, text: 'Sin app' },
      { ok: false, text: 'Sin reportes' },
      { ok: false, text: 'Gestión manual' },
      { ok: false, text: 'Sin soporte' },
    ],
  },
]

const steps = [
  {
    n: '01',
    title: 'Registrate',
    body: 'Creá tu cuenta en 5 minutos. Sin tarjeta, sin compromisos.',
  },
  {
    n: '02',
    title: 'Configurá tu local',
    body: 'Cargá tus mesas, tu carta y tu equipo. En un día, todo listo.',
  },
  {
    n: '03',
    title: 'Abrí y vendé',
    body: 'Desde el primer turno, con soporte real en español.',
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

export default function HomePage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />

      {/* Top bar */}
      <nav className="flex w-full max-w-[1500px] items-center justify-between pt-5 pb-10 sm:pt-5 sm:pb-20">
        <Link
          href="/"
          className="text-[26px] leading-[1.2] tracking-[-1.2px] text-black sm:text-[30px] sm:tracking-[-1.5px]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
        >
          mesanube
        </Link>
        <PrimaryButton href="/registro">Probá gratis</PrimaryButton>
      </nav>

      {/* Hero */}
      <header className="flex w-full max-w-[1500px] flex-col items-start gap-[80px] overflow-clip sm:gap-[160px] lg:gap-[240px]">
        <h1
          className="word-rise w-full text-center font-display text-black"
          style={{
            fontSize: 'clamp(56px, 12vw, 160px)',
            lineHeight: 0.9,
            letterSpacing: 'clamp(-2px, -0.5vw, -6.8px)',
          }}
        >
          <span>El POS para tu gastronomía.</span>
        </h1>

        <Reveal className="relative w-full">
          <div className="relative h-[220px] w-full overflow-visible rounded-[20px] bg-[#8e9c78] sm:h-[280px] sm:rounded-[24px] lg:h-[362px] lg:rounded-[30px]">
            <div
              aria-label="Vista previa del panel de Mesanube mostrando comandas, mesas y reportes"
              className="ipad-float absolute left-1/2 top-1/2 w-[88%] max-w-[907px] overflow-hidden rounded-[14px] border-x-2 border-t-2 border-white/50 bg-black shadow-[0_-4px_20px_rgba(0,0,0,0.1)] sm:rounded-[18px] lg:rounded-[24px]"
              style={{ aspectRatio: '907 / 644' }}
            >
              <div className="absolute inset-[2%_2%_0_2%] overflow-hidden rounded-[10px] sm:rounded-[14px] lg:rounded-[16px]">
                <Image
                  src="/figma/inner-screen.png"
                  alt="Panel de control de Mesanube"
                  fill
                  sizes="(max-width: 1024px) 90vw, 870px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Reveal>
      </header>

      <main className="flex w-full flex-col items-start">
        {/* Logo cloud */}
        <Reveal className="flex w-full max-w-[1500px] flex-col items-center gap-[30px] py-[50px]">
          <p className="w-full text-[15px] leading-[1.4] tracking-[-0.075px] text-[#6f6f6f]">
            Usan Mesanube:
          </p>
          <div className="flex w-full flex-wrap items-center justify-center gap-x-[40px] gap-y-[20px]">
            {logos.map((src, i) => (
              <div
                key={src}
                className="relative flex h-[84px] w-[154px] items-center justify-center p-5 opacity-70 mix-blend-multiply"
              >
                <Image
                  src={src}
                  alt={`Logo de cliente ${i + 1}`}
                  fill
                  sizes="154px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Benefits */}
        <section
          id="funciones"
          className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]"
        >
          <div className="flex w-full flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:gap-[50px] sm:pt-[80px] sm:pb-[60px]">
            <Reveal className="flex w-full flex-col items-start gap-[30px] sm:gap-[50px] lg:pr-[400px]">
              <h2 className="font-mono text-[12px] leading-[1.4] tracking-[-0.12px] text-[#485c11]">
                Funciones
              </h2>
              <p
                className="w-full font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Todo lo que tu local necesita.
              </p>
              <p className="w-full text-[15px] leading-[1.4] tracking-[-0.075px] text-[#6f6f6f]">
                Mesanube pone el control de tu restaurante en un solo lugar, sin vueltas.
              </p>
            </Reveal>

            <div className="grid w-full grid-cols-1 gap-x-[20px] gap-y-[20px] pt-[20px] sm:grid-cols-2 sm:pt-[40px] lg:grid-cols-4">
              {benefits.map((b, i) => (
                <Reveal
                  key={b.title}
                  delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
                  as="section"
                  aria-label={`Función ${i + 1} de 4`}
                  className="flex flex-col items-start gap-6 border-t border-[#e9e9e9] py-[40px] pr-5 min-w-[200px]"
                >
                  <div className="relative size-6">
                    <Image src={b.icon} alt="" fill sizes="24px" />
                  </div>
                  <div className="flex w-full flex-col items-start gap-5">
                    <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                      {b.title}
                    </p>
                    <p className="w-full text-[15px] leading-[1.4] tracking-[-0.075px] text-[#6f6f6f]">
                      {b.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="zoom-wrap relative h-[260px] w-full overflow-hidden rounded-[20px] sm:h-[420px] lg:h-[620px] lg:rounded-[30px]">
            <Image
              src="/figma/hero-mountains.png"
              alt="Vista aérea de un restaurante organizado"
              fill
              sizes="(max-width: 1024px) 100vw, 1500px"
              className="object-cover"
            />
          </Reveal>
        </section>

        {/* Features two-col */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] pb-[80px] lg:flex-row lg:items-start lg:gap-[20px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-[1_0_0] flex-col items-start gap-10 border-t border-[#e9e9e9] pt-[60px] pb-[40px] lg:pb-[80px]">
            <div className="flex w-full flex-col items-start gap-[30px] lg:gap-10 lg:pr-[80px]">
              <p
                className="w-full font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Gestioná sin fricción
              </p>
              <p className="w-full text-[15px] leading-[1.4] tracking-[-0.075px] text-[#6f6f6f]">
                Mesanube convierte la complejidad de tu operación en algo simple, claro y bajo control.
              </p>
            </div>
            <div className="flex w-full flex-col items-start text-[15px] leading-[1.4] tracking-[-0.075px]">
              {valueProps.map((v, i) => {
                const [head, ...rest] = v.split(':')
                const tail = rest.join(':')
                return (
                  <section
                    key={v}
                    aria-label={`Beneficio ${i + 1} de 4`}
                    className="flex w-full items-start justify-center gap-[30px] border-t border-[#e9e9e9] py-5 lg:pr-[80px]"
                  >
                    <p className="whitespace-nowrap font-bold text-[#6f6f6f]">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <p className="min-w-0 flex-1 text-black">
                      <span className="font-bold">{head}:</span>
                      {tail}
                    </p>
                  </section>
                )
              })}
            </div>
            <SoftButton href="/funciones">Ver todas las funciones</SoftButton>
          </Reveal>

          <Reveal
            delay={1}
            className="zoom-wrap relative w-full flex-[1_0_0] overflow-hidden rounded-[20px] lg:rounded-[30px]"
          >
            <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:h-[711px]">
              <Image
                src="/figma/columns.png"
                alt="Estructura clara y ordenada"
                fill
                sizes="(max-width: 1024px) 100vw, 740px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/[0.06]" />
            </div>
          </Reveal>
        </section>

        {/* Specifications table */}
        <section
          id="comparativa"
          aria-label="Comparativa"
          className="flex w-full max-w-[1500px] flex-col items-start gap-5 overflow-clip pb-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-center border-t border-[#929292] px-4 py-[60px] sm:px-12 sm:py-[80px] lg:px-[240px]">
            <div className="flex w-full flex-col items-center gap-[30px] lg:gap-10">
              <h2 className="w-full text-center font-mono text-[12px] leading-[1.4] tracking-[-0.12px] text-[#485c11]">
                Comparativa
              </h2>
              <p
                className="w-full text-center font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                ¿Por qué Mesanube?
              </p>
              <p className="w-full text-center text-[15px] leading-[1.4] tracking-[-0.075px] text-[#6f6f6f]">
                Diseñado desde el primer día para la gastronomía argentina. Sin compromisos, sin letra chica.
              </p>
              <SoftButton href="/registro">Probá gratis</SoftButton>
            </div>
          </Reveal>

          <Reveal
            delay={1}
            as="section"
            aria-label="Comparación de Mesanube con otros sistemas"
            className="flex w-full items-start overflow-x-auto rounded-[20px]"
          >
            {tableColumns.map((col, ci) => (
              <div
                key={col.name}
                className={`flex min-w-[200px] flex-1 flex-col items-start ${
                  col.highlight
                    ? 'rounded-[20px] border border-[#e9e9e9] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
                    : ''
                } ${ci === 2 ? '[&_.cell]:border-l-[0.5px]' : ''}`}
              >
                <div className="flex h-[96px] w-full items-center justify-center border-b border-[#929292] px-[30px] py-10">
                  <p
                    className={`whitespace-nowrap leading-[1.2] ${
                      col.highlight
                        ? 'text-[22px] text-black sm:text-[25.7px]'
                        : 'text-[20px] text-[#6f6f6f] sm:text-[22.8px]'
                    }`}
                    style={{
                      letterSpacing: col.highlight ? '-2.05px' : '-1.83px',
                      fontWeight: 500,
                    }}
                  >
                    {col.name}
                  </p>
                </div>
                {col.rows.map((row, ri) => (
                  <div
                    key={ri}
                    className={`cell flex w-full items-center gap-2 border-b-[0.5px] border-[#e9e9e9] px-[30px] py-[32px] ${
                      ri === col.rows.length - 1 ? 'border-b-0' : ''
                    }`}
                  >
                    <div className="relative size-[14px] shrink-0">
                      <Image
                        src={row.ok ? '/figma/icon-check.svg' : '/figma/icon-close.svg'}
                        alt={row.ok ? 'Incluido' : 'No incluido'}
                        fill
                      />
                    </div>
                    <p className="whitespace-nowrap font-mono text-[12px] leading-[1.4] tracking-[-0.12px] text-black">
                      {row.text}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </Reveal>
        </section>

        {/* Testimonial */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-6 pb-[80px] lg:flex-row lg:items-stretch lg:gap-5 lg:pb-[120px]">
          <Reveal className="zoom-wrap relative w-full overflow-hidden rounded-[20px] lg:w-1/2 lg:flex-[1_0_0] lg:rounded-[30px]">
            <div className="relative aspect-[550/624] w-full">
              <Image
                src="/figma/sphere.png"
                alt="Restaurante con Mesanube"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal
            delay={1}
            as="section"
            aria-label="Testimonio de un cliente de Mesanube"
            className="flex w-full flex-[1_0_0] flex-col items-start justify-center gap-8 border-t border-[#e9e9e9] pt-8 sm:gap-[50px] lg:w-1/2 lg:pl-[50px] lg:pt-0"
          >
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(24px, 3vw, 40px)',
                lineHeight: 1,
                letterSpacing: 'clamp(-0.8px, -0.2vw, -1.6px)',
              }}
            >
              "Desde que implementamos Mesanube, los errores en cocina desaparecieron. El equipo lo aprendió en un día y la facturación ARCA nos ahorró horas de trabajo por semana."
            </p>
            <div className="flex w-full flex-col items-start gap-2 leading-[1.4]">
              <p className="text-[15px] tracking-[-0.075px] text-black">María González</p>
              <p className="font-mono text-[12px] tracking-[-0.12px] text-[#485c11]">
                Dueña — La Parrilla de María, Buenos Aires
              </p>
            </div>
          </Reveal>
        </section>

        {/* How it works */}
        <section
          id="como-funciona"
          className="flex w-full max-w-[1500px] flex-col items-start gap-[50px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:gap-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Empezá en minutos
            </p>
            <SoftButton href="/registro">Empezá gratis</SoftButton>
          </Reveal>

          <div className="grid w-full grid-cols-1 items-start justify-center gap-5 sm:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal
                key={s.n}
                delay={(i + 1) as 1 | 2 | 3}
                as="section"
                aria-label={`Paso ${i + 1} de 3`}
                className="flex min-w-[240px] flex-1 flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[40px] pr-[30px] pb-5 sm:gap-[60px] sm:pt-[60px]"
              >
                <p
                  className="w-full leading-none text-[#929292]"
                  style={{
                    fontSize: 'clamp(56px, 6vw, 80px)',
                    letterSpacing: 'clamp(-2px, -0.3vw, -3.2px)',
                  }}
                >
                  {s.n}
                </p>
                <div className="flex w-full flex-col items-start gap-5">
                  <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                    {s.title}
                  </p>
                  <p className="w-full text-[15px] leading-[1.4] tracking-[-0.075px] text-[#6f6f6f]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Full bleed image */}
        <Reveal className="zoom-wrap flex w-full flex-col items-center pb-10">
          <div className="relative aspect-[1120/620] w-full max-w-[1500px] overflow-hidden rounded-[20px] lg:rounded-[30px]">
            <Image
              src="/figma/landscape.png"
              alt="Gastronomía argentina"
              fill
              sizes="(max-width: 1500px) 100vw, 1500px"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* CTA */}
        <section
          id="contacto"
          className="flex w-full max-w-[1500px] flex-col items-center gap-10 border-t border-[#e9e9e9] px-6 py-[80px] sm:px-24 sm:py-[120px] lg:px-[300px]"
        >
          <Reveal
            as="p"
            className="w-full text-center font-display text-black"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
            }}
          >
            Probá 30 días gratis
          </Reveal>
          <Reveal
            delay={1}
            as="p"
            className="w-full text-center text-[15px] leading-[1.4] tracking-[-0.075px] text-[#6f6f6f]"
          >
            Sin tarjeta, sin compromisos. Empezá hoy y sentí la diferencia desde el primer turno.
          </Reveal>
          <Reveal delay={2} className="w-full">
            <PrimaryButton href="/registro" className="w-full">
              Empezá gratis
            </PrimaryButton>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex w-full max-w-[1500px] flex-col items-start justify-end gap-[50px] border-t border-[#e9e9e9] pt-10 pb-5 sm:gap-[80px]">
        <nav className="flex h-10 w-full items-center justify-between">
          <div className="flex items-center gap-5 text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-black sm:gap-[27px]">
            <a href="#funciones" className="transition-colors hover:text-[#485c11]">
              Funciones
            </a>
            <a href="#comparativa" className="transition-colors hover:text-[#485c11]">
              Comparativa
            </a>
            <a href="#como-funciona" className="transition-colors hover:text-[#485c11]">
              Cómo funciona
            </a>
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
          <div className="flex flex-1 items-center gap-4 font-mono text-[12px] leading-[1.4] tracking-[-0.12px] text-[#485c11]">
            <p>© Mesanube.</p>
            <p>2026</p>
          </div>
          <p className="font-mono text-[12px] leading-[1.4] tracking-[-0.12px] text-[#485c11]">
            Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  )
}
