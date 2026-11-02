import { ArrowLeft, ExternalLink, GitBranch, Layers3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ProjectRecord } from '@/data/projects'
import { Panel } from '@/components/ui/Panel'
import { StatusBadge } from '@/components/ui/StatusBadge'

type ProjectDetailProps = {
  project: ProjectRecord
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const Icon = project.icon

  return (
    <div className="project-detail">
      <Link className="back-link" to="/projects"><ArrowLeft size={15} /> Back to Project Vault</Link>
      <div className="project-detail__hero">
        <div>
          <p className="section-heading__eyebrow">PROJECT RECORD / {project.category}</p>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
        <div className="project-detail__identity">
          <span className="project-detail__icon"><Icon size={25} /></span>
          <StatusBadge tone={project.status === 'Finalist experience' ? 'success' : 'neutral'}>{project.status}</StatusBadge>
        </div>
      </div>
      <div className="project-detail__grid">
        <Panel label="OVERVIEW" title="What this system explores">
          <p className="project-detail__copy">{project.overview}</p>
        </Panel>
        {project.problem && (
          <Panel label="PROBLEM SPACE" title="The question behind it">
            <p className="project-detail__copy">{project.problem}</p>
          </Panel>
        )}
        {project.approach && (
          <Panel label="TECHNICAL APPROACH" title="How it is framed">
            <p className="project-detail__copy">{project.approach}</p>
          </Panel>
        )}
        {project.implementation && (
          <Panel label="IMPLEMENTATION NOTES" title="Current documentation">
            <p className="project-detail__copy">{project.implementation}</p>
          </Panel>
        )}
      </div>
      <Panel label="SYSTEM SURFACE" title="Technology stack">
        <div className="project-detail__stack">
          {project.technologies.map((technology) => <span key={technology}><Layers3 size={14} />{technology}</span>)}
        </div>
      </Panel>
      {project.achievement && (
        <div className="project-detail__achievement"><span>ACHIEVEMENT</span><strong>{project.achievement}</strong></div>
      )}
      <div className="project-detail__actions">
        {project.repositoryUrl ? (
          <a className="button button--primary" href={project.repositoryUrl} target="_blank" rel="noreferrer">
            <GitBranch size={15} /> View repository <ExternalLink size={13} />
          </a>
        ) : (
          <span className="project-detail__unavailable"><GitBranch size={14} /> Repository link not yet verified</span>
        )}
      </div>
    </div>
  )
}
