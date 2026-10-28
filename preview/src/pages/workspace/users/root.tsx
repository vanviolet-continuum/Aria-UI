import { StatCard } from '@templates/ui/stat.card'
import { ModuleArtwork } from '../../../components/module.artwork'
import { useMemo, useState } from 'react'
import { useI18n } from '@templates/i18n'
import { useUrlState } from '@templates/integrations/react.router'
import { Box } from '@templates/ui/box'
import { Stack } from '@templates/ui/stack'
import { Inline } from '@templates/ui/inline'
import { Grid } from '@templates/ui/grid'
import { PageHeader } from '@templates/ui/page.header'
import { Card, CardHeader, CardBody } from '@templates/ui/card'
import { Button } from '@templates/ui/button'
import { Text } from '@templates/ui/text'
import { Avatar } from '@templates/ui/avatar'
import { Badge } from '@templates/ui/badge'
import { DataTable, createActionsColumn, type ColumnDef } from '@templates/ui/data.table'
import {
  filterTableData,
  type TableFilterDef,
  type TableFilterValue,
} from '@templates/ui/table.filter'
import { EmptyState } from '@templates/ui/empty.state'
import { Drawer, useDrawerPresence } from '@templates/ui/drawer'
import { ConfirmDialog } from '@templates/ui/confirm.dialog'
import { Dialog } from '@templates/ui/dialog'
import { toast } from '@templates/ui/toast'
import { Plus, Eye, Trash, Users, UserCheck, Mail, ShieldCheck } from '@templates/icons'
import { Pencil } from 'lucide-react'
import { useWorkspace } from '../../../data/workspace/workspace.provider'
import {
  roles,
  roleLabels,
  statuses,
  statusLabels,
  departments,
  departmentLabels,
  type User,
} from '../../../data/workspace/model'
import { usersSearchCodec } from './search.schema'
import { UserDetail } from './detail'
import { UserEditor } from './form'

