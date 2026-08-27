import { createContext, type Dispatch } from 'react'
import type { DemoAction, DemoState } from '../../state/demo.types'

export type DemoContextValue = {
  state: DemoState
  dispatch: Dispatch<DemoAction>
  reset: () => void
}

export const DemoContext = createContext<DemoContextValue | null>(null)

