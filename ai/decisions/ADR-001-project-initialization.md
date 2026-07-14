# ADR-001: Project Initialization (AI Knowledge Base + LIFT Workflow)

- **Status:** Accepted
- **Date:** 2026-07-14

## Context

The project (a Vue 3 + Vuetify 4 design-system preset and living style guide) was
analyzed top to bottom, and an AI-friendly knowledge base was introduced to make
future development consistent and well-understood before any code changes.

At initialization the project is a single client-only Vite SPA with no backend,
database, API, auth, or tests — so several standard onboarding categories are
documented as "not applicable" rather than fabricated.

## Decision

The project adopts:

- **`AGENTS.md`** — AI behavior rules and coding standards derived from the real
  codebase.
- **`/ai` directory** — project memory: `project-context.md`, `architecture.md`,
  `database-schema.md`, `api-contracts.md`, `coding-standards.md`,
  `deployment.md`, `features/`, `issues/`, `decisions/`.
- **The LIFT workflow** — Learn → Intend → Forge → Tune — for all future work.

## Consequences

**Benefits**
- Faster, more accurate onboarding for humans and AI.
- A single source of truth for stack, architecture, and conventions.
- A repeatable development process.

**Limitations / obligations**
- The `/ai` docs and `AGENTS.md` must be updated as the system evolves (this is a
  Tune-phase requirement in `AGENTS.md`).
- Docs describe a currently backend-less app; if a backend/DB/API is later added,
  the "not applicable" files must be replaced with real content (and a new ADR
  written).

## Related design decisions already embodied in the code

These predate this ADR but are recorded here for traceability (see
`/ai/architecture.md`):

- Vuetify preset (theme + defaults) is the portable product; the showcase exists
  to document/verify it.
- `import 'vuetify/styles'` recompiled through `settings.scss` is mandatory for
  the utility layer.
- Tailwind 4 added as a supplementary, no-prefix, preflight-disabled layer.
- Icons use the SVG `mdi-svg` set via `@mdi/js`.
- JavaScript (no TypeScript); npm; self-hosted fonts.
