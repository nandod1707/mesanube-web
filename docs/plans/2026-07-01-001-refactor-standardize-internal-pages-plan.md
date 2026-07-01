---
title: Estandarizar páginas internas con una colección de componentes reutilizables
type: refactor
status: active
date: 2026-07-01
---

# ♻️ Estandarizar páginas internas con una colección de componentes reutilizables

## Overview

Hoy las páginas internas (`funciones/*`, `para/*`, `landing/*`, `precios`, `soporte`) están
construidas de forma **heterogénea y ad-hoc**: la mayoría son archivos `page.tsx` de 300–580
líneas con todo el markup inline, colores hex hardcodeados y botones redefinidos página por
página. Coexisten **dos sistemas de color contradictorios** (hex olivo/negro/gris vs. CSS-vars
verdes) — incluso dentro de la home y dentro de los propios primitivos "compartidos".

Este plan define **una única fuente de verdad de tokens** + **una colección de componentes de
sección tipados** con la que armar cualquier página interna componiendo piezas, no copiando
markup. El objetivo es reducir las páginas a ~60 líneas de datos + composición, eliminar la
duplicación y dejar la base lista para envolver los componentes como **bloques de Payload** en
una fase posterior.

**Decisiones tomadas (con el usuario):**
1. **Paleta canónica:** olivo/negro/gris (lo shippeado — `#485c11`, `#000`, `#6f6f6f`, `#e9e9e9`,
   `#929292`), expresada como **variables CSS**. Un **único acento** = olivo `#485c11`; el verde
   bosque `#5c7d4f` (redundante) se **colapsa al olivo**. El verde-casi-negro deja de usarse como
   texto (→ negro `#000`) pero **se conserva como fondo de panel de marca** (`--surface-dark`).
2. **Modelo de consumo:** **componentes React** para páginas `.tsx` (dev) **ahora**; dejar los
   componentes preparados para envolverlos como **bloques de Payload** en una fase posterior.
3. **Rollout:** **incremental**, incluyendo la home en el alcance (para unificar su cascarón hex
   con sus secciones verdes).

## Problem Statement

### Tres patrones de autoría coexisten

| Patrón | Ejemplos | Líneas | Problema |
|---|---|---|---|
| **A — Ad-hoc inline** | `funciones/comanda-digital` (509), `para/restaurantes` (579), `funciones/app-para-mozos` (509), `precios` (483) | 300–580 | Todo el markup en el `page.tsx`, viola la regla de ≤150 líneas de `frontend.md §5` |
| **B — Extraído pero duplicado por página** | `para/bares` → `Bares/*`, `funciones/facturacion-electronica-arca` → `FacturacionArca/*` | 56–58 | Páginas limpias, pero cada set de secciones es una copia paralela del mismo arquetipo (Hero, Context, Features, Pricing, Testimonial, FAQ, CTA…) |
| **C — Primitivos compartidos parciales** | `HeroHeading`, `FaqSection`, `CtaButtons`, `Reveal`, `FloatingNav`, `PricingCards` | — | Existen y se usan, pero de forma inconsistente y conviviendo con el markup inline |

### Dos sistemas de color en conflicto (la raíz del problema)

Medido sobre `src/app/(frontend)` + `src/components`:

- **Sistema HEX (shippeado, dominante):** `#485c11` ×185, `#6f6f6f` ×170, `#e9e9e9` ×158,
  `#929292` ×30, `text-black` en headings. Es el de la tabla "Quick-reference" de `CLAUDE.md`
  y `DESIGN.md`. **≈500+ usos.**
- **Sistema CSS-var VERDE:** `var(--dark-green)` ×35, `--forest-green` ×16, `--pale-green` ×12…
  Es el que describe `.claude/rules/frontend.md` y define `globals.css`. **≈100 usos.**
- No son el mismo color: `#485c11` (olivo) ≠ `--forest-green` = `rgb(92,125,79)` = `#5c7d4f`.
  **Las reglas de `frontend.md` describen un diseño que no es el que está en producción.**

