import { useState } from 'react'
import { useNavigate } from 'react-router'
import { ExperienceShell } from '../../components/experience/ExperienceShell'
import { ValueNotes } from '../../components/project-info/ValueNotes'
import { interests } from '../../data/interests'
import { SoulieGuide } from '../../features/soulie/components/SoulieGuide'
import { useDemo } from '../../hooks/useDemo'
import styles from './OnboardingPage.module.css'

export function OnboardingPage() {
  const navigate = useNavigate()
  const { state, dispatch } = useDemo()
  const [selected, setSelected] = useState<string[]>(state.interests)

  function toggleInterest(id: string) {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id].slice(-3))
  }

  function continueJourney() {
    dispatch({ type: 'SAVE_INTERESTS', interests: selected })
    navigate('/jornada/comunidades')
  }

  function skip() {
    dispatch({ type: 'SKIP_PERSONALIZATION' })
    navigate('/jornada/comunidades')
  }

  return (
    <ExperienceShell
      eyebrow="Primeiro acesso"
      title="Poucas escolhas. Sugestões muito melhores."
      description="O onboarding não é um formulário longo: é uma conversa rápida que dá contexto para a Soulie começar a ajudar."
      step={2}
      aside={<ValueNotes items={[
        { number: '01', title: 'Escolha livre', text: 'Até três interesses, sem resposta obrigatória.' },
        { number: '02', title: 'Controle do usuário', text: 'É possível pular, voltar e mudar depois.' },
      ]} />}
    >
      <div className={styles.content}>
        <SoulieGuide mood={selected.length ? 'happy' : 'curious'} compact message={selected.length ? `Boa escolha! Você pode marcar mais ${3 - selected.length}.` : 'O que costuma despertar sua curiosidade?'} />
        <div className={styles.heading}>
          <span>PERSONALIZAR JORNADA</span>
          <h2>O que combina com você?</h2>
          <p>Escolha até 3 interesses. Usaremos apenas para esta demonstração.</p>
        </div>
        <div className={styles.grid} role="group" aria-label="Selecione até três interesses">
          {interests.map((interest) => {
            const active = selected.includes(interest.id)
            return (
              <button
                key={interest.id}
                type="button"
                aria-pressed={active}
                className={active ? styles.optionActive : styles.option}
                onClick={() => toggleInterest(interest.id)}
              >
                <span>{interest.icon}</span>
                <strong>{interest.label}</strong>
                <i aria-hidden="true">{active ? '✓' : '+'}</i>
              </button>
            )
          })}
        </div>
        <div className={styles.actions}>
          <button className="button button--block" disabled={!selected.length} onClick={continueJourney}>Ver minhas sugestões <span>→</span></button>
          <button className="button button--ghost button--block" onClick={skip}>Prefiro explorar sem personalizar</button>
        </div>
      </div>
    </ExperienceShell>
  )
}

