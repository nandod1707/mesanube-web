import type { Metadata } from 'next'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import { CtaLink } from '@/components/shared/CtaLink'
import { FaqSection } from '@/components/shared/FaqSection'
import { JsonLd } from '@/components/shared/JsonLd'
import { buildBreadcrumbSchema, buildFaqSchema } from '@/utilities/schema'
import FloatingNav from '@/components/shared/FloatingNav'
import { PricingCards } from '@/components/shared/PricingCards'
import { ShowcaseHero } from '@/components/shared/ShowcaseHero'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { FeatureCta, FeatureGrid, FeatureSplit, FeatureTopNav } from '@/components/feature'
import { PLAN_MEDIUM } from '@/config/plans'

const title = 'App para Mozos. Tomá Pedidos desde el Celular | Mesanube'
const description = 'App para mozos integrada al POS. Cada mozo toma pedidos desde su celular, sin terminales compartidas. Pedidos a cocina en tiempo real, división de cuentas y cierre de mesa.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/funciones/app-para-mozos',
  },
  openGraph: mergeOpenGraph({
    title,
    description,
    url: '/funciones/app-para-mozos',
  }),
}

/* ── Static data ── */

const featureCards = [
  { title: 'Tomar pedidos por mesa', body: 'El mozo abre su mesa, selecciona los productos, agrega modificaciones o notas, y envía. El pedido se imprime en la comandera al instante.' },
  { title: 'Agregar ítems a una comanda', body: 'Si la mesa pide algo más, el mozo lo suma a la comanda existente. Sin abrir una nueva, sin complicaciones.' },
  { title: 'Ver el estado de sus mesas', body: 'En la pantalla principal, el mozo ve qué mesas están abiertas, qué tienen pedido, y qué está tardando.' },
  { title: 'Ver la cuenta', body: 'El mozo la consulta desde la app. El detalle está completo, con ítems, cantidades y precios. Sin ir al mostrador.' },
  { title: 'Gestionar el cobro', body: 'La cuenta se cobra en efectivo, tarjeta, transferencia o en combinación. Si la mesa quiere pagar por separado, dividís la cuenta asignando un monto a cada medio de pago.' },
]

const roleCards = [
  { title: 'Mozo', body: 'Ve sus mesas y sus pedidos. No cierra mesa ni ve los datos de caja.' },
  { title: 'Cajero', body: 'Ve los pedidos de todas las mesas. Puede editar, aplicar descuentos, cerrar mesas e imprimir control de mesa y facturas.' },
  { title: 'Encargado', body: 'Ve todo el salón: todas las mesas, todos los pedidos activos, puede abrir y cerrar la caja y hacer retiros. Puede intervenir en cualquier mesa.' },
  { title: 'Dueño', body: 'Acceso completo: sala, caja, reportes, configuración. Desde cualquier dispositivo, incluso fuera del local.' },
]

const faqItems = [
  { q: '¿Qué es una app para mozos y cómo funciona?', a: 'Una app para mozos es una aplicación móvil que permite al personal de salón tomar pedidos desde su celular. En Mesanube se sincroniza en tiempo real con el monitor de cocina y con el sistema de caja, sin terminales adicionales.' },
  { q: '¿Cuántos mozos pueden usar la app en simultáneo?', a: 'Sin límite. Todos pueden trabajar al mismo tiempo desde sus propios celulares sin interferencia. Sin licencias adicionales por usuario.' },
  { q: '¿Los mozos tienen que crearse una cuenta?', a: 'El encargado o dueño crea los usuarios desde el panel de administración. El mozo recibe sus datos de acceso y entra con usuario y contraseña. No se descarga ninguna app: accede desde el navegador del celular.' },
  { q: '¿Qué pasa si un mozo se va del local?', a: 'El dueño puede desactivar ese usuario y crear el nuevo en cualquier momento desde la configuración. Sin necesidad de llamar a soporte.' },
  { q: '¿La app necesita internet para funcionar?', a: 'Sí, necesita conectividad para sincronizar los pedidos. Para un servicio continuo recomendamos WiFi estable en el salón.' },
  { q: '¿Cuánto tiempo lleva capacitar a un mozo nuevo?', a: 'En promedio, 20 minutos. La interfaz está pensada para que la aprenda el mozo solo durante el primer turno, sin capacitación formal.' },
]

/* ── Page ── */

export default function AppParaMozosPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <FeatureTopNav />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Funciones', path: '/funciones' },
          { name: 'App para mozos', path: '/funciones/app-para-mozos' },
        ])}
      />

      <ShowcaseHero
        eyebrow="Funciones, App para mozos"
        heading="La app para mozos que simplifica el servicio"
        subtitle="Tus mozos trabajan con el celular que ya tienen en el bolsillo. Toman pedidos, ven las cuentas y cierran las mesas, sin terminales ni hardware nuevo."
        background={{ src: '/photos/bar-barra-tragos.jpg', alt: 'App para mozos de Mesanube en acción' }}
        align='right'
        cta={
          <>
            <TrialButton>{`Incluida en el Plan ${PLAN_MEDIUM.name}. Probalo gratis`}</TrialButton>
            <CtaLink href="#funciones" variant="outline">
              Ver funciones
            </CtaLink>
          </>
        }
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <FeatureSplit
          eyebrow="El problema"
          heading="El cuello de botella más común en la sala"
          paragraphs={[
            'Hay un patrón que se repite en locales que ya tienen sistema: los pedidos igual pasan por una sola terminal, la de la caja o el mostrador. Cuando se llena el salón, los mozos se hacen fila para cargar ahí. Mientras uno la usa, los otros esperan. Y mientras esperan, los clientes esperan.',
            'La app de mozos de Mesanube saca el pedido de esa terminal única. Cada mozo lo toma desde un celular, en simultáneo, y llega igual a la cocina y a la caja. No hay fila. No hay espera.',
          ]}
        />

        <FeatureGrid
          id="funciones"
          eyebrow="Qué puede hacer cada mozo"
          heading="Todo el flujo del servicio en una sola pantalla"
          items={featureCards}
        />

        <FeatureGrid
          eyebrow="Roles y permisos"
          heading="Cada uno ve lo que necesita ver"
          columns={4}
          items={roleCards}
          titleVariant="label"
        />

        <FeatureSplit
          eyebrow="Compatibilidad"
          heading="Sin hardware adicional"
          paragraphs={[
            'La app funciona en cualquier Android o iOS. Sin tablets especiales, sin terminales de punto de venta. Si tu equipo tiene celulares, ya tenés el hardware.',
          ]}
          bullets={[
            'Cualquier celular Android (versión 8+)',
            'iPhone (iOS 14+)',
            'Tablets Android e iPad'
          ]}
        />

        <PricingCards
          eyebrow="Precios"
          heading="Elegí el plan para tu local"
          description={`La app para mozos está incluida desde el Plan ${PLAN_MEDIUM.name}, sin límite de usuarios. Compará los planes y quedate con el que le corresponde a tu local.`}
        />

        <JsonLd data={buildFaqSchema(faqItems)} />
        <FaqSection heading="Lo que nos preguntan seguido" items={faqItems} />
        <FeatureCta
          heading="Probá la app para mozos de Mesanube"
          body={`Incluida en el Plan ${PLAN_MEDIUM.name}. ${TRIAL_PERIOD} gratis, sin tarjeta de crédito. Si querés ver la app en acción antes de empezar, agendá una demo.`}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
