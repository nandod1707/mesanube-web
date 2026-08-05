import type { Metadata } from 'next'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import { FaqSection } from '@/components/shared/FaqSection'
import FloatingNav from '@/components/shared/FloatingNav'
import { SiteFooter } from '@/components/shared/SiteFooter'
import {
  FeatureChecklists,
  FeatureCta,
  FeatureHero,
  FeatureMedia,
  FeatureSplit,
  FeatureTopNav,
  StepsRow,
} from '@/components/feature'

export const metadata: Metadata = {
  title: 'Arqueo de Caja para Restaurantes. Control de Efectivo por Turno | Mesanube',
  description:
    'Arqueo de caja integrado al POS. Controlá efectivo, transferencias y tarjetas por turno. Diferencias marcadas automáticamente. Para restaurantes y cafeterías argentinas.',
}

/* ── Static data ── */

const steps = [
  { number: '01', title: 'Contás el efectivo en caja', description: 'Al final del turno, contás el dinero físico. Lo ingresás en el sistema.' },
  { number: '02', title: 'El sistema cruza los datos', description: 'Mesanube compara el efectivo que contaste con el total de ventas en efectivo registradas durante el turno, descontando egresos. Si hay diferencia, la muestra.' },
  { number: '03', title: 'Cerrás el turno y guardás el historial', description: 'El cierre queda registrado con fecha, hora, usuario y el detalle completo de ingresos y egresos. Podés consultarlo después desde el panel.' },
]

const faqItems = [
  { q: '¿Qué es un arqueo de caja y para qué sirve?', a: 'Un arqueo de caja es el proceso de verificar que el dinero físico en caja coincide con las ventas registradas en el sistema. Sirve para detectar errores, faltantes o sobrantes, y para llevar un registro ordenado de lo que entra y sale de caja en cada turno.' },
  { q: '¿El arqueo incluye los pagos con tarjeta y transferencia?', a: 'Sí. El arqueo de Mesanube registra todos los medios de pago: efectivo, tarjeta, transferencia y billeteras digitales. Cada uno aparece por separado en el resumen del turno.' },
  { q: '¿Se pueden registrar pagos a proveedores desde el sistema?', a: 'Sí. Los egresos de caja, incluyendo pagos a proveedores, se registran durante el turno y quedan incluidos en el arqueo.' },
  { q: '¿Cuántos turnos puedo manejar por día?', a: 'Sin límite. Si tenés turno del mediodía y turno de la noche, podés cerrar y abrir un turno nuevo. Cada cierre queda en el historial.' },
  { q: '¿Quién puede ver el arqueo?', a: 'El arqueo solo es visible para roles con permiso de caja: dueño y encargado. Los mozos no tienen acceso.' },
  { q: '¿El historial de arqueos se guarda?', a: 'Sí. Todos los cierres quedan guardados en el sistema. Podés consultar cualquier turno pasado con fecha, monto y detalle de ingresos y egresos.' },
]

/* ── Page ── */

export default function ArqueoDeCajaPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <FeatureTopNav />

      <FeatureHero
        eyebrow="Funciones, Arqueo de caja"
        heading="Cerrá el turno con los números que corresponden"
        subtitle="Sin calculadora. Sin cuentas a mano. Sin diferencias que no podés explicar a las 2 de la madrugada. El arqueo de Mesanube lleva el control durante todo el turno y te da el resumen listo al cierre."
        image={{ src: '/figma/hero-mountains.png', alt: 'Arqueo de caja de Mesanube en el panel de administración' }}
        ctaLabel={`Probá ${TRIAL_PERIOD} gratis`}
        secondary={{ href: '#cierre', label: 'Ver el cierre de turno' }}
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <FeatureSplit
          eyebrow="El problema"
          heading="La caja que nunca cierra, y el estrés que genera"
          paragraphs={[
            'Cerrar el turno y que los números no cierren es una de las sensaciones más frustrantes del rubro. Y pasa seguido: el efectivo sobra o falta, no sabés si alguien cobró mal, si el cambio se entregó de más, o si simplemente te perdiste un pago por transferencia que no registraste.',
            'En muchos locales, el arqueo es un ritual nocturno de media hora con calculadora, papeles y la sensación de que algo se te escapó.',
            'El arqueo de Mesanube trabaja durante todo el turno, no solo al cierre. Cada pago que entra, cada egreso que se registra, va sumando en tiempo real. Cuando llegás al cierre, el trabajo ya está hecho.',
          ]}
        />

        <FeatureChecklists
          id="que-registra"
          eyebrow="Qué registra"
          heading="Todo lo que entra y sale de caja"
          columns={[
            {
              label: 'Ingresos',
              items: ['Ventas en efectivo', 'Ventas con tarjeta (débito y crédito)', 'Ventas por transferencia o QR'],
            },
            {
              label: 'Egresos',
              items: ['Retiros de caja (del dueño o encargado)', 'Pagos a proveedores', 'Gastos operativos del turno'],
              note: (
                <>
                  <strong className="text-[var(--heading)]">Al cierre:</strong> el sistema muestra el
                  efectivo teórico vs. el efectivo real que contás en caja. La diferencia, si existe,
                  aparece marcada. No tenés que hacer el cálculo: ya está hecho.
                </>
              ),
            },
          ]}
        />

        <StepsRow
          id="cierre"
          eyebrow="Cierre de turno"
          heading="Tres pasos, menos de cinco minutos"
          steps={steps}
          layout="list"
        />

        <FeatureMedia
          eyebrow="Para el dueño que no siempre está"
          heading="Control sin estar presente"
          paragraphs={[
            'Si no estás en el local todos los turnos, el arqueo de Mesanube te permite revisar el cierre desde tu celular. Ves el historial de cierres, los montos por turno, y si hubo diferencias sin tener que preguntarle a nadie.',
            'No reemplaza la confianza en tu equipo. Pero agrega información donde antes no había ninguna.',
          ]}
          image={{ src: '/figma/columns.png', alt: 'Historial de arqueos de caja en Mesanube' }}
        />

        <FaqSection heading="Lo que nos preguntan seguido" items={faqItems} />

        <FeatureCta
          heading="Cerrá la caja sin estrés. Probalo gratis"
          body={`${TRIAL_PERIOD} sin ingresar tu tarjeta. El arqueo está incluido en todos los planes.`}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
