# Technical Debt

| Item | Impact | Notes |
| --- | --- | --- |
| **No committed automated tests** | Medium | `playwright` is installed and was used ad-hoc to screenshot-verify the guide in both themes, but there is no committed test suite or CI running it. If this becomes a maintained library, add a small Playwright visual/smoke test and wire it into CI. |
| **No linter/formatter config** | Low | No ESLint/Prettier committed. Conventions are documented in `/ai/coding-standards.md` and followed by hand. Adding `eslint` + `eslint-plugin-vue` + `prettier` would enforce them automatically. |
| **Large single JS chunk (>500 kB)** | Low | Vite warns at build. Fine for a reference app. If needed, code-split with dynamic `import()` of sections or `build.rollupOptions.output.manualChunks`. |
| **`playwright` in dependencies** | Low | Dev-only verification tool; not part of the runtime. Remove if minimal deps are preferred (noted in README). |
| **Preset kept in sync by hand** | Low | `src/data/tokens.js`, the theme config in `src/plugins/vuetify.js`, and `reference/v1/…` must be manually kept in agreement. The §13 Handoff section mitigates drift for the config files by importing them via `?raw`. |
| **Two minor cosmetic gaps vs reference** | Low | Data-table select color and stepper "complete" icon — see `known-issues.md`. |

No security debt: there is no backend, secrets, data store, user input persistence,
or third-party runtime calls.
