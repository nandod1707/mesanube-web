import type { Metadata } from 'next'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import { PricingCards } from '@/components/shared/PricingCards'
import { SiteFooter } from '@/components/shared/SiteFooter'
import {
  CardGrid,
  FaqBlock,
  ProseSection,
  StepsGrid,
  Testimonial,
  UseCaseCta,
  UseCaseHero,
  UseCaseTopNav,
} from '@/components/usecase'
import { PLAN_BASIC, PLAN_ADVANCED } from '@/config/plans'

export const metadata: Metadata = {
  title: 'Sistema POS para Cafeterías en Argentina. Comanda Digital y Facturación ARCA | Mesanube',
  description:
    `Sistema de gestión para cafeterías argentinas. Comanda digital, carta QR, arqueo de caja y facturación ARCA desde ${PLAN_BASIC.price}/mes. Probá ${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis, sin tarjeta.`,
}

/* ── Static data ── */

const navItems = [
  { href: '/#problema', label: 'El problema' },
  { href: '/#funciones', label: 'Funciones' },
  { href: '/precios', label: 'Precio' },
  { href: '#contacto', label: 'Empezá' },
]

const problema = [
  'Llega el pico del mediodía. Tres mesas pidiendo al mismo tiempo, la chica del mostrador anotando en papel, el pedido que va a la cocina equivocado, y el cliente que se impacienta. Al final del día, cuando querés cerrar caja, el efectivo no cierra con lo que vendiste y no sabés de dónde viene la diferencia.',
  'No es que algo esté mal en tu local. Es que las herramientas que estás usando no estaban pensadas para esto.',
  'Los grandes sistemas ignoran a las cafeterías chicas: les parecen "demasiado chicas". Los sistemas simples no cumplen con ARCA ni tienen control real de caja. Mesanube existe exactamente para ese espacio en el medio.',
]

const resuelve = [
  {
    title: 'Los errores de pedido',
    body: 'Cuando el pedido queda en papel o de memoria, los errores son inevitables. Con Mesanube, cada pedido que tomás va directo al monitor de cocina: en texto, legible, en tiempo real. Sin teléfono descompuesto. Sin "disculpá, era con leche vegetal".',
  },
  {
    title: 'El arqueo que nunca cierra',
    body: 'Cerrar la caja y que los números no cierren es una de las sensaciones más frustrantes del rubro. El arqueo de Mesanube lleva el conteo durante todo el turno: ingresos, egresos, pagos por transferencia. Cuando llegás a fin del día, el número está.',
  },
  {
    title: 'La facturación ARCA',
    body: 'Emitir facturas A, B y C es obligatorio y hay que hacerlo bien. En Mesanube la facturación electrónica va integrada en el mismo sistema donde tomás el pedido y cerrás la mesa. Sin app separada. Sin proceso manual.',
  },
  {
    title: 'La carta que nunca está actualizada',
    body: 'Cambió el precio del café, agregaste un combo nuevo, sacaste el sándwich que no rotaba. Con la carta QR de Mesanube, cambiás el precio en el sistema y en tres segundos todos los clientes ven la versión nueva en su teléfono.',
  },
]

