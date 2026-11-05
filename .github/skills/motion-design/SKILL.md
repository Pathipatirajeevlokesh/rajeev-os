---
name: motion-design
description: Use when designing or implementing purposeful Framer Motion transitions, scroll reveals, layout changes, and micro-interactions in RAJEEV.OS.
---

# Motion design

## Role and scope
Own motion language, timing, choreography, and performance. Motion explains continuity, hierarchy, feedback, or state; it must not conceal content or compensate for weak layout.

## Activation and non-use
Activate for route transitions, reveals, command palette, topology/incident feedback, or motion audits. Do not use for static styling or animation without a comprehension benefit.

## Required context
Read target components, existing Framer Motion usage, route transitions, state transitions, and reduced-motion handling. Identify trigger, target, meaning, interruption behavior, and static fallback.

## Specialist principles
- Use continuity for navigation, emphasis for hierarchy, feedback for actions, and orientation for disclosure.
- Prefer transform and opacity; avoid costly filters, huge shadows, layout-heavy properties, and continuous SVG work.
- Use reusable variants, bounded stagger, consistent easing, and stable `AnimatePresence` keys.
- Keep essential content available immediately and avoid long entrance delays.
- Disable nonessential movement with `useReducedMotion` while preserving meaning and focus.

## Working methodology
1. State the motion purpose and event.
2. Select the least expensive property and shared variant.
3. Define initial, active, exit, interrupted, and reduced-motion states.
4. Implement without changing route/data semantics.
5. Test rapid actions, keyboard/focus, mobile, theme switching, and reduced motion.
6. Profile large lists and CLOUD TWIN charts; remove unnecessary animation.

## Anti-patterns
No perpetual decorative loops, motion-only status, parallax that harms reading, staggered critical content, layout thrashing, focus loss, or animation implying live AWS activity.

## QA and deliverables
Deliver a motion map, variants, reduced-motion behavior, and performance notes. Run `npm run lint`, `npm test`, and `npm run build`. Test state transitions deterministically rather than snapshotting timing.

## Collaboration
Coordinate with `premium-frontend-design` and `creative-developer` for intent, `ui-ux-expert` for feedback, `design-systems-engineer` for timing tokens, `accessibility-engineer` for focus, `responsive-web-design` for touch, and `frontend-performance` for profiling.
