import { motion } from 'framer-motion'
import { ArrowUpRight, Radio, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { StatusBadge } from '@/components/ui/StatusBadge'
import profilePortrait from '@/assets/rajeev-profile.png'

export function HeroSection() {
  return (
    <motion.section
      className="command-hero"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="command-hero__copy">
        <p className="section-heading__eyebrow">PERSONAL ENGINEERING SYSTEM <span>/ 2026</span></p>
        <h1>Engineering systems.<br /><em>Building intelligent experiences.</em></h1>
        <p className="command-hero__description">
          I&apos;m Rajeev Lokesh — an engineer exploring cloud infrastructure, AI systems,
          automation and intelligent software.
        </p>
        <div className="command-hero__actions">
          <Link className="button button--primary" to="/projects">
            View my projects <ArrowUpRight size={15} />
          </Link>
          <Link className="button button--quiet" to="/cloud-twin">
            Explore CLOUD TWIN <Sparkles size={14} />
          </Link>
          <Link className="button button--text" to="/contact">Start a conversation <ArrowUpRight size={14} /></Link>
        </div>
      </div>
      <div className="command-hero__portrait-wrap">
        <div className="command-hero__portrait-frame">
          <img src={profilePortrait} alt="Rajeev Lokesh, engineering portfolio author" />
          <span className="command-hero__portrait-caption">RAJEEV LOKESH <i /> ENGINEERING SYSTEM</span>
        </div>
        <div className="command-hero__status">
        <div className="hero-status__line">
          <span className="hero-status__pulse" aria-hidden="true" />
          <StatusBadge tone="success" pulse>CONTACT CHANNEL / OPEN</StatusBadge>
        </div>
        <p>Available for thoughtful engineering conversations.</p>
        <div className="hero-status__rule" />
        <div className="hero-status__meta">
          <Radio size={14} />
          <span>LOCAL SYSTEM / READY</span>
        </div>
        </div>
      </div>
    </motion.section>
  )
}
