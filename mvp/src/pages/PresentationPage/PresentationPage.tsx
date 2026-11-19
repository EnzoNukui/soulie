import { Link } from 'react-router'
import soulieImage from '../../assets/soulie/soulie.png'
import styles from './PresentationPage.module.css'

const frictions = [
  { number: '01', title: 'Pouco motivo para voltar', text: 'Sem rituais ou progresso visível, uma boa intenção não se transforma em hábito.' },
  { number: '02', title: 'Recompensa distante', text: 'Quando o benefício demora a aparecer, pequenas ações parecem não ter valor.' },
  { number: '03', title: 'Experiência sem contexto', text: 'Mensagens genéricas e um feed parado não criam pertencimento ou continuidade.' },
]

const journey = [
  { icon: '◇', title: 'Conhece', text: 'Interesses, objetivos e rotina dão contexto ao primeiro acesso.' },
  { icon: '✦', title: 'Recomenda', text: 'Missões e comunidades aparecem com um motivo compreensível.' },
  { icon: '↗', title: 'Acompanha', text: 'Trilhas e ofensivas tornam cada pequeno avanço visível.' },
  { icon: '◎', title: 'Recompensa', text: 'Pontos conectam participação a benefícios práticos na Soul Up.' },
]

const capabilities = [
  { kind: 'Personalização', title: 'Onboarding inteligente', text: 'Uma conversa curta adapta a jornada desde o primeiro contato.', visual: 'interests' },
  { kind: 'Ação', title: 'Missões dinâmicas', text: 'Objetivos sustentáveis viram passos possíveis, claros e recompensados.', visual: 'mission' },
  { kind: 'Recorrência', title: 'Ofensivas que acolhem', text: 'A consistência é celebrada e uma pausa sempre oferece caminho de retomada.', visual: 'streak' },
  { kind: 'Pertencimento', title: 'Comunidades vivas', text: 'Pessoas, causas e desafios coletivos mantêm a experiência em movimento.', visual: 'community' },
  { kind: 'Contexto', title: 'Timing mais inteligente', text: 'A Soulie sugere no momento útil, evitando pressão e mensagens genéricas.', visual: 'timing' },
  { kind: 'Valor', title: 'Pontos e benefícios', text: 'O progresso chega à carteira e pode virar desconto na conta de energia.', visual: 'reward' },
]

const moods = ['Tímida no primeiro contato', 'Confiante ao orientar', 'Empolgada ao recomendar', 'Radiante ao celebrar']

