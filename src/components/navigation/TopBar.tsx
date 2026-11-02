import { Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { navigationItems } from '@/data/navigation'
import { useLocalTime } from '@/hooks/useLocalTime'
import { StatusBadge } from '@/components/ui/StatusBadge'

type TopBarProps = {
  mobileOpen: boolean
  onMobileToggle: () => void
}

export function TopBar({ mobileOpen, onMobileToggle }: TopBarProps) {
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
        <span className="topbar__time">
          <span className="topbar__time-label">LOCAL</span>
          {localTime}
        </span>
      </div>
    </header>
  )
}
