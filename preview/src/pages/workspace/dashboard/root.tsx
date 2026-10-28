import { StatCard } from '@templates/ui/stat.card'
import { ModuleArtwork } from '../../../components/module.artwork'
import { Link, useNavigate } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { useWorkspace } from '../../../data/workspace/workspace.provider'
import {
  departments,
  departmentLabels,
  roleLabels,
  statusLabels,
  type User,
} from '../../../data/workspace/model'
import { ActivityList } from '../../../data/workspace/activity'
import { Box } from '@templates/ui/box'
import { Stack } from '@templates/ui/stack'
import { Grid } from '@templates/ui/grid'
import { GridItem } from '@templates/ui/grid.item'
import { Inline } from '@templates/ui/inline'
import { PageHeader } from '@templates/ui/page.header'
import { Heading } from '@templates/ui/heading'
import { Text } from '@templates/ui/text'
import { Card } from '@templates/ui/card'
import { Badge } from '@templates/ui/badge'
import { Avatar, AvatarGroup } from '@templates/ui/avatar'
import { Progress } from '@templates/ui/progress'
import { Button } from '@templates/ui/button'
import { DataTable, type ColumnDef } from '@templates/ui/data.table'
import { Users, UserCheck, Mail, ShieldCheck, Plus, ArrowRight } from '@templates/icons'
import { TeamIllustration } from '@templates/ui/illustrations/workspace/team.illustration'
import { WorkOverview } from '../../../components/work.overview'

