import { AchievementIllustration } from '../../../template/ui/illustrations/people/achievement.illustration'
import { CollaborationIllustration } from '../../../template/ui/illustrations/people/collaboration.illustration'
import { PersonIllustration } from '../../../template/ui/illustrations/people/person.illustration'
import { PresentationIllustration } from '../../../template/ui/illustrations/people/presentation.illustration'
import { ReadingIllustration } from '../../../template/ui/illustrations/people/reading.illustration'
import { SupportAgentIllustration } from '../../../template/ui/illustrations/people/support.agent.illustration'
import type { IllustrationEntry } from './illustration.types'

export const peopleIllustrations: IllustrationEntry[] = [
  {
    id: 'achievement',
    name: 'Achievement',
    componentName: 'AchievementIllustration',
    description: 'Steady progress toward the next milestone.',
    category: 'people',
    isNew: true,
    component: AchievementIllustration,
  },
  {
    id: 'collaboration',
    name: 'Collaboration',
    componentName: 'CollaborationIllustration',
    description: 'Two people sharing ideas around a workspace.',
    category: 'people',
    isNew: true,
    component: CollaborationIllustration,
  },
  {
    id: 'person',
    name: 'Person',
    componentName: 'PersonIllustration',
    description: 'A friendly character to welcome new members.',
    category: 'people',
    isNew: true,
    component: PersonIllustration,
  },
  {
    id: 'presentation',
    name: 'Presentation',
    componentName: 'PresentationIllustration',
    description: 'A presenter turning ideas into a clear story.',
    category: 'people',
    isNew: true,
    component: PresentationIllustration,
  },
  {
    id: 'reading',
    name: 'Reading',
    componentName: 'ReadingIllustration',
    description: 'A quiet moment with a favorite book.',
    category: 'people',
    isNew: true,
    component: ReadingIllustration,
  },
  {
    id: 'support-agent',
    name: 'Support agent',
    componentName: 'SupportAgentIllustration',
    description: 'A helpful person ready to answer questions.',
    category: 'people',
    isNew: true,
    component: SupportAgentIllustration,
  },
]
