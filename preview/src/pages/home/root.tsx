import { Link } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { Card, CardHeader, CardBody } from '@templates/ui/card'
import { Text } from '@templates/ui/text'
import { Badge } from '@templates/ui/badge'
import { FolderOpen, Store, FileText, Blocks, ArrowRight } from '@templates/icons'
import { WelcomeIllustration } from '@templates/ui/illustrations/workspace/welcome.illustration'
import { CasePage, CaseHero, CaseLink } from '../../components/scenario.shared'
import { RecordMetrics } from '../../components/record.display'
import { ActivityList } from '../../data/workspace/activity'
import { useWorkspace } from '../../data/workspace/workspace.provider'
import { useOperations } from '../../data/operations/operations.provider'
import { useScenarios } from '../../data/scenarios/scenarios.provider'

export default function HomePage() {
  const { t } = useI18n(),
    workspace = useWorkspace(),
    operations = useOperations(),
    scenarios = useScenarios()
  return (
    <CasePage
      title="Your workspace, connected."
      eyebrow="Aria Workspace"
      description="Three working applications, one consistent interface. Explore the workflows behind the components."
    >
      <CaseHero
        eyebrow="Built with Aria UI"
        title="Real workflows. Room to make them your own."
        description="Plan your team's work, run a thoughtful store, or create a place to learn. Every case shares the same theme and interaction patterns."
        art={<WelcomeIllustration size={260} />}
      >
        <Link
          to="/preview/workspace"
          className="inline-flex items-center gap-aria-sm rounded-aria-md bg-primary px-aria-lg py-aria-sm text-aria-button text-on-primary hover:opacity-90"
        >
          {t('Open workspace')}
          <ArrowRight size={16} />
        </Link>
        <Link
          to="/preview/catalog/components"
          className="inline-flex items-center gap-aria-sm rounded-aria-md border border-outline bg-surface px-aria-lg py-aria-sm text-aria-button text-primary hover:bg-primary-soft"
        >
          {t('Explore components')}
        </Link>
      </CaseHero>
      <RecordMetrics
        items={[
          {
            label: 'Active projects',
            value: operations.data.projects.filter((item) => item.status === 'active').length,
          },
          {
            label: 'Open tasks',
            value: operations.data.tasks.filter((item) => item.status !== 'done').length,
          },
          { label: 'Total orders', value: scenarios.data.orders.length },
          {
            label: 'Active learners',
            value: scenarios.data.students.filter((item) => item.status === 'active').length,
          },
        ]}
      />
      <div className="grid gap-aria-md md:grid-cols-2 xl:grid-cols-4">
        <CaseLink
          to="/preview/workspace"
          title="Team operations"
          description="Projects, task boards, clients, invoices, and a collaborative calendar."
          icon={<FolderOpen size={24} />}
        />
        <CaseLink
          to="/preview/commerce"
          title="Commerce"
          description="A product catalog, connected inventory, customers, and fulfillment."
          icon={<Store size={24} />}
        />
        <CaseLink
          to="/preview/learning"
          title="Learning"
          description="Courses, a launch wizard, students, enrollments, and a classroom."
          icon={<FileText size={24} />}
        />
        <CaseLink
          to="/preview/catalog/components"
          title="UI library"
          description="Reusable components, icons, illustrations, and the theme studio."
          icon={<Blocks size={24} />}
        />
      </div>
      <div className="grid items-start gap-aria-lg xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Card>
          <CardHeader
            title={t('Across your workspace')}
            titleAs="h2"
            actions={
              <Link to="/preview/workspace/activity" className="text-primary hover:underline">
                {t('View all activity')}
              </Link>
            }
          />
          <CardBody>
            <ActivityList activities={workspace.data.activities.slice(0, 6)} />
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            title={t('Start with a workflow')}
            titleAs="h2"
            description={t('Useful paths to explore the demo.')}
          />
          <CardBody className="space-y-aria-sm">
            {[
              {
                to: '/preview/learning/course.builder',
                title: 'Launch your first course',
                detail: 'Brief, curriculum, access, and review.',
              },
              {
                to: '/preview/commerce/orders?panel=add',
                title: 'Create an order',
                detail: 'Choose a customer and reserve available stock.',
              },
              {
                to: '/preview/workspace/calendar',
                title: 'Plan a team session',
                detail: 'Select a time, invite people, then drag to reschedule.',
              },
            ].map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-start gap-aria-md rounded-aria-lg border border-outline p-aria-md hover:border-primary"
              >
                <Badge variant="primary">{String(index + 1).padStart(2, '0')}</Badge>
                <div className="min-w-0 space-y-aria-xs">
                  <Text variant="label">{t(item.title)}</Text>
                  <Text variant="caption">{t(item.detail)}</Text>
                </div>
              </Link>
            ))}
          </CardBody>
        </Card>
      </div>
    </CasePage>
  )
}
