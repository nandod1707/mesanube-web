import type { Metadata } from 'next'
import React from 'react'

import { FaqSection } from '@/components/shared/FaqSection'
import FloatingNav from '@/components/shared/FloatingNav'
import { SiteFooter } from '@/components/shared/SiteFooter'
import {
  FeatureCta,
  FeatureGrid,
  FeatureHero,
  FeaturePlansTeaser,
  FeatureSplit,
  FeatureTestimonial,
  FeatureTopNav,
  StepsRow,
} from '@/components/feature'
import { PLAN_BASIC, PLAN_ADVANCED } from '@/config/plans'

export const metadata: Metadata = {
  title: 'Comanda Digital para Restaurantes y Cafeterías. Pedidos desde Celular | Mesanube',
  description:
    `Comanda digital integrada al POS. Pedidos desde cualquier celular o tablet, llegan a cocina en tiempo real. Para restaurantes y cafeterías argentinas. Probá ${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis.`,
}

/* ── Static data ── */

const steps = [
  { number: '01', title: 'El mozo abre la mesa', description: 'En la app selecciona la mesa o el pedido de mostrador. Ve los productos organizados por categoría: entradas, principales, bebidas, postres.' },
  { number: '02', title: 'Selecciona los productos', description: 'Toca los ítems, suma la cantidad, agrega modificaciones o notas como "sin sal", "al punto", "sin hielo". El sistema guarda exactamente lo que indicó.' },
  { number: '03', title: 'Envía el pedido', description: 'Un toque. El pedido llega al monitor de cocina en tiempo real. El cocinero lo ve en texto, en orden de llegada, sin ambigüedad.' },
  { number: '04', title: 'La cocina trabaja y marca "listo"', description: 'Cuando el pedido está, el cocinero lo marca desde el monitor de cocina. El mozo puede verlo en su app y sabe cuándo acercarse a buscar los platos.' },
  { number: '05', title: 'La mesa pide la cuenta', description: 'La comanda acumula todos los pedidos de esa mesa. Cuando el cliente pide la cuenta, el mozo genera la precuenta desde la app con un toque. El total ya está calculado.' },
]

const featureCards = [
  { title: 'Sin hardware adicional', body: 'Funciona en cualquier celular o tablet Android o iOS que ya tengas. Si tu equipo tiene teléfonos, ya tenés el hardware.' },
  { title: 'Sin límite de usuarios', body: 'Todos los mozos trabajan en simultáneo desde sus propios celulares. No hay terminal compartida, no hay cola de acceso.' },
  { title: 'Modificaciones y notas especiales', body: 'El sistema permite agregar texto libre a cada ítem: "Sin cebolla", "extra queso", "alergia a los mariscos". La cocina lo ve exactamente.' },
  { title: 'Pedidos por mostrador', body: 'Para cafeterías o puestos sin salón, el mismo sistema funciona desde el mostrador. El encargado toma el pedido, lo envía, la cocina lo recibe.' },
  { title: 'Actualización del menú en tiempo real', body: 'Si se termina algo o cambia el precio, lo modificás en el sistema y el cambio llega al instante a todos los dispositivos del local. El mozo no ofrece algo que no hay.' },
]

const faqItems = [
  { q: '¿Qué es una comanda digital y por qué es mejor que el papel?', a: 'Una comanda digital es el sistema donde los pedidos se registran en un dispositivo y viajan al instante a cocina o barra. La diferencia con el papel: no hay errores de lectura, no hay pedidos que se pierden, el cocinero recibe el pedido en segundos y el sistema lo registra automáticamente en la caja.' },
  { q: '¿Necesito internet para que funcione?', a: 'Sí. Mesanube funciona online. Para un restaurante o cafetería, el WiFi del local es suficiente. Si querés un respaldo, los datos del celular del mozo funcionan como alternativa.' },
  { q: '¿Cuántos mozos pueden tomar pedidos a la vez?', a: 'Sin límite. Cada mozo trabaja desde su propio celular de forma independiente. Los pedidos llegan a cocina consolidados, en orden de llegada.' },
  { q: '¿El mozo tiene que bajarse una app?', a: 'Accede desde el navegador del celular. El dueño crea su usuario desde el panel de administración y el mozo entra con usuario y contraseña. No depende de las tiendas de aplicaciones.' },
  { q: '¿Qué pasa si el mozo anota mal un pedido?', a: 'Puede editarlo desde la app mientras el pedido no fue aceptado en cocina. Si ya lo vio el cocinero, puede cancelarlo y volver a mandarlo. El historial queda registrado.' },
  { q: '¿Se puede usar la comanda desde el mostrador sin mozos?', a: 'Sí. Funciona para cafeterías y locales de mostrador: el mismo encargado toma el pedido y lo envía a cocina desde la tablet del mostrador.' },
]

/* ── Page ── */

export default function ComandaDigitalPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <FeatureTopNav />

      <FeatureHero
        eyebrow="Funciones, Comanda digital"
        heading="Del celular del mozo a la cocina en segundos"
        subtitle='Sin papel. Sin pedidos que se pierden. Sin "¿qué dijo que quería?". El pedido aparece en cocina en tiempo real, en el momento en que lo tomás.'
        image={{ src: '/figma/hero-mountains.png', alt: 'Comanda digital de Mesanube en funcionamiento' }}
        ctaLabel={`Probá ${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis`}
        secondary={{ href: '#flujo', label: 'Ver cómo funciona' }}
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <FeatureSplit
          eyebrow="El problema"
          heading="El problema que parece inevitable y no lo es"
          paragraphs={[
            'En la mayoría de los locales sin sistema digital, los pedidos viajan en un papelito que se escribe mal, se lee peor y a veces directamente no llega a la cocina. En pico, eso significa errores, retrasos y clientes que se van enojados.',
            'No es un problema de la gente. Es un problema del sistema.',
            'La comanda digital elimina el papel del flujo. El mozo toca la pantalla, el pedido viaja solo. No hay intermediario, no hay paso manual.',
          ]}
        />

        <StepsRow
          id="flujo"
          eyebrow="Cómo funciona"
          heading="El flujo completo"
          steps={steps}
          layout="list"
        />

        <FeatureGrid
          id="detalles"
          eyebrow="Funciones"
          heading="Detalles que importan"
          items={featureCards}
        />

        <FeaturePlansTeaser
          eyebrow="En qué planes está incluida"
          heading="Incluida en todos los planes"
          plans={[
            { name: PLAN_BASIC.name, price: PLAN_BASIC.price, description: 'Pedidos digitales con impresión en cocina. Ideal para mostrador o tablet fija.' },
            { name: PLAN_ADVANCED.name, price: PLAN_ADVANCED.price, description: 'Comanda para mozos desde celular + monitor de cocina + todo lo demás.' },
          ]}
        />

        <FeatureTestimonial
          quote="Antes perdíamos un pedido por noche como mínimo. Con la comanda digital no se perdió ninguno desde que la usamos. Y los mozos aprendieron solos en el primer turno."
          author="Gonzalo R., Restaurante El Almacén, Villa Crespo"
        />

        <FaqSection heading="Lo que nos preguntan seguido" items={faqItems} />

        <FeatureCta
          heading="Terminá con los pedidos que se pierden. Probalo gratis"
          body={`${process.env.NEXT_PUBLIC_TRIAL_PERIOD} sin tarjeta de crédito. El setup lleva menos de una hora.`}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
