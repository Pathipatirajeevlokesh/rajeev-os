import type { LucideIcon } from 'lucide-react'

type MetricCardProps = {
  label: string
  value: string
  detail: string
  icon: LucideIcon
  tone?: 'blue' | 'cyan' | 'neutral'
}

export function MetricCard({
  label,
  value,
  detail,
  icon: Icon,
  tone = 'blue',
}: MetricCardProps) {
  return (
    <article className={`metric-card metric-card--${tone}`}>
      <div className="metric-card__topline">
        <span className="metric-card__label">{label}</span>
        <Icon size={16} strokeWidth={1.7} aria-hidden="true" />
      </div>
      <strong className="metric-card__value">{value}</strong>
      <span className="metric-card__detail">{detail}</span>
    </article>
  )
}
