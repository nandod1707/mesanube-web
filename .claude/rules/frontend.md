# Frontend Rules — Mesanube Web

Rules for all frontend work on this project. Follow these precisely. When in doubt, prefer the simpler, more explicit option.

---

## 1. Styling priority order

Apply styles in this order — exhaust each level before moving to the next:

1. **Tailwind utility classes** — for spacing, layout, flex/grid, border-radius, display, overflow, z-index, cursor, transition
2. **CSS custom properties via Tailwind** — `text-[var(--dark-green)]`, `bg-[var(--cream-bg)]`
3. **CSS Modules** — for component-specific rules that Tailwind can't handle cleanly: complex selectors, pseudo-elements, `clip-path`, `animation`, `:hover` with multiple properties, media-query-heavy rules
4. **`globals.css` `@layer components`** — for reusable patterns that appear across many components (e.g. `.btn-primary`, `.section-eyebrow`)
5. **Inline `style={{}}`** — **only** for values that are computed at runtime in JavaScript (e.g. a transform derived from scroll position, an animation delay based on array index, a width set from a JS measurement). Never for static values.

### Bad ❌
```tsx
<h2 style={{ color: 'rgb(36, 52, 29)', fontSize: '2.5rem', fontWeight: 500 }}>
```

### Good ✅
```tsx
<h2 className="text-[var(--dark-green)] text-[2.5rem] font-medium">
```

### Good ✅ (truly dynamic)
```tsx
<div style={{ transitionDelay: `${index * 80}ms` }}>
```

---

## 2. Color tokens

**Never hardcode rgb/hex color values.** All colors are defined as CSS custom properties in `src/app/(frontend)/globals.css`. Always reference them by variable name.

| Variable | Value | Usage |
|---|---|---|
| `--dark-green` | `rgb(36, 52, 29)` | Primary text, dark backgrounds |
| `--medium-green` | `rgb(73, 87, 67)` | Secondary text, descriptions |
| `--forest-green` | `rgb(92, 125, 79)` | Eyebrow labels, checkmarks, accents |
| `--muted-green` | `rgb(115, 126, 109)` | Tertiary text |
| `--pale-green` | `rgb(220, 228, 217)` | Borders, dividers |
| `--light-green-bg` | `rgb(122, 150, 111)` | Decorative backgrounds |
| `--cream-bg` | `rgb(255, 254, 252)` | Page background, section backgrounds |
| `--warm-white` | `rgb(255, 247, 238)` | Card backgrounds, text on dark |
| `--pale-cream` | `rgb(255, 249, 241)` | Alternate section background |
| `--yellow` | `rgb(255, 190, 13)` | Primary CTA, highlights |
| `--warm-yellow` | `rgb(255, 203, 52)` | Yellow hover state |
| `--coral` | `rgb(246, 110, 70)` | Decorative accents |
| `--sky-blue` | `rgb(112, 155, 202)` | Decorative accents |
| `--pale-blue` | `rgb(225, 234, 244)` | Decorative backgrounds |

In Tailwind: `text-[var(--dark-green)]`, `bg-[var(--cream-bg)]`, `border-[var(--pale-green)]`

In CSS Modules / globals.css: `color: var(--dark-green);`

When adding a new color, add it to `:root` in `globals.css` first — never use a one-off value.

---

## 3. Typography system

The base `font-size` on `html` is fluid (defined in `globals.css`), so `rem` values are inherently responsive. Do not use `clamp()` for font sizes inside components — the fluid base already handles scaling. Use `clamp()` only for layout dimensions (widths, padding, gaps) where the fluid base isn't enough.

### Type scale

Define these as `@layer components` in `globals.css` or use Tailwind equivalents:

| Role | Size | Weight | Tracking | Color |
|---|---|---|---|---|
| `h1` | `clamp(2.4rem, 6vw, 8.29rem)` | 500 | `-0.02em` | `--dark-green` |
| `h2` | `clamp(1.8rem, 3.5vw, 3.5rem)` | 500 | `-0.02em` | `--dark-green` |
| `h3` | `1rem` | 500 | `normal` | `--dark-green` |
| Eyebrow | `0.857rem` | 500 | `0.06em` | `--forest-green` |
| Body | `1rem` | 400 | `normal` | `--medium-green` |
| Small | `0.857rem` | 400 | `normal` | `--medium-green` |
| Caption | `0.75rem` | 400/600 | `normal` | `--medium-green` |

Eyebrow labels (small uppercase text above headings) are a repeated pattern. Use the `.eyebrow` class defined in `globals.css`:

```css
/* globals.css @layer components */
.eyebrow {
  color: var(--forest-green);
  font-size: 0.857rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
```

Line heights:
- Headings: `1.1`
- Body copy: `1.5`–`1.65`
- UI labels: `1`–`1.2`

