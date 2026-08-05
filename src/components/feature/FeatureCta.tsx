import React from 'react'

import { DemoButton, TrialButton } from '@/components/shared/CtaButtons'
import Reveal from '@/components/shared/Reveal'

import { BODY, EYEBROW, TITLE, TITLE_STYLE } from './styles'

type FeatureCtaProps = {
  id?: string
  eyebrow?: string
  heading: string
  body: string
  primaryLabel?: string
  demoLabel?: string
  showDemoButton?: boolean,
  /** Optional secondary link row (e.g. "Ver todos los planes"). */
  links?: React.ReactNode
}

/**
 * Feature-page closing CTA: two columns — eyebrow + heading on the left,
 * supporting text and CTA buttons on the right.
 */
export function FeatureCta({
  id = 'contacto',
  eyebrow = 'Empezá hoy',
  heading,
  body,
  primaryLabel = 'Empezá tu prueba gratuita',
  demoLabel = 'Agendá una demo',
  links,
  showDemoButton = false
}: FeatureCtaProps) {
  return (
    <Reveal
      as="section"
      id={id}
      className="w-full max-w-[1500px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className={`mb-5 ${EYEBROW}`}>{eyebrow}</p>
          <h2 className={TITLE} style={TITLE_STYLE}>
            {heading}
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <p className={BODY}>{body}</p>
          <div className="flex flex-wrap gap-3">
            <TrialButton>{primaryLabel}</TrialButton>
            {showDemoButton && <DemoButton>{demoLabel}</DemoButton>}
          </div>
          {links && <div className="flex flex-wrap gap-4 pt-2">{links}</div>}
        </div>
      </div>
    </Reveal>
  )
}
