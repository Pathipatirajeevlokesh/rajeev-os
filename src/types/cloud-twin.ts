export type InfrastructureStatus = 'healthy' | 'warning' | 'critical' | 'offline'
export type InfrastructureType = 'network' | 'compute' | 'database' | 'storage' | 'monitoring' | 'service'

export type ResourceMetric = {
  label: string
  value: string
  unit?: string
}

export type InfrastructureComponent = {
  id: string
  name: string
  type: InfrastructureType
  status: InfrastructureStatus
  description: string
  dependencies: string[]
  metrics: ResourceMetric[]
  recentEvents: string[]
  position: { x: number; y: number }
}

export type MetricPoint = {
  time: string
  cpu: number
  memory: number
  requests: number
  errors: number
  network: number
  connections: number
}

export type IncidentSeverity = 'medium' | 'high' | 'critical'

export type IncidentEvent = {
  time: string
  label: string
  detail: string
}

export type IncidentScenario = {
  id: string
  incidentId: string
  title: string
  severity: IncidentSeverity
  affectedComponentId: string
  description: string
  timeline: IncidentEvent[]
  probableCause: string
  investigationSteps: string[]
  remediation: string
}

export type CloudTwinView = 'topology' | 'monitoring'
