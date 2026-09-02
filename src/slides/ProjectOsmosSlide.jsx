import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './ProjectOsmosSlide.module.css'

const capabilities = [
  { id: 'explore', title: 'Explore', text: 'Inspect data in a Fabric Lakehouse.' },
  { id: 'build', title: 'Build', text: 'Create and test Fabric notebooks.' },
  { id: 'transform', title: 'Transform', text: 'Clean, join, aggregate, and validate.' },
  { id: 'publish', title: 'Publish', text: 'Write Delta tables and workspace artifacts.' },
]

export default function ProjectOsmosSlide({ index }) {
  return (
    <Slide index={index} className={styles.osmos}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <div>
            <Editable as="p" id="osmos.eyebrow" className={styles.eyebrow}>Agentic data engineering inside Microsoft Fabric</Editable>
            <Editable as="h2" id="osmos.title" className={styles.title}>Project Osmos</Editable>
          </div>
          <Editable as="p" id="osmos.link" className={styles.link}>github.com/microsoft/project-osmos</Editable>
        </header>

        <div className={styles.flow}>
          <div className={styles.flowNode}>
            <Editable as="span" id="osmos.flow.client.label">Your machine</Editable>
            <Editable as="strong" id="osmos.flow.client.title">Copilot CLI</Editable>
            <Editable as="p" id="osmos.flow.client.text">Starts and monitors the task.</Editable>
          </div>
          <span className={styles.flowArrow} aria-hidden="true">→</span>
          <div className={`${styles.flowNode} ${styles.highlight}`}>
            <Editable as="span" id="osmos.flow.task.label">Microsoft Fabric</Editable>
            <Editable as="strong" id="osmos.flow.task.title">Osmos task</Editable>
            <Editable as="p" id="osmos.flow.task.text">Agent reasoning and long-running workflow.</Editable>
          </div>
          <span className={styles.flowArrow} aria-hidden="true">→</span>
          <div className={styles.flowNode}>
            <Editable as="span" id="osmos.flow.runtime.label">Fabric runtime</Editable>
            <Editable as="strong" id="osmos.flow.runtime.title">Spark + OneLake</Editable>
            <Editable as="p" id="osmos.flow.runtime.text">Executes against your data and artifacts.</Editable>
          </div>
        </div>

        <div className={styles.lowerGrid}>
          <EditableList
            id="osmos.capabilities"
            items={capabilities}
            keyOf={(item) => item.id}
            className={styles.capabilityGrid}
            itemClassName={styles.capabilityItem}
          >
            {(item) => (
              <article className={styles.capabilityCard}>
                <Editable as="h3" id={`osmos.capabilities.${item.id}.title`}>{item.title}</Editable>
                <Editable as="p" id={`osmos.capabilities.${item.id}.text`}>{item.text}</Editable>
              </article>
            )}
          </EditableList>

          <div className={styles.installCard}>
            <Editable as="p" id="osmos.install.label" className={styles.installLabel}>Install for Copilot CLI</Editable>
            <code>copilot plugin marketplace add microsoft/project-osmos</code>
            <code>copilot plugin install project-osmos@project-osmos</code>
            <Editable as="p" id="osmos.install.requirement" multiline className={styles.requirement}>
              Requires enabled Osmos access, a capacity-backed workspace with a Lakehouse, Contributor access, and Azure CLI authentication.
            </Editable>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="osmos.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
