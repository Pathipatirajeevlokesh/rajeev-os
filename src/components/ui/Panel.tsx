import type { ReactNode } from 'react'

type PanelProps = {
  children: ReactNode
  className?: string
  title?: string
  label?: string
  action?: ReactNode
}

export function Panel({ children, className = '', title, label, action }: PanelProps) {
  return (
    <section className={`panel ${className}`}>
      {(title || label || action) && (
        <header className="panel__header">
          <div>
            {label && <p className="panel__label">{label}</p>}
            {title && <h2 className="panel__title">{title}</h2>}
          </div>
          {action && <div>{action}</div>}
        </header>
      )}
      <div className="panel__body">{children}</div>
    </section>
  )
}
