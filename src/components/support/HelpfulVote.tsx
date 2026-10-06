'use client'

import React, { useEffect, useState } from 'react'

type Vote = 'yes' | 'no'
type State = 'idle' | 'sending' | Vote | 'error'

const storageKey = (articleId: string) => `support-vote:${articleId}`

// Storage can be missing or throw (private mode, blocked site data); voting still works without it.
const readStoredVote = (articleId: string): Vote | null => {
  try {
    const value = window.localStorage.getItem(storageKey(articleId))
    return value === 'yes' || value === 'no' ? value : null
  } catch {
    return null
  }
}

const storeVote = (articleId: string, vote: Vote) => {
  try {
    window.localStorage.setItem(storageKey(articleId), vote)
  } catch {
    // ignore
  }
}

const BUTTON =
  'rounded-full border border-[var(--divider)] bg-white px-5 py-2 text-[14px] font-bold leading-[1.4] text-[var(--heading)] transition-colors duration-150 hover:border-[var(--olive)] hover:bg-[var(--olive-tint)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--olive)] disabled:opacity-60'

/** "¿Te sirvió?" yes/no vote. One vote per article per browser. */
export function HelpfulVote({ articleId }: { articleId: string }) {
  const [state, setState] = useState<State>('idle')

  useEffect(() => {
    const stored = readStoredVote(articleId)
    if (stored) setState(stored)
  }, [articleId])

  const send = async (vote: Vote) => {
    setState('sending')
    try {
      const response = await fetch(`/api/support-articles/${articleId}/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: vote }),
      })
      if (!response.ok) throw new Error(String(response.status))
      storeVote(articleId, vote)
      setState(vote)
    } catch {
      setState('error')
    }
  }

  if (state === 'yes' || state === 'no') {
    return (
      <p role="status" className="border-t border-[var(--divider)] pt-6 text-[16px] text-[var(--body)]">
        {state === 'yes'
          ? '¡Gracias! Nos alegra que te haya servido.'
          : 'Gracias por avisarnos. Vamos a mejorar este artículo. Si necesitás ayuda ahora, escribinos.'}
      </p>
    )
  }

  return (
    <div className="flex flex-wrap items-center gap-3 border-t border-[var(--divider)] pt-6">
      <p className="text-[16px] font-bold text-[var(--heading)]">¿Te sirvió este artículo?</p>
      <button type="button" className={BUTTON} disabled={state === 'sending'} onClick={() => send('yes')}>
        Sí
      </button>
      <button type="button" className={BUTTON} disabled={state === 'sending'} onClick={() => send('no')}>
        No
      </button>
      {state === 'error' && (
        <p role="alert" className="w-full text-[14px] text-[var(--body)]">
          No pudimos registrar tu voto. Probá de nuevo en un rato.
        </p>
      )}
    </div>
  )
}
