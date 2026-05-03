import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoButton, TrialButton } from '@/components/shared/CtaButtons'
import { FaqSection } from '@/components/shared/FaqSection'
import { SiteFooter } from '@/components/shared/SiteFooter'

export const metadata: Metadata = {
  title: 'Soporte, Mesanube',
  description:
    'Soporte por WhatsApp para usuarios de Mesanube. Sin tickets, sin bot. Te responde el equipo que desarrolló el sistema.',
}

/* ── Static data ── */

const navItems = [
  { href: '#como-ayudamos', label: 'Cómo ayudamos' },
  { href: '#que-resolvemos', label: 'Qué resolvemos' },
  { href: '#horario', label: 'Horario' },
  { href: '#faq', label: 'FAQ' },
]

const canales = [
  {
    title: 'WhatsApp, la forma más rápida',
    body: '+54 9 11 2401-8983. Mandanos un mensaje con tu nombre, el nombre de tu local y lo que está pasando. Respondemos en horario de trabajo. Para urgencias operativas, priorizamos.',
    cta: 'Escribir por WhatsApp →',
    href: 'https://wa.me/5491124018983',
  },
  {
    title: 'Email',
    body: 'Para consultas que no son urgentes o que requieren adjuntar archivos, también podés escribirnos por email. Respondemos en el mismo día hábil.',
    cta: 'soporte@mesanube.ar →',
    href: 'mailto:soporte@mesanube.ar',
  },
]

const tiposDeProblemas = [
  {
    title: 'Configuración inicial',
    body: 'Carga del menú, vinculación con ARCA, setup de impresoras, creación de usuarios. Si estás empezando, te acompañamos en cada paso.',
  },
  {
    title: 'Dudas operativas',
    body: '¿Cómo hago para agregar un producto? ¿Cómo cierro un turno? ¿Cómo veo el reporte de la semana? Cualquier pregunta sobre cómo funciona el sistema.',
  },
  {
    title: 'Problemas técnicos',
    body: 'Algo no carga, un pedido no llegó a cocina, la impresora no imprime. Describí lo que pasa y lo resolvemos.',
  },
  {
    title: 'Configuración de ARCA',
    body: 'La vinculación con ARCA puede generar dudas. Te guiamos paso a paso hasta que el primer comprobante salga bien.',
  },
  {
    title: 'Cambios en el sistema',
    body: 'Si querés agregar una sucursal, cambiar de plan o ajustar algo en la configuración, escribinos y coordinamos.',
  },
]

const faq = [
  {
    q: '¿El soporte tiene costo adicional?',
    a: 'No. El soporte por WhatsApp está incluido en todos los planes de Mesanube.',
  },
  {
    q: '¿Hay soporte por teléfono?',
    a: 'El canal principal es WhatsApp. Es donde respondemos más rápido y donde podemos enviarte capturas, videos o instrucciones paso a paso si es necesario.',
  },
  {
    q: '¿El soporte es con personas reales o con un bot?',
    a: 'Con personas reales del equipo de Mesanube. El mismo equipo que desarrolla el sistema.',
  },
  {
    q: '¿Cuánto tardan en responder?',
    a: 'En horario de trabajo, generalmente menos de una hora. Fuera de horario, respondemos al día siguiente. Las urgencias operativas se atienden con prioridad.',
  },
  {
    q: '¿Puedo pedir una demo desde acá?',
    a: 'Sí. Si todavía no sos cliente y querés ver cómo funciona el sistema, escribinos por WhatsApp y coordinamos una demo de 20 minutos.',
  },
]

/* ── Button primitives ── */

