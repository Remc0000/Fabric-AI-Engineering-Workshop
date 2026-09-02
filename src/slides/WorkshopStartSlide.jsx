import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './WorkshopStartSlide.module.css'

export default function WorkshopStartSlide({ index }) {
  return (
    <Slide index={index} className={styles.workshopStart}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="workshopStart.eyebrow" className={styles.eyebrow}>Workshop setup · aka.ms/isdamw</Editable>
          <Editable as="h2" id="workshopStart.title" className={styles.title}>Land bronze before you begin</Editable>
          <Editable as="p" id="workshopStart.correction" multiline className={styles.correction}>
            Correction: the handout says the data is already ingested. It is not—complete this gate first.
          </Editable>
        </header>

        <div className={styles.contentGrid}>
          <div className={styles.steps}>
            <article className={styles.step}>
              <span className={styles.number}>01</span>
              <div>
                <Editable as="h3" id="workshopStart.download.title">Download the workshop</Editable>
                <Editable as="p" id="workshopStart.download.text">Open aka.ms/isdamw and download the project.</Editable>
              </div>
            </article>

            <article className={styles.step}>
              <span className={styles.number}>02</span>
              <div>
                <Editable as="h3" id="workshopStart.prompt.title">Run this prompt</Editable>
                <Editable as="p" id="workshopStart.prompt.text">Let your agent provision Fabric and execute the ingest notebook.</Editable>
              </div>
            </article>

            <article className={styles.step}>
              <span className={styles.number}>03</span>
              <div>
                <Editable as="h3" id="workshopStart.verify.title">Wait for three PASS results</Editable>
                <Editable as="p" id="workshopStart.verify.text">Only then continue with the participant PDF.</Editable>
              </div>
            </article>
          </div>

          <div className={styles.promptCard}>
            <Editable as="p" id="workshopStart.prompt.label" className={styles.promptLabel}>Copy into GitHub Copilot</Editable>
            <Editable as="p" id="workshopStart.prompt.body" multiline className={styles.promptBody}>
              Create a new Microsoft Fabric workspace named TaxiAnalysis on my active capacity. Create a schema-enabled lakehouse named lh_taxi. Import notebooks/00_bronze_ingest.ipynb, attach lh_taxi as its default lakehouse, run it, and report every final PASS/FAIL row-count check. Stop if any check fails.
            </Editable>
            <div className={styles.expected}>
              <Editable as="span" id="workshopStart.expected.trips">3,643,287 trips</Editable>
              <Editable as="span" id="workshopStart.expected.zones">265 zones</Editable>
              <Editable as="span" id="workshopStart.expected.holidays">69,557 holidays</Editable>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="workshopStart.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
