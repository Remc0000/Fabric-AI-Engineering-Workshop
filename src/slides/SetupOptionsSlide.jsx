import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './SetupOptionsSlide.module.css'

export default function SetupOptionsSlide({ index }) {
  return (
    <Slide index={index} className={styles.setupOptions}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="setupOptions.eyebrow" className={styles.eyebrow}>Choose your setup path</Editable>
          <Editable as="h2" id="setupOptions.title" className={styles.title}>Fast track or lean install?</Editable>
        </header>

        <div className={styles.optionGrid}>
          <article className={styles.optionCard}>
            <div className={styles.optionHeader}>
              <Editable as="span" id="setupOptions.full.badge" className={styles.badge}>Everything included</Editable>
              <Editable as="h3" id="setupOptions.full.title" className={styles.optionTitle}>Full bootstrap</Editable>
            </div>
            <Editable as="p" id="setupOptions.full.description" multiline className={styles.optionDescription}>
              Follow the first two setup guides for an immediately ready environment. This also installs tools we will not use today.
            </Editable>
            <div className={styles.guideList}>
              <code>1_GHCP_Init.md</code>
              <code>2_Fab_Init.md</code>
            </div>
            <Editable as="p" id="setupOptions.full.extras" multiline className={styles.extras}>
              Also covers Azure CLI, GitHub CLI, Python 3.13, Fabric CLI, fabric-cicd, Spec Kit, Handy, and Power BI plugins.
            </Editable>
            <span className={styles.repo}>github.com/Remc0000/GithubCopilot4Fabric</span>
          </article>

          <article className={`${styles.optionCard} ${styles.recommended}`}>
            <div className={styles.optionHeader}>
              <Editable as="span" id="setupOptions.lean.badge" className={styles.badge}>Recommended today</Editable>
              <Editable as="h3" id="setupOptions.lean.title" className={styles.optionTitle}>Lean workshop setup</Editable>
            </div>
            <Editable as="p" id="setupOptions.lean.description" multiline className={styles.optionDescription}>
              Install only the Fabric skills and OpenSpec workflow used in this exercise.
            </Editable>
            <div className={styles.commandList}>
              <code>/plugin marketplace add microsoft/skills-for-fabric</code>
              <code>/plugin install fabric-skills@fabric-collection</code>
              <code>npm install -g @fission-ai/openspec@latest</code>
              <code>openspec init</code>
            </div>
          </article>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="setupOptions.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
