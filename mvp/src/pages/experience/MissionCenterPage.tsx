import { useState } from 'react'
import { Link } from 'react-router'
import { ExperienceShell } from '../../components/experience/ExperienceShell'
import { getTrailPoints, getTrailProgress, missionTrails } from '../../data/missions'
import { useDemo } from '../../hooks/useDemo'
import styles from './Journey.module.css'

type TrailFilter = 'all' | 'recommended' | 'started'

export function MissionCenterPage() {
  const { state } = useDemo()
  const [filter, setFilter] = useState<TrailFilter>('all')
  const visibleTrails = missionTrails.filter((trail, index) =>
    filter === 'all' || (filter === 'recommended' && index < 2) || (filter === 'started' && state.startedTrailIds.includes(trail.id)),
  )

  return <ExperienceShell eyebrow="Escolha com autonomia" title="Várias trilhas, um progresso possível." description="Cada objetivo maior é dividido em ações menores. O usuário pode entender o esforço, a recompensa e escolher por onde começar." step={6} aside={<p className={styles.muted}>Todas as trilhas e pontuações desta demonstração são simuladas.</p>}>
    <div className={styles.screen}>
      <div className={styles.topline}><div><h2>Trilhas da Soulie</h2><span className={styles.muted}>Escolha uma para explorar</span></div><span className={styles.streak}>🔥 {state.streakDays}</span></div>
      <div className={styles.tabs} role="tablist" aria-label="Filtrar trilhas">
        {([['all', 'Todas'], ['recommended', 'Para você'], ['started', 'Em andamento']] as const).map(([value, label]) => <button key={value} className={`${styles.tab} ${filter === value ? styles.tabActive : ''}`} role="tab" aria-selected={filter === value} onClick={() => setFilter(value)}>{label}</button>)}
      </div>
      <div className={styles.trailList} aria-live="polite">
        {visibleTrails.map((trail) => {
          const completed = getTrailProgress(trail, state.completedMissionIds)
          return <Link className={styles.trailCard} to={`/jornada/missoes/${trail.id}`} key={trail.id}><div className={styles.trailHead}><span className={styles.trailIcon}>{trail.icon}</span><div><h3>{trail.title}</h3><p>{trail.description}</p></div></div><div className={styles.meta}><span>{trail.missions.length} missões</span><span>{completed}/{trail.missions.length} · +{getTrailPoints(trail)} pts</span></div><div className={styles.progress}><span style={{ width: `${completed / trail.missions.length * 100}%` }} /></div></Link>
        })}
        {!visibleTrails.length && <div className={styles.post}><h3>Nenhuma trilha iniciada ainda</h3><p>Abra uma trilha e toque em “Começar esta trilha”. Ela aparecerá aqui.</p></div>}
      </div>
      <Link className={styles.back} to="/jornada/feed">← Voltar ao feed</Link>
    </div>
  </ExperienceShell>
}
