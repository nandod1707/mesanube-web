import type { Metadata } from 'next'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import FloatingNav from '@/components/shared/FloatingNav'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { ShowcaseHero } from '@/components/shared/ShowcaseHero'
import {
  CardGrid,
  CtaLink,
  ProseSection,
  SplitFeature,
  UseCaseCta,
  UseCaseTopNav,
} from '@/components/usecase'

export const metadata: Metadata = {
  title: 'Sistema POS Multilocal en Argentina. Tablero Consolidado de Sucursales | Mesanube',
  description:
    'Gestión centralizada para cafeterías y restaurantes con más de una sucursal: tablero consolidado en tiempo real, catálogo compartido, facturación multi-CUIT ante ARCA y caja por local. Probá gratis.',
}

/* ── Static data ── */

const features = [
  {
    title: 'Tablero consolidado',
    body: 'Ventas, costos, caja y stock de todos tus locales en una sola pantalla, actualizados en tiempo real. Entrás una vez y ves el negocio completo.',
  },
  {
    title: 'Catálogo compartido',
    body: 'Cargás el menú una vez y lo replicás a todos los locales, o lo personalizás por sucursal. Cambiás un precio y llega a donde vos quieras.',
  },
  {
    title: 'Facturación multi-CUIT',
    body: 'Cada local puede facturar ante ARCA con su propio CUIT y punto de venta. Ideal si tus sucursales son razones sociales distintas o una franquicia.',
  },
  {
    title: 'Permisos por local',
    body: 'Cada encargado entra y ve solo lo suyo: su caja, sus ventas, su stock. Vos, como dueño, ves todos. Usuarios y roles por sucursal.',
  },
  {
    title: 'Caja consolidada',
    body: 'Arqueo por caja y por turno en cada local, y el cierre del día consolidado de toda la cadena. Sabés cuánto entró en total sin sumar a mano.',
  },
  {
    title: 'Reportes comparados',
    body: 'Rentabilidad, CMV y margen por local y consolidado. Ves qué sucursal vende más, qué producto rota mejor en cada una y dónde se te va la plata.',
  },
  {
    title: 'Stock y alertas por local',
    body: 'Control de stock por sucursal con alertas de reposición, historial de conteo de inventario exportable, local por local.',
  },
  {
    title: 'Gastos por local',
    body: 'Registrás ingresos y egresos por sucursal, con comprobante adjunto. Cada local con sus cuentas claras y el panorama general para vos.',
  },
]

/* ── Page ── */

export default function CadenasMultilocalPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <UseCaseTopNav />

      <ShowcaseHero
        eyebrow="Para cadenas multilocal"
        heading="Todos tus locales en una sola pantalla, en tiempo real."
        subtitle={[
          'Abriste el segundo local y de golpe todo se duplicó: dos cajas para arquear, doble inventario para controlar, dos veces el trabajo. Y ningún lugar donde ver el negocio completo.',
          'Mesanube es multi-local: consolidá ventas, costos, caja y stock de todas tus sucursales en un tablero actualizado en vivo.',
        ]}
        background={{ src: '/figma/hero-mountains.png', alt: 'Cadena de locales gestionada con Mesanube' }}
        align="left"
        note="Sin tarjeta de crédito. Sin permanencia."
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <ProseSection
          id="problema"
          eyebrow="El problema que conocés"
          heading="Crecer no debería significar perder el control."
          paragraphs={[
            'Con un local, los números los tenés en la cabeza. Con dos, empieza el rompecabezas: cada sucursal con su caja, su stock y sus números por separado, y vos armando planillas a fin de mes para entender si te fue bien.',
            'Los sistemas pensados para un solo local te obligan a entrar y salir de cuentas distintas. Los conocidos de siempre te piden tener 3 aplicaciones distintas para tener el mismo nivel de control.',
            'Mesanube está esta pensado para el dueño que está creciendo, con el control centralizado que necesitás pero sin la complejidad.',
          ]}
        />

        <CardGrid
          id="funciones"
          eyebrow="Qué incluye"
          heading="Control centralizado, local por local."
          items={features}
        />

        <SplitFeature
          eyebrow="Todos tus locales, un panel"
          heading="Una sola cuenta, todas tus sucursales."
          paragraphs={[
            'No entrás y salís de un sistema por local. Desde un mismo tablero ves las ventas, las cajas y el stock de cada sucursal, consolidados y actualizados en el momento.',
            'Cargás el menú una vez y lo replicás en todos los locales, con los ajustes de precio que cada uno necesite. Sumar una sucursal nueva es activarla, no montar todo de cero.',
          ]}
          image={{
            src: '/api/media/file/inner-screen-1.webp',
            alt: 'Tablero multi-local de Mesanube consolidando varias sucursales',
          }}
          cta="Probá gratis"
        />

        <ProseSection
          id="tiempo-real"
          eyebrow="En tiempo real"
          heading="Un pedido en Palermo, una caja en Belgrano: lo ves en el momento."
          paragraphs={[
            'No hay que exportar, refrescar ni esperar a fin de día. Cada venta, cada cierre de caja y cada alerta de stock aparece en tu tablero al instante, en todas tus pantallas a la vez.',
            'Cada local trabaja aislado y seguro —sus datos, sus usuarios, su facturación— pero vos ves todo junto. Si tus sucursales facturan con CUIT distintos, cada una emite ante ARCA con su propia identidad fiscal.',
          ]}
          cta={
            <>
              <TrialButton>Probá gratis {TRIAL_PERIOD}</TrialButton>
              <CtaLink href="/precios" variant="soft">
                Ver planes y precios →
              </CtaLink>
            </>
          }
        />

        <UseCaseCta
          heading="Sumá todos tus locales a Mesanube."
          subtitle="Probalo gratis en tu primer local y escalá cuando quieras. Sin tarjeta de crédito, sin permanencia. Si ya tenés varios locales, agendá una demo y te mostramos el tablero consolidado en vivo."
        />
      </main>

      <SiteFooter />
    </div>
  )
}
