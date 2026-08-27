import { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { ExperienceShell } from '../../components/experience/ExperienceShell'
import { ValueNotes } from '../../components/project-info/ValueNotes'
import { communities, getRecommendationReason, getRecommendedCommunities } from '../../data/communities'
import { SoulieGuide } from '../../features/soulie/components/SoulieGuide'
import { useDemo } from '../../hooks/useDemo'
import styles from './CommunityScenePage.module.css'

export function CommunityScenePage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { state, dispatch } = useDemo()
  const recommendations = useMemo(
    () => getRecommendedCommunities(state.interests).filter((community) => !state.dismissedCommunityIds.includes(community.id) && !state.joinedCommunityIds.includes(community.id)),
    [state.interests, state.dismissedCommunityIds, state.joinedCommunityIds],
  )

  function joinCommunity(communityId: string) {
    dispatch({ type: 'COMPLETE_TRAIL_STEP', stepId: 'explore-communities', points: 5 })
    dispatch({ type: 'JOIN_COMMUNITY', communityId })
  }

  const joined = state.joinedCommunityIds.length > 0
  const cameFromSelector = searchParams.get('origem') === 'minhas'
  const joinedAll = state.joinedCommunityIds.length === communities.length

  return (
    <ExperienceShell
      eyebrow="Recomendação com contexto"
      title="A Soulie não entrega uma lista. Ela explica um caminho."
      description="As comunidades ganham relevância porque a recomendação mostra o motivo, preserva a escolha e permite tentar outra opção."
      step={3}
      aside={<ValueNotes items={[
        { number: '01', title: 'Motivo visível', text: 'O usuário entende por que cada sugestão apareceu.' },
        { number: '02', title: 'Sem pressão', text: 'Entrar, ignorar ou seguir explorando são opções equivalentes.' },
        { number: '03', title: 'Progresso conectado', text: 'A primeira entrada já avança uma conquista da missão.' },
      ]} />}
    >
      <div className={styles.content}>
        <SoulieGuide
          mood={recommendations.length ? 'thinking' : joined ? 'happy' : 'curious'}
          compact
          message={!recommendations.length && joined ? 'Você já conhece todas as comunidades disponíveis nesta demonstração.' : cameFromSelector && joined ? 'Separei apenas espaços novos para você ampliar sua rede.' : state.personalizationSkipped ? 'Separei espaços acolhedores e bem ativos para você explorar.' : 'Cruzei seus interesses com comunidades que estão cheias de movimento.'}
        />
        <div className={styles.heading}>
          <div><span>PARA VOCÊ</span><h2>Comunidades que combinam</h2></div>
          <button className={styles.search} aria-label="Buscar comunidades">⌕</button>
        </div>

        <div className={styles.list} aria-live="polite">
          {recommendations.slice(0, 3).map((community) => {
            return (
              <article className={styles.card} key={community.id}>
                <div className={`${styles.cover} ${styles[community.tone]}`}>
                  <span>{community.initials}</span>
                  <small>{community.activity}</small>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardTitle}><h3>{community.name}</h3><span>{community.members.toLocaleString('pt-BR')} membros</span></div>
                  <p>{community.description}</p>
                  <div className={styles.reason}><span>✦</span>{getRecommendationReason(community, state.interests)}</div>
                  <div className={styles.cardActions}>
                    <button className="button" onClick={() => joinCommunity(community.id)}>Entrar</button>
                    <button className="button button--ghost" onClick={() => dispatch({ type: 'DISMISS_COMMUNITY', communityId: community.id })}>Agora não</button>
                  </div>
                </div>
              </article>
            )
          })}
          {!recommendations.length && (
            <div className={styles.empty}><span>{joinedAll ? '✓' : '♡'}</span><h3>{joinedAll ? 'Você já entrou em todas.' : 'Sem novas sugestões agora.'}</h3><p>{joinedAll ? 'Todos os espaços disponíveis já estão em Minhas comunidades.' : 'Você pode rever as opções que deixou para depois.'}</p>{joinedAll ? <button className="button button--secondary" onClick={() => navigate('/jornada/comunidade')}>Ver minhas comunidades</button> : <button className="button button--secondary" onClick={() => dispatch({ type: 'RESTORE_COMMUNITY_SUGGESTIONS' })}>Rever sugestões</button>}</div>
          )}
        </div>
        {joined && <div className={styles.next}><span><strong>{cameFromSelector ? state.joinedCommunityIds.length : '+15 pts'}</strong> {cameFromSelector ? 'comunidades escolhidas' : 'nesta etapa'}</span><button className="button" onClick={() => navigate(cameFromSelector ? '/jornada/comunidade' : '/jornada/feed')}>{cameFromSelector ? 'Voltar às minhas comunidades →' : 'Continuar para o feed →'}</button></div>}
      </div>
    </ExperienceShell>
  )
}
