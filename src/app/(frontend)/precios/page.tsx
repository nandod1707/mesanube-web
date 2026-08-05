import type { Metadata } from 'next'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import { DemoLink } from '@/components/shared/CtaButtons'
import { FaqSection } from '@/components/shared/FaqSection'
import FloatingNav from '@/components/shared/FloatingNav'
import { PricingCards } from '@/components/shared/PricingCards'
import Reveal from '@/components/shared/Reveal'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { CtaLink, UseCaseCta, UseCaseHero, UseCaseTopNav } from '@/components/usecase'
import { PLANS, PLAN_SMALL, PLAN_MEDIUM } from '@/config/plans'

const TRIAL = TRIAL_PERIOD

export const metadata: Metadata = {
  title: 'Precios. Sistema POS para Restaurantes y Cafeterías en Argentina | Mesanube',
  description:
    `Planes desde ${PLAN_SMALL.price}/mes. Comanda digital, facturación ARCA y soporte por WhatsApp incluidos. ${TRIAL} gratis, sin tarjeta de crédito.`,
}

/* ── Static data ── */

// Plans are strictly tiered (each includes everything from the plans below it),
// so a feature is expressed as the index of the first PLANS entry that has it.
// A plan at index `i` includes the row when `i >= from` — this scales to any
// number of plans automatically.
const comparisonRows: { label: string; from: number }[] = [
  { label: 'Pedidos digitales', from: 0 },
  { label: 'Carta QR', from: 0 },
  { label: 'Facturación ARCA', from: 0 },
  { label: 'Arqueo de caja', from: 0 },
  { label: 'Soporte por WhatsApp', from: 0 },
  { label: 'App para mozos', from: 1 },
  { label: 'Monitor de cocina', from: 1 },
  { label: 'Reportes', from: 1 },
  { label: 'Control de stock', from: 1 },
  { label: 'Recetas y márgenes', from: 1 },
  { label: 'Multi-sucursal', from: 2 },
  { label: 'Reportes consolidados entre locales', from: 2 },
  { label: 'Soporte prioritario', from: 2 },
]

const faqs = [
  {
    q: `¿Los ${TRIAL} gratis son con acceso completo?`,
    a: 'Sí. Durante el período de prueba tenés acceso completo al plan que elegiste, sin restricciones de funciones ni límite de transacciones.',
  },
  {
    q: '¿Necesito tarjeta de crédito para empezar?',
    a: `No. Los ${TRIAL} de prueba arrancan sin tarjeta. Cuando se termina el período, elegís si continuás y cómo pagás.`,
  },
  {
    q: '¿Qué pasa cuando termina el período de prueba?',
    a: `Te avisamos antes de que termine. Si querés continuar, cargás el método de pago y seguís sin interrupciones. Si decidís no continuar, los datos de tu local quedan guardados por ${TRIAL} más por si cambiás de idea.`,
  },
  {
    q: '¿Puedo cambiar de plan después?',
    a: `Sí. Si empezás con el Plan ${PLAN_SMALL.name} y crecés, pasás al ${PLAN_MEDIUM.name} en cualquier momento. El cambio es inmediato.`,
  },
  {
    q: '¿Tienen plan para más de un local?',
    a: 'Sí. Mesanube tiene gestión multilocal: administrás todas tus sucursales desde un panel unificado, con datos consolidados y carga de menú centralizada. Escribinos por WhatsApp y coordinamos el alta.',
  },
  {
    q: '¿Qué incluye el soporte?',
    a: 'Soporte por WhatsApp con el equipo de Mesanube. Sin tickets, sin bot. Respondemos en horario de trabajo y, cuando hay urgencias operativas (el sistema caído durante el servicio), priorizamos.',
  },
  {
    q: '¿El sistema tiene costos adicionales?',
    a: 'No. El precio mensual incluye todo: funciones, actualizaciones y soporte. No hay módulos de pago separado, no hay costo por comprobante ARCA, no hay cargos ocultos.',
  },
  {
    q: '¿Puedo cancelar en cualquier momento?',
    a: 'Sí. Sin permanencia mínima, sin penalidades. Si pagaste un período por adelantado y cancelás antes, no hay reintegro del período ya pagado, pero no hay cargo adicional por cancelar.',
  },
]

/* ── Comparison checkmark cell ── */

function Check({ value }: { value: boolean }) {
  if (value) {
    return (
      <span className="font-bold text-[var(--olive)]" aria-label="Incluido">
        ✓
      </span>
    )
  }
  return (
    <span className="text-[var(--caption)]" aria-label="No incluido">
      –
    </span>
  )
}

/* ── Page ── */

