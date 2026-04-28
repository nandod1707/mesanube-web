import React from 'react'

import { TrialButton, DemoButton } from '@/components/shared/CtaButtons'
import Reveal from '@/components/shared/Reveal'

export function ArcaCtaSection() {
  return (
    <Reveal
      as="section"
      id="contacto"
      className="w-full max-w-[1500px] border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
            Empezá hoy
          </p>
          <h2
            className="font-display text-black"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
            }}
          >
            Probá la facturación ARCA de Mesanube — 30 días gratis
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Sin tarjeta de crédito. Sin permanencia. Si tenés dudas sobre la configuración con tu
            situación fiscal específica, escribinos y te orientamos antes de empezar.
          </p>
          <div className="flex flex-wrap gap-3">
            <TrialButton>Empezá tu prueba gratuita</TrialButton>
            <DemoButton>Agendá una demo</DemoButton>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