export default function DashboardPage() {
  const { t, locale } = useI18n()
  const { data } = useWorkspace()
  const navigate = useNavigate()
  const { users, activities, settings } = data
  const active = users.filter((user) => user.status === 'active').length
  const invited = users.filter((user) => user.status === 'invited').length
  const admin = users.filter((user) => user.role === 'admin').length
  const recent = [...users].sort((a, b) => b.joinedAt.localeCompare(a.joinedAt)).slice(0, 5)
  const metrics = [
    {
      label: 'Total users',
      value: users.length,
      description: 'People in your workspace',
      icon: Users,
      tone: 'primary',
      filter: '',
    },
    {
      label: 'Active users',
      value: active,
      description: 'Ready to collaborate',
      icon: UserCheck,
      tone: 'success',
      filter: '&status=active',
    },
    {
      label: 'Pending invitations',
      value: invited,
      description: 'Accounts awaiting activation',
      icon: Mail,
      tone: 'warning',
      filter: '&status=invited',
    },
    {
      label: 'Administrators',
      value: admin,
      description: 'Managing workspace access',
      icon: ShieldCheck,
      tone: 'info',
      filter: '&role=admin',
    },
  ] as const
  const columns: ColumnDef<User>[] = [
    {
      id: 'name',
      header: t('User'),
      cell: (user) => (
        <Inline gap="sm" wrap={false}>
          <Avatar name={user.name} size="sm" />
          <Stack gap="none">
            <Text
              as="button"
              type="button"
              variant="label"
              className="cursor-pointer border-0 bg-transparent p-0 text-start text-content hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              onClick={() =>
                navigate(
                  `/preview/workspace/users?panel=detail&user=${encodeURIComponent(user.id)}`,
                )
              }
            >
              {user.name}
            </Text>
            <Text variant="caption">{user.email}</Text>
          </Stack>
        </Inline>
      ),
    },
    { id: 'role', header: t('Role'), cell: (user) => t(roleLabels[user.role]) },
    {
      id: 'status',
      header: t('Status'),
      cell: (user) => (
        <Badge
          dot
          variant={
            user.status === 'active' ? 'success' : user.status === 'invited' ? 'warning' : 'neutral'
          }
        >
          {t(statusLabels[user.status])}
        </Badge>
      ),
    },
  ]
  return (
    <Box
      as="section"
      className="w-full min-w-0 p-aria-md lg:p-aria-xl [&>.aria-stack>.aria-page-header]:mb-0 [&_.ui-table-pagination]:px-aria-md"
    >
      <Stack gap="lg">
        <PageHeader
          titleAs="h1"
          eyebrow={settings.name}
          title={t('A clear view of your workspace.')}
          description={t('People, projects, and everyday progress. Your workspace at a glance.')}
          artwork={<ModuleArtwork subject={'Dashboard'} />}
        />
        <Box
          className="flex flex-wrap items-center justify-between gap-aria-xl border border-primary/15 bg-linear-to-br from-primary-soft to-surface-subtle [&>.aria-stack]:max-w-2xl [&>.aria-stack]:items-start [&>svg]:hidden [&>svg]:w-1/4 [&>svg]:max-h-48 md:[&>svg]:block"
          padding="lg"
          radius="lg"
        >
          <Stack gap="md">
            <Badge variant="primary">{t('Your team, connected')}</Badge>
            <Heading as="h2" size={{ base: 'md', lg: 'lg' }}>
              {t('Good work starts with good people.')}
            </Heading>
            <Text variant="description">
              {t(
                'Keep everyone in the right place. Add teammates, organize departments, and give each person the access they need.',
              )}
            </Text>
            <Inline gap="sm">
              <AvatarGroup max={4}>
                {users.slice(0, 6).map((user) => (
                  <Avatar key={user.id} name={user.name} />
                ))}
              </AvatarGroup>
              <Button variant="text" onClick={() => navigate('/preview/workspace/users')}>
                {t('Meet your team')}
                <ArrowRight size={15} />
              </Button>
            </Inline>
          </Stack>
          <TeamIllustration size={250} />
        </Box>
        <Grid columns={{ base: 2, lg: 4 }} gap="md">
          {metrics.map(({ icon: Icon, ...metric }) => (
            <Link
              to={`/preview/workspace/users?sort=joinedAt${metric.filter}`}
              key={metric.label}
              className="min-w-0 text-inherit no-underline [&>.aria-card]:h-full [&>.aria-card]:transition-[border-color] hover:[&>.aria-card]:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <StatCard
                key={metric.label}
                label={t(metric.label)}
                value={metric.value.toLocaleString(locale)}
                description={t(metric.description)}
                icon={<Icon size={22} />}
                color={metric.tone}
              />
            </Link>
          ))}
        </Grid>
        <WorkOverview />
        <Grid columns={{ base: 1, lg: 12 }} gap="md" align="start">
          <GridItem colSpan={{ base: 1, lg: 8 }}>
            <Stack gap="md">
              <Card
                title={t('Recently added')}
                description={t('The latest people to join your workspace.')}
                actions={
                  <Inline gap="sm">
                    <Button
                      variant="contained"
                      onClick={() => navigate('/preview/workspace/users?panel=add')}
                    >
                      <Plus size={16} />
                      {t('Add user')}
                    </Button>
                    {
                      <Link
                        to="/preview/workspace/users"
                        className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      >
                        {t('View all users')}
                        <ArrowRight size={14} />
                      </Link>
                    }
                  </Inline>
                }
                slotProps={{ body: { padding: 0 } }}
              >
                <DataTable
                  data={recent}
                  columns={columns}
                  getRowId={(user) => user.id}
                  pagination={false}
                  aria-label={t('Recently added users')}
                />
              </Card>
              {settings.notifications && (
                <Card
                  title={t('Workspace activity')}
                  description={t('A shared record of what has changed.')}
                  actions={
                    <Link
                      to="/preview/workspace/activity"
                      className="inline-flex items-center gap-aria-xs text-aria-link font-medium text-primary no-underline hover:underline focus-visible:rounded-aria-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      {t('View all activity')}
                      <ArrowRight size={14} />
                    </Link>
                  }
                >
                  <ActivityList activities={activities.slice(0, 5)} />
                </Card>
              )}
            </Stack>
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 4 }}>
            <Stack gap="md">
              <Card
                title={t('People by department')}
                description={t('A little perspective on your team.')}
              >
                <Stack gap="lg">
                  {departments.map((department) => (
                    <Progress
                      key={department}
                      label={t(departmentLabels[department])}
                      value={users.filter((user) => user.department === department).length}
                      max={Math.max(1, users.length)}
                      showValue
                      formatValue={() =>
                        String(users.filter((user) => user.department === department).length)
                      }
                      size="sm"
                    />
                  ))}
                </Stack>
              </Card>
              <Card title={t('Workspace snapshot')}>
                <Stack gap="md">
                  <Inline justify="between">
                    <Text variant="description">{t('Workspace')}</Text>
                    <Text variant="label">{settings.name}</Text>
                  </Inline>
                  <Inline justify="between">
                    <Text variant="description">{t('Active accounts')}</Text>
                    <Text variant="label">
                      {active} / {users.length}
                    </Text>
                  </Inline>
                  <Progress
                    value={active}
                    max={Math.max(1, users.length)}
                    label={t('Activation rate')}
                    showValue
                  />
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => navigate('/preview/workspace/settings')}
                  >
                    {t('Workspace settings')}
                    <ArrowRight size={14} />
                  </Button>
                </Stack>
              </Card>
            </Stack>
          </GridItem>
        </Grid>
        <Inline
          justify="between"
          className="border-t border-outline pt-aria-md [&_.aria-text]:flex [&_.aria-text]:items-center [&_.aria-text]:gap-aria-xs"
        >
          <Text variant="caption">
            Aria Teams · {t('Team management, thoughtfully organized.')}
          </Text>
          <Text variant="caption">{t('Built with Aria UI · Local demo')}</Text>
        </Inline>
      </Stack>
    </Box>
  )
}
