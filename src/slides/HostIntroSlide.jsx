import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './HostIntroSlide.module.css'

export default function HostIntroSlide({ index }) {
  return (
    <Slide index={index} className={styles.hostIntro}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.layout}>
          <img className={styles.avatar} src="/presenters/remco.jpg" alt="Remco van Dam" />
          <div className={styles.copy}>
            <Editable as="p" id="hosts.eyebrow" className={styles.eyebrow}>Your guide for today</Editable>
            <Editable as="h2" id="hosts.title" className={styles.title}>Meet Remco van Dam</Editable>
            <Editable as="p" id="hosts.role" className={styles.role}>Solution Engineer, Data & AI</Editable>
            <Editable as="p" id="hosts.subtitle" multiline className={styles.subtitle}>
              AI agent squad lead and Microsoft Certified Trainer, focused on turning complex data and AI
              challenges into practical Fabric outcomes. I will guide today&apos;s journey from vibe coding
              to spec driven development.
            </Editable>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="hosts.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
