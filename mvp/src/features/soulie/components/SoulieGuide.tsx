import soulieImage from '../../../assets/soulie/soulie.png'
import type { SoulieMood } from '../../../state/demo.types'
import styles from './SoulieGuide.module.css'

type SoulieGuideProps = {
  mood: SoulieMood
  message: string
  label?: string
  compact?: boolean
}

export function SoulieGuide({ mood, message, label = 'Soulie', compact = false }: SoulieGuideProps) {
  return (
    <div className={`${styles.guide} ${styles[mood]} ${compact ? styles.compact : ''}`}>
      <div className={styles.avatarWrap} aria-hidden="true">
        <span className={styles.sparkleOne}>✦</span>
        <span className={styles.sparkleTwo}>✦</span>
        <img src={soulieImage} alt="" className={styles.avatar} />
      </div>
      <div className={styles.bubble}>
        <span>{label}</span>
        <p>{message}</p>
      </div>
    </div>
  )
}

