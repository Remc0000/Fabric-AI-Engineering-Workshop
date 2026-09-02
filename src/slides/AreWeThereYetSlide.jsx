import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './AreWeThereYetSlide.module.css'

export default function AreWeThereYetSlide({ index }) {
  return (
    <Slide index={index} className={styles.areWeThere}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <Editable as="p" id="areWeThere.eyebrow" className={styles.eyebrow}>A team is only the beginning</Editable>
        <Editable as="h2" id="areWeThere.title" className={styles.title}>Are we there yet?</Editable>
        <Editable as="p" id="areWeThere.subtitle" multiline className={styles.subtitle}>
          Multiple agents can move faster—but speed without boundaries, standards, and production controls is still just faster chaos.
        </Editable>

        <div className={styles.questionGrid}>
          <div className={styles.question}>
            <Editable as="span" id="areWeThere.questions.specs">Great specifications</Editable>
            <strong>✓</strong>
          </div>
          <div className={styles.question}>
            <Editable as="span" id="areWeThere.questions.skills">The right skills</Editable>
            <strong>✓</strong>
          </div>
          <div className={styles.question}>
            <Editable as="span" id="areWeThere.questions.roles">Specialist roles</Editable>
            <strong>✓</strong>
          </div>
          <div className={styles.question}>
            <Editable as="span" id="areWeThere.questions.governance">Governed decisions</Editable>
            <strong>?</strong>
          </div>
          <div className={styles.question}>
            <Editable as="span" id="areWeThere.questions.quality">Quality standards</Editable>
            <strong>?</strong>
          </div>
          <div className={styles.question}>
            <Editable as="span" id="areWeThere.questions.delivery">Production delivery</Editable>
            <strong>?</strong>
          </div>
        </div>

        <Editable as="p" id="areWeThere.answer" className={styles.answer}>
          A squad needs an operating system.
        </Editable>
      </div>

      <BottomBar text={<Editable as="span" id="areWeThere.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
