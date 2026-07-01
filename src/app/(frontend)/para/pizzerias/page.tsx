import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { DemoButton, TrialButton } from '@/components/shared/CtaButtons'
import { PricingCards } from '@/components/shared/PricingCards'
import { PLAN_BASIC, PLAN_ADVANCED } from '@/config/plans'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { HeroHeading } from '@/components/shared/HeroHeading'

export const metadata: Metadata = {
  title: 'Sistema POS para Pizzerías en Argentina. Delivery, Mostrador y Salón | Mesanube',
  description:
    `Sistema de gestión para pizzerías argentinas. Comanda digital para delivery, mostrador y salón en un solo sistema. Facturación ARCA y arqueo de caja incluidos. Probá ${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis.`,
}

/* ── Static data ── */

const navItems = [
  { href: '#problema', label: 'El problema' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#precios', label: 'Precio' },
  { href: '#contacto', label: 'Empezá' },
]

const resuelve = [
  {
    title: 'Salón',
    body: 'Los mozos toman pedidos desde el celular. Los pedidos van directo al monitor de cocina: tabla, cantidad, aclaraciones. Sin papelitos que se pierden en el calor de la cocina. El mozo sabe cuándo el pedido está listo porque el cocinero lo marca desde la pantalla.',
  },
  {
    title: 'Mostrador',
    body: 'El encargado toma el pedido del cliente que está enfrente, lo carga en segundos y lo manda a cocina. La caja registra la venta en el momento. Si el cliente pide factura, sale al instante.',
  },
  {
    title: 'Delivery propio',
    body: 'Los pedidos que llegan por teléfono los cargás en el sistema como cualquier otro pedido. Van al monitor de cocina, la cocina los trabaja en orden, la caja los registra. El control de lo que salió y lo que entró queda en el sistema.',
  },
  {
    title: 'El cierre de caja',
    body: 'En una pizzería con tres frentes de venta, el arqueo puede ser complicado: efectivo del mostrador, tarjeta del salón, transferencia del delivery. El arqueo de Mesanube registra cada medio de pago por separado. Cuando llegás al cierre, el resumen ya está armado.',
  },
]

const funciones = [
  {
    title: 'Comanda digital',
    body: 'Salón y mostrador en el mismo sistema, pedidos que van a cocina al instante.',
  },
  {
    title: 'Monitor de cocina',
    body: 'Los pedidos en pantalla, en orden. El cocinero los marca como listos desde la pantalla.',
  },
  {
    title: 'Arqueo de caja',
    body: 'Efectivo, tarjeta, transferencia por turno, con registro de egresos y pagos a proveedores.',
  },
  {
    title: 'Facturación ARCA',
    body: 'Facturas A, B y C en el momento, sin proceso separado y sin módulo adicional.',
  },
  {
    title: 'Carta QR',
    body: 'El menú del salón en el teléfono del cliente. Sin cartas impresas, sin precios desactualizados.',
  },
  {
    title: 'App para mozos',
    body: `Cada mozo desde su celular, sin terminal compartida, sin esperas. Plan ${PLAN_ADVANCED.name}.`,
  },
]

const precioItems = [
  'App para mozos',
  'Monitor de cocina',
  'Arqueo de caja',
  'Facturación ARCA',
  'Reportes del día',
  'Soporte por WhatsApp incluido',
]

const faq = [
  {
    q: '¿Mesanube se integra con PedidosYa o Rappi?',
    a: 'No, hoy Mesanube no tiene integración con plataformas de delivery de terceros. Para delivery propio, el que coordinás directamente con tus clientes por teléfono o redes, funciona perfectamente: cargás el pedido en el sistema, va a cocina, la caja lo registra.',
  },
  {
    q: '¿Puedo manejar mostrador y salón desde el mismo sistema?',
    a: 'Sí. El encargado del mostrador trabaja desde la tablet del mostrador; los mozos del salón trabajan desde sus celulares. Los pedidos de ambos van al mismo monitor de cocina y al mismo sistema de caja.',
  },
  {
    q: '¿Cuántos mozos pueden usar la app al mismo tiempo?',
    a: 'Sin límite. En un pico de viernes, todos los mozos pueden estar tomando pedidos en simultáneo desde sus propios celulares.',
  },
  {
    q: '¿El arqueo distingue efectivo del salón vs. del mostrador?',
    a: 'El arqueo registra todos los medios de pago del turno de forma consolidada. Los pedidos tienen su origen (mesa, mostrador) registrado en el sistema para trazabilidad, pero el arqueo de caja es por turno total.',
  },
  {
    q: '¿Cuánto tiempo lleva poner en marcha el sistema en una pizzería?',
    a: 'Cargar el menú para una pizzería estándar lleva entre una y dos horas. El soporte acompaña la configuración inicial.',
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

export default function PizzeriasPage() {
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
            Para pizzerías
          </p>
          <HeroHeading text="El sistema que aguanta el ritmo de una pizzería." className="w-full" />
          <p className="max-w-[52ch] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Salón, mostrador y delivery en simultáneo. Pico del viernes a las 21. La caja al final
            del turno sin que nadie se quede hasta la medianoche calculando. Mesanube está pensado
            para eso.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <TrialButton>Probá gratis {process.env.NEXT_PUBLIC_TRIAL_PERIOD}</TrialButton>
            <p className="text-[13px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Sin tarjeta de crédito. Sin permanencia.
            </p>
          </div>
        </div>

        <Reveal className="zoom-wrap relative h-[220px] w-full overflow-hidden rounded-[20px] sm:h-[320px] lg:h-[420px] lg:rounded-[30px]">
          <Image
            src="/figma/hero-mountains.png"
            alt="Pizzería organizada con Mesanube"
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
          className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Lo que entendemos de una pizzería
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              No es lo mismo que un restaurante, y el sistema tiene que saberlo.
            </p>
          </Reveal>
          <Reveal
            delay={1}
            className="flex w-full flex-col items-start gap-5 text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f] lg:pr-[400px]"
          >
            <p>
              Una pizzería no es un restaurante donde se sirve pizza. Es una operación distinta. En
              el mismo turno hay mesas del salón, clientes que llevan para pedir en el mostrador y
              pedidos de delivery propio que hay que coordinar con la cocina. Todo al mismo tiempo,
              con el mismo equipo.
            </p>
            <p>
              En el pico del viernes, la cocina no para. El ritmo es otro. Y si el sistema no
              acompaña ese ritmo, se convierte en un problema más.
            </p>
            <p>
              Mesanube no tiene features específicos solo para pizzerías, pero tiene todo lo que una
              pizzería necesita, y está probado con el ritmo de trabajo que conocés.
            </p>
          </Reveal>
        </section>

        {/* Cómo Mesanube resuelve los tres frentes */}
        <section className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:pt-[80px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Cómo Mesanube resuelve los tres frentes
            </h2>
            <p
              className="w-full font-display text-black lg:pr-[400px]"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Salón, mostrador y delivery en el mismo sistema.
            </p>
          </Reveal>
          <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2 lg:grid-cols-4">
            {resuelve.map((item, i) => (
              <Reveal
                key={item.title}
                delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
                as="article"
                className="flex flex-col items-start gap-6 border-t border-[#e9e9e9] py-[40px] pr-5"
              >
                <div className="flex w-full flex-col items-start gap-5">
                  <p className="w-full font-display text-[18px] leading-none tracking-[-0.54px] text-black">
                    {item.title}
                  </p>
                  <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal
            delay={1}
            className="mt-[40px] w-full"
          >
            <p className="text-[14px] leading-[1.4] tracking-[-0.09px] text-[#929292]">
              Mesanube no se integra con PedidosYa ni Rappi. Para delivery propio, el que coordinás vos directamente con tus clientes, funciona perfectamente.
            </p>
          </Reveal>
        </section>

        {/* Pico del viernes */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:flex-row lg:items-start lg:gap-[20px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-[1_0_0] flex-col items-start gap-[30px] lg:gap-10 lg:pr-[80px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              El ritmo de pico
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Para los viernes que no perdonan.
            </p>
            <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              El pico del viernes en una pizzería es otra categoría. Los pedidos se acumulan, la
              cocina trabaja sin parar, los clientes del salón esperan, los del mostrador también.
              En esas condiciones, cualquier fricción en el sistema se multiplica.
            </p>
            <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              La comanda digital de Mesanube está diseñada para volumen: sin límite de pedidos
              simultáneos, sin que el sistema se trabe, sin que los mozos tengan que compartir una
              sola terminal. Cada uno trabaja desde su celular, independiente.
            </p>
            <TrialButton>Probá gratis {process.env.NEXT_PUBLIC_TRIAL_PERIOD}</TrialButton>
          </Reveal>

          <Reveal
            delay={1}
            className="zoom-wrap relative w-full flex-[1_0_0] overflow-hidden rounded-[20px] lg:rounded-[30px]"
          >
            <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:h-[620px]">
              <Image
                src="/figma/columns.png"
                alt="Sistema Mesanube en funcionamiento en una pizzería"
                fill
                sizes="(max-width: 1024px) 100vw, 740px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/[0.06]" />
            </div>
          </Reveal>
        </section>

        {/* Funciones */}
        <section
          id="funciones"
          className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:pt-[80px] sm:pb-[60px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
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
              Funciones que una pizzería usa.
            </p>
          </Reveal>
          <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {funciones.map((f, i) => (
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

        {/* Testimonio */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-6 pb-[80px] lg:flex-row lg:items-stretch lg:gap-5 lg:pb-[120px]">
          <Reveal className="zoom-wrap relative w-full overflow-hidden rounded-[20px] lg:w-1/2 lg:flex-[1_0_0] lg:rounded-[30px]">
            <div className="relative aspect-[550/624] w-full">
              <Image
                src="/figma/sphere.png"
                alt="Pizzería con Mesanube"
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
              &ldquo;La pizzería tiene tres frentes todo el fin de semana: el salón, el mostrador y
              los pedidos por teléfono. Antes era un caos de papelitos y yo terminaba el sábado a la
              noche sin saber exactamente cuánto había entrado. Con Mesanube el cierre de caja me
              lleva diez minutos y siempre cierra.&rdquo;
            </p>
            <div className="flex w-full flex-col items-start gap-2 leading-[1.4]">
              <p className="text-[18px] tracking-[-0.09px] text-black">Sebastián O.</p>
              <p className="font-mono text-[14px] tracking-[-0.14px] text-[#485c11]">
                Pizzería El Horno, Villa del Parque
              </p>
            </div>
          </Reveal>
        </section>

        {/* Precio */}
        <PricingCards
          variant="advanced"
          eyebrow="Precio"
          heading={`Plan ${PLAN_ADVANCED.name}, ${PLAN_ADVANCED.price}/mes.`}
          description={
            <>
              <p>
                Para pizzerías con salón y delivery: app para mozos, monitor de cocina, arqueo de
                caja, facturación ARCA y reportes. Todo incluido.
              </p>
              <p className="mt-3">
                Si tu pizzería es solo mostrador y delivery sin salón, el Plan {PLAN_BASIC.name} ({PLAN_BASIC.price}/mes)
                puede ser suficiente. Escribinos y te orientamos.
              </p>
            </>
          }
          advancedDescription="Para pizzerías con salón y delivery"
          features={precioItems}
          ctaText={`${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis, sin tarjeta de crédito`}
          allPlansLinkText="Ver todos los planes →"
        />

        {/* FAQ */}
        <section className="flex w-full max-w-[1500px] flex-col items-start pb-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] border-t border-[#e9e9e9] pt-[60px] pb-[40px] sm:pt-[80px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              Preguntas frecuentes
            </h2>
            <p
              className="w-full font-display text-black"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Lo que más nos preguntan.
            </p>
          </Reveal>
          <div className="w-full">
            {faq.map((item, i) => (
              <Reveal
                key={i}
                delay={(Math.min(i, 3) + 1) as 1 | 2 | 3 | 4}
                as="article"
                className="flex w-full flex-col gap-2 border-t border-[#e9e9e9] py-5 lg:pr-[400px]"
              >
                <p className="text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black">
                  {item.q}
                </p>
                <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  {item.a}
                </p>
              </Reveal>
            ))}
          </div>
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
            Probá Mesanube en tu pizzería. {process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis.
          </Reveal>
          <Reveal
            delay={1}
            as="p"
            className="w-full text-center text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]"
          >
            Sin tarjeta de crédito. Sin permanencia. Si querés hablar antes de empezar, escribinos
            por WhatsApp.
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
