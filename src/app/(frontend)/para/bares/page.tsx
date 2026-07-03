import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Body } from '@/components/shared/Body'
import { CardTitle } from '@/components/shared/CardTitle'
import { DemoButton, TrialButton } from '@/components/shared/CtaButtons'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { FaqSection, type FaqItem } from '@/components/shared/FaqSection'
import FloatingNav from '@/components/shared/FloatingNav'
import { HeroHeading } from '@/components/shared/HeroHeading'
import { PricingCards } from '@/components/shared/PricingCards'
import Reveal from '@/components/shared/Reveal'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { PLAN_ADVANCED } from '@/config/plans'

export const metadata: Metadata = {
  title: 'Sistema POS para Bares en Argentina. Comanda Ágil para Múltiples Mozos | Mesanube',
  description:
    `Sistema de gestión para bares argentinos. Comanda digital para múltiples mozos, división de cuentas y facturación ARCA. Probá ${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis.`,
}

/* ── Static data ── */

const navItems = [
  { href: '#problema', label: 'El problema' },
  { href: '#funciones', label: 'Funciones' },
  { href: '/precios', label: 'Precio' },
  { href: '#contacto', label: 'Empezá' },
]

const solutions: { title: string; body: React.ReactNode }[] = [
  {
    title: 'Comandas simultáneas de múltiples mozos',
    body: 'Cada mozo trabaja desde su celular. Los pedidos llegan a la barra y a la cocina en tiempo real, en orden, sin que nadie espere que el otro libere la terminal. No hay cuello de botella ni "esperá que estoy usando la comanda": cada uno trabaja independiente y el sistema consolida todo.',
  },
  {
    title: 'Las cuentas que se dividen',
    body: 'Una mesa de ocho que quiere pagar por separado. Un grupo que paga parte en efectivo y parte en tarjeta. Son situaciones normales en cualquier bar. En Mesanube dividís la cuenta, asignás ítems a cada comensal y combinás medios de pago, sin retrabajo ni malabarismo.',
  },
  {
    title: 'El cierre de caja que refleja la realidad',
    body: 'Los bares manejan más medios de pago que los restaurantes: efectivo, tarjeta, transferencia, billeteras digitales. El arqueo de Mesanube los registra todos por separado durante todo el turno. Al cierre, el resumen ya está armado.',
  },
]

const pasos = [
  {
    num: '01',
    phase: 'Antes de abrir',
    title: 'El menú listo en dos minutos',
    body: 'Cargás el menú de la noche. Si hay especiales del día, los sumás en dos minutos. Los QR ya están activos en las mesas.',
  },
  {
    num: '02',
    phase: 'Durante el servicio',
    title: 'Cada mozo trabaja desde su celular',
    body: 'Toma el pedido, lo manda a la barra o a la cocina según corresponda, ve el estado de sus mesas y saca la precuenta cuando la piden. El encargado ve el panorama completo del salón en su pantalla.',
  },
  {
    num: '03',
    phase: 'Al pagar',
    title: 'Cuenta lista, factura emitida',
    body: 'La cuenta está lista. Se divide si es necesario. La factura con ARCA sale en el momento, sin pasar por otra app.',
  },
  {
    num: '04',
    phase: 'Al cierre',
    title: 'Los números del día en pantalla',
    body: 'El arqueo está armado con el detalle de todo lo que entró y salió. Sin calculadora, sin reconstruir nada de memoria.',
  },
]

const funciones = [
  {
    title: 'App para mozos (múltiples en simultáneo)',
    body: 'Sin límite de usuarios. Cada mozo desde su celular, independiente. Los pedidos llegan consolidados a la barra y la cocina.',
  },
  {
    title: 'División de cuentas',
    body: 'Por ítem, por monto, por porcentaje. Combinación de medios de pago en una misma mesa.',
  },
  {
    title: 'Facturación ARCA',
    body: 'Factura A, B y C en el momento, desde el mismo sistema donde tomaste el pedido.',
  },
  {
    title: 'Monitor de cocina',
    body: 'Los pedidos de cocina llegan a la pantalla en tiempo real. Los tragos que van a la barra quedan en la app del mozo.',
  },
  {
    title: 'Carta QR',
    body: 'Los clientes ven el menú en su celular. Actualizás los precios y los especiales del día en segundos.',
  },
  {
    title: 'Arqueo multimedios',
    body: 'Efectivo, tarjeta, transferencia, billeteras: cada uno separado durante todo el turno, resumen al cierre.',
  },
  {
    title: 'Reseñas en Google',
    body: 'Después de cerrar la cuenta, la app le sugiere al mozo pedirle al cliente una reseña en Google. Impacto directo en tu visibilidad online.',
  },
]

const precioItems = [
  'App para mozos sin límite de usuarios',
  'División de cuentas y multimedios de pago',
  'Monitor de cocina (KDS)',
  'Facturación ARCA (facturas A, B y C)',
  'Carta QR actualizable',
  'Arqueo de caja por turno',
  'Reportes completos',
]

