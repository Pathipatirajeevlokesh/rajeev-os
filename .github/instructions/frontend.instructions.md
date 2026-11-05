---
applyTo: "src/**/*.{ts,tsx,css}"
---

# Frontend implementation instructions

- Follow the existing `AppLayout` and page/component/data architecture.
- Prefer small typed components and focused hooks over large page components.
- Reuse `Panel`, `StatusBadge`, `SectionHeading`, navigation, theme, and form patterns.
- Keep route behavior and existing data contracts stable.
- Use semantic headings, buttons, links, labels, and landmarks.
- Use CSS variables from `App.css` for theme-aware colors, borders, spacing, and typography.
- Do not hardcode unverified personal facts, production claims, AWS integrations, or fake metrics.
- Keep interactions functional: every action should update state, navigate, or provide clear feedback.
- Use Framer Motion sparingly and preserve reduced-motion behavior.
