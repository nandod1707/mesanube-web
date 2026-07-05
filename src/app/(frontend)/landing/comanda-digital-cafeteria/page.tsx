import type { Metadata } from 'next'
import React from 'react'

import {
  FeatureCta,
  FeatureHero,
  FeatureTestimonial,
  FeatureTopNav,
  StepsRow,
} from '@/components/feature'
import { FaqSection } from '@/components/shared/FaqSection'
import FloatingNav from '@/components/shared/FloatingNav'
import { PricingCards } from '@/components/shared/PricingCards'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { PLAN_BASIC } from '@/config/plans'

export const metadata: Metadata = {
  title: 'Comanda Digital para Cafeterías en Argentina. Sistema de Pedidos sin Papel | Mesanube',
  description:
    `Comanda digital para cafeterías argentinas. Tomá pedidos desde tablet o celular, enviá directo a cocina y cerrá cuentas en segundos. Probá ${process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis.`,
}

/* ── Static data ── */

const benefitCards = [
  {
    number: '01',
    title: 'Los pedidos ya no se pierden',
    description:
      'Cada pedido queda registrado en el sistema desde el momento en que lo tomás. Aunque la cafetería se llene y estés atendiendo tres mesas a la vez, todos los pedidos están en pantalla. Ninguno depende de que alguien recuerde bien lo que le dijeron.',
  },
  {
    number: '02',
    title: 'La cocina recibe los pedidos al instante',
    description:
      'No hay papelito que viaje del mostrador a la cocina. No hay "pasame la comanda". El pedido aparece en el monitor de cocina en tiempo real, en el momento en que lo tomás.',
  },
  {
    number: '03',
    title: 'Los errores de pedido bajan drásticamente',
    description:
      'Confusiones entre mesas, cantidades mal anotadas, modificaciones que se olvidan: todos esos errores vienen de la comanda en papel. En digital, el pedido es exactamente lo que seleccionaste, en texto, legible, sin ambigüedad.',
  },
  {
    number: '04',
    title: 'La caja cierra con los números que corresponden',
    description:
      'Cada pedido que tomás queda registrado en el sistema. Al cierre del día, el arqueo refleja todo lo que vendiste, sin tener que reconstruir nada de memoria.',
  },
  {
    number: '05',
    title: 'Actualizás el menú en segundos',
    description:
      'Cambió el precio del café con leche. Agregaste un tostado nuevo. Se terminó la torta. En la comanda digital lo actualizás en segundos y el cambio llega a todos los dispositivos del local al instante.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Cargás tu menú',
    description:
      'Subís los productos de tu cafetería: categorías, nombres, precios. Para una carta estándar, llevate una hora el primer día.',
  },
  {
    number: '02',
    title: 'Tu equipo toma pedidos desde el celular o tablet',
    description:
      'Desde el mostrador o desde las mesas, cada pedido se toca en la pantalla y se envía. No hay papel, no hay gritos, no hay transcripción.',
  },
  {
    number: '03',
    title: 'La cocina recibe y vos tenés el control',
    description:
      'Los pedidos aparecen en el monitor de cocina en tiempo real. Ves el resumen del día desde tu pantalla. Al cierre, el arqueo ya está armado.',
  },
]

