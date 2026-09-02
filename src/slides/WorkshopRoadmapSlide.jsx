import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './WorkshopRoadmapSlide.module.css'

const rounds = [
  {
    id: 'profile',
    number: '01',
    title: 'Profile & explore',
    text: 'Measure bronze, expose defects, and use /opsx-explore to decide what correct should mean.',
    outcome: 'Evidence before requirements',
  },
  {
    id: 'silver',
    number: '02',
    title: 'Specify & build silver',
    text: 'Create add-silver-layer, review the specs, then build valid trips plus a reasoned reject path.',
    outcome: 'No silent row loss',
  },
  {
    id: 'gold',
    number: '03',
    title: 'Specify & build gold',
    text: 'Design dimensions and a daily fact table that reconcile counts, fares, and zero-distance trips.',
    outcome: 'A Power BI-ready star schema',
  },
  {
    id: 'drift',
    number: '04',
    title: 'Respond to source drift',
    text: 'Detect what changed, amend the specification, re-apply, and prove the pipeline still satisfies the contract.',
    outcome: 'Change handled by design',
  },
]

export default function WorkshopRoadmapSlide({ index }) {
  return (
    <Slide index={index} className={styles.roadmap}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="workshopRoadmap.eyebrow" className={styles.eyebrow}>The workshop in four rounds</Editable>
          <Editable as="h2" id="workshopRoadmap.title" className={styles.title}>The spec is the work</Editable>
          <Editable as="p" id="workshopRoadmap.subtitle" multiline className={styles.subtitle}>
            You will turn an intentionally incomplete business brief into a tested medallion pipeline over real NYC taxi data.
          </Editable>
        </header>

        <EditableList
          id="workshopRoadmap.rounds"
          items={rounds}
          keyOf={(round) => round.id}
          className={styles.roundGrid}
          itemClassName={styles.roundItem}
        >
          {(round) => (
            <article className={styles.roundCard}>
              <span className={styles.number}>{round.number}</span>
              <Editable as="h3" id={`workshopRoadmap.rounds.${round.id}.title`}>{round.title}</Editable>
              <Editable as="p" id={`workshopRoadmap.rounds.${round.id}.text`} multiline className={styles.roundText}>
                {round.text}
              </Editable>
              <Editable as="p" id={`workshopRoadmap.rounds.${round.id}.outcome`} className={styles.outcome}>
                {round.outcome}
              </Editable>
            </article>
          )}
        </EditableList>

        <div className={styles.guardrail}>
          <Editable as="span" id="workshopRoadmap.guardrail.spec">Spec before code</Editable>
          <span aria-hidden="true">•</span>
          <Editable as="span" id="workshopRoadmap.guardrail.review">Human review before apply</Editable>
          <span aria-hidden="true">•</span>
          <Editable as="span" id="workshopRoadmap.guardrail.score">Run 99_validate and show the score</Editable>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="workshopRoadmap.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
