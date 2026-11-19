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
  /** Replace the default demo button (e.g. a WhatsApp link). Pass `null` to show only the trial CTA. */
  secondary?: React.ReactNode
  /** Stretch the trial CTA to the full column width (default) or keep it at its natural width. */
  fullWidth?: boolean
}

/** Centered closing CTA: big heading, subtitle, trial + demo (or custom) CTAs. */
export function UseCaseCta({
  id = 'contacto',
  heading,
  subtitle,
  primaryLabel = 'Empezá tu prueba gratuita',
  demoLabel = 'Agendá una demo de 20 minutos',
  secondary,
  fullWidth = true,
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
        <TrialButton className={fullWidth ? 'w-full' : undefined}>{primaryLabel}</TrialButton>
        {secondary === undefined ? <DemoButton>{demoLabel}</DemoButton> : secondary}
      </Reveal>
    </section>
  )
}
