import React from 'react'

import Reveal from '@/components/shared/Reveal'

type Step = {
  num: string
  title: string
  body: string
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Configurás tu CUIT y datos fiscales en el sistema',
    body: 'Los datos van una sola vez, en la pantalla de configuración. Nombre del negocio, CUIT, condición ante ARCA.',
  },
  {
    num: '02',
    title: 'Vinculás Mesanube con tu cuenta de ARCA',
    body: 'El proceso usa el sistema de delegación oficial de ARCA, el mismo que usaría tu contador. No le das la contraseña de ARCA a nadie: le das permiso a Mesanube para emitir en tu nombre.',
  },
  {
    num: '03',
    title: 'Probás con una factura de prueba',
    body: 'Antes de abrir, emitís un comprobante de prueba para verificar que todo funciona. Si algo no está bien, soporte te ayuda a resolverlo en el momento.',
  },
  {
    num: '04',
    title: 'Empezás a facturar desde el primer pedido',
    body: 'A partir de ahí, cada venta tiene su comprobante disponible. Cerrás la venta, elegís el tipo de comprobante, y el ticket sale impreso o se manda por email al cliente.',
  },
]

export function ArcaPasoAPasoSection() {
  return (
    <section className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
      <Reveal className="mb-12 lg:pr-[400px]">
        <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
          Configuración
        </p>
        <h2
          className="mb-5 font-display text-black"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 60px)',
            lineHeight: 0.9,
            letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
          }}
        >
          Conectar Mesanube con ARCA lleva menos de 15 minutos
        </h2>
        <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
          Paso a paso, sin depender de tu contador para empezar.
        </p>
      </Reveal>

      <div className="flex flex-col">
        {steps.map((step) => (
          <Reveal key={step.num}>
            <div className="grid grid-cols-[3rem_1fr] gap-6 border-t border-[#e9e9e9] py-10 sm:grid-cols-[5rem_1fr]">
              <span
                className="select-none font-display leading-none text-[#929292]"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
                aria-hidden="true"
              >
                {step.num}
              </span>
              <div>
                <h3 className="mb-3 text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black">
                  {step.title}
                </h3>
                <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                  {step.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
