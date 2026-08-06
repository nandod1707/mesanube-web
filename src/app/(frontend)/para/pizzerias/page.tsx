import type { Metadata } from 'next'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import { FaqSection } from '@/components/shared/FaqSection'
import FloatingNav from '@/components/shared/FloatingNav'
import { PricingCards } from '@/components/shared/PricingCards'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { ShowcaseHero } from '@/components/shared/ShowcaseHero'
import { CardGrid, ProseSection, SplitFeature, UseCaseCta, UseCaseTopNav } from '@/components/usecase'
import { PLAN_SMALL, PLAN_MEDIUM } from '@/config/plans'

export const metadata: Metadata = {
  title: 'Sistema POS para Pizzerías en Argentina. Delivery, Mostrador y Salón | Mesanube',
  description:
    `Sistema de gestión para pizzerías argentinas. Comanda digital para delivery, mostrador y salón en un solo sistema. Facturación electrónica ARCA y arqueo de caja incluidos. Probá ${TRIAL_PERIOD} gratis.`,
}

/* ── Static data ── */

const problema = [
  'Una pizzería no es un restaurante donde se sirve pizza. Es una operación distinta. En el mismo turno hay mesas del salón, clientes que piden para llevar en el mostrador y pedidos de delivery propio que hay que coordinar con la cocina. Todo al mismo tiempo, con el mismo equipo.',
  'En el pico del viernes, la cocina no para. El ritmo es otro. Y si el sistema no acompaña ese ritmo, se convierte en un problema más.',
  'Mesanube no tiene features específicos solo para pizzerías, pero tiene todo lo que una pizzería necesita, y está probado con el ritmo de trabajo que conocés.',
]

const resuelve = [
  {
    title: 'Salón',
    body: 'Los mozos toman pedidos desde el celular. Cada pedido se imprime directo en la comandera: mesa, productos, y aclaraciones. Sin papelitos escritos a mano que se pierdan en el calor de la cocina.',
  },
  {
    title: 'Mostrador',
    body: 'El encargado toma el pedido del cliente que está enfrente, lo carga en segundos y lo manda a cocina. La caja registra la venta en el momento. Si el cliente pide factura, sale en dos clicks.',
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
  { title: 'Comanda digital', body: 'Salón y mostrador en el mismo sistema, pedidos que van a cocina al instante.' },
  { title: 'Monitor de cocina', body: 'Los pedidos en pantalla, en orden. El cocinero los marca como listos desde la pantalla.' },
  { title: 'Arqueo de caja', body: 'Efectivo, tarjeta, transferencia, todo con registro de egresos y pagos a proveedores por turno.' },
  { title: 'Facturación electrónica ARCA', body: 'Facturas A, B y C en el momento, sin proceso separado y sin módulo adicional.' },
  { title: 'Carta QR', body: 'El menú del salón en el teléfono del cliente. Sin cartas impresas, y sin precios desactualizados.' },
  { title: 'App para mozos', body: `Cada mozo desde su celular, sin terminal compartida, sin esperas.` },
]

const faq = [
  { q: '¿Mesanube se integra con PedidosYa o Rappi?', a: 'No, hoy Mesanube no tiene integración con plataformas de delivery de terceros. Para delivery propio, el que coordinás directamente con tus clientes por teléfono o redes, funciona perfectamente: cargás el pedido en el sistema, va a cocina, la caja lo registra.' },
  { q: '¿Puedo manejar mostrador y salón desde el mismo sistema?', a: 'Sí. Los pedidos de mostrador y de salón se pueden tomar desde la caja; los mozos del salón pueden trabajar con sus celulares. Los pedidos de ambos van a la misma comandera o monitor de cocina.' },
  { q: '¿Cuántos mozos pueden usar la app al mismo tiempo?', a: 'Sin límite. En un pico de viernes, todos los mozos pueden estar tomando pedidos en simultáneo desde sus propios celulares.' },
  { q: '¿El arqueo distingue efectivo del salón vs. delivery?', a: 'El arqueo registra todos los medios de pago del turno de forma consolidada. Los pedidos tienen su origen (mesa, mostrador) registrado en el sistema para trazabilidad, pero el arqueo de caja es por turno total.' },
  { q: '¿Cuánto tiempo lleva poner en marcha el sistema en una pizzería?', a: 'Cargar el menú para una pizzería estándar lleva entre una y dos horas. Nuestro soporte te acompaña en la configuración inicial.' },
]

/* ── Page ── */

export default function PizzeriasPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <UseCaseTopNav />

      <ShowcaseHero
        eyebrow="Para pizzerías"
        heading="El sistema que aguanta el ritmo de una pizzería."
        subtitle="Salón, mostrador y delivery en simultáneo. Pico del viernes a las 21. La caja al final del turno sin que nadie se quede hasta la medianoche calculando. Mesanube está pensado para eso."
        background={{ src: '/photos/salon-ventana-mesa-tarde.jpg', alt: 'Pizzería organizada con Mesanube' }}
        align="right"
        note="Sin tarjeta de crédito. Sin permanencia mínima."
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <ProseSection
          id="problema"
          eyebrow="Lo que entendemos de una pizzería"
          heading="No es lo mismo que un restaurante, y el sistema tiene que saberlo."
          paragraphs={problema}
        />

        <CardGrid
          eyebrow="Cómo Mesanube resuelve los tres frentes"
          heading="Salón, mostrador y delivery en el mismo sistema."
          items={resuelve}
          columns={4}
        />

        <SplitFeature
          eyebrow="El ritmo de pico"
          heading="Para los viernes que no perdonan."
          paragraphs={[
            'El pico del viernes en una pizzería es otra categoría. Los pedidos se acumulan, la cocina trabaja sin parar, los clientes del salón esperan, los del mostrador también. En esas condiciones, cualquier fricción en el sistema se multiplica.',
            'La comanda digital de Mesanube está diseñada para volumen: sin límite de pedidos simultáneos, sin que el sistema se trabe, sin que los mozos tengan que compartir una sola terminal. Cada uno trabaja desde su celular, independiente.',
          ]}
          cta={`Probá gratis ${TRIAL_PERIOD}`}
          image={{ src: '/photos/mozo-sirviendo-pizza.jpg', alt: 'Sistema Mesanube en funcionamiento en una pizzería' }}
        />

        <CardGrid
          id="funciones"
          eyebrow="Funciones"
          heading="Funciones que hacen el trabajo en la pizzería más fácil."
          items={funciones}
        />

        <PricingCards
          eyebrow="Precios"
          heading="Elegí el plan para tu pizzería"
          description={
            <>
              <p>
                Para pizzerías con salón y delivery, el Plan {PLAN_MEDIUM.name} trae app para mozos,
                monitor de cocina y reportes. Todo incluido.
              </p>
              <p className="mt-3">
                Si tu pizzería es solo mostrador y delivery sin salón, el Plan {PLAN_SMALL.name} puede
                ser suficiente. Escribinos y te orientamos.
              </p>
            </>
          }
          ctaText={`${TRIAL_PERIOD} gratis, sin tarjeta de crédito`}
        />

        <FaqSection heading="Lo que más nos preguntan." items={faq} />

        <UseCaseCta
          heading={`Probá Mesanube en tu pizzería. ${TRIAL_PERIOD} gratis.`}
          subtitle="Sin tarjeta de crédito. Sin permanencia mínima."
        />
      </main>

      <SiteFooter />
    </div>
  )
}
