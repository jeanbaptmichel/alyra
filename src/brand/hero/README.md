# Hero ground — "Plate" (option 1a)

Everything here is CSS. No image request, no asset pipeline, no recropping.

## Files
- `hero-plate.css` — the whole ground: field, ruling, grain, glow, hem, plus the
  type and button overrides that apply on a dark ground.
- `grain.svg` — the noise tile referenced by `hero-plate.css`. Keep it beside the CSS,
  or repoint the `background-image` url.
- `hero-plate.html` — markup for the hero and for the tile variant.
- `raster/` — baked PNGs for places CSS can't reach (email, OG image, slide decks,
  a PDF cover). Do **not** use these on the site; the CSS version is sharper and
  reflows.

## The five layers, in order
1. **Field** — `linear-gradient(176deg, #0B2226 → #14363C → #1B454B → #2A5A5F)`.
   The 4° tilt is deliberate: a dead-vertical gradient looks like a UI panel.
2. **Ruling** — 1px stone hairlines at 9px intervals, masked to fade in from 34%.
   This is the hairline from the brand system at hero scale. It is the idea.
3. **Glow** — a petrol-light radial anchored off-canvas bottom-right at 45%.
   Off-canvas so it never resolves into a light source or a sun.
4. **Grain** — `feTurbulence` 0.85 / 3 octaves, `mix-blend-mode: overlay`, 30%.
   This is what makes the ground read as printed rather than rendered. Don't drop it.
5. **Hem** — bottom 22% fades to `#EFEAE0` so the hero dissolves into the page
   instead of ending on a hard edge.

## Rules
- **Inset, not full-bleed.** Same gutter as the container: `clamp(20px, 5vw, 64px)`.
  Square corners; no radius.
- **Petrol is invisible on this ground** (1.3:1). Accents become `#6FA8AE`,
  and the primary button inverts to a stone fill with ink text.
- **Serif goes to 500 here.** Newsreader 400 thins out optically on a dark field.
  On paper it stays 400. Same face, weight compensation only.
- Body copy no lighter than `#D3CFC4` and no darker; that's 8.6:1 on the darkest band.
- Tiles keep the field and grain but drop the glow and hem. The ruling survives a
  210px crop, which is the reason this option works at card size at all.
- Maximum one plate section per screen plus a tile row. Two full plates on one page
  turns a ground into a pattern.

## Swapping in a real photograph later
The layers are ordered so a photo drops in between the field and the ruling:
desaturate fully, duotone `#0B2226 → #EFEAE0`, 35–45% opacity, keep the grain and
hem exactly as they are. Subject matter: stratified rock, archival paper, microfilm,
fog over still water, cloth bindings. Nothing aspirational, no skies, no people.
