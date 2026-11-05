import { Command, Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { navigationItems } from '@/data/navigation'
import { useLocalTime } from '@/hooks/useLocalTime'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { ThemeControl } from './ThemeControl'
import type { ThemePreference } from '@/hooks/useTheme'

type TopBarProps = {
  mobileOpen: boolean
  onMobileToggle: () => void
  preference: ThemePreference
  onThemeChange: (preference: ThemePreference) => void
  onOpenPalette: () => void
}

export function TopBar({ mobileOpen, onMobileToggle, preference, onThemeChange, onOpenPalette }: TopBarProps) {
  const location = useLocation()
  const localTime = useLocalTime()
  const currentSection =
    navigationItems.find((item) =>
      item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path),
    )?.label ?? 'Command Centre'

  return (
    <header className="topbar">
      <button
        type="button"
        className="topbar__menu"
        onClick={onMobileToggle}
        aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <div className="topbar__section">
        <span className="topbar__path">RAJEEV.OS /</span>
        <span>{currentSection}</span>
      </div>
      <div className="topbar__meta">
        <StatusBadge tone="success" pulse>System nominal</StatusBadge>
        <button type="button" className="topbar__command" onClick={onOpenPalette} aria-label="Open command palette">
          <Command size={14} /> <kbd>⌘K</kbd>
        </button>
        <ThemeControl preference={preference} onChange={onThemeChange} />
        <span className="topbar__time">
          <span className="topbar__time-label">LOCAL</span>
          {localTime}
        </span>
      </div>
    </header>
  )
}
