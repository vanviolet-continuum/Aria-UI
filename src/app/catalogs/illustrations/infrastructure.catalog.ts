import { DatabaseIllustration } from '../../../template/ui/illustrations/infrastructure/database.illustration'
import { HydroelectricDamIllustration } from '../../../template/ui/illustrations/infrastructure/hydroelectric.dam.illustration'
import { ServerIllustration } from '../../../template/ui/illustrations/infrastructure/server.illustration'
import { SolarPanelIllustration } from '../../../template/ui/illustrations/infrastructure/solar.panel.illustration'
import { WindTurbineIllustration } from '../../../template/ui/illustrations/infrastructure/wind.turbine.illustration'
import type { IllustrationEntry } from './illustration.types'

export const infrastructureIllustrations: IllustrationEntry[] = [
  {
    id: 'database',
    name: 'Database',
    componentName: 'DatabaseIllustration',
    description: 'Stored records, backups, and reliable data.',
    category: 'infrastructure',
    isNew: true,
    component: DatabaseIllustration,
  },
  {
    id: 'extended-hydroelectric-dam',
    name: 'Hydroelectric dam',
    componentName: 'HydroelectricDamIllustration',
    description: 'A curved water barrier with clear spillway details.',
    category: 'infrastructure',
    isNew: true,
    component: HydroelectricDamIllustration,
  },
  {
    id: 'server',
    name: 'Server',
    componentName: 'ServerIllustration',
    description: 'Services, deployments, and infrastructure.',
    category: 'infrastructure',
    isNew: true,
    component: ServerIllustration,
  },
  {
    id: 'extended-solar-panel',
    name: 'Solar panel',
    componentName: 'SolarPanelIllustration',
    description: 'A gridded solar module on a simple angled support.',
    category: 'infrastructure',
    isNew: true,
    component: SolarPanelIllustration,
  },
  {
    id: 'extended-wind-turbine',
    name: 'Wind turbine',
    componentName: 'WindTurbineIllustration',
    description: 'A tall three-bladed wind turbine with gentle wind marks.',
    category: 'infrastructure',
    isNew: true,
    component: WindTurbineIllustration,
  },
]
