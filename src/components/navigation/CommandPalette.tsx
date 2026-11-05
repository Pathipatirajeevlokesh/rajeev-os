import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Command, CornerDownLeft, Search, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { navigationItems } from '@/data/navigation'
import { projects } from '@/data/projects'
import type { ThemePreference } from '@/hooks/useTheme'

type CommandPaletteProps = {
  open: boolean
  onClose: () => void
  onThemeChange: (preference: ThemePreference) => void
}

const themeCommands = [
  { label: 'Use dark theme', value: 'dark' as const },
  { label: 'Use light theme', value: 'light' as const },
  { label: 'Use system theme', value: 'system' as const },
]

export function CommandPalette({ open, onClose, onThemeChange }: CommandPaletteProps) {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  const commands = useMemo(() => [
    ...navigationItems.map((item) => ({ label: `Go to ${item.label}`, detail: item.path, path: item.path })),
    ...projects.map((project) => ({ label: `Open ${project.name}`, detail: 'Project Vault', path: `/projects/${project.id}` })),
    ...themeCommands.map((theme) => ({ label: theme.label, detail: 'Appearance', theme: theme.value })),
  ].filter((command) => `${command.label} ${command.detail}`.toLowerCase().includes(query.toLowerCase())), [query])

  const closePalette = useCallback(() => {
    setQuery('')
    setActiveIndex(0)
    onClose()
  }, [onClose])

  useEffect(() => {
    if (!open) return
    window.setTimeout(() => inputRef.current?.focus(), 0)
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePalette()
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setActiveIndex((index) => Math.min(index + 1, Math.max(commands.length - 1, 0)))
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault()
        setActiveIndex((index) => Math.max(index - 1, 0))
      }
      if (event.key === 'Enter' && commands[activeIndex]) {
        const command = commands[activeIndex]
        if ('theme' in command && command.theme) onThemeChange(command.theme)
        if ('path' in command && command.path) navigate(command.path)
        closePalette()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, closePalette, commands, navigate, onThemeChange, open])

  if (!open) return null

  return (
    <div className="command-palette-backdrop" role="presentation" onMouseDown={closePalette}>
      <section className="command-palette" role="dialog" aria-modal="true" aria-label="Command palette" onMouseDown={(event) => event.stopPropagation()}>
        <div className="command-palette__search">
          <Search size={17} aria-hidden="true" />
          <input ref={inputRef} value={query} onChange={(event) => { setQuery(event.target.value); setActiveIndex(0) }} placeholder="Search pages, projects, or actions" aria-label="Search commands" />
          <kbd>ESC</kbd>
          <button type="button" onClick={closePalette} aria-label="Close command palette"><X size={16} /></button>
        </div>
        <div className="command-palette__list">
          {commands.length ? commands.map((command, index) => (
            <button type="button" key={`${command.label}-${command.detail}`} className={index === activeIndex ? 'command-palette__item is-active' : 'command-palette__item'} onMouseEnter={() => setActiveIndex(index)} onClick={() => {
              if ('theme' in command && command.theme) onThemeChange(command.theme)
              if ('path' in command && command.path) navigate(command.path)
              closePalette()
            }}>
              <span><Command size={14} aria-hidden="true" /><strong>{command.label}</strong></span>
              <small>{command.detail}</small>
              {index === activeIndex && <CornerDownLeft size={14} aria-hidden="true" />}
            </button>
          )) : <p className="command-palette__empty">No commands match that search.</p>}
        </div>
        <footer><span><kbd>↑↓</kbd> Navigate</span><span><kbd>↵</kbd> Select</span><span><kbd>⌘ K</kbd> Open anytime</span></footer>
      </section>
    </div>
  )
}
