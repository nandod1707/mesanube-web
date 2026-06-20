import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { TrialButton } from '@/components/shared/CtaButtons'
import Reveal from '@/components/shared/Reveal'

const headline = 'Facturación ARCA incluida, sin vueltas y sin apps adicionales'

export function ArcaHeroSection() {
  return (
    <>
      {/* Top nav */}
      <nav className="flex w-full max-w-[1500px] items-center justify-between py-5">
        <Link
          href="/"
          className="text-[22px] leading-[1.2] tracking-[-1px] text-black sm:text-[28px]"
          style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500 }}
        >
          mesanube
        </Link>
        <TrialButton>Probá gratis</TrialButton>
      </nav>

      {/* Hero */}
      <header className="w-full max-w-[1500px] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]">
        <Reveal>
          <p className="mb-5 font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[#485c11]">
            Funciones / Facturación electrónica ARCA
          </p>
          <h1
            className="word-rise mb-6 font-display text-black"
            style={{
              fontSize: 'clamp(56px, 10vw, 130px)',
              lineHeight: 0.9,
              letterSpacing: 'clamp(-2px, -0.4vw, -5px)',
            }}
          >
            {headline.split(' ').map((word, i) => (
              <span key={i} style={{ animationDelay: `${i * 60}ms`, marginRight: '0.22em' }}>
                {word}
              </span>
            ))}
          </h1>
          <p className="mb-8 max-w-[560px] text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
            Cumplís con ARCA (ex-AFIP) desde el mismo sistema donde tomás el pedido y cerrás la
            mesa. Sin instalar nada más, sin procesos manuales, sin esperar que alguien se acuerde.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <TrialButton>Probá {process.env.NEXT_PUBLIC_TRIAL_PERIOD} gratis</TrialButton>
            <p className="text-[13px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]">
              Sin tarjeta de crédito. Sin permanencia.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1} className="mt-12 w-full">
          <div
            className="zoom-wrap relative w-full overflow-hidden rounded-[20px] bg-[#f5f5f0]"
            style={{ aspectRatio: '16/7' }}
          >
            <Image
              src="/figma/hero-mountains.png"
              alt="Facturación electrónica ARCA integrada en Mesanube"
              fill
              sizes="(max-width: 1500px) 100vw, 1500px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </header>
    </>
  )
}
