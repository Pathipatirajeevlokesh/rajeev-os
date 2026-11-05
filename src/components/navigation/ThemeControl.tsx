import { Monitor, Moon, Sun } from 'lucide-react'
import type { ThemePreference } from '@/hooks/useTheme'

type ThemeControlProps = {
  preference: ThemePreference
  onChange: (preference: ThemePreference) => void
}

const options: Array<{ value: ThemePreference; label: string; icon: typeof Sun }> = [
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'system', label: 'System', icon: Monitor },
]

export function ThemeControl({ preference, onChange }: ThemeControlProps) {
  return (
    <div className="theme-control" role="group" aria-label="Color theme">
      {options.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          className={preference === value ? 'theme-control__item is-active' : 'theme-control__item'}
          onClick={() => onChange(value)}
          aria-pressed={preference === value}
          title={`${label} theme`}
        >
          <Icon size={14} aria-hidden="true" />
          <span className="sr-only">{label}</span>
        </button>
      ))}
    </div>
  )
}
