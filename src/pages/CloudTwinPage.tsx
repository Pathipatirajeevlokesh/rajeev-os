import { Activity, AlertTriangle, Cloud, Gauge, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { cloudTwinNodes } from '@/data/navigation'
import { Panel } from '@/components/ui/Panel'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatusBadge } from '@/components/ui/StatusBadge'

export function CloudTwinPage() {
  return (
    <motion.div className="page-stack" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
      <SectionHeading eyebrow="05 / SIGNATURE SURFACE" title="CLOUD TWIN" description="A simulated infrastructure monitoring and incident investigation environment." action={<StatusBadge tone="warning">SIMULATION ONLY</StatusBadge>} />
      <div className="notice-banner"><AlertTriangle size={17} /><span>This environment is a local product simulation. It is not connected to AWS or any live cloud infrastructure.</span></div>
      <div className="metric-grid">
        <Metric icon={Activity} label="Service health" value="NOMINAL" />
        <Metric icon={Gauge} label="Request flow" value="STANDBY" />
        <Metric icon={ShieldCheck} label="Incident queue" value="CLEAR" />
      </div>
      <div className="content-grid content-grid--two">
        <Panel label="TOPOLOGY / SIMULATED" title="Service map">
          <div className="cloud-map">
            <div className="cloud-map__hub"><Cloud size={21} /><span>SIMULATED CLOUD</span></div>
            {cloudTwinNodes.map((node) => <div className="cloud-node" key={node.label}><span className="cloud-node__line" /><div><strong>{node.label}</strong><small>{node.detail}</small></div><StatusBadge tone="success" pulse>{node.state}</StatusBadge></div>)}
          </div>
        </Panel>
        <Panel label="INVESTIGATION LOG" title="No active incidents">
          <div className="empty-state"><ShieldCheck size={26} /><strong>All simulated systems nominal</strong><span>Incident timelines and traces will appear here during an active scenario.</span></div>
        </Panel>
      </div>
    </motion.div>
  )
}

function Metric({ icon: Icon, label, value }: { icon: typeof Activity; label: string; value: string }) {
  return <article className="metric-card metric-card--cyan"><div className="metric-card__topline"><span className="metric-card__label">{label}</span><Icon size={16} /></div><strong className="metric-card__value">{value}</strong><span className="metric-card__detail">Local simulation state</span></article>
}