**La home está partida en dos:** su `page.tsx` (cascarón: nav, hero, secciones inline) usa HEX
(`text-black` ×22, `#485c11` ×12, `#6f6f6f` ×14); sus secciones extraídas `Homepage/*.tsx` +
`.module.css` usan el sistema verde (`var(--forest-green)` ×9, `var(--dark-green)` ×8…).

**Los primitivos compartidos también están divididos:**
- `shared/Button.tsx` usa el sistema **verde** (`var(--yellow)`, `var(--dark-green)`) → **código
  casi muerto**, nadie lo usa para los CTA reales.
- `shared/CtaButtons.tsx` usa el sistema **hex** (`#485c11`, `#dfecc6`) → **es el que todos usan**.
- `shared/PricingCards.tsx` **mezcla ambos** (`border-[var(--dark-green)]` + `#e9e9e9` + `#485c11`).
- `shared/Section.tsx` y `shared/SectionHeading.tsx` usan CSS-vars verdes con una escala
  tipográfica distinta a la real (`clamp(1.8rem,3.5vw,3.5rem)` vs. la de facto
  `clamp(36px,5.5vw,60px)`) → por eso **casi no se usan**.

### Duplicación concreta

- **16 páginas** redefinen su propio `PrimaryButton`/`SoftButton` local, pese a que ya existen
  `shared/Button.tsx` y `shared/CtaButtons.tsx`.
- **"Tokens de facto" repetidos inline** (la verdadera fuente de verdad no escrita):
  - Wrapper de sección `border-t border-[#e9e9e9] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]` → **×83**
  - Eyebrow `font-mono text-[14px] uppercase … text-[#485c11]` → **×49**
  - H2 `clamp(36px, 5.5vw, 60px)` lineHeight 0.9 → **×90**
  - Body `text-[18px] leading-[1.4] tracking-[-0.09px] text-[#6f6f6f]` → **×144**
  - Media/card `rounded-[20px]` → **×51**

## Proposed Solution

Una arquitectura en **tres capas** + reconciliación de documentación:

```
Capa 1 — TOKENS        globals.css :root (variables CSS canónicas, valores olivo/negro/gris)
                       + DESIGN.md y frontend.md reescritos para reflejarlas
        ▲
Capa 2 — PRIMITIVOS    Section, Container, Eyebrow, SectionHeading, Body, Button,
                       PageNav, MediaFrame, Card  (capturan los "tokens de facto")
        ▲
Capa 3 — SECCIONES     HeroSection, SplitSection, StepsSection, FeatureGrid,
                       TestimonialSection, PricingTeaser, FaqSection, CtaSection
                       (data-driven: reciben props/arrays, renderizan el arquetipo)
        ▲
PÁGINAS                para/bares/page.tsx  ≈  datos + composición (~60 líneas)
```

### Capa 3 — Colección de componentes de sección (el corazón del plan)

Arquetipos detectados leyendo `funciones/comanda-digital` y `para/bares` completos:

| Componente | Reemplaza a | Props (borrador) |
|---|---|---|
| `HeroSection` | Nav + `<header>` hero de cada página | `eyebrow`, `heading`, `subtitle`, `ctas`, `media`, `nav` |
| `SplitSection` | "El problema" / "Contexto" (2 columnas heading + body) | `eyebrow`, `heading`, `paragraphs[]`, `reversed?` |
| `StepsSection` | "Cómo funciona" (lista numerada 01–0N) | `eyebrow`, `heading`, `steps: {number, title, description}[]` |
| `FeatureGrid` | "Detalles que importan" / "Soluciones" (grid de cards) | `eyebrow`, `heading`, `items: {title, description, icon?}[]`, `columns?` |
| `TestimonialSection` | Testimonio (quote + imagen) | `quote`, `author`, `media`, `reversed?` |
| `PricingTeaser` | Teaser de planes (reutiliza `PricingCards`) | `variant`, `heading`, `plans` |
| `FaqSection` | ✅ ya existe (`shared/FaqSection`) | `items`, `heading`, `eyebrow?` |
| `CtaSection` | CTA final (2 col heading + CTAs) | `eyebrow`, `heading`, `body`, `ctas`, `id="contacto"` |