---

## 4. Spacing

The section rhythm of this site uses consistent spacing. Define layout tokens in `globals.css` `:root` and use them everywhere:

```css
:root {
  --section-padding-y: 5.714rem;   /* vertical padding for all page sections */
  --section-padding-x: 2rem;        /* horizontal padding for all page sections */
  --container-max: 72rem;           /* max-width for content containers */
  --container-max-narrow: 44rem;    /* for centered text-heavy sections */
  --container-max-mid: 60rem;       /* for pricing and similar */
}
```

Use Tailwind spacing utilities where possible (`p-4` = 1rem, `gap-6` = 1.5rem, `mb-8` = 2rem). Use CSS vars for values outside the Tailwind scale (e.g. `5.714rem`).

Common mapping:
- `0.35rem` → `gap-1.5` (approx)
- `0.5rem` → `gap-2`
- `0.75rem` → `mb-3`
- `1rem` → `p-4` / `gap-4`
- `1.5rem` → `p-6`
- `2rem` → `p-8`
- `2.5rem` → `mb-10`
- `3rem` → `gap-12`
- `4rem` → `py-16`

---

## 5. Component structure

### File size limits
- Page files (`page.tsx`): max ~150 lines. Extract every section into its own component.
- Component files: max ~200 lines. Split further if needed.

### Section extraction
Every `<section>` block in a page should be its own component in `src/components/`. Group by page:

```
src/components/
  Homepage/
    HeroSection.tsx
    HeroSection.module.css
    TrustBar.tsx
    IntroSection.tsx
    IntroSection.module.css
    BusinessTypesSection.tsx
    FeaturesSection.tsx
    ArcaSection.tsx
    ComingSoonSection.tsx
    PricingSection.tsx
    CtaSection.tsx
  shared/
    Section.tsx          # wrapper with standard padding
    Container.tsx        # max-width centered div
    SectionHeading.tsx   # eyebrow + h2 + optional description
    Button.tsx           # primary / ghost / dark variants
    Card.tsx             # standard card shell
```

### CSS Module co-location
Every component that needs styles beyond Tailwind utilities gets a `.module.css` file next to it:

```
IntroSection.tsx
IntroSection.module.css
```

Import: `import styles from './IntroSection.module.css'`
Use: `className={styles.wipeOverlay}`

---

## 6. Shared UI primitives

Before writing layout markup inline, check if a shared primitive exists. If it doesn't but the pattern repeats 2+ times, create it.

### `<Section>` — standard section wrapper
```tsx
// src/components/shared/Section.tsx
type SectionProps = {
  children: React.ReactNode
  className?: string
  background?: 'cream' | 'warm-white' | 'pale-cream' | 'dark-green'
}
```
Applies `var(--section-padding-y) var(--section-padding-x)` padding and background color.

### `<Container>` — max-width centered content
```tsx
type ContainerProps = {
  children: React.ReactNode
  size?: 'default' | 'narrow' | 'mid'  // 72rem / 44rem / 60rem
  className?: string
}
```

### `<SectionHeading>` — eyebrow + h2 + description
```tsx
type SectionHeadingProps = {
  eyebrow?: string
  heading: string
  description?: string
  align?: 'left' | 'center'
}
```

### `<Button>` — CTA button
Three variants:
- `primary` — yellow pill (`--yellow` bg, `--dark-green` text)
- `ghost` — transparent pill with border (light or dark border depending on background)
- `dark` — dark green pill (`--dark-green` bg, `--warm-white` text)

All buttons use `border-radius: 9999px`, `font-weight: 500`, `font-family: var(--font-dm-sans)`.

---

## 7. CSS Modules — when and how

Use CSS Modules for:
- `clip-path` values specific to a component
- `animation` references (reference keyframes from `globals.css`)
- `:hover` / `:focus-visible` with multiple property changes
- Complex selectors (`:nth-child`, sibling combinators, `::before`/`::after`)
- Styles that would require more than 3 Tailwind classes for a single visual concern

### Naming conventions
- Use `camelCase` for class names: `.wipeOverlay`, `.heroInner`, `.cardGrid`
- No BEM — CSS Modules scope is enough
- One module per component

### Keyframes
Define all `@keyframes` in `globals.css`, not in module files. Reference them by name in module CSS:

```css
/* globals.css */
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* SomeBadge.module.css */
.badge {
  animation: rotate 20s linear infinite;
}
```

### Animation utilities
Define reusable animation classes in `globals.css @layer components`:

```css
@layer components {
  .animate-rotate {
    animation: rotate 20s linear infinite;
    will-change: transform;
  }
  .animate-marquee {
    animation: marquee var(--marquee-duration, 30s) linear infinite;
  }
}
```

---

## 8. Server vs Client components

