import { ContactChannelCard } from '@/components/contact/ContactChannelCard'
import { ContactForm } from '@/components/contact/ContactForm'
import { CollaborationInterests } from '@/components/contact/CollaborationInterests'
import { ContactHero } from '@/components/contact/ContactHero'
import { contactChannels } from '@/data/contact'

export function ContactPage() {
  return (
    <div className="page-stack contact-page">
      <ContactHero />
      <section className="contact-section">
        <div className="contact-section__heading">
          <p className="panel__label">CONTACT CHANNELS</p>
          <span className="dashboard-section__line" />
        </div>
        <div className="contact-channel-grid">
          {contactChannels.map((channel) => <ContactChannelCard channel={channel} key={channel.id} />)}
        </div>
      </section>
      <ContactForm />
      <CollaborationInterests />
    </div>
  )
}
