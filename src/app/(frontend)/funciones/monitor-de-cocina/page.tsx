import type { Metadata } from 'next'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import { CtaLink } from '@/components/shared/CtaLink'
import { FaqSection } from '@/components/shared/FaqSection'
import FloatingNav from '@/components/shared/FloatingNav'
import { PricingCards } from '@/components/shared/PricingCards'
import { SiteFooter } from '@/components/shared/SiteFooter'
import {
  FeatureCta,
  FeatureHero,
  FeatureMedia,
  FeatureSplit,
  FeatureTopNav,
  StepsRow,
} from '@/components/feature'
import { PLAN_SMALL, PLAN_MEDIUM } from '@/config/plans'

export const metadata: Metadata = {
  title: 'Monitor de Cocina (KDS) para Restaurantes. Pedidos en Pantalla en Tiempo Real | Mesanube',
  description:
    'Monitor de cocina integrado al POS. Los pedidos llegan en tiempo real a la pantalla de cocina, el cocinero los marca como listos y el mozo lo sabe al instante. Para restaurantes argentinos.',
}

/* ── Static data ── */

const steps = [
  { number: '01', title: 'El mozo toma el pedido', description: 'Desde su celular, selecciona los productos y toca "Enviar". El pedido parte.' },
  { number: '02', title: 'Llega al monitor al instante', description: 'En la pantalla de la cocina aparece el pedido: número de mesa, productos, modificaciones, notas. En texto claro y sin ambigüedades.' },
  { number: '03', title: 'El cocinero trabaja en orden', description: 'Los pedidos se muestran por orden de llegada. Si hay varios activos, el cocinero los ve todos en pantalla y trabaja de acuerdo a la prioridad.' },
  { number: '04', title: 'Marca "listo" desde el monitor', description: 'Cuando el pedido está preparado, el cocinero lo marca desde la propia pantalla de cocina. No grita. No busca al mozo. Lo marca y sigue.' },
  { number: '05', title: 'El mozo sabe que el pedido está', description: 'La app del mozo le muestra que su pedido está listo. Va a buscar los platos en el momento correcto, sin dar vueltas en vano.' },
]

const faqItems = [
  { q: '¿Qué es un monitor de cocina (KDS) y para qué sirve?', a: 'Un monitor de cocina, también conocido como KDS (Kitchen Display System), es una pantalla en la cocina que muestra los pedidos en tiempo real. Reemplaza las comandas en papel: el pedido llega en digital, el cocinero lo trabaja y lo marca como listo desde la pantalla. Elimina la comunicación verbal y el riesgo de perder o malinterpretar una comanda.' },
  { q: '¿El monitor de cocina necesita hardware especial?', a: 'No. Funciona en cualquier tablet o celular. Una tablet Android básica montada en la cocina es suficiente.' },
  { q: '¿El cocinero puede marcar el pedido como "listo" desde el monitor?', a: 'Sí. Esa es la función principal del monitor: el cocinero toca el pedido para marcarlo como listo y el mozo recibe la notificación en su app.' },
  { q: '¿Los pedidos aparecen en orden de llegada?', a: 'Sí. Los pedidos se muestran en la pantalla de cocina ordenados por orden de llegada.' },
  { q: '¿Qué pasa si la cocina no tiene buena conexión a internet?', a: 'El monitor necesita conectividad para recibir los pedidos en tiempo real. Recomendamos WiFi estable en el área de cocina. Si el local es grande, un repetidor de señal resuelve el problema.' },
  { q: '¿Está incluido en todos los planes?', a: `El monitor de cocina está incluido en el Plan ${PLAN_MEDIUM.name} (${PLAN_MEDIUM.price}/mes).` },
]

/* ── Page ── */

export default function MonitorDeCocinaPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <FeatureTopNav />

      <FeatureHero
        eyebrow="Funciones, Monitor de cocina"
        heading="Monitor de cocina. Los pedidos en pantalla, en orden, en tiempo real"
        subtitle="El cocinero no espera el papelito. El mozo no tiene que gritar. Los pedidos llegan solos a la pantalla de cocina en el momento en que se toman. Y cuando el plato está listo, el cocinero lo marca desde la pantalla."
        image={{ src: '/figma/hero-mountains.png', alt: 'Monitor de cocina de Mesanube mostrando pedidos en tiempo real' }}
        ctaLabel={`Incluido en el Plan ${PLAN_MEDIUM.name}. Probá gratis`}
        secondary={{ href: '#como-funciona', label: 'Ver cómo funciona' }}
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <FeatureSplit
          id="problema"
          eyebrow="El problema"
          heading="Lo que pasa cuando la comunicación entre salón y cocina falla"
          paragraphs={[
            'Papelitos que se pierden. Pedidos que se gritan de una punta a otra del local. El mozo que pasa la comanda a mano y la cocina que no puede leer la letra. El orden de los pedidos que se confunde cuando llegan todos juntos.',
            'El monitor de cocina elimina esos puntos de falla. No es un lujo para restaurantes grandes: es la solución a un problema que cualquier local con cocina separada conoce bien.',
          ]}
        />

        <StepsRow
          id="como-funciona"
          eyebrow="Cómo funciona"
          heading="Del celular del mozo a la pantalla de cocina"
          steps={steps}
        />

        <FeatureSplit
          eyebrow="Compatibilidad"
          heading="Sin hardware especial"
          paragraphs={[
            'El monitor de cocina funciona en cualquier tablet o celular. Una tablet económica montada en la pared de la cocina es suficiente. No necesitás un monitor industrial ni nada específico: cualquier dispositivo con pantalla y navegador sirve.',
            'Si ya tenés una tablet vieja que no usás, ya tenés el hardware.',
          ]}
          bullets={[
            'Tablet Android (cualquier marca y modelo reciente)',
            'iPad o iPhone',
            'Cualquier celular con navegador actualizado',
            'Sin instalación de app: funciona desde el navegador',
          ]}
        />

        <FeatureMedia
          eyebrow="Integración total"
          heading="Salón y cocina sincronizados"
          paragraphs={[
            'El monitor de cocina no es una pantalla independiente: es parte del sistema. Cuando el mozo modifica un pedido, el monitor se actualiza solo. Cuando la cocina marca un ítem como listo, la app del mozo lo refleja al instante.',
            'No hay nada que configurar manualmente para que los datos estén sincronizados. Es automático desde el primer pedido.',
          ]}
          image={{ src: '/figma/columns.png', alt: 'Integración sala y cocina en Mesanube' }}
        />

        <PricingCards
          eyebrow="Precios"
          heading="Elegí el plan para tu local"
          description={`El monitor de cocina está incluido desde el Plan ${PLAN_MEDIUM.name}. Compará los planes y quedate con el que le corresponde a tu local. Sin módulos adicionales.`}
        />

        <FaqSection heading="Lo que nos preguntan seguido" items={faqItems} />

        <FeatureCta
          heading="Conectá tu sala con tu cocina. Probalo gratis"
          body={`Plan ${PLAN_MEDIUM.name}. ${TRIAL_PERIOD} sin ingresar tu tarjeta.`}
          showDemoButton={false}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
