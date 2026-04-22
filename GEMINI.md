# Foundation — Antigravity Rules

## Stack
- Next.js (App Router)
- TypeScript (strict — never use JavaScript)
- Tailwind CSS (all styling — no inline styles or CSS modules)
- shadcn/ui (Radix + Nova preset)
- Neon Postgres (when needed)
- Vercel (deployment)

## Code Rules
- Always use TypeScript, never JavaScript
- Use Tailwind CSS for all styling
- Use shadcn/ui as a base but always customize styling to match Design Philosophy — never use default shadcn appearance as-is
- Keep components small and composable — but never sacrifice visual polish for simplicity
- Use server components by default, client components only when needed
- Write clean, lightweight code — no unnecessary dependencies
- All API routes go in src/app/api/

## Folder Structure
- src/components/ui — shadcn/ui components
- src/components/layout — Layout components (header, footer, sidebar)
- src/components/shared — Reusable components across pages
- src/lib — Utilities, helpers, API clients
- src/hooks — Custom React hooks
- src/types — TypeScript type definitions
- src/styles — Reference tokens and shared style utilities only (live theme is in src/app/globals.css)

## Design System
- Live design system lives in src/app/globals.css — edit there for any style changes
- src/styles/design-tokens.ts is a reference document only, not the live source
- Maintain consistent spacing, colors, and typography across all components
- Apply tokens with intention — always refer to Design Philosophy for how to use them

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
- At the start of each session, review .learnings/ files for relevant context
- After solving non-obvious issues or when I correct you, log the learning to .learnings/LEARNINGS.md
- Log errors and failed commands to .learnings/ERRORS.md
- Log feature requests or missing capabilities to .learnings/FEATURE_REQUESTS.md
- Before major tasks, review recent learnings to avoid repeating past mistakes
- Periodically consolidate learnings — merge duplicates, remove outdated entries, promote broadly applicable ones to AGENTS.md

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

## Antigravity-Specific Behavior
- Always generate a Plan Artifact before writing code on any multi-file task
- Use Manager View for tasks touching more than 2 files simultaneously
- After completing a task, suggest the next logical step
- When adding a component, check src/components/ui first
- If a change affects types, update src/types/ in the same task
- Use the browser tool to verify UI changes visually before marking complete
