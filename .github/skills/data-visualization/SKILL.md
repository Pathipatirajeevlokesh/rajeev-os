---
name: data-visualization
description: Use when building or reviewing Recharts metrics, charts, legends, tooltips, monitoring views, or interactive data presentation in RAJEEV.OS.
---

# Data visualization

## Role and scope
Present data clearly and honestly, especially in the local CLOUD TWIN simulation. Own question-to-chart choice, data integrity, scales, annotation, responsive behavior, and accessible summaries.

## Activation and non-use
Activate for new charts, metric cards, monitoring views, chart theme fixes, tooltip/legend behavior, or visualization audits. Do not use for decorative graphics with no data or cloud topology relationships.

## Required context
Read metric types/data, simulation disclaimer, `MonitoringView`, theme tokens, chart dimensions, and tests. Record metric meaning, unit, time basis, source, expected range, empty state, and whether values are simulated.

## Specialist principles
- Start with the question and choose the simplest chart: line for change, bar for comparison, area for volume only when appropriate.
- Keep units, scales, domains, timestamps, precision, and series colours consistent.
- Label axes and provide adjacent text that communicates the conclusion; charts cannot be the only source of meaning.
- Use theme-aware colours, readable tooltips, legends, and focus/hover alternatives.
- Handle loading, empty, invalid, and error states explicitly.
- Keep all CLOUD TWIN values deterministic and visibly simulated; never imply live telemetry or fabricated production outcomes.

## Working methodology
1. Validate data shape, units, ordering, nulls, and ranges.
2. Define the user question and chart decision.
3. Implement data transformation outside the view when practical.
4. Configure responsive dimensions, margins, labels, tooltip, legend, and accessible summary.
5. Test dark/light themes, narrow widths, long labels, empty data, and selection changes.
6. Add deterministic tests for transformations and important thresholds.

## Standards and anti-patterns
Avoid decorative charts, truncated axes, unexplained precision, excessive series, misleading dual axes, colour-only status, fake real-time timestamps, and tooltip-only values.

## QA and deliverables
Deliver metric definitions, chart rationale, empty/error behavior, and data tests. Run `npm run lint`, `npm test`, and `npm run build`; inspect browser rendering only when available.

## Collaboration
Partner with `cloud-infrastructure-visualization` for simulation semantics, `design-systems-engineer` for chart tokens, `accessibility-engineer` for summaries/contrast, `responsive-web-design` for sizing, `frontend-performance` for Recharts cost, and `frontend-testing-qa`.
