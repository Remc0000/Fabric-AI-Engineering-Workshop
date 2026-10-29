import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './FabricSquadSlide.module.css'

const leftRoles = [
  {
    id: 'architect',
    title: 'Solution architect',
    text: 'Owns target architecture, workload boundaries, patterns, and non-functional requirements.',
  },
  {
    id: 'spec',
    title: 'Spec lead',
    text: 'Turns business briefs and profiling evidence into reviewed OpenSpec contracts and tasks.',
  },
  {
    id: 'engineer',
    title: 'Fabric engineer',
    text: 'Implements notebooks, SQL, pipelines, semantic models, and deployment-ready artifacts.',
  },
]

const rightRoles = [
  {
    id: 'reviewer',
    title: 'Code reviewer',
    text: 'Challenges correctness, security, performance, maintainability, and Fabric anti-patterns.',
  },
  {
    id: 'quality',
    title: 'Test & quality',
    text: 'Builds validation, reconciliation, data-quality scenarios, and regression checks.',
  },
  {
    id: 'operations',
    title: 'Governance & ops',
    text: 'Covers naming, lineage, access, CI/CD, monitoring, cost, and production readiness.',
  },
]

function RoleColumn({ id, roles }) {
  return (
    <EditableList
      id={id}
      items={roles}
      keyOf={(role) => role.id}
      className={styles.roleColumn}
      itemClassName={styles.roleItem}
    >
      {(role) => (
        <article className={styles.roleCard}>
          <Editable as="h3" id={`${id}.${role.id}.title`}>{role.title}</Editable>
          <Editable as="p" id={`${id}.${role.id}.text`} multiline>{role.text}</Editable>
        </article>
      )}
    </EditableList>
  )
}

export default function FabricSquadSlide({ index }) {
  return (
    <Slide index={index} className={styles.squad}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <div>
            <Editable as="p" id="fabricSquad.eyebrow" className={styles.eyebrow}>Human-led, multi-agent delivery</Editable>
            <Editable as="h2" id="fabricSquad.title" className={styles.title}>What could a Fabric squad look like?</Editable>
          </div>
          <Editable as="p" id="fabricSquad.link" className={styles.link}>github.com/bradygaster/squad</Editable>
        </header>

        <div className={styles.squadMap}>
          <RoleColumn id="fabricSquad.leftRoles" roles={leftRoles} />

          <div className={styles.center}>
            <div className={styles.human}>
              <Editable as="span" id="fabricSquad.human.label">Human lead</Editable>
              <Editable as="p" id="fabricSquad.human.text">Sets priorities, approves specs, and owns final decisions.</Editable>
            </div>
            <span className={styles.arrow} aria-hidden="true">↓</span>
            <div className={styles.hub}>
              <Editable as="span" id="fabricSquad.hub.label">Squad</Editable>
              <Editable as="strong" id="fabricSquad.hub.title">Fabric delivery</Editable>
              <Editable as="p" id="fabricSquad.hub.text">Routes parallel work to specialists.</Editable>
            </div>
            <div className={styles.memory}>
              <Editable as="span" id="fabricSquad.memory.label">Shared brain</Editable>
              <Editable as="p" id="fabricSquad.memory.text">Decisions, routing, history, and learnings persist in .squad/</Editable>
            </div>
          </div>

          <RoleColumn id="fabricSquad.rightRoles" roles={rightRoles} />
        </div>

        <Editable as="p" id="fabricSquad.note" multiline className={styles.note}>
          Squad coordinates specialists in parallel while keeping the human accountable for priorities, review, and approval. Squad 2.0 projects the same team into Copilot, Claude Code, Cursor, Codex, and more, wiring native MCP servers for each host.
        </Editable>
      </div>

      <BottomBar text={<Editable as="span" id="fabricSquad.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
