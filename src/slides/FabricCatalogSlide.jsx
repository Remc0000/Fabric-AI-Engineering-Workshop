import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './FabricCatalogSlide.module.css'

const skills = [
  'activator-cli',
  'azmon-mirroredcatalogs-operations-cli',
  'databricks-migration',
  'dataflows-cli',
  'deployment-pipelines-authoring-cli',
  'e2e-fabric-cost-estimation',
  'e2e-medallion-architecture',
  'eventhouse-cli',
  'eventschemaset-cli',
  'eventstream-cli',
  'fabriciq',
  'fabriciq-ontology-cli',
  'git-integration-operations-cli',
  'hdinsight-migration',
  'pipeline-migration',
  'powerbi-report-authoring',
  'powerbi-report-design',
  'powerbi-report-management',
  'powerbi-report-planning',
  'search-consumption-cli',
  'semantic-model-authoring',
  'spark-cli',
  'sqldb-cli',
  'sqldw-cli',
  'synapse-migration',
  'variable-library-cli',
].map((name) => ({ id: name, name }))

const agents = [
  'FabricAdmin',
  'FabricAppDev',
  'FabricDataEngineer',
  'FabricIQ',
  'FabricMigrationEngineer',
].map((name) => ({ id: name, name }))

const mcpServers = [
  { id: 'fabric-iq', name: 'FabricIQ' },
  { id: 'sql-endpoint', name: 'fabric-sqlendpoint' },
  { id: 'powerbi-modeling', name: 'powerbi-modeling-mcp' },
]

export default function FabricCatalogSlide({ index }) {
  return (
    <Slide index={index} className={styles.fabricCatalog}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="fabricCatalog.eyebrow" className={styles.eyebrow}>Fabric Skills 0.3.13</Editable>
          <Editable as="h2" id="fabricCatalog.title" className={styles.title}>The complete toolbox</Editable>
        </header>

        <section className={styles.catalogSection}>
          <Editable as="h3" id="fabricCatalog.skillsTitle" className={styles.sectionTitle}>26 skills</Editable>
          <EditableList
            id="fabricCatalog.skills"
            items={skills}
            keyOf={(item) => item.id}
            className={styles.skillGrid}
          >
            {(item) => (
              <Editable as="span" id={`fabricCatalog.skills.${item.id}.name`} className={styles.skillTag}>
                {item.name}
              </Editable>
            )}
          </EditableList>
        </section>

        <div className={styles.bottomGrid}>
          <section className={styles.catalogSection}>
            <Editable as="h3" id="fabricCatalog.agentsTitle" className={styles.sectionTitle}>5 agents</Editable>
            <EditableList
              id="fabricCatalog.agents"
              items={agents}
              keyOf={(item) => item.id}
              className={styles.compactGrid}
            >
              {(item) => (
                <Editable as="span" id={`fabricCatalog.agents.${item.id}.name`} className={styles.agentTag}>
                  {item.name}
                </Editable>
              )}
            </EditableList>
          </section>

          <section className={styles.catalogSection}>
            <Editable as="h3" id="fabricCatalog.mcpTitle" className={styles.sectionTitle}>3 MCP servers</Editable>
            <EditableList
              id="fabricCatalog.mcpServers"
              items={mcpServers}
              keyOf={(item) => item.id}
              className={styles.compactGrid}
            >
              {(item) => (
                <Editable as="span" id={`fabricCatalog.mcpServers.${item.id}.name`} className={styles.mcpTag}>
                  {item.name}
                </Editable>
              )}
            </EditableList>
          </section>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="fabricCatalog.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
