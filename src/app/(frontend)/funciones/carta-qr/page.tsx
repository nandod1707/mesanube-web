import type { Metadata } from 'next'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import { CtaLink } from '@/components/shared/CtaLink'
import { FaqSection } from '@/components/shared/FaqSection'
import { JsonLd } from '@/components/shared/JsonLd'
import { buildFaqSchema } from '@/utilities/schema'
import FloatingNav from '@/components/shared/FloatingNav'
import { ShowcaseHero } from '@/components/shared/ShowcaseHero'
import { SiteFooter } from '@/components/shared/SiteFooter'
import {
  FeatureCallout,
  FeatureCta,
  FeatureGrid,
  FeatureSplit,
  FeatureTopNav,
  StepsRow,
} from '@/components/feature'
import { PLAN_SMALL } from '@/config/plans'

export const metadata: Metadata = {
  title: 'Carta QR para Restaurantes y Cafeterías. Menú Digital que se Actualiza Solo | Mesanube',
  description:
    'Carta QR integrada al sistema POS. Tus clientes escanean y ven el menú en tiempo real desde su teléfono. Sin imprimir cartas, sin precios desactualizados. Para locales argentinos.',
}

/* ── Static data ── */

const steps = [
  { number: '01', title: 'El cliente escanea el QR', description: 'Con la cámara del teléfono, como hace con cualquier código QR. No necesita bajarse ninguna app, no necesita tener cuenta en ningún lado.' },
  { number: '02', title: 'Ve el menú en su teléfono', description: 'El menú aparece organizado por categorías: entradas, principales, bebidas, postres. Con fotos si las subiste, con descripción si la escribiste.' },
  { number: '03', title: 'El menú es siempre el actual', description: 'No hay versión desactualizada. El QR muestra exactamente el mismo menú que tiene cargado tu sistema en ese momento.' },
]

const usageItems = [
  { title: 'En cada mesa', body: 'Sticker o portacartas en la superficie de la mesa. El cliente lo escanea antes de llamar al mozo.' },
  { title: 'En el mostrador', body: 'Para que el cliente decida qué pedir antes de llegar a la caja. Reduce el tiempo de atención.' },
  { title: 'En la entrada', body: 'Para ver el menú antes de sentarse. Ideal para locales con lista de espera.' },
  { title: 'Por redes o WhatsApp', body: 'El QR es una URL única de tu local. Podés compartirla donde quieras como menú digital.' },
]

const faqItems = [
  { q: '¿Qué es una carta QR y cómo funciona en un restaurante?', a: 'Una carta QR es un menú digital que los clientes acceden escaneando un código con la cámara del teléfono. No requieren descargar ninguna app. En Mesanube, la carta QR está sincronizada con el sistema POS: cuando cambiás algo en el menú interno, el QR se actualiza automáticamente.' },
  { q: '¿El cliente necesita bajarse alguna app para ver la carta?', a: 'No. Cualquier teléfono moderno puede escanear el QR con la cámara nativa. El menú se abre en el navegador, sin apps, sin cuentas.' },
  { q: '¿Cómo actualizo la carta?', a: 'Cambiás el precio, el nombre o la descripción del producto en el sistema de Mesanube, como lo hacés normalmente. El QR refleja el cambio al instante.' },
  { q: '¿Puedo poner fotos en el menú?', a: 'Sí. Podés subir una imagen por producto. Las fotos aparecen en la vista del cliente en el QR.' },
  { q: '¿El cliente puede hacer el pedido desde el QR?', a: 'Hoy la carta QR es solo de consulta. El pedido lo toma el mozo desde la app o el encargado desde el mostrador. Próximamente vamos a habilitar que el cliente pueda pedir desde la carta. Si querés ser de los primeros, anotate en la sección de acceso anticipado.' },
  { q: '¿Cuántas cartas QR puedo tener?', a: 'Cada local tiene su QR único. Si tenés varias sucursales, cada una tiene el suyo.' },
  { q: '¿La carta QR tiene costo adicional?', a: `No. Está incluida en todos los planes de Mesanube, desde el Plan ${PLAN_SMALL.name}.` },
]

/* ── Page ── */

export default function CartaQrPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <FeatureTopNav />

      <ShowcaseHero
        eyebrow="Funciones, Carta QR"
        heading="El menú que siempre está actualizado"
        subtitle="Tu cliente escanea el código en la mesa y ve el menú en tiempo real, en su teléfono. Sin cartas impresas que desactualizar, sin precios tachados a mano, sin que nadie se tenga que acordar de cambiar nada."
        background={{ src: '/photos/bar-maquina-espresso-vapor.jpg', alt: 'Carta QR de Mesanube siendo escaneada en una mesa de restaurante' }}
        align='right'
        cta={
          <>
            <TrialButton>{`Probá ${TRIAL_PERIOD} gratis`}</TrialButton>
            <CtaLink href="#como-funciona" variant="outline">
              Ver cómo funciona
            </CtaLink>
          </>
        }
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <FeatureSplit
          eyebrow="El problema"
          heading="La carta desactualizada es inevitable. Hasta que no lo es."
          paragraphs={[
            'Si cambiás precios y tenés cartas impresas, hay tres opciones: reimprimir todo, tachar y escribir a mano, o dejar el precio viejo y corregirlo en el momento. Ninguna de las tres funciona bien.',
            'La carta QR de Mesanube está vinculada a tu menú en el sistema. Cuando cambiás el precio del café con leche, el cambio aparece en el QR en segundos. Sin imprimir nada, sin avisarle a nadie.',
          ]}
        />

        <StepsRow
          id="como-funciona"
          eyebrow="Cómo funciona"
          heading="Un código. Cualquier teléfono. Sin apps."
          steps={steps}
          layout="list"
        />

        <FeatureGrid
          id="donde-usar"
          eyebrow="Dónde usarlo"
          heading="No hay una sola forma de usarlo"
          items={usageItems}
          columns={4}
        />

        <FeatureCallout
          eyebrow="Próximamente"
          heading="Pedidos directamente desde la carta"
          paragraphs={[
            'Hoy la carta QR es solo para ver el menú. Próximamente el cliente va a poder hacer el pedido directamente desde la carta, sin necesidad del mozo para ese paso.',
            'Si te interesa ser de los primeros locales en tener acceso cuando esté disponible, anotate.',
          ]}
          cta={<TrialButton variant="soft">Quiero acceso anticipado →</TrialButton>}
        />

        <JsonLd data={buildFaqSchema(faqItems)} />
        <FaqSection heading="Lo que nos preguntan seguido" items={faqItems} />
        <FeatureCta
          heading="Menú digital actualizado en tiempo real. Probalo gratis"
          body={`${TRIAL_PERIOD} sin ingresar tu tarjeta. La carta QR está incluida en todos los planes.`}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
