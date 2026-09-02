import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './FabricEngineeringOSSlide.module.css'

const operatingSystem = [
  { id: 'constitution', title: 'Constitution', text: 'Non-negotiable principles and human accountability.' },
  { id: 'agents', title: 'Roles & bundles', text: 'Composable agents with explicit approval boundaries.' },
  { id: 'decisions', title: 'Decision system', text: 'Capability catalog, decision trees, and Fabric Decision Records.' },
  { id: 'delivery', title: 'Delivery system', text: 'Golden paths, patterns, reference architectures, bootstrap, and standards.' },
]

export default function FabricEngineeringOSSlide({ index }) {
  return (
    <Slide index={index} className={styles.engineeringOS}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <div>
            <Editable as="p" id="fabricOS.eyebrow" className={styles.eyebrow}>Governed agentic engineering for Microsoft Fabric</Editable>
            <Editable as="h2" id="fabricOS.title" className={styles.title}>Fabric Engineering OS</Editable>
          </div>
          <Editable as="p" id="fabricOS.link" className={styles.link}>github.com/Remc0000/Fabric-Engineering-OS</Editable>
        </header>

        <div className={styles.mainGrid}>
          <EditableList
            id="fabricOS.components"
            items={operatingSystem}
            keyOf={(item) => item.id}
            className={styles.componentGrid}
            itemClassName={styles.componentItem}
          >
            {(item) => (
              <article className={styles.componentCard}>
                <Editable as="h3" id={`fabricOS.components.${item.id}.title`}>{item.title}</Editable>
                <Editable as="p" id={`fabricOS.components.${item.id}.text`} multiline>{item.text}</Editable>
              </article>
            )}
          </EditableList>

          <div className={styles.controlModel}>
            <Editable as="p" id="fabricOS.controls.label" className={styles.controlLabel}>Bounded engineering runtime</Editable>
            <div className={styles.controlStep}>
              <Editable as="strong" id="fabricOS.controls.human.title">Humans approve</Editable>
              <Editable as="span" id="fabricOS.controls.human.text">architecture · PRs · merge · production</Editable>
            </div>
            <span className={styles.arrow} aria-hidden="true">↓</span>
            <div className={styles.controlStep}>
              <Editable as="strong" id="fabricOS.controls.agents.title">Agents execute</Editable>
              <Editable as="span" id="fabricOS.controls.agents.text">issues · branches · commits · DEV and TEST</Editable>
            </div>
            <span className={styles.arrow} aria-hidden="true">↓</span>
            <div className={`${styles.controlStep} ${styles.blocked}`}>
              <Editable as="strong" id="fabricOS.controls.never.title">Agents never</Editable>
              <Editable as="span" id="fabricOS.controls.never.text">self-approve · merge · deploy to PROD</Editable>
            </div>
          </div>
        </div>

        <div className={styles.status}>
          <Editable as="span" id="fabricOS.status.label">v0.9.0-preview</Editable>
          <Editable as="p" id="fabricOS.status.text" multiline>
            A GitHub template that turns Copilot into a bounded Fabric engineering runtime—not an autonomous production operator.
          </Editable>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="fabricOS.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
