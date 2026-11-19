import { useNavigate } from 'react-router'
import { ExperienceShell } from '../../components/experience/ExperienceShell'
import { ValueNotes } from '../../components/project-info/ValueNotes'
import { SoulieGuide } from '../../features/soulie/components/SoulieGuide'
import { useDemo } from '../../hooks/useDemo'
import styles from './WelcomePage.module.css'

export function WelcomePage() {
  const navigate = useNavigate()
  const { state, dispatch, reset } = useDemo()

  function startJourney() {
    dispatch({ type: 'COMPLETE_TRAIL_STEP', stepId: 'first-meeting', points: 5 })
    navigate('/jornada/onboarding')
  }

  return (
    <ExperienceShell
      eyebrow="Conheça pela experiência"
      title="Um primeiro passo que já entende você."
      description="A Soulie acompanha cada escolha dentro da Soul Up — com sugestões úteis, pequenas conquistas e uma presença que não atrapalha."
      step={1}
      aside={<ValueNotes items={[
        { number: '01', title: 'Personalização leve', text: 'Poucas escolhas já tornam a jornada relevante.' },
        { number: '02', title: 'Progresso visível', text: 'Cada ação pequena aproxima de uma conquista maior.' },
        { number: '03', title: 'Presença acolhedora', text: 'A Soulie orienta sem pressionar ou ocupar a tela.' },
      ]} />}
    >
      <div className={styles.content}>
        <div className={styles.walletBar}>
          <span className={styles.walletIcon}>▱</span>
          <div><small>Minha carteira</small><strong>{state.points} Pts</strong></div>
          <span className={styles.pulse}>Tudo certo</span>
        </div>

        <article className={styles.welcomeCard}>
          <span className={styles.kicker}>Sua nova companhia</span>
          <h2>Oi, eu sou a Soulie.</h2>
          <p>Posso te ajudar a encontrar pessoas, desafios e pequenas ações que tenham a ver com você.</p>
          <SoulieGuide mood="welcome" compact message="Vamos descobrir um bom lugar para você começar?" />
          <div className={styles.actions}>
            <button className="button button--block" onClick={startJourney}>Começar minha jornada <span>→</span></button>
            {state.completedTrailStepIds.length > 0 && (
              <button className="button button--ghost button--block" onClick={reset}>Reiniciar demonstração</button>
            )}
          </div>
        </article>

        <div className={styles.previewGrid} aria-label="O que a Soulie acompanha">
          <div><span>◉</span><small>Missões</small></div>
          <div><span>♧</span><small>Comunidades</small></div>
          <div><span>✦</span><small>Conquistas</small></div>
        </div>
      </div>
    </ExperienceShell>
  )
}

