import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './SpecToSquadBridgeSlide.module.css'

const specialists = [
  { id: 'architect', title: 'Architect', text: 'Shapes the design' },
  { id: 'engineer', title: 'Engineer', text: 'Builds the solution' },
  { id: 'reviewer', title: 'Reviewer', text: 'Challenges the code' },
  { id: 'tester', title: 'Tester', text: 'Proves the contract' },
]

export default function SpecToSquadBridgeSlide({ index }) {
  return (
    <Slide index={index} className={styles.bridge}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="specToSquad.eyebrow" className={styles.eyebrow}>The advanced pattern</Editable>
          <Editable as="h2" id="specToSquad.title" className={styles.title}>Pair specification discipline with a Squad</Editable>
          <Editable as="p" id="specToSquad.subtitle" multiline className={styles.subtitle}>
            OpenSpec or Spec Kit defines what good looks like. Squad lets multiple specialists work that contract together.
          </Editable>
        </header>

        <div className={styles.flow}>
          <article className={styles.specCard}>
            <Editable as="p" id="specToSquad.spec.label" className={styles.cardLabel}>01 · Define the contract</Editable>
            <Editable as="h3" id="specToSquad.spec.title">Spec-driven development</Editable>
            <Editable as="p" id="specToSquad.spec.text" multiline>
              Requirements, scenarios, design decisions, tasks, and acceptance criteria stay reviewable in the repository.
            </Editable>
            <div className={styles.frameworks}>
              <Editable as="span" id="specToSquad.spec.openSpec">OpenSpec</Editable>
              <Editable as="span" id="specToSquad.spec.specKit">Spec Kit</Editable>
            </div>
          </article>

          <div className={styles.connector} aria-hidden="true">
            <span>→</span>
          </div>

          <article className={styles.squadCard}>
            <Editable as="p" id="specToSquad.squad.label" className={styles.cardLabel}>02 · Coordinate the work</Editable>
            <Editable as="h3" id="specToSquad.squad.title">Squad</Editable>
            <Editable as="p" id="specToSquad.squad.text" multiline>
              A coordinator routes independent tasks, keeps shared decisions visible, and launches specialists in parallel.
            </Editable>
            <div className={styles.hub}>
              <Editable as="span" id="specToSquad.squad.hub">Shared context</Editable>
            </div>
          </article>

          <div className={styles.connector} aria-hidden="true">
            <span>→</span>
          </div>

          <EditableList
            id="specToSquad.specialists"
            items={specialists}
            keyOf={(specialist) => specialist.id}
            className={styles.specialistGrid}
            itemClassName={styles.specialistItem}
          >
            {(specialist) => (
              <article className={styles.specialistCard}>
                <Editable as="strong" id={`specToSquad.specialists.${specialist.id}.title`}>
                  {specialist.title}
                </Editable>
                <Editable as="span" id={`specToSquad.specialists.${specialist.id}.text`}>
                  {specialist.text}
                </Editable>
              </article>
            )}
          </EditableList>
        </div>

        <Editable as="p" id="specToSquad.takeaway" multiline className={styles.takeaway}>
          The specification becomes the shared source of truth—agents can move in parallel without pulling the solution in different directions.
        </Editable>
      </div>

      <BottomBar text={<Editable as="span" id="specToSquad.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
