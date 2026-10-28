import { useI18n } from '@templates/i18n'
import { Stack } from '@templates/ui/stack'
import { Inline } from '@templates/ui/inline'
import { Text } from '@templates/ui/text'
import { Avatar } from '@templates/ui/avatar'
import { Badge } from '@templates/ui/badge'
import { EmptyState } from '@templates/ui/empty.state'
import type { Activity } from './model'
import {
  FolderOpen,
  Building2,
  ListChecks,
  Receipt,
  FileText,
  CalendarDays,
  Package,
  ShoppingCart,
  FileText as BookOpen,
  Users as GraduationCap,
  User as UserRound,
} from '@templates/icons'

const entityIcons = {
  projects: FolderOpen,
  clients: Building2,
  tasks: ListChecks,
  invoices: Receipt,
  documents: FileText,
  meetings: CalendarDays,
  products: Package,
  customers: UserRound,
  orders: ShoppingCart,
  courses: BookOpen,
  students: GraduationCap,
  enrollments: GraduationCap,
}
const entityLabels = {
  projects: 'Project',
  clients: 'Client',
  tasks: 'Task',
  invoices: 'Invoice',
  documents: 'Document',
  meetings: 'Event',
  products: 'Product',
  customers: 'Customer',
  orders: 'Order',
  courses: 'Course',
  students: 'Student',
  enrollments: 'Enrollment',
}

const actionLabels = {
  created: 'User added',
  updated: 'Profile updated',
  deleted: 'User removed',
  settings: 'Workspace updated',
}
export function ActivityList({ activities }: { activities: Activity[] }) {
  const { t, locale } = useI18n()
  if (!activities.length)
    return (
      <EmptyState
        title={t('No activity yet.')}
        description={t('Updates to your workspace will appear here.')}
      />
    )
  return (
    <Stack as="ol" gap="none" className="m-0 list-none p-0">
      {activities.map((item) => {
        const Icon = item.entity ? entityIcons[item.entity] : undefined
        return (
          <Inline
            as="li"
            key={item.id}
            gap="sm"
            wrap={false}
            className="border-b border-outline py-aria-md first:pt-0 last:border-0 last:pb-0"
          >
            {Icon ? (
              <span className="grid size-8 shrink-0 place-items-center rounded-aria-md bg-primary-soft text-primary">
                <Icon size={18} />
              </span>
            ) : (
              <Avatar name={item.name} size="sm" />
            )}
            <Stack gap="xs" className="min-w-0 flex-1">
              <Text variant="label">{item.name}</Text>
              <Inline gap="xs">
                <Badge
                  size="sm"
                  variant={
                    item.action === 'deleted'
                      ? 'danger'
                      : item.action === 'created'
                        ? 'success'
                        : 'neutral'
                  }
                >
                  {item.entity
                    ? t(
                        item.action === 'created'
                          ? '{{entity}} created'
                          : item.action === 'deleted'
                            ? '{{entity}} deleted'
                            : '{{entity}} updated',
                        { entity: t(entityLabels[item.entity]) },
                      )
                    : t(actionLabels[item.action])}
                </Badge>
                <Text as="time" dateTime={item.at} variant="caption">
                  {new Intl.DateTimeFormat(locale, {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  }).format(new Date(item.at))}
                </Text>
              </Inline>
            </Stack>
          </Inline>
        )
      })}
    </Stack>
  )
}
