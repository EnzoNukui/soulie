export type SoulieMood = 'welcome' | 'curious' | 'thinking' | 'happy' | 'celebrating'

export type NotificationPreferences = {
  enabled: boolean
  communities: boolean
  missions: boolean
  streak: boolean
  frequency: 'daily' | 'summary'
  preferredTime: string
}

export type DemoState = {
  interests: string[]
  personalizationSkipped: boolean
  joinedCommunityIds: string[]
  dismissedCommunityIds: string[]
  completedTrailStepIds: string[]
  startedTrailIds: string[]
  startedMissionIds: string[]
  completedMissionIds: string[]
  communityContributionIds: string[]
  lastCompletedMissionId: string | null
  streakDays: number
  points: number
  soulieMood: SoulieMood
  notificationPreferences: NotificationPreferences
}

export type DemoAction =
  | { type: 'SAVE_INTERESTS'; interests: string[] }
  | { type: 'SKIP_PERSONALIZATION' }
  | { type: 'JOIN_COMMUNITY'; communityId: string }
  | { type: 'DISMISS_COMMUNITY'; communityId: string }
  | { type: 'RESTORE_COMMUNITY_SUGGESTIONS' }
  | { type: 'COMPLETE_TRAIL_STEP'; stepId: string; points: number }
  | { type: 'START_TRAIL'; trailId: string }
  | { type: 'START_MISSION'; missionId: string }
  | { type: 'COMPLETE_MISSION'; missionId: string; points: number }
  | { type: 'COMPLETE_COMMUNITY_CONTRIBUTION'; contributionId: string; points: number }
  | { type: 'SET_SOULIE_MOOD'; mood: SoulieMood }
  | { type: 'UPDATE_NOTIFICATION_PREFERENCES'; preferences: NotificationPreferences }
  | { type: 'RESET_DEMO' }
