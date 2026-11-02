import { motion } from 'framer-motion'
import { journeyMilestones } from '@/data/about'
import { Panel } from '@/components/ui/Panel'

export function EngineeringJourney() {
  return (
    <section className="about-section">
      <div className="about-section__heading">
        <p className="panel__label">ENGINEERING JOURNEY</p>
        <span className="dashboard-section__line" />
      </div>
      <Panel label="MILESTONES / NO DATES FABRICATED" title="A direction, not a finished map">
        <div className="journey-timeline">
          {journeyMilestones.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              className="journey-item"
              key={title}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <span className="journey-item__marker"><Icon size={16} /></span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Panel>
    </section>
  )
}
