# Visual Design Spec — releaf.bio Clone

## Framework & Tooling

Build with **Next.js App Router**, **CSS Modules** (one module file per component), **GSAP + ScrollTrigger + Flip + CustomEase**, and **Lenis** for smooth scroll. Lenis must be wired into GSAP's ticker:
```js
const lenis = new Lenis()
gsap.ticker.add((time) => lenis.raf(time * 1000))
gsap.ticker.lagSmoothing(0)
```
Add `lenis` and `lenis-smooth` classes to `<html>` when Lenis is active.

---

## Typography

**Font:** Aeonik (Medium + Regular weights). For a free substitute use **Plus Jakarta Sans** or **DM Sans**. Self-host as `.woff2`. Apply `-webkit-font-smoothing: antialiased` globally.

**Fluid base size:** The root font size is fully fluid — no fixed `px` value:
```css
html { font-size: calc(-1.30612px + 4.08163vw); }
@media (min-width: 1440px) { html { font-size: calc(-0.142857px + 0.982143vw); } }
```
This gives ~14px at 375px viewport → ~14px at 1440px → scales proportionally. Everything is in `rem`.

**Type scale (in rem, at design viewport):**
- Hero display heading: `3.42857rem` mobile → `8.28571rem` at 1440px
- Section display heading: `2.85714rem` → `5rem` desktop
- Large heading: `2.28571rem`
- Medium heading: `2rem`
- Section intro text: `2.28571rem` → `3.5rem` desktop (medium weight)
- Body: `1rem`
- Small / tagline: `0.857143rem`
- Footer headline marquee: `5rem`
- Large marquee: `6.42857rem`
- Carousel/video heading: `1.57143rem`

**Letter-spacing:** `-0.01em` on all headings (Aeonik-Medium). `0` on body.
**Line heights:** `100%` display, `110%` h2, `115%` h3, `130%` h6, `140%` body.
**Font features:** `font-feature-settings: "ss02", "zero"` (slashed zero, stylistic set).

---

## Color System

All colors are in the CSS — no CSS variables, all hardcoded:

| Token | Value | Usage |
|---|---|---|
| `cream-bg` | `#FFFEFAC` / `rgb(255,254,252)` | Page background |
| `warm-white` | `rgb(255,247,238)` | Cards, nav bg, button labels |
| `pale-cream` | `rgb(255,249,241)` | Light card variant |
| `dark-green` | `rgb(36,52,29)` | Primary text, nav bg active |
| `medium-green` | `rgb(73,87,67)` | Secondary text, footer variant |
| `forest-green` | `rgb(92,125,79)` | Tags, taglines |
| `muted-green` | `rgb(115,126,109)` | Inactive nav links |
| `light-green-bg` | `rgb(122,150,111)` | Footer green variant |
| `pale-green` | `rgb(220,228,217)` | Borders, light bg |
| `yellow` | `rgb(255,190,13)` | **Primary accent** — button icons, tags |
| `warm-yellow` | `rgb(255,203,52)` | Footer yellow variant |
| `coral` | `rgb(246,110,70)` | Tags, secondary accent |
| `salmon` | `rgb(248,137,103)` | Footer coral/red variant |
| `sky-blue` | `rgb(112,155,202)` | Tag blue, collaborations bg |
| `light-blue` | `rgb(139,174,212)` | Footer blue variant |
| `pale-blue` | `rgb(225,234,244)` | Collaboration card background |
| `progress-bg` | `rgb(206,210,204)` | Progress bar track |

The **page background** is `rgb(255,254,252)` — not pure white. The **body text** color is dark forest green `rgb(36,52,29)`, not black.

---

## The Squircle Shape System

The most defining visual feature. All major containers, the hero, footer, and cards use `clip-path: polygon()` with 60+ points approximating a **squircle** (superellipse). These are NOT `border-radius`. The polygon points simulate cubic-bezier-eased corners.

