import { useMemo, useState } from 'react'
import { FolderKanban } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { ProjectDetail } from '@/components/projects/ProjectDetail'
import { ProjectFilters } from '@/components/projects/ProjectFilters'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { projects, type ProjectFilter } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatusBadge } from '@/components/ui/StatusBadge'

export function ProjectVaultPage() {
  const { projectId } = useParams()
  const [activeFilter, setActiveFilter] = useState<ProjectFilter | 'all'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const project = projectId ? projects.find((item) => item.id === projectId) : undefined

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    return projects.filter((item) => {
      const matchesFilter = activeFilter === 'all' || item.filters.includes(activeFilter)
      const matchesSearch = !query
        || [item.name, item.category, item.description, ...item.technologies]
          .join(' ')
          .toLowerCase()
          .includes(query)
      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchTerm])

  if (projectId) {
    return project ? <ProjectDetail project={project} /> : <ProjectNotFound />
  }

  return (
    <div className="page-stack project-vault-page">
      <SectionHeading
        eyebrow="ENGINEERING ARCHIVE / PROJECT VAULT"
        title="Systems built. Problems explored."
        description="A collection of engineering experiments, intelligent systems and practical software projects."
        action={<StatusBadge tone="info">ARCHIVE / {projects.length.toString().padStart(2, '0')} RECORDS</StatusBadge>}
      />
      <div className="vault-summary">
        <span><FolderKanban size={15} />AI Systems</span>
        <span><FolderKanban size={15} />Infrastructure Engineering</span>
        <span><FolderKanban size={15} />Intelligent Automation</span>
      </div>
      <ProjectFilters
        activeFilter={activeFilter}
        searchTerm={searchTerm}
        onFilterChange={setActiveFilter}
        onSearchChange={setSearchTerm}
      />
      <ProjectGrid projects={filteredProjects} />
      <div className="vault-note"><FolderKanban size={15} /><span>Archive records reflect documented work and exploration. No deployment or performance claims are implied.</span></div>
    </div>
  )
}

function ProjectNotFound() {
  return (
    <div className="project-detail-not-found">
      <StatusBadge tone="warning">RECORD NOT FOUND</StatusBadge>
      <h1>This project record is not in the archive.</h1>
      <p>The requested project has not been documented here.</p>
    </div>
  )
}
