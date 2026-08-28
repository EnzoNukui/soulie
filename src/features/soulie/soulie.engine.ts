import { communities, getRecommendedCommunities } from '../../data/communities'
import { communityChallenge } from '../../data/community-experience'
import { missionTrails } from '../../data/missions'
import type { DemoState } from '../../state/demo.types'
import {
  communityCompletedInteraction,
  communityFallbackInteraction,
  communityPendingInteraction,
  feedAfterCompletedMissionInteraction,
  feedAllMissionsInteraction,
  feedDefaultInteraction,
  feedStartedMissionInteraction,
  feedWithoutCommunityInteraction,
  selectorAllJoinedInteraction,
  selectorEmptyInteraction,
  selectorWithJoinedInteraction,
} from './soulie.interactions'
import type { SoulieAssistantContext, SoulieInteraction } from './soulie.types'

const missionEntries = missionTrails.flatMap((trail) => trail.missions.map((mission) => ({ mission, trail })))

function getValidJoinedCommunities(state: DemoState) {
  return communities.filter((community) => state.joinedCommunityIds.includes(community.id))
}

function hasPersonalization(state: DemoState) {
  return !state.personalizationSkipped && state.interests.length > 0
}

function getAvailableCommunity(state: DemoState) {
  return getRecommendedCommunities(state.interests).find((community) => (
    !state.joinedCommunityIds.includes(community.id)
    && !state.dismissedCommunityIds.includes(community.id)
  ))
}

function getIncompleteTrail(state: DemoState, preferStarted = false) {
  const hasIncompleteMission = (trailId: string) => {
    const trail = missionTrails.find((item) => item.id === trailId)
    return trail?.missions.some((mission) => !state.completedMissionIds.includes(mission.id)) ?? false
  }

  if (preferStarted) {
    const startedTrail = missionTrails.find((trail) => (
      state.startedTrailIds.includes(trail.id) && hasIncompleteMission(trail.id)
    ))
    if (startedTrail) return startedTrail
  }

  return missionTrails.find((trail) => hasIncompleteMission(trail.id))
}

function getFeedInteraction(state: DemoState): SoulieInteraction {
  const joinedCommunities = getValidJoinedCommunities(state)
  const allMissionsCompleted = missionEntries.length > 0
    && missionEntries.every(({ mission }) => state.completedMissionIds.includes(mission.id))

  if (allMissionsCompleted) {
    const community = joinedCommunities[0]
    return feedAllMissionsInteraction({
      points: state.points,
      streakDays: state.streakDays,
      communityName: community?.name,
      communityPath: community ? `/jornada/comunidade/${community.id}` : undefined,
    })
  }

  const startedEntry = missionEntries.find(({ mission }) => (
    state.startedMissionIds.includes(mission.id) && !state.completedMissionIds.includes(mission.id)
  ))
  if (startedEntry) {
    return feedStartedMissionInteraction({
      missionTitle: startedEntry.mission.title,
      missionPath: `/jornada/missoes/${startedEntry.trail.id}/${startedEntry.mission.id}`,
      points: state.points,
    })
  }

  if (joinedCommunities.length === 0) {
    const recommendation = getAvailableCommunity(state)
    return feedWithoutCommunityInteraction({
      personalized: hasPersonalization(state),
      recommendedCommunityName: recommendation?.name,
    })
  }

  const lastCompletedEntry = missionEntries.find(({ mission }) => (
    mission.id === state.lastCompletedMissionId && state.completedMissionIds.includes(mission.id)
  ))
  if (lastCompletedEntry) {
    const nextTrail = getIncompleteTrail(state)
    if (nextTrail) {
      return feedAfterCompletedMissionInteraction({
        completedMissionTitle: lastCompletedEntry.mission.title,
        nextTrailTitle: nextTrail.title,
        nextTrailPath: `/jornada/missoes/${nextTrail.id}`,
      })
    }
  }

  const trail = getIncompleteTrail(state, true) ?? missionTrails[0]
  return feedDefaultInteraction({
    trailTitle: trail.title,
    trailPath: `/jornada/missoes/${trail.id}`,
    alreadyStarted: state.startedTrailIds.includes(trail.id),
  })
}

function getCommunitySelectorInteraction(state: DemoState): SoulieInteraction {
  const joinedCommunities = getValidJoinedCommunities(state)
  const joinedAll = joinedCommunities.length === communities.length

  if (joinedAll) {
    const community = joinedCommunities[0]
    return selectorAllJoinedInteraction({
      communityName: community.name,
      communityPath: `/jornada/comunidade/${community.id}`,
    })
  }

  const joinedCommunity = joinedCommunities[0]
  if (joinedCommunity) {
    return selectorWithJoinedInteraction({
      communityName: joinedCommunity.name,
      communityPath: `/jornada/comunidade/${joinedCommunity.id}`,
    })
  }

  const recommendation = getAvailableCommunity(state)
  return selectorEmptyInteraction({
    personalized: hasPersonalization(state),
    recommendedCommunityName: recommendation?.name,
  })
}

function getCommunityInteraction(communityId: string, state: DemoState): SoulieInteraction {
  const community = communities.find((item) => (
    item.id === communityId && state.joinedCommunityIds.includes(item.id)
  ))
  if (!community) return communityFallbackInteraction()

  const contributionId = `${community.id}:${communityChallenge.id}`
  const contributed = state.communityContributionIds.includes(contributionId)
  if (contributed) {
    return communityCompletedInteraction({
      communityName: community.name,
      progress: communityChallenge.baseProgress + 1,
      points: communityChallenge.points,
    })
  }

  return communityPendingInteraction({
    communityName: community.name,
    activity: community.activity,
    contributionTitle: communityChallenge.contributionTitle,
    points: communityChallenge.points,
  })
}

export function getSoulieInteraction(context: SoulieAssistantContext, state: DemoState): SoulieInteraction {
  switch (context.kind) {
    case 'feed':
      return getFeedInteraction(state)
    case 'community-selector':
      return getCommunitySelectorInteraction(state)
    case 'community':
      return getCommunityInteraction(context.communityId, state)
  }
}
