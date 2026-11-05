---
applyTo: "**/*.{ts,tsx,css,json}"
---

# Testing instructions

- Run focused tests during iteration, then run `npm run lint`, `npm test`, and `npm run build`.
- Extend the existing Vitest tests for pure filters, validation, routing helpers, and simulation transitions.
- Prefer deterministic tests over snapshots that encode incidental styling.
- Verify all required routes, nested project routes, theme persistence, form validation, filters, and CLOUD TWIN state transitions.
- If browser tooling is unavailable, state that limitation instead of claiming visual or device testing.
- Check responsive CSS at the requested breakpoints by inspection or browser tooling when available.
