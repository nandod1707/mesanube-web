/**
 * Shared style constants for the /funciones/* (feature) section components.
 * Same type scale as the use-case pages, but eyebrows are uppercase and the
 * sections are two-column.
 */

export const TITLE_STYLE = {
  fontSize: 'clamp(36px, 5.5vw, 60px)',
  lineHeight: 0.9,
  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
} as const

export const STEP_NUMBER_STYLE = {
  fontSize: 'clamp(56px, 6vw, 80px)',
  lineHeight: 1,
} as const

export const QUOTE_STYLE = {
  fontSize: 'clamp(24px, 3vw, 40px)',
  lineHeight: 1.1,
  letterSpacing: '-0.5px',
} as const

export const EYEBROW =
  'font-mono text-[14px] uppercase leading-[1.4] tracking-[-0.14px] text-[var(--olive)]'
export const TITLE = 'font-display text-[var(--heading)]'
export const BODY = 'text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]'
export const CARD_TITLE =
  'font-display text-[18px] leading-none tracking-[-0.54px] text-[var(--heading)]'
