import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './OpenSpecOverviewSlide.module.css'

const artifacts = [
  { id: 'proposal', title: 'Proposal', description: 'Why are we changing this, and what outcome do we want?' },
  { id: 'specs', title: 'Specs', description: 'What requirements and concrete scenarios define success?' },
  { id: 'design', title: 'Design', description: 'How will the solution fit the existing architecture?' },
  { id: 'tasks', title: 'Tasks', description: 'Which implementation steps turn the agreed plan into code?' },
]

export default function OpenSpecOverviewSlide({ index }) {
  return (
    <Slide index={index} className={styles.openSpecOverview}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="openSpecOverview.eyebrow" className={styles.eyebrow}>OpenSpec</Editable>
          <Editable as="h2" id="openSpecOverview.title" className={styles.title}>Agree before the agent builds</Editable>
          <Editable as="p" id="openSpecOverview.subtitle" multiline className={styles.subtitle}>
            OpenSpec adds a lightweight, reviewable specification layer between an idea and implementation—without turning delivery into a waterfall process.
          </Editable>
        </header>

        <EditableList
          id="openSpecOverview.artifacts"
          items={artifacts}
          keyOf={(artifact) => artifact.id}
          className={styles.artifactGrid}
          itemClassName={styles.artifactItem}
        >
          {(artifact) => (
            <article className={styles.artifactCard}>
              <Editable as="h3" id={`openSpecOverview.artifacts.${artifact.id}.title`} className={styles.artifactTitle}>
                {artifact.title}
              </Editable>
              <Editable
                as="p"
                id={`openSpecOverview.artifacts.${artifact.id}.description`}
                multiline
                className={styles.artifactDescription}
              >
                {artifact.description}
              </Editable>
            </article>
          )}
        </EditableList>

        <div className={styles.takeaway}>
          <Editable as="p" id="openSpecOverview.takeaway" multiline>
            The human reviews intent and requirements first; the agent implements against shared, version-controlled context.
          </Editable>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="openSpecOverview.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
