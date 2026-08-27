import type { DemoState } from '../state/demo.types'

const storageKey = 'soulie-demo-state-v1'

export function loadDemoState(): DemoState | undefined {
  try {
    const value = sessionStorage.getItem(storageKey)
    return value ? (JSON.parse(value) as DemoState) : undefined
  } catch {
    return undefined
  }
}

export function saveDemoState(state: DemoState) {
  try {
    sessionStorage.setItem(storageKey, JSON.stringify(state))
  } catch {
    // A demonstração continua em memória quando o armazenamento não está disponível.
  }
}

export function clearDemoState() {
  try {
    sessionStorage.removeItem(storageKey)
  } catch {
    // Sem ação: o estado em memória ainda será reiniciado.
  }
}