function PrimaryButton({
  children,
  href,
  className = '',
}: {
  children: React.ReactNode
  href: string
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

/* ── Page ── */

export default function SoportePage() {
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
            Soporte
          </p>
          <h1
            className="word-rise w-full font-display text-black"
            style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-2px, -0.4vw, -5px)',
            }}
          >
            <span>El equipo de Mesanube, directo por WhatsApp.</span>
          </h1>
          <p className="max-w-[52ch] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Cuando algo no funciona o tenés una duda, no querés esperar en una cola de tickets ni
            hablar con un bot. Te entendemos. Por eso el soporte de Mesanube es directo al equipo.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton href="https://wa.me/5491100000000">
              Escribir por WhatsApp
            </PrimaryButton>
          </div>
        </div>

        <Reveal className="zoom-wrap relative h-[220px] w-full overflow-hidden rounded-[20px] sm:h-[320px] lg:h-[420px] lg:rounded-[30px]">
          <Image
            src="/figma/hero-mountains.png"
            alt="Soporte de Mesanube"
            fill
            sizes="(max-width: 1024px) 100vw, 1500px"
            className="object-cover"
            priority
          />
        </Reveal>
      </header>

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        {/* Cómo contactarnos */}
        <section
          id="como-ayudamos"
          className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:pt-[80px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Cómo contactarnos
            </h2>
            <p
              className="w-full font-display text-black lg:pr-[400px]"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Dos formas de llegar al equipo.
            </p>
          </Reveal>
          <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2">
            {canales.map((canal, i) => (
              <Reveal
                key={canal.title}
                delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
                as="article"
                className="flex flex-col items-start gap-6 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <div className="flex w-full flex-col items-start gap-5">
                  <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                    {canal.title}
                  </p>
                  <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    {canal.body}
                  </p>
                </div>
                <Link
                  href={canal.href}
                  target={canal.href.startsWith('https') ? '_blank' : undefined}
                  rel={canal.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                  className="text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-[#485c11] underline underline-offset-2 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#485c11] focus-visible:outline-offset-2"
                >
                  {canal.cta}
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Qué tipos de problemas resolvemos */}
        <section
          id="que-resolvemos"
          className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:pt-[80px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Qué tipos de problemas resolvemos
            </h2>
            <p
              className="w-full font-display text-black lg:pr-[400px]"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Desde la configuración hasta la operación diaria.
            </p>
          </Reveal>
          <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {tiposDeProblemas.map((tipo, i) => (
              <Reveal
                key={tipo.title}
                delay={Math.min((i % 3) + 1, 4) as 1 | 2 | 3 | 4}
                as="article"
                className="flex flex-col items-start gap-4 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                  {tipo.title}
                </p>
                <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  {tipo.body}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Horario */}
        <section
          id="horario"
          className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:flex-row lg:items-start lg:gap-[20px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-[1_0_0] flex-col items-start gap-[30px] lg:gap-10 lg:pr-[80px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Horario
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Lunes a sábado, en horario de trabajo.
            </p>
            <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Respondemos en horario de trabajo de lunes a sábado.
            </p>
            <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Para urgencias durante el servicio, sistema caído o error crítico que impide operar, priorizamos independientemente del horario.
            </p>
            <Link
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-[#485c11] px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-white transition-[background-color,transform] duration-300 hover:bg-[#3a4c0d] active:scale-[0.98]"
            >
              <span>Escribir por WhatsApp</span>
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
          </Reveal>

          <Reveal
            delay={1}
            className="zoom-wrap relative w-full flex-[1_0_0] overflow-hidden rounded-[20px] lg:rounded-[30px]"
          >
            <div className="relative aspect-[550/624] w-full">
              <Image
                src="/figma/sphere.png"
                alt="Soporte directo del equipo de Mesanube"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <FaqSection heading="Lo que más nos preguntan sobre el soporte." items={faq} />

        {/* CTA: Hablá con nosotros / todavía no sos cliente */}
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
            ¿Todavía no usás Mesanube?
          </Reveal>
          <Reveal
            delay={1}
            as="p"
            className="w-full text-center text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
          >
            Probá gratis 30 días. Sin tarjeta de crédito. Sin permanencia. O agendá una demo y te
            mostramos cómo funciona.
          </Reveal>
          <Reveal delay={2} className="flex w-full flex-col items-center gap-4">
            <TrialButton className="w-full">Probá gratis 30 días</TrialButton>
            <DemoButton>Agendá una demo →</DemoButton>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
