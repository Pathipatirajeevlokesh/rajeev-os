import { useMemo, useState } from 'react'
import { Award, BookOpen, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { AchievementFilters } from '@/components/achievements/AchievementFilters'
import { AchievementGrid } from '@/components/achievements/AchievementGrid'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { achievementRecords, type AchievementCategory } from '@/data/achievements'

const categorySummary = [
  { label: 'Hackathons & Competitions', icon: Award },
  { label: 'Research & Publications', icon: BookOpen },
  { label: 'Professional Experience', icon: BriefcaseBusiness },
  { label: 'Certifications & Learning', icon: GraduationCap },
]

export function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState<AchievementCategory | 'all'>('all')
  const visibleAchievements = useMemo(
    () => activeCategory === 'all'
      ? achievementRecords
      : achievementRecords.filter((achievement) => achievement.category === activeCategory),
    [activeCategory],
  )

  return (
    <div className="page-stack achievements-page">
      <SectionHeading
        eyebrow="06 / ACHIEVEMENTS"
        title="Milestones that move engineering forward."
        description="A record of competitions, research, experiments and professional growth."
        action={<StatusBadge tone="info">VERIFIED ARCHIVE</StatusBadge>}
      />
      <div className="achievement-summary">
        {categorySummary.map(({ label, icon: Icon }) => (
          <div key={label}><Icon size={15} /><span>{label}</span></div>
        ))}
      </div>
      <div className="achievement-controls">
        <AchievementFilters activeCategory={activeCategory} onChange={setActiveCategory} />
        <span className="achievement-count">{visibleAchievements.length.toString().padStart(2, '0')} RECORDS SHOWN</span>
      </div>
      <AchievementGrid achievements={visibleAchievements} />
      <div className="vault-note"><Award size={15} /><span>Only documented achievements are surfaced here. External links and dates are omitted unless verified.</span></div>
    </div>
  )
}
