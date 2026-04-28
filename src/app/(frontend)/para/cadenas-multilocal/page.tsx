import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { TrialButton } from '@/components/shared/CtaButtons'

export const metadata: Metadata = {
  title: 'Sistema POS para Cadenas Multilocal — Control Centralizado de Sucursales | Mesanube',
  description:
    'Gestión centralizada para cafeterías y restaurantes con más de una sucursal. Próximamente en Mesanube. Anotate para acceso anticipado.',
}

/* ── Static data ── */

const navItems = [
  { href: '#para-quien', label: 'Para quién' },
  { href: '#que-viene', label: 'Qué viene' },
  { href: '#mientras-tanto', label: 'Mientras tanto' },
  { href: '#contacto', label: 'Empezá' },
]

const features = [
  {
    title: 'Panel unificado',
    body: 'Las ventas de cada sucursal en tiempo real, desde un solo lugar. Sin entrar y salir de sistemas distintos.',
  },
  {
    title: 'Menú compartido',
    body: 'Menú compartido entre locales o diferente por sucursal, según lo que necesités. Un cambio de precio que se replica en todos los locales.',
  },
  {
    title: 'Reportes consolidados',
    body: 'Reportes consolidados o por local. Sabés cuál sucursal está vendiendo más hoy, qué producto rota mejor en cada una.',
  },
  {
    title: 'Usuarios y roles',
    body: 'Usuarios y roles por sucursal. El encargado de cada local ve lo suyo; vos ves todo.',
  },
  {
    title: 'Arqueo por local',
    body: 'Arqueo de caja por local, con visión global para el dueño. Cerrás el día con los números de ambas sucursales en una sola pantalla.',
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

export default function CadenasMultilocalPage() {
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
            Para cadenas multilocal
          </p>
          <h1
            className="word-rise w-full font-display text-black"
            style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-2px, -0.4vw, -5px)',
            }}
          >
            <span>Mesanube para cadenas multilocal — próximamente.</span>
          </h1>
          <p className="max-w-[52ch] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Abriste tu segunda sucursal. O estás a punto de hacerlo. Y ya sabés que el sistema que
            usabas para una va a quedarse corto.
          </p>
          <p className="max-w-[52ch] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Estamos construyendo el panel de control centralizado para dueños de dos o más locales.
            Anotate para ser de los primeros en acceder.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton href="#contacto">Quiero acceso anticipado</PrimaryButton>
          </div>
        </div>

        <Reveal className="zoom-wrap relative h-[220px] w-full overflow-hidden rounded-[20px] sm:h-[320px] lg:h-[420px] lg:rounded-[30px]">
          <Image
            src="/figma/landscape.png"
            alt="Cadenas multilocal gestionadas con Mesanube"
            fill
            sizes="(max-width: 1024px) 100vw, 1500px"
            className="object-cover"
            priority
          />
        </Reveal>
      </header>

      <main className="flex w-full flex-col items-start">
        {/* Para quién */}
        <section
          id="para-quien"
          className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              A quién va dirigido
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Para el dueño que está creciendo.
            </p>
          </Reveal>
          <Reveal
            delay={1}
            className="flex w-full flex-col items-start gap-5 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f] lg:pr-[400px]"
          >
            <p>
              No estamos hablando de cadenas corporativas con cientos de locales y equipo de IT.
              Estamos hablando del dueño de una cafetería en Palermo que abre su segunda sucursal en
              Belgrano. O del restaurante familiar que suma un segundo punto en el mismo barrio.
            </p>
            <p>
              Ese dueño necesita ver los dos locales desde el mismo lugar. Saber cuál está vendiendo
              más hoy. Poder cambiar el menú de los dos al mismo tiempo. Cerrar el día con los
              números de ambas sucursales en una sola pantalla.
            </p>
            <p className="font-bold text-black">Eso es lo que viene.</p>
          </Reveal>
        </section>

        {/* Qué va a incluir */}
        <section
          id="que-viene"
          className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:pt-[80px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Qué va a incluir
            </h2>
            <p
              className="w-full font-display text-black lg:pr-[400px]"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Control centralizado sin complicaciones.
            </p>
          </Reveal>
          <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={Math.min((i % 3) + 1, 4) as 1 | 2 | 3 | 4}
                as="article"
                className="flex flex-col items-start gap-4 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                  {f.title}
                </p>
                <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  {f.body}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Imagen */}
        <section className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]">
          <Reveal className="zoom-wrap relative h-[260px] w-full overflow-hidden rounded-[20px] sm:h-[380px] lg:h-[500px] lg:rounded-[30px]">
            <Image
              src="/figma/columns.png"
              alt="Panel centralizado de Mesanube para múltiples sucursales"
              fill
              sizes="(max-width: 1024px) 100vw, 1500px"
              className="object-cover"
            />
          </Reveal>
        </section>

        {/* Mientras tanto */}
        <section
          id="mientras-tanto"
          className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Mientras tanto
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              El mejor momento para empezar es antes de la segunda apertura.
            </p>
          </Reveal>
          <Reveal
            delay={1}
            className="flex w-full flex-col items-start gap-5 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f] lg:pr-[400px]"
          >
            <p>
              Si ya tenés un local con Mesanube y estás abriendo el segundo, escribinos. Podemos
              orientarte sobre cómo manejar la transición y tenés prioridad en el acceso anticipado
              al panel multilocal.
            </p>
            <p>
              Si todavía no usás Mesanube en ninguno de tus locales, el mejor momento para empezar
              es antes de la segunda apertura. Así cuando llegue el panel multilocal, ya tenés todo
              configurado.
            </p>
          </Reveal>
          <Reveal delay={2} className="flex flex-wrap gap-4">
            <TrialButton>Probá Mesanube gratis en tu primer local</TrialButton>
            <SoftButton href="#contacto">Anotarme para acceso anticipado →</SoftButton>
          </Reveal>
        </section>

        {/* CTA final */}
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
            Anotate para acceso anticipado al panel multilocal.
          </Reveal>
          <Reveal
            delay={1}
            as="p"
            className="w-full text-center text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
          >
            Te avisamos cuando esté disponible. Sin spam. Si ya usás Mesanube, tenés prioridad
            automática.
          </Reveal>
          <Reveal delay={2} className="flex w-full flex-col items-center gap-4">
            <TrialButton className="w-full">Quiero acceso anticipado</TrialButton>
            <Link
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-[#485c11] underline underline-offset-2 transition-colors hover:text-black"
            >
              O escribinos por WhatsApp →
            </Link>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex w-full max-w-[1500px] flex-col items-start justify-end gap-[50px] border-t border-[#e9e9e9] pt-10 pb-5 sm:gap-[80px]">
        <nav aria-label="Navegación del footer" className="flex h-10 w-full items-center justify-between">
          <div className="flex items-center gap-5 text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-black sm:gap-[27px]">
            <a href="#para-quien" className="transition-colors hover:text-[#485c11]">
              Para quién
            </a>
            <a href="#que-viene" className="transition-colors hover:text-[#485c11]">
              Qué viene
            </a>
            <a href="#mientras-tanto" className="transition-colors hover:text-[#485c11]">
              Mientras tanto
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
