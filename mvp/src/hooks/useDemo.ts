import { useContext } from 'react'
import { DemoContext } from '../app/providers/DemoContext'

export function useDemo() {
  const context = useContext(DemoContext)
  if (!context) throw new Error('useDemo precisa ser usado dentro de DemoProvider')
  return context
}
