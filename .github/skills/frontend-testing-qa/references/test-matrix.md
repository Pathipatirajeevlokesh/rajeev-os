# RAJEEV.OS test matrix

For changes affecting the listed surface, cover the associated observable behavior:

| Surface | Required behavior |
| --- | --- |
| Routing | Every required route loads; nested project refresh and back/forward work |
| Catalogue | Project and skill filters, search, empty results, and stable selection |
| CLOUD TWIN | Topology selection, chart rendering, all incidents, evidence bounds, remediation, reset, disclaimer |
| Contact | Required fields, email format, character limit, honest demo feedback, verified mailto/link targets |
| Theme | Dark, light, system preference, persistence, readable charts and controls |
| Navigation | Active route, mobile drawer, command palette, Escape, focus restoration |

Use Vitest for pure deterministic behavior. Use component/browser tests only when the environment supports them, and report unavailable visual/device checks rather than implying they passed.
