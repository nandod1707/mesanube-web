import type { Metadata } from 'next'
import React from 'react'

import { CtaLink } from '@/components/shared/CtaLink'
import { FaqSection } from '@/components/shared/FaqSection'
import FloatingNav from '@/components/shared/FloatingNav'
import { PricingCards } from '@/components/shared/PricingCards'
import { SiteFooter } from '@/components/shared/SiteFooter'
import {
  FeatureCta,
  FeatureGrid,
  FeatureHero,
  FeatureMedia,
  FeatureSplit,
  FeatureTestimonial,
  FeatureTopNav,
} from '@/components/feature'
import { PLAN_ADVANCED } from '@/config/plans'

export const metadata: Metadata = {
  title: 'Reportes y Analítica para Restaurantes. Ventas en Tiempo Real | Mesanube',
  description:
    'Reportes integrados al POS. Ventas por período, producto, mozo y medio de pago, en tiempo real y desde el celular. Para restaurantes y bares argentinos.',
}

/* ── Static data ── */

const navItems = [
  { href: '#que-muestran', label: 'Reportes' },
  { href: '#desde-el-celular', label: 'Desde el celular' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#contacto', label: 'Empezá' },
]

const reportCards = [
  { title: 'Ventas por período', body: 'Comparación día a día, semana a semana o mes a mes. Ves si estás creciendo, si hay una caída, y en qué momento del día o de la semana pasan las cosas.' },
  { title: 'Productos más vendidos', body: 'Qué ítems salen más. Cuáles tienen menos movimiento. Información concreta para decidir qué mantener en la carta, qué promocionar y qué sacar.' },
  { title: 'Ventas por medio de pago', body: 'Cuánto entró en efectivo, cuánto en tarjeta, cuánto por transferencia. Útil para el arqueo y para entender los costos de cada medio (las tarjetas tienen comisión).' },
  { title: 'Ventas por mozo', body: 'Qué vendió cada integrante del equipo de salón. Información para motivar, para entender diferencias de rendimiento, para tomar decisiones de horario.' },
]

const faqItems = [
  { q: '¿Los reportes están en todos los planes?', a: `No. Los reportes están disponibles únicamente en el Plan ${PLAN_ADVANCED.name} (${PLAN_ADVANCED.price}/mes). El Plan Chico no los incluye.` },
  { q: '¿Con qué frecuencia se actualizan los reportes?', a: 'En tiempo real. Los datos de ventas se actualizan con cada transacción. No hay que esperar al cierre del día para ver los números.' },
  { q: '¿Los reportes se pueden exportar?', a: 'Sí, los reportes son exportables para guardarlos o compartirlos con el contador.' },
  { q: '¿Qué diferencia hay entre los reportes y el arqueo de caja?', a: 'El arqueo de caja es el control de efectivo por turno: cuánto había, cuánto entró, cuánto salió, si hay diferencia. Los reportes son el análisis de ventas: qué vendiste, cuánto, con qué producto y en qué momento. Son complementarios, no lo mismo.' },
  { q: '¿Puedo ver los reportes sin estar en el local?', a: 'Sí. Desde cualquier celular o computadora con acceso a internet y tu usuario de Mesanube.' },
]

/* ── Page ── */

export default function ReportesYAnaliticaPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav items={navItems} />
      <FeatureTopNav />

      <FeatureHero
        eyebrow="Funciones, Reportes y analítica"
        heading="Reportes. Lo que vendiste, sin planillas de Excel"
        subtitle="¿Cuál es tu plato más rentable? ¿A qué hora vendés más? ¿Qué medio de pago usa tu clientela? Con los reportes de Mesanube lo sabés al instante, sin armar nada a mano."
        image={{ src: '/figma/hero-mountains.png', alt: 'Panel de reportes de Mesanube mostrando ventas y analítica' }}
        ctaLabel={`Incluido en el Plan ${PLAN_ADVANCED.name}. Probá gratis`}
        secondary={{ href: '#que-muestran', label: 'Ver los reportes' }}
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <FeatureSplit
          eyebrow="Por qué los datos importan"
          heading="La diferencia entre adivinar y saber"
          paragraphs={[
            'La mayoría de los dueños de restaurantes toman decisiones de menú, de horario y de personal basándose en sensaciones. "Me parece que el milanesa vende más los viernes". "Creo que el turno del mediodía es más flojo". "Me da la sensación de que la gente paga más con tarjeta".',
            'Con reportes, esas sensaciones se confirman o se corrigen. Y cuando sabés qué funciona realmente, las decisiones cuestan menos.',
          ]}
        />

        <FeatureGrid
          id="que-muestran"
          eyebrow="Qué muestran los reportes"
          heading="Lo que importa, en un vistazo"
          items={reportCards}
          columns={2}
        />

        <FeatureMedia
          id="desde-el-celular"
          eyebrow="Para el dueño que revisa desde el celular"
          heading="Los datos donde estés"
          paragraphs={[
            'No hace falta estar en el local para ver los reportes. Desde tu celular, podés revisar las ventas del día, la semana o el mes en cualquier momento.',
            'Si algo se ve raro, lo sabés antes de que sea tarde.',
          ]}
          bullets={[
            'Ventas en tiempo real desde cualquier dispositivo',
            'Exportación para compartir con el contador',
            'Acceso con tu usuario habitual de Mesanube',
            'Sin instalar nada adicional',
          ]}
          image={{ src: '/figma/columns.png', alt: 'Reportes de Mesanube accesibles desde celular' }}
        />

        <FeatureTestimonial
          quote="Antes cerraba el mes y no sabía bien qué había vendido ni cuánto. Ahora entro al panel y en dos minutos veo todo: qué funcionó, qué no y qué tengo que cambiar."
          author="Luciana V., Café Central, Palermo"
        />

        <PricingCards
          variant="advanced"
          compact
          compactLabel={`Incluido en el Plan ${PLAN_ADVANCED.name}`}
          description="Reportes completos, monitor de cocina, app para mozos, control de stock, recetas y facturación ARCA. Sin módulos adicionales."
          features={[
            'Ventas por período, producto, mozo y medio de pago',
            'Actualización en tiempo real con cada transacción',
            'Exportación para el contador',
            'Acceso desde cualquier celular o computadora',
            'Soporte directo por WhatsApp',
          ]}
        />

        <FaqSection heading="Lo que nos preguntan seguido" items={faqItems} />

        <FeatureCta
          heading={`Empezá a tomar decisiones con datos. ${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis`}
          body={`Los reportes están en el Plan ${PLAN_ADVANCED.name}. Sin tarjeta de crédito. Si querés ver un ejemplo de los reportes en acción antes de empezar, agendá una demo.`}
          links={
            <>
              <CtaLink href="/precios">Ver todos los planes</CtaLink>
              <CtaLink href="/funciones" variant="outline">
                Ver todas las funciones
              </CtaLink>
            </>
          }
        />
      </main>

      <SiteFooter />
    </div>
  )
}
