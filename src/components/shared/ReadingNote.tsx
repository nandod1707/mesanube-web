import React from 'react'

import { BODY } from '@/components/usecase/styles'

import Reveal from './Reveal'

/**
 * One centered contextual line before a page's closing CTA, pointing to a related blog post (put an
 * `<InlineLink>` inside the sentence). Not a banner: plain body text under a divider.
 */
export function ReadingNote({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full max-w-[1500px] border-t border-[var(--divider)] py-[40px]">
      <Reveal as="p" className={`mx-auto max-w-[720px] text-center ${BODY}`}>
        {children}
      </Reveal>
    </section>
  )
}
