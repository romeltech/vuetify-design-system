# ADR-002: Publish the design system as an npm package (monorepo)

- **Status:** Accepted
- **Date:** 2026-07-14
- **Supersedes:** the single-app layout described in ADR-001 (docs updated accordingly)

## Context

The design system was consumed by copy/paste. To reuse it across future projects
via `npm i`, it needed to become an installable package. A key constraint shaped
the design: a Vuetify preset can't ship as compiled CSS — the shape/font SASS
variables must be compiled into Vuetify at the *consumer's* build via
`vite-plugin-vuetify`'s `styles.configFile`. So the package ships raw `.scss`
plus plain-ESM JS.

## Decision

- Convert the repo into an **npm workspaces monorepo**:
  - `packages/vuetify-preset` — the published package (theme, defaults, tokens,
    icons config, `settings.scss`, optional fonts entry).
  - `apps/playground` — the existing 13-section style guide, now consuming
    `vuetify-preset` as a workspace dependency (keeps verifying it).
- Package name **`vuetify-preset`** (unscoped), **public on npmjs.com**, license **MIT**.
- Ship **source ESM directly** (no bundler); `exports` map with subpaths:
  `.`, `./tokens`, `./fonts`, `./settings.scss`, `./package.json`.
- `vue` + `vuetify` are peer deps; `@fontsource/*` optional peers; `@mdi/js` a dep.
- The playground resolves the SASS via `require.resolve('vuetify-preset/settings.scss')`
  (pnpm/yarn-safe) and imports `{ preset }` + `vuetify-preset/fonts`.

## Consequences

**Benefits**
- Future projects install the design system instead of copying files.
- Docs (playground) and library live together; every change is re-verified visually.
- Clean, minimal published tarball (10 files, ~7 kB) via the `files` allowlist.

**Limitations / obligations**
- Publishing requires an npmjs account + `npm login` (manual/interactive).
- Two things to keep in sync: `tokens.js` (docs data) mirrors `theme.js` (the
  live theme); both trace to `reference/v1/`.
- SASS consumption has a pnpm/yarn symlink caveat — always resolve the
  `settings.scss` path (documented in the package README).

## Verification performed

- `npm run build` (root → playground) succeeds consuming the workspace package.
- Runtime: 58/58 icons render as SVG, Tailwind `flex` applies, zero console
  errors, screenshots match the pre-package build in both themes.
- `npm pack --dry-run`: tarball contains only `src/`, `styles/`, `README.md`,
  `LICENSE`, `package.json`.

## Publish process (summary)

`npm login` → `npm pack --dry-run` (inspect) → `npm publish` (from
`packages/vuetify-preset`; `publishConfig.access: public`) → `git tag v0.1.0`.
Optional: GitHub Actions to publish on tag with `--provenance`. See
`ai/deployment.md`.
