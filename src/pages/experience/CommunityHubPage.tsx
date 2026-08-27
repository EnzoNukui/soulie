import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import soulieAvatar from '../../assets/soulie/soulie.png'
import { ExperienceShell } from '../../components/experience/ExperienceShell'
import { communities } from '../../data/communities'
import { communityChallenge, communityPosts } from '../../data/community-experience'
import { useDemo } from '../../hooks/useDemo'
import styles from './Journey.module.css'

export function CommunityHubPage() {
  const { communityId } = useParams()
  const { state, dispatch } = useDemo()
  const [showSteps, setShowSteps] = useState(false)
  const community = communities.find((item) => item.id === communityId && state.joinedCommunityIds.includes(item.id))
  if (!community) return <Navigate to="/jornada/comunidade" replace />
  const contributionId = `${community.id}:${communityChallenge.id}`
  const contributed = state.communityContributionIds.includes(contributionId)
  const progress = communityChallenge.baseProgress + (contributed ? 1 : 0)

  function contribute() {
    dispatch({ type: 'COMPLETE_COMMUNITY_CONTRIBUTION', contributionId, points: communityChallenge.points })
  }

  return <ExperienceShell eyebrow="Soulie em comunidade" title="Ela transforma movimento coletivo em convite pessoal." description="Dentro da comunidade, a Soulie lê o contexto, explica onde a participação faz diferença e reduz uma meta coletiva a uma contribuição possível." step={5} aside={<p className={styles.muted}>Comunidade, publicações e progresso coletivo usam dados simulados para demonstrar o comportamento.</p>} floatingAction={<img className={styles.soulieFab} src={soulieAvatar} alt="Soulie disponível para ajudar na comunidade" />} activeNav="communities">
    <div className={styles.screen}>
      <Link className={styles.back} to="/jornada/comunidade">← Minhas comunidades</Link>
      <header className={styles.communityHeader}><span className={styles.communityAvatar}>{community.initials}</span><div><small>MINHA COMUNIDADE</small><h2>{community.name}</h2><p>{community.activity} · {community.members.toLocaleString('pt-BR')} membros</p></div><button aria-label="Mais opções da comunidade">•••</button></header>

      <section className={styles.communityHero}><div className={styles.communityHeroTop}><span>DESAFIO COLETIVO</span><strong>+{communityChallenge.points} pts</strong></div><h3>{communityChallenge.title}</h3><p>{communityChallenge.description}</p><div className={styles.collectiveProgress}><span style={{ width: `${progress}%` }} /></div><div className={styles.meta}><span>{progress} de {communityChallenge.goal} ações</span><span>{communityChallenge.deadline}</span></div></section>

      <section className={`${styles.communityCoach} ${contributed ? styles.communityCoachDone : ''}`} aria-live="polite">
        <span className={styles.coachKicker}>✦ SUGESTÃO DA SOULIE</span>
        <h3>{contributed ? 'Sua dica já está movendo a comunidade.' : communityChallenge.contributionTitle}</h3>
        <p>{contributed ? `Você ajudou ${community.name} a chegar a ${progress}% da meta. A contribuição foi registrada apenas uma vez.` : `Sugeri isso porque ${community.name} está ativa agora e essa ação leva menos de três minutos.`}</p>
        {!contributed && !showSteps && <button className="button button--secondary" onClick={() => setShowSteps(true)}>Como posso ajudar?</button>}
        {!contributed && showSteps && <div className={styles.coachSteps}><ol>{communityChallenge.contributionSteps.map((step) => <li key={step}>{step}</li>)}</ol><button className="button" onClick={contribute}>Confirmar contribuição · +{communityChallenge.points} pts</button><button className={styles.textButton} onClick={() => setShowSteps(false)}>Agora não</button></div>}
        {contributed && <div className={styles.communityReward}><strong>+{communityChallenge.points} pts</strong><span>Saldo atualizado: {state.points} pts</span></div>}
      </section>

      <div className={styles.topline}><h2>Conversas recentes</h2><span className={styles.muted}>Dados simulados</span></div>
      {communityPosts.map((post) => <article className={styles.post} key={post.id}><div className={styles.postHead}><span className={styles.avatar}>{post.initials}</span><div><h3>{post.author}</h3><span className={styles.muted}>{post.time}</span></div></div><p>{post.text}</p><div className={styles.postActions}><span>♡ {post.reactions} apoios</span><span>Responder</span></div></article>)}
    </div>
  </ExperienceShell>
}
