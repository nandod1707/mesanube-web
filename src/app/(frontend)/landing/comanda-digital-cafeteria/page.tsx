import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoButton, TrialButton } from '@/components/shared/CtaButtons'

/* ─────────────────────────────────────────────
   SEO Metadata
───────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Comanda Digital para Cafeterías en Argentina — Sistema de Pedidos sin Papel | Mesanube',
  description:
    'Comanda digital para cafeterías argentinas. Tomá pedidos desde tablet o celular, enviá directo a cocina y cerrá cuentas en segundos. Probá 30 días gratis.',
}

/* ─────────────────────────────────────────────
   Static data
───────────────────────────────────────────── */
const navItems = [
  { href: '/#beneficios', label: 'Beneficios' },
  { href: '/#como-funciona', label: 'Cómo funciona' },
  { href: '/#precio', label: 'Precio' },
  { href: '#contacto', label: 'Empezá' },
]

type BenefitCard = { number: string; title: string; description: string }

const benefitCards: BenefitCard[] = [
  {
    number: '01',
    title: 'Los pedidos ya no se pierden',
    description:
      'Cada pedido queda registrado en el sistema desde el momento en que lo tomás. Aunque la cafetería se llene y estés atendiendo tres mesas a la vez, todos los pedidos están en pantalla. Ninguno depende de que alguien recuerde bien lo que le dijeron.',
  },
  {
    number: '02',
    title: 'La cocina recibe los pedidos al instante',
    description:
      'No hay papelito que viaje del mostrador a la cocina. No hay "pasame la comanda". El pedido aparece en el monitor de cocina en tiempo real, en el momento en que lo tomás.',
  },
  {
    number: '03',
    title: 'Los errores de pedido bajan drásticamente',
    description:
      'Confusiones entre mesas, cantidades mal anotadas, modificaciones que se olvidan: todos esos errores vienen de la comanda en papel. En digital, el pedido es exactamente lo que seleccionaste, en texto, legible, sin ambigüedad.',
  },
  {
    number: '04',
    title: 'La caja cierra con los números que corresponden',
    description:
      'Cada pedido que tomás queda registrado en el sistema. Al cierre del día, el arqueo refleja todo lo que vendiste, sin tener que reconstruir nada de memoria.',
  },
  {
    number: '05',
    title: 'Actualizás el menú en segundos',
    description:
      'Cambió el precio del café con leche. Agregaste un tostado nuevo. Se terminó la torta. En la comanda digital lo actualizás en segundos y el cambio llega a todos los dispositivos del local al instante.',
  },
]

type Step = { number: string; title: string; description: string }

const steps: Step[] = [
  {
    number: '01',
    title: 'Cargás tu menú',
    description:
      'Subís los productos de tu cafetería: categorías, nombres, precios. Para una carta estándar, llevate una hora el primer día.',
  },
  {
    number: '02',
    title: 'Tu equipo toma pedidos desde el celular o tablet',
    description:
      'Desde el mostrador o desde las mesas, cada pedido se toca en la pantalla y se envía. No hay papel, no hay gritos, no hay transcripción.',
  },
  {
    number: '03',
    title: 'La cocina recibe y vos tenés el control',
    description:
      'Los pedidos aparecen en el monitor de cocina en tiempo real. Ves el resumen del día desde tu pantalla. Al cierre, el arqueo ya está armado.',
  },
]

type FaqItem = { q: string; a: string }

