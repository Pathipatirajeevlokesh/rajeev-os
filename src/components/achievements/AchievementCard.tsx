import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { AchievementRecord } from '@/data/achievements'
import { Panel } from '@/components/ui/Panel'
import { StatusBadge } from '@/components/ui/StatusBadge'

type AchievementCardProps = {
  achievement: AchievementRecord
  index: number
}

export function AchievementCard({ achievement, index }: AchievementCardProps) {
  const Icon = achievement.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
    >
      <Panel className="achievement-card">
        <div className="achievement-card__body">
          <div className="achievement-card__topline">
            <span className="achievement-card__icon"><Icon size={19} /></span>
            <StatusBadge tone={achievement.status === 'Finalist' ? 'success' : 'info'}>
              {achievement.status}
            </StatusBadge>
          </div>
          <p className="achievement-card__category">{achievement.categoryLabel}</p>
          <h2>{achievement.title}</h2>
          <p className="achievement-card__organization">{achievement.organization}</p>
          <p className="achievement-card__description">{achievement.description}</p>
          <div className="achievement-card__footer">
            <div className="tag-list">
              {achievement.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
            {achievement.externalUrl && (
              <a
                className="achievement-card__link"
                href={achievement.externalUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open verified link for ${achievement.title}`}
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </Panel>
    </motion.div>
  )
}
