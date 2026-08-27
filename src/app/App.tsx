import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { AppRouter } from './router'

export function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return <AppRouter />
}
