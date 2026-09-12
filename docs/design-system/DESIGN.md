---
name: "API"
fullName: "Accommodations Plus International"
radius: "10px"
spacing: "4px base grid"
colors:
  background: "#ffffff"
  surface: "#f7f8fb"
  foreground: "#11151e"
  muted: "#3f4754"
  border: "#e4e7ee"
  accent: "#273b6e"
  accent-secondary: "#78bc43"
typography:
  display: "Mulish"
  body: "Mulish"
  mono: "JetBrains Mono"
---

# API design system — app reference

Self-contained. Every value here was measured from the API brand source, not
guessed. There are no links to other files: this document plus the fonts and
logo SVGs is the whole system.

**What API is.** Accommodations Plus International builds crew-accommodation and
travel-logistics software for airlines, cargo carriers, rail operators, and
cruise lines — hotel sourcing, crew lodging, ground transport,
irregular-operations (IROPS) response, and billing at scale.

**Who the UI speaks to.** Dispatchers, crew schedulers, ops directors, finance
controllers. **Not consumers.** People reading a screen under time pressure who
need the number before the sentence.

**How it should feel.** Modern SaaS: confident, data-dense, calm, unmistakably
navy-and-green. Geometry-first — the "+" motif, the palette, dot-grids and
oversized type do the work imagery usually would.

## File layout in this repo

This document describes the system; the values live in code. In foundation-webapp
the pieces are wired for Next.js (App Router) + Tailwind CSS v4 + shadcn/ui:

```
src/app/globals.css              LIVE source of truth — the 9 @font-face rules plus
                                 every token, mapped into Tailwind/shadcn via @theme inline.
                                 Edit here for any real style change.
docs/design-system/tokens.css    Reference mirror of the tokens as plain CSS custom
                                 properties (what the ui-kit demo consumes). Read-only.
docs/design-system/brand.json    Machine-readable brand definition.
src/styles/design-tokens.ts      TypeScript reference of the same tokens for use in code.
public/fonts/                    9 woff2 files (Mulish 300-800, Questrial 400, JetBrains Mono 400/500)
public/logos/                    api-logo-navy.svg, api-logo-white.svg, api-logo-green.svg,
                                 api-logo-inline.svg, api-plus-mark.svg
```

Fonts are served from `/fonts/` (Next.js serves `public/` at the root), so the 9
`@font-face` `url()`s in `globals.css` and `tokens.css` resolve without any path
prefix. Keep `globals.css`, `tokens.css`, and `design-tokens.ts` in agreement when
a token changes — `globals.css` is authoritative.

---

## 1. Tokens

Every value lives in **`src/app/globals.css`** — 9 `@font-face` rules plus the
full token set on `:root`, mapped into Tailwind v4 and shadcn/ui through the
`@theme inline` block. That file is the single source of truth; `tokens.css` and
`design-tokens.ts` are read-only reference mirrors. This document deliberately
does not repeat the values, so they cannot drift apart.

`globals.css` is imported once in `src/app/layout.tsx`, ahead of any component
styles — you do not import it per component. Reach for tokens through Tailwind
utilities (`bg-primary`, `text-muted-foreground`, `rounded-lg`) or `var(--…)`.

Two things belong here rather than in the stylesheet, because they are rules
rather than values:

- **The brand faces are self-hosted, never a CDN.** Do not add a Google Fonts
  `@import` or `<link>` for Mulish, Questrial, or JetBrains Mono. Self-hosting
  is what keeps the app working offline, and all three families are OFL.
- **Derive in-between colours with `oklch()`; never invent a hex.** The ramps
  below are the full sanctioned set. If you need a step that is not there,
  interpolate between two that are.

### What `tokens.css` defines

Names only — read the file for values. Everything here is available as
`var(--name)`.

