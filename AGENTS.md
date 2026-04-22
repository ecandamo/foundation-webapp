<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-rules -->
# Foundation Project Rules

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

**Brand:** API Global Solutions — the global leader in crew accommodation and travel logistics technology. The product serves airlines, cargo carriers, rail operators, and cruise lines. Users are dispatchers, crew schedulers, ops directors, and finance controllers — not consumers.

**Target aesthetic:** Modern operational SaaS — confident, data-dense, calm, and unmistakably navy-and-green. Think operations console, not marketing site. Reference: Linear.app level of polish applied to an ops dashboard.

**Colors:**
- Primary: Navy `#273B6E` — executive authority, trust, structure. Use on primary buttons, sidebar, nav chrome, data hero surfaces.
- Secondary/Accent: Green `#78BC43` — operational, active, "go". Use sparingly: active nav markers, primary CTA inside navy surfaces, positive deltas, live-status pulses.
- Surfaces: `#FFFFFF` cards, `#F7F8FB` page chrome, `#0B1428` sidebar and data heroes.
- Ink neutrals (navy-tinted) for all supporting text and chrome. Never use generic slate or gray palettes.
- No amber, teal, or purple — those are not API brand colors.

**Typography:**
- Mulish — all UI and display text. Weights 400–800.
- Questrial — documents and presentations only.
- JetBrains Mono — all data values, PNRs, IDs, money amounts, and chart ticks.
- Strong size contrast: KPI numerals 30–48px, body 13–15px. Never flat typographic hierarchy.
- Letter spacing: tight (`-0.02em`) on display/KPI, wide (`0.12em`) on ALL-CAPS eyebrow labels only.

**Backgrounds:** Flat. No gradients except navy→deeper-navy on IROPS/data hero surfaces. No photographic backgrounds in UI. No glassmorphism.

**Cards:** Always 1px border `#E4E7EE` + radius `14px` + navy-tinted shadow. Never shadow-only — always border + shadow together. Shadow lifts on hover.

**Shadows:** All navy-tinted (`rgb(39 59 110 / α)`). Five steps: xs (flat), sm (rest), md (hover), lg (menu), xl (modal).

**Radii:** xs 3px (tags), sm 6px (chips), md 10px (inputs, nav items), lg 14px (cards, buttons), xl 20px+ (hero surfaces), pill (badges).

**Icons:** Lucide only. 2px stroke, 24×24 viewBox, rendered at 16–20px. `currentColor`. No emoji, no unicode icons, no PNG icons.

**Motion:** Subtle. Hovers: darken ~8–10% + lift 1px, 180ms ease-out. Press: 120ms, `translateY(1px)`. Pulse dot on live status (2s loop). No bounces, no parallax.

**Copy/content style:**
- Sentence case for all UI labels, buttons, table headers.
- ALL CAPS only for tiny eyebrow labels with wide tracking.
- Imperative verbs in actions: "Release block", "Confirm rooming list", "Reconcile".
- Tabular numerics, explicit units: "3,241 rooms", "$138 /room-night", "+5h delay".
- No emoji. No marketing fluff. No consumer-friendly softening.

**Layout:** Fixed sidebar 232px, fixed topbar 64px. Content max-width 1280px. 28px gutters between cards, 16px between KPI tiles.

**Density:** Data-rich but never cluttered. Whitespace is used deliberately, not as filler. Never sacrifice information density for breathing room — find both.

**What to avoid:**
- Generic AI-generated aesthetics
- Default shadcn appearance without customization
- Amber, teal, or purple accents
- Gradients on standard surfaces
- Emoji or unicode icon hacks
- Consumer-app softness or marketing language
<!-- END:project-rules -->

<!-- BEGIN:self-improvement-rules -->
# Self-Improvement
- At the start of each session, review .learnings/ files for relevant context
- After solving non-obvious issues or when I correct you, log the learning to .learnings/LEARNINGS.md
- Log errors and failed commands to .learnings/ERRORS.md
- Log feature requests or missing capabilities to .learnings/FEATURE_REQUESTS.md
- Before major tasks, review recent learnings to avoid repeating past mistakes
- Periodically consolidate learnings — merge duplicates, remove outdated entries, promote broadly applicable ones to AGENTS.md
<!-- END:self-improvement-rules -->

<!-- BEGIN:handoff-workflow -->
# Handoff Workflow
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
<!-- END:handoff-workflow -->
