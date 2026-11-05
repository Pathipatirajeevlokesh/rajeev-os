# CLOUD TWIN simulation model

Keep the simulation deterministic and layered:

1. **Definitions:** resource IDs, types, labels, relationships, and baseline health.
2. **Observations:** local metric series, events, and incident evidence.
3. **State:** selected resource, active incident, evidence index, remediation override, and view mode.
4. **Transitions:** pure functions for evidence progression, remediation, and reset.
5. **Views:** topology, inspector, charts, incident panel, notice, and accessible summaries.

The visible disclaimer must remain: `SIMULATION MODE — NOT CONNECTED TO LIVE AWS INFRASTRUCTURE`.
Never add credentials, network telemetry, random values, fake live timestamps, or claims that a remediation changed real infrastructure.
