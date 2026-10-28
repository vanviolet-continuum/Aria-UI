import { useState } from 'react'
import { z } from 'zod'
import { useI18n } from '@templates/i18n'
import { useUrlState } from '@templates/integrations/react.router'
import { createZodSearchCodec } from '@templates/integrations/zod'
import { DataTable, createActionsColumn, type ColumnDef } from '@templates/ui/data.table'
import { Avatar } from '@templates/ui/avatar'
import { Badge } from '@templates/ui/badge'
import { Inline } from '@templates/ui/inline'
import { Stack } from '@templates/ui/stack'
import { Button } from '@templates/ui/button'
import { Text } from '@templates/ui/text'
import { DetailView, DetailSection, DetailList } from '@templates/ui/detail'
import { EmptyState } from '@templates/ui/empty.state'
import { Drawer, useDrawerPresence } from '@templates/ui/drawer'
import { Eye } from '@templates/icons'

const members = [
  {
    id: '1',
    name: 'Nadia Putri',
    email: 'nadia@studio.design',
    role: 'Designer',
    status: 'active',
  },
  {
    id: '2',
    name: 'Rafi Pratama',
    email: 'rafi@studio.design',
    role: 'Developer',
    status: 'active',
  },
  {
    id: '3',
    name: 'Maya Sari',
    email: 'maya@studio.design',
    role: 'Product manager',
    status: 'invited',
  },
  {
    id: '4',
    name: 'Dimas Wijaya',
    email: 'dimas@studio.design',
    role: 'Developer',
    status: 'active',
  },
  { id: '5', name: 'Alya Rahma', email: 'alya@studio.design', role: 'Designer', status: 'invited' },
  {
    id: '6',
    name: 'Bima Saputra',
    email: 'bima@studio.design',
    role: 'Developer',
    status: 'active',
  },
  {
    id: '7',
    name: 'Intan Permata',
    email: 'intan@studio.design',
    role: 'Designer',
    status: 'active',
  },
  {
    id: '8',
    name: 'Fajar Hidayat',
    email: 'fajar@studio.design',
    role: 'Product manager',
    status: 'invited',
  },
  { id: '9', name: 'Citra Dewi', email: 'citra@studio.design', role: 'Designer', status: 'active' },
  {
    id: '10',
    name: 'Arga Kusuma',
    email: 'arga@studio.design',
    role: 'Developer',
    status: 'active',
  },
  {
    id: '11',
    name: 'Salsa Amalia',
    email: 'salsa@studio.design',
    role: 'Designer',
    status: 'invited',
  },
  {
    id: '12',
    name: 'Raka Aditya',
    email: 'raka@studio.design',
    role: 'Product manager',
    status: 'active',
  },
]
type Member = (typeof members)[number]
const codec = createZodSearchCodec(
  z.object({
    q: z.string().catch(''),
    status: z.array(z.enum(['active', 'invited'])).catch([]),
    sort: z.enum(['name', 'role', 'status']).catch('name'),
    order: z.enum(['asc', 'desc']).catch('asc'),
    page: z.coerce.number().int().min(1).catch(1),
    pageSize: z.coerce
      .number()
      .refine((value) => [5, 8, 10, 20, 50].includes(value))
      .catch(5),
  }),
  { q: '', status: [], sort: 'name', order: 'asc', page: 1, pageSize: 5 },
)

