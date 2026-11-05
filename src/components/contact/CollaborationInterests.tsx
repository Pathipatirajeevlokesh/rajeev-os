import { ArrowUpRight, Blocks } from 'lucide-react'
import { collaborationInterests } from '@/data/contact'
import { Panel } from '@/components/ui/Panel'

export function CollaborationInterests() {
  return (
    <Panel className="collaboration-panel" label="COLLABORATION SURFACES" title="Good problems are worth sharing">
      <div className="collaboration-grid">
        {collaborationInterests.map((interest) => (
          <div className="collaboration-item" key={interest.title}>
            <Blocks size={17} />
            <div><strong>{interest.title}</strong><span>{interest.detail}</span></div>
            <ArrowUpRight size={14} />
          </div>
        ))}
      </div>
    </Panel>
  )
}
