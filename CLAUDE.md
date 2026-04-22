# Foundation - Claude Code Rules

## Stack
- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS + shadcn/ui (Radix, Nova preset)
- Neon Postgres (when needed)
- Vercel (deployment)

## Rules
- TypeScript only, never JavaScript
- Tailwind for all styling, no CSS modules or inline styles
- Use shadcn/ui as a base but always customize styling to match Design Philosophy — never use default shadcn appearance as-is
- Server components by default, client only when needed
- Clean, lightweight code — no unnecessary dependencies
- Live design system lives in src/app/globals.css — edit there for any style changes
- src/styles/design-tokens.ts is a reference document only, not the live source

## File Structure
- src/components/ui — shadcn/ui
- src/components/layout — Headers, footers, sidebars
- src/components/shared — Reusable components
- src/lib — Utilities, helpers
- src/hooks — Custom hooks
- src/types — TypeScript types
- src/styles — Reference tokens and shared style utilities only (live theme is in src/app/globals.css)

## Design Philosophy

**Brand:** API Global Solutions — operational SaaS for airlines, cargo carriers, rail, and cruise. Users are dispatchers, crew schedulers, ops directors, finance controllers. Not consumers.

**Target aesthetic:** Modern ops console — confident, data-dense, calm, navy-and-green. Linear.app level of polish applied to an operations dashboard.

**Colors:**
- Primary: Navy `#273B6E` — primary buttons, sidebar, nav chrome, data hero surfaces.
- Accent: Green `#78BC43` — used sparingly: active nav markers, CTAs inside navy surfaces, positive deltas, live-status pulses.
- Surfaces: `#FFFFFF` cards, `#F7F8FB` page chrome, `#0B1428` sidebar/data heroes.
- Ink neutrals (navy-tinted) for all text and chrome. No amber, teal, or purple.

**Typography:**
- Mulish — all UI and display text (weights 400–800).
- Questrial — documents and presentations only.
- JetBrains Mono — all data values, PNRs, IDs, money, chart ticks.
- Strong size contrast: KPI numerals 30–48px, body 13–15px.

**Cards:** 1px border `#E4E7EE` + 14px radius + navy-tinted shadow. Always border + shadow together. Never shadow-only.

**Shadows:** All navy-tinted `rgb(39 59 110 / α)`. Lift on hover.

**Icons:** Lucide only. No emoji, no unicode icons.

**Motion:** 180ms ease-out on hover (darken + 1px lift). 120ms on press. No bounces or parallax.

**Copy:** Sentence case. Imperative verbs. Tabular numerics with explicit units. No emoji, no fluff.

**Avoid:** Default shadcn appearance, amber/teal/purple accents, gradients on standard surfaces, generic AI aesthetics, consumer-app softness.

## Self-Improvement
- Review .learnings/ at session start
- Log corrections and errors to .learnings/
- Consolidate periodically

## Handoff Workflow
- Always read `HANDOFF.md` before starting meaningful work in this repository
- Use `HANDOFF.md` to understand:
  - project summary
  - current status
  - last session changes
  - files touched
  - open issues
  - next best step
  - guardrails and known decisions
- Before ending a meaningful work session, update `HANDOFF.md`
- Keep `HANDOFF.md` short, current, and practical
- Update these sections when relevant:
  - Current Status
  - Last Session Changes
  - Files Touched
  - Open Issues
  - Next Best Step
  - Known Decisions
- Do not turn `HANDOFF.md` into a long diary or changelog
- Do not duplicate the README
- Prefer concise bullet points over long paragraphs
- When in doubt:
  - preserve working logic
  - avoid unnecessary rewrites
  - follow the Next Best Step unless a blocker requires otherwise