export function DataDemo() {
  const { t, locale } = useI18n()
  const { state, setState } = useUrlState(codec)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [selected, setSelected] = useState<Member | null>(null)
  const detail = useDrawerPresence(selected)
  const filtered = members
    .filter(
      (member) =>
        (!state.status.length || state.status.some((value) => value === member.status)) &&
        (member.name + ' ' + member.email + ' ' + member.role)
          .toLocaleLowerCase(locale)
          .includes(state.q.trim().toLocaleLowerCase(locale)),
    )
    .sort(
      (a, b) =>
        a[state.sort].localeCompare(b[state.sort], locale) * (state.order === 'asc' ? 1 : -1),
    )
  const page = Math.min(state.page, Math.max(1, Math.ceil(filtered.length / state.pageSize)))
  const columns: ColumnDef<Member>[] = [
    {
      id: 'name',
      header: t('Member'),
      accessor: 'name',
      sortable: true,
      defaultPin: 'left',
      pinable: false,
      enableHiding: false,
      width: 280,
      cell: (member) => (
        <Inline gap="sm" wrap={false}>
          <Avatar name={member.name} size="sm" />
          <Stack gap="none">
            <Text variant="label">
              <span>{member.name}</span>
            </Text>
            <Text variant="caption">
              <span>{member.email}</span>
            </Text>
          </Stack>
        </Inline>
      ),
    },
    { id: 'role', header: t('Role'), accessor: 'role', width: 200, sortable: true },
    {
      id: 'status',
      header: t('Status'),
      accessor: 'status',
      width: 140,
      sortable: true,
      cell: (member) => (
        <Badge dot variant={member.status === 'active' ? 'success' : 'warning'}>
          {t(member.status === 'active' ? 'Active' : 'Invited')}
        </Badge>
      ),
    },
    createActionsColumn<Member>(
      (member) => [
        {
          id: 'view',
          label: t('View details'),
          icon: <Eye size={16} />,
          onSelect: () => setSelected(member),
        },
      ],
      { header: t('Actions'), actionLabel: (member) => t('View details') + ': ' + member.name },
    ),
  ]
  return (
    <Stack gap="md">
      {selectedIds.length > 0 && (
        <Inline justify="between">
          <Text variant="label">{t('{{count}} selected', { count: selectedIds.length })}</Text>
          <Button size="sm" onClick={() => setSelectedIds([])}>
            {t('Clear selection')}
          </Button>
        </Inline>
      )}
      <DataTable
        data={filtered.slice((page - 1) * state.pageSize, page * state.pageSize)}
        columns={columns}
        getRowId={(member) => member.id}
        pinable
        aria-label={t('Workspace members')}
        selection={{ selectedIds, onChange: setSelectedIds }}
        itemLabel={t('members')}
        search={{
          value: state.q,
          onChange: (q) => setState({ q }),
          label: t('Search members'),
          placeholder: t('Search members…'),
        }}
        filters={[
          {
            id: 'status',
            label: t('Status'),
            type: 'choice',
            options: [
              { value: 'active', label: t('Active') },
              { value: 'invited', label: t('Invited') },
            ],
          },
        ]}
        filterValue={{ status: state.status }}
        onFilterChange={(value) =>
          setState({
            status: Array.isArray(value.status)
              ? value.status.filter(
                  (item): item is 'active' | 'invited' => item === 'active' || item === 'invited',
                )
              : [],
          })
        }
        server={{
          page,
          pageSize: state.pageSize,
          totalItems: filtered.length,
          onPageChange: (next) => setState({ page: next }),
          onPageSizeChange: (pageSize) => setState({ pageSize }),
          sort: { column: state.sort, direction: state.order },
          onSortChange: (sort) =>
            setState({ sort: sort.column as typeof state.sort, order: sort.direction }),
        }}
        emptyState={
          <EmptyState
            title={t('No members found')}
            description={t('Try another name or clear your filters.')}
            action={
              <Button onClick={() => setState({ q: '', status: [] })}>{t('Clear filters')}</Button>
            }
          />
        }
      />
      {detail.value && (
        <Drawer
          open={detail.open}
          onAfterClose={detail.onAfterClose}
          onOpenChange={(open) => {
            if (!open) setSelected(null)
          }}
          title={t('Member details')}
          description={t('Sample workspace member')}
          footer={<Button onClick={() => setSelected(null)}>{t('Close')}</Button>}
        >
          <DetailView
            variant="compact"
            title={<span>{detail.value.name}</span>}
            description={<span>{detail.value.email}</span>}
            avatar={<Avatar name={detail.value.name} size="lg" />}
          >
            <DetailSection title={t('Profile information')}>
              <DetailList
                items={[
                  { id: 'name', label: t('Name'), value: <span>{detail.value.name}</span> },
                  { id: 'email', label: t('Email'), value: <span>{detail.value.email}</span> },
                  { id: 'role', label: t('Role'), value: detail.value.role },
                  {
                    id: 'status',
                    label: t('Status'),
                    value: t(detail.value.status === 'active' ? 'Active' : 'Invited'),
                  },
                ]}
              />
            </DetailSection>
          </DetailView>
        </Drawer>
      )}
    </Stack>
  )
}
