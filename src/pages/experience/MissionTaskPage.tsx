import { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router'
import { ExperienceShell } from '../../components/experience/ExperienceShell'
import { getMission, getTrail } from '../../data/missions'
import { useDemo } from '../../hooks/useDemo'
import styles from './Journey.module.css'

export function MissionTaskPage() {
  const { trailId, missionId } = useParams()
  const trail = getTrail(trailId)
  const mission = getMission(missionId)
  const { state, dispatch } = useDemo()
  const navigate = useNavigate()
  const [confirmed, setConfirmed] = useState(false)

  if (!trail || !mission || !trail.missions.some((item) => item.id === mission.id)) return <Navigate to="/jornada/missoes" replace />
  const index = trail.missions.findIndex((item) => item.id === mission.id)
  const unlocked = state.startedTrailIds.includes(trail.id) && (index === 0 || state.completedMissionIds.includes(trail.missions[index - 1].id))
  if (!unlocked && !state.completedMissionIds.includes(mission.id)) return <Navigate to={`/jornada/missoes/${trail.id}`} replace />

  const started = state.startedMissionIds.includes(mission.id)
  const done = state.completedMissionIds.includes(mission.id)

  function complete() {
    dispatch({ type: 'COMPLETE_MISSION', missionId: mission!.id, points: mission!.points })
    navigate(`/jornada/resultado/${trail!.id}/${mission!.id}`)
  }

  return <ExperienceShell eyebrow="Missão em ação" title="Agora a proposta acontece de verdade." description="O protótipo não apenas explica a missão: ele mostra início, orientação, confirmação e recompensa dentro do mesmo fluxo." step={6} aside={<p className={styles.muted}>A confirmação é simulada e substitui integrações reais de evidência nesta etapa.</p>}>
    <div className={styles.screen}>
      <Link className={styles.back} to={`/jornada/missoes/${trail.id}`}>← Voltar para a trilha</Link>
      <section className={styles.hero}><span>{trail.icon} {mission.duration} · +{mission.points} PTS</span><h2>{mission.title}</h2><p>{mission.description}</p></section>
      <h3 className={styles.sectionTitle}>Como fazer</h3>
      <ol className={styles.checklist}>{mission.steps.map((step) => <li key={step}>{step}</li>)}</ol>
      {!started && !done && <button className="button" onClick={() => dispatch({ type: 'START_MISSION', missionId: mission.id })}>Começar missão</button>}
      {started && !done && <><label className={styles.confirm}><input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} /><span><strong>Concluí esta ação</strong><br />Confirmação demonstrativa para liberar a recompensa.</span></label><button className="button" disabled={!confirmed} onClick={complete}>Registrar conclusão · +{mission.points} pts</button></>}
      {done && <button className="button" onClick={() => navigate(`/jornada/resultado/${trail.id}/${mission.id}`)}>Ver meu resultado</button>}
    </div>
  </ExperienceShell>
}
