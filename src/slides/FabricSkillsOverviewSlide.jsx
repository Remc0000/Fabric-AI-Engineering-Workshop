import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './FabricSkillsOverviewSlide.module.css'

const capabilities = [
  {
    id: 'operate',
    marker: '01',
    title: 'Operate',
    description: 'Apply workload-aware guidance for deployment, monitoring, governance, and day-two operations.',
  },
  {
    id: 'build',
    marker: '02',
    title: 'Build',
    description: 'Author SQL, Spark, Lakehouse, Power BI, Eventhouse, Eventstream, and Dataflows solutions.',
  },
  {
    id: 'modernize',
    marker: '03',
    title: 'Modernize',
    description: 'Plan migrations and end-to-end medallion architectures with Fabric-specific patterns.',
  },
]

export default function FabricSkillsOverviewSlide({ index }) {
  return (
    <Slide index={index} className={styles.fabricSkills}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="fabricSkillsOverview.eyebrow" className={styles.eyebrow}>Microsoft Fabric Skills</Editable>
          <Editable as="h2" id="fabricSkillsOverview.title" className={styles.title}>Fabric expertise, packaged for your agent</Editable>
          <Editable as="p" id="fabricSkillsOverview.subtitle" multiline className={styles.subtitle}>
            Reusable instructions teach Copilot the APIs, query patterns, workload conventions, and operational practices behind Microsoft Fabric.
          </Editable>
        </header>

        <EditableList
          id="fabricSkillsOverview.capabilities"
          items={capabilities}
          keyOf={(item) => item.id}
          className={styles.cardGrid}
          itemClassName={styles.cardItem}
        >
          {(item) => (
            <article className={styles.card}>
              <span className={styles.marker} aria-hidden="true">{item.marker}</span>
              <Editable as="h3" id={`fabricSkillsOverview.capabilities.${item.id}.title`} className={styles.cardTitle}>
                {item.title}
              </Editable>
              <Editable
                as="p"
                id={`fabricSkillsOverview.capabilities.${item.id}.description`}
                multiline
                className={styles.cardDescription}
              >
                {item.description}
              </Editable>
            </article>
          )}
        </EditableList>
      </div>

      <BottomBar text={<Editable as="span" id="fabricSkillsOverview.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
