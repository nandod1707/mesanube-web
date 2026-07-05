import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FaqSection } from '@/components/shared/FaqSection'
import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { CardGrid, CtaLink, UseCaseCta, UseCaseHero, UseCaseTopNav } from '@/components/usecase'

const TRIAL = process.env.NEXT_PUBLIC_TRIAL_PERIOD
const WHATSAPP = 'https://wa.me/5491124018983'

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
    href: WHATSAPP,
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

/* ── Page ── */

export default function SoportePage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav items={navItems} />
      <UseCaseTopNav />

      <UseCaseHero
        eyebrow="Soporte"
        heading="El equipo de Mesanube, directo por WhatsApp."
        subtitle="Cuando algo no funciona o tenés una duda, no querés esperar en una cola de tickets ni hablar con un bot. Te entendemos. Por eso el soporte de Mesanube es directo al equipo."
        image={{ src: '/figma/hero-mountains.png', alt: 'Soporte de Mesanube' }}
        cta={
          <CtaLink href={WHATSAPP} variant="primary" external>
            Escribir por WhatsApp
          </CtaLink>
        }
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        {/* Cómo contactarnos — two channel cards with external links */}
        <section
          id="como-ayudamos"
          className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[var(--divider)] pt-[60px] pb-[40px] sm:pt-[80px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
              Cómo contactarnos
            </h2>
            <p
              className="w-full font-display text-[var(--heading)] lg:pr-[400px]"
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
                className="flex flex-col items-start gap-6 border-t border-[var(--divider)] py-[40px] pr-5"
              >
                <div className="flex w-full flex-col items-start gap-5">
                  <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-[var(--heading)]">
                    {canal.title}
                  </p>
                  <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                    {canal.body}
                  </p>
                </div>
                <Link
                  href={canal.href}
                  target={canal.href.startsWith('https') ? '_blank' : undefined}
                  rel={canal.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                  className="text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-[var(--olive)] underline underline-offset-2 transition-colors hover:text-[var(--heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--olive)] focus-visible:outline-offset-2"
                >
                  {canal.cta}
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Qué tipos de problemas resolvemos */}
        <CardGrid
          id="que-resolvemos"
          eyebrow="Qué tipos de problemas resolvemos"
          heading="Desde la configuración hasta la operación diaria."
          items={tiposDeProblemas}
        />

        {/* Horario — text + tall image with a WhatsApp CTA */}
        <section
          id="horario"
          className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:flex-row lg:items-start lg:gap-[20px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-[1_0_0] flex-col items-start gap-[30px] lg:gap-10 lg:pr-[80px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
              Horario
            </h2>
            <p
              className="w-full font-display text-[var(--heading)]"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Lunes a sábado, en horario de trabajo.
            </p>
            <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
              Respondemos en horario de trabajo de lunes a sábado.
            </p>
            <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
              Para urgencias durante el servicio, sistema caído o error crítico que impide operar,
              priorizamos independientemente del horario.
            </p>
            <CtaLink href={WHATSAPP} variant="primary" external>
              Escribir por WhatsApp
            </CtaLink>
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

        {/* CTA final */}
        <UseCaseCta
          heading="¿Todavía no usás Mesanube?"
          subtitle={`Probá gratis ${TRIAL}. Sin tarjeta de crédito. Sin permanencia. O agendá una demo y te mostramos cómo funciona.`}
          primaryLabel={`Probá gratis ${TRIAL}`}
          demoLabel="Agendá una demo →"
        />
      </main>

      <SiteFooter />
    </div>
  )
}
