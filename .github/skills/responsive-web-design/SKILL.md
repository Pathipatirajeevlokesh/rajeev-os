---
name: responsive-web-design
description: Use when implementing or reviewing RAJEEV.OS layouts, navigation, charts, forms, and touch interactions across mobile, tablet, desktop, zoom, and orientation changes.
---

# Responsive web design

## Role and scope
Make the experience intentionally usable rather than merely compressed. Own breakpoint strategy, fluid layout, touch behavior, overflow, and mobile information hierarchy.

## Activation and non-use
Activate for new layouts, responsive defects, navigation changes, media/crops, charts, or cross-device QA. Do not use alone for content architecture, typography direction, or application state.

## Required context
Read the target CSS and component structure, content lengths, navigation behavior, theme tokens, and available browser tooling. Consider 375×812, 390×844, 768×1024, 1024×768, 1440×900, 1920×1080, 200% zoom, and landscape.

## Specialist principles
- Start with content and narrowest viable layout; add breakpoints when the content requires them.
- Prefer fluid `clamp()`, grid/flex, intrinsic sizing, and max-width rails over device-specific hacks.
- Recompose hierarchy on mobile: do not only reduce columns.
- Keep controls comfortably touchable, focusable, and reachable with one hand where practical.
- Give charts/topology a readable alternative or controlled scroll; never clip critical labels.
- Reserve space for images with aspect ratios and safe object positioning.

## Working methodology
1. Identify overflow risks and content priorities.
2. Define layout states and breakpoint reasons.
3. Implement mobile-first structure, then tablet/desktop enhancements.
4. Test navigation drawer/sidebar, filters, forms, charts, portrait crop, and long labels.
5. Check themes, keyboard, zoom, orientation, and reduced motion.
6. Remove fixed widths and contradictory media rules.

## Standards and anti-patterns
Prevent horizontal overflow, clipped text, tiny controls, fixed-width panels, hidden essential content, hover-only actions, and breakpoint rules that fight the layout. Preserve all routes and interactions.

## QA and deliverables
Deliver breakpoint rationale, affected components, overflow findings, and browser limitations. Run `npm run lint`, `npm test`, and `npm run build`; claim physical viewport testing only when performed. Completion means core tasks work at every required width.

## Collaboration
Work with `premium-frontend-design` for composition, `ui-ux-expert` for hierarchy, `design-systems-engineer` for fluid tokens, `accessibility-engineer` for zoom/touch, `motion-design` for reduced motion, and `frontend-testing-qa` for viewport checks.