| Group | Tokens |
| --- | --- |
| Brand anchors | `--api-navy` `--api-green` `--api-gray` `--api-light-gray` `--api-black` |
| Ramps | `--navy-50` … `--navy-900`, `--green-50` … `--green-900`, `--ink-50` … `--ink-900` (10 steps each: 50, 100, 200 … 900) |
| Surface + ink | `--bg` `--bg-subtle` `--bg-muted` `--surface-dark` `--fg` `--fg-muted` `--fg-subtle` |
| Primary (navy) | `--primary` `--primary-hover` `--primary-active` `--primary-fg` |
| Accent (green) | `--accent` `--accent-hover` `--accent-active` `--accent-fg` `--green-on-light` `--green-on-navy` |
| Lines | `--border` `--border-soft` `--border-strong` `--separator` `--row-hover` `--ring` |
| Status | `--success` `--warning` `--danger` `--info`, each with a `-bg` pair |
| Type | `--font-sans` `--font-display` `--font-docs` `--font-mono` · `--text-xs` … `--text-6xl` (11 steps) · `--leading-tight` `--leading-snug` `--leading-normal` `--leading-relaxed` · `--tracking-tight` `--tracking-normal` `--tracking-wide` `--tracking-widest` |
| Space | `--sp-1` `--sp-2` `--sp-3` `--sp-4` `--sp-5` `--sp-6` `--sp-7` `--sp-8` `--sp-10` `--sp-12` `--sp-16` `--sp-20` `--sp-24` (4px base) |
| Shape | `--radius-xs` `--radius-sm` `--radius-md` `--radius-lg` `--radius-xl` `--radius-2xl` `--radius-pill` `--border-width` |
| Elevation | `--shadow-xs` `--shadow-sm` `--shadow-md` `--shadow-lg` `--shadow-xl` `--shadow-ring` |
| Motion | `--dur-fast` `--dur-base` `--dur-slow` `--ease-out` `--ease-in-out` |
| App shell | `--sidebar-w` `--topbar-h` `--content-max` `--control-h` `--touch-min` |

The sections that follow quote specific hex values where the *measurement* is
the point — contrast ratios, the green-step table, button states. Those are
evidence for a rule, not a second copy of the palette: read them as
documentation and reach for the token when you write code.

---

## 2. Colour

### Semantic roles

| Role | Hex | Usage |
| --- | --- | --- |
| background | `#FFFFFF` | Page canvas and card fills. Flat — never photographic, never gradient. |
| surface | `#F7F8FB` | Page chrome and subtle panel tint behind white cards. |
| foreground | `#11151E` | Body text and headings. 18.26:1 on background. |
| muted | `#3F4754` | Secondary text and metadata. 9.37:1 — safe for small text. |
| border | `#E4E7EE` | Control borders. |
| accent | `#273B6E` | **Primary.** API Navy — the serious, executive voice. |
| accent-secondary | `#78BC43` | API Green. Operational, active, "go". Used sparingly. |

**Navy** carries primary buttons, sidebars, nav chrome, and data-hero surfaces.
**Green is rationed** — active nav markers, the primary CTA *inside* a navy
surface, live-activity pulses, positive deltas. Most surfaces are white or very
pale ink.

**Backgrounds are flat:** `#FFFFFF` cards · `#F7F8FB` page chrome · `#0B1428`
sidebars and data heroes. The one sanctioned gradient in the entire system is
navy → deeper-navy on IROPS hero surfaces.

### Picking the green step by surface

This is the rule most often got wrong. Green is one hue but never one value,
because `green-500` is a light chroma that passes on dark surfaces and fails on
light ones. Measured contrast:

| Step | Hex | On white | On `#F7F8FB` | On `#F2FAEA` | On navy-500 | On navy-900 |
| --- | --- | --- | --- | --- | --- | --- |
| `green-800` | `#35641A` | **7.03** | **6.62** | **6.57** | 1.54 | 2.61 |
| `green-500` | `#78BC43` | 2.31 | 2.18 | 2.16 | **4.68** | **7.92** |
| `green-400` | `#8AC852` | 2.01 | 1.89 | 1.88 | **5.40** | **9.14** |

So the decision is mechanical:

- **Green text on a light surface → `green-800` `#35641A`.** The only step that
  clears AA on white *and* `#F7F8FB` *and* the `green-50` tint, so one step
  covers every light context. Section labels, eyebrows, stat captions.
