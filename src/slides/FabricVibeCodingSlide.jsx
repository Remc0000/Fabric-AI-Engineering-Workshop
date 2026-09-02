import { BottomBar, Editable, Slide } from '@deckio/deck-engine'
import styles from './FabricVibeCodingSlide.module.css'

const prompt = `Demo NYC Taxi Trip data is available here https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page
I want to create a Fabric project to look at this data. Follow the medallion architecture principles.

Download all data dictionaries and dimension/lookup tables in a Fabric Lakehouse Files section. Also, download all the trip data for 2025.

Then, from this data, create clean tables. Preserve the dimensional model, keep dimension tables and fact tables. If data is separated by months, then make sure your fact tables union across all year.

Perform any necessary data cleaning, and create an aggregate reporting view in the SQL Endpoint, which has all the core measures, by month.

Generate a Power BI semantic model, including the dimension tables, the fact tables and measures for all the aggregations you created in the SQL Endpoint view.

Before deploying, ask me which workspace you should use, or whether you should create a new one.`

export default function FabricVibeCodingSlide({ index }) {
  return (
    <Slide index={index} className={styles.vibeCoding}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="h2" id="fabricVibeCoding.title" className={styles.title}>This is vibe coding</Editable>
          <Editable as="p" id="fabricVibeCoding.subtitle" className={styles.subtitle}>
            https://github.com/microsoft/skills-for-fabric/blob/main/prompt_examples/NYCTaxi_MedallionArchitecture.txt
          </Editable>
        </header>

        <div className={styles.promptPanel}>
          <span className={styles.promptLabel}>Prompt</span>
          <Editable as="p" id="fabricVibeCoding.prompt" multiline className={styles.prompt}>
            {prompt}
          </Editable>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="fabricVibeCoding.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