const pasos = [
  {
    n: '8:30',
    title: 'Apertura',
    body: 'Abrís el sistema desde la tablet del mostrador o desde tu celular. El menú ya está cargado, los precios actualizados, los QR listos para el primer cliente.',
  },
  {
    n: '9:00',
    title: 'El primer pico',
    body: 'Llegan los de siempre: café con leche, medialunas, tostados. Cada pedido va desde la pantalla del mostrador directo a la cocina. Sin gritar, sin papelito, sin "¿qué dijo?"',
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
  { title: 'Carta QR', body: 'Tus clientes escanean el código en la mesa y ven el menú actualizado en su teléfono. Sin que el cliente tenga que bajarse ninguna app.' },
  { title: 'Arqueo de caja', body: 'Seguimiento del efectivo por turno. Diferencias marcadas automáticamente. Historial de cada cierre.' },
  { title: 'Facturación ARCA nativa', body: 'Facturas A, B y C con factura electrónica. Todo desde el mismo sistema.' },
  { title: 'Reportes del día', body: 'Qué productos se vendieron, cuánto entró, por qué medio pagaron. Una pantalla, un vistazo.' },
  { title: 'App para mozos', body: `Si tu cafetería tiene mesas con servicio, los mozos toman pedidos desde su celular. Los pedidos llegan a cocina al instante. (Plan ${PLAN_ADVANCED.name})` },
]

const precioItems = ['Carta QR', 'Facturación ARCA', 'Arqueo de caja', 'Soporte por WhatsApp incluido']

const faq = [
  { q: '¿Qué sistema POS es mejor para una cafetería pequeña en Argentina?', a: `Para cafeterías de 1 a 10 empleados en Argentina, lo más importante es que el sistema incluya facturación ARCA sin módulo adicional, funcione en hardware que ya tenés (tablet, celular o computadora), y tenga soporte local. Mesanube cumple los tres criterios desde el Plan ${PLAN_BASIC.name} a ${PLAN_BASIC.price}/mes.` },
  { q: '¿Necesito hardware especial para usar una comanda digital en mi cafetería?', a: 'No. Mesanube funciona en cualquier tablet o celular Android o iOS. Si ya tenés una tablet en el mostrador, ya tenés el hardware necesario. Para imprimir tickets, es compatible con impresoras térmicas estándar de 58mm y 80mm.' },
  { q: '¿Cuánto tiempo lleva poner en marcha el sistema en una cafetería?', a: 'El mismo día que decidís empezar podés estar tomando pedidos con Mesanube. La carga del menú para una cafetería estándar lleva menos de una hora. El soporte acompaña el proceso si necesitás ayuda.' },
  { q: '¿La facturación ARCA tiene costo adicional?', a: `No. Está incluida en el Plan ${PLAN_BASIC.name} desde ${PLAN_BASIC.price}/mes. Sin módulo de facturación separado, sin costo por comprobante.` },
  { q: '¿Funciona si soy monotributista?', a: 'Sí. Mesanube emite facturas C para monotributistas, además de A y B para responsables inscriptos. El sistema detecta tu condición cuando configurás los datos fiscales.' },
  { q: '¿Puedo cancelar cuando quiero?', a: 'Sí. Sin permanencia mínima, sin cargos de cancelación, sin formularios. Si decidís que no es para vos, cancelás y listo.' },
  { q: '¿El soporte tiene algún costo adicional?', a: 'No. El soporte por WhatsApp está incluido en todos los planes. Sin niveles ni ticketing: te responde el equipo de Mesanube directo.' },
]

/* ── Page ── */

export default function CafeteriasPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav items={navItems} />
      <UseCaseTopNav />

      <UseCaseHero
        eyebrow="Para cafeterías"
        heading="El sistema que tu cafetería necesita, con ARCA incluida."
        subtitle="¿Todavía tomás pedidos en papel y cerrás la caja con calculadora? Hay una mejor forma, y no cuesta lo que creés."
        image={{ src: '/figma/hero-mountains.png', alt: 'Cafetería organizada con Mesanube' }}
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
          image={{ src: '/figma/columns.png', alt: 'Panel de funciones de Mesanube para cafeterías' }}
        />

        <Testimonial
          quote="Antes cerraba el turno con calculadora y siempre me faltaban o me sobraban unos pesos que no sabía de dónde venían. Con Mesanube el arqueo me lleva tres minutos y siempre cierra. No sé cómo estuve tanto tiempo sin esto."
          author="Claudia V."
          role="Dueña, Cafetería Ocho y Medio, Villa Crespo"
          image={{ src: '/figma/sphere.png', alt: 'Cafetería con Mesanube' }}
        />

        <PricingCards
          variant="basic"
          eyebrow="Precio"
          heading={`${PLAN_BASIC.price} por mes.`}
          description="Para ponerlo en perspectiva: es menos de lo que perdés con un pedido equivocado por semana durante un año, o con una diferencia de caja que no podés explicar."
          basicDescription="Para cafeterías y locales con mostrador"
          features={precioItems}
          ctaText={`${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis, sin tarjeta de crédito`}
          allPlansLinkText="Ver todos los planes →"
        />

        <FaqBlock heading="Lo que más nos preguntan." items={faq} />

        <UseCaseCta
          heading={`Probá Mesanube en tu cafetería. ${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis.`}
          subtitle="Sin tarjeta de crédito. Sin permanencia. Si tenés alguna duda antes de empezar, escribinos por WhatsApp."
        />
      </main>

      <SiteFooter />
    </div>
  )
}
