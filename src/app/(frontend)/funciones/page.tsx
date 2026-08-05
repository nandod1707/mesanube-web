import type { Metadata } from 'next'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import { DemoLink } from '@/components/shared/CtaButtons'
import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { SiteFooter } from '@/components/shared/SiteFooter'
import {
  CtaLink,
  LinkCardGrid,
  UseCaseCta,
  UseCaseHero,
  UseCaseTopNav,
} from '@/components/usecase'
import { PLAN_MEDIUM } from '@/config/plans'

export const metadata: Metadata = {
  title: 'Funciones. Todo lo que Incluye el Sistema POS Mesanube | Mesanube',
  description:
    'Comanda digital, arqueo de caja, carta QR, monitor de cocina, reportes y fidelización. Sistema POS completo para restaurantes y cafeterías argentinas.',
}

/* ── Static data ── */

const featureCards = [
  { title: 'Comanda digital', body: 'El pedido va del celular del mozo a cocina en segundos. Sin papelitos escritos a mano, sin gritos, sin pedidos que se pierden.', href: '/funciones/comanda-digital', label: 'Ver comanda digital', badge: null },
  { title: 'Arqueo de caja', body: 'Cerrá el turno con el control exacto del efectivo, las transferencias y los pagos con tarjeta. Sin calculadora, sin diferencias sin explicación.', href: '/funciones/arqueo-de-caja', label: 'Ver arqueo de caja', badge: null },
  { title: 'Carta QR', body: 'Tu menú digital en el celular del cliente. Lo actualizás en segundos y el cambio aparece en todas las mesas al instante.', href: '/funciones/carta-qr', label: 'Ver carta QR', badge: null },
  { title: 'Monitor de cocina', body: 'Los pedidos llegan a la pantalla de cocina en tiempo real, en orden. El cocinero marca "listo" y el mozo lo sabe.', href: '/funciones/monitor-de-cocina', label: 'Ver monitor de cocina', badge: `Plan ${PLAN_MEDIUM.name}` },
  { title: 'Reportes y analítica', body: 'Qué vendiste, cuánto, a qué hora y con qué medio de pago. Una pantalla, sin planillas.', href: '/funciones/reportes-y-analitica', label: 'Ver reportes', badge: `Plan ${PLAN_MEDIUM.name}` },
  { title: 'App para mozos', body: 'Tus mozos toman pedidos y ven las cuentas desde el celular que ya tienen en el bolsillo. Sin hardware nuevo.', href: '/funciones/app-para-mozos', label: 'Ver app para mozos', badge: null },
  { title: 'Facturación electrónica ARCA', body: 'Facturas A, B y C integradas en el mismo sistema donde tomás el pedido y cerrás la mesa. Sin app separada, sin proceso manual.', href: '/funciones/facturacion-electronica-arca', label: 'Ver facturación ARCA', badge: null }
]

/* ── Page ── */

export default function FuncionesPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <UseCaseTopNav />

      <UseCaseHero
        eyebrow="Funciones"
        heading="Todo lo que necesitás para gestionar tu local, en un solo sistema."
        subtitle="Desde que abrís hasta que cerrás la caja. Mesanube conecta la sala, la cocina y la caja en tiempo real, sin apps separadas, sin hardware especial."
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <LinkCardGrid
          id="funciones"
          eyebrow="Las funciones de Mesanube"
          heading="Todo lo que necesitás, nada que no necesitás."
          items={featureCards}
        />

        {/* Por qué integrado (2-col: heading / texto + CTA) */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:flex-row lg:items-start lg:gap-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:w-1/2 lg:gap-10">
            <h2
              className="w-full font-display text-[var(--heading)]"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              La diferencia entre apps separadas y un sistema real
            </h2>
          </Reveal>
          <Reveal delay={1} className="flex w-full flex-col items-start gap-6 lg:w-1/2 lg:pt-2">
            <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
              Muchos locales terminan usando cuatro aplicaciones distintas: una para tomar pedidos,
              otra para facturar, otra para el menú, otra para los reportes. Y cuando algo falla,
              nadie sabe en qué app está el problema.
            </p>
            <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
              En Mesanube cada función está integrada en el mismo sistema. El pedido que toma el mozo
              es el mismo que llega a cocina, el mismo que genera la factura ARCA y el mismo que suma
              al reporte del día. Sin pasos manuales. Sin información duplicada. Sin que el error de
              una app arruine el dato en otra.
            </p>
            <CtaLink href="/precios">Ver planes y precios</CtaLink>
          </Reveal>
        </section>

        <UseCaseCta
          heading={`Probá todas las funciones gratis por ${TRIAL_PERIOD}`}
          subtitle="Sin tarjeta de crédito. Sin permanencia mínima. Si querés ver cómo funciona en tu tipo de local, agendá una demo."
          primaryLabel="Empezá tu prueba gratuita"
          secondary={<DemoLink tone="muted">¿Querés verlo en acción? Agendá una demo →</DemoLink>}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
