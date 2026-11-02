import { Activity, Building2, ShieldCheck } from 'lucide-react'
import { Panel } from '@/components/ui/Panel'

export function ProfessionalBackground() {
  return (
    <section className="about-section">
      <div className="about-section__heading">
        <p className="panel__label">PROFESSIONAL BACKGROUND</p>
        <span className="dashboard-section__line" />
      </div>
      <div className="background-grid">
        <Panel label="CURRENT ORGANIZATION" title="HCLTech">
          <div className="background-card">
            <Building2 size={20} />
            <p>Current organization</p>
          </div>
        </Panel>
        <Panel label="CURRENT ROLE" title="Graduate Engineer Trainee">
          <div className="background-card">
            <ShieldCheck size={20} />
            <p>Early-career engineering role</p>
          </div>
        </Panel>
        <Panel label="WORK CONTEXT" title="SAP infrastructure and incident monitoring">
          <div className="background-card">
            <Activity size={20} />
            <p>Infrastructure support and incident management</p>
          </div>
        </Panel>
      </div>
      <Panel className="background-summary" label="PROFILE SUMMARY">
        <p>
          My engineering journey sits at the intersection of infrastructure, software, and
          intelligent systems. I&apos;m interested in understanding how reliable foundations,
          useful automation, and clear interfaces can work together. My current context in
          SAP infrastructure and incident monitoring gives that exploration a practical
          operational lens.
        </p>
      </Panel>
    </section>
  )
}