export default function PreciosPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <UseCaseTopNav />

      <UseCaseHero
        eyebrow="Precios"
        heading="Precios sin letra chica."
        subtitle={`${TRIAL} gratis para probarlo. Después elegís el plan que le corresponde a tu local. Sin tarjeta, sin permanencia, sin sorpresas en la factura.`}
        ctaLabel="Empezá tu prueba gratuita"
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        {/* Planes */}
        <PricingCards
          eyebrow="Planes"
          heading="Planes claros, sin módulos de pago separado"
          description={`Todos los planes incluyen ${TRIAL} de prueba gratuita. Sin tarjeta de crédito para empezar.`}
          ctaText="Empezá tu prueba gratuita"
          showAllPlansLink={false}
        />

        {/* Comparación */}
        <section className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <h2
              className="w-full font-display text-[var(--heading)]"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              ¿Cuál te conviene?
            </h2>
            <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
              Si tenés dudas sobre cuál te queda mejor, escribinos por WhatsApp y en cinco minutos lo
              resolvemos.
            </p>
          </Reveal>

          <Reveal delay={1} className="w-full overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-[18px] leading-[1.4] tracking-[-0.09px]">
              <thead>
                <tr className="border-b border-[var(--divider)]">
                  <th
                    className="pb-4 pr-8 font-sans text-[14px] font-bold text-[var(--heading)]"
                    scope="col"
                  >
                    Función
                  </th>
                  {PLANS.map((plan) => (
                    <th
                      key={plan.name}
                      className="pb-4 pr-8 font-mono text-[14px] font-bold tracking-[-0.14px] text-[var(--olive)] last:pr-0"
                      scope="col"
                    >
                      {plan.name}
                      <span className="ml-1 font-normal text-[var(--caption)]">{plan.price}</span>
                      {plan.placeholder && (
                        <span className="ml-1 font-normal text-[11px] uppercase text-[var(--caption)]">
                          (preliminar)
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-[var(--divider)]">
                    <td className="py-4 pr-8 text-[var(--heading)]">{row.label}</td>
                    {PLANS.map((plan, i) => (
                      <td key={plan.name} className="py-4 pr-8 text-center last:pr-0">
                        <Check value={i >= row.from} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </section>

        {/* Descuentos */}
        <section
          id="descuentos"
          className="flex w-full max-w-[1500px] flex-col items-start gap-[40px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
        >
          <Reveal className="flex w-full flex-col items-start gap-[30px] lg:pr-[400px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
              Descuentos
            </h2>
            <p
              className="w-full font-display text-[var(--heading)]"
              style={{
                fontSize: 'clamp(36px, 5.5vw, 60px)',
                lineHeight: 0.9,
                letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
              }}
            >
              Pagando por adelantado
            </p>
            <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
              Si sabés que Mesanube es para vos, podés ahorrar pagando por adelantado.
            </p>
          </Reveal>

          <div className="grid w-full grid-cols-1 gap-x-[20px] sm:grid-cols-2">
            <Reveal
              delay={1}
              as="article"
              className="flex flex-col items-start gap-6 border-t border-[var(--divider)] py-[40px] pr-5"
            >
              <p
                className="font-display leading-none text-[var(--heading)]"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                10%
              </p>
              <div className="flex w-full flex-col items-start gap-3">
                <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
                  6 meses por adelantado
                </p>
                <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                  El descuento se aplica sobre el precio mensual del plan que elijas.
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={2}
              as="article"
              className="flex flex-col items-start gap-6 border-t border-[var(--divider)] py-[40px] pr-5"
            >
              <p
                className="font-display leading-none text-[var(--heading)]"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
                }}
              >
                25%
              </p>
              <div className="flex w-full flex-col items-start gap-3">
                <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
                  12 meses por adelantado
                </p>
                <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                  El pago anual en el Plan {PLAN_MEDIUM.name} sale lo mismo que pagar 9 meses al
                  precio de lista.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={1}
            className="w-full rounded-[20px] bg-[var(--olive-soft)] px-8 py-[40px] text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--olive)]"
          >
            Los primeros {TRIAL} son siempre gratis, independientemente del plan y la frecuencia de
            pago.
          </Reveal>
        </section>

        {/* FAQ */}
        <FaqSection heading="Lo que más nos preguntan sobre los precios." items={faqs} />

        {/* CTA final */}
        <UseCaseCta
          heading={`Empezá gratis. ${TRIAL} sin tarjeta`}
          subtitle={`Si después de los ${TRIAL} decidís que Mesanube no es para tu local, no perdiste nada.`}
          primaryLabel={`Probá el Plan ${PLAN_SMALL.name} gratis`}
          secondary={
            <>
              <CtaLink href="#precios" variant="soft">
                Probá el Plan {PLAN_MEDIUM.name} gratis
              </CtaLink>
              <p className="text-center text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
                ¿Tenés preguntas antes de empezar?{' '}
                <DemoLink tone="dark">Escribinos por WhatsApp →</DemoLink>
              </p>
            </>
          }
        />
      </main>

      <SiteFooter />
    </div>
  )
}
