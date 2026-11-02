import { Award, Flag, Star } from 'lucide-react'
import { Panel } from '@/components/ui/Panel'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function AchievementsPage() {
  return (
    <div className="page-stack">
      <SectionHeading eyebrow="06 / ACHIEVEMENTS" title="Milestones, when they matter." description="A deliberate record of progress, shipped ideas, and lessons worth carrying forward." />
      <div className="content-grid content-grid--three">
        <Panel label="SIGNAL" title="No entries yet"><div className="empty-state empty-state--compact"><Star size={23} /><span>This index will stay honest: no invented milestones, no vanity counters.</span></div></Panel>
        <Panel label="DIRECTION" title="Keep building"><div className="empty-state empty-state--compact"><Flag size={23} /><span>Future entries will be attached to a real outcome or meaningful learning.</span></div></Panel>
        <Panel label="ARCHIVE" title="Ready for evidence"><div className="empty-state empty-state--compact"><Award size={23} /><span>Context and links will accompany each achievement when the archive opens.</span></div></Panel>
      </div>
    </div>
  )
}