**How to implement:** Use [squircley.app](https://squircley.app) or generate polygon points programmatically. Corner smoothing factor ~0.6–0.8 (like Figma's corner smoothing). Apply via CSS:
```css
.hero-container {
  clip-path: polygon(/* 60+ points approximating squircle */);
}
```

The nav floating pill uses `clip-path: path("M ... c ...")` with actual SVG path data for the squircle shape, animated via GSAP as it expands/collapses.

The footer, hero, cards, and collaboration section all use these rounded-polygon clip-paths. Sections with images inside use `overflow: hidden` on the clipped parent.

---

## Navigation

**Position:** Fixed to bottom center of viewport, `z-index: 2`, `bottom: 4.28571rem`.

**Structure:** A pill-shaped container (squircle clip-path) with:
- Background: `rgb(255,247,238)` outer wrapper with 2px padding
- Dark green list (`rgb(36,52,29)`) containing nav links
- "Menu" button on the left (hamburger icon, 3 lines) opens full nav
- "Home" active state pill slides in
- Nav links: `font-family: Aeonik-Medium, 1rem, letter-spacing: 0`, inactive color `rgb(115,126,109)`, active color `rgb(255,247,238)`
- `will-change: width, height` — GSAP Flip animates the shape change when toggling between collapsed/expanded states

**Logo:** Positioned absolute top-left (`top: 0.714rem, left: 0.714rem`), not in the nav. Has a background SVG (`/assets/logo-background-small.svg` mobile, `/assets/logo-background.svg` desktop) that creates the corner cutout/squircle effect for the logo container.

---

## Page Sections (in order)

### 1. Hero — `BlockHeroPrimary`
- Full viewport height (`100svh`), min `47.6rem`
- Outer padding: `0.714rem` all sides, `3.36rem` bottom
- The **entire hero image + content** is wrapped in a squircle `clip-path: polygon()` div. The image covers 100% of this container. Background is sky blue (#4A8BA8-ish gradient visible through the photo).
- **Hero heading** centered at top: `rgb(255,247,238)`, `3.43rem` font size (desktop: `8.29rem` at 1440px), bold weight. 4 lines stacked centered.
- **Decorative SVG lines**: thin, near-invisible white curved lines (`opacity ~0.1–0.2`) drawn diagonally across the hero background. These are inline SVG `<path>` elements, not animated, just decorative.
- **Secondary detail card** (bottom right): small rounded thumbnail image with play button overlay, acts as a secondary visual element. The video thumbnail has `border-radius: 1rem`, white border.
- **Image parallax**: The background photo translates on Y via GSAP ScrollTrigger scrub as you scroll down.

### 2. Intro — `BlockIntro`
- Background: page cream `rgb(255,254,252)`
- Padding: `5.71rem` vertical, `1.07rem` horizontal (desktop: `8.57rem` top/bottom, `3.93rem` sides)
- **Large intro text** (top half): `2.29rem` → `3.5rem` desktop, Aeonik-Medium. Width fluid ~83% → ~44% desktop. Margin-bottom `8.57rem` before the right-column content.
- **Text wipe reveal animation**: Each line of text is wrapped in a `<div>` with `position: relative`. Inside each line div is a sibling `<div>` overlay with `background-color: rgba(255,254,252,0.8)`, `position: absolute`, `transform-origin: 100% 0`, `transform: scale(1,1)` initially. On scroll entry, GSAP tweens `scaleX` from 1 → 0 with `transform-origin: right` — creating a left-wipe reveal per line. This is a **custom line-by-line wipe reveal**, not SplitText.
- **Right column** (below): Tagline (`rgb(92,125,79)`) + body paragraph text. Yellow tagline icon (leaf SVG).

### 3. Video — `BlockVideo`
- Padding: `4.29rem` top, `11.43rem` bottom
- A decorative **cream squircle shape** (`clip-path: polygon()`) sits behind the video, creating a warm background panel
- The video container itself: `width: calc(-1.85rem + 83.3vw)`, centered, `background: rgb(255,250,245)`, has a `margin: 0.143rem` inner wrapper maintaining `aspect-ratio: 267/163`
- Video overlay has centered heading: `1.57rem`, Aeonik-Medium, `rgb(255,254,252)` color, with the brand name in `rgb(255,190,13)` yellow using `<em>` tag
- Play button circle, cookie consent overlay on video

### 4. Sticky Cards Scroll — `BlockStickyCardsScroll`
- **Layout:** Left panel sticks (`position: sticky; top: 8.57rem`) while right content scrolls
- Left panel contains: large fullscreen-style image with squircle clip-path, overlay gradient, heading text (white), body text (white), and a `ButtonArrow` + label button
- Right panel: cards stacked vertically that scroll past
- **Each card**: `background: rgb(255,247,238)`, `border-radius: 1rem`, tag + icon + heading + paragraph. Icon is an SVG illustration (line-art style botanical/product icon).
- The background image has a parallax transform on Y via GSAP ScrollTrigger
- Card variants: colored tags (green, blue, yellow) indicate categories
- Mobile: stacked vertically, no sticky behavior

### 5. Sustainability Entrance — `BlockSustainabilityEntrance`
- **Layout:** Two large photos (squircle clip-paths) positioned absolute behind a foreground card
- Photo 1 (left, portrait): tall image with squircle clip, slightly behind
- Photo 2 (right, landscape): wider, placed overlapping photo 1
- **Foreground card**: `background: rgb(255,247,238)`, `border-radius: 1rem`, padding `2.14rem`, with tagline (yellow), h3 heading, paragraph, and yellow `ButtonPrimary` CTA
- On desktop: the two images spread wider with different clip-path sizes
- Card animates in from below on scroll entrance

### 6. Collaborations Entrance — `BlockCollaborationsEntrance`
- Background: `rgba(112,155,202,0.2)` (pale blue)  with squircle border-radius `1rem`
- Contains a grid of collaboration partner cards (Albert Heijn, Carlsberg, PANGAIA, LVMH, etc.)
- Each item: portrait-ratio card with product photo, partner tag (small pill), squircle clip-path on images
- Background has a decorative botanical SVG at 250% size, positioned behind cards
- Marquee text overlaid on images: "Rebels With a Cause ✾" scrolling horizontally, white text, medium size

### 7. About Us Entrance — `BlockAboutUsEntrance`
- Centered heading block at top, followed by a 3-image collage layout
- **Rotating badge**: circular SVG badge (`5.79rem` wide) at top-right of image group, `animation: rotate 20s linear infinite`
- **Two marquee text strips** (top + bottom of image group): "Rebels With a Cause ✾" in white, `1.43rem`, scrolling
- **Three images** in collage: image 1 (left, portrait, squircle), image 2 (center, landscape, `border-radius: 0.36rem`), image 3 (right, portrait, squircle clip-path from right edge)
- All images animate in on scroll with staggered entrance

### 8. Footer — `BlockFooter`
- Has a **page-level background** below the footer (cream `rgb(255,254,252)`) and then the actual footer card
- **Footer card**: squircle clip-path at top, colored background (currently `rgb(248,137,103)` salmon/coral on home page)
- Footer color variants exist: yellow, green, dark-green, blue, red — applied via class
- **Headline marquee**: huge `5rem` text scrolling ("Let's make it right ✾ Let's make it right ✾") in contrasting color. Icon between repetitions is the brand flower SVG
- **Footer content card**: inner rounded card `border-radius: 0.857rem` containing logo, tagline "The future of plastics is above the ground", parent brand "A brand by [avantium logo]", nav links (right side, `1.5rem` medium, stacked), secondary links, contact info with icons, social buttons
- **Decorative SVG lines**: 8 thin white radial/curved SVG paths inside the footer, creating a starburst/leaf vein pattern — these are the most distinctive footer detail
- **Social buttons**: pill-shaped `ButtonIcon` with icon (Instagram, LinkedIn) — same hover animation as primary buttons
- Below footer card: copyright + social buttons bar on cream background

---

## Component Details

### ButtonPrimary
Two-part button: circular icon bubble (left) + text label pill (right), visually connected.
```
[→ icon bubble] [Text label pill]
```
- Icon bubble: `2.71rem` × `2.71rem`, `border-radius: 1.07rem` (squircle), `background: rgb(255,190,13)`, arrow SVG icon
- Label: `border-radius: 1.07rem`, `color: rgb(36,52,29)`, `min-width: 5.07rem`, `height: 2.71rem`, `padding: 0 1rem`
- **Hover animation**: A duplicate icon bubble is hidden behind the first (`margin-left: -2.71rem`, `opacity: 0`). On hover, GSAP slides the first out and second in from right.
- Color variants: `color-white` (cream bg + green text), `color-green` (dark green bg + cream icon)

### ButtonArrow
Circular button only, no label.
- `2.71rem` circle, `border-radius: 50%`, `background: rgb(255,190,13)`, `border: 0.143rem solid`
- Color variants: white, green (pale green bg)

### Tag / Tagline
- Tag: small pill, `height: 1.64rem`, `padding: 0 0.5rem`, rounded. Color variants: white, yellow, green, dark-green, blue, red
- Tagline: text with small SVG icon (leaf/recycling symbol) to the left. `font-size: 0.857rem` → `1rem` desktop, Aeonik-Medium
- Both used as section labels above headings

---

## Animation Patterns

**Entrance animations** (triggered by ScrollTrigger on scroll entry):
- All section headings: **line-wipe reveal** — overlay div scales from `scaleX(1)` to `scaleX(0)` with `transform-origin: 100% 0` (right side). Stagger ~0.1s per line. Duration ~0.8s with CustomEase.
- Images: fade + slight translateY upward, opacity 0→1
- Cards: translateY(40px) + opacity 0→1, staggered
- The collab image cards: staggered entrance from bottom

**Scroll-driven / parallax (GSAP ScrollTrigger scrub):**
- Hero background image: `translateY` moves upward as you scroll (parallax)
- Sticky section background: `translateY` for depth
- Section clip-path shapes: may animate their polygon points on scroll for "expanding" entrance

**Page transitions:**
A fixed overlay (`z-index: 4`) with a cream background div + botanical SVG. On page navigation: GSAP fades in overlay → navigates → fades out overlay. The flower SVG rotates/scales during transition.

**Navigation shape morphing:**
The nav pill width/height animates via GSAP Flip when toggling expanded/collapsed states. `will-change: width, height`.

**Marquee:**
Custom implementation: duplicate children inside a flex container, GSAP `ticker` or RAF loop continuously decrements `translateX` at a constant speed. `will-change: transform`. On hover, reduce speed.

**Custom ease:** `CustomEase.create("custom-ease-steep-in-out-power-three", "M0,0 C0,0 0.103,-0.014 0.182,0.062 0.258,0.136 0.306,0.344 0.348,0.492 0.397,0.668 0.48,0.816 0.54,0.882 0.612,0.961 0.734,1 1,1")` — use this for entrance animations.

---

## Spacing System

All spacing is based on `0.357143rem` (~5px at design viewport) increments, effectively a **5px grid scaled fluidly**. Common values:
- `0.357rem` (5px) — micro gaps
- `0.714rem` (10px) — small padding
- `1.071rem` (15px) — standard gap
- `1.429rem` (20px) — medium gap
- `2.143rem` (30px) — section inner padding
- `3.214rem` (45px) — between elements
- `3.929rem` (55px) — horizontal section padding (desktop)
- `5.714rem` (80px) — section vertical padding (mobile)
- `8.571rem` (120px) — large section padding (desktop)

---

## Decorative SVG Elements

These make the site feel organic and premium:

1. **Hero diagonal lines**: thin, nearly transparent (`stroke-opacity ~0.15`) white curved lines across the full hero background. About 4–6 paths. No animation.
2. **Footer starburst lines**: 8 thin white SVG path lines radiating from a point inside the footer, creating a botanical/vein pattern. Static.
3. **Section botanical SVG backgrounds**: sections like Collaborations use a large SVG flower positioned at 250% size as a background texture.
4. **Brand icon**: a stylized snowflake/flower SVG (`✾` / asterisk shape) used as a separator in marquee text and as the logo mark.
5. **Rotating badge**: circular text badge (SVG) that spins continuously using CSS `animation: rotate 20s linear infinite`.

---

## Responsive Strategy

Single breakpoint: `768px`. Below = mobile single-column, above = desktop multi-column. Use `calc()` functions with `vw` for fluid column widths, e.g. `width: calc(-1.845rem + 83.333vw)`. No CSS Grid is used — mostly `flex` and absolute positioning with precise `calc()` widths.

---

## Key Atmosphere Notes for Claude Code

- **No pure white or black anywhere** — all "whites" are cream (`#FFFEFAC`), all "blacks" are dark green (`#24341D`)
- The overall feel is **warm, organic, tactile** — like premium sustainable packaging
- Photography: close-up product shots + environmental/nature shots. Warm golden hour lighting dominant.
- Every interactive element has a subtle hover state — buttons slide/transform, links have opacity changes
- The page body has a slight bottom-right scrollbar gutter (`scrollbar-gutter: stable; --scrollbar-size: 6px`)
- Images use `next/image` with `pointer-events: none` on the Next.js image wrappers
