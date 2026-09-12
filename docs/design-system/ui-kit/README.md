# Applied UI kit — ACES operations console

A runnable, component-based interface that exercises the API design system on a
real product surface. Double-click `index.html` to open it in a browser — it is
a single self-contained file, no build step and no local server (it only needs
internet access for the React and Babel CDN scripts).

---

## Why an operations console

The source system's declared scope is marketing sites, decks, and sales
collateral, with interactive product UIs called out as a separate future
concern. This kit exists to prove the tokens hold up under the hardest case the
brand describes — a **data-dense operations surface** — because that is where the
brand's own language ("confident, data-dense, calm", navy chrome, sparing green,
tabular numbers with explicit units) is most load-bearing. Every string in it is
modelled on the voice examples in [`../DESIGN.md`](../DESIGN.md) §8: IROPS events,
rooming lists, room-night rates, crew counts.

---

## Structure

```
index.html   The whole kit — a single self-contained page:
             • <link> to ../tokens.css and app.css
             • React 18.3.1 + ReactDOM + Babel standalone (CDN)
             • an embedded <style> block for the entry chrome
             • eight inline <script type="text/babel"> component blocks:
                 Icon           Lucide path data at 24×24, 2px stroke, currentColor.
                 Sidebar        Navigation — 232px navy rail, green active marker.
                 EventList      List rail — selectable live IROPS events + filter chips.
                 MessageBubble  Message — one thread note (inbound / mine / system).
                 InputBar       Composer — note field plus the event's decision actions.
                 ChatArea       Conversation area — scrollable handoff thread + composer.
                 WorkspaceArea  Main surface — topbar, KPI row, navy data hero, bar chart.
                 AppShell       App shell — composes all of the above, owns app state.
             • an entry block that renders <Entry> (ReviewBar + AppShell) into #root
app.css      Component styles. Every value resolves to a design-system token —
             no raw hexes except where color-mix composes one.
```

The components are inlined rather than kept in separate files on purpose:
Babel-standalone fetches external `src` scripts over XHR, which browsers block
on `file://`, so a multi-file version renders only from a web server. Each block
ends with `Object.assign(window, { … })` so the later blocks and the entry can
see it without a module system, and they appear in dependency order — a component
is defined before the one that renders it.

### Render tree

```
Entry (index.html)
├── ReviewBar          → Icon
└── AppShell
    ├── Sidebar
    ├── EventList
    └── WorkspaceArea
        └── ChatArea
            ├── MessageBubble ×n
            └── InputBar
```

---

## Component roles

| Role | Component | What it demonstrates |
| --- | --- | --- |
| App shell | `AppShell` | The 232px / 320px / fluid three-column grid; selection and draft state |
| Navigation / sidebar | `Sidebar` | Navy-900 chrome, green 3px active rail, hover raises label to full white |
| List rail | `EventList` | Scannable rows, tabular mono flight numbers, status badges, filter chips |
| Main surface | `WorkspaceArea` | 64px topbar, KPI tiles at 16px gaps, navy data hero with the "+" motif, computed bar chart |
| Conversation area | `ChatArea` | Bounded scrollable thread with a pinned composer |
| Message | `MessageBubble` | Three note treatments; navy bubble for the current operator |
| Composer / input bar | `InputBar` | One solid primary action; secondary and ghost for everything else |
| Icon system | `Icon` | Lucide only — 14 glyphs, 2px stroke, `currentColor` |

---

## Usage

**Open it.** Double-click `index.html` — it runs directly from disk. React,
ReactDOM, and Babel load from unpkg (the one thing that needs internet);
everything else is local and inline. No install, no bundler, no server.

**Reuse a single component.** Copy that component's inline
`<script type="text/babel">` block from `index.html` plus the matching block from
`app.css`, and make sure `tokens.css` and `Icon` load first.
`MessageBubble`, `InputBar`, and `ChatArea` depend on `Icon`; `ChatArea` also
depends on `MessageBubble` and `InputBar`; `WorkspaceArea` depends on `ChatArea`.

**Port it to a real build.** Move each block into its own `.jsx` module, replace
the `Object.assign(window, …)` tail with an `export`, and the components work
unchanged under Vite, Next, or any JSX toolchain. No component reaches outside its
props except for the shared `Icon` global.

**Re-skin it.** Change nothing here. The values live in `../tokens.css` (the raw
reference mirror of `src/app/globals.css`); adjust a token there and every
component follows, because no component hardcodes a colour.

**Swap the demo data.** The `AppShell` block holds the two arrays (`EVENTS`,
`BASE_NOTES`) that drive the whole surface. Everything below it is presentational.

---

## Design notes worth copying

- **One solid primary per viewport.** The hero carries the green `Release block`
  CTA *inside* the navy surface; the composer carries the navy `Accept & notify`.
  Everything else is secondary, ghost, or a chip.
- **Green lightens on hover; navy darkens.** Navy gains contrast as it darkens
  (10.84 → 12.60 → 14.81:1). Green paired with its mandated navy-black ink
  *loses* contrast when darkened (7.92 → 5.93 → 4.08:1), so the green CTA
  lightens instead (7.92 → 9.14 → 10.68:1). Same 1px lift, same shadow step,
  contrast rising in both cases.
- **Bars are computed, never eyeballed.** `--max` is declared once on
  `.ak-chart`; each bar carries its real value as `--v`, and width is
  `calc(var(--v) / var(--max) * 100%)`. Units live in the label text.
- **Numbers are tabular and united.** `font-variant-numeric: tabular-nums`
  wherever a figure appears, and no figure ships without its unit.
- **Cards keep border + shadow.** Never shadow alone.
- **The "+" is decoration at scale.** 280px at 7% white in the hero corner,
  behind a `z-index: 1` content layer so it never competes with type.
- **Real assets only.** The sidebar renders the preserved
  `public/logos/api-logo-white.svg` and the review bar the navy variant — never a
  redrawn mark. The `currentColor` "inline" variant is deliberately *not* used
  through `<img>`, where it cannot inherit the host document's colour.
- **Thread autoscroll uses `scrollTop`**, not `scrollIntoView`, which can break
  embedded previews.
- **Accessibility.** Every interactive element has a `:focus-visible` ring; the
  sidebar's ring is green so it reads against navy. Controls are 40px with a 44px
  minimum target. Icons are `aria-hidden`; icon-only buttons carry `aria-label`.
  Filter chips use `aria-pressed`, nav uses `aria-current`, and
  `prefers-reduced-motion` disables the pulse and all transforms.
- **Responsive.** The list rail collapses below 1180px and the sidebar below
  860px, rather than squeezing three columns into a phone width.

---

## Source basis

Layout numbers (232px sidebar, 64px topbar, 28px card gutters, 16px KPI gaps),
colour application, motion timings, iconography, and voice all come from the API
design system. See [`../DESIGN.md`](../DESIGN.md) for the full token reference and
[`../brand.json`](../brand.json) for the machine-readable brand definition; the
values themselves live in [`../tokens.css`](../tokens.css) (a raw mirror of the
app's live `src/app/globals.css`).

The sample content — flights, properties, rates, crew counts, and thread
participants — is illustrative demo data written in the brand's voice. **It is not
API operational data.**
