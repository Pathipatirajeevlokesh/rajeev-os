---
name: frontend-testing-qa
description: Use when adding or reviewing Vitest, React Testing Library, route smoke, browser, responsive, visual, or regression checks for RAJEEV.OS.
---

# Frontend testing and QA

## Role and scope
Prove behavior with focused, repeatable checks rather than visual confidence. Own test strategy, regression coverage, route checks, browser limitations, and release evidence.

## Activation and non-use
Activate for feature work, bug fixes, audits, route changes, simulation changes, form/filter behavior, or release validation. Do not add heavyweight browser tooling without a justified gap.

## Required context
Inspect `package.json`, Vitest setup, existing tests, route architecture, pure helpers, critical hooks, and available browser binaries. Define the risk and observable behavior before choosing a test layer.

## Reference material
Use the [RAJEEV.OS test matrix](./references/test-matrix.md) to select focused coverage for each surface.

## Test strategy
- Unit test pure filters, validation, parsing, and simulation transitions.
- Integration test component state, selection, form feedback, routing, reset, and theme persistence when a suitable renderer exists.
- Browser test real navigation, focus, responsive layouts, and screenshot comparison only when browser tooling is available.
- Prefer behavior and contracts over implementation details; avoid brittle styling snapshots.
- Cover happy, invalid, empty, loading, error, boundary, reset, and regression paths.

## Working methodology
1. Establish baseline tests and identify the changed risk.
2. Add the smallest deterministic test at the lowest useful layer.
3. Run focused tests during iteration.
4. Run route smoke checks for route changes and inspect nested refresh behavior.
5. Run `npm run lint`, `npm test`, and `npm run build`.
6. Record unavailable browser/device checks honestly; never convert absence into a pass.

## Project-critical coverage
Maintain coverage for project/skill filtering, contact validation and honest demo feedback, CLOUD TWIN evidence/remediation/reset, required routes, theme persistence, and navigation state.

## Anti-patterns
Avoid skipped failures, timing-sensitive animation tests, implementation snapshots, random data, tests that pass only because assertions are weak, and claims of physical viewport testing without tooling.

## Deliverables and completion
Deliver changed tests, commands, results, route/browser evidence, and limitations. Completion requires existing tests passing, new behavior covered, lint/build passing, and failures reported with reproduction detail.

## Collaboration
Coordinate with `react-architecture` for boundaries, `typescript-expert` for cases, `ui-ux-expert` for journeys, `accessibility-engineer` for keyboard semantics, `frontend-performance` for bundle checks, and cloud/data skills for simulation/chart invariants.