> Nota: `PricingCards` y `FaqSection` ya existen y son buenos — se **conservan y se normalizan**
> a los tokens de la Capa 1, no se reescriben desde cero.

### Capa 2 — Primitivos (capturan los tokens de facto)

- `Section` — reescribir para que aplique el ritmo real
  (`border-t border-[var(--divider)] pt-[60px] pb-[80px] sm:pt-[80px] lg:pb-[120px]`,
  `max-w-[1500px]`), no el de `frontend.md`.
- `Eyebrow` — `font-mono text-[14px] uppercase … text-[var(--accent)]` (×49 inline hoy).
- `SectionHeading` — reescribir a la escala real `clamp(36px,5.5vw,60px)` lineHeight 0.9.
- `Body` — párrafo `18px`/`1.4`/`var(--body)` (×144 inline hoy).
- `Button` — **unificar** `shared/Button.tsx` (verde, muerto) con `CtaButtons.tsx` (hex, vivo)
  en un solo componente con tokens de Capa 1. Eliminar los 16 `PrimaryButton`/`SoftButton` locales.
- `PageNav` — el `<nav>` superior con logo "mesanube" + CTA (repetido inline en cada página).
- `MediaFrame` — `rounded-[20px]` + `next/image fill` + `zoom-wrap` (×51 inline hoy).

### Capa 1 — Tokens canónicos (olivo/negro/gris + panel verde oscuro)

Agregar a `globals.css :root` con nombres semánticos y reescribir los `.md`:

```css
:root {
  /* Semantic (canónicos, valores shippeados) */
  --heading: #000000;         /* headings (antes texto --dark-green) → NEGRO */
  --accent: #485c11;          /* olivo — ÚNICO acento del sitio */
  --accent-hover: #3a4c0d;
  --accent-soft: #dfecc6;     /* badges / botón soft (antes --pale-green en verde) */
  --body: #6f6f6f;            /* texto de párrafo */
  --muted: #929292;           /* captions / footnotes */
  --divider: #e9e9e9;         /* border-t de secciones */
  --surface-dark: rgb(36, 52, 29); /* paneles verde oscuro de marca (card Avanzado, CTA, ComingSoon, hero) */
  --hero-bg: #8e9c78;
  --media-bg: #f5f5f0;
}
```

**Decisiones de reconciliación (confirmadas con el usuario):**

| Token viejo | Rol | Destino |
|---|---|---|
| `--forest-green` (`#5c7d4f`) | acento del sistema verde (15 usos, redundante) | **colapsar a `--accent` olivo** y eliminar |
| `--dark-green` como **texto/heading** | headings verde-casi-negro | **`--heading: #000` (negro)** |
| `--dark-green` como **fondo de panel** | paneles oscuros de marca | **conservar** renombrado `--surface-dark` (sin cambio visual) |
| `--medium-green`, `--pale-green`, `--muted-green` | texto/bordes secundarios (sistema verde) | mapear a `--body`/`--divider`/`--muted` y eliminar |
| hex crudo (`#485c11`, `#6f6f6f`, `#e9e9e9`, `#929292`) regado inline | de facto | reemplazar por las vars canónicas |

- La clase `.eyebrow` de `globals.css` usa `--forest-green` y font sans, pero las páginas usan un
  eyebrow **inline olivo + mono** distinto → unificar `.eyebrow` al eyebrow real (olivo, mono) y
  usar el primitivo `Eyebrow` en todos lados.
- Mantener los verdes viejos como **alias temporales** (`--dark-green: var(--surface-dark)`,
  `--forest-green: var(--accent)`) durante la migración; **borrarlos en Fase 6**.
