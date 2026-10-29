import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './SpecFrameworkComparisonSlide.module.css'

const openSpecPoints = [
  { id: 'shape', text: 'Lightweight change folders with proposal, delta specs, design, and tasks' },
  { id: 'flow', text: 'Explore → propose → apply → archive' },
  { id: 'fit', text: 'Strong fit for iterative changes in existing codebases' },
  { id: 'style', text: 'Artifacts are flexible enablers rather than mandatory phase gates' },
]

const specKitPoints = [
  { id: 'shape', text: 'Comprehensive process with constitution, spec, plan, tasks, implementation, and convergence' },
  { id: 'flow', text: 'Constitution → specify → plan → tasks → implement → converge' },
  { id: 'fit', text: 'Strong fit for structured delivery, shared standards, and organization-wide workflows' },
  { id: 'style', text: 'Deep customization via searchable extension, preset, workflow, and bundle catalogs' },
]

export default function SpecFrameworkComparisonSlide({ index }) {
  return (
    <Slide index={index} className={styles.comparison}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="specComparison.eyebrow" className={styles.eyebrow}>Choose the right level of structure</Editable>
          <Editable as="h2" id="specComparison.title" className={styles.title}>OpenSpec or Spec Kit?</Editable>
        </header>

        <div className={styles.frameworkGrid}>
          <article className={`${styles.frameworkCard} ${styles.openSpecCard}`}>
            <Editable as="p" id="specComparison.openSpec.label" className={styles.label}>Lightweight &amp; iterative</Editable>
            <Editable as="h3" id="specComparison.openSpec.title" className={styles.frameworkTitle}>OpenSpec</Editable>
            <EditableList
              id="specComparison.openSpec.points"
              items={openSpecPoints}
              keyOf={(item) => item.id}
              className={styles.pointList}
              itemClassName={styles.pointItem}
            >
              {(item) => (
                <Editable as="p" id={`specComparison.openSpec.points.${item.id}.text`}>
                  {item.text}
                </Editable>
              )}
            </EditableList>
            <Editable as="p" id="specComparison.openSpec.choose" multiline className={styles.choose}>
              Choose when you want fast alignment with minimal ceremony.
            </Editable>
          </article>

          <article className={`${styles.frameworkCard} ${styles.specKitCard}`}>
            <Editable as="p" id="specComparison.specKit.label" className={styles.label}>Structured &amp; extensible</Editable>
            <Editable as="h3" id="specComparison.specKit.title" className={styles.frameworkTitle}>Spec Kit</Editable>
            <EditableList
              id="specComparison.specKit.points"
              items={specKitPoints}
              keyOf={(item) => item.id}
              className={styles.pointList}
              itemClassName={styles.pointItem}
            >
              {(item) => (
                <Editable as="p" id={`specComparison.specKit.points.${item.id}.text`}>
                  {item.text}
                </Editable>
              )}
            </EditableList>
            <Editable as="p" id="specComparison.specKit.choose" multiline className={styles.choose}>
              Choose when governance, repeatability, and customization matter most.
            </Editable>
          </article>
        </div>

        <div className={styles.shared}>
          <Editable as="span" id="specComparison.shared.label" className={styles.sharedLabel}>Both</Editable>
          <Editable as="p" id="specComparison.shared.text" multiline>
            Put human-reviewed specifications before implementation, keep artifacts in the repository, and work with multiple AI coding agents.
          </Editable>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="specComparison.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