const faqItems = [
  {
    q: '¿Qué es una comanda digital y en qué se diferencia del papel?',
    a: 'Una comanda digital es un sistema donde los pedidos se registran y envían desde un celular o tablet, en lugar de anotarse en papel. La diferencia clave: el pedido llega a cocina en tiempo real, queda guardado en el sistema, y se registra en la caja. Sin errores de transcripción, sin pedidos que se pierden.',
  },
  {
    q: '¿Necesito internet para que funcione la comanda?',
    a: 'Sí, Mesanube funciona online. Para una cafetería, el WiFi del local o los datos del celular son suficientes. Si querés un respaldo, podés configurar el hotspot de tu celular para los casos de corte de internet.',
  },
  {
    q: '¿Qué dispositivo necesito para una comanda digital?',
    a: 'Cualquier tablet o celular Android o iOS. Si ya tenés una tablet en el mostrador, ya tenés todo.',
  },
  {
    q: '¿Cuánto tarda el setup inicial de la comanda digital?',
    a: 'La carga del menú para una cafetería estándar lleva entre 30 minutos y una hora. Después de eso, podés estar tomando pedidos. El soporte acompaña la configuración inicial si necesitás ayuda.',
  },
  {
    q: '¿La comanda digital incluye facturación ARCA?',
    a: `Sí. El Plan ${PLAN_BASIC.name} de Mesanube incluye comanda digital y facturación ARCA en el mismo sistema, desde ${PLAN_BASIC.price}/mes. No son módulos separados.`,
  },
  {
    q: '¿Puedo cancelar si no me convence?',
    a: `Sí. Sin permanencia mínima, sin cargos de cancelación. Los ${process.env.NEXT_PUBLIC_TRIAL_PERIOD} de prueba son gratis sin tarjeta de crédito.`,
  },
]

/* ── Page ── */

export default function ComandaDigitalCafeteriaPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <FeatureTopNav cta="Empezá gratis" />

      <FeatureHero
        eyebrow="Landing, Comanda Digital para Cafeterías"
        heading="Comanda digital para tu cafetería"
        subtitle="Los pedidos en papel se pierden, se leen mal y no llegan a tiempo. Con la comanda digital de Mesanube, cada pedido va directo a cocina en tres segundos, desde cualquier tablet o celular, sin hardware nuevo."
        image={{ src: '/figma/landscape.png', alt: 'Comanda digital Mesanube en una cafetería' }}
        ctaLabel="Empezá gratis, sin tarjeta"
        secondary={{ href: '#como-funciona', label: 'Cómo funciona' }}
        note={`${process.env.NEXT_PUBLIC_TRIAL_PERIOD} de prueba. Sin permanencia. Cancelás cuando querés.`}
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <StepsRow
          id="beneficios"
          eyebrow="5 cosas que cambian"
          heading="Resultados concretos desde el primer día"
          steps={benefitCards}
          layout="grid"
        />

        <StepsRow
          id="como-funciona"
          eyebrow="Cómo funciona"
          heading="Tres pasos, sin configuración complicada"
          steps={steps}
          layout="list"
        />

        <FeatureTestimonial
          quote="Tardé una tarde en cargar todo el menú y al día siguiente ya estábamos usando la comanda. Lo que más me sorprendió fue que la chica del mostrador la aprendió a usar sola. No tuve que explicarle nada, es muy intuitiva."
          author="Fernanda A., Cafetería Detrás del Espejo, Colegiales"
        />

        <PricingCards
          variant="basic"
          compact
          compactLabel="Precio"
          description={
            <>
              <p>Plan {PLAN_BASIC.name} para cafeterías</p>
              <p className="mt-1 text-sm text-[var(--caption)]">
                Para ponerlo en perspectiva: son aproximadamente 6 cafés con leche por día. O lo
                que perdés en una semana con errores de pedido que terminan en reposición o
                descuentos.
              </p>
            </>
          }
          features={[
            'Comanda digital desde cualquier celular o tablet',
            'Carta QR actualizable en tiempo real',
            'Facturación electrónica ARCA incluida',
            'Arqueo de caja por turno',
            'Soporte directo por WhatsApp',
          ]}
          showAllPlansLink
          allPlansLinkText="Ver todos los planes →"
        />

        <FaqSection heading="Lo que nos preguntan antes de empezar" items={faqItems} />

        <FeatureCta
          heading="Empezá a usar la comanda digital en tu cafetería"
          body="Sin tarjeta de crédito. Sin compromiso. Si preferís ver cómo funciona antes de empezar, agendá una demo corta y te la mostramos en tu pantalla."
          demoLabel="¿Tenés dudas? Escribinos"
        />
      </main>

      <SiteFooter />
    </div>
  )
}
