import { ChevronRight, CircleDot, Link2, RotateCcw } from 'lucide-react'
import type { InfrastructureComponent, InfrastructureStatus } from '@/types/cloud-twin'
import { Panel } from '@/components/ui/Panel'
import { StatusBadge } from '@/components/ui/StatusBadge'

type ComponentInspectorProps = {
  component: InfrastructureComponent
  status: InfrastructureStatus
  remediationExecuted: boolean
  onResetStatus: () => void
}

const toneByStatus: Record<InfrastructureStatus, 'success' | 'info' | 'warning'> = {
  healthy: 'success',
  warning: 'warning',
  critical: 'warning',
  offline: 'warning',
}

export function ComponentInspector({ component, status, remediationExecuted, onResetStatus }: ComponentInspectorProps) {
  return (
    <Panel className="component-inspector" label="COMPONENT INSPECTOR" title={component.name}>
      <div className="inspector-type"><CircleDot size={13} /> {component.type.toUpperCase()} RESOURCE</div>
      <div className="inspector-status"><span>Current status</span><StatusBadge tone={toneByStatus[status]} pulse>{status.toUpperCase()}</StatusBadge></div>
      <p className="inspector-description">{component.description}</p>
      <div className="inspector-metrics">
        {component.metrics.map((metric) => <div key={metric.label}><span>{metric.label}</span><strong>{metric.value} {metric.unit}</strong></div>)}
      </div>
      <div className="inspector-subsection"><span className="inspector-label">DEPENDENCIES</span>{component.dependencies.length ? component.dependencies.map((dependency) => <div className="inspector-row" key={dependency}><Link2 size={13} />{dependency}<ChevronRight size={13} /></div>) : <p>Root network boundary</p>}</div>
      <div className="inspector-subsection"><span className="inspector-label">RECENT EVENTS</span>{component.recentEvents.map((event) => <div className="inspector-event" key={event}><i />{event}</div>)}</div>
      {remediationExecuted && <button type="button" className="button button--quiet inspector-reset" onClick={onResetStatus}><RotateCcw size={14} /> Reset component state</button>}
    </Panel>
  )
}
