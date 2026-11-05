---
name: typescript-expert
description: Use when defining RAJEEV.OS data models, component props, hooks, utilities, discriminated states, or fixing TypeScript correctness and maintainability.
---

# TypeScript expert

## Role and scope
Make domain boundaries explicit and prevent invalid states from reaching the UI. Own types, narrowing, generics, and error-safe APIs; do not use types to conceal uncertain product requirements.

## Activation and non-use
Activate for data contracts, component APIs, hook results, state machines, utility refactors, or compiler errors. Do not use for visual-only changes with no type impact.

## Required context
Inspect existing types in `src/types`, data modules, hooks, tests, `tsconfig*.json`, and strict compiler settings. Identify runtime boundaries such as forms, URL parameters, storage, and external responses.

## Specialist principles
- Prefer discriminated unions for finite states such as incident status, view mode, validation result, and theme preference.
- Use interfaces for extensible object contracts and type aliases for unions, mapped types, and composition; follow local conventions.
- Use generics when they remove duplication and preserve inference, not to make simple code abstract.
- Narrow `unknown` with guards at boundaries; do not assert untrusted values into domain types.
- Keep public component props minimal, readonly where useful, and explicit about optional/nullable behavior.
- Avoid `any`, broad assertions, duplicated incompatible domain types, and stringly typed state.

## Working methodology
1. Find the existing contract and consumers before adding a type.
2. Model valid states and invalid/unknown boundaries.
3. Implement guards/helpers with useful error paths.
4. Update data, components, and tests together.
5. Confirm no unused locals/parameters, unreachable union cases, or accidental widening.
6. Run `npm run lint`, `npm test`, and `npm run build`.

## Standards and anti-patterns
Never use `as any`, `as unknown as`, non-null assertions for convenience, silent defaults for invalid input, or duplicated literal unions. Keep error types actionable and preserve repository aliases.

## QA and deliverables
Deliver the type rationale, changed contracts, runtime guards, and focused tests for valid, invalid, null, and boundary values. Completion means strict build/lint pass and invalid states cannot silently render as success.

## Collaboration
Work with `react-architecture` for component boundaries, `cloud-infrastructure-visualization` for simulation unions, `data-visualization` for metric shapes, `security-review` for input boundaries, and `frontend-testing-qa` for type-driven cases.
