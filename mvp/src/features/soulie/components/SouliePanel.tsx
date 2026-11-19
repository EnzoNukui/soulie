import { useEffect, useRef } from 'react'
import type { KeyboardEvent, RefObject } from 'react'
import soulieImage from '../../../assets/soulie/soulie.png'
import type { SoulieAction, SoulieInteraction, SoulieIntent } from '../soulie.types'
import styles from './SoulieAssistant.module.css'

type SouliePanelProps = {
  dialogRef: RefObject<HTMLDialogElement | null>
  titleRef: RefObject<HTMLHeadingElement | null>
  dialogId: string
  interaction: SoulieInteraction
  selectedIntent: SoulieIntent | null
  onSelectIntent: (intent: SoulieIntent) => void
  onAction: (action: SoulieAction) => void
  onClose: () => void
  onDialogClose: () => void
}

export function SouliePanel({
  dialogRef,
  titleRef,
  dialogId,
  interaction,
  selectedIntent,
  onSelectIntent,
  onAction,
  onClose,
  onDialogClose,
}: SouliePanelProps) {
  const mood = selectedIntent?.mood ?? interaction.mood
  const showReason = selectedIntent?.id !== interaction.reasonIntent.id
  const answerRef = useRef<HTMLElement>(null)
  const firstReplyRef = useRef<HTMLButtonElement>(null)
  const hadSelectedIntentRef = useRef(false)

  useEffect(() => {
    if (selectedIntent) {
      hadSelectedIntentRef.current = true
      answerRef.current?.focus()
      return
    }

    if (hadSelectedIntentRef.current) {
      hadSelectedIntentRef.current = false
      firstReplyRef.current?.focus()
    }
  }, [selectedIntent])

  function containFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
      return
    }

    if (event.key !== 'Tab') return

    const dialog = dialogRef.current
    if (!dialog) return
    const focusableElements = Array.from(dialog.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )).filter((element) => element.offsetParent !== null)
    const firstElement = focusableElements[0]
    const lastElement = focusableElements.at(-1)
    if (!firstElement || !lastElement) return

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      id={dialogId}
      className={`${styles.dialog} ${styles[mood]}`}
      aria-labelledby={`${dialogId}-title`}
      aria-describedby={`${dialogId}-description`}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClose={onDialogClose}
      onKeyDown={containFocus}
    >
      <div className={styles.panel}>
        <header className={styles.panelHeader}>
          <div className={styles.identity}>
            <div className={styles.panelAvatar} aria-hidden="true">
              <span>✦</span>
              <img src={soulieImage} alt="" />
            </div>
            <div>
              <span className={styles.name}>Soulie</span>
              <span className={styles.simulationLabel}>Demonstração com respostas prontas</span>
            </div>
          </div>
          <button type="button" className={styles.closeButton} aria-label="Fechar ajuda da Soulie" onClick={onClose}>×</button>
        </header>

        <div className={styles.panelBody}>
          <p className={styles.liveResponse} aria-live="polite" aria-atomic="true">
            {selectedIntent?.response ?? ''}
          </p>
          <section className={styles.introduction}>
            <span className={styles.kicker}>AJUDA GUIADA</span>
            <h2 ref={titleRef} id={`${dialogId}-title`} tabIndex={-1}>Ajuda guiada da Soulie</h2>
            <p id={`${dialogId}-description`}>{interaction.greeting}</p>
            <div className={styles.summary}>
              <span aria-hidden="true">✦</span>
              <p>{interaction.summary}</p>
            </div>
          </section>

          {!selectedIntent ? (
            <section className={styles.options} aria-labelledby={`${dialogId}-options`}>
              <h3 id={`${dialogId}-options`}>Como posso ajudar agora?</h3>
              <div className={styles.quickReplies}>
                {interaction.intents.map((intent, index) => (
                  <button ref={index === 0 ? firstReplyRef : undefined} type="button" key={intent.id} onClick={() => onSelectIntent(intent)}>
                    <span>{intent.label}</span>
                    <b aria-hidden="true">→</b>
                  </button>
                ))}
              </div>
              <button type="button" className={styles.dismissButton} onClick={() => onAction(interaction.closeAction)}>
                {interaction.closeAction.label}
              </button>
            </section>
          ) : (
            <section ref={answerRef} tabIndex={-1} className={styles.answer}>
              <span className={styles.answerLabel}>SOULIE RESPONDE</span>
              <p>{selectedIntent.response}</p>
              <div className={styles.answerActions}>
                {selectedIntent.action && (
                  <button type="button" className={styles.primaryAction} onClick={() => onAction(selectedIntent.action!)}>
                    {selectedIntent.action.label}
                    <span aria-hidden="true">→</span>
                  </button>
                )}
                {showReason && (
                  <button type="button" className={styles.secondaryAction} onClick={() => onSelectIntent(interaction.reasonIntent)}>
                    {interaction.reasonIntent.label}
                  </button>
                )}
                <button type="button" className={styles.resetButton} onClick={() => onAction(interaction.resetAction)}>
                  ← {interaction.resetAction.label}
                </button>
              </div>
            </section>
          )}

          <p className={styles.disclaimer}><span aria-hidden="true">ⓘ</span>{interaction.disclaimer}</p>
        </div>
      </div>
    </dialog>
  )
}
