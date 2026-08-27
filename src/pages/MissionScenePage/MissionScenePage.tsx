import { useNavigate } from 'react-router'
import { ExperienceShell } from '../../components/experience/ExperienceShell'
import { ValueNotes } from '../../components/project-info/ValueNotes'
import { communities } from '../../data/communities'
import { firstMission } from '../../data/missions'
import { SoulieGuide } from '../../features/soulie/components/SoulieGuide'
import { useDemo } from '../../hooks/useDemo'
import styles from './MissionScenePage.module.css'

export function MissionScenePage() {
  const navigate = useNavigate()
  const { state, dispatch, reset } = useDemo()
  const joinedCommunity = communities.find((item) => state.joinedCommunityIds.includes(item.id))
  const completedSteps = firstMission.steps.filter((step) => state.completedTrailStepIds.includes(step.id))
  const earned = completedSteps.reduce((total, step) => total + step.points, 0)
  const missionComplete = earned === firstMission.totalPoints
  const nextStep = firstMission.steps.find((step) => !state.completedTrailStepIds.includes(step.id))

  function completeChallenge() {
    dispatch({ type: 'COMPLETE_TRAIL_STEP', stepId: 'first-challenge', points: 10 })
  }

  return (
    <ExperienceShell
      eyebrow="Trilha de pequenas conquistas"
      title="Uma missão grande deixa de parecer distante."
      description="A recompensa original é preservada, mas o caminho mostra avanços menores — cada um com significado e feedback da Soulie."
      step={4}
      aside={<ValueNotes items={[
        { number: '30', title: 'Pontos no total', text: '5 + 5 + 10 + 10: a missão mantém exatamente seu valor.' },
        { number: '04', title: 'Conquistas menores', text: 'O usuário sempre entende o próximo passo.' },
        { number: '01', title: 'Celebração final', text: 'O maior feedback fica reservado para a conclusão.' },
      ]} />}
    >
      <div className={styles.content}>
        <SoulieGuide
          mood={missionComplete ? 'celebrating' : 'happy'}
          compact
          message={missionComplete ? 'Trilha concluída! Você transformou quatro passos simples em uma conquista completa.' : joinedCommunity ? `Você já faz parte da ${joinedCommunity.name}. Falta pouco para concluir sua primeira trilha!` : 'Escolha uma comunidade para continuar esta trilha.'}
        />

        <article className={styles.missionHeader}>
          <div className={styles.missionTitle}>
            <div><span>PRIMEIRA MISSÃO</span><h2>{firstMission.title}</h2></div>
            <strong>+{firstMission.totalPoints}</strong>
          </div>
          <p>{firstMission.description}</p>
          <div className={styles.progressLabel}><span>{completedSteps.length} de {firstMission.steps.length} conquistas</span><strong>{earned}/{firstMission.totalPoints} pts</strong></div>
          <div className={styles.progress}><span style={{ width: `${(earned / firstMission.totalPoints) * 100}%` }} /></div>
        </article>

        <ol className={styles.trail} aria-label="Etapas da primeira missão">
          {firstMission.steps.map((step, index) => {
            const complete = state.completedTrailStepIds.includes(step.id)
            const current = nextStep?.id === step.id
            return (
              <li key={step.id} className={complete ? styles.complete : current ? styles.current : styles.locked}>
                <div className={styles.node}>{complete ? '✓' : index + 1}</div>
                <div className={styles.stepText}><strong>{step.title}</strong><span>{step.description}</span></div>
                <b>+{step.points}</b>
              </li>
            )
          })}
        </ol>

        {!joinedCommunity && <button className="button button--block" onClick={() => navigate('/jornada/comunidades')}>Escolher uma comunidade</button>}
        {joinedCommunity && !missionComplete && (
          <button className="button button--block" onClick={completeChallenge} disabled={nextStep?.id !== 'first-challenge'}>
            Conhecer primeiro desafio <span>+10</span>
          </button>
        )}
        {missionComplete && (
          <div className={styles.celebration} aria-live="polite">
            <div><span>✦</span><div><strong>Missão concluída</strong><small>Seu saldo agora é {state.points} Pontos Soul</small></div></div>
            <button className="button button--secondary" onClick={() => { reset(); navigate('/') }}>Recomeçar</button>
          </div>
        )}
      </div>
    </ExperienceShell>
  )
}

