import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './PrerequisitesSlide.module.css'

const prerequisites = [
  {
    id: 'fabric',
    marker: '01',
    title: 'Microsoft Fabric',
    question: 'Do you have access to a Microsoft Fabric environment with an active trial capacity?',
  },
  {
    id: 'copilot-cli',
    marker: '02',
    title: 'GitHub Copilot CLI',
    question: 'Is GitHub Copilot CLI installed and authenticated on your machine?',
  },
]

export default function PrerequisitesSlide({ index }) {
  return (
    <Slide index={index} className={styles.prerequisites}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="prerequisites.eyebrow" className={styles.eyebrow}>Quick readiness check</Editable>
          <Editable as="h2" id="prerequisites.title" className={styles.title}>Before we start</Editable>
          <Editable as="p" id="prerequisites.subtitle" className={styles.subtitle}>
            Let&apos;s make sure everyone has the environment and tooling needed for the workshop.
          </Editable>
        </header>

        <EditableList
          id="prerequisites.items"
          items={prerequisites}
          keyOf={(item) => item.id}
          className={styles.checkGrid}
          itemClassName={styles.checkItem}
        >
          {(item) => (
            <article className={styles.checkCard}>
              <span className={styles.marker} aria-hidden="true">{item.marker}</span>
              <Editable as="h3" id={`prerequisites.items.${item.id}.title`} className={styles.cardTitle}>
                {item.title}
              </Editable>
              <Editable
                as="p"
                id={`prerequisites.items.${item.id}.question`}
                multiline
                className={styles.question}
              >
                {item.question}
              </Editable>
              <Editable as="p" id={`prerequisites.items.${item.id}.status`} className={styles.status}>
                Show of hands
              </Editable>
            </article>
          )}
        </EditableList>
      </div>

      <BottomBar text={<Editable as="span" id="prerequisites.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
