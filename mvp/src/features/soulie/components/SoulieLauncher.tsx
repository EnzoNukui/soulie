import { forwardRef } from 'react'
import soulieImage from '../../../assets/soulie/soulie.png'
import styles from './SoulieAssistant.module.css'

type SoulieLauncherProps = {
  expanded: boolean
  controls: string
  hasSuggestion: boolean
  onOpen: () => void
}

export const SoulieLauncher = forwardRef<HTMLButtonElement, SoulieLauncherProps>(function SoulieLauncher(
  { expanded, controls, hasSuggestion, onOpen },
  ref,
) {
  const label = hasSuggestion
    ? 'Soulie tem uma sugestão. Abrir ajuda guiada'
    : 'Abrir ajuda guiada da Soulie'

  return (
    <button
      ref={ref}
      type="button"
      className={styles.launcher}
      aria-label={label}
      aria-haspopup="dialog"
      aria-expanded={expanded}
      aria-controls={controls}
      onClick={onOpen}
    >
      {hasSuggestion && <span className={styles.suggestionIndicator} aria-hidden="true">✦</span>}
      <img src={soulieImage} alt="" />
    </button>
  )
})
