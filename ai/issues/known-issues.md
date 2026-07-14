# Known Issues

Minor, non-blocking. None affect the portable preset; all are cosmetic in the
style-guide showcase.

| # | Severity | Area | Description | Notes / suggested fix |
| --- | --- | --- | --- | --- |
| 1 | Low | §9 Data table | The selection checkboxes render **black** (primary) rather than green (secondary). Vuetify's `v-data-table` doesn't route the global `VCheckbox` default color into its internal select control. | Optional: pass a `color`/slot override for the table's select column, or accept it. Status chips (the main spec) are correct. |
| 2 | Low | §8 Navigation, stepper | A **completed** step renders as a plain grey numbered circle rather than a green check. The active step correctly shows primary. | Cosmetic; matches Vuetify's default `v-stepper` completion rendering. Could customize the item slot if exact reference parity is wanted. |
| 3 | Low | Sticky in-page nav | When jumping to an anchor, the sticky nav can briefly overlap the top of a section. `scroll-margin-top` mitigates it. | Tune `.ds-section { scroll-margin-top }` in `app.scss` if needed. |
| 4 | Info | Build | Vite warns about a >500 kB JS chunk (Vuetify is large). | Acceptable for a reference app; see `technical-debt.md` for optional code-splitting. |

No functional, security, or data-integrity issues exist (there is no backend,
data store, or auth surface).
