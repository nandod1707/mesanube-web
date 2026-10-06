import React from 'react'

import { BODY, EYEBROW, TITLE, TITLE_STYLE } from '@/components/usecase/styles'

type SupportHeaderProps = {
  eyebrow: string
  heading: string
  subtitle?: string
  children?: React.ReactNode
}

/** Text-only header shared by the /soporte index, section and search pages. */
export function SupportHeader({ eyebrow, heading, subtitle, children }: SupportHeaderProps) {
  return (
    <header className="flex w-full max-w-[1500px] flex-col items-start gap-6 pt-[40px] pb-[60px] sm:pt-[60px]">
      <p className={EYEBROW}>{eyebrow}</p>
      <h1 className={TITLE} style={TITLE_STYLE}>
        {heading}
      </h1>
      {subtitle && <p className={`max-w-[52ch] ${BODY}`}>{subtitle}</p>}
      {children}
    </header>
  )
}
