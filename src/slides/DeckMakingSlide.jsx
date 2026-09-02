import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './DeckMakingSlide.module.css'

const sessionSteps = [
  { id: 'platform', command: 'update → scaffold → run', text: 'Updated Deckio, created this React deck, and started Vite.' },
  { id: 'grounding', command: 'inspect → ground', text: 'Read official repositories, workshop files, and current documentation.' },
  { id: 'enrich', command: 'connect → verify', text: 'Installed LinkedIn MCP and used verified presenter data and photos.' },
  { id: 'iterate', command: 'edit → render → refine', text: 'Changed slides live, built the deck, and visually checked the results.' },
]

export default function DeckMakingSlide({ index }) {
  return (
    <Slide index={index} className={styles.deckMaking}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="deckMaking.eyebrow" className={styles.eyebrow}>The deck is part of the demo</Editable>
          <Editable as="h2" id="deckMaking.title" className={styles.title}>How did I make these slides?</Editable>
          <Editable as="p" id="deckMaking.subtitle" multiline className={styles.subtitle}>
            Not by hand in PowerPoint. We built them together, in this session, as a live software project.
          </Editable>
        </header>

        <div className={styles.sessionGrid}>
          <div className={styles.conversation}>
            <div className={styles.terminalTop}>
              <span />
              <span />
              <span />
              <Editable as="strong" id="deckMaking.terminal.title">D:\ISD-Offsite</Editable>
            </div>
            <EditableList
              id="deckMaking.steps"
              items={sessionSteps}
              keyOf={(step) => step.id}
              className={styles.stepList}
              itemClassName={styles.stepItem}
            >
              {(step) => (
                <div className={styles.step}>
                  <Editable as="code" id={`deckMaking.steps.${step.id}.command`}>{step.command}</Editable>
                  <Editable as="p" id={`deckMaking.steps.${step.id}.text`} multiline>{step.text}</Editable>
                </div>
              )}
            </EditableList>
          </div>

          <div className={styles.result}>
            <Editable as="p" id="deckMaking.result.label" className={styles.resultLabel}>One conversation produced</Editable>
            <Editable as="strong" id="deckMaking.result.slides">A reusable coded deck</Editable>
            <Editable as="span" id="deckMaking.result.plus">+</Editable>
            <Editable as="strong" id="deckMaking.result.sources">Grounded technical content</Editable>
            <Editable as="span" id="deckMaking.result.plus2">+</Editable>
            <Editable as="strong" id="deckMaking.result.feedback">Live human direction</Editable>
          </div>
        </div>

        <Editable as="p" id="deckMaking.closer" multiline className={styles.closer}>
          This is agentic engineering made real: Spec. Build. Review. Ship.
        </Editable>
      </div>

      <BottomBar text={<Editable as="span" id="deckMaking.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
