import React from 'react'

import { DemoButton, TrialButton } from '@/components/shared/CtaButtons'
import Reveal from '@/components/shared/Reveal'

import { BODY, TITLE_STYLE } from './styles'

type UseCaseCtaProps = {
  id?: string
  heading: string
  subtitle: string
  primaryLabel?: string
  demoLabel?: string
}

/** Centered closing CTA: big heading, subtitle, trial + demo buttons. */
export function UseCaseCta({
  id = 'contacto',
  heading,
  subtitle,
  primaryLabel = 'Empezá tu prueba gratuita',
  demoLabel = 'Agendá una demo de 20 minutos',
}: UseCaseCtaProps) {
  return (
    <section
      id={id}
      className="flex w-full max-w-[1500px] flex-col items-center gap-10 border-t border-[var(--divider)] px-6 py-[80px] sm:px-24 sm:py-[120px] lg:px-[300px]"
    >
      <Reveal as="p" className="w-full text-center font-display text-[var(--heading)]" style={TITLE_STYLE}>
        {heading}
      </Reveal>
      <Reveal delay={1} as="p" className={`w-full text-center ${BODY}`}>
        {subtitle}
      </Reveal>
      <Reveal delay={2} className="flex w-full flex-col items-center gap-4">
        <TrialButton className="w-full">{primaryLabel}</TrialButton>
        <DemoButton>{demoLabel}</DemoButton>
      </Reveal>
    </section>
  )
}