- **Green text on navy → `green-500` or `green-400`.** The surface flips and
  `green-800` collapses to 1.54:1. Inside a navy panel the accent must lighten.
- **Green as a fill, never as text → `green-500` `#78BC43`.** Active markers,
  progress dots, hairlines, the CTA inside a navy surface. Ink on it is always
  `#0B1428` (7.92:1); white would be 2.31:1.
- **Green as a wash → `green-50` `#F2FAEA`.** Chips and icon tiles, paired with
  `green-800` ink and a `green-500` hairline.

`green-500` as body text on white is the single most common misuse of this
palette. It is a fill colour and a dark-surface ink; it is not a light-surface
ink at any size.

### Verified contrast pairs

| Pair | Ratio | Verdict |
| --- | --- | --- |
| `#11151E` on `#FFFFFF` | 18.26:1 | Passes AA for all text |
| `#3F4754` on `#FFFFFF` | 9.37:1 | Passes AA for all text |
| `#7F7F7F` on `#FFFFFF` | 4.00:1 | Large text, icons, disabled only |
| `#273B6E` on `#F7F8FB` | 10.21:1 | Passes AA for all text |
| `#FFFFFF` on navy `#273B6E` | 10.84:1 | Passes AA for all text |
| `#FFFFFF` on `#1F3160` (navy hover) | 12.60:1 | Rises on hover |
| `#0B1428` on green `#78BC43` | 7.92:1 | Passes AA — **the green pairing** |
| `#0B1428` on `#8AC852` (green hover) | 9.14:1 | Rises on hover |
| `#D9DFEE` on `#0B1428` | 13.75:1 | Sidebar nav label on navy |
| `#FFFFFF` on green `#78BC43` | 2.31:1 | **Fails. Never do this.** |

> **Hard rule:** text and icons on API green are navy-black `#0B1428`
> (`--accent-fg`), never white.

### Status colours

| Role | Foreground | Background | Note |
| --- | --- | --- | --- |
| success | `#2E8F3E` | `#E9F6EC` | 4.11:1 — large text, icons, chips with the `-bg` pair; not small body text |
| warning | `#C47A0B` | `#FDF3E0` | 3.42:1 — icons and large text only; always pair with `-bg` and a label |
| danger | `#C6342C` | `#FBECEB` | 5.35:1 — safe for small text |
| info | `#273B6E` | `#EEF1F8` | Brand navy on navy-50 |

---

## 3. Type

| Role | Family | Weights |
| --- | --- | --- |
| Display / UI | **Mulish** | 300–800 |
| Documents | **Questrial** | 400 |
| Data / code / PNRs / money | **JetBrains Mono** | 400, 500 |

All three are OFL Google Fonts, reviewed and approved as the *official*
typefaces — not temporary stand-ins for API's commercial Sailec/Century Gothic.
Ship them self-hosted so the app works offline; **never** add a Google Fonts
`@import` or `<link>` for the Latin faces.

**Scale** — 1.2 minor third on a 16px base:
`xs 12` · `sm 14` · `base 16` · `md 18` · `lg 20` · `xl 24` · `2xl 30` · `3xl 38` · `4xl 48` · `5xl 60` · `6xl 76`

Strong size contrast is the hierarchy: **KPI numerals at 30–48px against 13–16px
body.** Apply `tracking-tight` (`-0.02em`) at 38px and up; never on body text.

### Casing and numbers

- **Sentence case** for UI labels, buttons, and table headers — "Crew lodging", not "Crew Lodging".
- **ALL CAPS** only on tiny eyebrow labels, always with tracking ≥ `0.12em`.
- Numbers are always **tabular** (`font-variant-numeric: tabular-nums`) and always
  carry **explicit units**: "3,241 rooms", "$138 /room-night", "+5h delay", "22 pax".

---

## 4. Space, shape, elevation

**Spacing** — 4px base, steps above. Major card gutters 28px; KPI-tile gaps 16px.

**Radii** — `xs 3` tags · `sm 6` chips · `md 10` inputs and nav · `lg 14` cards
and primary buttons · `xl 20` hero surfaces · `pill 9999` badges.

