import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { ContactForm } from '@/components/shared/ContactForm'
import FloatingNav from '@/components/shared/FloatingNav'
import Reveal from '@/components/shared/Reveal'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { UseCaseHero, UseCaseTopNav } from '@/components/usecase'
import { SUPPORT_EMAIL, SUPPORT_EMAIL_URL, WHATSAPP_URL } from '@/config/contact'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

const title = 'Contacto, Mesanube'
const description = 'Escribinos si tenés dudas sobre Mesanube, querés una demo o ya sos cliente y necesitás ayuda. Te respondemos por email o WhatsApp.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/contacto',
  },
  openGraph: mergeOpenGraph({
    title,
    description,
    url: '/contacto',
  }),
}

export default function ContactoPage() {
  return (
    <div className="relative flex flex-col items-center px-4 pb-5 sm:px-6 lg:px-10">
      <FloatingNav />
      <UseCaseTopNav />

      <UseCaseHero
        eyebrow="Contacto"
        heading="Escribinos, te respondemos nosotros."
        subtitle="¿Tenés una duda, una propuesta o ya sos cliente y necesitás una mano? Completá el formulario o escribinos directo por WhatsApp."
        image={{ src: '/photos/cafeteria-atencion-cliente.jpg', alt: 'Equipo de Mesanube' }}
      />

      <main className="mx-auto flex w-full max-w-[1500px] flex-col items-start">
        <section className="flex w-full flex-col items-start gap-[40px] border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:flex-row lg:gap-[60px] lg:pb-[120px]">
          <Reveal className="flex w-full flex-[1_0_0] flex-col items-start gap-6 lg:max-w-[380px]">
            <h2 className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--olive)]">
              Otras formas de contactarnos
            </h2>
            <p className="text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]">
              Si preferís no llenar un formulario, también podés escribirnos directo.
            </p>
            <div className="flex flex-col items-start gap-4">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-[var(--olive)] underline underline-offset-2 transition-colors hover:text-[var(--heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--olive)] focus-visible:outline-offset-2"
              >
                WhatsApp
              </Link>
              <Link
                href={SUPPORT_EMAIL_URL}
                className="text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-[var(--olive)] underline underline-offset-2 transition-colors hover:text-[var(--heading)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--olive)] focus-visible:outline-offset-2"
              >
                {SUPPORT_EMAIL} →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={1} className="w-full flex-[1.2_0_0]">
            <ContactForm />
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