- **Reescribir `.claude/rules/frontend.md §2/§3` y `CLAUDE.md` "Design System"** para que la tabla
  de color y la escala tipográfica describan EXACTAMENTE estos valores y la escala de facto.
  Documentar la regla nueva: "usar `var(--accent)` etc., nunca hex crudo; un solo acento".

## Technical Approach — Fases (incremental, incluye la home)

### Fase 1 — Tokens + documentación (fundación, sin cambio visual) ✅
- [x] Definir variables semánticas en `globals.css :root` (aditivo). Nombres **collision-free** con
  shadcn: `--heading`, `--olive` (+`-dark`/`-soft`/`-tint`), `--body`, `--caption`, `--divider`,
  `--surface-dark`, `--hero-bg`, `--media-bg`. (`--accent`/`--muted` ya estaban tomados por shadcn/Payload.)
- [x] Reescribir `.claude/rules/frontend.md` §2 (colores), §3 (tipografía) y §6 (primitivos).
- [x] Actualizar el quick-ref de color de `CLAUDE.md` a las variables canónicas + nota de deprecación.
- [x] `DESIGN.md` NO se toca — es generado por `designlang` y ya refleja olivo/negro/gris.
- [x] **Criterio:** `tsc --noEmit` OK, `eslint` OK, `yarn build` OK (compiló, 31 páginas); cero
  cambio visual (tokens aditivos, nadie los consume aún).
- Archivos: `src/app/(frontend)/globals.css`, `.claude/rules/frontend.md`, `CLAUDE.md`.

### Fase 2 — Capa de primitivos ✅
- **Desvío del plan (por seguridad):** NO se reescriben `Section`/`SectionHeading`/`Button` in-place
  — sus únicos consumidores son componentes del sistema verde (`Homepage/*`, `Bares/*`), objetivos
  de migración. Reescribirlos cambiaría la home/`/para/bares` fuera de una migración validada. En su
  lugar se crean primitivos canónicos **nuevos** (cero consumidores → cero cambio visual); los
  verdes se borran cuando migren sus consumidores (Fases 5–7).
- [x] `Eyebrow` — mono/olivo/14px uppercase (de-facto ×49)
- [x] `Body` — 18px `--body` + variante `caption` mono `--caption`
- [x] `SectionTitle` — display serif `clamp(36px,5.5vw,60px)` lh 0.9 negro (de-facto ×90)
- [x] `PageSection` — wrapper `border-t --divider` + ritmo + `max-w-[1500px]` + `reveal?` (de-facto ×83)
- [x] `LinkButton` — `primary`(olivo)/`outline`(bordeado) — reemplaza los 16 `PrimaryButton`/`SoftButton` locales
- [x] `PageNav` — wordmark + `TrialButton`
- [x] `MediaFrame` — `rounded-[20px]` + `next/image fill` + `--media-bg` (de-facto ×51)
- **Diferido a fases de migración:** adopción de tokens en componentes live existentes
  (`CtaButtons`, `PricingCards`, `FaqSection`) — se hace al migrar cada uno, con validación visual.
- **Criterio:** `tsc`/`eslint` OK. Los primitivos replican exactamente el markup de facto (mismas
  clases Tailwind + clamps), listos para migraciones drop-in en Fase 4+.

### Fase 3 — Componentes de sección (Capa 3)
- Crear `HeroSection`, `SplitSection`, `StepsSection`, `FeatureGrid`, `TestimonialSection`,
  `CtaSection`, `PricingTeaser`. Normalizar `FaqSection` y `PricingCards` a Capa 1.
- Ubicación: `src/components/sections/`.
- **Criterio:** cada componente tiene props tipadas y una página "sandbox" de prueba, o se valida
  directo en el piloto.

### Fase 4 — Piloto: migrar `funciones/comanda-digital`
- Reescribir la página (509 → ~70 líneas) componiendo Capa 3, dejando los arrays de datos.
- **Validación visual estricta** (screenshots antes/después con `cdp-browser`) — no debe cambiar
  nada perceptible.
