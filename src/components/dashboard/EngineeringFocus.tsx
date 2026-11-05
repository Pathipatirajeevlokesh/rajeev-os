import { Bot, CloudCog, Code2, Workflow } from 'lucide-react'

const focusAreas = [
  { title: 'Cloud Infrastructure', description: 'Designing clear service boundaries and operational interfaces.', technologies: ['Cloud systems', 'Observability'], icon: CloudCog },
  { title: 'Agentic AI', description: 'Exploring agents that can reason, retrieve context, and take useful action.', technologies: ['LLMs', 'RAG', 'Embeddings'], icon: Bot },
  { title: 'Backend Engineering', description: 'Building dependable application seams, APIs, and data flows.', technologies: ['FastAPI', 'Python', 'APIs'], icon: Code2 },
  { title: 'Intelligent Automation', description: 'Turning repeatable workflows into thoughtful, human-aware systems.', technologies: ['Workflow design', 'Voice AI'], icon: Workflow },
]

export function EngineeringFocus() {
  return (
    <section className="dashboard-section" aria-labelledby="engineering-focus-title">
      <div className="dashboard-section__heading">
        <p className="panel__label">ENGINEERING FOCUS</p>
        <h2 id="engineering-focus-title" className="dashboard-section__title">Where the signal is strongest</h2>
      </div>
      <div className="command-focus-list">
        {focusAreas.map(({ title, description, technologies, icon: Icon }, index) => (
          <article className="command-focus-item" key={title}>
            <span className="command-focus-item__number">0{index + 1}</span>
            <Icon className="focus-card__icon" size={20} strokeWidth={1.6} />
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="tag-list">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
