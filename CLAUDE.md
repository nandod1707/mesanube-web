# Mesanube Web

Marketing website for Mesanube, an Argentine POS system for restaurants, cafés, and bars. Built with Next.js 15 + Payload CMS 3 + MongoDB.

## Quick Reference

- **Package manager**: yarn
- **Node version**: 22
- **Dev server**: `yarn dev` → http://localhost:3000
- **Admin panel**: http://localhost:3000/admin
- **Type generation**: `yarn generate:types` (run after schema changes)
- **Import map**: `yarn generate:importmap` (run after creating/modifying components)
- **Type check**: `tsc --noEmit`
- **Lint**: `yarn lint` / `yarn lint:fix`
- **Tests**: `yarn test` (integration + e2e) / `yarn test:int` (vitest) / `yarn test:e2e` (playwright)
- **Build**: `yarn build`

## Architecture

```
src/
├── app/
│   ├── (frontend)/          # Public-facing routes (custom pages + dynamic [slug])
│   └── (payload)/           # Payload admin panel
├── collections/             # Payload collection configs (Pages, Posts, Media, Categories, Users)
├── globals/                 # Header + Footer globals
├── blocks/                  # Payload blocks (ArchiveBlock, Banner, CallToAction, Content, etc.)
├── components/              # React components. Marketing sections: usecase/ (/para/*, funciones index) + feature/ (/funciones/*); shared/ = building blocks. See .claude/rules/frontend.md §6
├── fields/                  # Reusable field configs (defaultLexical)
├── hooks/                   # Payload hook functions
├── access/                  # Access control functions
├── plugins/                 # Payload plugin configs (SEO, redirects, forms, search, nested-docs)
├── heros/                   # Hero section components
├── Header/ & Footer/        # Site header/footer configs + components
├── providers/               # React context providers
├── search/                  # Search field overrides + sync hooks
├── utilities/               # Shared utility functions
├── payload.config.ts        # Main Payload config
└── payload-types.ts         # Auto-generated types (do not edit manually)
```

## Project Context

Mesanube is a POS system for Argentine gastronomy businesses. This website serves as the marketing/content site — the POS product itself is a separate application. See `dev-resources/Mesanube_Arquitectura_Web_2026.md` for the full content architecture and SEO strategy.

### Key business details
- Target market: restaurants, cafés, bars, pizzerias, parrillas, dark kitchens in Argentina
- Main differentiators: native ARCA billing, Argentine-first design, upcoming loyalty/gamification module
- Pricing: single source of truth in `src/config/plans.ts` (plans Chico / Mediano / Grande) —
  interpolate names/prices in copy, never hardcode. Billing handled externally.
- Domain: mesanube.ar

### Content structure
- **Homepage**: hardcoded Next.js page (not managed via Payload). Still on the legacy "green" section
  components (`components/Homepage/*`) — pending migration to the token system.
- **Marketing pages** (`/para/*`, `/funciones/*`, `/precios`, `/soporte`, `/landing/*`): hardcoded
  Next.js pages built as **data + composition** using the section-component collections
  (`components/usecase/` and `components/feature/`), **not** Payload blocks. See
  `.claude/rules/frontend.md §6` for which collection to use.
- **Blog/posts**: managed entirely through Payload admin panel by editors (these use Payload blocks).
- **Language**: Spanish only (Argentine voseo — "vos/probá/organizá", never "tú/prueba/organiza")

## Content & Copy Rules

All user-facing text must follow these rules:
- Use **voseo rioplatense**: "organizá", "probá", "empezá" (never tuteo)
- Reference **local context**: ARCA (not AFIP), peso, Argentina
- Be **concrete and direct**: "Pedidos a cocina en 3 segundos" not "Mejorá la eficiencia operativa"
- Be **empathetic with the business owner**: "Sabemos lo que es cerrar la caja a medianoche"
- Stay **anti-corporate**: "Sin vueltas, sin letra chica" not "Solución integral end-to-end"
- **No emojis** in user-facing copy or as decorative UI icons (no 🍕📊⚡ etc.). Functional typographic
  symbols like the `✓` checkmark in feature lists and the `→` arrow in link labels are fine.

## Tech Stack

- **Framework**: Next.js 15 (App Router, React 19, Server Components)
- **CMS**: Payload CMS 3.71
- **Database**: MongoDB (via mongoose adapter)
- **Styling**: Tailwind CSS 3 + shadcn/ui components
- **Rich text**: Lexical editor
- **Plugins**: SEO, redirects, form-builder, search, nested-docs
- **Image processing**: sharp
- **Testing**: Vitest (integration) + Playwright (e2e)
- **Hosting**: Vercel (auto-deploy)

