import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  action?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
        <h1 className="section-heading__title">{title}</h1>
        {description && <p className="section-heading__description">{description}</p>}
      </div>
      {action && <div className="section-heading__action">{action}</div>}
    </div>
  )
}