**Shadows** — all navy-tinted `rgb(39 59 110 / α)`, never neutral black.
Elevation ladder: `xs` flat · `sm` rest · `md` hover · `lg` menu · `xl` modal.

**Borders** — `#EEF0F5` interior dividers · `#E4E7EE` control borders ·
`#D4D9E1` structural separators. Weight is always 1px.

**Shell** — 232px sidebar · 64px topbar · content centered at 1280px max.

---

## 5. Motion and states

Subtle only. 120 / 180 / 280ms with `ease-out`.

| State | Behaviour |
| --- | --- |
| Hover | Buttons shift the background 8–10% and lift 1px (180ms). Table rows tint `#FAFBFD`. Secondary button border moves `#D4D9E1` → `#273B6E`. |
| Press | 120ms, `translateY(1px)`, no colour change. |
| Focus | 4px navy ring — `0 0 0 4px color-mix(in oklab, #273B6E 18%, transparent)`. Required on every focusable element. |
| Live status | 2s pulse loop — the only looping animation in the system. |
| Disabled | The only state permitted to reduce contrast. |

### Navy darkens on hover; green lightens

Buttons darken ~8–10% on hover — correct for navy, where white ink **gains**
contrast as the surface darkens (10.84 → 12.60 → 14.81:1). It inverts for green:
paired with its mandated navy-black ink, darkening **loses** contrast
(7.92 → 5.93 → 4.08:1, and `green-700` fails AA for normal text). So the green
CTA steps *lighter* — hover `#8AC852` (9.14:1), active `#9CD668` (10.68:1) —
keeping the same 1px lift while contrast rises. Ink stays `#0B1428` in every state.

No bounces, no parallax, no page-transition animation. Foreground never shifts
toward the background on hover. Honour `prefers-reduced-motion`: disable the
pulse and all transforms.

**Transparency is rare** — modal scrims are navy at 40% alpha, **no blur**.
Glassmorphism is not part of this brand.

---

## 6. Components

Coverage: Button (primary / secondary / ghost / icon / pill) · Card · KPI tile ·
Metric with delta chip · Badge · Tag · Filter chip · Form field · Select ·
Search field · Table · Sidebar nav · Topbar · Breadcrumb · Tabs · Modal · Menu ·
Tooltip · Status pill · Progress meter · Bar / line / donut chart · Avatar ·
Logo lockup · "+" motif.

### Buttons

Controls are 40px tall with a 44px minimum touch target. Radius `lg` (14px) for
primary and secondary, `pill` where the surface calls for it.

| Variant | Rest | Hover | Active |
| --- | --- | --- | --- |
| Primary | navy `#273B6E`, white ink | `#1F3160` + 1px lift + `shadow-md` | `#18264B` + `translateY(1px)` |
| Accent | green `#78BC43`, `#0B1428` ink | `#8AC852` + 1px lift | `#9CD668` |
| Secondary | white, `#11151E` ink, `#D4D9E1` border | border and ink → `#273B6E` | → `#18264B` |
| Ghost | transparent, navy ink | `navy-50` background | `navy-100` |
| On-navy | transparent, white ink, 34% white border | 12% white fill, white border | — |
| Disabled | `#EEF0F5` fill, `#7F7F7F` ink | — | — |

**One solid primary per viewport** for a given action. Other entry points are
secondary, ghost, or text links, and their copy should not repeat word for word.

### Cards

Always border **and** shadow together — 1px `#EEF0F5`, 12–14px radius, small
navy-tinted shadow at rest, larger on hover. Shadow alone reads as a floating
artifact rather than a bounded surface.

A card header is an icon tile plus a title: a 40px tinted rounded square holding
a single-stroke Lucide glyph, then the title, then right-aligned filter chips.

### Metrics

Number first, explanation second. Every metric pairs with a **signed delta** and
**the period it is measured against**. Deltas are pills with a soft tinted
background, a directional glyph, and a signed percentage. KPI numerals are
30–48px; the label is 13–16px. Every figure carries its unit.

Avoid fixed heights on KPI tiles, module cards, and highlight cards.

### Tables

