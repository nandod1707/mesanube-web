import React from 'react'

import Reveal from './Reveal'

export type FaqItem = {
  q: string
  a: string
}

type FaqSectionProps = {
  id?: string
  /** Pass `null` to omit the eyebrow (e.g. on the homepage where the heading itself is "Preguntas frecuentes"). */
  eyebrow?: string | null
  heading: string
  items: FaqItem[]
}

export function FaqSection({
  id = 'faq',
  eyebrow = 'Preguntas frecuentes',
  heading,
  items,
}: FaqSectionProps) {
  return (
    <section
      id={id}
      className="flex w-full max-w-[1500px] flex-col items-start border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[60rem] flex-col gap-[40px]">
        <Reveal className="flex w-full flex-col items-start gap-5">
          {eyebrow ? (
            <p className="font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className="w-full font-display text-black"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
            }}
          >
            {heading}
          </h2>
        </Reveal>

        <div className="flex w-full flex-col">
          {items.map((item, i) => (
            <Reveal
              key={item.q}
              delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}
              className="flex w-full flex-col items-start gap-3 border-t border-[#e9e9e9] py-6"
            >
              <p className="w-full text-[18px] font-bold leading-[1.4] tracking-[-0.09px] text-black">
                {item.q}
              </p>
              <p className="w-full text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
                {item.a}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
