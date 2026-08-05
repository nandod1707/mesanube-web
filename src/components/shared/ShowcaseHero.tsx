import Image from 'next/image'
import { TRIAL_PERIOD } from '@/config/site'
import React from 'react'

import { DemoLink, TrialButton } from '@/components/shared/CtaButtons'
import Reveal from '@/components/shared/Reveal'

type Align = 'left' | 'center' | 'right'

type ShowcaseHeroProps = {
  /** Small uppercase mono label above the headline (optional). */
  eyebrow?: string
  /** Headline line(s) — each line rises in as its own span. */
  heading: string | string[]
  /** A single paragraph or several. */
  subtitle: string | string[]
  /** CTA row. Defaults to a trial button + demo link. */
  cta?: React.ReactNode
  /** Small line under the CTAs (e.g. social proof). */
  note?: React.ReactNode
  /** Panel background photo. Omit for the solid olive panel. */
  background?: { src: string; alt: string }
  /** Device screen image floating in the panel. */
  preview?: { src: string; alt: string; width: number; height: number }
  /** Horizontal position of the floating preview. Defaults to center. */
  align?: Align
}

const DEFAULT_PREVIEW = {
  src: '/api/media/file/inner-screen-1.webp',
  alt: 'Panel de control de Mesanube',
  width: 1741,
  height: 993,
}

const ALIGN_X: Record<Align, string> = {
  left: 'left-[4%]',
  center: 'left-1/2 -translate-x-1/2',
  right: 'right-[4%]',
}

/**
 * Home-style hero: centered text block over a wide panel with a floating device
 * preview. The panel background can be a solid brand color (default) or a photo,
 * and the preview can sit left / center / right within it.
 */
export function ShowcaseHero({
  eyebrow,
  heading,
  subtitle,
  cta,
  note,
  background,
  preview = DEFAULT_PREVIEW,
  align = 'center',
}: ShowcaseHeroProps) {
  const lines = Array.isArray(heading) ? heading : [heading]
  const subtitles = Array.isArray(subtitle) ? subtitle : [subtitle]

  return (
    <header className="flex w-full max-w-[1500px] flex-col items-start gap-[80px] overflow-clip sm:gap-[160px] lg:gap-[240px]">
      <div className="flex w-full flex-col items-center gap-8">
        {eyebrow && (
          <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
            {eyebrow}
          </p>
        )}
        <h1
          className="word-rise w-full text-center font-display text-[var(--heading)]"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 60px)',
            lineHeight: 1.1,
            letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
          }}
        >
          {lines.map((line, i) => (
            <React.Fragment key={i}>
              {i > 0 && <br />}
              <span>{line}</span>
            </React.Fragment>
          ))}
        </h1>

        {subtitles.map((s, i) => (
          <p
            key={i}
            className="w-full max-w-[600px] text-center text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]"
          >
            {s}
          </p>
        ))}

        <div className="flex flex-wrap items-center justify-center gap-3">
          {cta ?? (
            <>
              <TrialButton>Probá {TRIAL_PERIOD} gratis</TrialButton>
              <DemoLink tone="dark">Agendá una demo →</DemoLink>
            </>
          )}
        </div>

        {note && (
          <p className="text-center text-[16px] leading-[1.4] tracking-[-0.09px] text-[var(--caption)]">
            {note}
          </p>
        )}
      </div>

      <Reveal immediate delay={1} className="relative w-full">
        <div
          className={`relative h-[220px] w-full overflow-visible rounded-[20px] sm:h-[280px] sm:rounded-[24px] lg:h-[362px] lg:rounded-[30px] ${
            background ? 'bg-[var(--media-bg)]' : 'bg-[var(--hero-bg)]'
          }`}
        >
          {background && (
            <>
              <Image
                src={background.src}
                alt={background.alt}
                fill
                sizes="(max-width: 1500px) 100vw, 1500px"
                className="rounded-[20px] object-cover sm:rounded-[24px] lg:rounded-[30px]"
                priority
              />
              <div
                className="absolute inset-0 rounded-[20px] bg-black/10 sm:rounded-[24px] lg:rounded-[30px]"
                aria-hidden="true"
              />
            </>
          )}

          {/* Positioning wrapper (align X + center Y); the inner element floats. */}
          <div className={`absolute top-1/2 w-[88%] max-w-[907px] -translate-y-1/2 ${ALIGN_X[align]}`}>
            <div
              aria-label="Vista previa del panel de Mesanube mostrando comandas, mesas y reportes"
              className="ipad-float-y relative w-full overflow-hidden rounded-[14px] border-x-2 border-t-2 border-white/50 bg-black shadow-[0_-4px_20px_rgba(0,0,0,0.1)] sm:rounded-[18px] lg:rounded-[24px]"
              style={{ aspectRatio: '907 / 644' }}
            >
              <div className="absolute inset-[2%_2%_0_2%] overflow-hidden rounded-[10px] sm:rounded-[14px] lg:rounded-[16px]">
                <Image
                  src={preview.src}
                  alt={preview.alt}
                  width={preview.width}
                  height={preview.height}
                  sizes="(max-width: 1024px) 90vw, 870px"
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </header>
  )
}
