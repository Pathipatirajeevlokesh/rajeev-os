import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react'
import { Panel } from '@/components/ui/Panel'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function ContactPage() {
  return (
    <div className="page-stack">
      <SectionHeading eyebrow="07 / CONTACT" title="Open a channel." description="For thoughtful conversations about engineering, interfaces, and the work this system is becoming." />
      <Panel className="contact-panel" label="COMMUNICATIONS" title="This channel is intentionally quiet.">
        <div className="contact-options">
          <div><span className="contact-icon"><Mail size={18} /></span><span><strong>Email</strong><small>Connect through a direct message when the public channel is ready.</small></span><span className="contact-status">OFFLINE</span></div>
          <div><span className="contact-icon"><MessageSquare size={18} /></span><span><strong>Context first</strong><small>A useful subject and a little context helps route the signal.</small></span><ArrowUpRight size={17} /></div>
        </div>
      </Panel>
    </div>
  )
}
