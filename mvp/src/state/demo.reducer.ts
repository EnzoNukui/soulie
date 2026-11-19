import { initialDemoState } from './demo.initial-state'
import type { DemoAction, DemoState } from './demo.types'

export function demoReducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case 'SAVE_INTERESTS':
      return {
        ...state,
        interests: action.interests,
        personalizationSkipped: false,
        soulieMood: 'happy',
      }
    case 'SKIP_PERSONALIZATION':
      return { ...state, personalizationSkipped: true, interests: [], soulieMood: 'curious' }
    case 'JOIN_COMMUNITY': {
      const alreadyJoined = state.joinedCommunityIds.includes(action.communityId)
      return {
        ...state,
        joinedCommunityIds: alreadyJoined
          ? state.joinedCommunityIds
          : [...state.joinedCommunityIds, action.communityId],
        completedTrailStepIds: state.completedTrailStepIds.includes('join-community')
          ? state.completedTrailStepIds
          : [...state.completedTrailStepIds, 'join-community'],
        points: state.completedTrailStepIds.includes('join-community') ? state.points : state.points + 10,
        soulieMood: 'celebrating',
      }
    }
    case 'DISMISS_COMMUNITY':
      return {
        ...state,
        dismissedCommunityIds: state.dismissedCommunityIds.includes(action.communityId)
          ? state.dismissedCommunityIds
          : [...state.dismissedCommunityIds, action.communityId],
        soulieMood: 'thinking',
      }
    case 'RESTORE_COMMUNITY_SUGGESTIONS':
      return { ...state, dismissedCommunityIds: [], soulieMood: 'curious' }
    case 'COMPLETE_TRAIL_STEP':
      if (state.completedTrailStepIds.includes(action.stepId)) return state
      return {
        ...state,
        completedTrailStepIds: [...state.completedTrailStepIds, action.stepId],
        points: state.points + action.points,
        soulieMood: 'celebrating',
      }
    case 'START_TRAIL':
      return state.startedTrailIds.includes(action.trailId)
        ? state
        : { ...state, startedTrailIds: [...state.startedTrailIds, action.trailId], soulieMood: 'happy' }
    case 'START_MISSION':
      return state.startedMissionIds.includes(action.missionId)
        ? state
        : { ...state, startedMissionIds: [...state.startedMissionIds, action.missionId], soulieMood: 'thinking' }
    case 'COMPLETE_MISSION':
      if (state.completedMissionIds.includes(action.missionId)) return state
      return {
        ...state,
        startedMissionIds: state.startedMissionIds.includes(action.missionId)
          ? state.startedMissionIds
          : [...state.startedMissionIds, action.missionId],
        completedMissionIds: [...state.completedMissionIds, action.missionId],
        lastCompletedMissionId: action.missionId,
        points: state.points + action.points,
        streakDays: Math.max(state.streakDays, 4),
        soulieMood: 'celebrating',
      }
    case 'COMPLETE_COMMUNITY_CONTRIBUTION':
      if (state.communityContributionIds.includes(action.contributionId)) return state
      return {
        ...state,
        communityContributionIds: [...state.communityContributionIds, action.contributionId],
        points: state.points + action.points,
        soulieMood: 'celebrating',
      }
    case 'SET_SOULIE_MOOD':
      return { ...state, soulieMood: action.mood }
    case 'UPDATE_NOTIFICATION_PREFERENCES':
      return { ...state, notificationPreferences: action.preferences, soulieMood: 'happy' }
    case 'RESET_DEMO':
      return initialDemoState
    default:
      return state
  }
}
