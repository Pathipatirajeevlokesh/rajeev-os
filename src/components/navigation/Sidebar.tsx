import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { navigationItems } from '@/data/navigation'
import { NavigationItem } from './NavigationItem'

type SidebarProps = {
  collapsed: boolean
  mobileOpen: boolean
  onToggle: () => void
  onNavigate: () => void
}

export function Sidebar({
  collapsed,
  mobileOpen,
  onToggle,
  onNavigate,
}: SidebarProps) {
  return (
    <aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''} ${
      mobileOpen ? 'sidebar--mobile-open' : ''
    }`}>
      <div className="sidebar__brand">
        <div className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        {!collapsed && (
          <div>
            <p className="brand-name">RAJEEV<span>.OS</span></p>
            <p className="brand-subtitle">ENGINEERING SYSTEM</p>
          </div>
        )}
      </div>

      <div className="sidebar__section">
        {!collapsed && <p className="sidebar__section-label">Workspace</p>}
        <nav className="sidebar__nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <NavigationItem
              key={item.path}
              item={item}
              collapsed={collapsed}
              onNavigate={onNavigate}
            />
          ))}
        </nav>
      </div>

      <div className="sidebar__footer">
        {!collapsed && (
          <div className="sidebar__build">
            <span className="status-badge__dot status-badge__dot--cyan" />
            <span>BUILD 01 / SHELL</span>
          </div>
        )}
        <button
          type="button"
          className="sidebar__collapse"
          onClick={onToggle}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          {!collapsed && <span>Collapse rail</span>}
        </button>
      </div>
    </aside>
  )
}
