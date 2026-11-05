import { Blocks, Cloud, Code2, Layers3 } from 'lucide-react'

const signals = [
  { label: 'Engineering focus', value: 'Infrastructure + AI', detail: 'Primary exploration', icon: Code2 },
  { label: 'Current environment', value: 'HCLTech', detail: 'Professional context', icon: Layers3 },
  { label: 'Featured system', value: 'CLOUD TWIN', detail: 'Signature simulation', icon: Cloud },
  { label: 'Project workspace', value: 'Active', detail: 'Portfolio in progress', icon: Blocks },
]

export function OverviewMetrics() {
  return (
    <section className="dashboard-section" aria-labelledby="overview-metrics-title">
      <div className="dashboard-section__heading">
        <p id="overview-metrics-title" className="panel__label">SYSTEM OVERVIEW</p>
        <span className="dashboard-section__line" />
      </div>
      <div className="command-signals">
        {signals.map(({ label, value, detail, icon: Icon }, index) => (
          <div className="command-signal" key={label}>
            <span className="command-signal__index">0{index + 1}</span>
            <Icon size={16} aria-hidden="true" />
            <span className="command-signal__label">{label}</span>
            <strong>{value}</strong>
            <small>{detail}</small>
          </div>
        ))}
      </div>
    </section>
  )
}
