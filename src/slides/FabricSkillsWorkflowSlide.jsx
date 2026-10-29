import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './FabricSkillsWorkflowSlide.module.css'

const steps = [
  {
    id: 'install',
    number: '1',
    title: 'Install the bundle',
    description: 'Add the Fabric marketplace and install the complete fabric-skills bundle.',
  },
  {
    id: 'authenticate',
    number: '2',
    title: 'Authenticate',
    description: 'Sign in with Azure CLI so Fabric operations can obtain the required access tokens.',
  },
  {
    id: 'ask',
    number: '3',
    title: 'Describe the outcome',
    description: 'Ask for a Fabric task in natural language. Copilot selects the relevant skills and workflow.',
  },
  {
    id: 'single',
    number: '4',
    title: 'Or install just one skill',
    description: 'Use APM (Agent Package Manager) to add a single skill - and its MCP servers - to copilot, claude, cursor, codex, and more.',
  },
]

export default function FabricSkillsWorkflowSlide({ index }) {
  return (
    <Slide index={index} className={styles.fabricWorkflow}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="fabricSkillsWorkflow.eyebrow" className={styles.eyebrow}>How to use it</Editable>
          <Editable as="h2" id="fabricSkillsWorkflow.title" className={styles.title}>Install once. Ask in outcomes.</Editable>
        </header>

        <div className={styles.commandBlock}>
          <code>/plugin marketplace add microsoft/skills-for-fabric</code>
          <code>/plugin install fabric-skills@fabric-collection</code>
        </div>

        <EditableList
          id="fabricSkillsWorkflow.steps"
          items={steps}
          keyOf={(step) => step.id}
          className={styles.stepGrid}
          itemClassName={styles.stepItem}
        >
          {(step) => (
            <article className={styles.stepCard}>
              <span className={styles.number} aria-hidden="true">{step.number}</span>
              <div>
                <Editable as="h3" id={`fabricSkillsWorkflow.steps.${step.id}.title`} className={styles.stepTitle}>
                  {step.title}
                </Editable>
                <Editable
                  as="p"
                  id={`fabricSkillsWorkflow.steps.${step.id}.description`}
                  multiline
                  className={styles.stepDescription}
                >
                  {step.description}
                </Editable>
              </div>
            </article>
          )}
        </EditableList>

        <div className={styles.promptBlock}>
          <span className={styles.promptLabel}>Try this</span>
          <Editable as="p" id="fabricSkillsWorkflow.example" multiline className={styles.example}>
            Use Microsoft Fabric skills to design a medallion architecture for NYC taxi data.
          </Editable>
        </div>

        <Editable as="p" id="fabricSkillsWorkflow.apmNote" multiline className={styles.note}>
          <code>apm install microsoft/skills-for-fabric --skill sqldw-cli --target copilot</code> installs one skill plus any MCP servers and agents it needs, without pulling in the full bundle.
        </Editable>
      </div>

      <BottomBar text={<Editable as="span" id="fabricSkillsWorkflow.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
