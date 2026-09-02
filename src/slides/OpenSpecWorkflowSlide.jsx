import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './OpenSpecWorkflowSlide.module.css'

const workflow = [
  {
    id: 'explore',
    command: '/opsx:explore',
    title: 'Explore',
    description: 'Think through the problem, constraints, and options without committing to a change.',
  },
  {
    id: 'propose',
    command: '/opsx:propose',
    title: 'Propose',
    description: 'Create the proposal, requirements, design, and implementation checklist.',
  },
  {
    id: 'apply',
    command: '/opsx:apply',
    title: 'Apply',
    description: 'Implement the agreed tasks while keeping progress visible in the specification.',
  },
  {
    id: 'archive',
    command: '/opsx:archive',
    title: 'Archive',
    description: 'Close the change and merge the approved specification into the source of truth.',
  },
]

export default function OpenSpecWorkflowSlide({ index }) {
  return (
    <Slide index={index} className={styles.openSpecWorkflow}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="openSpecWorkflow.eyebrow" className={styles.eyebrow}>Spec driven development</Editable>
          <Editable as="h2" id="openSpecWorkflow.title" className={styles.title}>From idea to implementation</Editable>
        </header>

        <div className={styles.installBlock}>
          <code>npm install -g @fission-ai/openspec@latest</code>
          <code>openspec init</code>
        </div>

        <EditableList
          id="openSpecWorkflow.steps"
          items={workflow}
          keyOf={(step) => step.id}
          className={styles.workflowGrid}
          itemClassName={styles.workflowItem}
        >
          {(step) => (
            <article className={styles.workflowCard}>
              <code className={styles.command}>{step.command}</code>
              <Editable as="h3" id={`openSpecWorkflow.steps.${step.id}.title`} className={styles.stepTitle}>
                {step.title}
              </Editable>
              <Editable
                as="p"
                id={`openSpecWorkflow.steps.${step.id}.description`}
                multiline
                className={styles.stepDescription}
              >
                {step.description}
              </Editable>
            </article>
          )}
        </EditableList>

        <Editable as="p" id="openSpecWorkflow.note" multiline className={styles.note}>
          Start with explore when the solution is unclear; go directly to propose when the outcome is already understood.
        </Editable>
      </div>

      <BottomBar text={<Editable as="span" id="openSpecWorkflow.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
