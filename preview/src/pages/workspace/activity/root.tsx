import { ModuleArtwork } from '../../../components/module.artwork'
import { z } from 'zod'
import { useI18n } from '@templates/i18n'
import { useUrlState } from '@templates/integrations/react.router'
import { createZodSearchCodec } from '@templates/integrations/zod'
import { Box } from '@templates/ui/box'
import { Stack } from '@templates/ui/stack'
import { PageHeader } from '@templates/ui/page.header'
import { Card } from '@templates/ui/card'
import { Tabs } from '@templates/ui/tabs'
import { ActivityList } from '../../../data/workspace/activity'
import { useWorkspace } from '../../../data/workspace/workspace.provider'

const codec = createZodSearchCodec(
  z.object({ action: z.enum(['all', 'created', 'updated', 'deleted', 'settings']).catch('all') }),
  { action: 'all' },
)
export default function ActivityPage() {
  const { t } = useI18n()
  const { data } = useWorkspace()
  const { state, setState } = useUrlState(codec)
  const activities = data.activities.filter(
    (item) => state.action === 'all' || item.action === state.action,
  )
  return (
    <Box
      as="section"
      className="w-full min-w-0 p-aria-md lg:p-aria-xl [&>.aria-stack>.aria-page-header]:mb-0 [&_.ui-table-pagination]:px-aria-md"
    >
      <Stack gap="lg">
        <PageHeader
          titleAs="h1"
          title={t('Activity')}
          description={t('Projects, people, and everyday decisions, in one timeline.')}
          artwork={<ModuleArtwork subject={'Activity'} />}
        />
        <Card
          body={
            <Stack gap="lg">
              <Tabs
                label={t('Activity type')}
                value={state.action}
                onChange={(action) =>
                  setState({ action: action as typeof state.action }, { replace: false })
                }
                items={[
                  { value: 'all', label: t('All activity') },
                  { value: 'created', label: t('Added') },
                  { value: 'updated', label: t('Updated') },
                  { value: 'deleted', label: t('Removed') },
                  { value: 'settings', label: t('Settings') },
                ]}
              />
              <ActivityList activities={activities} />
            </Stack>
          }
        />
      </Stack>
    </Box>
  )
}
