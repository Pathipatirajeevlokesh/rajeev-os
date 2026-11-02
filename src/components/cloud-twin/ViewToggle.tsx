import { Activity, Network } from 'lucide-react'
import type { CloudTwinView } from '@/types/cloud-twin'

type ViewToggleProps = {
  view: CloudTwinView
  onChange: (view: CloudTwinView) => void
}

export function ViewToggle({ view, onChange }: ViewToggleProps) {
  return (
    <div className="cloud-twin-view-toggle" role="tablist" aria-label="Cloud Twin view">
      <button type="button" className={view === 'topology' ? 'is-active' : ''} role="tab" aria-selected={view === 'topology'} onClick={() => onChange('topology')}>
        <Network size={14} /> Topology
      </button>
      <button type="button" className={view === 'monitoring' ? 'is-active' : ''} role="tab" aria-selected={view === 'monitoring'} onClick={() => onChange('monitoring')}>
        <Activity size={14} /> Monitoring
      </button>
    </div>
  )
}
