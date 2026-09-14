# Alyra — Brand implementation guide
Version 1.0 · petrol accent · September 2026

This is the build spec. The reasoning behind the direction lives in
`Alyra Brand Direction.dc.html`; this file is what you hand to a developer.

---

## 1. The system in one paragraph

Warm stone paper, near-black ink, one accent. The accent is petrol
(`#14363C`) and it appears only where a user can act or where a section
begins — buttons, links, active nav, badges, eyebrows. Everything
structural is a 1px hairline. Corners are square. Motion is short and
functional. The visual weight of a page comes from type and whitespace,
not from colour, shadow, or illustration.

**Coverage rule:** one accent element per viewport, two at most. If a
primary button and an accent eyebrow occupy the same scroll position,
the eyebrow drops to `--ink-45`. This restraint is the brand.

---

## 2. Colour

| Token | Hex | Used for |
|---|---|---|
| `--stone` | `#EFEAE0` | Page background, everywhere |
| `--stone-deep` | `#E6E0D4` | Recessed bands, disabled primary button fill |
| `--card` | `#F7F4EE` | Cards, input fields, dropdown surfaces |
| `--ink` | `#1C1B16` | Headlines, secondary button, footer ground, logo on light |
| `--ink-70` | `#4A473D` | Body copy, inactive nav items · 7.2:1 on stone |
| `--ink-45` | `#7A7568` | Labels, captions, metadata, disabled text · 4.6:1 — do not go lighter |
| `--petrol` | `#14363C` | Primary accent · 10.5:1 on stone, 11.3:1 on card |
| `--petrol-deep` | `#0E262B` | Hover on primary buttons and links |
| `--petrol-press` | `#0A1D21` | Active / pressed |
| `--petrol-light` | `#6FA8AE` | Accent on dark grounds only · 6.6:1 on ink, fails on stone (2.3:1) |
| `--petrol-wash` | `#D5DEDD` | Badge/tag fill, table row highlight, quote blocks — always with `--petrol` text |
| `--petrol-soft` | `#3C6A70` | Charts and illustration secondaries. Never text. |
| `--hairline` | `#D8D2C4` | All 1px rules and borders on paper |
| `--hairline-strong` | `#C4BCA9` | Input and card borders that must be found by touch |
| `--hairline-dark` | `#34322A` | Rules on the ink footer |
| `--success` | `#3E5A3A` | Form confirmation text and its 2px left band |
| `--error` | `#A32B1C` | Inline field errors only — never a filled surface |

**Rules**
- Accent is used at full strength. No tints, no `opacity`, no `color-mix`.
- Never place `--petrol` on `--ink`. On dark grounds the accent becomes
  `--petrol-light`, and a primary button inverts to a stone fill with ink text.
- Semantic colour never carries meaning alone: an error always says "Error",
  a success always states what happened.
- Max two background values per page (stone + one of card/stone-deep/ink).
- No gradients. No shadows. Elevation is expressed with a hairline.

---

## 3. Typography

| Role | Font | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Display (h1) | Newsreader | 62/1.08 → 38/1.14 mobile | 400 | −0.015em (−0.01em mobile) |
| Section head (h2) | Newsreader | 34/1.22 → 26 mobile | 400 | −0.005em |
| Card title (h3) | Newsreader | 26/1.25 → 20 mobile | 400 | 0 |
| Sub-head (h4) | Newsreader | 21–22/1.3 | 500 | 0 |
| Lead paragraph | Inter | 18/1.65 | 400 | 0 |
| Body | Inter | 15–17/1.65 → 16 mobile | 400 | 0 |
| UI / nav / button | Inter | 14.5–16/1.2 | 400–500 | 0 |
| Caption | Inter | 13–13.5/1.55 | 400 | 0 |
| Eyebrow / label / meta | IBM Plex Mono | 10.5–11 | 400 | 0.10–0.14em, uppercase |

- Serif for anything editorial, sans for anything interactive. No exceptions.
- Body copy always gets `text-wrap: pretty`; headlines too.
- Measure: 62–74 characters. Max prose width ~760px.
- Never set the serif below 20px, never the mono above 11px.
- The mono is load-bearing: it is what makes the brand read as instrumentation
  rather than decoration. Use it for eyebrows, data labels, timestamps, hex values.

**Loading**
```html
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..500&family=Inter:wght@300..600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## 4. Layout

- Container `max-width: 1180px`, gutters `clamp(20px, 5vw, 64px)`.
- Section rhythm `clamp(72px, 10vw, 128px)`; block rhythm 40–56px.
- Spacing scale: 4 / 8 / 12 / 14 / 20 / 24 / 32 / 40 / 56 / 96.
- Grids use `repeat(auto-fit, minmax(280px, 1fr))`; multi-cell panels are built
  as a `gap: 1px` grid over a `--hairline` background, which produces exact
  1px dividers without per-cell border maths.
- Always lay out sibling groups with flex/grid + `gap`, never margins.

---

## 5. Components

### Primary button
```
background: var(--petrol); color: var(--card);
padding: 14px 26px; font: 15px/1.2 Inter; border: 0; border-radius: 0;
:hover  background: var(--petrol-deep)
:active background: var(--petrol-press)
:focus-visible  outline: 2px solid var(--petrol); outline-offset: 2px
:disabled background: var(--stone-deep); color: var(--ink-45); cursor: default
```
Mobile: `padding: 15px 24px`, full width, 46px tall.

### Secondary button
```
border: 1px solid var(--ink); color: var(--ink); background: transparent;
padding: 13px 25px;
:hover background: var(--ink); color: var(--stone)
:disabled border-color: var(--hairline-strong); color: var(--ink-45)
```
The secondary button never borrows the accent — a petrol outline beside a
petrol fill halves the primary's pull.

### Links
Body links: `color: var(--petrol)`, 1px underline, `text-underline-offset: 3px`.
Hover `var(--petrol-press)`. On dark: `var(--petrol-light)`, no underline, hover
to `#8FC0C5`. Nav links are `--ink-70` with no underline; the active item is
`--petrol` with a 1px bottom border and 3px padding.

