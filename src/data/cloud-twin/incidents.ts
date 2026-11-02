import type { IncidentScenario } from '@/types/cloud-twin'

export const incidentScenarios: IncidentScenario[] = [
  {
    id: 'inc-cpu-001',
    incidentId: 'CT-CPU-001',
    title: 'High CPU utilization on an EC2 instance',
    severity: 'high',
    affectedComponentId: 'ec2-api',
    description: 'The simulated API instance is reporting sustained CPU pressure above its operating threshold.',
    timeline: [
      { time: '10:12', label: 'Signal detected', detail: 'CPU crossed the simulated warning threshold.' },
      { time: '10:16', label: 'Pressure sustained', detail: 'Utilization remained elevated across several checks.' },
      { time: '10:20', label: 'Incident opened', detail: 'The monitoring layer created an investigation record.' },
    ],
    probableCause: 'A workload spike is the leading simulated hypothesis. No production workload is connected to this scenario.',
    investigationSteps: ['Inspect instance CPU and memory signals.', 'Compare request flow with the utilization change.', 'Check application service dependencies.'],
    remediation: 'Simulate scaling the instance capacity and observe whether the status returns to healthy.',
  },
  {
    id: 'inc-rds-001',
    incidentId: 'CT-RDS-001',
    title: 'RDS database connection exhaustion',
    severity: 'critical',
    affectedComponentId: 'rds-primary',
    description: 'The simulated database connection pool is approaching its configured capacity.',
    timeline: [
      { time: '10:08', label: 'Pool growth', detail: 'Active connections began trending upward.' },
      { time: '10:14', label: 'Capacity warning', detail: 'The simulated pool crossed its warning threshold.' },
      { time: '10:19', label: 'Incident opened', detail: 'Connection exhaustion investigation started.' },
    ],
    probableCause: 'A connection lifecycle issue is the leading simulated hypothesis.',
    investigationSteps: ['Inspect database connection metrics.', 'Trace the application service dependency.', 'Review recent simulated connection events.'],
    remediation: 'Simulate recycling the connection pool and re-check database health.',
  },
  {
    id: 'inc-errors-001',
    incidentId: 'CT-APP-001',
    title: 'Application service elevated error rates',
    severity: 'medium',
    affectedComponentId: 'app-service',
    description: 'The simulated application service is returning more errors than its normal operating band.',
    timeline: [
      { time: '10:15', label: 'Error signal', detail: 'Error rate increased in the service metrics.' },
      { time: '10:18', label: 'Dependency check', detail: 'The service remained reachable but degraded.' },
      { time: '10:22', label: 'Incident opened', detail: 'Application investigation started.' },
    ],
    probableCause: 'A dependency or request-shape issue is the leading simulated hypothesis.',
    investigationSteps: ['Inspect service error rate and request count.', 'Review load balancer and database dependencies.', 'Compare current signals with the monitoring timeline.'],
    remediation: 'Simulate restarting the affected application service and re-evaluate its health.',
  },
]
