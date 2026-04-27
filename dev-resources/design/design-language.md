# Design Language: Area — Browse everything.

> Extracted from `http://localhost:3000` on April 27, 2026
> 363 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#dfecc6` | rgb(223, 236, 198) | hsl(81, 50%, 85%) | 3 |
| Secondary | `#485c11` | rgb(72, 92, 17) | hsl(76, 69%, 21%) | 16 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 463 |
| `#6f6f6f` | hsl(0, 0%, 44%) | 96 |
| `#e9e9e9` | hsl(0, 0%, 91%) | 38 |
| `#ffffff` | hsl(0, 0%, 100%) | 25 |
| `#666666` | hsl(0, 0%, 40%) | 16 |
| `#929292` | hsl(0, 0%, 57%) | 10 |
| `#171717` | hsl(0, 0%, 9%) | 8 |
| `#8e9c78` | hsl(83, 15%, 54%) | 1 |

### Background Colors

Used on large-area elements: `#ffffff`, `#8e9c78`, `#000000`

### Text Colors

Text color palette: `#000000`, `#ffffff`, `#6f6f6f`, `#485c11`, `#929292`, `#757575`, `#171717`, `#666666`

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 463 |
| `#6f6f6f` | text, border | 96 |
| `#e9e9e9` | border, background | 38 |
| `#ffffff` | background, text, border | 25 |
| `#485c11` | background, text, border | 16 |
| `#666666` | text, border | 16 |
| `#929292` | border, text | 10 |
| `#171717` | text, border | 8 |
| `#dfecc6` | background | 3 |
| `#8e9c78` | background | 1 |

## Typography

### Font Families

