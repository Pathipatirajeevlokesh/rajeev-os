import { AlertTriangle } from 'lucide-react'

export function SimulationNotice() {
  return (
    <div className="cloud-twin-notice" role="note">
      <AlertTriangle size={17} />
      <strong>SIMULATION MODE — NOT CONNECTED TO LIVE AWS INFRASTRUCTURE</strong>
      <span>All resources, metrics, incidents, and remediation actions are local and simulated.</span>
    </div>
  )
}
