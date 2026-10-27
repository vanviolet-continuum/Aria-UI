import type { IllustrationEntry } from './illustration.types'
import { natureIllustrations } from './nature.catalog'
import { travelIllustrations } from './travel.catalog'
import { foodIllustrations } from './food.catalog'
import { healthIllustrations } from './health.catalog'
import { technologyIllustrations } from './technology.catalog'
import { financeIllustrations } from './finance.catalog'
import { businessIllustrations } from './business.catalog'
import { creativeIllustrations } from './creative.catalog'
import { scienceIllustrations } from './science.catalog'
import { lifestyleIllustrations } from './lifestyle.catalog'
import { peopleIllustrations } from './people.catalog'
import { educationIllustrations } from './education.catalog'
import { objectsIllustrations } from './objects.catalog'
import { decorationIllustrations } from './decoration.catalog'
import { statesIllustrations } from './states.catalog'
import { workspaceIllustrations } from './workspace.catalog'
import { filesIllustrations } from './files.catalog'
import { communicationIllustrations } from './communication.catalog'
import { securityIllustrations } from './security.catalog'
import { commerceIllustrations } from './commerce.catalog'
import { infrastructureIllustrations } from './infrastructure.catalog'

export type { IllustrationCategory, IllustrationEntry } from './illustration.types'
export { illustrationCategories } from './illustration.categories'

export const illustrationCatalog: IllustrationEntry[] = [
  ...natureIllustrations,
  ...travelIllustrations,
  ...foodIllustrations,
  ...healthIllustrations,
  ...technologyIllustrations,
  ...financeIllustrations,
  ...businessIllustrations,
  ...creativeIllustrations,
  ...scienceIllustrations,
  ...lifestyleIllustrations,
  ...peopleIllustrations,
  ...educationIllustrations,
  ...objectsIllustrations,
  ...decorationIllustrations,
  ...statesIllustrations,
  ...workspaceIllustrations,
  ...filesIllustrations,
  ...communicationIllustrations,
  ...securityIllustrations,
  ...commerceIllustrations,
  ...infrastructureIllustrations,
]
