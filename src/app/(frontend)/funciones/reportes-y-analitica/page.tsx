import type { Metadata } from 'next'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import { CtaLink } from '@/components/shared/CtaLink'
import { FaqSection } from '@/components/shared/FaqSection'
import { JsonLd } from '@/components/shared/JsonLd'
import { buildFaqSchema } from '@/utilities/schema'
import FloatingNav from '@/components/shared/FloatingNav'
import { PricingCards } from '@/components/shared/PricingCards'
import { ShowcaseHero } from '@/components/shared/ShowcaseHero'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { FeatureCta, FeatureGrid, FeatureSplit, FeatureTopNav } from '@/components/feature'
import { PLAN_MEDIUM } from '@/config/plans'
import { SplitFeature } from '@/components/usecase'

export const metadata: Metadata = {
  title: 'Reportes y Analítica para Restaurantes. Ventas en Tiempo Real | Mesanube',
  description:
    'Reportes integrados al POS. Ventas por período, producto, mozo y medio de pago, en tiempo real y desde el celular. Para restaurantes y bares argentinos.',
}

/* ── Static data ── */

const reportCards = [
  { title: 'Ventas por período', body: 'Comparación día a día, semana a semana o mes a mes. Ves si estás creciendo, si hay una caída, y en qué momento del día o de la semana pasan las cosas.' },
  { title: 'Productos más vendidos', body: 'Qué ítems salen más. Cuáles tienen menos movimiento. Información concreta para decidir qué mantener en la carta, qué promocionar y qué sacar.' },
  { title: 'Ventas por medio de pago', body: 'Cuánto entró en efectivo, cuánto en tarjeta, cuánto por transferencia. Útil para el arqueo y para entender los costos de cada medio (las tarjetas tienen comisión).' },
  { title: 'Ventas por mozo', body: 'Qué vendió cada integrante del equipo de salón. Información para motivar, para entender diferencias de rendimiento, para tomar decisiones de horario.' },
]

const faqItems = [
  { q: '¿Los reportes están en todos los planes?', a: `No. Los reportes están disponibles únicamente en el Plan ${PLAN_MEDIUM.name} (${PLAN_MEDIUM.price}/mes). El Plan Chico no los incluye.` },
  { q: '¿Con qué frecuencia se actualizan los reportes?', a: 'En tiempo real. Los datos de ventas se actualizan con cada transacción. No hay que esperar al cierre del día para ver los números.' },
  { q: '¿Los reportes se pueden exportar?', a: 'Sí, los reportes son exportables para guardarlos o compartirlos con el contador.' },
  { q: '¿Qué diferencia hay entre los reportes y el arqueo de caja?', a: 'El arqueo de caja es el control de efectivo por turno: cuánto había, cuánto entró, cuánto salió, si hay diferencia. Los reportes son el análisis de ventas: qué vendiste, cuánto, con qué producto y en qué momento. Son complementarios, no lo mismo.' },
  { q: '¿Puedo ver los reportes sin estar en el local?', a: 'Sí. Desde cualquier celular o computadora con acceso a internet y tu usuario de Mesanube.' },
]

/* ── Page ── */

export default function ReportesYAnaliticaPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <FeatureTopNav />

      <ShowcaseHero
        eyebrow="Funciones, Reportes y analítica"
        heading="Reportes. Lo que vendiste, sin planillas de Excel"
        subtitle="¿Cuál es tu plato más rentable? ¿A qué hora vendés más? ¿Qué medio de pago usan tus clientes? Con los reportes de Mesanube lo sabés al instante, sin armar nada a mano."
        background={{ src: '/photos/pos-facturacion-pantalla.jpg', alt: 'Panel de reportes de Mesanube mostrando ventas y analítica' }}
        align='right'
        cta={
          <>
            <TrialButton>Probalo gratis</TrialButton>
            <CtaLink href="#que-muestran" variant="outline">
              Ver los reportes
            </CtaLink>
          </>
        }
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <FeatureSplit
          eyebrow="Por qué los datos importan"
          heading="La diferencia entre adivinar y saber"
          paragraphs={[
            'La mayoría de los dueños de restaurantes toman decisiones de menú, de horario y de personal basándose en sensaciones. "Me parece que la milanesa sale más los viernes". "Creo que el turno del mediodía es el más flojo". "Me da la sensación de que la gente paga más con tarjeta".',
            'Con reportes, esas sensaciones se confirman o se corrigen. Y cuando sabés lo que funciona realmente, las decisiones cuestan menos.',
          ]}
        />

        <FeatureGrid
          id="que-muestran"
          eyebrow="Qué muestran los reportes"
          heading="Lo que importa, en un vistazo"
          items={reportCards}
          columns={2}
        />

        <SplitFeature
          eyebrow="Para el dueño que revisa desde el celular"
          heading="Los datos donde estés"
          paragraphs={[
            'No hace falta estar en el local para ver los reportes. Desde tu celular, podés revisar las ventas del día, la semana o el mes en cualquier momento.',
            'Si algo se ve raro, lo sabés antes de que sea tarde.',
          ]}
          image={{ src: '/photos/cafeteria-pos-reportes.jpg', alt: 'Reportes de Mesanube accesibles desde celular' }}
          cta={`Probalo ${TRIAL_PERIOD} gratis`}
        />

        <PricingCards
          eyebrow="Precios"
          heading="Elegí el plan para tu local"
          description={`Los reportes están disponibles desde el Plan ${PLAN_MEDIUM.name}. Compará los planes y quedate con el que le corresponde a tu local. Sin módulos adicionales.`}
        />

        <JsonLd data={buildFaqSchema(faqItems)} />
        <FaqSection heading="Lo que nos preguntan seguido" items={faqItems} />
        <FeatureCta
          heading={`Empezá a tomar decisiones con datos. ${TRIAL_PERIOD} gratis.`}
          body={`Los reportes están en el Plan ${PLAN_MEDIUM.name}, empezá hoy sin ingresar tu tarjeta.`}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
