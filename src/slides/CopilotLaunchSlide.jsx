import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import styles from './CopilotLaunchSlide.module.css'

const flags = [
  {
    id: 'yolo',
    flag: '--yolo',
    description: 'Allows all tools, paths, and URLs without confirmation. Use only in a trusted workshop folder.',
  },
  {
    id: 'banner',
    flag: '--banner',
    description: 'Shows the Copilot CLI startup banner when the session opens.',
  },
  {
    id: 'experimental',
    flag: '--experimental',
    description: 'Enables experimental CLI features for this session.',
  },
  {
    id: 'remote',
    flag: '--remote',
    description: 'Enables remote control of the session from GitHub web and mobile.',
  },
]

export default function CopilotLaunchSlide({ index }) {
  return (
    <Slide index={index} className={styles.copilotLaunch}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <header className={styles.header}>
          <Editable as="p" id="copilotLaunch.eyebrow" className={styles.eyebrow}>Magic shortcut</Editable>
          <Editable as="h2" id="copilotLaunch.title" className={styles.title}>Start Copilot in workshop mode</Editable>
        </header>

        <div className={styles.commandBlock}>
          <span className={styles.prompt} aria-hidden="true">&gt;</span>
          <code>D:\copilot.exe --yolo --banner --experimental --remote</code>
        </div>

        <EditableList
          id="copilotLaunch.flags"
          items={flags}
          keyOf={(flag) => flag.id}
          className={styles.flagGrid}
          itemClassName={styles.flagItem}
        >
          {(flag) => (
            <article className={styles.flagCard}>
              <code className={styles.flag}>{flag.flag}</code>
              <Editable
                as="p"
                id={`copilotLaunch.flags.${flag.id}.description`}
                multiline
                className={styles.description}
              >
                {flag.description}
              </Editable>
            </article>
          )}
        </EditableList>
      </div>

      <BottomBar text={<Editable as="span" id="copilotLaunch.footer">Agentic Engineering for Data</Editable>} />
    </Slide>
  )
}
