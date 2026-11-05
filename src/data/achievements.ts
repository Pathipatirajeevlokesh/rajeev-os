import type { LucideIcon } from 'lucide-react'
import { Award, BriefcaseBusiness, Code2, ShieldCheck } from 'lucide-react'

export type AchievementCategory = 'competitions' | 'research' | 'experience' | 'certifications'

export type AchievementRecord = {
  id: string
  title: string
  category: AchievementCategory
  categoryLabel: string
  organization: string
  description: string
  technologies: string[]
  status: string
  icon: LucideIcon
  externalUrl?: string
}

export const achievementRecords: AchievementRecord[] = [
  {
    id: 'openenv-hackathon-finalist',
    title: 'OpenEnv Hackathon Finalist',
    category: 'competitions',
    categoryLabel: 'HACKATHONS & COMPETITIONS',
    organization: 'Scaler × Meta × Hugging Face OpenEnv Hackathon 2026',
    description:
      'Finalist with BasisForce for building an OpenEnv-compatible reinforcement learning environment for simulated SAP Basis incident resolution.',
    technologies: ['Python', 'FastAPI', 'Docker', 'OpenEnv'],
    status: 'Finalist',
    icon: Award,
  },
  {
    id: 'ieee-phishing-research',
    title: 'IEEE Research Selection',
    category: 'research',
    categoryLabel: 'RESEARCH & PUBLICATIONS',
    organization: 'IEEE conference selection',
    description:
      'Research project selected for an IEEE conference: Phishing Attack Detection using NLP and Deep Learning.',
    technologies: ['NLP', 'Deep Learning', 'Python', 'Machine Learning'],
    status: 'Selected',
    icon: ShieldCheck,
  },
  {
    id: '1stop-security-analyst',
    title: 'Security Analyst Intern',
    category: 'experience',
    categoryLabel: 'PROFESSIONAL EXPERIENCE',
    organization: '1Stop',
    description: 'Security analyst internship experience focused on building practical exposure to security-oriented work.',
    technologies: ['Security analysis'],
    status: 'Internship',
    icon: ShieldCheck,
  },
  {
    id: 'ibm-chatbot-developer',
    title: 'No-Code Chatbot Developer Intern',
    category: 'experience',
    categoryLabel: 'PROFESSIONAL EXPERIENCE',
    organization: 'IBM',
    description: 'Internship experience exploring no-code chatbot development.',
    technologies: ['Chatbots', 'No-code development'],
    status: 'Internship',
    icon: Code2,
  },
  {
    id: 'pentagon-frontend-development',
    title: 'Front-End Development',
    category: 'experience',
    categoryLabel: 'PROFESSIONAL EXPERIENCE',
    organization: 'Pentagon Space',
    description: 'Internship experience focused on front-end development.',
    technologies: ['Frontend development'],
    status: 'Internship',
    icon: Code2,
  },
  {
    id: 'compsoft-ui-ux',
    title: 'UI/UX',
    category: 'experience',
    categoryLabel: 'PROFESSIONAL EXPERIENCE',
    organization: 'Compsoft Technologies',
    description: 'Internship experience focused on UI/UX work.',
    technologies: ['UI/UX'],
    status: 'Internship',
    icon: BriefcaseBusiness,
  },
]