const faqItems: FaqItem[] = [
  {
    q: '¿Qué es una comanda digital y en qué se diferencia del papel?',
    a: 'Una comanda digital es un sistema donde los pedidos se registran y envían desde un celular o tablet, en lugar de anotarse en papel. La diferencia clave: el pedido llega a cocina en tiempo real, queda guardado en el sistema, y se registra en la caja. Sin errores de transcripción, sin pedidos que se pierden.',
  },
  {
    q: '¿Necesito internet para que funcione la comanda?',
    a: 'Sí, Mesanube funciona online. Para una cafetería, el WiFi del local o los datos del celular son suficientes. Si querés un respaldo, podés configurar el hotspot de tu celular para los casos de corte de internet.',
  },
  {
    q: '¿Qué dispositivo necesito para una comanda digital?',
    a: 'Cualquier tablet o celular Android o iOS. Si ya tenés una tablet en el mostrador, ya tenés todo.',
  },
  {
    q: '¿Cuánto tarda el setup inicial de la comanda digital?',
    a: 'La carga del menú para una cafetería estándar lleva entre 30 minutos y una hora. Después de eso, podés estar tomando pedidos. El soporte acompaña la configuración inicial si necesitás ayuda.',
  },
  {
    q: '¿La comanda digital incluye facturación ARCA?',
    a: 'Sí. El Plan Básico de Mesanube incluye comanda digital y facturación ARCA en el mismo sistema, desde $19.000/mes. No son módulos separados.',
  },
  {
    q: '¿Puedo cancelar si no me convence?',
    a: 'Sí. Sin permanencia mínima, sin cargos de cancelación. Los 30 días de prueba son gratis sin tarjeta de crédito.',
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
export default function ComandaDigitalCafeteriaPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav items={navItems} />

      {/* ── Top nav (minimal — conversion landing) ── */}
      <nav className="flex w-full max-w-[1500px] items-center justify-between py-5">
        <Link
          href="/"
          className="text-[22px] leading-[1.2] tracking-[-1px] text-black sm:text-[28px]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
        >
          mesanube
        </Link>
        <PrimaryButton href="#contacto">Empezá gratis</PrimaryButton>
      </nav>

      {/* ── Hero ── */}
      <header className="w-full max-w-[1500px] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
        <Reveal>
          <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] mb-5 uppercase">
            Landing — Comanda Digital para Cafeterías
          </p>
          <h1
            className="word-rise font-display text-black mb-6"
            style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-2px, -0.4vw, -5px)',
            }}
          >
            {'Comanda digital para tu cafetería'.split(' ').map((word, i) => (
              <span
                key={i}
                style={{ animationDelay: `${i * 60}ms`, marginRight: '0.22em' }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f] max-w-[520px] mb-8">
            Los pedidos en papel se pierden, se leen mal y no llegan a tiempo. Con la comanda
            digital de Mesanube, cada pedido va directo a cocina en tres segundos, desde cualquier
            tablet o celular, sin hardware nuevo.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton href="#contacto">Empezá gratis — sin tarjeta</PrimaryButton>
            <SoftButton href="#como-funciona">Cómo funciona</SoftButton>
          </div>
          <p className="mt-4 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#929292]">
            30 días de prueba. Sin permanencia. Cancelás cuando querés.
          </p>
        </Reveal>

        {/* Hero image block */}
        <Reveal delay={1} className="mt-12 w-full">
          <div className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]" style={{ aspectRatio: '16/7' }}>
            <Image
              src="/figma/landscape.png"
              alt="Comanda digital Mesanube en una cafetería"
              fill
              sizes="(max-width: 1500px) 100vw, 1500px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </header>

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">

        {/* ── 5 cosas que cambian ── */}
        <section
          id="beneficios"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="mb-12">
            <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] mb-5 uppercase">
              5 cosas que cambian
            </p>
            <h2
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Resultados concretos desde el primer día
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {benefitCards.map((card, i) => (
              <Reveal
                key={card.number}
                delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
                className="flex flex-col items-start gap-4 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <p
                  className="font-display text-[#929292]"
                  style={{ fontSize: 'clamp(56px, 6vw, 80px)', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {card.number}
                </p>
                <div>
                  <h3 className="text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black mb-2">
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

        {/* ── Cómo funciona — tres pasos ── */}
        <section
          id="como-funciona"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="mb-12">
            <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] mb-5 uppercase">
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
              Tres pasos, sin configuración complicada
            </h2>
          </Reveal>
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <Reveal
                key={step.number}
                delay={(i % 3) as 0 | 1 | 2 | 3 | 4}
                className="grid grid-cols-1 gap-4 border-t border-[#e9e9e9] pt-[40px] pb-10 sm:grid-cols-[auto_1fr] sm:gap-10"
              >
                <p
                  className="font-display text-[#929292]"
                  style={{ fontSize: 'clamp(56px, 6vw, 80px)', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {step.number}
                </p>
                <div className="flex flex-col gap-2 sm:pt-2">
                  <h3 className="font-display text-black" style={{ fontSize: '18px', lineHeight: 1.2 }}>
                    {step.title}
                  </h3>
                  <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Testimonio (quote block below steps) */}
          <Reveal className="mt-10 border-t border-[#e9e9e9] pt-[40px]">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]" style={{ aspectRatio: '550/624' }}>
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
                    &ldquo;Tardé una tarde en cargar todo el menú y al día siguiente ya estábamos
                    usando la comanda. Lo que más me sorprendió fue que la chica del mostrador la
                    aprendió a usar sola. No tuve que explicarle nada, es muy intuitiva.&rdquo;
                  </p>
                  <footer className="mt-4 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#929292]">
                    — Fernanda A., Cafetería Detrás del Espejo, Colegiales
                  </footer>
                </blockquote>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Precio ── */}
        <Reveal
          as="section"
          id="precio"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="mx-auto max-w-[600px] rounded-[20px] border border-[#e9e9e9] p-8 text-center">
            <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] mb-4 uppercase">
              Precio
            </p>
            <p
              className="font-display text-black mb-2"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              $19.000
              <span className="text-[#6f6f6f]" style={{ fontSize: '0.5em', letterSpacing: '-0.5px' }}>
                /mes
              </span>
            </p>
            <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f] mb-2">
              Plan Básico para cafeterías
            </p>
            <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#929292] mb-6 text-sm">
              Para ponerlo en perspectiva: son aproximadamente 6 cafés con leche por día. O lo que
              perdés en una semana con errores de pedido que terminan en reposición o descuentos.
            </p>
            <ul className="flex flex-col gap-2 mb-8 text-left">
              {[
                'Comanda digital desde cualquier celular o tablet',
                'Carta QR actualizable en tiempo real',
                'Facturación electrónica ARCA incluida',
                'Arqueo de caja por turno',
                'Soporte directo por WhatsApp',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
                >
                  <span className="text-[#485c11]" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <PrimaryButton href="#contacto" className="w-full justify-center">
              Empezá tu prueba gratuita
            </PrimaryButton>
            <p className="mt-3 font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#929292]">
              30 días gratis. Sin tarjeta de crédito.
            </p>
            <div className="mt-4">
              <Link
                href="/precios"
                className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] underline underline-offset-2 hover:text-[#3a4c0d] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#485c11] focus-visible:outline-offset-2"
              >
                Ver todos los planes →
              </Link>
            </div>
          </div>
        </Reveal>

        {/* ── FAQ ── */}
        <section className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
          <Reveal className="mb-10">
            <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] mb-5 uppercase">
              Preguntas frecuentes
            </p>
            <h2
              className="font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Lo que nos preguntan antes de empezar
            </h2>
          </Reveal>
          <div className="flex flex-col">
            {faqItems.map((item) => (
              <Reveal key={item.q} className="border-t border-[#e9e9e9] py-5">
                <p className="text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black">
                  {item.q}
                </p>
                <p className="mt-2 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  {item.a}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── CTA final ── */}
        <Reveal
          as="section"
          id="contacto"
          className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11] mb-5 uppercase">
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
                Empezá a usar la comanda digital en tu cafetería
              </h2>
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                Sin tarjeta de crédito. Sin compromiso. Si preferís ver cómo funciona antes de
                empezar, agendá una demo corta y te la mostramos en tu pantalla.
              </p>
              <div className="flex flex-wrap gap-3">
                <TrialButton>Empezá tu prueba gratuita</TrialButton>
                <DemoButton>¿Tenés dudas? Escribinos</DemoButton>
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
            <Link href="#beneficios" className="hover:text-[#485c11] transition-colors duration-150">
              Beneficios
            </Link>
            <Link href="#como-funciona" className="hover:text-[#485c11] transition-colors duration-150">
              Cómo funciona
            </Link>
            <Link href="#contacto" className="hover:text-[#485c11] transition-colors duration-150">
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
