import type { Metadata } from 'next'
import React from 'react'

import FloatingNav from '@/components/shared/FloatingNav'
import { PricingCards } from '@/components/shared/PricingCards'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { ShowcaseHero } from '@/components/shared/ShowcaseHero'
import {
  CardGrid,
  FaqBlock,
  ProseSection,
  StepsGrid,
  Testimonial,
  UseCaseCta,
  UseCaseTopNav,
} from '@/components/usecase'
import { PLAN_ADVANCED } from '@/config/plans'

export const metadata: Metadata = {
  title: 'Sistema POS para Restaurantes en Argentina. Gestión Completa con ARCA | Mesanube',
  description:
    `Sistema de gestión para restaurantes argentinos. Comanda digital, app para mozos, monitor de cocina, ARCA y control de stock. Probá ${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis.`,
}

/* ── Static data ── */

const problema = [
  'Los márgenes son ajustados, los precios cambian seguido, el personal rota, y el cliente quiere el plato en tiempo y forma. Encima de todo eso: la obligación de facturar con ARCA (ex-AFIP), mantener el stock actualizado, y cerrar la caja con los números que corresponden.',
  'La mayoría de los sistemas de gestión para restaurantes están pensados para otro mercado, traducidos al castellano neutro, y soportados por un equipo en otro país que no sabe lo que es ARCA ni el arqueo de caja en pesos. O son sistemas locales viejos que cuestan más de lo que vale lo que hacen.',
  'Mesanube es un sistema hecho en Argentina, para restaurantes argentinos, con soporte de gente que sabe lo que estás viviendo cuando te escribe.',
]

const resuelve = [
  {
    title: 'La comunicación entre salón y cocina',
    body: 'El pedido que sale de la mesa y llega a cocina como un teléfono descompuesto genera errores y tiempos muertos. Con Mesanube, el mozo toma el pedido desde su celular y aparece en el monitor de cocina en tiempo real: sin papel, sin gritos, en orden de llegada.',
  },
  {
    title: 'El control de lo que entra y sale',
    body: 'Sin stock actualizado, es imposible saber si estás ganando o perdiendo en cada plato. Mesanube descuenta del stock con cada venta y te avisa cuando algo está por acabarse. Si se terminó el lomo un viernes a las 21:00, lo sabés antes de que el mozo llegue a la mesa con la mala noticia.',
  },
  {
    title: 'La facturación que cumple con ARCA',
    body: 'Facturas A, B y C directamente desde el POS. El comprobante sale en el momento, en el ticket térmico, sin ninguna aplicación adicional. El cumplimiento fiscal no depende de que alguien se acuerde de hacerlo por separado.',
  },
  {
    title: 'Los reportes que dan el panorama real',
    body: 'Al final del mes, ¿sabés cuál es tu plato más rentable? ¿En qué turno vendés más? ¿Qué medio de pago domina? Mesanube te da esa información sin que tengas que armar ninguna planilla.',
  },
  {
    title: 'El arqueo que no genera estrés',
    body: 'Cada turno tiene su registro: qué entró, qué salió, quién hizo caja, cuánto había de efectivo y cuánto debería haber. Las diferencias aparecen solas, ya no tenés que descubrirlas a las 2 de la mañana.',
  },
]

const roles = [
  {
    n: '01',
    title: 'El mozo',
    body: 'Toma pedidos desde su celular sin capacitación larga. Ve sus mesas, agrega pedidos, saca la precuenta, cierra la cuenta. El sistema le muestra solo lo que necesita ver.',
  },
  {
    n: '02',
    title: 'La cocina',
    body: 'El monitor de cocina (KDS) recibe los pedidos en tiempo real. Cada ítem aparece con la mesa y el detalle. El cocinero no depende de que el mozo pase el papelito a tiempo.',
  },
  {
    n: '03',
    title: 'El encargado',
    body: 'Ve todo el salón: qué mesas están ocupadas, qué pedidos están en curso, qué está tardando más de lo normal. Puede actuar antes de que el problema llegue al cliente.',
  },
  {
    n: '04',
    title: 'Vos, el dueño',
    body: 'Los reportes y el arqueo dan el panorama completo. Podés revisar el día desde el celular sin estar en el local. Y si algo no cuadra, tenés el detalle para entender qué pasó.',
  },
]

const funciones = [
  { title: 'App para mozos', body: 'Cada mozo trabaja desde su celular. Los pedidos van a cocina al instante, sin hardware adicional. Sin límite de usuarios simultáneos.' },
  { title: 'Monitor de cocina (KDS)', body: 'Pantalla en cocina con todos los pedidos activos en tiempo real. Ordena por hora, por mesa, por prioridad.' },
  { title: 'Comanda digital', body: 'El pedido completo en pantalla: productos, modificaciones, notas especiales. Sin ambigüedad, sin errores de transcripción.' },
  { title: 'Control de stock', body: 'Inventario actualizado en tiempo real con cada venta. Alertas de reposición. Historial de movimientos.' },
  { title: 'Gestión de recetas y márgenes', body: 'Cargás los ingredientes de cada plato y Mesanube calcula el costo. Sabés exactamente cuánto te rinde cada cosa en la carta.' },
  { title: 'Facturación ARCA', body: 'Facturas A, B y C desde el POS. Ticket fiscal. Compatible con impresoras térmicas estándar.' },
  { title: 'Reportes completos', body: 'Ventas por período, por producto, por mozo, por medio de pago. Exportables.' },
  { title: 'Arqueo de caja', body: 'Por turno, con detalle de ingresos, egresos y diferencias.' },
]

