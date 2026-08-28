import type { SoulieMood } from '../../state/demo.types'

export type SoulieAssistantContext =
  | { kind: 'feed' }
  | { kind: 'community-selector' }
  | { kind: 'community'; communityId: string }

export type SoulieNavigateAction = {
  kind: 'navigate'
  label: string
  to: string
}

export type SouliePageEventAction = {
  kind: 'page-event'
  label: string
  event: 'show-community-contribution' | 'focus-community-challenge'
}

export type SouliePanelAction = {
  kind: 'panel'
  label: string
  command: 'reset' | 'close'
}

export type SoulieAction = SoulieNavigateAction | SouliePageEventAction | SouliePanelAction

export type SoulieIntent = {
  id: string
  label: string
  response: string
  mood: SoulieMood
  action?: SoulieAction
}

export type SoulieInitialIntents = readonly [SoulieIntent, SoulieIntent]

export type SoulieInteraction = {
  greeting: string
  summary: string
  mood: SoulieMood
  hasActionableRecommendation: boolean
  intents: SoulieInitialIntents
  reasonIntent: SoulieIntent
  resetAction: SouliePanelAction
  closeAction: SouliePanelAction
  disclaimer: string
}