### Badges / tags
Accent badge: `--petrol-wash` fill, `--petrol` text, mono 10.5px, 0.08em
tracking, uppercase, `padding: 6px 10px`, square.
Neutral badge: transparent fill, `1px solid var(--hairline-strong)`,
`--ink-70` text, same metrics.

### Card
`background: var(--card)`, `1px solid var(--hairline)`, `padding: 32px`,
square, no shadow, no hover lift. Footer row inside the card is separated by
a `1px solid var(--hairline)` top border with 20px padding.

### Inputs
`background: var(--card)`, `1px solid var(--hairline-strong)`, `padding: 13px 14px`,
15px Inter. Label 13px `--ink-70`, 8px gap. Focus: `border-color: var(--petrol)`
plus a 1px inset ring. Error: `border-color: var(--error)` and a 13px
`--error` message beneath, prefixed "Error — ". Success confirmation is a
`2px solid var(--success)` left band with 14px `--success` text.

### Header
`padding: 20px 28px`, `border-bottom: 1px solid var(--hairline)`, lockup left,
nav right with 32px gaps, primary CTA as a filled accent button.
Mobile: `padding: 14px 20px`, lockup at 24px mark, and a 44×44 menu control
holding two 22×1px hairlines (two, not three — at 1px weight three reads as noise).

### Footer
`background: var(--footer-bg)`, `padding: 56px 40px 40px`. Column grid
`minmax(200px, 1fr)`, divided by `1px solid var(--hairline-dark)`. Links
`--footer-text`, hover `--petrol-light`. Column labels mono 10.5px
`--footer-label`. The footer CTA is a stone fill with ink text.

---

## 6. Logo

**The mark** is a reference marker: a solid apex above a detached rule — the
caret pointing at a claim, the rule where the citation sits. It doubles as the
apex of an A.

Geometry on a 32-unit grid (all supplied files use it):
- Triangle: apex `(16, 8)`, base `(8.5, 19)–(23.5, 19)`
- Rule: `x 7, y 22, w 18, h 2`
- The 16px build is optically corrected, not scaled: triangle apex `(8, 3.5)`,
  base `(4, 9.5)–(12, 9.5)`; rule `x 3, y 11.5, w 10, h 1.5`.

**The wordmark** is Newsreader 500, tracking +0.005em, lowercase-with-cap.
Never all caps. Never 400 at display size — it goes brittle. Minimum
reproduction width 72px.

**Lockup:** mark and wordmark are optically matched — mark height equals the
wordmark cap-to-baseline plus a hair, with a gap of 0.36 × mark height
(14px gap at a 38px mark). Clearspace on all sides equals the rule width
of the mark (0.56 × mark height). Holds down to a 24px mark, so the nav
never needs to drop to the bare mark.

**Never:** recolour the mark outside the three approved grounds, rotate it,
outline it, add a radius to the tile, place the wordmark above the mark,
or set the wordmark in Inter.

---

## 7. Icon files

`brand/icons/svg/`
| File | Use |
|---|---|
| `favicon.svg` | Browser tab (16px optical build) — ship as the primary favicon |
| `mark-ink-tile.svg` | Default mark, ink tile / stone mark |
| `mark-stone-tile.svg` | Mark on paper grounds |
| `mark-petrol-tile.svg` | App icon and social avatar ground |
| `mark-glyph-*.svg` | Transparent mark, no tile — inline in text, dense UI |
| `lockup-light.svg` / `lockup-dark.svg` | Horizontal lockup. Wordmark is live text: **outline the text** before sending these outside the codebase |

`brand/icons/png/`
| File | Use |
|---|---|
| `favicon-16 / 32 / 48` | Legacy favicon fallbacks |
| `apple-touch-icon-180` | iOS home screen |
| `icon-192 / icon-512` | PWA manifest |
| `icon-maskable-512` | Android maskable (90px safe padding baked in) |
| `avatar-petrol-512 / 1000` | LinkedIn, X, Crunchbase avatars |
| `avatar-stone-512` | Avatar for dark-UI platforms |

Not supplied: a multi-resolution `.ico`. Modern browsers take the SVG plus
the PNG fallbacks below; generate an `.ico` only if you must support IE11.

```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon-180.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#EFEAE0">
```

```json
{
  "name": "Alyra",
  "short_name": "Alyra",
  "background_color": "#EFEAE0",
  "theme_color": "#14363C",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "/icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
```

---

## 8. Motion

Transitions are 120–160ms `ease-out` on colour and border only. No transforms
on hover, no scale, no parallax, no entrance animations on scroll beyond a
150ms opacity fade. Respect `prefers-reduced-motion: reduce` by disabling
the fade entirely.

---

## 9. Accessibility floor

- Body and accent text on paper clears 7:1; nothing meaningful falls below
  4.6:1 (`--ink-45`, restricted to labels and timestamps).
- Every interactive element is at least 44×44px on touch.
- Visible focus is mandatory: 2px `--petrol` outline, 2px offset (on dark
  grounds, `--petrol-light`).
- Colour is never the sole carrier of state.

---

## 10. Don't

Purple or neon gradients · glow effects · robot, brain, or circuit imagery ·
generic 3D tech renders · stock photography of people pointing at screens ·
rounded cards with a left accent bar · drop shadows · a second accent colour ·
emoji · the accent used as a large background field.
