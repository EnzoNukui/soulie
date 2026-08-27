import { Navigate, Route, Routes } from 'react-router'
import { CommunityScenePage } from '../pages/CommunityScenePage/CommunityScenePage'
import { FeedPage } from '../pages/experience/FeedPage'
import { CommunityHubPage } from '../pages/experience/CommunityHubPage'
import { CommunitySelectorPage } from '../pages/experience/CommunitySelectorPage'
import { MissionCenterPage } from '../pages/experience/MissionCenterPage'
import { MissionResultPage } from '../pages/experience/MissionResultPage'
import { MissionTaskPage } from '../pages/experience/MissionTaskPage'
import { MissionTrailPage } from '../pages/experience/MissionTrailPage'
import { NotificationSettingsPage } from '../pages/experience/NotificationSettingsPage'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'
import { OnboardingPage } from '../pages/OnboardingPage/OnboardingPage'
import { PresentationPage } from '../pages/PresentationPage/PresentationPage'
import { WelcomePage } from '../pages/WelcomePage/WelcomePage'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PresentationPage />} />
      <Route path="/jornada/encontro" element={<WelcomePage />} />
      <Route path="/jornada/onboarding" element={<OnboardingPage />} />
      <Route path="/jornada/comunidades" element={<CommunityScenePage />} />
      <Route path="/jornada/feed" element={<FeedPage />} />
      <Route path="/jornada/notificacoes" element={<NotificationSettingsPage />} />
      <Route path="/jornada/comunidade" element={<CommunitySelectorPage />} />
      <Route path="/jornada/comunidade/:communityId" element={<CommunityHubPage />} />
      <Route path="/jornada/missoes" element={<MissionCenterPage />} />
      <Route path="/jornada/missoes/:trailId" element={<MissionTrailPage />} />
      <Route path="/jornada/missoes/:trailId/:missionId" element={<MissionTaskPage />} />
      <Route path="/jornada/resultado/:trailId/:missionId" element={<MissionResultPage />} />
      <Route path="/jornada/missao" element={<Navigate to="/jornada/missoes" replace />} />
      <Route path="/jornada/inicio" element={<Navigate to="/jornada/comunidades" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
