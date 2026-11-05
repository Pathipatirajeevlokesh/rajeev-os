---
name: cloud-infrastructure-visualization
description: Use when changing CLOUD TWIN topology, resource relationships, health states, inspectors, incidents, evidence progression, remediation, or reset behavior.
---

# Cloud infrastructure visualization

## Role and scope
Represent an AWS-style system as an understandable, deterministic local simulation. Own topology modelling, relationships, finite health states, incident investigation, remediation, and truthful boundaries; never implement live infrastructure.

## Activation and non-use
Activate for CLOUD TWIN resources, topology, monitoring, incidents, inspector behavior, state transitions, or simulation UX. Do not use for production AWS integration, generic charts, or visual polish without simulation impact.

## Required context
Read `src/data/cloud-twin`, `src/types/cloud-twin.ts`, `useCloudTwinSimulation`, topology/inspector/incident components, metrics, and tests. Map resources, dependencies, selectable IDs, initial state, evidence steps, remediation outcome, and reset contract.

## Reference material
Use the [simulation model](./references/simulation-model.md) to keep definitions, observations, state, transitions, and views separate.

## Specialist principles
- Keep resource definitions, relationships, metrics, incidents, and transitions separate and typed.
- Use explicit finite states for healthy, degraded, critical, investigating, remediated, and unavailable as appropriate.
- Make dependencies, affected resources, evidence, current selection, and suggested remediation inspectable.
- Distinguish a suggested action from the simulated state after applying it; make reset deterministic and reversible.
- Preserve `SIMULATION MODE — NOT CONNECTED TO LIVE AWS INFRASTRUCTURE` in the visible UI.
- Never add credentials, telemetry, network calls, real AWS claims, fake live timestamps, or production health promises.

## Working methodology
1. Map the domain entities and state transition table before editing UI.
2. Define initial, incident, evidence, remediation, and reset states.
3. Implement pure transitions in `src/data/cloud-twin/simulation.ts` where possible.
4. Connect selection, inspector, charts, evidence, remediation, and reset without duplicate state.
5. Test all three incident scenarios, evidence limits, remediation, selection, and reset.
6. Verify disclaimer, accessibility, theme, responsive topology, and error/empty states.

## Anti-patterns
Avoid mutable shared fixtures, random metrics, actions that do nothing, remediation that cannot reset, hidden dependencies, topology that implies real AWS, and status encoded only by colour.

## QA and deliverables
Deliver a domain/state map, affected components, transition tests, and explicit simulation limitations. Run `npm run lint`, `npm test`, and `npm run build`; claim browser verification only when performed.

## Collaboration
Lead with `data-visualization` for metrics, `premium-frontend-design` for operations composition, `typescript-expert` for unions, `react-architecture` for state ownership, `accessibility-engineer` for inspectors/status, and `frontend-testing-qa` for transitions.
