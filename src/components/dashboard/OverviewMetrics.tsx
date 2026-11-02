import { Blocks, Cloud, Code2, Layers3 } from 'lucide-react'
import { MetricCard } from '@/components/ui/MetricCard'

export function OverviewMetrics() {
  return (
    <section className="dashboard-section" aria-labelledby="overview-metrics-title">
      <div className="dashboard-section__heading">
        <p id="overview-metrics-title" className="panel__label">SYSTEM OVERVIEW</p>
        <span className="dashboard-section__line" />
      </div>
      <div className="metric-grid metric-grid--four">
        <MetricCard label="Engineering focus" value="Infrastructure + AI" detail="Primary exploration" icon={Code2} tone="blue" />
        <MetricCard label="Current environment" value="HCLTech" detail="Professional context" icon={Layers3} tone="cyan" />
        <MetricCard label="Featured system" value="CLOUD TWIN" detail="Signature simulation" icon={Cloud} tone="blue" />
        <MetricCard label="Project workspace" value="Active" detail="Portfolio in progress" icon={Blocks} tone="neutral" />
      </div>
    </section>
  )
}
