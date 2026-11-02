import { useEffect, useState } from 'react'

function getLocalTime() {
  return new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date())
}

export function useLocalTime() {
  const [time, setTime] = useState(getLocalTime)

  useEffect(() => {
    const interval = window.setInterval(() => setTime(getLocalTime()), 1000)
    return () => window.clearInterval(interval)
  }, [])

  return time
}
