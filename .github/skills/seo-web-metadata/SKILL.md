---
name: seo-web-metadata
description: Use when improving RAJEEV.OS titles, descriptions, Open Graph metadata, semantic structure, discoverability, sitemap, robots, or route indexing.
---

# SEO and web metadata

## Role and scope
Make each public route understandable to users and crawlers without inventing personal information. Own metadata architecture, semantic content, sharing previews, and deployment-aware indexing.

## Activation and non-use
Activate for title/description work, route metadata, Open Graph, canonical URLs, sitemap/robots, headings, or SEO audits. Do not use to add unverified claims or marketing copy unrelated to visible content.

## Required context
Read `index.html`, route metadata logic, visible headings, verified profile/project data, deployment domain, favicon/assets, and router behavior. Determine whether a canonical domain and crawlable deployment actually exist before adding URLs.

## Specialist principles
- Titles and descriptions must describe visible route content and remain concise.
- Keep one logical H1, ordered headings, semantic landmarks, meaningful links, and useful image alt text.
- Open Graph/Twitter fields must use verified titles, descriptions, URLs, and assets; never invent social profiles.
- Add canonical, sitemap, robots, or structured data only when deployment context supports accurate values.
- Metadata must not claim live AWS, fabricated achievements, employment, metrics, or delivered contact messages.
- Treat performance, accessibility, and content clarity as SEO requirements.

## Working methodology
1. Inventory route titles, descriptions, headings, links, images, and current metadata.
2. Build a route metadata table from verified visible content.
3. Implement shared defaults and route-specific overrides without duplicate/conflicting tags.
4. Verify refresh-safe nested routes and social asset paths.
5. Check semantic structure, links, favicon, and indexing directives.
6. Run lint, tests, build, and any deployment-aware URL checks.

## Anti-patterns
Avoid keyword stuffing, hidden text, duplicate titles, unsupported structured data, fake reviews, invented canonical domains, inaccessible alt text, and metadata that contradicts the UI.

## QA and deliverables
Deliver the route metadata table, files changed, deployment assumptions, and remaining SEO limits. Run `npm run lint`, `npm test`, and `npm run build`; validate social previews only when actual tooling/domain access exists.

## Collaboration
Work with `premium-frontend-design` for hierarchy, `ui-ux-expert` for information scent, `accessibility-engineer` for semantics, `frontend-performance` for Web Vitals, and `frontend-testing-qa` for route regressions.
