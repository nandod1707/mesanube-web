import type { Metadata } from 'next'
import React from 'react'

import { FaqSection } from '@/components/shared/FaqSection'
import FloatingNav from '@/components/shared/FloatingNav'
import { PricingCards } from '@/components/shared/PricingCards'
import { SiteFooter } from '@/components/shared/SiteFooter'
import {
  FeatureCta,
  FeatureGrid,
  FeatureHero,
  FeatureSplit,
  FeatureTestimonial,
  FeatureTopNav,
} from '@/components/feature'
import { PLAN_ADVANCED } from '@/config/plans'

export const metadata: Metadata = {
  title: 'App para Mozos. Tomá Pedidos desde el Celular | Mesanube',
  description:
    'App para mozos integrada al POS. Cada mozo toma pedidos desde su celular, sin terminales compartidas. Pedidos a cocina en tiempo real, división de cuentas y reseñas en Google. Para restaurantes y bares argentinos.',
}

/* ── Static data ── */

const featureCards = [
  { title: 'Tomar pedidos por mesa', body: 'El mozo abre su mesa, selecciona los productos, agrega modificaciones o notas, y envía. El pedido aparece en el monitor de cocina al instante.' },
  { title: 'Agregar ítems a una comanda', body: 'Si la mesa pide algo más, el mozo lo suma a la comanda existente. Sin abrir una nueva, sin complicaciones.' },
  { title: 'Ver el estado de sus mesas', body: 'En la pantalla principal, el mozo ve qué mesas están abiertas, qué tienen pedido, qué está tardando.' },
  { title: 'Sacar la precuenta', body: 'El mozo la genera desde la app. El detalle está completo, con ítems, precios e impuestos. Sin ir al mostrador.' },
  { title: 'Gestionar el cobro', body: 'La cuenta se cobra en efectivo, tarjeta, transferencia o en combinación. Si la mesa quiere pagar por separado, el sistema divide la cuenta.' },
]

const roleCards = [
  { title: 'Mozo', body: 'Ve sus mesas y sus pedidos. No cierra mesa ni ve los datos de caja.' },
  { title: 'Encargado', body: 'Ve todo el salón: todas las mesas, todos los pedidos activos, puede abrir y cerrar la caja y hacer retiros. Puede intervenir en cualquier mesa.' },
  { title: 'Dueño', body: 'Acceso completo: sala, caja, reportes, configuración. Desde cualquier dispositivo, incluso fuera del local.' },
]

const faqItems = [
  { q: '¿Qué es una app para mozos y cómo funciona?', a: 'Una app para mozos es una aplicación móvil que permite al personal de salón tomar pedidos, emitir cuentas desde su celular. En Mesanube se sincroniza en tiempo real con el monitor de cocina y con el sistema de caja, sin terminales adicionales.' },
  { q: '¿Cuántos mozos pueden usar la app en simultáneo?', a: 'Sin límite. Todos pueden trabajar al mismo tiempo desde sus propios celulares sin interferencia. Sin licencias adicionales por usuario.' },
  { q: '¿Los mozos tienen que crearse una cuenta?', a: 'El encargado o dueño crea los usuarios desde el panel de administración. El mozo recibe sus datos de acceso y entra con usuario y contraseña. No se descarga ninguna app de tienda: accede desde el navegador del celular.' },
  { q: '¿Qué pasa si un mozo se va del local?', a: 'El dueño puede desactivar ese usuario y crear el nuevo en cualquier momento desde la configuración. Sin llamar a soporte, sin esperar.' },
  { q: '¿La app necesita internet para funcionar?', a: 'Sí, necesita conectividad para sincronizar los pedidos. Si se corta la conexión, los pedidos se sincronizan cuando vuelve. Para un servicio continuo recomendamos WiFi estable en el salón.' },
  { q: '¿Cuánto tiempo lleva capacitar a un mozo nuevo?', a: 'En promedio, 20 minutos. La interfaz está pensada para que la aprenda el mozo solo durante el primer turno, sin capacitación formal.' },
]

/* ── Page ── */

export default function AppParaMozosPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <FeatureTopNav />

      <FeatureHero
        eyebrow="Funciones, App para mozos"
        heading="La app para mozos que simplifica el servicio"
        subtitle="Tus mozos trabajan con el celular que ya tienen en el bolsillo. Toman pedidos, ven las cuentas y cierran las mesas, sin terminales ni hardware nuevo."
        image={{ src: '/figma/hero-mountains.png', alt: 'App para mozos de Mesanube en acción' }}
        ctaLabel={`Incluida en el Plan ${PLAN_ADVANCED.name}. Probá gratis`}
        secondary={{ href: '#funciones', label: 'Ver funciones' }}
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <FeatureSplit
          eyebrow="El problema"
          heading="El cuello de botella más común en la sala"
          paragraphs={[
            'Hay un patrón que se repite en casi todos los restaurantes y bares sin sistema: una o dos tablets compartidas para tomar pedidos, y cuando se llena el salón los mozos se forman para usarlas. Mientras uno usa la terminal, los otros esperan. Y mientras esperan, los clientes esperan.',
            'La app de mozos de Mesanube elimina ese cuello de botella. Cada mozo trabaja desde su propio celular, en simultáneo. No hay fila. No hay espera.',
          ]}
        />

        <FeatureGrid
          id="funciones"
          eyebrow="Qué puede hacer cada mozo"
          heading="Todo el flujo del servicio en una sola pantalla"
          items={featureCards}
        />

        <FeatureSplit
          eyebrow="Reseñas en Google"
          heading="El momento correcto para pedir una reseña"
          paragraphs={[
            '¿Cuándo es el momento ideal para pedirle a un cliente una reseña en Google? Justo después de una experiencia positiva. Y pocos momentos son más positivos que cuando la cuenta acaba de cerrarse y el cliente quedó conforme con el servicio.',
            'La app de Mesanube sugiere al mozo, en ese momento exacto, invitar al cliente a dejar una reseña. No es una notificación automática intrusiva: es una sugerencia para el mozo. Los locales que usan esta función de forma consistente ven un crecimiento real en sus reseñas de Google, lo que impacta directamente en cómo los encuentra la gente que busca dónde comer en la zona.',
          ]}
        />

        <FeatureGrid
          eyebrow="Roles y permisos"
          heading="Cada uno ve lo que necesita ver"
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
            'Tablets Android e iPad',
            'Impresoras térmicas de 58mm o 80mm vía Bluetooth o WiFi',
          ]}
        />

        <FeatureTestimonial
          quote="Mis mozos aprendieron a usar la app en veinte minutos. La primera noche que la usamos ya se notó la diferencia: los pedidos llegaban a la cocina antes de que el mozo volviera de la mesa."
          author="Patricia L., Restaurante La Esquina, Flores"
        />

        <PricingCards
          variant="advanced"
          compact
          compactLabel={`Incluida en el Plan ${PLAN_ADVANCED.name}`}
          description="App para mozos, monitor de cocina, control de stock, recetas, facturación ARCA y reportes completos. Sin módulos adicionales, sin límite de usuarios."
          features={[
            'Sin límite de mozos simultáneos',
            'Solicitud de reseñas en Google',
            'Roles y permisos por usuario',
            'Soporte directo por WhatsApp',
          ]}
        />

        <FaqSection heading="Lo que nos preguntan seguido" items={faqItems} />

        <FeatureCta
          heading="Probá la app para mozos de Mesanube"
          body={`Incluida en el Plan ${PLAN_ADVANCED.name}. ${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis, sin tarjeta de crédito. Si querés ver la app en acción antes de empezar, agendá una demo.`}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
