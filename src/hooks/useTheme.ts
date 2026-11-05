import { useEffect, useState } from 'react'

export type ThemePreference = 'dark' | 'light' | 'system'

const storageKey = 'rajeev-os-theme'

function getStoredPreference(): ThemePreference {
  const stored = window.localStorage.getItem(storageKey)
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system'
}

function resolveTheme(preference: ThemePreference): 'dark' | 'light' {
  if (preference !== 'system') return preference
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function useTheme() {
  const [preference, setPreference] = useState<ThemePreference>(() => getStoredPreference())

  useEffect(() => {
    const root = document.documentElement
    const applyTheme = () => root.dataset.theme = resolveTheme(preference)
    applyTheme()
    window.localStorage.setItem(storageKey, preference)

    if (preference !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: light)')
    media.addEventListener('change', applyTheme)
    return () => media.removeEventListener('change', applyTheme)
  }, [preference])

  return { preference, setPreference }
}
