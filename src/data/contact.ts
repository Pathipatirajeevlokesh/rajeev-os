import type { LucideIcon } from 'lucide-react'
import { BriefcaseBusiness, Code2, Mail } from 'lucide-react'

export type ContactChannel = {
  id: 'email' | 'linkedin' | 'github'
  label: string
  description: string
  value: string | null
  href: string | null
  icon: LucideIcon
}

export const contactChannels: ContactChannel[] = [
  {
    id: 'email',
    label: 'Email',
    description: 'The most direct route for a thoughtful technical conversation.',
    value: 'pathipatirajeevlokesh@gmail.com',
    href: 'mailto:pathipatirajeevlokesh@gmail.com',
    icon: Mail,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    description: 'Professional context and a place to connect.',
    value: 'linkedin.com/in/rajeevlokeshpathipati',
    href: 'https://in.linkedin.com/in/rajeevlokeshpathipati',
    icon: BriefcaseBusiness,
  },
  {
    id: 'github',
    label: 'GitHub',
    description: 'Code, experiments, and public engineering work.',
    value: 'github.com/Pathipatirajeevlokesh',
    href: 'https://github.com/Pathipatirajeevlokesh',
    icon: Code2,
  },
]

export const collaborationInterests = [
  { title: 'Agentic AI and LLM applications', detail: 'Retrieval, reasoning, and useful system interfaces.' },
  { title: 'Cloud infrastructure and automation', detail: 'Operational clarity, service boundaries, and repeatable workflows.' },
  { title: 'Backend engineering', detail: 'APIs, data flows, and dependable application foundations.' },
  { title: 'AI-powered developer tools', detail: 'Tools that make engineering work more contextual and effective.' },
]