- **Default: Server Component** — no directive needed
- Add `'use client'` only when the component uses: `useState`, `useEffect`, `useRef`, event handlers (`onClick`, etc.), browser APIs, or third-party client-only libraries
- CSS Modules work in both Server and Client components
- Prefer lifting interactivity down: if only a small part of a section is interactive, extract just that part as a Client component, keep the section wrapper as a Server Component

```tsx
// Good — only the animated part is client
// HeroSection.tsx (Server)
import { HeroAnimatedBadge } from './HeroAnimatedBadge' // 'use client'

// Bad — entire section is client just for one animation
'use client'
export function HeroSection() { /* 200 lines */ }
```

---

## 9. Hover and focus states

- All interactive elements (links, buttons, cards) must have visible `:hover` and `:focus-visible` states
- Cards: on hover, increase `border-color` to `var(--forest-green)` and add a subtle `box-shadow`
- Buttons: lighten/darken by ~10%, no abrupt color jumps
- Transitions: `150ms–200ms ease` for colors, `200ms ease` for transforms
- Never remove `outline` on `:focus-visible` — use `outline: 2px solid var(--forest-green); outline-offset: 2px` as the standard

```css
/* In a .module.css */
.card:hover {
  border-color: var(--forest-green);
  box-shadow: 0 4px 16px rgba(36, 52, 29, 0.08);
}
```

---

## 10. Accessibility

- Every `<img>` and meaningful `<svg>` needs `alt` text. Decorative: `alt=""` + `aria-hidden="true"`
- Decorative emoji: wrap in `<span aria-hidden="true">`
- Icon-only links/buttons: add `aria-label`
- Headings must be in logical order (h1 → h2 → h3). No skipping levels.
- Color contrast: body text on background must meet WCAG AA (4.5:1). Test when adding new color combinations.
- Interactive elements must be reachable and operable by keyboard
- Use semantic HTML: `<section>`, `<nav>`, `<main>`, `<article>`, `<header>`, `<footer>` — not `<div>` for everything

---

## 11. Responsive design

- Mobile-first: base styles are mobile, add breakpoints upward
- Use Tailwind breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- The fluid `font-size` on `html` handles most type scaling automatically — don't add breakpoint overrides for font sizes unless truly necessary
- Grid layouts: prefer `grid-cols-1 lg:grid-cols-2` or `auto-fill`/`auto-fit` with `minmax()` over manually placing items
- Test at 375px (iPhone SE), 768px (tablet), 1280px (desktop), 1440px (large)

---

## 12. Performance

- **No unnecessary `'use client'`** — keeps components out of the JS bundle
- Avoid creating new objects/arrays inside JSX render (e.g. inline `style={{}}`, inline array `.map` returning new objects on every render)
- Static data arrays (like `businessTypes`, `features` in page.tsx) should be defined outside the component function, not inside
- Images: always use `next/image` with explicit `width`/`height` or `fill`. Set `priority` on above-the-fold images.
- Fonts: already loaded via `next/font` — don't import fonts via CSS `@import`
- SVGs: inline small decorative SVGs, use `next/image` for larger/external ones

---

## 13. Anti-patterns — never do these

- **No hardcoded rgb/hex colors** — use CSS vars
- **No inline `style={{}}` for static values** — use Tailwind or CSS Modules
- **No magic numbers** — if you write `5.714rem`, give it a name (`--section-padding-y`)
- **No `!important`** — fix specificity instead
- **No `px` for font sizes** — use `rem`
- **No inline `animation:` strings** — use a CSS class
- **No client components for purely static sections**
- **No page files longer than ~150 lines** — extract sections
- **No component files longer than ~200 lines** — split further
- **No duplicate color/spacing values** — if you use a value twice, it needs a token
- **No `div` soup** — use semantic HTML elements where appropriate
- **No `z-index` values above 50** without a comment explaining why

---

## 14. File naming conventions

- Components: `PascalCase.tsx` (e.g. `HeroSection.tsx`)
- CSS Modules: `PascalCase.module.css` (same name as component)
- Hooks: `camelCase.ts`, prefixed with `use` (e.g. `useScrollReveal.ts`)
- Utilities: `camelCase.ts`
- Page files: `page.tsx` (Next.js convention)
- Layout files: `layout.tsx` (Next.js convention)

---

## 15. Checklist before shipping a component

- [ ] No hardcoded color values — all using CSS vars
- [ ] No static inline styles — Tailwind or CSS Module
- [ ] Hover and focus states defined
- [ ] Keyboard navigable
- [ ] Decorative elements have `aria-hidden="true"`
- [ ] Images use `next/image`
- [ ] `'use client'` only if truly needed
- [ ] Component file under ~200 lines
- [ ] No magic numbers — tokens used
- [ ] Responsive at 375px, 768px, 1280px
