import { motion } from 'framer-motion'
import { Cloud, RotateCcw } from 'lucide-react'
import { ComponentInspector } from '@/components/cloud-twin/ComponentInspector'
import { IncidentPanel } from '@/components/cloud-twin/IncidentPanel'
import { MonitoringView } from '@/components/cloud-twin/MonitoringView'
import { SimulationNotice } from '@/components/cloud-twin/SimulationNotice'
import { TopologyView } from '@/components/cloud-twin/TopologyView'
import { ViewToggle } from '@/components/cloud-twin/ViewToggle'
import { Panel } from '@/components/ui/Panel'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { infrastructureComponents } from '@/data/cloud-twin/infrastructure'
import { incidentScenarios } from '@/data/cloud-twin/incidents'
import { useCloudTwinSimulation } from '@/hooks/useCloudTwinSimulation'

export function CloudTwinPage() {
  const simulation = useCloudTwinSimulation()
  return (
    <motion.div className="page-stack cloud-twin-page" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }}>
      <div className="cloud-twin-header">
        <div><p className="section-heading__eyebrow">05 / SIGNATURE SURFACE</p><h1><Cloud size={34} /> CLOUD TWIN</h1><p>Interactive infrastructure monitoring and incident investigation environment.</p></div>
        <div className="cloud-twin-header__actions"><StatusBadge tone="warning">SIMULATION MODE</StatusBadge><button type="button" className="button button--quiet" onClick={simulation.reset}><RotateCcw size={14} /> Reset simulation</button></div>
      </div>
      <SimulationNotice />
      <div className="cloud-twin-toolbar"><ViewToggle view={simulation.view} onChange={simulation.setView} /><span className="cloud-twin-toolbar__state">LOCAL STATE / DETERMINISTIC DATASET</span></div>
      {simulation.view === 'topology' ? (
        <Panel label="INFRASTRUCTURE TOPOLOGY" title="Select a resource to inspect">
          <TopologyView components={infrastructureComponents} selectedComponentId={simulation.selectedComponentId} getStatus={simulation.getStatus} onSelect={simulation.selectComponent} />
        </Panel>
      ) : <MonitoringView />}
      <ComponentInspector component={simulation.selectedComponent} status={simulation.getStatus(simulation.selectedComponent.id)} remediationExecuted={simulation.remediationExecuted} onResetStatus={simulation.reset} />
      <IncidentPanel incidents={incidentScenarios} selectedIncident={simulation.selectedIncident} selectedIncidentId={simulation.selectedIncidentId} revealedEvidence={simulation.revealedEvidence} remediationExecuted={simulation.remediationExecuted} affectedStatus={simulation.getStatus(simulation.selectedIncident.affectedComponentId)} onSelect={simulation.selectIncident} onReveal={simulation.revealEvidence} onRemediate={simulation.executeRemediation} onReset={simulation.reset} />
    </motion.div>
  )
}
