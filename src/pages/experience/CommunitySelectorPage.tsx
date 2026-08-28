import { Link } from 'react-router'
import { ExperienceShell } from '../../components/experience/ExperienceShell'
import { communities } from '../../data/communities'
import { SoulieAssistant } from '../../features/soulie/components/SoulieAssistant'
import { useDemo } from '../../hooks/useDemo'
import styles from './Journey.module.css'

export function CommunitySelectorPage() {
  const { state } = useDemo()
  const joinedCommunities = communities.filter((community) => state.joinedCommunityIds.includes(community.id))

  return <ExperienceShell eyebrow="Escolha antes de entrar" title="Cada comunidade tem seu próprio movimento." description="A pessoa vê os espaços que escolheu, decide qual deseja visitar e pode ampliar sua rede quando quiser. A Soulie mantém o contexto de cada comunidade separado." step={5} aside={<p className={styles.muted}>A seleção evita levar o usuário automaticamente para uma comunidade quando ele participa de várias.</p>} assistant={<SoulieAssistant context={{ kind: 'community-selector' }} />} activeNav="communities">
    <div className={styles.screen}>
      <div className={styles.topline}><div><h2>Minhas comunidades</h2><span className={styles.muted}>{joinedCommunities.length} {joinedCommunities.length === 1 ? 'comunidade escolhida' : 'comunidades escolhidas'}</span></div></div>

      {joinedCommunities.length ? <div className={styles.communityChoices}>{joinedCommunities.map((community) => <Link className={styles.communityChoice} to={`/jornada/comunidade/${community.id}`} key={community.id}><span className={`${styles.communityAvatar} ${styles[`communityTone${community.tone}`]}`}>{community.initials}</span><span><strong>{community.name}</strong><small>{community.activity}</small><em>{community.members.toLocaleString('pt-BR')} membros</em></span><b aria-hidden="true">→</b></Link>)}</div> : <section className={styles.emptyCommunities}><span>♧</span><h3>Seu espaço começa com uma escolha.</h3><p>Conheça comunidades relacionadas aos seus interesses e entre na primeira para continuar.</p></section>}

      <Link className={styles.discoverCommunity} to="/jornada/comunidades?origem=minhas"><span>＋</span><div><strong>{joinedCommunities.length ? 'Entrar em outra comunidade' : 'Descobrir comunidades'}</strong><small>A Soulie explica por que cada sugestão combina com você.</small></div><b aria-hidden="true">→</b></Link>
      <Link className={styles.back} to="/jornada/feed">← Voltar ao início</Link>
    </div>
  </ExperienceShell>
}
