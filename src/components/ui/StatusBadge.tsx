import type { ReactNode } from 'react'

type StatusTone = 'success' | 'info' | 'warning' | 'neutral'

type StatusBadgeProps = {
  children: ReactNode
  tone?: StatusTone
  pulse?: boolean
}

export function StatusBadge({
  children,
  tone = 'neutral',
  pulse = false,
}: StatusBadgeProps) {
  return (
    <span className={`status-badge status-badge--${tone}`}>
      {pulse && <span className="status-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  )
}
