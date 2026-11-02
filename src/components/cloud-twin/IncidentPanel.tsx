import { CheckCircle2, ChevronRight, Play, RotateCcw, Search, ShieldAlert } from 'lucide-react'
import { motion } from 'framer-motion'
import type { IncidentScenario, InfrastructureStatus } from '@/types/cloud-twin'
import { Panel } from '@/components/ui/Panel'
import { StatusBadge } from '@/components/ui/StatusBadge'

type IncidentPanelProps = {
  incidents: IncidentScenario[]
  selectedIncident: IncidentScenario
  selectedIncidentId: string
  revealedEvidence: number
  remediationExecuted: boolean
  affectedStatus: InfrastructureStatus
  onSelect: (incidentId: string) => void
  onReveal: () => void
  onRemediate: () => void
  onReset: () => void
}

export function IncidentPanel({ incidents, selectedIncident, selectedIncidentId, revealedEvidence, remediationExecuted, affectedStatus, onSelect, onReveal, onRemediate, onReset }: IncidentPanelProps) {
  const allEvidenceRevealed = revealedEvidence >= selectedIncident.investigationSteps.length
  return (
    <div className="incident-layout">
      <Panel label="INCIDENT QUEUE" title="Investigation scenarios">
        <div className="incident-list">
          {incidents.map((incident) => (
            <button type="button" key={incident.id} className={`incident-list__item ${selectedIncidentId === incident.id ? 'is-selected' : ''}`} onClick={() => onSelect(incident.id)} aria-pressed={selectedIncidentId === incident.id}>
              <span className={`incident-severity incident-severity--${incident.severity}`}><ShieldAlert size={14} /></span>
              <span><strong>{incident.incidentId}</strong><small>{incident.title}</small></span>
              <ChevronRight size={14} />
            </button>
          ))}
        </div>
      </Panel>
      <Panel className="incident-detail" label={`INCIDENT / ${selectedIncident.incidentId}`} title={selectedIncident.title}>
        <div className="incident-detail__meta"><StatusBadge tone={selectedIncident.severity === 'critical' ? 'warning' : 'info'}>{selectedIncident.severity.toUpperCase()} SEVERITY</StatusBadge><span>Affected: {selectedIncident.affectedComponentId}</span><StatusBadge tone={affectedStatus === 'healthy' ? 'success' : 'warning'} pulse>{affectedStatus.toUpperCase()}</StatusBadge></div>
        <p className="incident-detail__description">{selectedIncident.description}</p>
        <div className="incident-timeline"><span className="inspector-label">TIMELINE</span>{selectedIncident.timeline.map((event) => <div className="incident-event" key={event.time}><time>{event.time}</time><div><strong>{event.label}</strong><span>{event.detail}</span></div></div>)}</div>
        <div className="investigation-evidence">
          <span className="inspector-label">INVESTIGATION EVIDENCE / {revealedEvidence} OF {selectedIncident.investigationSteps.length}</span>
          {revealedEvidence > 0 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="evidence-card"><Search size={16} /><div><strong>Probable cause</strong><p>{selectedIncident.probableCause}</p></div></motion.div>}
          {revealedEvidence > 1 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="evidence-card"><CheckCircle2 size={16} /><div><strong>Investigation path</strong><p>{selectedIncident.investigationSteps.slice(0, revealedEvidence).join(' ')}</p></div></motion.div>}
        </div>
        <div className="incident-actions">
          {!allEvidenceRevealed && <button type="button" className="button button--quiet" onClick={onReveal}><Play size={14} /> Reveal next evidence</button>}
          {allEvidenceRevealed && !remediationExecuted && <button type="button" className="button button--primary" onClick={onRemediate}><CheckCircle2 size={14} /> Execute simulated remediation</button>}
          {remediationExecuted && <div className="remediation-result"><CheckCircle2 size={14} /><span>Simulated remediation executed. Component state is now healthy.</span></div>}
          <button type="button" className="button button--quiet" onClick={onReset}><RotateCcw size={14} /> Reset simulation</button>
        </div>
        <div className="remediation-note"><span>SUGGESTED REMEDIATION</span><p>{selectedIncident.remediation}</p></div>
      </Panel>
    </div>
  )
}
