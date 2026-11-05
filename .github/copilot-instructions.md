# RAJEEV.OS Copilot Instructions

RAJEEV.OS is a React 19, TypeScript, Vite, Tailwind CSS 4 portfolio presented as a personal engineering operating system.

## Working rules

- Inspect the relevant route, components, data, styles, tests, and configuration before editing.
- Preserve the existing React Router routes, AppLayout shell, local CLOUD TWIN simulation, verified portfolio facts, and contact behavior.
- Reuse existing primitives and data models before introducing new abstractions or dependencies.
- Keep personal, employment, project, achievement, metric, repository, and credential claims strictly grounded in repository data or explicit user input.
- CLOUD TWIN is deterministic local simulation only. Always retain the visible `SIMULATION MODE — NOT CONNECTED TO LIVE AWS INFRASTRUCTURE` disclaimer.
- Prefer TypeScript types, explicit state transitions, semantic HTML, accessible names, and visible error states.
- Respect `prefers-reduced-motion`, keyboard navigation, responsive layouts, and both dark/light/system themes.
- Do not remove working functionality or rewrite the application without a concrete reason.
- Run `npm run lint`, `npm test`, and `npm run build` after code changes. Report browser checks only when actually performed.

## Skill routing

Use the most specific skill in `.github/skills/` for the task. Treat the skill's `description` frontmatter as its discovery signal, then read its full workflow before editing. A lead skill coordinates supporting skills; do not make multiple skills independently rewrite the same surface.

### Collaboration recipes

- Homepage or route redesign: `premium-frontend-design` leads with `ui-ux-expert`, `creative-developer`, `design-systems-engineer`, `motion-design`, `responsive-web-design`, and `accessibility-engineer`.
- React implementation: `react-architecture` leads with `typescript-expert`, `responsive-web-design`, and `frontend-performance`.
- CLOUD TWIN: `cloud-infrastructure-visualization` leads with `data-visualization`, `typescript-expert`, `react-architecture`, and `accessibility-engineer`.
- Metadata: `seo-web-metadata` coordinates with `ui-ux-expert`, `accessibility-engineer`, and `frontend-performance`.
- Final quality review: `frontend-testing-qa` coordinates with `accessibility-engineer`, `frontend-performance`, and `security-review`.
- Security-sensitive changes: `security-review` leads; it must inspect trust boundaries and report evidence rather than speculate.

Skills are repository-local guidance modules discovered from `.github/skills/<name>/SKILL.md`; they are not a guarantee of automatic activation. Explicitly select the relevant skill(s) for each task and state which lead skill owns the change.

## Repository conventions

- Use `@/*` imports for `src/*`.
- Keep page data in `src/data`, reusable UI in `src/components`, stateful logic in `src/hooks`, and shared types in `src/types`.
- Use existing Framer Motion, Lucide, Recharts, and Tailwind/Vite configuration; do not add replacements.
- Keep simulation and portfolio content local and deterministic.
