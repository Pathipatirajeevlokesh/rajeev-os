import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/navigation/Sidebar'
import { TopBar } from '@/components/navigation/TopBar'

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobileNavigation = () => setMobileOpen(false)

  return (
    <div className={`app-shell ${collapsed ? 'app-shell--collapsed' : ''}`}>
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onToggle={() => setCollapsed((value) => !value)}
        onNavigate={closeMobileNavigation}
      />
      {mobileOpen && (
        <button
          type="button"
          className="sidebar-scrim"
          aria-label="Close navigation"
          onClick={closeMobileNavigation}
        />
      )}
      <div className="app-shell__main">
        <TopBar
          mobileOpen={mobileOpen}
          onMobileToggle={() => setMobileOpen((value) => !value)}
        />
        <main className="page-container">
          <Outlet />
        </main>
        <footer className="app-footer">
          <span>RAJEEV.OS / PERSONAL ENGINEERING SYSTEM</span>
          <span>LOCAL SESSION · NO EXTERNAL TELEMETRY</span>
        </footer>
      </div>
    </div>
  )
}
