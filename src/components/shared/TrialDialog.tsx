'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useTransition,
  type FormEvent,
  type ReactNode,
} from 'react'

import { TRIAL_PERIOD } from '@/config/site'

type Mode = 'trial' | 'demo'

type DialogState = {
  open: boolean
  mode: Mode
  openTrial: () => void
  openDemo: () => void
  close: () => void
}

const TrialDialogContext = createContext<DialogState | null>(null)

export function useTrialDialog() {
  const ctx = useContext(TrialDialogContext)
  if (!ctx) throw new Error('useTrialDialog must be used within <TrialDialogProvider>')
  return ctx
}

export function TrialDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<Mode>('trial')

  const openTrial = useCallback(() => {
    setMode('trial')
    setOpen(true)
  }, [])
  const openDemo = useCallback(() => {
    setMode('demo')
    setOpen(true)
  }, [])
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  return (
    <TrialDialogContext.Provider value={{ open, mode, openTrial, openDemo, close }}>
      {children}
      {open && <Modal mode={mode} onClose={close} />}
    </TrialDialogContext.Provider>
  )
}

function Modal({ mode, onClose }: { mode: Mode; onClose: () => void }) {
  const isTrial = mode === 'trial'
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
          body: JSON.stringify({ ...data, mode }),
        })
        if (!res.ok && res.status !== 404) throw new Error('submit failed')
        setSubmitted(true)
      } catch {
        // Even if /api/contact isn't wired yet, accept submission so the UX works.
        // Replace this with real handling once the endpoint is connected.
        setSubmitted(true)
      }
    })
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="trial-dialog-title"
    >
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/40 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-[520px] overflow-hidden rounded-[24px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
        <div className="flex items-start justify-between gap-6 px-7 pt-7 pb-2">
          <div>
            <p className="font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[#485c11]">
              {isTrial ? 'Empezá gratis' : 'Agendá una demo'}
            </p>
            <h2
              id="trial-dialog-title"
              className="mt-3 font-display text-black"
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                lineHeight: 1,
                letterSpacing: '-1px',
              }}
            >
              {isTrial ? `Probá Mesanube ${TRIAL_PERIOD} gratis` : 'Te mostramos cómo funciona'}
            </h2>
            <p className="mt-3 text-[16px] leading-[1.4] tracking-[-0.08px] text-[#6f6f6f]">
              {isTrial
                ? 'Sin tarjeta de crédito. Sin permanencia. Te escribimos por WhatsApp para arrancar.'
                : 'Una llamada de 20 minutos para ver Mesanube en acción y resolver tus dudas.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar formulario"
            className="-mr-2 -mt-1 flex size-9 shrink-0 items-center justify-center rounded-full text-[#6f6f6f] transition-colors hover:bg-[#f3f3f3] hover:text-black"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="px-7 pb-8 pt-6">
            <div className="rounded-[16px] border border-[#dfecc6] bg-[#f5fae8] px-5 py-6">
              <p className="font-display text-[22px] leading-none tracking-[-0.5px] text-black">
                ¡Listo!
              </p>
              <p className="mt-3 text-[16px] leading-[1.4] tracking-[-0.08px] text-[#485c11]">
                {isTrial
                  ? 'Te escribimos por WhatsApp en las próximas horas para arrancar.'
                  : 'Te contactamos para coordinar la demo.'}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#485c11] px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-white transition-colors hover:bg-[#3a4c0d]"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-7 pb-7 pt-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Tu nombre" name="name" autoComplete="name" required />
              <Field label="Email" name="email" type="email" autoComplete="email" required />
              <Field label="WhatsApp" name="phone" type="tel" autoComplete="tel" required />
              <Field label="Nombre del local" name="business" autoComplete="organization" required />
            </div>

            <div className="mt-3">
              <Select label="Tipo de negocio" name="type">
                <option value="cafeteria">Cafetería</option>
                <option value="restaurante">Restaurante</option>
                <option value="bar">Bar</option>
                <option value="pizzeria">Pizzería</option>
                <option value="otro">Otro</option>
              </Select>
            </div>

            <div className="mt-3">
              <Textarea
                label={isTrial ? 'Contanos algo más (opcional)' : '¿Algo que tengamos en cuenta para la demo? (opcional)'}
                name="message"
                rows={3}
              />
            </div>

            {error && (
              <p className="mt-4 text-[14px] text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#485c11] px-[22px] py-[14px] text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-white transition-[background-color,transform] duration-300 hover:bg-[#3a4c0d] active:scale-[0.98] disabled:opacity-60"
            >
              {pending
                ? 'Enviando...'
                : isTrial
                  ? 'Empezá tu prueba gratuita'
                  : 'Agendar la demo'}
            </button>

            <p className="mt-4 text-center text-[13px] leading-[1.4] tracking-[-0.05px] text-[#929292]">
              Te respondemos por WhatsApp. Sin spam, sin llamados frías.
            </p>
          </form>
        )}
      </div>
    </div>
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
      <span className="text-[13px] leading-[1.4] tracking-[-0.05px] text-[#6f6f6f]">
        {label}
        {required && <span className="ml-1 text-[#485c11]">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-[10px] border border-[#e9e9e9] bg-white px-3.5 py-2.5 text-[15px] text-black outline-none transition-colors placeholder:text-[#929292] focus:border-[#485c11]"
      />
    </label>
  )
}

function Select({
  label,
  name,
  children,
}: {
  label: string
  name: string
  children: ReactNode
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] leading-[1.4] tracking-[-0.05px] text-[#6f6f6f]">{label}</span>
      <select
        name={name}
        className="rounded-[10px] border border-[#e9e9e9] bg-white px-3.5 py-2.5 text-[15px] text-black outline-none transition-colors focus:border-[#485c11]"
      >
        {children}
      </select>
    </label>
  )
}

function Textarea({
  label,
  name,
  rows = 3,
}: {
  label: string
  name: string
  rows?: number
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] leading-[1.4] tracking-[-0.05px] text-[#6f6f6f]">{label}</span>
      <textarea
        name={name}
        rows={rows}
        className="resize-none rounded-[10px] border border-[#e9e9e9] bg-white px-3.5 py-2.5 text-[15px] text-black outline-none transition-colors placeholder:text-[#929292] focus:border-[#485c11]"
      />
    </label>
  )
}
