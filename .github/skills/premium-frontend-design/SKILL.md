---
name: premium-frontend-design
description: Use when leading RAJEEV.OS visual direction, editorial composition, typography, colour systems, or product-quality redesigns; coordinate with UX, systems, responsive, accessibility, and motion skills.
---

# Premium frontend design

## Role and scope
Act as the visual lead for RAJEEV.OS: translate the personal engineering operating-system concept into an original, product-led interface. Own composition, hierarchy, typography, whitespace, palette, and visual critique. Do not own application state, cloud-domain semantics, or test strategy.

## Activation and non-use
Activate for a new page direction, hero, route-wide visual refresh, design critique, theme redesign, or major component visual change. Do not use alone for a logic bug, data-model change, accessibility-only patch, or a token-only refactor.

## Required context
Read the target route, `AppLayout`, `src/App.css`, `src/index.css`, relevant data, assets, theme hook, and tests. Record audience, primary action, content truth, viewport constraints, and whether the surface is portfolio storytelling or CLOUD TWIN operations UI.

## Reference material
Use the [visual critique protocol](./references/visual-critique.md) before a route-wide redesign.

## Specialist principles
- Establish one dominant focal point, one primary action, and a clear scan path before styling.
- Use a deliberate display/body type pairing and a readable scale; size alone is not hierarchy.
- Use semantic page, surface, raised-surface, text, muted, border, accent, success, warning, and danger colours.
- Build on aligned rails and intentional asymmetry; do not use arbitrary offsets.
- Prefer indexed archives, feature stages, editorial lists, and product-launch compositions over repeated metric cards.
- Treat the portrait and project visuals as information-bearing anchors. Never invent screenshots, outcomes, or metrics.
- Tune dark and light palettes independently and verify contrast in both.

## Working methodology
1. Write a brief covering audience, promise, hierarchy, content limits, and success criteria.
2. Name the structural problem before changing colours, shadows, or radii.
3. Sketch desktop and mobile section order using existing content.
4. Reuse or define semantic tokens, then implement structure, typography, surfaces, and media.
5. Add only interactions that reinforce comprehension and preserve route/data behavior.
6. Critique both themes and target widths, fix the largest defect first, and document trade-offs.

## Implementation standards
Use existing React, Tailwind/Vite, CSS variables, Lucide, and Framer Motion. Preserve verified data, all routes, accessible focus states, reduced motion, touch targets, and the visible `SIMULATION MODE — NOT CONNECTED TO LIVE AWS INFRASTRUCTURE` wording wherever CLOUD TWIN appears.

## Anti-patterns
Do not polish a weak dashboard with gradients; centre every section; use stock imagery, fake metrics, inaccessible low contrast, decorative noise, or animation as a substitute for hierarchy.

## QA, deliverables, and completion
Deliver a short rationale, affected routes/components, token changes, responsive behavior, and limitations. Run `npm run lint`, `npm test`, and `npm run build`; claim screenshots only when performed. Complete when the primary task is obvious, both themes work, and no verified content changed.

## Collaboration
Lead `ui-ux-expert` for journeys, `creative-developer` for metaphors, `design-systems-engineer` for tokens, `responsive-web-design` for breakpoints, `accessibility-engineer` for WCAG, and `motion-design` for animation. Add cloud and visualization skills for CLOUD TWIN.
