import { motion } from 'framer-motion'
import { MessageCircle, Radio } from 'lucide-react'
import { StatusBadge } from '@/components/ui/StatusBadge'

export function ContactHero() {
  return (
    <motion.section
      className="contact-hero"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div>
        <p className="section-heading__eyebrow">07 / PROFESSIONAL CONNECTION HUB</p>
        <h1>Let&apos;s build something meaningful.</h1>
        <p className="contact-hero__intro">
          Open to engineering opportunities, interesting technical challenges, and
          collaborations around AI, cloud infrastructure, and intelligent systems.
        </p>
      </div>
      <div className="contact-hero__signal">
        <div className="contact-hero__signal-top">
          <MessageCircle size={18} />
          <StatusBadge tone="info">OPEN CHANNEL</StatusBadge>
        </div>
        <p>Clear context makes for better conversations.</p>
        <div className="contact-hero__meta"><Radio size={14} /> LOCAL CONTACT SURFACE / READY</div>
      </div>
    </motion.section>
  )
}
