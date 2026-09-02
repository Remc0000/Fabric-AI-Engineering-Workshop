import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './FabricEngineeringArchitectureSlide.module.css'

const humanGates = [
  { id: 'architecture', label: 'Architecture approval' },
  { id: 'review', label: 'PR + merge approval' },
  { id: 'production', label: 'Production approval' },
]

const runtimeSteps = [
  { id: 'intent', title: 'Intent + spec', text: 'Outcomes · constraints · acceptance' },
  { id: 'decision', title: 'Decision system', text: 'Capabilities · trees · FDRs' },
  { id: 'bundle', title: 'Agent bundle', text: 'Architect · engineer · reviewer · QA' },
  { id: 'delivery', title: 'GitHub delivery', text: 'Issue · branch · commit · PR' },
  { id: 'evidence', title: 'Quality evidence', text: 'Tests · validation · traceability' },
]

const foundations = [
  { id: 'constitution', text: 'Constitution' },
  { id: 'knowledge', text: 'Learn + Fabric Skills' },
  { id: 'patterns', text: 'Golden paths + patterns' },
  { id: 'standards', text: 'Standards + reference architectures' },
]

const environments = [
  { id: 'dev', label: 'Fabric DEV', note: 'agent execution' },
  { id: 'test', label: 'Fabric TEST', note: 'validation + evidence' },
  { id: 'gate', label: 'Human release gate', note: 'approve production' },
  { id: 'prod', label: 'Fabric PROD', note: 'human controlled' },
]

export default function FabricEngineeringArchitectureSlide({ index }) {
  return (
    <Slide index={index} className={styles.architecture}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <div>
            <Editable as="p" id="fabricOSArchitecture.eyebrow" className={styles.eyebrow}>Reference operating architecture</Editable>
            <Editable as="h2" id="fabricOSArchitecture.title" className={styles.title}>Governed autonomy, end to end</Editable>
          </div>
          <Editable as="p" id="fabricOSArchitecture.source" className={styles.source}>
            Fabric Engineering OS · editable architecture
          </Editable>
        </header>

        <div className={styles.diagram}>
          <section className={styles.humanPlane}>
            <Editable as="p" id="fabricOSArchitecture.human.label" className={styles.planeLabel}>Human accountability plane</Editable>
            <EditableList
              id="fabricOSArchitecture.human.gates"
              items={humanGates}
              keyOf={(item) => item.id}
              className={styles.gateFlow}
              itemClassName={styles.flowItem}
            >
              {(item) => (
                <div className={styles.humanGate}>
                  <span className={styles.personIcon} aria-hidden="true">◆</span>
                  <Editable as="strong" id={`fabricOSArchitecture.human.${item.id}`}>{item.label}</Editable>
                </div>
              )}
            </EditableList>
          </section>

          <section className={styles.runtime}>
            <div className={styles.runtimeHeading}>
              <Editable as="strong" id="fabricOSArchitecture.runtime.title">Fabric Engineering OS</Editable>
              <Editable as="span" id="fabricOSArchitecture.runtime.note">Bounded GitHub + Copilot runtime</Editable>
            </div>

            <EditableList
              id="fabricOSArchitecture.runtime.steps"
              items={runtimeSteps}
              keyOf={(item) => item.id}
              className={styles.runtimeFlow}
              itemClassName={styles.flowItem}
            >
              {(item) => (
                <article className={`${styles.runtimeStep} ${styles[item.id]}`}>
                  <Editable as="strong" id={`fabricOSArchitecture.runtime.${item.id}.title`}>{item.title}</Editable>
                  <Editable as="span" id={`fabricOSArchitecture.runtime.${item.id}.text`}>{item.text}</Editable>
                </article>
              )}
            </EditableList>

            <div className={styles.foundation}>
              <Editable as="span" id="fabricOSArchitecture.foundation.label" className={styles.foundationLabel}>Control foundation</Editable>
              <EditableList
                id="fabricOSArchitecture.foundation.items"
                items={foundations}
                keyOf={(item) => item.id}
                className={styles.foundationList}
                itemClassName={styles.foundationItem}
              >
                {(item) => <Editable as="span" id={`fabricOSArchitecture.foundation.${item.id}`}>{item.text}</Editable>}
              </EditableList>
            </div>
          </section>

          <section className={styles.executionPlane}>
            <Editable as="p" id="fabricOSArchitecture.execution.label" className={styles.planeLabel}>Approved Microsoft Fabric execution</Editable>
            <EditableList
              id="fabricOSArchitecture.execution.environments"
              items={environments}
              keyOf={(item) => item.id}
              className={styles.environmentFlow}
              itemClassName={styles.flowItem}
            >
              {(item) => (
                <div className={`${styles.environment} ${styles[item.id]}`}>
                  <Editable as="strong" id={`fabricOSArchitecture.execution.${item.id}.label`}>{item.label}</Editable>
                  <Editable as="span" id={`fabricOSArchitecture.execution.${item.id}.note`}>{item.note}</Editable>
                </div>
              )}
            </EditableList>
          </section>
        </div>

        <Editable as="p" id="fabricOSArchitecture.takeaway" className={styles.takeaway}>
          Agents accelerate the engineering loop. Humans retain every consequential decision.
        </Editable>
      </div>

      <BottomBar text={<Editable as="span" id="fabricOSArchitecture.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
