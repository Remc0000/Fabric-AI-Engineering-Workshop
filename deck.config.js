import CoverSlide from './src/slides/CoverSlide.jsx'
import HostIntroSlide from './src/slides/HostIntroSlide.jsx'
import PrerequisitesSlide from './src/slides/PrerequisitesSlide.jsx'
import CopilotLaunchSlide from './src/slides/CopilotLaunchSlide.jsx'
import SetupOptionsSlide from './src/slides/SetupOptionsSlide.jsx'
import FabricSkillsOverviewSlide from './src/slides/FabricSkillsOverviewSlide.jsx'
import FabricSkillsWorkflowSlide from './src/slides/FabricSkillsWorkflowSlide.jsx'
import FabricVibeCodingSlide from './src/slides/FabricVibeCodingSlide.jsx'
import FabricCatalogSlide from './src/slides/FabricCatalogSlide.jsx'
import FabricConceptsSlide from './src/slides/FabricConceptsSlide.jsx'
import OpenSpecOverviewSlide from './src/slides/OpenSpecOverviewSlide.jsx'
import OpenSpecWorkflowSlide from './src/slides/OpenSpecWorkflowSlide.jsx'
import WorkshopStartSlide from './src/slides/WorkshopStartSlide.jsx'
import WorkshopRoadmapSlide from './src/slides/WorkshopRoadmapSlide.jsx'
import SpecFrameworkComparisonSlide from './src/slides/SpecFrameworkComparisonSlide.jsx'
import SpecToSquadBridgeSlide from './src/slides/SpecToSquadBridgeSlide.jsx'
import FabricSquadSlide from './src/slides/FabricSquadSlide.jsx'
import AreWeThereYetSlide from './src/slides/AreWeThereYetSlide.jsx'
import FabricEngineeringOSSlide from './src/slides/FabricEngineeringOSSlide.jsx'
import FabricEngineeringArchitectureSlide from './src/slides/FabricEngineeringArchitectureSlide.jsx'
import ProjectOsmosSlide from './src/slides/ProjectOsmosSlide.jsx'
import DeckMakingSlide from './src/slides/DeckMakingSlide.jsx'
import { GenericThankYouSlide as ThankYouSlide } from '@deckio/deck-engine'

export default {
  id: 'isd-offsite',
  title: 'Welcome @ Agentic Engineering for Data',
  subtitle: 'From vibe coding to spec driven development for Fabric',
  description: 'Agentic Engineering for Data workshop',
  meta: {
    seededTemplate: true,
    contentStatus: 'in-progress',
    contextPolicy: 'ignore-sample-content-until-user-replaces-it',
  },
  icon: '♠',
  accent: '#6366f1',
  theme: 'dark',
  appearance: 'dark',
  order: 1,
  hiddenSlides: [],
  slides: [
    CoverSlide,
    HostIntroSlide,
    PrerequisitesSlide,
    CopilotLaunchSlide,
    SetupOptionsSlide,
    FabricSkillsOverviewSlide,
    FabricSkillsWorkflowSlide,
    FabricVibeCodingSlide,
    FabricCatalogSlide,
    FabricConceptsSlide,
    OpenSpecOverviewSlide,
    OpenSpecWorkflowSlide,
    WorkshopRoadmapSlide,
    WorkshopStartSlide,
    SpecFrameworkComparisonSlide,
    SpecToSquadBridgeSlide,
    FabricSquadSlide,
    AreWeThereYetSlide,
    FabricEngineeringOSSlide,
    FabricEngineeringArchitectureSlide,
    ProjectOsmosSlide,
    DeckMakingSlide,
    ThankYouSlide,
  ],
}
