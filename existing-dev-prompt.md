Read the project rules first — AGENTS.md (if you're Claude Code, CLAUDE.md is the same file: a symlink to AGENTS.md).
Skills are mirrored in two places for different tools — same content,
different path: .claude/skills/ (Claude Code) and .agents/skills/ (any other
agent). If you're Claude Code, use your native Skill tool — it already lists
what's available from .claude/skills/, don't read the folder manually. If
you're another agent without that native mechanism, read skill files directly
from .agents/skills/.

## Design System
The design system is already established in:
- src/app/globals.css → live source of truth for all tokens (colors, typography, spacing, radius, shadows); self-hosts the brand fonts from public/fonts/ — never add a Google Fonts CDN link
- src/styles/design-tokens.ts → TypeScript reference only
- docs/design-system/DESIGN.md → the full design system reference (read this before writing any UI); brand.json and tokens.css sit beside it, and ui-kit/ is an applied component reference

All styling must use these tokens. Never hardcode hex values, font names, or
spacing values. Never override or replace existing tokens.

Pay special attention to the Design Philosophy section — redesign this app to match
it. Current design is too generic — I want premium SaaS-level polish, clean
typography hierarchy, intentional color usage, nothing generic or default looking.

## UX & Quality Standard
Apply the impeccable skill (see the skills note above for how to invoke it on your tool) as a quality and compliance framework:
- The design system above is the source of truth — impeccable's own DESIGN.md discovery is not needed here
- Run `audit` for accessibility, performance, and responsive compliance as your minimum bar
- Run `critique` for a UX heuristic review, and `polish` as a final quality pass before shipping
- Apply `harden` (production-readiness: errors, i18n, edge cases) and `adapt` (device/screen coverage) as needed per component
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
- Which impeccable commands are most relevant to this codebase

Wait for my approval before changing anything.