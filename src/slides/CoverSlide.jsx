import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './CoverSlide.module.css'

export default function CoverSlide() {
  return (
    <Slide index={0} className={styles.cover}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <Editable as="p" id="cover.eyebrow" className={styles.eyebrow}>ISD Offsite</Editable>
          <h1>
            <Editable as="span" id="cover.titleBefore">Welcome @ </Editable>
            <Editable as="span" id="cover.titleHighlight" className={styles.highlight}>Agentic Engineering for Data</Editable>
          </h1>
          <Editable as="p" id="cover.subtitle" multiline className={styles.subtitle}>
            From vibe coding to spec driven development for Fabric
          </Editable>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Project</span>
              <Editable as="span" id="cover.project" className={styles.metaValue}>Agentic Engineering for Data</Editable>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Date</span>
              <span className={styles.metaValue}>2026</span>
            </div>
          </div>
        </div>

        <div className={styles.watermark} aria-hidden="true">
          <img src="/deckio.png" alt="" className={styles.watermarkIcon} />
          <span className={styles.watermarkText}>DECKIO</span>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="cover.footer">ISD Offsite</Editable>} />
    </Slide>
  )
}
