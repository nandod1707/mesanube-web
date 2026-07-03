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
import { PLAN_ADVANCED } from '@/config/plans'

export const metadata: Metadata = {
  title: 'Sistema POS para Bares en Argentina. Comanda Ágil para Múltiples Mozos | Mesanube',
  description:
    `Sistema de gestión para bares argentinos. Comanda digital para múltiples mozos, división de cuentas y facturación ARCA. Probá ${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis.`,
}

/* ── Static data ── */

const navItems = [
  { href: '#problema', label: 'El problema' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#precios', label: 'Precio' },
  { href: '#contacto', label: 'Empezá' },
]

const problema = [
  'El bar es uno de los ambientes más exigentes para un sistema de gestión. No es un restaurante con servicio tranquilo: es una máquina de pedidos continuos, varios mozos trabajando en simultáneo, y cuentas que se pagan de a partes al final de la noche.',
  'Encima está la presión de ARCA: facturar en el momento, sin que el proceso frene la operación ni genere una cola en la barra. Los sistemas genéricos no están pensados para ese ritmo. Mesanube sí.',
]

const resuelve = [
  {
    title: 'Comandas simultáneas de múltiples mozos',
    body: 'Cada mozo trabaja desde su celular. Los pedidos llegan a la barra y a la cocina en tiempo real, en orden, sin que nadie espere que el otro libere la terminal. No hay cuello de botella ni "esperá que estoy usando la comanda": cada uno trabaja independiente y el sistema consolida todo.',
  },
  {
    title: 'Las cuentas que se dividen',
    body: 'Una mesa de ocho que quiere pagar por separado. Un grupo que paga parte en efectivo y parte en tarjeta. Son situaciones normales en cualquier bar. En Mesanube dividís la cuenta, asignás ítems a cada comensal y combinás medios de pago, sin retrabajo ni malabarismo.',
  },
  {
    title: 'El cierre de caja que refleja la realidad',
    body: 'Los bares manejan más medios de pago que los restaurantes: efectivo, tarjeta, transferencia, billeteras digitales. El arqueo de Mesanube los registra todos por separado durante todo el turno. Al cierre, el resumen ya está armado.',
  },
]

const pasos = [
  {
    n: '01',
    title: 'El menú listo en dos minutos',
    body: 'Cargás el menú de la noche. Si hay especiales del día, los sumás en dos minutos. Los QR ya están activos en las mesas antes del primer cliente.',
  },
  {
    n: '02',
    title: 'Cada mozo trabaja desde su celular',
    body: 'Toma el pedido, lo manda a la barra o a la cocina según corresponda, ve el estado de sus mesas y saca la precuenta cuando la piden. El encargado ve el panorama completo del salón en su pantalla.',
  },
  {
    n: '03',
    title: 'Cuenta lista, factura emitida',
    body: 'La cuenta está lista. Se divide si es necesario. La factura con ARCA sale en el momento, sin pasar por otra app.',
  },
  {
    n: '04',
    title: 'Los números del día en pantalla',
    body: 'El arqueo está armado con el detalle de todo lo que entró y salió. Sin calculadora, sin reconstruir nada de memoria a las 2 de la mañana.',
  },
]

const funciones = [
  {
    title: 'App para mozos',
    body: 'Sin límite de usuarios. Cada mozo desde su celular, independiente. Los pedidos llegan consolidados a la barra y la cocina.',
  },
  {
    title: 'División de cuentas',
    body: 'Por ítem, por monto, por porcentaje. Combinación de medios de pago en una misma mesa.',
  },
  {
    title: 'Facturación ARCA',
    body: 'Facturas A, B y C en el momento, desde el mismo sistema donde tomaste el pedido.',
  },
  {
    title: 'Monitor de cocina (KDS)',
    body: 'Los pedidos de cocina llegan a la pantalla en tiempo real. Los tragos que van a la barra quedan en la app del mozo.',
  },
  {
    title: 'Carta QR',
    body: 'Los clientes ven el menú en su celular. Actualizás los precios y los especiales del día en segundos.',
  },
  {
    title: 'Arqueo multimedios',
    body: 'Efectivo, tarjeta, transferencia y billeteras: cada uno separado durante todo el turno, resumen al cierre.',
  },
  {
    title: 'Reseñas en Google',
    body: 'Al cerrar la cuenta, la app le sugiere al mozo pedirle al cliente una reseña en Google. Impacto directo en tu visibilidad online.',
  },
  {
    title: 'Reportes del día',
    body: 'Qué se vendió, cuánto entró, por qué medio pagaron. Una pantalla, un vistazo, sin planillas.',
  },
]

const precioItems = [
  'App para mozos sin límite de usuarios',
  'División de cuentas y multimedios de pago',
  'Monitor de cocina (KDS)',
  'Facturación ARCA (facturas A, B y C)',
  'Carta QR actualizable',
  'Arqueo de caja por turno',
  'Reportes completos',
]

const faq = [
  {
    q: '¿Cuántos mozos pueden usar la app al mismo tiempo?',
    a: 'Sin límite. Todos pueden trabajar en simultáneo desde sus propios celulares sin interferir entre sí. No hay terminal compartida ni cola de acceso.',
  },
  {
    q: '¿Puedo ver en tiempo real qué mesa está siendo atendida y cuál no?',
    a: 'Sí. El encargado tiene una vista completa del salón: estado de cada mesa, pedidos activos, tiempo de espera desde el último pedido.',
  },
  {
    q: '¿Funciona con impresora de tickets en la barra?',
    a: 'Sí. Mesanube es compatible con impresoras térmicas estándar (58mm y 80mm) vía Bluetooth o WiFi para imprimir comandas, precuentas y facturas en la barra.',
  },
  {
    q: '¿Cómo funciona la facturación ARCA en un bar con muchos clientes?',
    a: 'El comprobante se emite en el mismo flujo de cierre de cuenta, sin pasos adicionales ni salir a otra app. En ambientes de alta rotación como bares, esto es clave: facturar no frena la operación.',
  },
]

/* ── Page ── */

export default function BaresPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav items={navItems} />
      <UseCaseTopNav />

      <UseCaseHero
        eyebrow="Para bares"
        heading="Para el bar que no para. Comanda ágil, caja que cierra."
        subtitle="Los viernes a la noche no perdonan errores. Mesanube mantiene el ritmo de tu bar sin que nada se pierda en el camino."
        image={{ src: '/figma/hero-mountains.png', alt: 'Bar argentino organizado con Mesanube' }}
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <ProseSection
          id="problema"
          eyebrow="El bar tiene sus propias reglas"
          heading="Rápido, múltiples mozos, cuentas que se dividen."
          paragraphs={problema}
        />

        <CardGrid
          eyebrow="Velocidad sin caos"
          heading="Qué resuelve Mesanube en tu bar."
          items={resuelve}
        />

        <StepsGrid
          heading="Del primer cliente hasta el último pedido."
          steps={pasos}
          softCta="Empezá gratis"
        />

        <CardGrid
          id="funciones"
          eyebrow="Funciones"
          heading="Funciones clave para bares."
          items={funciones}
          image={{ src: '/figma/columns.png', alt: 'Panel de funciones de Mesanube para bares' }}
        />

        <Testimonial
          quote="Tenemos seis mozos los fines de semana. Antes teníamos una sola tablet y era un caos: uno esperaba que el otro terminara. Ahora cada uno trabaja desde su celular y los pedidos llegan todos a la barra en orden. Mejoró todo: el servicio, el tiempo de espera, y la gente nota que funciona bien."
          author="Juliana M."
          role="Bar El Patio, Chacarita"
          image={{ src: '/figma/sphere.png', alt: 'Bar con Mesanube' }}
        />

        <ProseSection
          eyebrow="Soporte real"
          heading="No hay peor momento para que algo falle que el viernes con el bar lleno."
          paragraphs={[
            'Con Mesanube sabés que si algo sale mal y escribís por WhatsApp, te responde el equipo que conoce el sistema de adentro. Sin call center, sin bot, sin "esperá al próximo turno disponible".',
            'Gente del rubro que entiende lo que significa tener el bar lleno y el sistema parado. Eso no lo puede prometer ningún competidor con soporte corporativo.',
          ]}
        />

        <PricingCards
          variant="advanced"
          eyebrow="Precio"
          heading={`Plan ${PLAN_ADVANCED.name}: para bares que no paran`}
          description="Para bares con múltiples mozos: app para todo el equipo de salón, división de cuentas, comanda ágil, facturación ARCA y reportes. Todo incluido."
          advancedDescription={`${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis. Sin tarjeta de crédito, sin compromiso.`}
          features={precioItems}
          allPlansLinkText="Ver todos los planes →"
        />

        <FaqBlock heading="Lo que más nos preguntan" items={faq} />

        <UseCaseCta
          heading="Tu bar se merece un sistema a su altura. Probalo gratis."
          subtitle="Sin tarjeta de crédito. Sin permanencia. Si querés ver cómo funciona en un bar antes de empezar, agendá una demo y te lo mostramos en vivo."
        />
      </main>

      <SiteFooter />
    </div>
  )
}