- **Criterio:** diff visual ≈ 0; `tsc`/`build`/`lint` OK. Este es el gate que valida toda la
  arquitectura antes de escalar.

### Fase 5 — Migrar el resto de internas
- `funciones/*` (carta-qr, monitor-de-cocina, arqueo-de-caja, app-para-mozos, fidelización,
  reportes-y-analitica, page índice), `para/*` (restaurantes, cafeterias, pizzerias,
  cadenas-multilocal), `landing/comanda-digital-cafeteria`, `precios`, `soporte`.
- Reescribir `Bares/*` y `FacturacionArca/*` para consumir Capa 3 (o migrar sus páginas a Capa 3
  y **borrar** los sets duplicados).
- **Criterio:** ninguna página interna >150 líneas; cero `PrimaryButton`/`SoftButton` locales;
  cero hex crudo (todo vía `var(--…)`).

### Fase 6 — Limpieza
- Borrar `src/components/Bares/*` y `src/components/FacturacionArca/*` duplicados.
- Borrar alias verdes deprecados de `globals.css`.
- Grep de regresión: `#485c11|#6f6f6f|#e9e9e9|text-black` en headings → 0 fuera de `globals.css`.

### Fase 7 — Home
- Unificar el cascarón hex de `page.tsx` y las secciones verdes `Homepage/*` bajo Capa 3 donde
  aplique (Hero, Features, Pricing, CTA, Faq).
- **Criterio:** la home usa la misma colección; diff visual controlado.

### Fase 8 (posterior, fuera de este PR) — Bloques de Payload
- Envolver cada componente de sección de Capa 3 en un bloque de Payload
  (`src/blocks/Hero`, `Steps`, `FeatureGrid`, `Cta`…), con su schema de campos, `RenderBlocks`
  y `yarn generate:types` + `yarn generate:importmap`.
- Habilita a editores a armar páginas internas desde el admin sin tocar código
  (visión del `CLAUDE.md`). Se planifica aparte.

## Mapa de migración (página → componentes de sección)

| Página | Secciones (arquetipos a componer) |
|---|---|
| `funciones/comanda-digital` (piloto) | Hero · Split(problema) · Steps · FeatureGrid · PricingTeaser · Testimonial · Faq · Cta |
| `funciones/*` (resto) | Hero · Split · Steps/FeatureGrid · PricingTeaser · Testimonial · Faq · Cta |
| `para/*` | Hero · Split(contexto) · FeatureGrid(soluciones) · Steps · FeatureGrid · Testimonial · PricingTeaser · Faq · Cta |
| `precios` | Hero · PricingCards(full) · FeatureGrid(comparativa) · Faq · Cta |
| `soporte` | Hero · FeatureGrid · Faq · Cta |
| `landing/*` | Hero · Split · Steps · FeatureGrid · Testimonial · PricingTeaser · Cta |
| home (`page.tsx` + `Homepage/*`) | Hero · Intro/Split · FeatureGrid · Arca · ComingSoon · Pricing · Cta |

## System-Wide Impact

- **`Reveal` y animaciones:** cada sección hoy envuelve su contenido en `<Reveal>` con `delay`
  escalonado. Los componentes de Capa 3 deben encapsular ese patrón (prop `revealDelay?` o
  automático) para no perder el motion actual.
- **`FloatingNav` + anchors:** varias páginas usan `#flujo`, `#detalles`, `#faq`, `#contacto`.
  `HeroSection`/`CtaSection`/`StepsSection` deben aceptar `id` para preservar el scroll-spy.
- **SEO/metadata:** `export const metadata` se queda en cada `page.tsx` — no lo tocan los
  componentes. Verificar que no se rompa al reducir las páginas.
- **`next/image`:** `MediaFrame` centraliza `fill`/`sizes`/`priority`; el hero debe mantener
  `priority` (above-the-fold).
- **Server vs Client:** los componentes de sección deben ser **Server Components** por defecto;
  solo `CtaButtons`/`FloatingNav`/`TrialDialog` (interactivos) quedan client. No convertir
  secciones enteras a `'use client'`.
