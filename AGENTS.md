# AGENTS.md — AI Development Rules

Rules for AI assistants (and humans) working in this repository. Read this and
the `/ai` knowledge base before making changes.

Project in one line: a **Vue 3 + Vuetify 4 design-system preset + living style
guide** (JavaScript, Vite, Tailwind 4 supplementary layer, `@mdi/js` SVG icons,
self-hosted Roboto). No backend, database, API, or auth.

---

## The LIFT workflow (required for every task)

```
Learn → Intend → Forge → Tune
```

1. **Learn** — Understand the relevant part of the system and its existing
   conventions before writing anything. Start with `/ai/architecture.md` and
   `/ai/coding-standards.md`; read the actual files you'll touch. Confirm how the
   preset, tokens, and sections relate.
2. **Intend** — State the plan and intended changes; confirm scope with the user
   before editing. For anything beyond a trivial change, say what files you'll
   touch and why.
3. **Forge** — Implement, following the project's established patterns (see
   Coding standards below and `/ai/coding-standards.md`). Reuse existing utilities
   and the global Vuetify defaults; don't reinvent.
4. **Tune** — Verify the change works (run `npm run dev`/`build`; for UI, look at
   it in both light and dark themes), then **update the `/ai` docs** to reflect
   what changed.

---

## Coding standards (derived from this codebase)

Full detail in `/ai/coding-standards.md`. Essentials:

- **JavaScript + ESM only.** No TypeScript.
- **Vue 3 `<script setup>` SFCs**, Composition API (`ref`/`computed`). File order:
  `<script setup>` → `<template>` → optional `<style scoped>`.
- **Use the `@` alias** for `src` imports. Group: Vue → third-party → local.
- **Vuetify utility classes are the primary styling tool** (`d-flex`, `ga-*`,
  `pa-*`, `text-title-medium`, `rounded-lg`, `text-medium-emphasis`). Tailwind is
  supplementary (no prefix, preflight off; Vuetify wins on overlapping names).
- **Never hard-code brand colors** — use theme color names (`color="secondary"`)
  or iterate `src/data/tokens.js`. Design-system changes go in the **preset**
  (`src/plugins/vuetify.js`, `src/styles/settings.scss`), not scattered in
  components.
- **Icons:** import `@mdi/js` path constants and bind with `:icon` — never string
  names like `"mdi-plus"`.
- **Rely on global component defaults**; omit props the defaults already set.
- 2-space indent, single quotes, no semicolons in JS/script blocks.

---

## AI behavior rules

- **Do not modify `reference/`.** It is the immutable source spec; the app is
  built to match it.
- **Do not remove `import 'vuetify/styles'` from `main.js`** — it loads the
  utility layer (see `/ai/issues/bugs-fixed.md` #1).
- **Do not add runtime network dependencies** — keep fonts and icons bundled.
- **Do not introduce** TypeScript, a state-management library, a backend/API, or a
  database without an ADR and user sign-off (see Architecture decision rules).
- **Prefer editing the preset once** over patching many components.
- When unsure whether something applies (this repo has no backend/DB/auth),
  check `/ai/*` — several categories are intentionally "not applicable."
- Verify before claiming done: report real command output; if you couldn't run
  something, say so.

---

## Documentation update rules (Tune phase)

After any non-trivial change, update the relevant `/ai` docs in the same change:

- New/changed component or structure → `/ai/architecture.md`,
  `/ai/features/feature-overview.md`.
- New convention/pattern → `/ai/coding-standards.md`.
- Token/theme/default change → `/ai/database-schema.md` (token shapes) and note in
  `architecture.md`; keep `reference/` alignment in mind.
- Build/run/deploy change → `/ai/deployment.md` and `README.md`.
- Bug fixed → append to `/ai/issues/bugs-fixed.md`; remove from `known-issues.md`.
- New known limitation or debt → `/ai/issues/known-issues.md` /
  `technical-debt.md`.

Keep docs **stack-accurate** — describe what the project really uses.

---

## Issue tracking rules

- Log discovered defects in `/ai/issues/known-issues.md` with severity and a
  suggested fix; move them to `bugs-fixed.md` once resolved (with root cause).
- Record recurring gotchas in `/ai/issues/troubleshooting.md`.
- Track non-blocking shortcuts in `/ai/issues/technical-debt.md`.

---

## Architecture decision rules

- Any structural or stack change (new dependency of significance, new layer,
  new framework, adding a backend/DB/API/state library, changing the build or
  theming approach) requires a new ADR in `/ai/decisions/` (`ADR-NNN-title.md`),
  following the ADR-001 format: Context / Decision / Consequences.
- Reference the ADR in the change description.
- Small, in-pattern changes do not need an ADR.

---

## Quick commands

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
```
