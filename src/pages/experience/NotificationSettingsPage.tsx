import { useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import soulieAvatar from '../../assets/soulie/soulie.png'
import { ExperienceShell } from '../../components/experience/ExperienceShell'
import { communities } from '../../data/communities'
import { useDemo } from '../../hooks/useDemo'
import type { NotificationPreferences } from '../../state/demo.types'
import styles from './Journey.module.css'

export function NotificationSettingsPage() {
  const { state, dispatch } = useDemo()
  const [preferences, setPreferences] = useState<NotificationPreferences>(state.notificationPreferences)
  const [saved, setSaved] = useState(false)
  const joinedCommunity = communities.find((community) => state.joinedCommunityIds.includes(community.id))
  const hasTopic = preferences.communities || preferences.missions || preferences.streak
  const exampleKind = preferences.communities
    ? joinedCommunity ? 'joined-community' : 'community-discovery'
    : preferences.missions ? 'mission' : preferences.streak ? 'streak' : 'paused'
  const examples = {
    'joined-community': {
      target: `/jornada/comunidade/${joinedCommunity?.id}`,
      title: `${joinedCommunity?.name} está ativa agora`,
      text: 'Há uma ação de menos de 3 minutos. Entre e mantenha seu ritmo.',
      reason: `Você entrou em ${joinedCommunity?.name}, escolheu novidades de comunidades e indicou ${preferences.preferredTime} como horário preferido.`,
    },
    'community-discovery': {
      target: '/jornada/comunidades',
      title: 'Encontrei comunidades para você',
      text: 'Explore espaços relacionados aos interesses que escolheu no início.',
      reason: `Você escolheu novidades de comunidades e indicou ${preferences.preferredTime} como horário preferido. Como ainda não entrou em uma, o exemplo abre a descoberta.`,
    },
    mission: {
      target: '/jornada/missoes',
      title: 'Uma missão curta combina com você',
      text: 'Continue sua trilha e avance em uma pequena conquista hoje.',
      reason: `Você escolheu lembretes de missões e indicou ${preferences.preferredTime} como horário preferido.`,
    },
    streak: {
      target: '/jornada/feed',
      title: `Sua ofensiva de ${state.streakDays} dias continua hoje`,
      text: 'Uma pequena ação é suficiente. Volte quando fizer sentido para você.',
      reason: `Você escolheu lembretes de ofensiva e indicou ${preferences.preferredTime} como horário preferido.`,
    },
    paused: {
      target: '/jornada/notificacoes',
      title: 'Escolha um tema para ver um exemplo',
      text: 'Sem um assunto selecionado, a Soulie não prepara nenhum lembrete.',
      reason: 'Nenhum tema está habilitado. Se os lembretes forem ativados assim, a configuração precisará ser ajustada antes de salvar.',
    },
  } as const
  const example = examples[exampleKind]

  function updatePreference<Key extends keyof NotificationPreferences>(key: Key, value: NotificationPreferences[Key]) {
    setPreferences((current) => ({ ...current, [key]: value }))
    setSaved(false)
  }

  function savePreferences(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    dispatch({ type: 'UPDATE_NOTIFICATION_PREFERENCES', preferences })
    setSaved(true)
  }

  return (
    <ExperienceShell eyebrow="Notificação inteligente" title="Um lembrete que respeita o momento." description="Aqui a pessoa controla quando a Soulie pode chamar e entende, antes de ativar, como a mensagem aparecerá. Nesta versão, todo o envio é simulado." step={4} aside={<p className={styles.muted}>A demonstração não solicita permissão do navegador nem envia push real. As escolhas ficam guardadas apenas nesta sessão.</p>} activeNav="home">
      <div className={`${styles.screen} ${styles.notificationScreen}`}>
        <div className={styles.notificationPageHeader}>
          <Link className={styles.back} to="/jornada/feed">← Voltar ao feed</Link>
          <span>DEMONSTRAÇÃO</span>
        </div>

        <section className={styles.notificationIntro}>
          <div><small>CONTROLE DA PESSOA</small><h2>Como a Soulie pode avisar?</h2><p>Escolha os assuntos e o melhor momento. Você poderá mudar tudo depois.</p></div>
          <img src={soulieAvatar} alt="Soulie apresentando as preferências de notificação" />
        </section>

        <form className={styles.notificationForm} onSubmit={savePreferences}>
          <label className={styles.masterSetting}>
            <span><strong>Ativar lembretes</strong><small>Simulação dentro deste protótipo</small></span>
            <input type="checkbox" checked={preferences.enabled} onChange={(event) => updatePreference('enabled', event.target.checked)} />
          </label>

          <fieldset disabled={!preferences.enabled}>
            <legend>Quero receber lembretes sobre</legend>
            <label><input type="checkbox" checked={preferences.communities} onChange={(event) => updatePreference('communities', event.target.checked)} /><span><strong>Comunidades</strong><small>Atividade e desafios dos grupos</small></span></label>
            <label><input type="checkbox" checked={preferences.missions} onChange={(event) => updatePreference('missions', event.target.checked)} /><span><strong>Missões</strong><small>Próximas conquistas da sua trilha</small></span></label>
            <label><input type="checkbox" checked={preferences.streak} onChange={(event) => updatePreference('streak', event.target.checked)} /><span><strong>Ofensiva</strong><small>Lembretes acolhedores para manter o ritmo</small></span></label>
          </fieldset>

          <fieldset className={styles.deliveryPreferences} disabled={!preferences.enabled}>
            <legend>Ritmo dos lembretes</legend>
            <div className={styles.frequencyOptions}>
              <label><input type="radio" name="frequency" checked={preferences.frequency === 'daily'} onChange={() => updatePreference('frequency', 'daily')} />No máximo 1 por dia</label>
              <label><input type="radio" name="frequency" checked={preferences.frequency === 'summary'} onChange={() => updatePreference('frequency', 'summary')} />Resumo da semana</label>
            </div>
            <label className={styles.timeSetting}>Horário preferido<input type="time" value={preferences.preferredTime} onChange={(event) => updatePreference('preferredTime', event.target.value)} /></label>
          </fieldset>

          <button className="button button--block" type="submit" disabled={preferences.enabled && !hasTopic}>Salvar preferências</button>
          <p className={styles.savedMessage} aria-live="polite">{preferences.enabled && !hasTopic ? 'Escolha ao menos um tema para ativar os lembretes.' : saved ? 'Preferências salvas nesta sessão.' : 'Nenhuma notificação real será enviada.'}</p>
        </form>

        <section className={styles.notificationExample} aria-labelledby="notification-example-title">
          <div className={styles.exampleHeading}><div><small>EXEMPLO AO VIVO</small><h2 id="notification-example-title">Como ela apareceria</h2></div><span>{preferences.preferredTime || '18:30'}</span></div>
          <div className={styles.lockScreenPreview}>
            <article className={styles.notificationBanner}>
              <img src={soulieAvatar} alt="" />
              <div><div className={styles.notificationBannerMeta}><strong>Soulie</strong><span>agora</span></div><h3>{example.title}</h3><p>{example.text}</p></div>
            </article>
            <span>Prévia simulada · sem envio real</span>
          </div>
          <div className={styles.notificationReason}><strong>Por que este exemplo?</strong><p>{example.reason}</p></div>
          {hasTopic ? <Link className={styles.previewAction} to={example.target}>Abrir exemplo no aplicativo →</Link> : <span className={styles.previewActionDisabled}>Selecione um tema para abrir o exemplo</span>}
        </section>
      </div>
    </ExperienceShell>
  )
}
