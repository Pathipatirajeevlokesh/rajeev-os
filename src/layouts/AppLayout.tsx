import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { CommandPalette } from '@/components/navigation/CommandPalette'
import { Sidebar } from '@/components/navigation/Sidebar'
import { TopBar } from '@/components/navigation/TopBar'
import { useTheme } from '@/hooks/useTheme'

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const location = useLocation()
  const theme = useTheme()

  const closeMobileNavigation = () => setMobileOpen(false)

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setPaletteOpen((open) => !open)
      }
    }
    window.addEventListener('keydown', handleShortcut)
    return () => window.removeEventListener('keydown', handleShortcut)
  }, [])

  useEffect(() => {
    const projectDetail = location.pathname.match(/^\/projects\/([^/]+)/)?.[1]
    const titles: Record<string, string> = {
      '/': 'Command Centre',
      '/about': 'About',
      '/skills': 'Skills',
      '/projects': 'Project Vault',
      '/cloud-twin': 'CLOUD TWIN',
      '/achievements': 'Achievements',
      '/contact': 'Contact',
    }
    const section = projectDetail ? 'Project Record' : titles[location.pathname] ?? 'Engineering System'
    document.title = `${section} | RAJEEV.OS`
  }, [location.pathname])

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
          preference={theme.preference}
          onThemeChange={theme.setPreference}
          onOpenPalette={() => setPaletteOpen(true)}
        />
        <main className="page-container">
          <Outlet />
        </main>
        <footer className="app-footer">
          <span>RAJEEV.OS / PERSONAL ENGINEERING SYSTEM</span>
          <span>LOCAL SESSION · NO EXTERNAL TELEMETRY</span>
        </footer>
      </div>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} onThemeChange={theme.setPreference} />
    </div>
  )
}
