import { TextLink } from '../../template/ui/text.link/text.link'

import { Text } from '../../template/ui/text/text'
import { useMemo, useState } from 'react'
import { Download, Eye, Mail, MoreHorizontal, Pause, Play, Users } from 'lucide-react'
import {
  Badge,
  Button,
  Card,
  CardHeader,
  DataTable,
  DetailList,
  DetailSection,
  DetailStats,
  DetailView,
  Drawer,
  Menu,
  PageHeader,
  SearchEmptyState,
  SearchInput,
  TableColumnMenu,
  TableFilter,
  Toolbar,
  ToolbarGroup,
  ToolbarActions,
  filterTableData,
  useTableColumns,
  type ColumnDef,
  type TableFilterDef,
  type TableFilterValue,
} from '../../template'
import { useI18n } from '../../template/i18n'
import './examples.css'

interface Member {
  id: string
  name: string
  email: string
  role: string
  status: string
  joined: string
}
const seedMembers: Member[] = [
  ['01', 'Nadia Putri', 'nadia@aria.example', 'Design', 'Active', '2026-10-02'],
  ['02', 'Ahmad Fauzi', 'ahmad@aria.example', 'Engineering', 'Active', '2026-10-04'],
  ['03', 'Dewi Rahma', 'dewi@aria.example', 'Operations', 'Invited', '2026-10-06'],
  ['04', 'Rizky Pratama', 'rizky@aria.example', 'Engineering', 'Active', '2026-10-08'],
  ['05', 'Sinta Maharani', 'sinta@aria.example', 'Design', 'Paused', '2026-10-09'],
  ['06', 'Bima Aditya', 'bima@aria.example', 'Product', 'Active', '2026-10-10'],
  ['07', 'Alya Safitri', 'alya@aria.example', 'Design', 'Active', '2026-10-12'],
  ['08', 'Dimas Saputra', 'dimas@aria.example', 'Engineering', 'Invited', '2026-10-14'],
  ['09', 'Citra Lestari', 'citra@aria.example', 'Operations', 'Active', '2026-10-16'],
  ['10', 'Fajar Ramadhan', 'fajar@aria.example', 'Product', 'Paused', '2026-10-18'],
  ['11', 'Laras Ayu', 'laras@aria.example', 'Design', 'Active', '2026-10-20'],
  ['12', 'Yoga Saputra', 'yoga@aria.example', 'Engineering', 'Active', '2026-10-22'],
].map(([id, name, email, role, status, joined]) => ({ id, name, email, role, status, joined }))

