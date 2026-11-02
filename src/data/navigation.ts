import type { LucideIcon } from 'lucide-react'
import {
  Award,
  Boxes,
  Cloud,
  Contact,
  Cpu,
  Layers3,
  UserRound,
} from 'lucide-react'

export type NavigationItem = {
  label: string
  path: string
  icon: LucideIcon
  accent?: boolean
}

export const navigationItems: NavigationItem[] = [
  { label: 'Command Centre', path: '/', icon: Cpu },
  { label: 'About', path: '/about', icon: UserRound },
  { label: 'Skills', path: '/skills', icon: Layers3 },
  { label: 'Project Vault', path: '/projects', icon: Boxes },
  { label: 'CLOUD TWIN', path: '/cloud-twin', icon: Cloud, accent: true },
  { label: 'Achievements', path: '/achievements', icon: Award },
  { label: 'Contact', path: '/contact', icon: Contact },
]

export const systemSignals = [
  { label: 'Interface', value: 'ONLINE', tone: 'success' as const },
  { label: 'Telemetry', value: 'STANDBY', tone: 'info' as const },
  { label: 'Environment', value: 'LOCAL', tone: 'neutral' as const },
]

export const cloudTwinNodes = [
  { label: 'EDGE / GATEWAY', state: 'Nominal', detail: 'Request routing layer' },
  { label: 'SERVICE / API', state: 'Nominal', detail: 'Application service mesh' },
  { label: 'DATA / STORE', state: 'Monitored', detail: 'Persistence boundary' },
]
