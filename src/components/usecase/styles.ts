/**
 * Shared style constants for the /para/* (use-case) section components.
 * These capture the exact shipped type scale so every section renders
 * identically. Colors go through the canonical tokens.
 */

// Inline styles for the clamped headings (kept inline to match the shipped pages exactly).
export const TITLE_STYLE = {
  fontSize: 'clamp(36px, 5.5vw, 60px)',
  lineHeight: 0.9,
  letterSpacing: 'clamp(-1px, -0.2vw, -1.8px)',
} as const

export const BIG_NUMBER_STYLE = {
  fontSize: 'clamp(56px, 6vw, 80px)',
  letterSpacing: 'clamp(-2px, -0.3vw, -3.2px)',
} as const

export const QUOTE_STYLE = {
  fontSize: 'clamp(24px, 3vw, 40px)',
  lineHeight: 1,
  letterSpacing: 'clamp(-0.8px, -0.2vw, -1.6px)',
} as const

// Shared class strings.
export const EYEBROW = 'font-mono text-[14px] leading-[1.4] tracking-[-0.14px] text-[var(--olive)]'
export const TITLE = 'w-full font-display text-[var(--heading)]'
export const BODY = 'text-[18px] leading-[1.4] tracking-[-0.09px] text-[var(--body)]'
export const CARD_TITLE =
  'w-full font-display text-[18px] leading-none tracking-[-0.54px] text-[var(--heading)]'
