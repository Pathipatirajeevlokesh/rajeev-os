import type { InfrastructureStatus } from '@/types/cloud-twin'

export const incidentStatus: Record<string, InfrastructureStatus> = {
  'inc-cpu-001': 'warning',
  'inc-rds-001': 'critical',
  'inc-errors-001': 'warning',
}

export function nextEvidenceCount(current: number, total: number) {
  return Math.min(current + 1, total)
}

export function remediationStatus(): InfrastructureStatus {
  return 'healthy'
}
