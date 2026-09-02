import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './FabricConceptsSlide.module.css'

const concepts = [
  {
    id: 'skill',
    number: '01',
    title: 'Skill',
    tagline: 'Reusable expertise',
    description: 'Instructions, patterns, guardrails, and examples that teach the agent how to perform a specific Fabric task well.',
    example: 'e2e-medallion-architecture',
  },
  {
    id: 'agent',
    number: '02',
    title: 'Agent',
    tagline: 'Role-based orchestrator',
    description: 'A specialist persona that interprets the goal, coordinates multiple skills, and delegates work across workloads.',
    example: 'FabricDataEngineer',
  },
  {
    id: 'mcp',
    number: '03',
    title: 'MCP server',
    tagline: 'Live tool connection',
    description: 'A runtime endpoint that lets the agent discover artifacts, inspect schemas, execute queries, or modify external systems.',
    example: 'FabricIQ',
  },
  {
    id: 'cli',
    number: '04',
    title: 'Fabric CLI',
    tagline: 'Repeatable execution',
    description: 'The open-source fab command surface for exploring, creating, and automating Fabric resources from terminals, scripts, and CI/CD.',
    example: 'fab ls',
  },
]

export default function FabricConceptsSlide({ index }) {
  return (
    <Slide index={index} className={styles.fabricConcepts}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="fabricConcepts.eyebrow" className={styles.eyebrow}>Know the building blocks</Editable>
          <Editable as="h2" id="fabricConcepts.title" className={styles.title}>Four building blocks for Fabric</Editable>
        </header>

        <EditableList
          id="fabricConcepts.items"
          items={concepts}
          keyOf={(item) => item.id}
          className={styles.conceptGrid}
          itemClassName={styles.conceptItem}
        >
          {(item) => (
            <article className={styles.conceptCard}>
              <span className={styles.number} aria-hidden="true">{item.number}</span>
              <Editable as="p" id={`fabricConcepts.items.${item.id}.tagline`} className={styles.tagline}>
                {item.tagline}
              </Editable>
              <Editable as="h3" id={`fabricConcepts.items.${item.id}.title`} className={styles.conceptTitle}>
                {item.title}
              </Editable>
              <Editable
                as="p"
                id={`fabricConcepts.items.${item.id}.description`}
                multiline
                className={styles.description}
              >
                {item.description}
              </Editable>
              <code>{item.example}</code>
            </article>
          )}
        </EditableList>

        <div className={styles.flow}>
          <Editable as="span" id="fabricConcepts.flow.agent">Agent orchestrates</Editable>
          <span aria-hidden="true">→</span>
          <Editable as="span" id="fabricConcepts.flow.skill">Skill guides</Editable>
          <span aria-hidden="true">→</span>
          <Editable as="span" id="fabricConcepts.flow.cli">Fabric CLI executes</Editable>
          <span aria-hidden="true">↔</span>
          <Editable as="span" id="fabricConcepts.flow.mcp">MCP connects live tools</Editable>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="fabricConcepts.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
