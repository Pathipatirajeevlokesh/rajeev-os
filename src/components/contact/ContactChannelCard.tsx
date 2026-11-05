import { ArrowUpRight, CircleAlert } from 'lucide-react'
import type { ContactChannel } from '@/data/contact'
import { Panel } from '@/components/ui/Panel'
import { StatusBadge } from '@/components/ui/StatusBadge'

type ContactChannelCardProps = {
  channel: ContactChannel
}

export function ContactChannelCard({ channel }: ContactChannelCardProps) {
  const Icon = channel.icon

  return (
    <Panel className="contact-channel-card">
      <div className="contact-channel-card__body">
        <div className="contact-channel-card__topline">
          <span className="contact-channel-card__icon"><Icon size={19} /></span>
          <StatusBadge tone="warning">VALUE NEEDED</StatusBadge>
        </div>
        <h2>{channel.label}</h2>
        <p>{channel.description}</p>
        {channel.value && channel.href ? (
          <a
            className="contact-channel-card__action button button--quiet"
            href={channel.href}
            target={channel.id === 'email' ? undefined : '_blank'}
            rel={channel.id === 'email' ? undefined : 'noreferrer'}
          >
            {channel.value} <ArrowUpRight size={14} />
          </a>
        ) : (
          <div className="contact-channel-card__missing">
            <CircleAlert size={14} />
            <span>Verified {channel.label} value not provided</span>
          </div>
        )}
      </div>
    </Panel>
  )
}
