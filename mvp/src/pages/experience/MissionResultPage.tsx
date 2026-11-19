import { useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router'
import soulieCelebrating from '../../assets/soulie/soulie.png'
import { ExperienceShell } from '../../components/experience/ExperienceShell'
import { getMission, getTrail, getTrailProgress } from '../../data/missions'
import { useDemo } from '../../hooks/useDemo'
import styles from './Journey.module.css'

export function MissionResultPage() {
  const { trailId, missionId } = useParams()
  const trail = getTrail(trailId)
  const mission = getMission(missionId)
  const { state, reset } = useDemo()
  const navigate = useNavigate()
  const [isRestarting, setIsRestarting] = useState(false)

  if (!trail || !mission || (!isRestarting && !state.completedMissionIds.includes(mission.id))) {
    return <Navigate to="/jornada/missoes" replace />
  }

  const missionIndex = trail.missions.findIndex((item) => item.id === mission.id)
  const nextMission = trail.missions[missionIndex + 1]
  const completedInTrail = getTrailProgress(trail, state.completedMissionIds)
  const trailPercentage = Math.round((completedInTrail / trail.missions.length) * 100)

  function restart() {
    setIsRestarting(true)
    reset()
    navigate('/jornada/encontro', { replace: true })
  }

  return <ExperienceShell eyebrow="Celebração com propósito" title="Concluir precisa dar vontade de continuar." description="A recompensa aparece primeiro, a evolução fica evidente e a Soulie transforma o fim de uma missão diária no começo do próximo hábito." step={6} aside={<p className={styles.muted}>A celebração usa o estado real da demonstração e mantém os dados de impacto identificados como simulados.</p>}>
    <div className={`${styles.screen} ${styles.completionScreen}`}>
      <section className={styles.completionHero} aria-labelledby="completion-title">
        <div className={styles.confetti} aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <span className={styles.dailyBadge}>✓ META DIÁRIA</span>
        <div className={styles.completionCharacter}><span aria-hidden="true" /><img src={soulieCelebrating} alt="Soulie comemorando a missão concluída" /></div>
        <h2 id="completion-title">Missão diária concluída!</h2>
        <p><strong>{mission.title}</strong> entrou para o seu progresso.</p>
        <div className={styles.pointsBurst}>+{mission.points}<small>pontos</small></div>
      </section>

      <section className={styles.dailyGoalCard}>
        <div className={styles.goalHeading}><span>✓</span><div><strong>Meta de hoje completa</strong><small>1 de 1 missão diária</small></div><b>100%</b></div>
        <div className={styles.goalProgress}><span /></div>
      </section>

      <div className={styles.completionStats}>
        <section><span>✦</span><strong>{state.points}</strong><small>saldo atual</small></section>
        <section><span>🔥</span><strong>{state.streakDays} dias</strong><small>ofensiva mantida</small></section>
      </div>

      <section className={styles.trailResult}>
        <div><span>{trail.icon}</span><div><small>PROGRESSO NA TRILHA</small><strong>{trail.title}</strong></div><b>{completedInTrail}/{trail.missions.length}</b></div>
        <div className={styles.progress}><span style={{ width: `${trailPercentage}%` }} /></div>
        <p>{trailPercentage}% concluído · dados demonstrativos</p>
      </section>

      <section className={styles.soulieCelebrationMessage}><span>✦</span><p><strong>A Soulie diz:</strong> Você cumpriu o combinado de hoje. Pequenas ações, repetidas, viram impacto de verdade.</p></section>

      <div className={styles.completionActions}>
        {nextMission ? <Link className="button" to={`/jornada/missoes/${trail.id}/${nextMission.id}`}>Continuar para a próxima missão</Link> : <Link className="button" to="/jornada/missoes">Escolher uma nova trilha</Link>}
        <Link className={styles.feedResultLink} to="/jornada/feed">Ver impacto no feed</Link>
      </div>
      <button className={styles.restart} onClick={restart}>Recomeçar demonstração</button>
    </div>
  </ExperienceShell>
}
