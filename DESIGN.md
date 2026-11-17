# Mesanube — Design Reference
> Una libreta de cocina sobre papel crema: tinta negra, un solo verde oliva, y mucho aire.

**Theme:** light only.

This file describes **what the site looks like and why**, so a new section fits the rest without
guessing. Implementation rules (Tailwind order, CSS Modules, file sizes) live in
`.claude/rules/frontend.md`; the tokens themselves live in `src/app/(frontend)/globals.css` (`:root`).
Values here are measured from the shipped components.

## Intención

Mesanube le vende a dueños de restaurantes que no tienen tiempo. El sitio tiene que sentirse como
una herramienta seria pero cercana: **editorial, calmo y concreto**. La personalidad la lleva la
tipografía (un serif grande y liviano contra un sans de lectura), no el color ni la decoración.

Cuando algo no esté cubierto acá, preguntate: *¿esto se vería bien impreso en una libreta, con una
sola tinta de color?* Si necesita sombra, degradé o un segundo color para funcionar, probablemente
no encaja.

## Colores

Una paleta: **negro / gris / oliva**. Un solo acento. Referenciá siempre por variable.

| Token | Valor | Rol | Nunca |
|---|---|---|---|
| `--heading` | `#000000` | Títulos h1–h3, texto de botones soft/outline | — |
| `--body` | `#6f6f6f` | Párrafos | Para títulos (pierde jerarquía) |
| `--caption` | `#929292` | Notas al pie, labels de plan, placeholders | Para párrafos largos (contraste justo) |
| `--divider` | `#e9e9e9` | `border-t` entre secciones y cards, bordes de inputs | Como fondo |
| `--olive` | `#485c11` | **El único acento**: eyebrows, links, checks `✓`, CTA primario, foco | Como fondo de sección grande |
| `--olive-dark` | `#3a4c0d` | Hover del CTA primario | Fuera de estados hover |
| `--olive-soft` | `#dfecc6` | Badges, botón soft | Para texto |
| `--olive-soft-hover` | `#d0e1ac` | Hover del botón soft | — |
| `--olive-tint` | `#f7faf0` | Hover del botón outline | — |
| `--hero-bg` | `#8e9c78` | Fondo del panel del hero | Fuera del hero |
| `--surface-dark` | `rgb(36, 52, 29)` | Paneles oscuros de marca (plan destacado, CTA oscuro) | Más de uno por pantalla |
| `--warm-white` | `rgb(255, 247, 238)` | Texto sobre `--surface-dark` / `--olive` | Sobre fondo claro |
| `--media-bg` | `#f5f5f0` | Placeholder de imágenes | — |

**Por qué un solo acento:** el oliva marca "esto es accionable o importante". Si aparece un segundo
color de acento, el ojo deja de saber qué mirar.

⚠ `--accent`, `--muted`, `--primary` etc. (HSL) son tokens de shadcn para el admin de Payload. **No
son la paleta de marketing.**

## Superficies (de abajo hacia arriba)

| Nivel | Superficie | Uso |
|---|---|---|
| 0 | Blanco / crema | Fondo de página y de casi todas las secciones |
| 1 | `--media-bg` | Contenedores de imagen |
| 1 | `--olive-soft` | Elementos chicos destacados (badges, botón soft) — nunca una sección entera |
| 2 | `--hero-bg` | Panel del hero, con la captura del producto flotando encima |
| 3 | `--surface-dark` | Un panel oscuro puntual: el plan destacado o un CTA de cierre |

Las secciones **no** se separan con fondos alternados: se separan con un `border-t` de
`--divider` y aire vertical. Eso es lo que le da el aspecto de página impresa.

## Tipografía

| Familia | Clase | Rol |
|---|---|---|
| Crimson Text (serif) | `font-display` | **Solo** títulos grandes (h1, h2), números de pasos, citas |
| DM Sans | `font-sans` | Todo lo demás: párrafos, UI, botones, títulos de card |
| Roboto Mono | `font-mono` | Eyebrows, captions, badges |

### Escala (usá las constantes de `components/{feature,usecase}/styles.ts`)

| Rol | Familia | Tamaño | Peso | Line-height | Tracking | Color | Constante |
|---|---|---|---|---|---|---|---|
| h2 sección | display | `clamp(36px, 5.5vw, 60px)` | 400 | 0.9 | `clamp(-1px, -0.2vw, -1.8px)` | `--heading` | `TITLE` + `TITLE_STYLE` |
| Número de paso | display | `clamp(56px, 6vw, 80px)` | 400 | 1 | `clamp(-2px, -0.3vw, -3.2px)` | `--heading` | `BIG_NUMBER_STYLE` |
| Cita | display | `clamp(24px, 3vw, 40px)` | 400 | 1–1.1 | ~`-0.5px` | `--heading` | `QUOTE_STYLE` |
| Título de card (h3) | sans | 18px | **700** | 1.4 | -0.09px | `--heading` | `CARD_TITLE` |
| Body | sans | 18px | 400 | 1.4 | -0.09px | `--body` | `BODY` |
| Botón | sans | 14px | 700 | 1.4 | -0.35px | según variante | `CtaLink` |
| Eyebrow | mono | 14px | 400 | 1.4 | -0.14px | `--olive` | `EYEBROW` |
| Caption / nota | sans o mono | 14px | 400 | 1.4 | -0.09px | `--caption` | — |
| Input | sans | 15px | 400 | — | — | `--heading` | — |