- **`config/plans.ts`:** `PricingTeaser`/`PricingCards` ya interpolan desde ahí — mantener esa
  fuente única, nunca hardcodear precios ([[pricing-single-source]]).

## Acceptance Criteria

### Funcionales
- [ ] Una única fuente de verdad de tokens en `globals.css`; `frontend.md` y `CLAUDE.md` la reflejan.
- [ ] Colección de componentes de sección en `src/components/sections/` con props tipadas.
- [ ] Página piloto (`comanda-digital`) migrada con **diff visual ≈ 0**.
- [ ] Todas las páginas internas migradas a la colección.
- [ ] Home unificada bajo la colección.
- [ ] `Bares/*` y `FacturacionArca/*` duplicados eliminados.

### No funcionales / Quality gates
- [ ] Ninguna página interna >150 líneas (`frontend.md §5`).
- [ ] Cero `PrimaryButton`/`SoftButton` locales (grep = 0).
- [ ] Cero hex crudo fuera de `globals.css` (grep `#485c11|#6f6f6f|#e9e9e9` = 0 en páginas/componentes).
- [ ] `tsc --noEmit`, `yarn lint`, `yarn build` OK.
- [ ] Componentes de sección son Server Components salvo los interactivos.
- [ ] Responsive verificado a 375 / 768 / 1280 px.

## Dependencies & Risks

- **Riesgo — regresión visual:** el sistema hex y el verde NO son idénticos; al normalizar
  secciones verdes (home, `Homepage/*`, `Button`, `PricingCards`) al olivo, el acento **cambiará
  visiblemente** en esas zonas. *Mitigación:* es el cambio deseado (unificar al shippeado);
  validar con screenshots por página y aprobar el delta explícitamente.
- **Riesgo — pérdida de motion/anchors:** encapsular `Reveal` y exponer `id`/`revealDelay`.
- **Riesgo — alcance grande:** mitigado por rollout incremental con gate en el piloto (Fase 4).
- **Dependencia:** `config/plans.ts` como fuente de precios; `TrialDialog` provider para CTAs.

## Success Metrics

- Líneas totales de las páginas internas: **~6.900 → objetivo <2.500** (datos + composición).
- Ocurrencias de hex crudo en páginas/componentes: **~500 → ~0** (solo en `globals.css`).
- Definiciones de botón duplicadas: **16 → 0**.
- Nº de sets de sección duplicados por página: **2 (`Bares`,`Arca`) → 0**.

## Sources & References

### Referencias internas (código)
- Patrón A (ad-hoc): `src/app/(frontend)/funciones/comanda-digital/page.tsx:186` (509 líneas)
- Patrón B (extraído/duplicado): `src/app/(frontend)/para/bares/page.tsx:38` → `src/components/Bares/*`, `src/components/FacturacionArca/*`
- Primitivos existentes: `src/components/shared/` (`CtaButtons.tsx`, `Button.tsx`, `HeroHeading.tsx`, `PricingCards.tsx`, `FaqSection.tsx`, `Section.tsx`, `SectionHeading.tsx`, `Reveal.tsx`, `FloatingNav.tsx`)
- Conflicto de tokens: `src/app/(frontend)/globals.css:18` (`:root`), `src/components/shared/Button.tsx:26` (verde) vs `src/components/shared/CtaButtons.tsx:9` (hex)
- Fuente de precios: `src/config/plans.ts` ([[pricing-single-source]])

### Documentación a reescribir
- `.claude/rules/frontend.md` §2 (color) y §3 (tipografía)
- `CLAUDE.md` sección "Design System" / "Quick-reference tokens"
- `dev-resources/design/DESIGN.md`, `design-language.md`

### Convenciones aplicables
- `frontend.md §5` (≤150 líneas por página, extraer secciones), §6 (primitivos compartidos),
  §8 (Server vs Client), §13 (anti-patterns: no hex, no inline style estático, no botones duplicados)
