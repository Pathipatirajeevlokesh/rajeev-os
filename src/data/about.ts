import type { LucideIcon } from 'lucide-react'
import { BrainCircuit, Code2, FlaskConical, ShieldCheck, Sparkles } from 'lucide-react'

export type JourneyMilestone = {
  title: string
  description: string
  icon: LucideIcon
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    title: 'Frontend development exposure',
    description: 'Exploring how thoughtful interfaces make complex systems easier to understand and use.',
    icon: Code2,
  },
  {
    title: 'Python and security-related projects',
    description: 'Building foundations through Python work and projects connected to security-oriented problem solving.',
    icon: ShieldCheck,
  },
  {
    title: 'AI and machine learning projects',
    description: 'Learning through practical experiments across intelligent software and machine learning workflows.',
    icon: FlaskConical,
  },
  {
    title: 'Enterprise AI and agentic AI exploration',
    description: 'Exploring RAG, embeddings, LLM integrations, and agentic patterns for useful enterprise systems.',
    icon: BrainCircuit,
  },
  {
    title: 'OpenEnv hackathon finalist experience',
    description: 'Finalist experience with an OpenEnv-compatible SAP operations simulation at the Scaler × Meta × Hugging Face OpenEnv Hackathon.',
    icon: Sparkles,
  },
]

export const engineeringPrinciples = [
  'Understand the system before changing it.',
  'Build practical solutions.',
  'Design for reliability.',
  'Learn through experimentation.',
  'Keep improving engineering fundamentals.',
]
