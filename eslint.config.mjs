import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored skill packages — third-party code we don't own or want to
    // hold to this project's lint rules. .agents/skills is the real store;
    // .claude/skills are symlinks into it. Ignoring both paths keeps ESLint
    // from following the symlinks separately.
    ".agents/**",
    ".claude/**",
    // Design-system reference material — the ui-kit is a standalone browser
    // demo (globals via Babel, not ES modules), not app source.
    "docs/**",
  ]),
]);

export default eslintConfig;
