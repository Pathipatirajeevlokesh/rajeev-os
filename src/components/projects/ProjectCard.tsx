import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ProjectRecord } from '@/data/projects'
import { Panel } from '@/components/ui/Panel'
import { StatusBadge } from '@/components/ui/StatusBadge'

type ProjectCardProps = {
  project: ProjectRecord
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
    >
      <Panel className="vault-project-card">
        <div className="vault-project-card__body">
          <div className="vault-project-card__topline">
            <span className="vault-project-card__icon"><Icon size={19} /></span>
            <StatusBadge tone={project.status === 'Finalist experience' ? 'success' : 'neutral'}>
              {project.status}
            </StatusBadge>
          </div>
          <p className="vault-project-card__category">{project.category}</p>
          <h2>{project.name}</h2>
          <p className="vault-project-card__description">{project.description}</p>
          <div className="vault-project-card__footer">
            <div className="tag-list">
              {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
            <Link
              className="project-card__link"
              to={`/projects/${project.id}`}
              aria-label={`View details for ${project.name}`}
            >
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </Panel>
    </motion.div>
  )
}