function choices<T extends string>(
  value: TableFilterValue[string] | undefined,
  allowed: readonly T[],
): T[] {
  return Array.isArray(value) ? value.filter((item): item is T => allowed.includes(item as T)) : []
}
export default function UsersPage() {
  const { t, locale } = useI18n()
  const { data, deleteUsers } = useWorkspace()
  const { state, setState } = useUrlState(usersSearchCodec)
  const [selection, setSelection] = useState<string[]>([])
  const [deleting, setDeleting] = useState<string[]>([])
  const users = data.users
  const selectedUser = users.find((user) => user.id === state.user)
  const closePanel = () => setState({ panel: '', user: '' }, { resetPage: false, replace: true })
  const openPanel = (panel: 'add' | 'edit' | 'detail', user = '') =>
    setState({ panel, user }, { resetPage: false, replace: false })
  const detail = useDrawerPresence(state.panel === 'detail' ? selectedUser : undefined)
  const editorInput = useMemo(
    () =>
      state.panel === 'add'
        ? { key: 'new', user: undefined }
        : state.panel === 'edit' && selectedUser
          ? { key: selectedUser.id, user: selectedUser }
          : undefined,
    [state.panel, selectedUser],
  )
  const editor = useDrawerPresence(editorInput)
  const filterDefinitions: TableFilterDef<User>[] = [
    {
      id: 'status',
      type: 'choice',
      label: t('Status'),
      options: statuses.map((value) => ({ value, label: t(statusLabels[value]) })),
    },
    {
      id: 'role',
      type: 'choice',
      label: t('Role'),
      options: roles.map((value) => ({ value, label: t(roleLabels[value]) })),
    },
    {
      id: 'department',
      type: 'choice',
      label: t('Department'),
      options: departments.map((value) => ({ value, label: t(departmentLabels[value]) })),
    },
    {
      id: 'joinedAt',
      type: 'date',
      label: t('Date added'),
      accessor: (user) => new Date(user.joinedAt),
    },
  ]
  const filterValue: TableFilterValue = {
    status: state.status,
    role: state.role,
    department: state.department,
    joinedAt: { from: state.joinedFrom || undefined, to: state.joinedTo || undefined },
  }
  const changeFilters = (value: TableFilterValue) => {
    const date = value.joinedAt
    setState({
      status: choices(value.status, statuses),
      role: choices(value.role, roles),
      department: choices(value.department, departments),
      joinedFrom: date && !Array.isArray(date) ? (date.from ?? '') : '',
      joinedTo: date && !Array.isArray(date) ? (date.to ?? '') : '',
    })
  }
  const clearFilters = () =>
    setState({ q: '', status: [], role: [], department: [], joinedFrom: '', joinedTo: '' })
  const query = state.q.trim().toLocaleLowerCase(locale)
  const filtered = filterTableData(users, filterDefinitions, filterValue)
    .filter((user) =>
      (
        user.name +
        ' ' +
        user.email +
        ' ' +
        user.position +
        ' ' +
        t(departmentLabels[user.department])
      )
        .toLocaleLowerCase(locale)
        .includes(query),
    )
    .sort(
      (a, b) =>
        a[state.sort].localeCompare(b[state.sort], locale) * (state.order === 'asc' ? 1 : -1),
    )
  const page = Math.min(state.page, Math.max(1, Math.ceil(filtered.length / state.pageSize)))
  const formatDate = (value: string) =>
    new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(new Date(value))
  const columns: ColumnDef<User>[] = [
    {
      id: 'name',
      header: t('User'),
      accessor: 'name',
      width: 290,
      sortable: true,
      enableHiding: false,
      defaultPin: 'left',
      pinable: false,
      cell: (user) => (
        <Inline gap="sm" wrap={false}>
          <Avatar name={user.name} size="md" />
          <Stack gap="none">
            <Text
              as="button"
              type="button"
              variant="label"
              className="cursor-pointer border-0 bg-transparent p-0 text-start text-content hover:text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              onClick={() => openPanel('detail', user.id)}
            >
              {user.name}
            </Text>
            <Text variant="caption">
              <span>{user.email}</span>
            </Text>
          </Stack>
        </Inline>
      ),
    },
    {
      id: 'role',
      header: t('Role'),
      accessor: 'role',
      width: 165,
      sortable: true,
      cell: (user) => (
        <Badge variant={user.role === 'admin' ? 'primary' : 'neutral'}>
          {t(roleLabels[user.role])}
        </Badge>
      ),
    },
    {
      id: 'department',
      header: t('Department'),
      width: 210,
      cell: (user) => (
        <Stack gap="none">
          <Text variant="label">{t(departmentLabels[user.department])}</Text>
          <Text variant="caption">
            <span>{user.position || '—'}</span>
          </Text>
        </Stack>
      ),
    },
    {
      id: 'status',
      header: t('Status'),
      width: 140,
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
    {
      id: 'joinedAt',
      header: t('Date added'),
      accessor: 'joinedAt',
      width: 165,
      sortable: true,
      cell: (user) => formatDate(user.joinedAt),
    },
    createActionsColumn<User>(
      (user) => [
        {
          id: 'view',
          label: t('View details'),
          icon: <Eye size={16} />,
          onSelect: () => openPanel('detail', user.id),
        },
        {
          id: 'edit',
          label: t('Edit user'),
          icon: <Pencil size={16} />,
          onSelect: () => openPanel('edit', user.id),
        },
        {
          id: 'delete',
          label: t('Delete user'),
          icon: <Trash size={16} />,
          destructive: true,
          separator: true,
          onSelect: () => setDeleting([user.id]),
        },
      ],
      { header: t('Actions'), actionLabel: (user) => t('User actions') + ': ' + user.name },
    ),
  ]
  const metrics = [
    {
      label: 'Total users',
      value: users.length,
      icon: Users,
      tone: 'primary',
      hint: 'Across your workspace',
    },
    {
      label: 'Active users',
      value: users.filter((user) => user.status === 'active').length,
      icon: UserCheck,
      tone: 'success',
      hint: 'Ready to collaborate',
    },
    {
      label: 'Pending invitations',
      value: users.filter((user) => user.status === 'invited').length,
      icon: Mail,
      tone: 'warning',
      hint: 'Waiting to join',
    },
    {
      label: 'Administrators',
      value: users.filter((user) => user.role === 'admin').length,
      icon: ShieldCheck,
      tone: 'info',
      hint: 'Managing your workspace',
    },
  ] as const
  return (
    <Box
      as="section"
      className="w-full min-w-0 p-aria-md lg:p-aria-xl [&>.aria-stack>.aria-page-header]:mb-0 [&_.ui-table-pagination]:px-aria-md"
    >
      <Stack gap="lg">
        <PageHeader
          titleAs="h1"
          eyebrow={t('Team management')}
          title={t('Users')}
          description={t(
            'The people behind your workspace. Manage profiles, roles, and access in one place.',
          )}
          artwork={<ModuleArtwork subject={'Users'} />}
        />
        <Grid columns={{ base: 2, lg: 4 }} gap="md">
          {metrics.map(({ icon: Icon, ...metric }) => (
            <StatCard
              key={metric.label}
              label={t(metric.label)}
              value={metric.value.toLocaleString(locale)}
              description={t(metric.hint)}
              icon={<Icon size={22} />}
              color={metric.tone}
            />
          ))}
        </Grid>
        <Card className="overflow-clip shadow-aria-sm [&>.aria-card-header]:p-aria-lg [&_.ui-table-container]:rounded-none [&_.ui-table-container]:border-0">
          <CardHeader
            titleAs="h2"
            title={t('Workspace directory')}
            description={t('{{count}} people in {{workspace}}', {
              count: users.length,
              workspace: data.settings.name,
            })}
            actions={
              <Button variant="contained" onClick={() => openPanel('add')}>
                <Plus size={16} />
                {t('Add user')}
              </Button>
            }
          />
          {selection.length > 0 && (
            <div className="px-aria-lg pb-aria-md">
              <Inline justify="between" className="rounded-aria-md bg-primary-soft p-aria-sm">
                <Text variant="label">{t('{{count}} selected', { count: selection.length })}</Text>
                <Inline gap="xs">
                  <Button size="sm" variant="text" onClick={() => setSelection([])}>
                    {t('Clear selection')}
                  </Button>
                  <Button
                    size="sm"
                    variant="soft"
                    color="error"
                    onClick={() => setDeleting(selection)}
                  >
                    <Trash size={14} />
                    {t('Delete selected')}
                  </Button>
                </Inline>
              </Inline>
            </div>
          )}
          <CardBody padding={0}>
            <DataTable
              aria-label={t('Users directory')}
              data={filtered.slice((page - 1) * state.pageSize, page * state.pageSize)}
              columns={columns}
              getRowId={(user) => user.id}
              pinable
              filters={filterDefinitions}
              filterValue={filterValue}
              onFilterChange={changeFilters}
              search={{
                value: state.q,
                onChange: (q) => setState({ q }),
                placeholder: t('Search name, email, or job title…'),
                label: t('Search users'),
              }}
              selection={{ selectedIds: selection, onChange: setSelection }}
              itemLabel={t('users')}
              server={{
                page,
                pageSize: state.pageSize,
                totalItems: filtered.length,
                sort: { column: state.sort, direction: state.order },
                onSortChange: (sort) =>
                  setState({ sort: sort.column as typeof state.sort, order: sort.direction }),
                onPageChange: (next) => setState({ page: next }),
                onPageSizeChange: (pageSize) => setState({ pageSize }),
              }}
              emptyState={
                <EmptyState
                  title={t(
                    users.length ? 'No users match your filters.' : 'Your team starts here.',
                  )}
                  description={t(
                    users.length
                      ? 'Try another search or clear the filters.'
                      : 'Add your first user to start building your workspace.',
                  )}
                  action={
                    <Button onClick={() => (users.length ? clearFilters() : openPanel('add'))}>
                      {t(users.length ? 'Clear filters' : 'Add user')}
                    </Button>
                  }
                />
              }
            />
          </CardBody>
        </Card>
        <Text variant="caption">
          {t('Sample data lives in this browser. No emails are sent and no server is required.')}
        </Text>
      </Stack>
      {editor.value && (
        <UserEditor
          key={editor.value.key}
          open={editor.open}
          user={editor.value.user}
          onClose={closePanel}
          onAfterClose={editor.onAfterClose}
        />
      )}
      {detail.value && (
        <Drawer
          open={detail.open}
          onAfterClose={detail.onAfterClose}
          restoreFocus={!editor.open}
          onOpenChange={(open) => {
            if (!open) closePanel()
          }}
          title={t('User details')}
          description={t('Profile and workspace access')}
          size="lg"
          footer={
            <>
              <Button color="error" variant="text" onClick={() => setDeleting([detail.value!.id])}>
                <Trash size={15} />
                {t('Delete user')}
              </Button>
              <Button variant="contained" onClick={() => openPanel('edit', detail.value!.id)}>
                <Pencil size={15} />
                {t('Edit user')}
              </Button>
            </>
          }
        >
          <UserDetail user={detail.value} />
        </Drawer>
      )}
      <Dialog
        open={
          ['edit', 'detail'].includes(state.panel) &&
          !selectedUser &&
          !detail.value &&
          !editor.value
        }
        onOpenChange={(open) => {
          if (!open) closePanel()
        }}
        title={t('User not found')}
        description={t('This user may have been removed from the workspace.')}
        footer={<Button onClick={closePanel}>{t('Back to users')}</Button>}
      />
      <ConfirmDialog
        open={!!deleting.length}
        onOpenChange={(open) => {
          if (!open) setDeleting([])
        }}
        title={t(deleting.length === 1 ? 'Delete this user?' : 'Delete selected users?')}
        description={
          deleting.length === 1
            ? t('Remove {{name}} from the workspace? This action removes their local profile.', {
                name: users.find((user) => user.id === deleting[0])?.name ?? '',
              })
            : t(
                'Remove {{count}} users from the workspace? Their local profiles will be deleted.',
                { count: deleting.length },
              )
        }
        confirmLabel={t('Delete')}
        onConfirm={() => {
          deleteUsers(deleting)
          setSelection((ids) => ids.filter((id) => !deleting.includes(id)))
          if (deleting.includes(state.user)) closePanel()
          setDeleting([])
          toast.success(t('Users deleted successfully.'), {
            description: t('The selected profiles have been removed from this workspace.'),
          })
        }}
      />
    </Box>
  )
}
