import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router'
import styles from './ExperienceShell.module.css'

type ExperienceShellProps = {
  eyebrow: string
  title: string
  description: string
  step: number
  totalSteps?: number
  children: ReactNode
  aside: ReactNode
  assistant?: ReactNode
  activeNav?: 'home' | 'communities'
  showNotificationAction?: boolean
}

const stages = [
  { label: 'Encontro com a Soulie', to: '/jornada/encontro' },
  { label: 'Personalização', to: '/jornada/onboarding' },
  { label: 'Descoberta de comunidades', to: '/jornada/comunidades' },
  { label: 'Início', to: '/jornada/feed' },
  { label: 'Suas comunidades', to: '/jornada/comunidade' },
  { label: 'Missões', to: '/jornada/missoes' },
]

export function ExperienceShell({ eyebrow, title, description, step, totalSteps = 6, children, aside, assistant, activeNav, showNotificationAction = false }: ExperienceShellProps) {
  return (
    <main className={styles.page}>
      <section className={styles.intro} aria-labelledby="page-title">
        <Link className={styles.backToPresentation} to="/" aria-label="Voltar à apresentação da Soulie">
          <span aria-hidden="true">←</span>
          Voltar à apresentação
        </Link>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1 id="page-title">{title}</h1>
        <p>{description}</p>
        <nav className={styles.steps} aria-label={`Navegação da experiência. Etapa ${step} de ${totalSteps}`}>
          {stages.slice(0, totalSteps).map((stage, index) => {
            const item = index + 1
            return <Link key={stage.to} to={stage.to} className={item <= step ? styles.stepActive : styles.step} aria-label={`Etapa ${item}: ${stage.label}`} aria-current={item === step ? 'step' : undefined} title={stage.label} />
          })}
        </nav>
        <div className={styles.aside}>{aside}</div>
      </section>
      <section className={styles.phone} aria-label="Demonstração da Soulie na Soul Up">
        <div className={styles.phoneTop} aria-hidden="true">
          <span>9:41</span>
          <span>● ●● ◒</span>
        </div>
        <div className={styles.appHeader}>
          <Link className={styles.brand} to="/" aria-label="Soul Up — voltar ao início">
            <span className={styles.brandMark}>S</span>
            <span>Soul Up</span>
          </Link>
          <div className={styles.headerActions}>
            <span aria-hidden="true">⌕</span>
            <span aria-hidden="true">♡</span>
            {showNotificationAction && (
              <Link className={styles.notificationAction} to="/jornada/notificacoes" aria-label="Configurar notificações da Soulie" title="Notificações">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></svg>
                <span className={styles.notificationDot} aria-hidden="true" />
              </Link>
            )}
            <span aria-hidden="true">◯</span>
          </div>
        </div>
        <div className={styles.appContent}>{children}</div>
        {assistant && <div className={styles.assistant}>{assistant}</div>}
        <nav className={styles.bottomNav} aria-label="Navegação da demonstração Soul Up">
          <NavLink to="/jornada/feed" className={activeNav === 'home' ? styles.navActive : undefined} aria-label="Ir para o início">⌂<small>Início</small></NavLink>
          <NavLink to="/jornada/comunidade" className={activeNav === 'communities' ? styles.navActive : undefined} aria-label="Ir para comunidades">♧<small>Comunidades</small></NavLink>
          <span className={styles.navPlus}>＋</span>
          <span>▷<small>Conteúdo</small></span>
          <span>▢<small>Chat</small></span>
        </nav>
      </section>
    </main>
  )
}
