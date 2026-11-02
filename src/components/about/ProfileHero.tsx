import { motion } from 'framer-motion'
import { BriefcaseBusiness, MapPin, Sparkles } from 'lucide-react'
import { StatusBadge } from '@/components/ui/StatusBadge'

export function ProfileHero() {
  return (
    <motion.section
      className="profile-hero"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div>
        <p className="section-heading__eyebrow">ENGINEER PROFILE / ABOUT</p>
        <h1>Curiosity drives the systems I build.</h1>
        <p className="profile-hero__intro">
          I&apos;m Rajeev Lokesh, an engineer interested in cloud infrastructure, intelligent
          software, AI systems and automation.
        </p>
      </div>
      <div className="profile-hero__signal">
        <div className="profile-hero__signal-top">
          <span className="profile-hero__avatar" aria-hidden="true">RL</span>
          <StatusBadge tone="success" pulse>ENGINEER / EXPLORING</StatusBadge>
        </div>
        <div className="profile-hero__meta">
          <span><BriefcaseBusiness size={14} /> HCLTech</span>
          <span><MapPin size={14} /> SAP infrastructure</span>
        </div>
        <div className="profile-hero__signal-note">
          <Sparkles size={14} />
          <span>Building context before complexity.</span>
        </div>
      </div>
    </motion.section>
  )
}