Header row on `#F7F8FB` with a `#D4D9E1` bottom rule; body rows separated by
`#EEF0F5`. Row hover tints to `#FAFBFD` — a surface shift, never a text-colour
change. Numeric columns are right-aligned tabular mono. Status is a badge, never
a bare colour.

### Charts

**Static SVG or CSS only, with filled data encoding** — never empty outlines.
Series colours are navy and green only. Unfilled or projected periods are flat
`#EEF0F5` or a diagonal hatch, never a coloured outline.

Bar lengths are **computed, never eyeballed**. Declare `--max` once on the chart
container, give each bar its real value as `--v`, and size with
`calc(var(--v) / var(--max) * 100%)`. Units live in the value label, never in the
`calc()`. Every data point gets a visible category label and a visible value
label, rendered outside the bar so a short bar cannot clip it.

### Icons and the "+" motif

- **Icons: Lucide only** — 2px stroke, round caps and joins, no fills, 24×24
  viewBox, rendered 16–20px, `currentColor`.
- **The "+" is a brand element, not an icon.** Use it large (80px+) as tonal,
  low-contrast decoration — washes, 22px dot-grids, oversized watermarks —
  behind a raised content layer so it never competes with type. Never as a small
  glyph.
- **The "+" replaces decorative blobs.** Generic translucent circles are not part
  of this system. Wherever a panel wants geometric depth, it gets the "+".
- **Inset the "+", never bleed it.** A circle cropped by a panel edge still reads
  as a circle; a cropped cross does not — shearing one arm turns the "+" into an
  "L" or a "T". Two things break this in practice, both worth checking on any new
  surface:
  - the panel must really be the motif's containing block. A panel inside a
    `min-height: 100vh` wrapper can resolve to the full document height,
    anchoring `bottom` far below the visible edge.
  - `overflow: hidden` on the panel shears silently — nothing errors, the mark
    just loses an arm.
- Overlapping body copy at these tints is fine: navy lifted 10% toward white is
  `#3D4F7C`, and white type on it still measures 8.05:1.

---

## 7. Logo

| File | Use |
| --- | --- |
| `api-logo-navy.svg` | Primary — white and light ink surfaces |
| `api-logo-white.svg` | Navy, dark, or imagery surfaces |
| `api-logo-inline.svg` | `currentColor` — inherits text colour |
| `api-plus-mark.svg` | The standalone "+" brand element |

The mark is an "API" letterform on a 166.22 × 85.48 viewBox whose "A" carries the
brand "+" as two 3.5px round-cap strokes. Never recolour outside these fills,
never stretch, never add effects, **never rebuild it from type.** Minimum clear
space on all sides equals the height of the mark's crossbar.

**Inline it rather than using `<img>`.** An inline `<svg>` resolves
`currentColor` and needs no relative path. An external SVG loaded through `<img>`
cannot inherit the host document's `color`, so `api-logo-inline.svg` must never
be used that way — pick the navy or white file instead.

In an app, the wordmark sits in the top-left chrome, never in the body.

---

## 8. UI copy

Operational, confident, practical. This is an operations console, not a consumer
app.

- Prefer the second person ("Confirm the rooming list") over the first ("We'll confirm…").
- Use imperative verbs in actions and labels: "Release block", "Accept & notify", "Reconcile".
- No marketing fluff. No emoji. No exclamation marks.

**Use:** crew lodging · rooming list · room-night · block · release block ·
reconcile · IROPS · disrupted passenger · pax · rate addendum · sourcing ·
ground transportation · positive delta

**Avoid:** unlock · supercharge · effortless · seamless · revolutionary ·
game-changing · just · simply · delight · "lots of" · "many"

- ✅ "IROPS triggered — JL 006. 22 crew impacted. Suggested relocation: Pullman HND (14 rooms available)."
- ❌ "Uh oh! Something happened with your flight 😬"

---

## 9. Internationalization

Romance languages run 20–30% longer than English; German 35%+. Set max-widths
conservatively, use `clamp()` on KPI labels rather than fixed sizes, and let
`text-wrap: pretty` work. **Never fix a button width or a card height.**

The Mulish + Questrial + JetBrains Mono stack covers Latin, Latin Extended,
Cyrillic, and Vietnamese. CJK is the single sanctioned CDN exception — the Noto
Sans CJK families are tens of megabytes, so they load on demand.

