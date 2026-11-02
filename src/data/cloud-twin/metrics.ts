import type { MetricPoint } from '@/types/cloud-twin'

export const monitoringMetrics: MetricPoint[] = [
  { time: '10:00', cpu: 38, memory: 54, requests: 1800, errors: 0.6, network: 620, connections: 48 },
  { time: '10:05', cpu: 42, memory: 56, requests: 2050, errors: 0.8, network: 690, connections: 54 },
  { time: '10:10', cpu: 47, memory: 58, requests: 2240, errors: 1.1, network: 760, connections: 61 },
  { time: '10:15', cpu: 55, memory: 62, requests: 2380, errors: 1.5, network: 820, connections: 72 },
  { time: '10:20', cpu: 64, memory: 66, requests: 2440, errors: 2.1, network: 860, connections: 81 },
  { time: '10:25', cpu: 59, memory: 64, requests: 2390, errors: 1.8, network: 830, connections: 76 },
]