export function MemberTable() {
  const { t: tr, locale } = useI18n()
  const [members, setMembers] = useState(seedMembers)
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<TableFilterValue>({})
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [viewed, setViewed] = useState<string | null>(null)
  const columnState = useTableColumns()
  const formatDate = (value: string) =>
    new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(new Date(`${value}T12:00:00`))
  const definitions: TableFilterDef<Member>[] = [
    {
      id: 'status',
      label: 'Status',
      type: 'choice',
      options: ['Active', 'Invited', 'Paused'].map((value) => ({ value, label: value })),
    },
    {
      id: 'role',
      label: 'Team',
      type: 'choice',
      options: ['Design', 'Engineering', 'Operations', 'Product'].map((value) => ({
        value,
        label: value,
      })),
    },
    { id: 'joined', label: 'Joined', type: 'date' },
  ]
  const filtered = useMemo(() => {
    const matching = members.filter((member) =>
      `${member.name} ${member.email} ${tr(member.role)} ${tr(member.status)}`
        .toLowerCase()
        .includes(search.trim().toLowerCase()),
    )
    return filterTableData(matching, definitions, filters)
  }, [members, search, filters, tr])
  const member = members.find((item) => item.id === viewed)
  const toggleStatus = (id: string) =>
    setMembers((current) =>
      current.map((item) =>
        item.id === id ? { ...item, status: item.status === 'Paused' ? 'Active' : 'Paused' } : item,
      ),
    )
  const columns: ColumnDef<Member>[] = [
    {
      id: 'name',
      defaultPin: 'left',
      pinable: false,
      header: tr('Member'),
      accessor: 'name',
      sortable: true,
      width: 250,
      enableHiding: false,
      cell: (row) => (
        <Text
          as="button"
          variant="button"
          tone="inherit"
          className="member-cell"
          onClick={() => setViewed(row.id)}
        >
          <Text as="span" variant="table" tone="inherit" className="member-initials">
            {row.name
              .split(' ')
              .map((part) => part[0])
              .slice(0, 2)
              .join('')}
          </Text>
          <Text as="span" variant="table">
            <Text as="strong" variant="label">
              {row.name}
            </Text>
            <Text as="small" variant="caption">
              ARIA-{row.id}
            </Text>
          </Text>
        </Text>
      ),
    },
    { id: 'email', header: tr('Email address'), accessor: 'email', sortable: true, width: 240 },
    {
      id: 'role',
      header: tr('Team'),
      accessor: (row) => tr(row.role),
      sortable: true,
      width: 160,
      cell: (row) => <Badge>{tr(row.role)}</Badge>,
    },
    {
      id: 'status',
      header: tr('Status'),
      accessor: (row) => tr(row.status),
      sortable: true,
      width: 135,
      cell: (row) => (
        <Badge
          variant={
            row.status === 'Active' ? 'success' : row.status === 'Invited' ? 'primary' : 'neutral'
          }
          dot
        >
          {tr(row.status)}
        </Badge>
      ),
    },
    {
      id: 'joined',
      header: tr('Joined'),
      accessor: 'joined',
      sortable: true,
      width: 160,
      cell: (row) => formatDate(row.joined),
    },
    {
      id: 'actions',
      header: (
        <Text as="span" variant="table" className="sr-only">
          {tr('Actions')}
        </Text>
      ),
      label: 'Actions',
      width: 64,
      defaultPin: 'right',
      pinable: false,
      enableHiding: false,
      align: 'right',
      cell: (row) => (
        <Menu
          variant="rich"
          label={row.name}
          trigger={
            <Text
              as="button"
              variant="button"
              tone="inherit"
              className="icon-button"
              aria-label={`${tr('Actions')}: ${row.name}`}
            >
              <MoreHorizontal size={17} />
            </Text>
          }
          items={[
            {
              id: 'view',
              label: 'View details',
              description: 'Open the member profile',
              icon: <Eye />,
              onSelect: () => setViewed(row.id),
            },
            {
              id: 'status',
              label: row.status === 'Paused' ? 'Activate member' : 'Pause member',
              description: 'Update access in this preview',
              icon: row.status === 'Paused' ? <Play /> : <Pause />,
              separator: true,
              onSelect: () => toggleStatus(row.id),
            },
          ]}
        />
      ),
    },
  ]
  const exportRows = () => {
    const rows = selectedIds.length
      ? members.filter((row) => selectedIds.includes(row.id))
      : filtered
    const escape = (value: string) => `"${value.replaceAll('"', '""')}"`
    const csv = [
      ['Name', 'Email', 'Team', 'Status', 'Joined'],
      ...rows.map((row) => [row.name, row.email, row.role, row.status, row.joined]),
    ]
      .map((row) => row.map(escape).join(','))
      .join('\r\n')
    const url = URL.createObjectURL(new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8;' }))
    const link = document.createElement('a')
    link.href = url
    link.download = 'aria-ui-members.csv'
    link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  return (
    <>
      <div className="example-metrics">
        <DetailStats
          items={[
            {
              id: 'all',
              label: tr('Total members'),
              value: members.length,
              hint: tr('Across your workspace'),
              icon: <Users size={16} />,
            },
            {
              id: 'active',
              label: tr('Active members'),
              value: members.filter((row) => row.status === 'Active').length,
              hint: tr('Ready to collaborate'),
            },
            {
              id: 'invited',
              label: tr('Pending invitations'),
              value: members.filter((row) => row.status === 'Invited').length,
              hint: tr('A little room to grow'),
            },
          ]}
        />
      </div>
      <Card as="section">
        <CardHeader
          title={tr('Team directory')}
          description={tr('Search, filter, and keep everyone in view.')}
          divider
          actions={
            <Button onClick={exportRows}>
              <Download size={14} />
              {tr('Export CSV')}
            </Button>
          }
        />
        <Toolbar padding="md" label={tr('Member filters')}>
          <ToolbarGroup grow>
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder={tr('Search members…')}
              className="example-table-search"
            />
            <TableFilter filters={definitions} value={filters} onChange={setFilters} />
          </ToolbarGroup>
          <ToolbarActions>
            <TableColumnMenu
              columns={columns}
              visibility={columnState.visibility}
              onVisibilityChange={columnState.setVisibility}
              onReset={() => columnState.setVisibility({})}
            />
          </ToolbarActions>
        </Toolbar>
        {selectedIds.length > 0 && (
          <div className="example-selection-bar">
            <Text as="span" variant="table">
              {selectedIds.length} {tr('members selected')}
            </Text>
            <Button size="sm" variant="text" onClick={() => setSelectedIds([])}>
              {tr('Clear selection')}
            </Button>
          </div>
        )}
        <DataTable
          data={filtered}
          columns={columns}
          getRowId={(row) => row.id}
          initialPageSize={8}
          columnVisibility={columnState.visibility}
          columnPinning={columnState.pinning}
          pinable
          onColumnPinningChange={columnState.setPinning}
          selection={{ selectedIds, onChange: setSelectedIds }}
          resetKey={JSON.stringify([search, filters])}
          aria-label={tr('Team directory')}
          itemLabel={tr('members')}
          emptyState={
            <SearchEmptyState
              onReset={() => {
                setSearch('')
                setFilters({})
              }}
            />
          }
        />
      </Card>
      <Drawer
        open={!!member}
        onOpenChange={(open) => {
          if (!open) setViewed(null)
        }}
        title={tr('Member details')}
        footer={<Button onClick={() => setViewed(null)}>{tr('Close')}</Button>}
      >
        {member && (
          <DetailView
            title={member.name}
            eyebrow={`ARIA-${member.id}`}
            avatar={member.name.slice(0, 1)}
            badge={
              <Badge variant={member.status === 'Active' ? 'success' : 'neutral'} dot>
                {tr(member.status)}
              </Badge>
            }
          >
            <DetailSection title={tr('Overview')}>
              <DetailList
                columns={1}
                items={[
                  {
                    id: 'email',
                    label: tr('Email address'),
                    icon: <Mail size={13} />,
                    value: (
                      <TextLink as="a" variant="link" href={`mailto:${member.email}`}>
                        {member.email}
                      </TextLink>
                    ),
                  },
                  { id: 'team', label: tr('Team'), value: tr(member.role) },
                  { id: 'joined', label: tr('Joined'), value: formatDate(member.joined) },
                ]}
              />
            </DetailSection>
          </DetailView>
        )}
      </Drawer>
    </>
  )
}

export function TableExamplePage() {
  const { t: tr } = useI18n()
  return (
    <div className="standard-page example-page page-enter">
      <PageHeader
        eyebrow={tr('TABLE EXAMPLE')}
        title={tr('People, in one place.')}
        description={tr(
          'A complete table with search, filters, selection, pinned columns, and row actions.',
        )}
      />
      <MemberTable />
    </div>
  )
}
