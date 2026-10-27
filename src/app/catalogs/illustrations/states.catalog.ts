import { EmptyIllustration } from '../../../template/ui/illustrations/states/empty.illustration'
import { ErrorIllustration } from '../../../template/ui/illustrations/states/error.illustration'
import { HelpIllustration } from '../../../template/ui/illustrations/states/help.illustration'
import { InfoIllustration } from '../../../template/ui/illustrations/states/info.illustration'
import { LoadingIllustration } from '../../../template/ui/illustrations/states/loading.illustration'
import { MaintenanceIllustration } from '../../../template/ui/illustrations/states/maintenance.illustration'
import { NotFoundIllustration } from '../../../template/ui/illustrations/states/not.found.illustration'
import { OfflineIllustration } from '../../../template/ui/illustrations/states/offline.illustration'
import { SearchIllustration } from '../../../template/ui/illustrations/states/search.illustration'
import { SuccessIllustration } from '../../../template/ui/illustrations/states/success.illustration'
import type { IllustrationEntry } from './illustration.types'

export const statesIllustrations: IllustrationEntry[] = [
  {
    id: 'empty',
    name: 'Empty state',
    componentName: 'EmptyIllustration',
    description: 'A fresh start before the first record.',
    category: 'states',
    component: EmptyIllustration,
  },
  {
    id: 'error',
    name: 'Error',
    componentName: 'ErrorIllustration',
    description: 'Failed requests and unexpected problems.',
    category: 'states',
    isNew: true,
    component: ErrorIllustration,
  },
  {
    id: 'help',
    name: 'Help & support',
    componentName: 'HelpIllustration',
    description: 'Helpful answers and a way forward.',
    category: 'states',
    isNew: true,
    component: HelpIllustration,
  },
  {
    id: 'info',
    name: 'Information',
    componentName: 'InfoIllustration',
    description: 'A clear explanation when a little context helps.',
    category: 'states',
    isNew: true,
    component: InfoIllustration,
  },
  {
    id: 'loading',
    name: 'Loading',
    componentName: 'LoadingIllustration',
    description: 'A little movement while work happens.',
    category: 'states',
    component: LoadingIllustration,
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    componentName: 'MaintenanceIllustration',
    description: 'Scheduled maintenance and a brief pause.',
    category: 'states',
    isNew: true,
    component: MaintenanceIllustration,
  },
  {
    id: 'not-found',
    name: 'Page not found',
    componentName: 'NotFoundIllustration',
    description: 'A friendly way back from a missing page.',
    category: 'states',
    component: NotFoundIllustration,
  },
  {
    id: 'offline',
    name: 'Offline',
    componentName: 'OfflineIllustration',
    description: 'Connection lost or a service unavailable.',
    category: 'states',
    isNew: true,
    component: OfflineIllustration,
  },
  {
    id: 'search',
    name: 'No search results',
    componentName: 'SearchIllustration',
    description: 'A helpful pause when nothing matches.',
    category: 'states',
    component: SearchIllustration,
  },
  {
    id: 'success',
    name: 'Success',
    componentName: 'SuccessIllustration',
    description: 'Completed tasks and successful actions.',
    category: 'states',
    isNew: true,
    component: SuccessIllustration,
  },
]
