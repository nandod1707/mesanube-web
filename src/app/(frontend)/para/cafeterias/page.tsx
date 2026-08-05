import type { Metadata } from 'next'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import { PricingCards } from '@/components/shared/PricingCards'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { ShowcaseHero } from '@/components/shared/ShowcaseHero'
import {
  CardGrid,
  FaqBlock,
  ProseSection,
  SplitFeature,
  StepsGrid,
  UseCaseCta,
  UseCaseTopNav,
} from '@/components/usecase'
import { PLAN_SMALL, PLAN_MEDIUM } from '@/config/plans'

export const metadata: Metadata = {
  title: 'Sistema POS para Cafeterías en Argentina. Comanda Digital y Facturación ARCA | Mesanube',
  description:
    `Sistema de gestión para cafeterías argentinas. Comanda digital, carta QR, arqueo de caja y facturación ARCA desde ${PLAN_SMALL.price}/mes. Probá ${TRIAL_PERIOD} gratis, sin tarjeta.`,
}

/* ── Static data ── */

const problema = [
  'Llega el pico del mediodía. Tres mesas pidiendo al mismo tiempo, la chica del mostrador anotando en papel, el pedido que va a la cocina equivocado, y el cliente que se impacienta. Al final del día, cuando querés cerrar caja, el efectivo no cierra con lo que vendiste y no sabés de dónde viene la diferencia.',
  'No es que algo esté mal en tu local. Es que las herramientas que estás usando no estaban pensadas para esto.'
]

const resuelve = [
  {
    title: 'Los errores de pedido',
    body: 'Cuando el pedido queda anotado a mano o de memoria, los errores son inevitables. Con Mesanube, cada pedido que tomás se imprime directo en la comandera: en texto, legible, al instante. Sin teléfono descompuesto. Sin "disculpá, era con leche vegetal".',
  },
  {
    title: 'El arqueo que nunca cierra',
    body: 'Cerrar la caja y que los números no cierren es una de las sensaciones más frustrantes del rubro. El arqueo de Mesanube lleva el conteo durante todo el turno: ingresos, egresos, pagos por transferencia. Cuando llegás a fin del día, el número está.',
  },
  {
    title: 'La facturación ARCA',
    body: 'Emitir facturas A, B y C es obligatorio y hay que hacerlo bien. En Mesanube la facturación electrónica va integrada en el mismo sistema donde tomás el pedido y cerrás la mesa.',
  },
  {
    title: 'La carta que nunca está actualizada',
    body: 'Cambió el precio del café, agregaste un combo nuevo, sacaste el sándwich que no rotaba. Con la carta QR de Mesanube, cambiás el precio en el sistema y al instante los clientes ven la versión nueva en su teléfono.',
  },
]

const pasos = [
  {
    n: '8:00',
    title: 'Apertura',
    body: 'Abrís el turno del día. El menú ya está cargado, los precios actualizados, el QR listo para el primer cliente.',
  },
  {
    n: '9:00',
    title: 'El primer pico',
    body: 'Llegan los de siempre: café con leche, medialunas, tostados. Cada pedido va desde la pantalla del mostrador directo a la cocina. Sin gritar, sin papelito escrito a mano, sin "¿qué dijo?"',
  },
  {
    n: '13:00',
    title: 'El almuerzo',
    body: 'Las mesas se llenan. Los mozos toman pedidos desde el celular, la cocina recibe todo en orden. La cuenta se arma sola. El cliente paga con tarjeta o efectivo, se registra todo, la factura sale en el momento.',
  },
  {
    n: '23:30',
    title: 'El cierre',
    body: 'Hacés el arqueo desde el sistema: efectivo en caja, transferencias, tarjetas. El total cierra con lo que vendiste. Cerrás sesión y te vas a tu casa sabiendo que los números están.',
  },
]

const funciones = [
  { title: 'Comanda desde mostrador', body: 'Diseñada para el ritmo de una barra: tocás el producto, sumás la cantidad, enviás. Sin menús complicados ni pasos de más.' },
  { title: 'Carta QR', body: 'Tus clientes escanean el código en la mesa y ven el menú actualizado en su teléfono.' },
  { title: 'Arqueo de caja', body: 'Seguimiento del efectivo por turno. Diferencias marcadas automáticamente. Historial de cada cierre.' },
  { title: 'Facturación ARCA nativa', body: 'Facturas A, B y C con factura electrónica. Todo desde el mismo sistema.' },
  { title: 'Reportes del día', body: 'Qué productos se vendieron, cuánto entró, por qué medio pagaron. Una pantalla, un vistazo.' },
  { title: 'App para mozos', body: `Si tu cafetería tiene mesas con servicio, los mozos toman pedidos desde su celular. Los pedidos llegan a cocina al instante.` },
]

