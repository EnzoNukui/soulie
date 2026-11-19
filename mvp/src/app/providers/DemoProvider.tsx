import { useEffect, useReducer, type ReactNode } from 'react'
import { clearDemoState, loadDemoState, saveDemoState } from '../../services/session-storage'
import { initialDemoState } from '../../state/demo.initial-state'
import { demoReducer } from '../../state/demo.reducer'
import { DemoContext } from './DemoContext'

export function DemoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(demoReducer, initialDemoState, () => ({
    ...initialDemoState,
    ...loadDemoState(),
  }))

  useEffect(() => {
    saveDemoState(state)
  }, [state])

  function reset() {
    clearDemoState()
    dispatch({ type: 'RESET_DEMO' })
  }

  return <DemoContext.Provider value={{ state, dispatch, reset }}>{children}</DemoContext.Provider>
}
