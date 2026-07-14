# API Contracts

**Not applicable — this project exposes and consumes no APIs.**

There is no backend, no REST/GraphQL/RPC layer, no HTTP client, and no network
communication at runtime. The app is a static client-only Vue SPA; fonts and
icons are bundled at build time (no CDN requests).

## Internal "contracts" (component & module interfaces)

The closest equivalent to contracts here are the props of the two shared
components and the token module shape. Documented for consistency:

### `DsSection.vue` props
| Prop | Type | Required | Notes |
| --- | --- | --- | --- |
| `id` | String | yes | Anchor id used by the in-page nav |
| `index` | String | yes | Two-digit label, e.g. `"01"` |
| `group` | String | no | Defaults to `"FOUNDATIONS"` (also `"COMPONENTS"`, `"HANDOFF"`) |
| `title` | String | yes | Section heading |
| slot `intro` | — | no | Optional intro prose |
| slot default | — | — | Section body |

### `SpecCaption.vue` props
| Prop | Type | Required | Notes |
| --- | --- | --- | --- |
| `text` | String | yes | Roboto-Mono caption echoing the Vuetify props of a specimen |

### Token module (`src/data/tokens.js`)
See `/ai/database-schema.md` for the exported shapes.

If a backend or API is ever added, replace this file with real endpoint
contracts (method, path, request/response schema, auth, error format).
