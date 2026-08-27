import { Link } from 'react-router'
import soulieAvatar from '../../assets/soulie/soulie.png'
import { ExperienceShell } from '../../components/experience/ExperienceShell'
import { missionTrails, getMission } from '../../data/missions'
import { useDemo } from '../../hooks/useDemo'
import styles from './Journey.module.css'

export function FeedPage() {
  const { state } = useDemo()
  const recommended = missionTrails[0]
  const lastMission = getMission(state.lastCompletedMissionId ?? undefined)
  return <ExperienceShell eyebrow="Soulie no cotidiano" title="A missão nasce dentro do feed." description="Antes de abrir uma trilha, o usuário vê comunidade, atividade e contexto. A Soulie intervém no momento certo, sem tomar o aplicativo inteiro." step={4} aside={<p className={styles.muted}>Protótipo com dados simulados. O feed preserva apenas o contexto necessário para demonstrar a Soulie.</p>} floatingAction={<img className={styles.soulieFab} src={soulieAvatar} alt="Soulie disponível no canto do aplicativo" />} activeNav="home" showNotificationAction>
    <div className={styles.screen}>
      <section className={styles.wallet}><div className={styles.walletHead}><span>MINHA CARTEIRA</span><span className={styles.streak}>🔥 {state.streakDays} dias</span></div><div className={styles.balance}>{state.points} pts</div><div className={styles.walletFoot}><span>Saldo demonstrativo</span><span>Ver histórico →</span></div></section>
      <section className={styles.notice} aria-label="Notificação da Soulie"><strong>{lastMission ? 'Mandou bem! Seu feed mudou.' : 'Tenho um próximo passo para você.'}</strong><p>{lastMission ? `“${lastMission.title}” entrou para o seu progresso. Vamos manter a ofensiva?` : 'Encontrei uma trilha curta ligada à comunidade que você acabou de escolher.'}</p></section>
      <div><div className={styles.topline}><h2>Suas comunidades</h2><span className={styles.muted}>Ver todas</span></div><div className={styles.stories}><div className={styles.story}><span>🌱</span>Vida leve</div><div className={styles.story}><span>⚡</span>Energia</div><div className={styles.story}><span>♻</span>Impacto</div><div className={styles.story}><span>＋</span>Explorar</div></div></div>
      {lastMission && <article className={styles.post}><div className={styles.postHead}><span className={styles.avatar}>✦</span><div><h3>Seu progresso</h3><span className={styles.muted}>agora mesmo · dado simulado</span></div></div><p>Você concluiu <strong>{lastMission.title}</strong> e inspirou a comunidade com mais uma pequena ação.</p><div className={styles.postActions}><span>♡ 12 apoios</span><span>◯ 3 comentários</span></div></article>}
      <article className={styles.post}><div className={styles.postHead}><span className={styles.avatar}>LF</span><div><h3>Letícia · Energia consciente</h3><span className={styles.muted}>há 14 min · publicação simulada</span></div></div><p>Hoje descobri que uma pequena mudança na rotina já reduz bastante o desperdício.</p><div className={styles.postVisual}>🌤️ ⚡</div><div className={styles.postActions}><span>♡ 28 apoios</span><span>◯ 6 comentários</span></div></article>
      <section className={styles.missionCard}><small>MISSÃO RECOMENDADA · +50 PTS</small><h3>{recommended.title}</h3><p>{recommended.description}</p><div className={styles.recommendedActions}><Link className="button" to={`/jornada/missoes/${recommended.id}`}>Ver trilha</Link><Link className={styles.allTrailsButton} to="/jornada/missoes">Todas as trilhas</Link></div></section>
    </div>
  </ExperienceShell>
}
