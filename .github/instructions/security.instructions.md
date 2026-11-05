---
applyTo: "**/*.{ts,tsx,js,jsx,json,html}"
---

# Security instructions

- Never place secrets, API keys, credentials, tokens, or private contact data in client code.
- Treat all form and URL inputs as untrusted; validate, constrain, and render them safely.
- Use React escaping and avoid `dangerouslySetInnerHTML` unless a reviewed sanitizer is present.
- External links must use verified destinations and `rel="noreferrer"` where appropriate.
- Keep CLOUD TWIN local and explicitly simulated; never add real AWS credentials or telemetry.
- Review dependency changes and run production dependency audit checks without forced upgrades.
- Surface failures clearly; do not silently swallow invalid input or network errors.
