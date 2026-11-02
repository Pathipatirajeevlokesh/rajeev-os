import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredProjects } from '@/data/projects'
import { Panel } from '@/components/ui/Panel'

export function FeaturedProjects() {
  return (
    <section className="dashboard-section" aria-labelledby="featured-projects-title">
      <div className="dashboard-section__heading dashboard-section__heading--with-action">
        <div>
          <p className="panel__label">SELECTED SYSTEMS</p>
          <h2 id="featured-projects-title" className="dashboard-section__title">Featured projects</h2>
        </div>
        <Link className="text-link" to="/projects">Open project vault <ArrowUpRight size={14} /></Link>
      </div>
      <div className="project-grid">
        {featuredProjects.map((project, index) => {
          const Icon = project.icon
          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.07 }}
            >
              <Panel className="project-card">
                <div className="project-card__topline">
                  <span className="project-card__icon"><Icon size={19} /></span>
                  <span className="project-card__category">{project.category}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-card__footer">
                  <div className="tag-list">
                    {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                  <Link className="project-card__link" to="/projects" aria-label={`View details for ${project.name}`}>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </Panel>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
