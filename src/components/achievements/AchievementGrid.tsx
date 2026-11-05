import { ArchiveX } from 'lucide-react'
import type { AchievementRecord } from '@/data/achievements'
import { AchievementCard } from './AchievementCard'

type AchievementGridProps = {
  achievements: AchievementRecord[]
}

export function AchievementGrid({ achievements }: AchievementGridProps) {
  if (achievements.length === 0) {
    return (
      <div className="achievement-empty">
        <ArchiveX size={24} />
        <strong>No verified records in this category yet.</strong>
        <span>This archive stays limited to documented milestones.</span>
      </div>
    )
  }

  return (
    <div className="achievement-grid">
      {achievements.map((achievement, index) => (
        <AchievementCard achievement={achievement} index={index} key={achievement.id} />
      ))}
    </div>
  )
}
