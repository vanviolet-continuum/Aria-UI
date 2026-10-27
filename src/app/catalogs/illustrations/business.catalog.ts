import { BrainstormingIllustration } from '../../../template/ui/illustrations/business/brainstorming.illustration'
import { DeskIllustration } from '../../../template/ui/illustrations/business/desk.illustration'
import { GrowthIllustration } from '../../../template/ui/illustrations/business/growth.illustration'
import { HandshakeIllustration } from '../../../template/ui/illustrations/business/handshake.illustration'
import { InterviewIllustration } from '../../../template/ui/illustrations/business/interview.illustration'
import { MeetingIllustration } from '../../../template/ui/illustrations/business/meeting.illustration'
import { ProjectPlanningIllustration } from '../../../template/ui/illustrations/business/project.planning.illustration'
import { RemoteWorkIllustration } from '../../../template/ui/illustrations/business/remote.work.illustration'
import { StrategyIllustration } from '../../../template/ui/illustrations/business/strategy.illustration'
import { TargetIllustration } from '../../../template/ui/illustrations/business/target.illustration'
import type { IllustrationEntry } from './illustration.types'

export const businessIllustrations: IllustrationEntry[] = [
  {
    id: 'brainstorming',
    name: 'Brainstorming',
    componentName: 'BrainstormingIllustration',
    description: 'Fresh ideas taking shape through conversation.',
    category: 'business',
    isNew: true,
    component: BrainstormingIllustration,
  },
  {
    id: 'desk',
    name: 'Desk setup',
    componentName: 'DeskIllustration',
    description: 'A tidy desk ready for a focused day.',
    category: 'business',
    isNew: true,
    component: DeskIllustration,
  },
  {
    id: 'growth',
    name: 'Growth',
    componentName: 'GrowthIllustration',
    description: 'New shoots and progress built step by step.',
    category: 'business',
    isNew: true,
    component: GrowthIllustration,
  },
  {
    id: 'handshake',
    name: 'Handshake',
    componentName: 'HandshakeIllustration',
    description: 'A shared commitment and the start of a partnership.',
    category: 'business',
    isNew: true,
    component: HandshakeIllustration,
  },
  {
    id: 'interview',
    name: 'Interview',
    componentName: 'InterviewIllustration',
    description: 'A good conversation and an opportunity ahead.',
    category: 'business',
    isNew: true,
    component: InterviewIllustration,
  },
  {
    id: 'meeting',
    name: 'Meeting',
    componentName: 'MeetingIllustration',
    description: 'People coming together around a shared plan.',
    category: 'business',
    isNew: true,
    component: MeetingIllustration,
  },
  {
    id: 'project-planning',
    name: 'Project planning',
    componentName: 'ProjectPlanningIllustration',
    description: 'Milestones and timelines that keep work moving.',
    category: 'business',
    isNew: true,
    component: ProjectPlanningIllustration,
  },
  {
    id: 'remote-work',
    name: 'Remote work',
    componentName: 'RemoteWorkIllustration',
    description: 'A comfortable workspace wherever home may be.',
    category: 'business',
    isNew: true,
    component: RemoteWorkIllustration,
  },
  {
    id: 'strategy',
    name: 'Strategy',
    componentName: 'StrategyIllustration',
    description: 'Thinking ahead and choosing the next move.',
    category: 'business',
    isNew: true,
    component: StrategyIllustration,
  },
  {
    id: 'target',
    name: 'Target',
    componentName: 'TargetIllustration',
    description: 'Clear focus on a goal worth reaching.',
    category: 'business',
    isNew: true,
    component: TargetIllustration,
  },
]
