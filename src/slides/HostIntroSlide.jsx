import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './HostIntroSlide.module.css'

const hosts = [
  {
    id: 'remco',
    name: 'Remco van Dam',
    image: '/presenters/remco.jpg',
    role: 'Solution Engineer, Data & AI',
    bio: 'AI agent squad lead and Microsoft Certified Trainer, focused on turning complex data and AI challenges into practical Fabric outcomes.',
  },
  {
    id: 'zeeshan',
    name: 'Zeeshan Ali',
    image: '/presenters/zeeshan.jpg',
    role: 'Senior Strategic Solution Engineer, Data & AI',
    bio: 'Solution architect and technical advisor specializing in Microsoft Fabric, Azure Databricks, data modernization, and hands-on customer enablement.',
  },
  {
    id: 'eva',
    name: 'Eva Locusteanu',
    image: '/presenters/eva.jpg',
    role: 'Solution Architect, Data & AI',
    bio: 'Microsoft technical consultant bringing together data analytics, applied AI, computer vision, and strategic customer delivery.',
  },
]

export default function HostIntroSlide({ index }) {
  return (
    <Slide index={index} className={styles.hostIntro}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="hosts.eyebrow" className={styles.eyebrow}>Your guides for today</Editable>
          <Editable as="h2" id="hosts.title" className={styles.title}>Meet your hosts</Editable>
          <Editable as="p" id="hosts.subtitle" className={styles.subtitle}>
            Remco, Zeeshan, and Eva will guide today&apos;s journey from vibe coding to spec driven development.
          </Editable>
        </header>

        <EditableList
          id="hosts.people"
          items={hosts}
          keyOf={(host) => host.id}
          className={styles.hostGrid}
          itemClassName={styles.hostItem}
        >
          {(host) => (
            <article className={styles.hostCard}>
              <img className={styles.avatar} src={host.image} alt={host.name} />
              <div className={styles.hostCopy}>
                <Editable as="p" id={`hosts.people.${host.id}.role`} className={styles.role}>{host.role}</Editable>
                <Editable as="h3" id={`hosts.people.${host.id}.name`} className={styles.name}>{host.name}</Editable>
                <Editable as="p" id={`hosts.people.${host.id}.bio`} multiline className={styles.bio}>{host.bio}</Editable>
              </div>
            </article>
          )}
        </EditableList>
      </div>

      <BottomBar text={<Editable as="span" id="hosts.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
