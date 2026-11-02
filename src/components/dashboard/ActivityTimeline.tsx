import { CheckCircle2 } from 'lucide-react'
import { engineeringActivity } from '@/data/activity'
import { Panel } from '@/components/ui/Panel'

export function ActivityTimeline() {
  return (
    <section className="dashboard-section" aria-labelledby="activity-title">
      <div className="dashboard-section__heading">
        <p className="panel__label">ENGINEERING LOG</p>
        <h2 id="activity-title" className="dashboard-section__title">Recent engineering activity</h2>
      </div>
      <Panel className="activity-panel">
        <div className="activity-timeline">
          {engineeringActivity.map((item) => (
            <div className="activity-item" key={item}>
              <span className="activity-item__marker"><CheckCircle2 size={15} /></span>
              <p>{item}</p>
              <span className="activity-item__state">RECORDED</span>
            </div>
          ))}
        </div>
      </Panel>
    </section>
  )
}
