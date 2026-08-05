import type { Metadata } from 'next'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import { CtaLink } from '@/components/shared/CtaLink'
import { FaqSection } from '@/components/shared/FaqSection'
import FloatingNav from '@/components/shared/FloatingNav'
import { PricingCards } from '@/components/shared/PricingCards'
import { ShowcaseHero } from '@/components/shared/ShowcaseHero'
import { SiteFooter } from '@/components/shared/SiteFooter'
import {
  FeatureCta,
  FeatureGrid,
  FeatureSplit,
  FeatureTopNav,
  StepsRow,
} from '@/components/feature'

export const metadata: Metadata = {
  title: 'Comanda Digital para Restaurantes y Cafeterías. Pedidos desde Celular | Mesanube',
  description:
    `Comanda digital integrada al POS. Pedidos desde cualquier celular o tablet, llegan a cocina en tiempo real. Para restaurantes y cafeterías argentinas. Probá ${TRIAL_PERIOD} gratis.`,
}

/* ── Static data ── */

const steps = [
  { number: '01', title: 'Se abre el pedido', description: 'En la app seleccionas la mesa o pedido de mostrador. Ve los productos organizados por categoría: entradas, principales, bebidas, postres.' },
  { number: '02', title: 'Selecciona los productos', description: 'Tocas los ítems, sumas la cantidad, agregas modificaciones o notas como "sin sal", "a punto", "sin hielo". El sistema guarda exactamente lo que indicas.' },
  { number: '03', title: 'Confirmás el pedido', description: 'Un toque. El pedido se imprime en la comandera al instante. El cocinero lo ve en texto, en orden de llegada, y sin ambigüedades.' },
  { number: '04', title: 'La cocina prepara el pedido', description: 'El cocinero sigue el ticket impreso y prepara cada plato en el orden que llegó. El mozo pasa a buscarlo cuando está listo.' },
  { number: '05', title: 'La mesa pide la cuenta', description: 'La comanda acumula todos los pedidos de esa mesa. Cuando el cliente pide la cuenta, el mozo ve el total completo desde la app con un toque. El total ya está calculado.' },
]

const featureCards = [
  { title: 'Sin hardware adicional', body: 'Funciona en cualquier celular o tablet Android o iOS que ya tengas. Si tu equipo tiene teléfonos, ya tenés el hardware.' },
  { title: 'Sin límite de usuarios', body: 'Todos los mozos trabajan en simultáneo desde sus propios celulares. No hay terminal compartida, no hay cola de acceso.' },
  { title: 'Modificaciones y notas especiales', body: 'El sistema permite agregar texto libre: "Sin cebolla", "extra queso", "alergia a los mariscos". La cocina lo ve exactamente como lo pidió el cliente.' },
  { title: 'Pedidos por mostrador', body: 'Para cafeterías o puestos sin salón, el mismo sistema funciona desde el mostrador. El encargado toma el pedido, lo envía, la cocina lo recibe.' },
  { title: 'Actualización del menú en tiempo real', body: 'Si se termina algo o cambia el precio, lo modificás en el sistema y el cambio llega al instante a todos los dispositivos del local. El mozo no ofrece algo que no hay.' },
]

const faqItems = [
  { q: '¿Qué es una comanda digital y por qué es mejor que el papel?', a: 'Una comanda digital es el sistema donde los pedidos se registran en un dispositivo y viajan al instante a cocina o barra. La diferencia con el papel: no hay errores de lectura, no hay pedidos que se pierden, el cocinero recibe el pedido en segundos y el sistema lo registra automáticamente en la caja.' },
  { q: '¿Necesito internet para que funcione?', a: 'Sí. Mesanube funciona online. Para un servicio continuo recomendamos WiFi estable en el salón.' },
  { q: '¿Cuántos mozos pueden tomar pedidos a la vez?', a: 'Sin límite. Cada mozo trabaja desde su propio celular de forma independiente. Los pedidos llegan a cocina consolidados, en orden de llegada.' },
  { q: '¿El mozo tiene que bajarse una app?', a: 'Accede desde el navegador del celular. El dueño crea su usuario desde el panel de administración y el mozo entra con usuario y contraseña. No depende de las tiendas de aplicaciones.' },
  { q: '¿Qué pasa si el mozo anota mal un pedido?', a: 'Los cajeros y encargados son los únicos que tienen permiso para editar un pedido, y al editarlo la comandera emite un ticket de modificación con el número de pedido para que la cocina pueda asociarlos.' },
  { q: '¿Se puede usar la comanda desde el mostrador sin mozos?', a: 'Sí. Funciona para cafeterías y locales de mostrador: el mismo encargado toma el pedido y lo envía a cocina desde la computadora o tablet del mostrador.' },
]

/* ── Page ── */

export default function ComandaDigitalPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <FeatureTopNav />

      <ShowcaseHero
        eyebrow="Funciones, Comanda digital"
        heading="Del celular del mozo a la cocina en segundos"
        subtitle='Sin papelitos escritos a mano. Sin pedidos que se pierden. Sin "¿qué dijo que quería?". El pedido se imprime en la comandera al instante, en el momento en que lo tomás.'
        background={{ src: '/photos/cocina-linea-equipo.jpg', alt: 'Comanda digital de Mesanube en funcionamiento' }}
        cta={
          <>
            <TrialButton>{`Probá ${TRIAL_PERIOD} gratis`}</TrialButton>
            <CtaLink href="#flujo" variant="outline">
              Ver cómo funciona
            </CtaLink>
          </>
        }
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <FeatureSplit
          eyebrow="El problema"
          heading="El problema que parece inevitable y no lo es"
          paragraphs={[
            'En la mayoría de los locales sin sistema de punto de venta los pedidos viajan en un papelito que se escribe mal, se lee peor y a veces directamente no llega a la cocina. En hora pico, eso significa errores, retrasos y clientes que se van enojados.',
            'La comanda digital elimina la escritura a mano del flujo. El mozo toca la pantalla, y el pedido va directo a la comandera que corresponda.',
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

        <PricingCards
          eyebrow="Precios"
          heading="La comanda digital está incluida en todos los planes"
          description="Sin módulo adicional, sin límite de dispositivos. Elegí el plan que le va a tu local."
        />

        <FaqSection heading="Lo que nos preguntan seguido" items={faqItems} />

        <FeatureCta
          heading="Terminá con los pedidos que se pierden. Probalo gratis"
          body={`${TRIAL_PERIOD} sin tarjeta de crédito. El setup lleva menos de una hora.`}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
