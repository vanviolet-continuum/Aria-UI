import { useI18n } from '@templates/i18n'
import { DetailView, DetailSection, DetailList } from '@templates/ui/detail'
import { Avatar } from '@templates/ui/avatar'
import { Badge } from '@templates/ui/badge'
import { Text } from '@templates/ui/text'
import { Mail, Building2, ShieldCheck } from '@templates/icons'
import {
  roleLabels,
  statusLabels,
  departmentLabels,
  type User,
} from '../../../data/workspace/model'

export function UserDetail({ user }: { user: User }) {
  const { t, locale } = useI18n()
  const formatDate = (date: string) =>
    new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(new Date(date))
  return (
    <DetailView
      variant="compact"
      title={<span>{user.name}</span>}
      description={
        <a
          className="text-content-secondary no-underline hover:text-primary hover:underline"
          href={'mailto:' + user.email}
        >
          {user.email}
        </a>
      }
      avatar={<Avatar name={user.name} size="lg" />}
      badge={
        <Badge
          dot
          variant={
            user.status === 'active' ? 'success' : user.status === 'invited' ? 'warning' : 'neutral'
          }
        >
          {t(statusLabels[user.status])}
        </Badge>
      }
      meta={
        <>
          <Badge variant="neutral">{t(departmentLabels[user.department])}</Badge>
          <Text as="span" variant="caption">
            {t('Member since {{date}}', { date: formatDate(user.joinedAt) })}
          </Text>
        </>
      }
    >
      <DetailSection title={t('Profile information')} icon={<Mail size={17} />}>
        <DetailList
          items={[
            { id: 'position', label: t('Job title'), value: <span>{user.position || '—'}</span> },
            {
              id: 'department',
              label: t('Department'),
              value: t(departmentLabels[user.department]),
            },
            { id: 'location', label: t('Location'), value: <span>{user.location || '—'}</span> },
            {
              id: 'phone',
              label: t('Phone number'),
              value: user.phone ? <a href={'tel:' + user.phone}>{user.phone}</a> : '—',
            },
          ]}
        />
      </DetailSection>
      <DetailSection title={t('Workspace access')} icon={<ShieldCheck size={17} />}>
        <DetailList
          items={[
            { id: 'role', label: t('Role'), value: t(roleLabels[user.role]) },
            { id: 'status', label: t('Status'), value: t(statusLabels[user.status]) },
            { id: 'joined', label: t('Date added'), value: formatDate(user.joinedAt) },
            { id: 'updated', label: t('Last updated'), value: formatDate(user.updatedAt) },
          ]}
        />
      </DetailSection>
      {user.notes && (
        <DetailSection title={t('Notes')} icon={<Building2 size={17} />}>
          <Text style={{ whiteSpace: 'pre-wrap' }}>
            <span>{user.notes}</span>
          </Text>
        </DetailSection>
      )}
    </DetailView>
  )
}
