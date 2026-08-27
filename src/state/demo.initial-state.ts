import type { DemoState } from './demo.types'

export const initialDemoState: DemoState = {
  interests: [],
  personalizationSkipped: false,
  joinedCommunityIds: [],
  dismissedCommunityIds: [],
  completedTrailStepIds: [],
  startedTrailIds: [],
  startedMissionIds: [],
  completedMissionIds: [],
  communityContributionIds: [],
  lastCompletedMissionId: null,
  streakDays: 3,
  points: 220,
  soulieMood: 'welcome',
  notificationPreferences: {
    enabled: false,
    communities: true,
    missions: true,
    streak: true,
    frequency: 'daily',
    preferredTime: '18:30',
  },
}