const precioItems = [
  'App para mozos (sin límite de usuarios)',
  'Monitor de cocina (KDS)',
  'Comanda digital',
  'Control de stock y recetas',
  'Facturación ARCA',
  'Reportes completos',
  'Arqueo de caja por turno',
  'Soporte por WhatsApp incluido',
]

const faq = [
  { q: '¿Qué es un sistema de gestión gastronómica?', a: 'Un sistema de gestión gastronómica (o sistema POS para restaurantes) es el software que centraliza la operación de un restaurante: pedidos, cocina, caja y facturación. Reemplaza el papel, las planillas y las apps separadas por una sola herramienta conectada. Mesanube es ese sistema, hecho en Argentina con facturación ARCA incluida.' },
  { q: '¿Cuántos mozos pueden usar la app al mismo tiempo?', a: 'Sin límite por cantidad de usuarios. Todos tus mozos pueden estar trabajando en simultáneo desde sus celulares sin interferir entre sí, sin necesidad de terminales compartidas.' },
  { q: '¿Necesito impresora para las facturas?', a: 'Mesanube es compatible con impresoras térmicas de ticket estándar. Si ya tenés una impresora en el local, probablemente sea compatible. Si no tenés, te orientamos sobre qué modelo comprar.' },
  { q: '¿Qué pasa si no tengo internet por un momento?', a: 'El sistema trabaja online. Si cae la conexión, los pedidos tomados se sincronizan cuando vuelve. Para ambientes críticos recomendamos tener un fallback de conectividad, como los datos del celular del mozo.' },
  { q: '¿Puedo empezar solo con algunas funciones e ir sumando?', a: 'Sí. El setup inicial puede ser tan simple como cargar el menú y empezar a tomar pedidos. El resto de las funciones las vas activando a tu ritmo.' },
  { q: '¿Cuánto tiempo lleva la configuración inicial?', a: 'Para un restaurante estándar, la carga del menú y la configuración inicial llevan entre 1 y 3 horas. El equipo de Mesanube acompaña el proceso por WhatsApp.' },
]

/* ── Page ── */

export default function RestaurantesPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <UseCaseTopNav />

      <ShowcaseHero
        eyebrow="Para restaurantes"
        heading="De la primera comanda al cierre."
        subtitle="Para los que saben lo que es abrir a mediodía y no levantar cabeza hasta medianoche. Mesanube organiza la sala, conecta con cocina y te da los números al final del día."
        background={{ src: '/figma/hero-mountains.png', alt: 'Restaurante organizado con Mesanube' }}
        align="left"
        note="Sin tarjeta de crédito. Sin permanencia."
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <ProseSection
          id="problema"
          eyebrow="El contexto que entendemos"
          heading="Gestionar un restaurante en Argentina no es fácil."
          paragraphs={problema}
        />

        <CardGrid
          eyebrow="Qué resuelve Mesanube"
          heading="Control total de la sala a la cocina."
          items={resuelve}
        />

        <StepsGrid heading="Cada rol, cada pantalla." steps={roles} softCta="Empezá gratis" />

        <CardGrid
          id="funciones"
          eyebrow="Funciones"
          heading="Todo lo que necesitás para gestionar tu restaurante."
          items={funciones}
          image={{ src: '/figma/columns.png', alt: 'Panel de funciones de Mesanube para restaurantes' }}
        />

        <Testimonial
          quote="Antes de Mesanube, la comunicación entre el salón y la cocina era un caos los fines de semana. Ahora cada pedido aparece en la pantalla de la cocina antes de que el mozo vuelva a la mesa. Bajamos los errores a casi cero y mejoró notablemente el tiempo de servicio."
          author="Martín R."
          role="Dueño, Restaurante Almacén del Centro, San Telmo"
          image={{ src: '/figma/sphere.png', alt: 'Restaurante con Mesanube' }}
        />

        <ProseSection
          eyebrow="Por qué Mesanube y no otro sistema"
          heading="El soporte que hace la diferencia."
          paragraphs={[
            'Cuando algo falla un sábado a la noche, y en algún momento algo falla, necesitás que alguien te responda. No un ticket con número. No "el próximo turno lo ve un agente". El equipo de Mesanube está en WhatsApp, conoce el sistema y conoce el rubro. Cuando escribís, te responde alguien que sabe cómo está configurado tu local.',
            'Eso no lo puede prometer ningún competidor con equipo de soporte corporativo.',
          ]}
        />

        <PricingCards
          variant="advanced"
          eyebrow="Precio"
          heading={`Plan ${PLAN_ADVANCED.name}, ${PLAN_ADVANCED.price}/mes.`}
          description="Para restaurantes con salón completo. Todo incluido, sin módulos adicionales."
          advancedDescription="Para bares y restaurantes con salón"
          features={precioItems}
          ctaText={`${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis para verlo en acción`}
        />

        <FaqBlock heading="Lo que más nos preguntan." items={faq} />

        <UseCaseCta
          heading={`Organizá tu restaurante. ${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis.`}
          subtitle="Sin tarjeta de crédito. Sin permanencia. Si querés ver cómo funciona antes de empezar, agendá una demo y te lo mostramos en tu local."
        />
      </main>

      <SiteFooter />
    </div>
  )
}
