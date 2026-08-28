import type { Metadata } from 'next'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import { DemoLink, TrialButton } from '@/components/shared/CtaButtons'
import { FaqSection } from '@/components/shared/FaqSection'
import { JsonLd } from '@/components/shared/JsonLd'
import { buildBreadcrumbSchema, buildFaqSchema } from '@/utilities/schema'
import FloatingNav from '@/components/shared/FloatingNav'
import { PricingCards } from '@/components/shared/PricingCards'
import Reveal from '@/components/shared/Reveal'
import { ShowcaseHero } from '@/components/shared/ShowcaseHero'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { FeatureCta, FeatureSplit, FeatureTopNav, StepsRow } from '@/components/feature'
import { PLAN_SMALL } from '@/config/plans'

const title = 'Facturación Electrónica ARCA para Restaurantes. Facturas A, B y C desde el POS | Mesanube'
const description = 'Emití facturas electrónicas A, B y C directamente desde tu POS. Compatible con ARCA (ex-AFIP). Sin apps adicionales. Para restaurantes y cafeterías en Argentina.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/funciones/facturacion-electronica-arca',
  },
  openGraph: mergeOpenGraph({
    title,
    description,
    url: '/funciones/facturacion-electronica-arca',
  }),
}

/* ── Static data ── */

const steps = [
  { number: '01', title: 'Configurás tu CUIT y datos fiscales en el sistema', description: 'Los datos van una sola vez, en la pantalla de configuración. Nombre del negocio, CUIT, condición ante ARCA.' },
  { number: '02', title: 'Vinculás Mesanube con tu cuenta de ARCA', description: 'El proceso usa el sistema de delegación oficial de ARCA, el mismo que usaría tu contador. No le das la contraseña de ARCA a nadie: le das permiso a Mesanube para facturar a tu nombre.' },
  { number: '03', title: 'Probás con una factura de prueba', description: 'Antes de abrir, emitís un comprobante de prueba para verificar que todo funciona. Si algo no está bien, soporte te ayuda a resolverlo en el momento.' },
  { number: '04', title: 'Empezás a facturar desde el primer pedido', description: 'A partir de ahí, cada venta tiene su comprobante disponible. Cerrás la venta, elegís el tipo de comprobante, y el ticket sale impreso por la comandera de siempre.' },
]

const comprobantes = [
  { tipo: 'B', label: 'Factura B', description: 'Para consumidores finales. La más común en el día a día de un restaurante o cafetería.' },
  { tipo: 'A', label: 'Factura A', description: 'Para clientes con CUIT que necesitan discriminar el IVA. Para empresas que consumen en tu local.' },
  { tipo: 'C', label: 'Factura C', description: 'Para emisores monotributistas. Si tu local está bajo el régimen simplificado, emitís factura C.' },
]

const faqItems = [
  { q: '¿Qué es ARCA y cómo afecta a los restaurantes en Argentina?', a: 'ARCA (antes AFIP) es el organismo tributario argentino que exige la emisión de comprobantes electrónicos en cada venta. Para restaurantes, cafeterías y bares, esto significa que cada consumición debe generar una factura A, B o C según la condición del cliente. En Mesanube, este proceso está integrado en el POS, no requiere una app aparte.' },
  { q: '¿Qué diferencia hay entre AFIP y ARCA?', a: 'ARCA es el nuevo nombre de AFIP desde 2024. La normativa de facturación electrónica y los sistemas de emisión de comprobantes son los mismos, solo cambió el nombre del organismo. En Mesanube la documentación y el sistema usan el nombre actual (ARCA), pero si buscaste "facturación AFIP para restaurantes", llegaste al lugar correcto.' },
  { q: '¿Qué pasa si soy monotributista?', a: 'Podés emitir facturas C desde Mesanube. El sistema detecta tu condición tributaria cuando configurás los datos fiscales y te muestra los tipos de comprobante disponibles.' },
  { q: '¿Necesito que mi contador configure algo?', a: 'La vinculación con ARCA la podés hacer vos solo siguiendo el paso a paso. Si preferís que lo haga tu contador, también puede. En cualquier caso, el soporte de Mesanube está disponible para acompañarte en ese proceso.' },
  { q: '¿Las facturas se guardan en el sistema?', a: 'Sí. Todos los comprobantes emitidos quedan en el historial de Mesanube. Podés consultar cualquier factura por fecha, por número de comprobante, o por CUIT del cliente.' },
  { q: '¿Tiene algún costo adicional la facturación electrónica ARCA?', a: `No. Está incluida en todos los planes de Mesanube, desde el Plan ${PLAN_SMALL.name} (${PLAN_SMALL.price}/mes). Sin módulo de facturación separado, sin costo por comprobante.` }
]

/* ── Page ── */

export default function FacturacionElectronicaArcaPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <FeatureTopNav />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Funciones', path: '/funciones' },
          { name: 'Facturación electrónica ARCA', path: '/funciones/facturacion-electronica-arca' },
        ])}
      />

      <ShowcaseHero
        eyebrow="Funciones / Facturación electrónica ARCA"
        heading="Facturación electrónica ARCA incluida, sin vueltas y sin apps adicionales"
        subtitle="Cumplís con ARCA (ex-AFIP) desde el mismo sistema donde tomás el pedido y cerrás la mesa. Sin instalar nada más, sin procesos manuales, sin esperar que alguien se acuerde."
        background={{ src: '/photos/pos-facturacion-pantalla.jpg', alt: 'Facturación electrónica ARCA integrada en Mesanube' }}
        note="Sin tarjeta de crédito. Sin permanencia mínima."
        align='right'
        cta={
          <>
            <TrialButton>{`Probá ${TRIAL_PERIOD} gratis`}</TrialButton>
            <DemoLink tone="dark">Agendá una demo →</DemoLink>
          </>
        }
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <FeatureSplit
          id="como-funciona"
          eyebrow="Qué es la facturación electrónica"
          heading="La obligación fiscal que muchos locales siguen gestionando mal"
          paragraphs={[
            'En Argentina, ARCA (antes AFIP) exige que los comercios gastronómicos emitan un comprobante fiscal por cada venta. En la mayoría de los casos, esto se hace mediante factura electrónica.',
            'El problema no es la obligación en sí. Es la forma en que la mayoría de los locales la cumple: una app separada del POS, un proceso manual que depende de que alguien se acuerde, o una integración frágil que se rompe con cada actualización. El resultado es un sistema doble donde la factura cuesta diez minutos y tres pantallas distintas.',
            'Mesanube integra la facturación electrónica con ARCA en el mismo flujo del POS. No hay sistema doble. Cuando cerrás una venta, sacás el comprobante en dos clicks.'
          ]}
        />

        {/* Nativo vs compatible (bespoke) */}
        <section className="w-full max-w-[1500px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
          <Reveal className="mb-10 lg:mb-12 lg:pr-[400px]">
            <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
              Nativo, no conectado
            </p>
            <h2
              className="font-display text-[var(--heading)]"
              style={{ fontSize: 'clamp(36px, 5.5vw, 60px)', lineHeight: 0.9, letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)' }}
            >
              La diferencia entre &ldquo;compatible&rdquo; y &ldquo;nativo&rdquo;
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            <Reveal className="border-t border-[var(--divider)] pt-8">
              <h3 className="mb-3 text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-[var(--caption)]">
                Compatible con ARCA
              </h3>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                Muchas veces significa que hay una integración entre dos sistemas que puede romperse
                con una actualización. La factura implica salir a otra app, un proceso manual, o
                esperar que la sincronización funcione.
              </p>
            </Reveal>
            <Reveal delay={1} className="border-t-2 border-[var(--olive)] pt-8">
              <h3 className="mb-3 text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-[var(--heading)]">
                Facturación electrónica ARCA nativa en Mesanube
              </h3>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                La facturación es parte del POS, no hay dos sistemas, hay uno
                solo. Cuando cerrás una mesa o una venta en mostrador, la emisión del comprobante
                electrónico es parte del mismo flujo. En dos toques, y sin salir a otra pantalla.
              </p>
            </Reveal>
          </div>
        </section>

        <StepsRow
          eyebrow="Configuración"
          heading="Conectar Mesanube con ARCA lleva menos de 15 minutos"
          subtitle="Paso a paso, sin depender de tu contador para empezar."
          steps={steps}
          layout="list"
        />

        {/* Tipos de comprobante (bespoke: circular badge) */}
        <section
          id="tipos"
          className="w-full max-w-[1500px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="mb-10 lg:pr-[400px]">
            <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
              Comprobantes
            </p>
            <h2
              className="mb-5 font-display text-[var(--heading)]"
              style={{ fontSize: 'clamp(36px, 5.5vw, 60px)', lineHeight: 0.9, letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)' }}
            >
              Cada transacción tiene su documento
            </h2>
            <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
              Mesanube está preparado para emitir estos tipos de comprobante.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {comprobantes.map((c, i) => (
              <Reveal
                key={c.tipo}
                delay={(i % 3) as 0 | 1 | 2}
                className="flex flex-col items-start gap-4 border-t border-[var(--divider)] py-10 pr-5"
              >
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface-dark)] text-sm font-bold leading-none text-[var(--warm-white)]"
                  aria-hidden="true"
                >
                  {c.tipo}
                </span>
                <div>
                  <h3 className="mb-2 text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-[var(--heading)]">
                    {c.label}
                  </h3>
                  <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Testimonio + aside (bespoke) */}
        <Reveal
          as="section"
          className="w-full max-w-[1500px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <blockquote className="flex flex-col justify-center gap-6">
              <p
                className="font-display text-[var(--heading)]"
                style={{ fontSize: 'clamp(24px, 3vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.5px' }}
              >
                &ldquo;El tema de ARCA siempre me generó contratiempos. Antes tenía que acordarme de cargar las ventas al facturador web al final del día, y alguna vez se me pasó. Con Mesanube cada factura sale en el momento, sin que yo tenga que hacer nada especial. Eso solo ya valió el cambio.&rdquo;
              </p>
              <footer className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--caption)]">
                Doris - Minuto Café, Caballito
              </footer>
            </blockquote>
            <aside className="flex flex-col gap-4 border-l-2 border-[var(--divider)] pl-8">
              <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
                Impresión incluida
              </p>
              <h3 className="text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-[var(--heading)]">
                Compatible con la impresora que probablemente ya tenés
              </h3>
              <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                Mesanube es compatible con impresoras térmicas de ticket estándar (58mm y 80mm). No
                necesitás impresora de oficina, no necesitás tóner.
              </p>
            </aside>
          </div>
        </Reveal>

        <PricingCards
          eyebrow="Precios"
          heading="La facturación electrónica ARCA está incluida en todos los planes"
          description="Sin módulo de facturación separado. Sin costo por comprobante. Sin sorpresas."
        />

        <JsonLd data={buildFaqSchema(faqItems)} />
        <FaqSection heading="Todo lo que necesitás saber sobre ARCA y Mesanube" items={faqItems} />
        <FeatureCta
          heading={`Probá Mesanube con facturación electrónica incluida: ${TRIAL_PERIOD} gratis`}
          body="Sin tarjeta de crédito. Sin permanencia mínima. Si tenés dudas sobre la configuración con tu situación fiscal específica, escribinos y te orientamos antes de empezar."
        />
      </main>

      <SiteFooter />
    </div>
  )
}
