import { useI18n } from '../../src/template/i18n'
import { SearchEmptyState } from '@/template/ui/search-empty-state/search-empty-state'
import { members, type Member } from './data/members'
import { Download, RefreshCw } from 'lucide-react'
import { useState } from 'react'
import { Badge, Button, DataTable, SearchInput, toast, type ColumnDef } from '@/template/ui'
import { DemoCard } from './demo-card'

export function TableDemo() {
  const { t: tr, text: localize } = useI18n()

  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const columns: ColumnDef<Member>[] = [
    {
      id: 'name',
      header: 'Team member',
      accessor: 'name',
      sortable: true,
      cell: (member, index) => (
        <span className="directory-name">
          <span className={`initial-avatar initial-avatar--${index % 4}`}>
            {member.name
              .split(' ')
              .map((part) => part[0])
              .join('')}
          </span>
          <span>
            <strong>{member.name}</strong>
            <small>{member.email}</small>
          </span>
        </span>
      ),
    },
    { id: 'role', header: 'Role', accessor: 'role', sortable: true },
    {
      id: 'status',
      header: 'Status',
      accessor: 'status',
      sortable: true,
      cell: (member) => (
        <Badge
          dot
          variant={
            member.status === 'Active' ? 'success' : member.status === 'Away' ? 'warning' : 'violet'
          }
        >
          {member.status}
        </Badge>
      ),
    },
    { id: 'projects', header: 'Projects', accessor: 'projects', sortable: true, align: 'center' },
  ]
  const filtered = members.filter((member) =>
    `${member.name} ${member.role}`.toLowerCase().includes(query.toLowerCase()),
  )
  return (
    <DemoCard
      full
      title={tr('Data Table & Pagination')}
      description={tr('Typed columns. Sorting. Row selection. Pagination. One reusable component.')}
      code={`import { DataTable, type ColumnDef } from '@/template/ui'\n\nconst columns: ColumnDef<Member>[] = [\n  { id: 'name', header: 'Name', accessor: 'name', sortable: true },\n  { id: 'status', header: 'Status', cell: row => <Badge>{row.status}</Badge> },\n]\n\n<DataTable\n  data={members}\n  columns={columns}\n  getRowId={row => row.id}\n  initialPageSize={5}\n  selection={{ selectedIds, onChange: setSelectedIds }}\n/>`}
    >
      <div className="demo-table-toolbar">
        <SearchInput
          value={query}
          onChange={(value) => {
            setQuery(value)
            setSelected([])
          }}
          placeholder={tr('Search team members…')}
          label={tr('Search team members')}
        />
        <div className="demo-row">
          {selected.length > 0 && (
            <Badge variant="primary">
              {selected.length}
              {' ' + tr('selected')}
            </Badge>
          )}
          <Button
            size="sm"
            aria-label={tr('Reload sample table')}
            onClick={() => {
              setLoading(true)
              setTimeout(() => setLoading(false), 1500)
            }}
          >
            <RefreshCw size={14} />
            {tr('Reload')}
          </Button>
          <Button
            size="sm"
            onClick={() =>
              toast.info(
                tr('{{value0}} members ready to export', {
                  value0: localize(selected.length || filtered.length),
                }),
                {
                  description: 'Connect your CSV or API export handler here.',
                },
              )
            }
          >
            <Download size={14} />
            {tr('Export')}
          </Button>
        </div>
      </div>
      <DataTable
        data={filtered}
        columns={columns}
        getRowId={(member) => member.id}
        initialPageSize={5}
        resetKey={query}
        selection={{ selectedIds: selected, onChange: setSelected }}
        loading={loading}
        itemLabel={tr('members')}
        aria-label={tr('Example team members')}
        emptyState={
          <SearchEmptyState
            title={tr('No team members found')}
            description={tr('Try another name or clear your search.')}
            onReset={() => setQuery('')}
          />
        }
      />
    </DemoCard>
  )
}
