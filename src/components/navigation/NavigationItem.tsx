import { NavLink } from 'react-router-dom'
import type { NavigationItem as NavigationItemData } from '@/data/navigation'

type NavigationItemProps = {
  item: NavigationItemData
  collapsed?: boolean
  onNavigate?: () => void
}

export function NavigationItem({
  item,
  collapsed = false,
  onNavigate,
}: NavigationItemProps) {
  const Icon = item.icon

  return (
    <NavLink
      to={item.path}
      end={item.path === '/'}
      onClick={onNavigate}
      className={({ isActive }) =>
        `navigation-item ${isActive ? 'navigation-item--active' : ''} ${
          item.accent ? 'navigation-item--accent' : ''
        }`
      }
      title={collapsed ? item.label : undefined}
    >
      <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
      {!collapsed && <span>{item.label}</span>}
      {item.accent && !collapsed && <span className="navigation-item__marker">↗</span>}
    </NavLink>
  )
}
