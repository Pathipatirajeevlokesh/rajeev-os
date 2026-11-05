---
name: frontend-performance
description: Use when improving RAJEEV.OS Vite bundles, route chunks, loading behavior, assets, rendering cost, animation cost, or Core Web Vitals.
---

# Frontend performance

## Role and scope
Improve measured and perceived performance without sacrificing clarity or functionality. Own measurement, bundle boundaries, asset delivery, rendering cost, and loading stability.

## Activation and non-use
Activate for bundle warnings, slow routes, large assets, jank, layout shift, or performance audits. Do not optimize speculatively before a baseline or replace dependencies without evidence.

## Required context
Read `package.json`, Vite config, route imports, build output, asset dimensions/sizes, chart usage, CSS, and animation code. Record baseline main/chunk sizes and the affected user journey.

## Specialist principles
- Keep route-level chunks meaningful; lazy-load expensive pages such as CLOUD TWIN where it improves initial load.
- Optimize the critical path before micro-optimizing renders.
- Serve appropriate image dimensions/formats, reserve aspect-ratio space, and avoid decoding oversized portrait assets unnecessarily.
- Prefer transform/opacity animation and finite work; avoid layout thrashing and unbounded DOM.
- Memoize only when profiling shows repeated expensive work; keep data transformations pure.
- Consider Core Web Vitals: LCP (hero/media), CLS (reserved space), INP (event/render cost), and TTFB (deployment boundary).

## Working methodology
1. Run a baseline build and inspect chunk warnings/output.
2. Identify the largest asset, dependency, route, or repeated render.
3. Choose one targeted intervention and define its measurable effect.
4. Implement without changing route/data semantics.
5. Rebuild and compare output; test loading, error, and fallback states.
6. Check keyboard, mobile, reduced motion, and theme behavior.

## Standards and anti-patterns
Do not hide warnings, add unnecessary libraries, memoize everything, defer essential content, remove accessible text for size, or claim Web Vitals without measuring them. Never run forced audit upgrades.

## QA and deliverables
Report baseline/post-build evidence, changed assets/chunks, trade-offs, and remaining limits. Run `npm run lint`, `npm test`, and `npm run build`; use browser profiling only when available.

## Collaboration
Coordinate with `react-architecture` for boundaries, `motion-design` for animation cost, `responsive-web-design` for asset/layout behavior, `design-systems-engineer` for CSS reuse, and `frontend-testing-qa` for regressions.