export function PresentationPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Navegação da apresentação">
        <a className={styles.brand} href="#inicio" aria-label="Soulie — início"><span>S</span><strong>Soulie</strong></a>
        <div className={styles.navLinks}><a href="#como-funciona">Como funciona</a><a href="#ecossistema">O que ela faz</a></div>
        <Link className={styles.navCta} to="/jornada/encontro">Abrir protótipo <span>→</span></Link>
      </nav>

      <section className={styles.hero} id="inicio" aria-labelledby="presentation-title">
        <div className={styles.copy}>
          <span className={styles.eyebrow}>A camada inteligente e gamificada da Soul Up</span>
          <h1 id="presentation-title">Pequenas ações.<br /><em>Impacto que continua.</em></h1>
          <p className={styles.lead}>A Soulie acolhe, orienta e recompensa cada passo para transformar práticas sustentáveis em hábitos — e hábitos em valor para pessoas, comunidades e empresas.</p>
          <div className={styles.actions}>
            <Link className="button" to="/jornada/encontro">Experimentar a Soulie <span>→</span></Link>
            <a className={styles.secondaryAction} href="#como-funciona">Entender a proposta</a>
          </div>
          <div className={styles.valueFlow} aria-label="Da ação ao benefício"><span>Ação cotidiana</span><i>→</i><span>Progresso visível</span><i>→</i><span>Benefício prático</span></div>
        </div>

        <div className={styles.characterStage} aria-label="Soulie, assistente gamificada da Soul Up">
          <div className={styles.rings} aria-hidden="true"><i /><i /><i /></div>
          <div className={styles.orbit} aria-hidden="true">
            <span className={styles.missionBadge}><b>✦</b><small>Missão</small><strong>+30 pts</strong></span>
            <span className={styles.streakBadge}><b>↗</b><small>Ofensiva</small><strong>3 dias</strong></span>
            <span className={styles.communityBadge}><b>♧</b><small>Comunidade</small><strong>ativa agora</strong></span>
          </div>
          <img src={soulieImage} alt="Soulie, personagem roxa e acolhedora da experiência" />
          <div className={styles.shadow} aria-hidden="true" />
        </div>
      </section>

      <section className={styles.problem} aria-labelledby="problem-title">
        <div className={styles.sectionIntroLight}>
          <span>O desafio</span><h2 id="problem-title">Entrar é fácil.<br />Querer voltar é o que importa.</h2>
          <p>A proposta da Soulie nasce para enfrentar a perda de interesse entre o primeiro contato e a criação de uma rotina.</p>
        </div>
        <div className={styles.frictionGrid}>
          {frictions.map((friction) => <article key={friction.number}><span>{friction.number}</span><h3>{friction.title}</h3><p>{friction.text}</p></article>)}
        </div>
      </section>

      <section className={styles.journeySection} id="como-funciona" aria-labelledby="journey-title">
        <div className={styles.sectionIntro}>
          <span>Como a Soulie transforma a experiência</span><h2 id="journey-title">Do primeiro contato<br />ao hábito que permanece.</h2>
          <p>Ela conecta personalização, gamificação, comunidade e recompensa em um ciclo simples de entender.</p>
        </div>
        <div className={styles.journeyGrid}>
          {journey.map((step, index) => (
            <article key={step.title}>
              <div className={styles.journeyTop}><span>{step.icon}</span><small>0{index + 1}</small></div><h3>{step.title}</h3><p>{step.text}</p>
              {index < journey.length - 1 && <i className={styles.connector} aria-hidden="true">→</i>}
            </article>
          ))}
        </div>
        <div className={styles.ritualCard}>
          <div><span>Um ritmo possível</span><h3>Missão na segunda. Progresso durante a semana. Recompensa para celebrar.</h3></div>
          <div className={styles.week} aria-label="Exemplo de ofensiva semanal">
            {['S','T','Q','Q','S','S','D'].map((day, index) => <span className={index < 4 ? styles.dayDone : styles.day} key={`${day}-${index}`}>{index < 4 ? '✓' : day}</span>)}
          </div>
        </div>
      </section>

      <section className={styles.ecosystem} id="ecossistema" aria-labelledby="ecosystem-title">
        <div className={styles.sectionIntro}><span>Um sistema, não apenas um mascote</span><h2 id="ecosystem-title">A Soulie participa<br />de toda a jornada.</h2></div>
        <div className={styles.capabilityGrid}>
          {capabilities.map((capability) => (
            <article className={`${styles.capability} ${styles[capability.visual]}`} key={capability.title}>
              <span>{capability.kind}</span><h3>{capability.title}</h3><p>{capability.text}</p>
              <div className={styles.cardVisual} aria-hidden="true">
                {capability.visual === 'interests' && <><i>🌱</i><i>💻</i><i>🤝</i></>}
                {capability.visual === 'mission' && <><b>1</b><em /><b>2</b><em /><b>3</b></>}
                {capability.visual === 'streak' && ['S','T','Q','Q','S'].map((day,index) => <i key={`${day}-${index}`}>{index < 3 ? '✓' : day}</i>)}
                {capability.visual === 'community' && <><i>EA</i><i>FC</i><i>＋</i></>}
                {capability.visual === 'timing' && <><b>18:30</b><small>seu melhor horário</small></>}
                {capability.visual === 'reward' && <><small>Carteira</small><b>250 Pts</b><em>+30</em></>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.personality} aria-labelledby="personality-title">
        <div className={styles.personalityCharacter}><img src={soulieImage} alt="" aria-hidden="true" /></div>
        <div className={styles.personalityCopy}>
          <span>Personalidade que responde ao contexto</span><h2 id="personality-title">Acolhe primeiro.<br />Incentiva sem pressionar.</h2>
          <p>A expressão, a mensagem e o movimento mudam conforme o momento. A Soulie celebra avanços, ajuda na retomada e evita culpa ou competição tóxica.</p>
          <div className={styles.moodList}>{moods.map((mood,index) => <span key={mood}><i>0{index + 1}</i>{mood}</span>)}</div>
        </div>
      </section>

      <section className={styles.impact} aria-labelledby="impact-title">
        <div className={styles.impactTitle}><span>Valor conectado</span><h2 id="impact-title">Uma experiência melhor<br />para todos os lados.</h2></div>
        <div className={styles.impactGrid}>
          <article><small>Para quem usa</small><h3>Orientação, pertencimento e recompensa.</h3><ul><li>Próximo passo mais claro</li><li>Progresso e ofensiva visíveis</li><li>Pontos que podem gerar desconto</li></ul></article>
          <article><small>Para comunidades</small><h3>Participação que mantém o ecossistema vivo.</h3><ul><li>Descoberta por interesses</li><li>Desafios coletivos</li><li>Mais conteúdo e interação</li></ul></article>
          <article><small>Para empresas</small><h3>Engajamento que pode ser compreendido.</h3><ul><li>Adesão e recorrência</li><li>Conclusão de missões</li><li>Indicadores demonstrativos</li></ul></article>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div><span>Agora veja funcionando</span><h2>A proposta fica mais clara quando você participa.</h2><p>Entre no primeiro acesso, escolha interesses e acompanhe a Soulie até sua primeira conquista.</p></div>
        <Link className="button" to="/jornada/encontro">Iniciar experiência <span>→</span></Link>
      </section>
    </main>
  )
}
