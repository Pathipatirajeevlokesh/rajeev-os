import type { LucideIcon } from 'lucide-react'
import { Bot, Database, Globe2, Mic2, ShieldCheck } from 'lucide-react'

export type ProjectFilter = 'ai' | 'infrastructure' | 'automation' | 'cybersecurity'

export type ProjectRecord = {
  id: string
  name: string
  category: string
  filters: ProjectFilter[]
  description: string
  technologies: string[]
  icon: LucideIcon
  status: string
  achievement?: string
  overview: string
  problem?: string
  approach?: string
  implementation?: string
  repositoryUrl?: string
}

export const projects: ProjectRecord[] = [
  {
    id: 'sap-enterprise-ops',
    name: 'SAP Enterprise Ops Environment',
    category: 'REINFORCEMENT LEARNING / INFRASTRUCTURE',
    filters: ['infrastructure'],
    description:
      'An OpenEnv-compatible reinforcement learning environment that simulates SAP Basis administration and incident resolution under operational constraints.',
    technologies: ['Python', 'FastAPI', 'Docker', 'OpenEnv'],
    icon: Database,
    status: 'Finalist experience',
    achievement: 'Finalist — Scaler × Meta × Hugging Face OpenEnv Hackathon 2026.',
    overview:
      'This project explores an OpenEnv-compatible reinforcement learning environment for SAP Basis administration and incident resolution.',
    problem:
      'The environment explores how operational constraints and incident resolution can be represented for reinforcement learning workflows.',
    approach: 'OpenEnv-compatible simulation with a FastAPI service boundary and Docker-based tooling.',
    implementation: 'Further implementation details are not yet documented.',
  },
  {
    id: 'enterprise-ai-workspace',
    name: 'Enterprise AI Workspace',
    category: 'AI SYSTEMS / ENTERPRISE SOFTWARE',
    filters: ['ai'],
    description:
      'An AI workspace concept designed around enterprise workflows, LLM integrations, retrieval-augmented generation and agentic AI.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'LangChain', 'LangGraph', 'ChromaDB'],
    icon: Bot,
    status: 'Concept',
    overview:
      'An AI workspace concept focused on enterprise workflows and the interaction between retrieval, language models, and agentic architecture.',
    problem:
      'The concept explores how enterprise workflows can be supported by contextual AI experiences without losing clarity around the underlying system.',
    approach: 'React and TypeScript interface concepts paired with FastAPI, LLM integrations, RAG, LangChain, LangGraph, and ChromaDB.',
    implementation: 'Production deployment and additional implementation details are not yet documented.',
  },
  {
    id: 'ai-procurement-voice-agent',
    name: 'AI Procurement Voice Agent',
    category: 'INTELLIGENT AUTOMATION',
    filters: ['automation', 'ai'],
    description:
      'An AI-assisted procurement automation concept exploring voice-agent interactions and procurement workflows.',
    technologies: ['Python', 'AI Agents', 'Voice AI', 'Automation'],
    icon: Mic2,
    status: 'Concept',
    overview:
      'A concept for exploring voice-agent interactions within AI-assisted procurement workflows.',
    problem: 'The project explores how procurement tasks might be supported through conversational and automated interactions.',
    approach: 'AI-agent and voice-AI concepts applied to procurement workflow automation.',
    implementation: 'Integration details and performance information are not yet documented.',
  },
  {
    id: 'phishing-attack-detection',
    name: 'Phishing Attack Detection',
    category: 'MACHINE LEARNING / CYBERSECURITY',
    filters: ['cybersecurity', 'ai'],
    description:
      'A phishing detection project exploring NLP and deep learning techniques to identify potentially malicious messages and URLs.',
    technologies: ['Python', 'NLP', 'Deep Learning', 'TensorFlow', 'Machine Learning'],
    icon: ShieldCheck,
    status: 'Exploration',
    overview:
      'A cybersecurity and machine learning project exploring detection of potentially malicious messages and URLs.',
    problem: 'The project examines the problem of identifying phishing signals in message and URL data.',
    approach: 'NLP and deep learning techniques explored with Python, TensorFlow, and machine learning workflows.',
    implementation: 'Dataset, evaluation, and deployment details are not yet documented.',
  },
  {
    id: 'goscan-insightscan',
    name: 'GoScan / InsightScan',
    category: 'CYBERSECURITY / NETWORK ENGINEERING',
    filters: ['cybersecurity', 'infrastructure'],
    description:
      'A network mapping and security exploration project focused on discovering network assets and visualizing network information.',
    technologies: ['Python', 'Nmap', 'Network Mapping', 'Security Tools'],
    icon: Globe2,
    status: 'Exploration',
    overview:
      'A network mapping and security exploration project focused on discovering network assets and visualizing network information.',
    problem: 'The project explores how network assets and their relationships can be surfaced for security-oriented investigation.',
    approach: 'Python, Nmap, network mapping, and security tools are part of the explored technical direction.',
    implementation: 'Implemented functionality and planned features are not yet documented separately.',
  },
]

export type FeaturedProject = Pick<ProjectRecord, 'name' | 'category' | 'description' | 'technologies' | 'icon'>

export const featuredProjects: FeaturedProject[] = projects.slice(0, 3)
