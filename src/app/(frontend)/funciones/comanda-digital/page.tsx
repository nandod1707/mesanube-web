import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoButton, TrialButton } from '@/components/shared/CtaButtons'
import { FaqSection } from '@/components/shared/FaqSection'
import { SiteFooter } from '@/components/shared/SiteFooter'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Comanda Digital para Restaurantes y Cafeterías. Pedidos desde Celular | Mesanube',
  description:
    'Comanda digital integrada al POS. Pedidos desde cualquier celular o tablet, llegan a cocina en tiempo real. Para restaurantes y cafeterías argentinas. Probá 30 días gratis.',
}

/* ─────────────────────────────────────────────
   Static data
───────────────────────────────────────────── */
const navItems = [
  { href: '#flujo', label: 'Cómo funciona' },
  { href: '#detalles', label: 'Funciones' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#contacto', label: 'Empezá' },
]

type StepItem = { number: string; title: string; description: string }

const steps: StepItem[] = [
  {
    number: '01',
    title: 'El mozo abre la mesa',
    description:
      'En la app selecciona la mesa o el pedido de mostrador. Ve los productos organizados por categoría: entradas, principales, bebidas, postres.',
  },
  {
    number: '02',
    title: 'Selecciona los productos',
    description:
      'Toca los ítems, suma la cantidad, agrega modificaciones o notas como "sin sal", "al punto", "sin hielo". El sistema guarda exactamente lo que indicó.',
  },
  {
    number: '03',
    title: 'Envía el pedido',
    description:
      'Un toque. El pedido llega al monitor de cocina en tiempo real. El cocinero lo ve en texto, en orden de llegada, sin ambigüedad.',
  },
  {
    number: '04',
    title: 'La cocina trabaja y marca "listo"',
    description:
      'Cuando el pedido está, el cocinero lo marca desde el monitor de cocina. El mozo puede verlo en su app y sabe cuándo acercarse a buscar los platos.',
  },
  {
    number: '05',
    title: 'La mesa pide la cuenta',
    description:
      'La comanda acumula todos los pedidos de esa mesa. Cuando el cliente pide la cuenta, el mozo genera la precuenta desde la app con un toque. El total ya está calculado.',
  },
]

type FeatureCard = { title: string; description: string }

const featureCards: FeatureCard[] = [
  {
    title: 'Sin hardware adicional',
    description:
      'Funciona en cualquier celular o tablet Android o iOS que ya tengas. Si tu equipo tiene teléfonos, ya tenés el hardware.',
  },
  {
    title: 'Sin límite de usuarios',
    description:
      'Todos los mozos trabajan en simultáneo desde sus propios celulares. No hay terminal compartida, no hay cola de acceso.',
  },
  {
    title: 'Modificaciones y notas especiales',
    description:
      'El sistema permite agregar texto libre a cada ítem: "Sin cebolla", "extra queso", "alergia a los mariscos". La cocina lo ve exactamente.',
  },
  {
    title: 'Pedidos por mostrador',
    description:
      'Para cafeterías o puestos sin salón, el mismo sistema funciona desde el mostrador. El encargado toma el pedido, lo envía, la cocina lo recibe.',
  },
  {
    title: 'Actualización del menú en tiempo real',
    description:
      'Si se termina algo o cambia el precio, lo modificás en el sistema y el cambio llega al instante a todos los dispositivos del local. El mozo no ofrece algo que no hay.',
  },
]

type FaqItem = { q: string; a: string }

const faqItems: FaqItem[] = [
  {
    q: '¿Qué es una comanda digital y por qué es mejor que el papel?',
    a: 'Una comanda digital es el sistema donde los pedidos se registran en un dispositivo y viajan al instante a cocina o barra. La diferencia con el papel: no hay errores de lectura, no hay pedidos que se pierden, el cocinero recibe el pedido en segundos y el sistema lo registra automáticamente en la caja.',
  },
  {
    q: '¿Necesito internet para que funcione?',
    a: 'Sí. Mesanube funciona online. Para un restaurante o cafetería, el WiFi del local es suficiente. Si querés un respaldo, los datos del celular del mozo funcionan como alternativa.',
  },
  {
    q: '¿Cuántos mozos pueden tomar pedidos a la vez?',
    a: 'Sin límite. Cada mozo trabaja desde su propio celular de forma independiente. Los pedidos llegan a cocina consolidados, en orden de llegada.',
  },
  {
    q: '¿El mozo tiene que bajarse una app?',
    a: 'Accede desde el navegador del celular. El dueño crea su usuario desde el panel de administración y el mozo entra con usuario y contraseña. No depende de las tiendas de aplicaciones.',
  },
  {
    q: '¿Qué pasa si el mozo anota mal un pedido?',
    a: 'Puede editarlo desde la app mientras el pedido no fue aceptado en cocina. Si ya lo vio el cocinero, puede cancelarlo y volver a mandarlo. El historial queda registrado.',
  },
  {
    q: '¿Se puede usar la comanda desde el mostrador sin mozos?',
    a: 'Sí. Funciona para cafeterías y locales de mostrador: el mismo encargado toma el pedido y lo envía a cocina desde la tablet del mostrador.',
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
export default function ComandaDigitalPage() {
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
            Funciones, Comanda digital
          </p>
          <h1
            className="word-rise mb-6 font-display text-black"
            style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-2px, -0.4vw, -5px)',
            }}
          >
            {'Del celular del mozo a la cocina en segundos'.split(' ').map((word, i) => (
              <span key={i} style={{ animationDelay: `${i * 60}ms`, marginRight: '0.22em' }}>
                {word}
              </span>
            ))}
          </h1>
          <p className="mb-8 max-w-[520px] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Sin papel. Sin pedidos que se pierden. Sin &ldquo;¿qué dijo que quería?&rdquo;. El pedido aparece
            en cocina en tiempo real, en el momento en que lo tomás.
          </p>
          <div className="flex flex-wrap gap-3">
            <TrialButton>Probá 30 días gratis</TrialButton>
            <SoftButton href="#flujo">Ver cómo funciona</SoftButton>
          </div>
        </Reveal>

        <Reveal delay={1} className="mt-12 w-full">
          <div
            className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]"
            style={{ aspectRatio: '16/7' }}
          >
            <Image
              src="/figma/hero-mountains.png"
              alt="Comanda digital de Mesanube en funcionamiento"
              fill
              sizes="(max-width: 1500px) 100vw, 1500px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </header>

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">

        {/* ── El problema ── */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                El problema
              </p>
              <h2
                className="font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                El problema que parece inevitable y no lo es
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                En la mayoría de los locales sin sistema digital, los pedidos viajan en un papelito
                que se escribe mal, se lee peor y a veces directamente no llega a la cocina. En
                pico, eso significa errores, retrasos y clientes que se van enojados.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                No es un problema de la gente. Es un problema del sistema.
              </p>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                La comanda digital elimina el papel del flujo. El mozo toca la pantalla, el pedido
                viaja solo. No hay intermediario, no hay paso manual.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Cómo funciona ── */}
        <section
          id="flujo"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="mb-12">
            <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Cómo funciona
            </p>
            <h2
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              El flujo completo
            </h2>
          </Reveal>
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <Reveal
                key={step.number}
                delay={(Math.min(i, 3) + 1) as 1 | 2 | 3 | 4}
                className="grid grid-cols-1 gap-4 border-t border-[#e9e9e9] pt-[40px] pb-[40px] sm:grid-cols-[120px_1fr] lg:grid-cols-[180px_1fr]"
              >
                <p
                  className="font-display leading-none text-[#929292]"
                  style={{ fontSize: 'clamp(56px, 6vw, 80px)' }}
                >
                  {step.number}
                </p>
                <div className="flex flex-col gap-3">
                  <p className="font-display text-[18px] leading-[1.4] tracking-[-0.09px] text-black">
                    {step.title}
                  </p>
                  <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Detalles que importan ── */}
        <section
          id="detalles"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="mb-12">
            <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Funciones
            </p>
            <h2
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Detalles que importan
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card, i) => (
              <Reveal
                key={card.title}
                delay={(Math.min(i % 3, 3) + 1) as 1 | 2 | 3 | 4}
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

        {/* ── Planes ── */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                En qué planes está incluida
              </p>
              <h2
                className="font-display text-black"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  lineHeight: 0.9,
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                Incluida en todos los planes
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="rounded-[20px] border border-[#e9e9e9] p-8">
                  <p className="mb-1 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                    Plan Básico
                  </p>
                  <p
                    className="mb-2 font-display leading-none tracking-[-0.02em] text-black"
                    style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
                  >
                    $19.000
                    <span className="font-sans text-[16px] font-normal text-[#6f6f6f]">/mes</span>
                  </p>
                  <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    Pedidos digitales con impresión en cocina. Ideal para mostrador o tablet fija.
                  </p>
                </div>
                <div className="rounded-[20px] border border-[#e9e9e9] p-8">
                  <p className="mb-1 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
                    Plan Avanzado
                  </p>
                  <p
                    className="mb-2 font-display leading-none tracking-[-0.02em] text-black"
                    style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
                  >
                    $34.000
                    <span className="font-sans text-[16px] font-normal text-[#6f6f6f]">/mes</span>
                  </p>
                  <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    Comanda para mozos desde celular + monitor de cocina + todo lo demás.
                  </p>
                </div>
              </div>
              <Link
                href="/precios"
                className="text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-[#485c11] underline underline-offset-2 transition-colors hover:text-black"
              >
                Ver planes y precios →
              </Link>
            </div>
          </div>
        </Reveal>

        {/* ── Testimonio ── */}
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
                    lineHeight: 1,
                    letterSpacing: 'clamp(-0.8px, -0.2vw, -1.6px)',
                  }}
                >
                  &ldquo;Antes perdíamos un pedido por noche como mínimo. Con la comanda digital no
                  se perdió ninguno desde que la usamos. Y los mozos aprendieron solos en el primer
                  turno.&rdquo;
                </p>
                <footer className="mt-4 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#929292]">
                  Gonzalo R., Restaurante El Almacén, Villa Crespo
                </footer>
              </blockquote>
            </div>
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
                Terminá con los pedidos que se pierden. Probalo gratis.
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                30 días sin tarjeta de crédito. El setup lleva menos de una hora.
              </p>
              <div className="flex flex-wrap gap-3">
                <TrialButton>Empezá tu prueba gratuita</TrialButton>
                <DemoButton>Agendá una demo</DemoButton>
              </div>
            </div>
          </div>
        </Reveal>
      </main>

      <SiteFooter />
    </div>
  )
}
