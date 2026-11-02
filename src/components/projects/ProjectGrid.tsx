import { FolderSearch } from 'lucide-react'
import type { ProjectRecord } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

type ProjectGridProps = {
  projects: ProjectRecord[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="project-grid-empty">
        <FolderSearch size={24} />
        <strong>No project signals match this query.</strong>
        <span>Try another category or search term.</span>
      </div>
    )
  }

  return (
    <div className="vault-project-grid">
      {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
    </div>
  )
}