For RTL: set `dir="rtl"`, use logical properties (`padding-inline-start`,
`margin-inline-end`), and mirror directional decorations. The "+" motif is
symmetric and works as-is, but chevrons, sparkline tails, and timeline rails need
to flip.

---

## 10. Anti-patterns

Each of these has been observed as a real failure mode in generated work.

| Anti-pattern | Why it fails | Do instead |
| --- | --- | --- |
| White text or icons on API green | 2.31:1 — fails at every size | `--accent-fg` `#0B1428` (7.92:1) |
| Darkening the green button on hover | Contrast drops 7.92 → 5.93 → 4.08:1 | Lighten to `green-400`, then `green-300` |
| `green-500` as text on a light surface | 2.31:1 on white | `green-800` `#35641A` |
| Green as a large background wash | Green is rationed; navy carries authority | Navy surface, green as a 3px marker or single CTA |
| Shadow-only cards | The surface edge dissolves against page chrome | 1px `#EEF0F5` border **plus** `shadow-sm` |
| Neutral-black shadows | Reads generic; this brand's depth is navy-tinted | `rgb(39 59 110 / α)` at all five steps |
| Two or three solid buttons for one action | No hierarchy left to read | One solid; rest secondary, ghost, or text |
| Hover that greys the label | Contrast falls below the rest state | Move the background; keep or raise ink contrast |
| Emoji as functional icons | Off-brand and explicitly banned | Lucide, 2px stroke, `currentColor` |
| The "+" as a small glyph | It is a brand element, not an icon | 80px+, tonal, behind content |
| A bled/cropped "+" | Shearing an arm turns it into an "L" | Inset it fully inside the panel |
| Setting the brand name as type where a lockup belongs | The real mark exists | Inline the mark from the logo SVGs |
| Gradients beyond the one IROPS hero | Backgrounds are flat by rule | Flat `#FFFFFF` / `#F7F8FB` / `#0B1428` |
| Glassmorphism, blur, gradient meshes | Not part of this brand | Solid surfaces; navy 40% scrim, no blur |
| Charts as empty outlines | Reads as a wireframe, not data | Filled navy/green encoding |
| Eyeballed bar widths like `width: 62%` | Proportions stop matching the data | One `--max`, a real `--v` per bar |
| A number without its unit | The brand always states units | "3,241 rooms", "$138 /room-night" |
| Non-tabular figures in a table or KPI | Digits jitter between rows | `font-variant-numeric: tabular-nums` |
| Title Case on UI labels | Sentence case is the rule | "Crew lodging" |
| ALL CAPS without wide tracking | Illegible at eyebrow sizes | Tracking ≥ 0.12em |
| Fixed button widths or card heights | German runs 35%+ longer | Let content set the size |
| Bounce, spring, or parallax motion | Reads consumer; this is an ops console | 120/180/280ms, `ease-out`, 1px lift |
| Google Fonts CDN for the Latin faces | Breaks offline portability | Self-hosted `woff2` |
| Stock photography of runways or smiling staff | AI-slop tropes, and off-brand | Geometry: "+" motif, dot-grids, oversized type |
| Photography inside a data-dense UI | Competes with information | Let type and colour do the work |

---

## Caveats — measured vs inferred

Worth knowing so you don't treat a guess as gospel:

- **`--control-h: 40px` is inferred.** The source declares a 64px topbar and a
  232px sidebar but no control height.
- **No dark theme is measured.** The source declares no dark-mode colour values.
  Anything dark beyond `#0B1428` sidebars and data heroes is your own derivation.
- **This system was measured for marketing and collateral surfaces.** The source
  treats interactive product UI and live dashboards as a separate, future
  concern, so component specifics here (buttons, tables, metrics) are the
  best-supported reading of the brand rather than a shipped app spec.
- **Two asset families are deliberately excluded** from this document: the 21
  product wordmarks, and 194 airline/cargo/rail/cruise carrier marks. The
  carrier marks are **third-party trademarks** — confirm redistribution rights
  before using them anywhere outside the company.
