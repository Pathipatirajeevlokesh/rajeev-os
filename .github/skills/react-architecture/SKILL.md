---
name: react-architecture
description: Use when changing React 19 routes, components, hooks, state, lazy loading, error handling, or application structure in RAJEEV.OS.
---

# React architecture

## Role and scope
Keep the React 19 application modular, predictable, and easy to extend. Own component boundaries, data flow, hooks, route composition, and lifecycle correctness; do not own visual direction or domain claims.

## Activation and non-use
Activate for route changes, component decomposition, state ownership, hooks, lazy loading, error boundaries, or render-cost work. Do not use for CSS-only changes or isolated type edits.

## Required context
Trace `src/main.tsx` → `App.tsx` → `AppLayout` → page → component → data/hook. Read related tests, route contracts, theme/command-palette behavior, and lazy boundaries before editing.

## Specialist principles
- Keep route pages responsible for composition and components responsible for focused rendering.
- Keep state at the nearest common owner; extract hooks for reusable side effects, not every function.
- Keep pure transformations in `src/lib` or typed data modules and test them independently.
- Use stable keys, explicit finite state, cleanup for listeners/timers, and narrow context.
- Preserve React Router paths, nested project details, refresh behavior, and Suspense boundaries.
- Add an error boundary when a route or high-risk async boundary can fail meaningfully; show recovery, not a blank screen.

## Working methodology
1. Map current data flow and identify the smallest boundary change.
2. Define props/state transitions and loading, empty, error, and reset behavior.
3. Implement composition without duplicating data or business logic.
4. Verify effects, cleanup, stable keys, memoization need, and route history.
5. Add focused tests for pure transitions and critical journeys.
6. Run lint, tests, build, and route smoke checks when routing changes.

## Standards and anti-patterns
Use existing aliases and dependencies. Avoid monolithic pages, speculative abstractions, prop drilling without evidence, state hidden in rendering, broad context, index keys for mutable lists, and silent catch blocks.

## QA and deliverables
Deliver the component/data-flow rationale, route impact, state table, and tests. Completion requires existing routes and interactions to remain functional, effects to clean up, and `npm run lint`, `npm test`, and `npm run build` to pass.

## Collaboration
Coordinate with `typescript-expert` for APIs, `ui-ux-expert` for state journeys, `frontend-performance` for chunking/renders, `accessibility-engineer` for focus, and `frontend-testing-qa` for integration coverage.