const faq: FaqItem[] = [
  {
    q: '¿Cuántos mozos pueden usar la app al mismo tiempo?',
    a: 'Sin límite. Todos pueden trabajar en simultáneo desde sus propios celulares sin interferir entre sí. No hay terminal compartida ni cola de acceso.',
  },
  {
    q: '¿Puedo ver en tiempo real qué mesa está siendo atendida y cuál no?',
    a: 'Sí. El encargado tiene una vista completa del salón: estado de cada mesa, pedidos activos, tiempo de espera desde el último pedido.',
  },
  {
    q: '¿Funciona con impresora de tickets en la barra?',
    a: 'Sí. Mesanube es compatible con impresoras térmicas estándar (58mm y 80mm) vía Bluetooth o WiFi para imprimir comandas, precuentas y facturas en la barra.',
  },
  {
    q: '¿Cómo funciona la facturación ARCA en un bar con muchos clientes?',
    a: 'El comprobante se emite en el mismo flujo de cierre de cuenta, sin pasos adicionales ni salir a otra app. En ambientes de alta rotación como bares, esto es clave: facturar no frena la operación.',
  },
]

/* ── Page ── */

export default function BaresPage() {
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
          <Eyebrow>Para bares</Eyebrow>
          <HeroHeading text="Para el bar que no para. Comanda ágil, caja que cierra." className="w-full" />
          <Body className="max-w-[52ch]">
            Los viernes a la noche no perdonan errores. Mesanube mantiene el ritmo de tu bar sin que
            nada se pierda en el camino.
          </Body>
          <div className="flex flex-wrap items-center gap-4">
            <TrialButton>Probá gratis {process.env.NEXT_PUBLIC_TRIAL_PERIOD}</TrialButton>
            <Body as="p" className="!text-[13px]">
              Sin tarjeta de crédito. Sin permanencia.
            </Body>
          </div>
        </div>

        <Reveal className="zoom-wrap relative h-[220px] w-full overflow-hidden rounded-[20px] sm:h-[320px] lg:h-[420px] lg:rounded-[30px]">
          <Image
            src="/figma/hero-mountains.png"
            alt="Bar argentino organizado con Mesanube"
            fill
            sizes="(max-width: 1024px) 100vw, 1500px"
            className="object-cover"
            priority
          />
        </Reveal>
      </header>

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        {/* El problema */}
        <section
          id="problema"
          className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <Eyebrow as="h2">El bar tiene sus propias reglas</Eyebrow>
            <SectionTitle className="w-full">
              Rápido, múltiples mozos, cuentas que se dividen.
            </SectionTitle>
          </Reveal>
          <Reveal delay={1} className="flex w-full flex-col items-start gap-5 lg:pr-[400px]">
            <Body>
              El bar es uno de los ambientes más exigentes para un sistema de gestión. No es un
              restaurante con servicio tranquilo: es una máquina de pedidos continuos, varios mozos
              trabajando en simultáneo, y cuentas que se pagan de a partes al final de la noche.
            </Body>
            <Body>
              Encima está la presión de ARCA: facturar en el momento, sin que el proceso frene la
              operación ni genere una cola en la barra. Los sistemas genéricos no están pensados para
              ese ritmo. Mesanube sí.
            </Body>
          </Reveal>
        </section>

        {/* Qué resuelve */}
        <section
          id="funciones"
          className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[var(--divider)] pt-[60px] pb-[40px] sm:pt-[80px]">
            <Eyebrow as="h2">Velocidad sin caos</Eyebrow>
            <SectionTitle className="w-full lg:pr-[400px]">
              Qué resuelve Mesanube en tu bar.
            </SectionTitle>
          </Reveal>
          <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal
                key={s.title}
                delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
                as="article"
                className="flex flex-col items-start gap-5 border-t border-[var(--divider)] py-[40px] pr-5"
              >
                <CardTitle>{s.title}</CardTitle>
                <Body>{s.body}</Body>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-[50px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:gap-[80px] sm:pt-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <Eyebrow as="h2">Paso a paso</Eyebrow>
            <SectionTitle className="w-full">
              Del primer cliente hasta el último pedido.
            </SectionTitle>
          </Reveal>
          <div className="grid w-full grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((s, i) => (
              <Reveal
                key={s.num}
                delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
                as="article"
                aria-label={`Paso ${i + 1} de 4`}
                className="flex flex-col items-start gap-[40px] border-t border-[var(--divider)] pt-[40px] pr-[30px] pb-5 sm:gap-[60px] sm:pt-[60px]"
              >
                <p
                  className="w-full leading-none text-[var(--caption)]"
                  style={{ fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: 'clamp(-1px, -0.2vw, -2px)' }}
                  aria-hidden="true"
                >
                  {s.num}
                </p>
                <div className="flex w-full flex-col items-start gap-3">
                  <Eyebrow>{s.phase}</Eyebrow>
                  <CardTitle>{s.title}</CardTitle>
                  <Body>{s.body}</Body>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Funciones */}
        <section className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[var(--divider)] pt-[60px] pb-[40px] sm:pt-[80px] sm:pb-[60px] lg:pr-[400px]">
            <Eyebrow as="h2">Funciones</Eyebrow>
            <SectionTitle className="w-full">Funciones clave para bares.</SectionTitle>
          </Reveal>
          <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2 lg:grid-cols-4">
            {funciones.map((f, i) => (
              <Reveal
                key={f.title}
                delay={Math.min((i % 4) + 1, 4) as 1 | 2 | 3 | 4}
                as="article"
                className="flex flex-col items-start gap-4 border-t border-[var(--divider)] py-[40px] pr-5"
              >
                <CardTitle>{f.title}</CardTitle>
                <Body>{f.body}</Body>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Testimonio */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-6 pb-[80px] lg:flex-row lg:items-stretch lg:gap-5 lg:pb-[120px]">
          <Reveal className="zoom-wrap relative w-full overflow-hidden rounded-[20px] lg:w-1/2 lg:flex-[1_0_0] lg:rounded-[30px]">
            <div className="relative aspect-[550/624] w-full">
              <Image
                src="/figma/sphere.png"
                alt="Bar con Mesanube"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal
            delay={1}
            as="section"
            aria-label="Testimonio de una clienta de Mesanube"
            className="flex w-full flex-[1_0_0] flex-col items-start justify-center gap-8 border-t border-[var(--divider)] pt-8 sm:gap-[50px] lg:w-1/2 lg:pl-[50px] lg:pt-0"
          >
            <p
              className="w-full font-display text-[var(--heading)]"
              style={{
                fontSize: 'clamp(24px, 3vw, 40px)',
                lineHeight: 1,
                letterSpacing: 'clamp(-0.8px, -0.2vw, -1.6px)',
              }}
            >
              &ldquo;Tenemos seis mozos los fines de semana. Antes teníamos una sola tablet y era un
              caos: uno esperaba que el otro terminara. Ahora cada uno trabaja desde su celular y los
              pedidos llegan todos a la barra en orden. Mejoró todo: el servicio, el tiempo de espera,
              y la gente nota que funciona bien.&rdquo;
            </p>
            <div className="flex w-full flex-col items-start gap-2 leading-[1.4]">
              <p className="text-[18px] tracking-[-0.09px] text-black">Juliana M.</p>
              <Eyebrow>Bar El Patio, Chacarita</Eyebrow>
            </div>
          </Reveal>
        </section>

        {/* Soporte real */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <Eyebrow as="h2">Soporte real</Eyebrow>
            <SectionTitle className="w-full">
              No hay peor momento para que algo falle que el viernes con el bar lleno.
            </SectionTitle>
          </Reveal>
          <Reveal delay={1} className="flex w-full flex-col items-start lg:pr-[400px]">
            <Body>
              Con Mesanube sabés que si algo sale mal y escribís por WhatsApp, te responde el equipo
              que conoce el sistema de adentro. Sin call center, sin bot, sin &ldquo;esperá al
              próximo turno disponible&rdquo;. Gente del rubro que entiende lo que significa tener el
              bar lleno y el sistema parado.
            </Body>
          </Reveal>
        </section>

        {/* Precio */}
        <PricingCards
          variant="advanced"
          eyebrow="Precio"
          heading={`Plan ${PLAN_ADVANCED.name}: para bares que no paran`}
          description="Para bares con múltiples mozos: app para todo el equipo de salón, división de cuentas, comanda ágil, facturación ARCA y reportes. Todo incluido."
          advancedDescription={`${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis. Sin tarjeta de crédito, sin compromiso.`}
          features={precioItems}
          allPlansLinkText="Ver todos los planes →"
        />

        {/* FAQ */}
        <FaqSection heading="Lo que más nos preguntan" items={faq} />

        {/* CTA final */}
        <section
          id="contacto"
          className="flex w-full max-w-[1500px] flex-col items-center gap-10 border-t border-[var(--divider)] px-6 py-[80px] sm:px-24 sm:py-[120px] lg:px-[300px]"
        >
          <Reveal as="div" className="w-full">
            <SectionTitle className="w-full text-center">
              Tu bar se merece un sistema a su altura. Probalo gratis.
            </SectionTitle>
          </Reveal>
          <Reveal delay={1} className="w-full">
            <Body className="w-full text-center">
              Sin tarjeta de crédito. Sin permanencia. Si querés ver cómo funciona en un bar antes de
              empezar, agendá una demo y te lo mostramos en vivo.
            </Body>
          </Reveal>
          <Reveal delay={2} className="flex w-full flex-col items-center gap-4">
            <TrialButton className="w-full">Empezá tu prueba gratuita</TrialButton>
            <DemoButton>Agendá una demo de 20 minutos</DemoButton>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
