'use client'

import { useState, useTransition, type FormEvent } from 'react'

/**
 * Inline contact form for /contacto — same fields/visual language as the
 * TrialDialog form, but rendered on the page instead of in a modal. Submits
 * to /api/contact with mode: 'contact', which forwards it to HubSpot.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    startTransition(async () => {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, mode: 'contact' }),
        })
        if (!res.ok) throw new Error('submit failed')
        setSubmitted(true)
      } catch {
        setError('No pudimos enviar tu mensaje. Probá de nuevo o escribinos por WhatsApp.')
      }
    })
  }

  if (submitted) {
    return (
      <div className="w-full rounded-[20px] border border-[var(--divider)] bg-white px-7 py-8 sm:px-8">
        <p className="font-display text-[28px] leading-none tracking-[-0.5px] text-[var(--heading)]">
          ¡Listo!
        </p>
        <p className="mt-3 text-[16px] leading-[1.4] tracking-[-0.08px] text-[var(--body)]">
          Recibimos tu mensaje. Te respondemos a la brevedad.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-[20px] border border-[var(--divider)] bg-white px-7 py-7 sm:px-8"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Field label="Tu nombre" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="WhatsApp (opcional)" name="phone" type="tel" autoComplete="tel" />
        <Field label="Nombre del local (opcional)" name="business" autoComplete="organization" />
      </div>

      <div className="mt-3">
        <Textarea label="Contanos qué necesitás" name="message" rows={4} required />
      </div>

      {error && <p className="mt-4 text-[14px] text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[var(--olive)] px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-white transition-[background-color,transform] duration-300 hover:bg-[var(--olive-dark)] active:scale-[0.98] disabled:opacity-60"
      >
        {pending ? 'Enviando...' : 'Enviar mensaje'}
      </button>

      <p className="mt-4 text-center text-[13px] leading-[1.4] tracking-[-0.05px] text-[var(--caption)]">
        Te respondemos por email o WhatsApp. Sin spam.
      </p>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] leading-[1.4] tracking-[-0.05px] text-[var(--body)]">
        {label}
        {required && <span className="ml-1 text-[var(--olive)]">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-[10px] border border-[var(--divider)] bg-white px-3.5 py-2.5 text-[15px] text-[var(--heading)] outline-none transition-colors placeholder:text-[var(--caption)] focus:border-[var(--olive)]"
      />
    </label>
  )
}

function Textarea({
  label,
  name,
  rows = 3,
  required,
}: {
  label: string
  name: string
  rows?: number
  required?: boolean
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] leading-[1.4] tracking-[-0.05px] text-[var(--body)]">
        {label}
        {required && <span className="ml-1 text-[var(--olive)]">*</span>}
      </span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        className="resize-none rounded-[10px] border border-[var(--divider)] bg-white px-3.5 py-2.5 text-[15px] text-[var(--heading)] outline-none transition-colors placeholder:text-[var(--caption)] focus:border-[var(--olive)]"
      />
    </label>
  )
}
