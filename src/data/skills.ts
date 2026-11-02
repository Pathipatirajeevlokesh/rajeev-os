import type { LucideIcon } from 'lucide-react'
import {
  BrainCircuit,
  Code2,
  Container,
  Database,
  Globe2,
  Layers3,
} from 'lucide-react'

export type SkillCategory = {
  id: string
  label: string
  description: string
  icon: LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming',
    description: 'Languages used across application, data, and systems work.',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Interfaces and component systems for clear user experiences.',
    icon: Globe2,
    skills: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    label: 'Backend and APIs',
    description: 'Application services, APIs, and validation boundaries.',
    icon: Layers3,
    skills: ['FastAPI', 'Flask', 'REST APIs', 'Pydantic'],
  },
  {
    id: 'ai',
    label: 'AI and LLM Engineering',
    description: 'Patterns explored for retrieval, reasoning, and intelligent workflows.',
    icon: BrainCircuit,
    skills: ['LLM integrations', 'RAG', 'Embeddings', 'LangChain', 'LangGraph', 'Agentic AI', 'Google ADK'],
  },
  {
    id: 'data',
    label: 'Data and Storage',
    description: 'Storage and retrieval tools used in application experiments.',
    icon: Database,
    skills: ['MongoDB', 'SQLite', 'ChromaDB', 'FAISS'],
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure and Tools',
    description: 'Tools for development, delivery, and infrastructure-oriented work.',
    icon: Container,
    skills: ['Docker', 'Git', 'GitHub', 'Linux', 'FastAPI deployment workflows', 'OpenEnv'],
  },
]