**Por qué:** el serif a peso 400 y line-height 0.9 es la firma del sitio — grande, apretado, tranquilo.
Los títulos de card van en sans bold (no serif) para que el serif quede reservado a los momentos
grandes; si todo es serif, nada lo es.

- El eyebrow es **sentence case** en `/para/*` y **UPPERCASE** en `/funciones/*`. No mezclar dentro de una página.
- Nunca serif en bold. Nunca más de un tamaño de h2 en una página.

## Forma

| Elemento | Radio |
|---|---|
| Botones, badges, nav flotante | `rounded-full` (pill) |
| Imágenes de sección, cards con fondo, paneles | `--radius-xl` (20) → `lg:` `--radius-3xl` (30) |
| Paneles del hero | `--radius-xl` → `sm:` `--radius-2xl` → `lg:` `--radius-3xl` |
| Diálogos | `--radius-2xl` (24) |
| Paneles internos, tiles de ícono | `--radius-md` (16) |
| Captura del producto | `--radius-xs` → `--radius-sm` → `--radius-md` |
| Inputs, ítems de sidebar | `--radius-xs` (10) |

Regla: **lo accionable es pill; lo que contiene contenido es un rectángulo con radio generoso**
que crece con el viewport. Usá `rounded-[var(--radius-…)]`; no uses `rounded-lg/md/sm` (son del admin).

## Espaciado y layout

- **Ancho máximo:** `max-w-[1500px]` · **Gutter:** `px-4 sm:px-6 lg:px-10`
- **Ritmo de sección:** `py-[80px] lg:py-[120px]` (o `pb-` cuando el `border-t` interno lleva el `pt-[60px] sm:pt-[80px]`)
- **Header de sección → contenido:** `gap-[30px]` entre eyebrow y título, `pb-[40px]` antes del contenido
- **Grillas de cards:** `gap-x-[20px]`, cada card con `border-t` + `py-[40px]` + `gap-4` interno
- **Imagen bajo grilla:** `mt-[40px]`

Las cards **no son cajas**: son una línea arriba (`border-t --divider`) y texto. No tienen fondo,
borde completo ni sombra.

## Elevación

Casi plana. Las sombras están permitidas **solo en elementos que flotan sobre el contenido**:

| Elemento | Token |
|---|---|
| Nav / FAB flotante | `--shadow-float` + `bg-white/55` con blur |
| Diálogo | `--shadow-dialog` |
| Captura del producto en el hero | `--shadow-device` |
| Hover de card-link (`:hover`) | `--shadow-card-hover` |

Secciones, cards e imágenes en el flujo: **sin sombra**.

## Movimiento

- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` · Reveal 900ms · Zoom de imagen 1200ms (`.zoom-wrap`, scale 1.04)
- Aparición: `<Reveal>` con `delay` 1–4 (80ms de stagger) por columna
- Hovers de color: 150–300ms. Todo se apaga con `prefers-reduced-motion`.

## Componentes (recetas)

- **CTA primario** (`CtaLink variant="primary"` / `TrialButton`): pill, `--olive`, texto blanco 14px/700, `px-[22px] py-[14px]`, flecha ↗ que se desplaza en hover, hover `--olive-dark`. **Uno por bloque.**
- **CTA soft:** pill `--olive-soft`, texto negro, hover `--olive-soft-hover`. Acompaña al primario, nunca solo.
- **CTA outline:** pill blanca, borde `--divider`; hover borde `--olive` + fondo `--olive-tint`. Para acciones terciarias.
- **Header de sección:** `border-t` + eyebrow + h2 serif, alineado a la izquierda, con `lg:pr-[400px]` para que el título no ocupe todo el ancho.
- **Card de texto:** `border-t`, título sans bold 18px, body 18px gris. Sin fondo.
- **Badge:** pill `--olive-soft`, mono 11px bold, texto negro (ej. "Más elegido").
- **Hero (`ShowcaseHero`):** panel `--hero-bg` (o foto) con la captura del producto flotando encima.
- **Panel oscuro:** `--surface-dark` con texto `--warm-white`. Uno por página como máximo.
- **Input:** fondo blanco, borde `--divider`, `--radius-xs`, 15px, foco borde `--olive`.

## Do / Don't

**Do**
- Usá el oliva solo para lo accionable o el eyebrow — si todo es oliva, nada lo es.
- Separá secciones con `border-t` + aire, no con fondos de color.
- Reusá las constantes de `styles.ts` en vez de reescribir tamaños.
- Un CTA primario por bloque; el resto soft u outline.

**Don't**
- Nada de sombras en cards ni secciones.
- Nada de colores nuevos (coral, celeste, amarillo) — la paleta es oliva/negro/gris.
- Nada de emojis ni íconos decorativos; `✓` y `→`/`↗` sí.
- Nada de serif en bold, ni de títulos de card en serif.
- Nada de cards con caja (fondo + borde + sombra).
- Nada de hex sueltos: si falta un token, se agrega a `globals.css` primero.

## Tokens

Todos en `src/app/(frontend)/globals.css` (`:root`). Si un valor nuevo se repite, primero se crea el
token ahí y se documenta en este archivo y en `.claude/rules/frontend.md`.

El layout (1500px, `py-[80px] lg:py-[120px]`, gutters) no tiene variables: lo encapsulan los
componentes de sección de `components/feature/` y `components/usecase/`. Componelos en vez de
re-espaciar.
