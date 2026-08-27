import styles from './ValueNotes.module.css'

export function ValueNotes({ items }: { items: { number: string; title: string; text: string }[] }) {
  return (
    <div className={styles.notes}>
      {items.map((item) => (
        <article key={item.number}>
          <span>{item.number}</span>
          <div><strong>{item.title}</strong><p>{item.text}</p></div>
        </article>
      ))}
    </div>
  )
}

