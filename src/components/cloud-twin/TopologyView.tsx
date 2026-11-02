import { motion } from 'framer-motion'
import { Box, Cloud, Database, Globe2, HardDrive, MonitorCog, Server, ShieldCheck } from 'lucide-react'
import type { InfrastructureComponent, InfrastructureStatus, InfrastructureType } from '@/types/cloud-twin'

type TopologyViewProps = {
  components: InfrastructureComponent[]
  selectedComponentId: string
  getStatus: (componentId: string) => InfrastructureStatus
  onSelect: (componentId: string) => void
}

const icons: Record<InfrastructureType, typeof Cloud> = {
  network: Globe2,
  compute: Server,
  database: Database,
  storage: HardDrive,
  monitoring: MonitorCog,
  service: Box,
}

const statusLabels: Record<InfrastructureStatus, string> = {
  healthy: 'Healthy',
  warning: 'Warning',
  critical: 'Critical',
  offline: 'Offline',
}

export function TopologyView({ components, selectedComponentId, getStatus, onSelect }: TopologyViewProps) {
  return (
    <div className="topology-view">
      <div className="topology-canvas">
        <div className="topology-vpc"><ShieldCheck size={14} /> VPC / SIMULATED NETWORK BOUNDARY</div>
        <div className="topology-lines" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>
        {components.map((component) => {
          const Icon = icons[component.type]
          const status = getStatus(component.id)
          return (
            <motion.button
              type="button"
              key={component.id}
              className={`topology-node topology-node--${status} ${selectedComponentId === component.id ? 'is-selected' : ''}`}
              style={{ left: `${component.position.x}%`, top: `${component.position.y}%` }}
              onClick={() => onSelect(component.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: .98 }}
              aria-pressed={selectedComponentId === component.id}
            >
              <span className="topology-node__icon"><Icon size={16} /></span>
              <span className="topology-node__name">{component.name}</span>
              <span className="topology-node__status"><i /> {statusLabels[status]}</span>
            </motion.button>
          )
        })}
      </div>
      <div className="topology-legend">
        <span><i className="status-dot status-dot--healthy" /> Healthy</span>
        <span><i className="status-dot status-dot--warning" /> Warning</span>
        <span><i className="status-dot status-dot--critical" /> Critical</span>
      </div>
    </div>
  )
}
