import { useMemo, useState } from 'react'
import { infrastructureComponents } from '@/data/cloud-twin/infrastructure'
import { incidentScenarios } from '@/data/cloud-twin/incidents'
import type { CloudTwinView, InfrastructureStatus } from '@/types/cloud-twin'

const incidentStatus: Record<string, InfrastructureStatus> = {
  'inc-cpu-001': 'warning',
  'inc-rds-001': 'critical',
  'inc-errors-001': 'warning',
}

export function useCloudTwinSimulation() {
  const [view, setView] = useState<CloudTwinView>('topology')
  const [selectedComponentId, setSelectedComponentId] = useState('app-service')
  const [selectedIncidentId, setSelectedIncidentId] = useState(incidentScenarios[0].id)
  const [revealedEvidence, setRevealedEvidence] = useState(0)
  const [remediationExecuted, setRemediationExecuted] = useState(false)
  const [statusOverrides, setStatusOverrides] = useState<Record<string, InfrastructureStatus>>({})

  const selectedComponent = useMemo(
    () => infrastructureComponents.find((component) => component.id === selectedComponentId) ?? infrastructureComponents[0],
    [selectedComponentId],
  )
  const selectedIncident = useMemo(
    () => incidentScenarios.find((incident) => incident.id === selectedIncidentId) ?? incidentScenarios[0],
    [selectedIncidentId],
  )
  const getStatus = (componentId: string) =>
    statusOverrides[componentId] ?? infrastructureComponents.find((item) => item.id === componentId)?.status ?? 'offline'

  const selectIncident = (incidentId: string) => {
    const incident = incidentScenarios.find((item) => item.id === incidentId)
    if (!incident) return
    setSelectedIncidentId(incidentId)
    setSelectedComponentId(incident.affectedComponentId)
    setStatusOverrides({ [incident.affectedComponentId]: incidentStatus[incidentId] })
    setRevealedEvidence(0)
    setRemediationExecuted(false)
  }

  const revealEvidence = () => {
    setRevealedEvidence((current) => Math.min(current + 1, selectedIncident.investigationSteps.length))
  }

  const executeRemediation = () => {
    setStatusOverrides((current) => ({ ...current, [selectedIncident.affectedComponentId]: 'healthy' }))
    setRemediationExecuted(true)
    setRevealedEvidence(selectedIncident.investigationSteps.length)
  }

  const reset = () => {
    setView('topology')
    setSelectedComponentId('app-service')
    setSelectedIncidentId(incidentScenarios[0].id)
    setRevealedEvidence(0)
    setRemediationExecuted(false)
    setStatusOverrides({})
  }

  return {
    view,
    setView,
    selectedComponent,
    selectedIncident,
    selectedIncidentId,
    selectedComponentId,
    revealedEvidence,
    remediationExecuted,
    getStatus,
    selectComponent: setSelectedComponentId,
    selectIncident,
    revealEvidence,
    executeRemediation,
    reset,
  }
}
