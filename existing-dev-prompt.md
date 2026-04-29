Read AGENTS.md, CLAUDE.md, and GEMINI.md for all project rules.
Review .agents/skills/ for available skills.

## Design System
The design system is already established in:
- src/app/globals.css → live source of truth for all tokens (colors, typography, spacing, radius, shadows)
- src/styles/design-tokens.ts → reference only

All styling must use these tokens. Never hardcode hex values, font names, or
spacing values. Never override or replace existing tokens.

Pay special attention to the Design Philosophy section — redesign this app to match 
it. Current design is too generic — I want premium SaaS-level polish, clean 
typography hierarchy, intentional color usage, nothing generic or default looking.

## UX & Quality Standard
Apply the ui-ux-pro-max skill from .agents/skills/ as a quality and compliance framework:
- Skip Step 2 (--design-system) — the design system above replaces it
- Use §1 Accessibility, §2 Touch & Interaction, §3 Performance as your minimum bar
- Apply §5 Layout & Responsive, §6 Typography & Color, §7 Animation, §8 Forms &
  Feedback as needed per component
- Never use emoji as icons — use Lucide (already in the stack)
- All touch targets minimum 44×44px, visible focus states, no color-only meaning

## Redesign Scope
Preserve all existing functionality and data logic. Only change visual styling —
no changes to API routes, business logic, or data fetching.

## Before Touching Any Code
Generate a Design Audit covering:
- Components that look too generic or default
- What needs the most attention (typography, spacing, color usage)
- Which screens/pages to tackle first
- Specific changes recommended per component
- Which ui-ux-pro-max rule categories are most relevant to this codebase

Wait for my approval before changing anything.