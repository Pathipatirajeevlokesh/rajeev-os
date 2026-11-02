import { ArrowUpRight, Cloud, Database, Globe2, Server } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Panel } from '@/components/ui/Panel'
import { StatusBadge } from '@/components/ui/StatusBadge'

const nodes = [
  { label: 'EDGE', icon: Globe2 },
  { label: 'SERVICE', icon: Server },
  { label: 'DATA', icon: Database },
]

export function CloudTwinBanner() {
  return (
    <section className="dashboard-section">
      <Panel className="cloud-twin-banner">
        <div className="cloud-twin-banner__copy">
          <div className="cloud-twin-banner__eyebrow">
            <Cloud size={16} />
            <span>SIGNATURE SYSTEM / LOCAL SIMULATION</span>
          </div>
          <h2>Observe. Investigate. Understand.</h2>
          <p>
            Explore a simulated cloud infrastructure environment, investigate incidents and
            understand service dependencies.
          </p>
          <div className="cloud-twin-banner__actions">
            <Link className="button button--primary" to="/cloud-twin">
              Open CLOUD TWIN <ArrowUpRight size={15} />
            </Link>
            <StatusBadge tone="info">NOT CONNECTED TO AWS</StatusBadge>
          </div>
        </div>
        <div className="cloud-twin-visual" aria-label="Simulated service dependency map">
          <div className="cloud-twin-visual__core"><Cloud size={25} /><span>SIMULATED CLOUD</span></div>
          <div className="cloud-twin-visual__nodes">
            {nodes.map(({ label, icon: Icon }) => (
              <div className="cloud-twin-node" key={label}>
                <span className="cloud-twin-node__connector" />
                <Icon size={17} />
                <span>{label}</span>
                <i className="cloud-twin-node__status" />
              </div>
            ))}
          </div>
        </div>
      </Panel>
    </section>
  )
}
