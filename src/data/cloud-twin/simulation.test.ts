import { describe, expect, it } from 'vitest'
import { incidentStatus, nextEvidenceCount, remediationStatus } from './simulation'

describe('CLOUD TWIN simulation transitions', () => {
  it('preserves the initial status for each incident scenario', () => {
    expect(incidentStatus['inc-cpu-001']).toBe('warning')
    expect(incidentStatus['inc-rds-001']).toBe('critical')
    expect(incidentStatus['inc-errors-001']).toBe('warning')
  })

  it('reveals evidence without exceeding the scenario limit', () => {
    expect(nextEvidenceCount(0, 3)).toBe(1)
    expect(nextEvidenceCount(3, 3)).toBe(3)
  })

  it('marks a remediated component healthy', () => {
    expect(remediationStatus()).toBe('healthy')
  })
})