- **DM Sans** — used for body (264 elements)
- **__nextjs-Geist** — used for body (59 elements)
- **Roboto Mono** — used for all (25 elements)
- **Crimson Text** — used for all (15 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 153.6px | 9.6rem | 400 | 138.24px | -2px | h1, span |
| 76.8px | 4.8rem | 400 | 76.8px | -2px | p |
| 60px | 3.75rem | 400 | 54px | -1px | p |
| 38.4px | 2.4rem | 400 | 38.4px | -0.8px | p |
| 30px | 1.875rem | 500 | 36px | -1.5px | a |
| 25.7px | 1.6062rem | 500 | 30.84px | -2.05px | p |
| 22.8px | 1.425rem | 500 | 27.36px | -1.83px | p |
| 18px | 1.125rem | 400 | 18px | -0.54px | p |
| 16px | 1rem | 400 | 24px | normal | html, head, meta, link |
| 15px | 0.9375rem | 400 | 21px | -0.075px | p, div, section, span |
| 14px | 0.875rem | 700 | 21px | -0.35px | nav, a, span, svg |
| 12px | 0.75rem | 400 | 16.8px | -0.12px | h2, p, div |

### Heading Scale

```css
h1 { font-size: 153.6px; font-weight: 400; line-height: 138.24px; }
h2 { font-size: 12px; font-weight: 400; line-height: 16.8px; }
```

### Body Text

```css
body { font-size: 15px; font-weight: 400; line-height: 21px; }
```

### Font Weights in Use

`400` (331x), `700` (28x), `500` (4x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-2 | 2px | 0.125rem |
| spacing-40 | 40px | 2.5rem |
| spacing-50 | 50px | 3.125rem |
| spacing-60 | 60px | 3.75rem |
| spacing-80 | 80px | 5rem |
| spacing-104 | 104px | 6.5rem |
| spacing-120 | 120px | 7.5rem |
| spacing-129 | 129px | 8.0625rem |
| spacing-140 | 140px | 8.75rem |
| spacing-240 | 240px | 15rem |
| spacing-300 | 300px | 18.75rem |
| spacing-400 | 400px | 25rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| md | 6px | 4 |
| lg | 12px | 1 |
| lg | 16px | 1 |
| xl | 20px | 2 |
| xl | 24px | 1 |
| full | 30px | 5 |
| full | 50px | 1 |
| full | 9999px | 2 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 6px 30px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px -4px 20px 0px;
```

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 8px 0px;
```

**sm (inset)** — blur: 0px
```css
box-shadow: rgb(23, 23, 23) 0px 0px 0px 1px, rgba(255, 255, 255, 0.14) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.24) 0px 16px 32px -8px;
```

**sm** — blur: 0px
```css
box-shadow: rgb(23, 23, 23) 0px 0px 0px 1px;
```

**xs** — blur: 1px
```css
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 8px -4px, rgba(0, 0, 0, 0.06) 0px 16px 24px -8px;
```

## CSS Custom Properties

### Colors

```css
--tw-inset-ring-shadow: 0 0 #0000;
--tw-ring-offset-shadow: 0 0 #0000;
--color-white: #fff;
--tw-ring-shadow: 0 0 #0000;
--tw-border-style: solid;
--tw-ring-offset-width: 0px;
--color-black: #000;
--tw-ring-offset-color: #fff;
```

### Spacing

```css
--spacing: .25rem;
```

### Typography

```css
--default-font-family: "DM Sans", "DM Sans Fallback";
--font-crimson: "Crimson Text", "Crimson Text Fallback";
--font-roboto-mono: "Roboto Mono", "Roboto Mono Fallback";
--font-weight-bold: 700;
--font-dm-sans: "DM Sans", "DM Sans Fallback";
--default-mono-font-family: "Roboto Mono", "Roboto Mono Fallback";
```

### Shadows

```css
--tw-inset-shadow-alpha: 100%;
--tw-shadow-alpha: 100%;
--tw-shadow: 0 0 #0000;
--tw-inset-shadow: 0 0 #0000;
```

### Other

```css
--tw-translate-z: 0;
--blur-lg: 16px;
--default-transition-duration: .15s;
--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
--tw-translate-y: 0;
--tw-translate-x: 0;
--ease-out: cubic-bezier(0, 0, .2, 1);
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`

**Durations:** `0.4s`, `0.15s`, `0.3s`, `0.9s`, `0.08s`, `0.16s`, `0.24s`, `0.32s`, `1.2s`, `0.2s`, `0.25s`

### Common Transitions

```css
transition: all;
transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s;
transition: color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.15s cubic-bezier(0.4, 0, 0.2, 1);
transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1), translate 0.3s cubic-bezier(0, 0, 0.2, 1), scale 0.3s cubic-bezier(0, 0, 0.2, 1), rotate 0.3s cubic-bezier(0, 0, 0.2, 1);
transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.08s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.08s;
transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.16s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.16s;
transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.24s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.24s;
transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.32s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.32s;
```

### Keyframe Animations

**rise**
```css
@keyframes rise {
  0% { opacity: 0; transform: translateY(110%); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

**ipadFloat**
```css
@keyframes ipadFloat {
  0%, 100% { transform: translate(-50%, calc(-50% - 4px)); }
  50% { transform: translate(-50%, calc(-50% + 4px)); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (1 instances)

```css
.button {
  background-color: rgba(255, 255, 255, 0.13);
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 9999px;
}
```

### Cards (5 instances)

```css
.card {
  background-color: rgb(255, 255, 255);
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px -4px 20px 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (13 instances)

```css
.link {
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 700;
}
```

### Navigation (3 instances)

```css
.navigatio {
  background-color: oklab(0.999994 0.0000455678 0.0000200868 / 0.55);
  color: rgb(0, 0, 0);
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 6px 30px 0px;
}
```

### Footer (2 instances)

```css
.foote {
  background-color: rgb(250, 250, 250);
  color: rgb(0, 0, 0);
  padding-top: 40px;
  padding-bottom: 20px;
  font-size: 16px;
}
```

### Dropdowns (1 instances)

```css
.dropdown {
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 8px -4px, rgba(0, 0, 0, 0.06) 0px 16px 24px -8px;
  border-color: rgba(0, 0, 0, 0.08);
  padding-top: 0px;
}
```

### Badges (4 instances)

```css
.badge {
  color: rgb(23, 23, 23);
  font-size: 14px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

## Layout System

**2 grid containers** and **91 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1500px | 0px |
| 907px | 0px |
| 100% | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 4-column | 1x |
| 3-column | 1x |

### Grid Templates

```css
grid-template-columns: 386.656px 386.672px 386.656px;
gap: 20px;
grid-template-columns: 285px 285px 285px 285px;
gap: 20px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 37x |
| row/nowrap | 53x |
| row/wrap | 1x |

**Gap values:** `16px`, `20px`, `20px 40px`, `240px`, `24px`, `27px`, `28px`, `30px`, `40px`, `50px`, `60px`, `6px`, `80px`, `8px`

## Responsive Design

### Viewport Snapshots

| Viewport | Body Font | Nav Visible | Max Columns | Hamburger | Page Height |
|----------|-----------|-------------|-------------|-----------|-------------|
| mobile (375px) | 16px | Yes | 1 | No | 7558px |
| tablet (768px) | 16px | Yes | 3 | No | 7033px |
| desktop (1280px) | 16px | Yes | 4 | No | 7376px |
| wide (1920px) | 16px | Yes | 4 | No | 7633px |

### Breakpoint Changes

**375px → 768px** (mobile → tablet):
- H1 size: `56px` → `92.16px`
- Max grid columns: `1` → `3`
- Page height: `7558px` → `7033px`

**768px → 1280px** (tablet → desktop):
- H1 size: `92.16px` → `153.6px`
- Max grid columns: `3` → `4`
- Page height: `7033px` → `7376px`

**1280px → 1920px** (desktop → wide):
- H1 size: `153.6px` → `160px`
- Page height: `7376px` → `7633px`

## Interaction States

### Button States

**""**
```css
/* Hover */
background-color: rgba(0, 0, 0, 0) → rgba(255, 255, 255, 0.114);
```
```css
/* Focus */
background-color: rgba(0, 0, 0, 0) → rgba(255, 255, 255, 0.13);
outline: rgb(0, 0, 0) none 3px → rgb(0, 0, 0) none 0px;
```

### Link Hover

```css
background-color: rgb(72, 92, 17) → rgb(68, 87, 16);
```

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 3 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#000000` | `#dfecc6` | 16.95:1 | AAA |

## Design System Score

**Overall: 86/100 (Grade: B)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 50/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 90/100 |
| Border Radius Consistency | 80/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 4 font families — consider limiting to 2 (heading + body)
- 5 !important rules — prefer specificity over overrides
- 351 duplicate CSS declarations

## Z-Index Map

**2 unique z-index values** across 2 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 2147483647,2147483647 | div, div.n.e.x.t.j.s.-.t.o.a.s.t |
| sticky | 50,50 | nav.n.a.v.-.p.i.l.l. .f.i.x.e.d. .l.e.f.t.-.1./.2. .t.o.p.-.4. .z.-.5.0. .f.l.e.x. .-.t.r.a.n.s.l.a.t.e.-.x.-.1./.2. .i.t.e.m.s.-.c.e.n.t.e.r. .g.a.p.-.4. .r.o.u.n.d.e.d.-.f.u.l.l. .b.o.r.d.e.r. .b.o.r.d.e.r.-.b.l.a.c.k./.5. .b.g.-.w.h.i.t.e./.5.5. .p.x.-.5. .p.y.-.3. .t.e.x.t.-.[.1.3.p.x.]. .f.o.n.t.-.b.o.l.d. .t.r.a.c.k.i.n.g.-.[.-.0...3.5.p.x.]. .t.e.x.t.-.b.l.a.c.k. .s.h.a.d.o.w.-.[.0._.6.p.x._.3.0.p.x._.r.g.b.a.(.0.,.0.,.0.,.0...0.8.).]. .b.a.c.k.d.r.o.p.-.b.l.u.r.-.l.g. .s.m.:.g.a.p.-.7. .s.m.:.p.x.-.6. .s.m.:.p.y.-.4. .s.m.:.t.e.x.t.-.[.1.4.p.x.] |

**Issues:**
- [object Object]

## SVG Icons

**1 unique SVG icons** detected. Dominant style: **outlined**.

| Size Class | Count |
|------------|-------|
| xs | 1 |

**Icon colors:** `currentColor`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Crimson Text | self-hosted | 400, 600, 700 | normal |
| DM Sans | self-hosted | 400, 500, 700 | normal |
| Roboto Mono | self-hosted | 400, 500 | normal |
| __nextjs-Geist | self-hosted | 400 600 | normal |
| __nextjs-Geist Mono | self-hosted | 400 600 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 29 | objectFit: contain, borderRadius: 0px, shape: square |
| hero | 3 | objectFit: cover, borderRadius: 0px, shape: square |
| gallery | 2 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (23x), 16:9 (7x), 4:3 (1x), 1.94:1 (1x), 3:4 (1x), 9:16 (1x)

## Motion Language

**Feel:** springy · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `instant` | `80ms` | 80 |
| `xs` | `150ms` | 150 |
| `sm` | `160ms` | 160 |
| `md` | `300ms` | 300 |
| `xl` | `900ms` | 900 |

### Easing Families

- **ease-out** (32 uses) — `cubic-bezier(0.22, 1, 0.36, 1)`, `cubic-bezier(0, 0, 0.2, 1)`, `cubic-bezier(0.23, 0.88, 0.26, 0.92)`
- **custom** (12 uses) — `cubic-bezier(0.4, 0, 0.2, 1)`
- **spring** (1 uses) — `cubic-bezier(0.175, 0.885, 0.32, 1.1)`

### Spring / Overshoot Easings

- `cubic-bezier(0.175, 0.885, 0.32, 1.1)`

### Keyframes In Use

| name | kind | properties | uses |
|---|---|---|---|
| `rise` | slide-y | opacity, transform | 1 |
| `ipadFloat` | slide | transform | 1 |

## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** Sentence case (tight)

### Sample Headings

> Browse everything.
> Benefits
> Specs
> Benefits
> Specs

## Page Intent

**Type:** `landing` (confidence 0.45)
**Description:** Area turns regional data into clear, vibrant visuals that show you exactly what's happening across your business.

## Section Roles

Reading order (top→bottom): nav → nav → nav → testimonial → feature-grid → content → content → content → content → content → content → content → content → content → feature-grid → content → testimonial → testimonial → content → content → content → content → content → footer → nav

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.9 |
| 1 | nav | — | 0.9 |
| 2 | nav | Browse everything. | 0.4 |
| 3 | testimonial | Benefits | 0.8 |
| 4 | feature-grid | Benefits | 0.8 |
| 5 | content | — | 0.3 |
| 6 | content | — | 0.3 |
| 7 | content | — | 0.3 |
| 8 | content | — | 0.3 |
| 9 | content | — | 0.3 |
| 10 | content | — | 0.3 |
| 11 | content | — | 0.3 |
| 12 | content | — | 0.3 |
| 13 | content | — | 0.3 |
| 14 | feature-grid | Specs | 0.8 |
| 15 | content | — | 0.3 |
| 16 | testimonial | — | 0.8 |
| 17 | testimonial | — | 0.8 |
| 18 | content | — | 0.3 |
| 19 | content | — | 0.3 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.121 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 9999px |
| backdrop-filter in use | no |
| Gradients | 0 |

## Imagery Style

**Label:** `mixed` (confidence 0.059)
**Counts:** total 34, svg 23, icon 45, screenshot-like 0, photo-like 0
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Component Library

**Detected:** `tailwindcss` (confidence 0.784)

Evidence:
- tailwind-like class density 75%

## Component Screenshots

5 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| button | 0 | 32 × 32 | `screenshots/button-0.png` |
| nav | 0 | 405 × 55 | `screenshots/nav-0.png` |
| nav | 1 | 1200 × 148 | `screenshots/nav-1.png` |
| hero | 0 | 1200 × 1414 | `screenshots/hero-0.png` |
| hero | 1 | 285 × 251 | `screenshots/hero-1.png` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `DM Sans` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
