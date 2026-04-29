I'm starting a new project called [NAME].

Read AGENTS.md, CLAUDE.md, and GEMINI.md for all project rules.
Review .agents/skills/ for available skills.

## Design System
The design system is already established in:
- src/app/globals.css → live source of truth for all tokens (colors, typography, spacing, radius, shadows)
- src/styles/design-tokens.ts → reference only

All styling must use these tokens. Never hardcode hex values, font names, or
spacing values. Never override or replace existing tokens.

Pay special attention to the Design Philosophy section — I want premium SaaS-level 
polish, clean typography hierarchy, intentional color usage, nothing generic or 
default looking.

## UX & Quality Standard
Apply the ui-ux-pro-max skill from .agents/skills/ as a quality and compliance framework:
- Skip Step 2 (--design-system) — the design system above replaces it
- Use §1 Accessibility, §2 Touch & Interaction, §3 Performance as your minimum bar
- Apply §5 Layout & Responsive, §6 Typography & Color, §7 Animation, §8 Forms &
  Feedback as needed per feature
- Never use emoji as icons — use Lucide (already in the stack)
- All touch targets minimum 44×44px, visible focus states, no color-only meaning

## What to Build
[DESCRIPTION]

## Deliverable Before Coding
Generate a Plan covering:
- Folder structure
- Key components
- Data model
- Implementation order
- Which ui-ux-pro-max rule categories are most relevant to this build

Wait for my approval before writing any code.