const faq = [
  { q: '¿Qué sistema POS es mejor para una cafetería pequeña en Argentina?', a: `Para cafeterías de 1 a 10 empleados en Argentina, lo más importante es que el sistema incluya facturación ARCA sin módulo adicional, funcione en hardware que ya tenés (tablet, celular o computadora), y tenga soporte local. Mesanube cumple los tres criterios desde el Plan ${PLAN_SMALL.name} a ${PLAN_SMALL.price}/mes.` },
  { q: '¿Necesito hardware especial para usar una comanda digital en mi cafetería?', a: 'No. Mesanube funciona en cualquier tablet o celular Android o iOS. Si ya tenés una tablet en el mostrador, ya tenés el hardware necesario. Para imprimir tickets, es compatible con impresoras térmicas estándar de 58mm y 80mm.' },
  { q: '¿Cuánto tiempo lleva poner en marcha el sistema en una cafetería?', a: 'El mismo día que decidís empezar podés estar tomando pedidos con Mesanube. La carga del menú para una cafetería estándar lleva menos de una hora. Nuestro soporte acompaña el proceso si necesitás ayuda.' },
  { q: '¿La facturación ARCA tiene costo adicional?', a: `No. Está incluida en el Plan ${PLAN_SMALL.name} desde ${PLAN_SMALL.price}/mes. Sin módulo de facturación separado, sin costo por comprobante.` },
  { q: '¿Funciona si soy monotributista?', a: 'Sí. Mesanube emite facturas C para monotributistas, además de A y B para responsables inscriptos. El sistema detecta tu condición cuando configurás los datos fiscales.' },
  { q: '¿Puedo cancelar cuando quiero?', a: 'Sí. Sin permanencia mínima, sin cargos de cancelación, sin formularios. Si decidís que no es para vos, cancelás y listo.' },
  { q: '¿El soporte tiene algún costo adicional?', a: 'No. Nuestro soporte por WhatsApp está incluido en todos los planes. Sin niveles ni ticketing: te responde el equipo de Mesanube directo.' },
]

/* ── Page ── */

export default function CafeteriasPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <UseCaseTopNav />

      <ShowcaseHero
        eyebrow="Para cafeterías"
        heading="El sistema que tu cafetería necesita, con facturación electrónica incluida."
        subtitle="¿Todavía tomás pedidos en papel y cerrás la caja con calculadora? Hay una mejor forma, y no cuesta lo que creés."
        background={{ src: '/figma/hero-mountains.png', alt: 'Cafetería organizada con Mesanube' }}
        align="left"
        note="Sin tarjeta de crédito. Sin permanencia mínima."
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <ProseSection
          id="problema"
          eyebrow="El problema que conocemos bien"
          heading="La cafetería que funciona bien tiene sus propios problemas."
          paragraphs={problema}
        />

        <CardGrid
          eyebrow="Qué resuelve Mesanube"
          heading="Los cuatro dolores de cabeza que desaparecen."
          items={resuelve}
          columns={4}
        />

        <StepsGrid
          heading="De la apertura al cierre."
          steps={pasos}
          softCta="Empezá gratis"
          numberSize="sm"
        />

        <CardGrid
          id="funciones"
          eyebrow="Funciones"
          heading="Lo que realmente usás."
          items={funciones}
        />

        <SplitFeature
          eyebrow="Pensado para el mostrador"
          heading="Una pantalla para todo el local."
          paragraphs={[
            'Desde el mismo lugar tomás el pedido, cobrás, facturás y cerrás la caja. No hay que saltar entre apps ni pasar datos a mano de un sistema a otro.',
            'Funciona en la computadora que ya tenés en el mostrador. El día que sumás servicio de mesa, activás la app para mozos y empezás a tomar pedidos desde el celu manteniendo el mismo sistema.',
          ]}
          image={{
            src: '/api/media/file/coffee-times.webp',
            alt: 'Mostrador de una cafetería trabajando con Mesanube',
          }}
          cta="Probá gratis"
        />

        <PricingCards
          eyebrow="Precios"
          heading="Elegí el plan de tu cafetería"
          description={`La mayoría de las cafeterías arranca con el Plan ${PLAN_SMALL.name}. Si tenés mesas con servicio, el ${PLAN_MEDIUM.name} suma app para mozos y monitor de cocina. Sin módulos adicionales.`}
          ctaText={`${TRIAL_PERIOD} gratis, sin tarjeta de crédito`}
        />

        <FaqBlock heading="Lo que más nos preguntan." items={faq} />

        <UseCaseCta
          heading={`Probá Mesanube en tu cafetería. ${TRIAL_PERIOD} gratis.`}
          subtitle="Sin tarjeta de crédito. Sin permanencia mínima. Si tenés alguna duda antes de empezar, escribinos por WhatsApp."
        />
      </main>

      <SiteFooter />
    </div>
  )
}
