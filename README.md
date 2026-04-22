# Foundation

Esteban's starter template for all new projects.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (Radix + Nova preset)
- Neon Postgres (when needed)
- Vercel (deployment)

## Getting Started
1. Create a new repo from this template
2. Clone it locally
3. Run `npm install`
4. Run `npm run dev`
5. Start building

## Design System
Live design system lives in `src/app/globals.css` — edit there for style changes.
`src/styles/design-tokens.ts` is a reference document only, not the live source.

**Brand:** API Global Solutions — navy `#273B6E` + green `#78BC43`.
**Fonts:** Mulish (UI), Questrial (docs), JetBrains Mono (data/code).
**Logos:** `public/assets/` — navy, green, white, and blue variants + plus mark.

See `docs/design-system/` for the full design system reference, component previews, and UI kit.

## Design Philosophy
- Target aesthetic: operational SaaS polish — confident, data-dense, calm, navy-and-green
- Typography: Mulish for UI, strong size contrast, JetBrains Mono for all data values
- Color: navy primary, green accent used sparingly and intentionally — no amber, teal, or purple
- Density: data-rich but never cluttered
- Whitespace: deliberate, not filler
- Every component intentional and premium, never default shadcn appearance

## Folder Structure
- `src/components/ui` — shadcn/ui components
- `src/components/layout` — Layout components (header, footer, sidebar)
- `src/components/shared` — Reusable components across pages
- `src/lib` — Utilities, helpers, API clients
- `src/hooks` — Custom React hooks
- `src/types` — TypeScript type definitions
- `src/styles` — Reference tokens and shared style utilities only (live theme is in src/app/globals.css)
- `public/assets` — Logos and brand assets
- `docs/design-system/` — Design system reference: color/type tokens, component previews, UI kit

## Rules
- TypeScript only, no JavaScript
- Tailwind CSS for all styling
- shadcn/ui as a base — always customize to match Design Philosophy, never use default appearance as-is
- Clean, lightweight code — no unnecessary dependencies