## Environments

- **Local**: `yarn dev` → localhost:3000
- **Dev**: Vercel preview deployments (PR branches)
- **Production**: Vercel production (main branch)

## Development Guidelines

### Payload CMS
- Follow all patterns documented in `AGENTS.md` — especially security patterns
- Always pass `req` to nested operations in hooks (transaction safety)
- Set `overrideAccess: false` when passing `user` to Local API
- Use context flags to prevent infinite hook loops
- Run `yarn generate:types` after any collection/field schema changes
- Run `yarn generate:importmap` after creating or modifying admin components
- Component paths in config are strings (file paths), not direct imports

### Frontend
- Server Components by default; only use `'use client'` when state/effects/handlers are needed
- Use `@/` path alias for imports from `src/`
- Use `getPayload({ config })` to access Payload in Server Components and API routes
- Prefer Tailwind utility classes; use shadcn/ui components where available
- Keep bundle size in mind — no unnecessary client-side JS
- **Build marketing pages as data + composition** using the `usecase/` or `feature/` collections
  (see `.claude/rules/frontend.md §6`) — don't write section markup inline or redefine local
  `PrimaryButton`/`SoftButton` (use `shared/CtaLink`).
- **Colors go through the canonical tokens** (`--olive`, `--heading`, `--body`, `--divider`,
  `--surface-dark`, …) — never raw hex. Don't use the deprecated green vars (`--dark-green`,
  `--forest-green`, …) or the legacy green `shared/Section|Container|SectionHeading|Button`.
- **Don't run `yarn build` while `yarn dev` is running** — the production build overwrites the dev
  server's `.next` and breaks it. Verify with `tsc --noEmit` + `yarn lint`; for a production build,
  stop the dev server first.

### Code Quality
- TypeScript strict mode — no `any` types without justification
- Validate with `tsc --noEmit` after modifying code
- English for code, comments, and commit messages
- Spanish (Argentine) for all user-facing content

## Design System

Design tokens and language extracted from the live site. All files live in `dev-resources/design/`.

| File | When to read |
|---|---|
| `DESIGN.md` | Building any new component or page — compact token + component summary |
| `design-language.md` | Full type scale, color inventory, spacing details |
| `motion-tokens.json` | Adding animations, transitions, or scroll effects |
| `design-tokens.json` | Precise W3C token values for any property |
| `figma-variables.json` | Figma handoff or syncing tokens with a design file |
| `variables.css` | Adding or auditing CSS custom properties |
| `shadcn-theme.css` | Configuring or extending the shadcn/ui theme |

### Quick-reference tokens

**Colors** — one palette (olive/black/gray), single accent. Reference by CSS var, never raw hex.
- Heading `var(--heading)` `#000` · Body `var(--body)` `#6f6f6f` · Caption `var(--caption)` `#929292` · Divider `var(--divider)` `#e9e9e9`
- Accent `var(--olive)` `#485c11` · Accent hover `var(--olive-dark)` · Accent soft `var(--olive-soft)` `#dfecc6` · Dark panel `var(--surface-dark)` · Hero bg `var(--hero-bg)` `#8e9c78`
- Deprecated (green system, being removed): `--dark-green` (→ `--heading` text / `--surface-dark` panel), `--forest-green` (→ `--olive`), `--medium-green` (→ `--body`), `--pale-green` (→ `--divider`). Full token table + rules: `.claude/rules/frontend.md §2`.
- ⚠ `--accent` and `--muted` in `globals.css` are **shadcn HSL tokens for the Payload admin**, not the marketing palette — the accent is `--olive`, the muted text is `--caption`.

**Typography**
- Display (headings): `Crimson Text` serif — `var(--font-crimson)` — `font-display` Tailwind class
- Body: `DM Sans` — `var(--font-dm-sans)` — `font-sans`
- Mono (labels/tags): `Roboto Mono` — `var(--font-roboto-mono)` — `font-mono`
- Body size: `15px / 21px` · Label size: `12px` · Button size: `14px`

**Motion**
- Primary easing: `cubic-bezier(0.22, 1, 0.36, 1)` · Reveal: `900ms` · Image zoom: `1200ms`
- Reveal-on-scroll: `.reveal` → `.reveal.is-visible` (IntersectionObserver, 15% threshold)
- Stagger delays: `.reveal-delay-1` (80ms) through `.reveal-delay-4` (320ms)

**Spacing / layout**
- Max content width: `1500px` · Horizontal padding: `px-4 sm:px-6 lg:px-10`
- Section vertical padding: `py-[80px] lg:py-[120px]` · Border separators: `border-[var(--divider)]`

**Never invent new hex values** — reuse the tokens above or extend this list first.

