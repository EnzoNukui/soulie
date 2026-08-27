import { Link } from 'react-router'
import { SoulieGuide } from '../../features/soulie/components/SoulieGuide'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <main className={styles.page}>
      <SoulieGuide mood="curious" message="Acho que esta parte da Soul Up ainda não entrou na nossa demonstração." />
      <h1>Página não encontrada</h1>
      <p>Vamos voltar para o primeiro encontro?</p>
      <Link className="button" to="/">Voltar ao início</Link>
    </main>
  )
}

