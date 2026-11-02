import { Check, Compass } from 'lucide-react'
import { engineeringPrinciples } from '@/data/about'
import { Panel } from '@/components/ui/Panel'

export function EngineeringPrinciples() {
  return (
    <section className="about-section">
      <div className="about-section__heading">
        <p className="panel__label">ENGINEERING PHILOSOPHY</p>
        <span className="dashboard-section__line" />
      </div>
      <Panel className="principles-panel" label="OPERATING PRINCIPLES" title="Useful constraints for better work">
        <div className="principles-intro">
          <Compass size={23} />
          <p>These are working principles rather than claims of mastery: simple reminders to keep the system honest.</p>
        </div>
        <div className="philosophy-grid">
          {engineeringPrinciples.map((principle) => (
            <div className="philosophy-item" key={principle}>
              <Check size={15} />
              <span>{principle}</span>
            </div>
          ))}
        </div>
      </Panel>
    </section>
  )
}
