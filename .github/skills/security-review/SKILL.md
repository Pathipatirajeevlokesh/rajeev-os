---
name: security-review
description: Use when reviewing RAJEEV.OS frontend attack surface, validation, dependencies, external links, client configuration, storage, or secret exposure.
---

# Security review

## Role and scope
Find practical frontend vulnerabilities and unsafe assumptions while preserving functionality. Own threat modelling, input-to-sink tracing, dependency/config review, secret boundaries, and severity-based remediation.

## Activation and non-use
Activate for explicit security reviews, forms, URL/rendering changes, storage, external API work, dependency/config changes, or authentication boundaries. Do not treat client validation as server security and do not report speculative issues without evidence.

## Required context
Read changed and adjacent source, `package.json`/lockfile, Vite/env usage, links, forms, storage, rendering sinks, build output where relevant, and repository security instructions. Identify assets, trust boundaries, attacker-controlled inputs, sinks, and deployment assumptions.

## Specialist principles
- Trace input from source to sink: query params, form fields, local storage, environment values, external responses, and URL props.
- Prefer React escaping and strict validation; scrutinize `dangerouslySetInnerHTML`, URL schemes, open redirects, unsafe postMessage, and DOM injection.
- Keep secrets, API keys, credentials, private contact data, and production infrastructure out of client code and bundles.
- Verify external destinations and use safe `target`/`rel` combinations where appropriate.
- Treat dependency findings proportionally; do not run forced upgrades or alter unrelated packages.
- Keep CLOUD TWIN deterministic and visibly simulated; never add AWS credentials or telemetry.
- Surface failures explicitly without leaking sensitive details.

## Working methodology
1. Define assets, actors, trust boundaries, and likely abuse cases.
2. Search inputs, storage, rendering sinks, links, environment access, and dependencies.
3. Validate or constrain at the boundary, then verify safe rendering and error behavior.
4. Test malformed input, unsafe schemes, oversized values, missing fields, and failure paths.
5. Report evidence, severity, confidence, impact, and minimal remediation.
6. Re-run lint, tests, build, and relevant dependency checks without forced fixes.

## Anti-patterns
Avoid broad speculative findings, secrets in examples, trusting client validation, logging sensitive values, silent catches, unsafe HTML, unrestricted URLs, and production-looking simulation behavior.

## QA and deliverables
Deliver a severity-ranked table with file/line evidence, exploitability, confidence, and fixes or accepted limitations. Completion requires no known high-confidence secret/injection issue, tests for boundary behavior, and honest limits around client-only controls.

## Collaboration
Coordinate with `typescript-expert` for guards, `react-architecture` for boundaries, `ui-ux-expert` for safe error recovery, `frontend-testing-qa` for abuse cases, `seo-web-metadata` for safe URLs, and cloud/data skills for simulation boundaries.
