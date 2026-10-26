import { useI18n } from '../../src/template/i18n'
import { Braces, RefreshCw } from 'lucide-react'
import { useState } from 'react'
import {
  Badge,
  Button,
  Combobox,
  DataTable,
  Field,
  SearchEmptyState,
  SearchInput,
  useServerTable,
  type ColumnDef,
} from '@/template/ui'
import { fetchMembers, loadMemberOptions, type DemoMember } from '../mocks/services/demo-members'
import { DemoCard } from './demo-card'

const columns: ColumnDef<DemoMember>[] = [
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
  { id: 'role', header: 'Role', accessor: 'role' },
  {
    id: 'status',
    header: 'Status',
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
const loadPage = async (request: Parameters<typeof fetchMembers>[0]) => {
  const page = await fetchMembers(request)
  return { rows: page.items, total: page.total }
}
export function AsyncDemos() {
  const { t: tr, text: localize } = useI18n()

  const [member, setMember] = useState('')
  const table = useServerTable({ loadPage, initialPageSize: 5 })
  return (
    <>
      <DemoCard
        title={tr('Async Combobox')}
        description={tr('Server search. Infinite scrolling. No stale responses.')}
        code={`<Combobox value={member} onChange={setMember}\n  loadOptions={async ({ search, cursor, signal }) => {\n    const response = await fetch(\n      '/api/members?' + new URLSearchParams({ search, cursor: cursor ?? '' }),\n      { signal },\n    )\n    if (!response.ok) throw new Error('Could not load members')\n    return response.json() // { options, nextCursor }\n  }}\n  debounceMs={300}\n/>`}
      >
        <div className="demo-stack">
          <Field
            label={tr('Assign a teammate')}
            hint={tr('Search 160 people. More results load as you scroll.')}
          >
            <Combobox
              value={member}
              onChange={setMember}
              loadOptions={loadMemberOptions}
              placeholder={tr('Find someone for the team…')}
            />
          </Field>
          <div className="async-feature-grid">
            <span>{tr('300ms debounce')}</span>
            <span>{tr('AbortController')}</span>
            <span>{tr('Paginated results')}</span>
            <span>{tr('Virtualized long lists')}</span>
            <span>{tr('60-second cache')}</span>
            <span>{tr('Retry on error')}</span>
          </div>
          <div className="demo-selection">
            {tr('Selected ID')}
            <code>{member || 'Not selected'}</code>
          </div>
          <p className="async-demo-note">
            <Braces size={15} />
            {tr('Try searching “error” to preview a failed request.')}
          </p>
        </div>
      </DemoCard>
      <DemoCard
        title={tr('Async Table')}
        description={tr('A real request for every search, page, and sort. Cached when it counts.')}
        full
        code={`const table = useServerTable({ loadPage })\n\n<SearchInput value={table.search} onChange={table.setSearch} />\n<DataTable data={table.rows} columns={columns}\n  getRowId={row => row.id} server={table.server}\n  loading={table.loading} error={table.error} onRetry={table.retry}\n/>\n// loadPage: ({ search, page, pageSize, sort, signal }) =>\n//   Promise<{ rows: Member[]; total: number }>`}
      >
        <div className="demo-table-toolbar">
          <SearchInput
            label={tr('Search remote members')}
            placeholder={tr('Search the team directory…')}
            value={table.search}
            onChange={table.setSearch}
          />
          <div className="demo-row">
            <Badge variant="primary" dot>
              {tr('Async API')}
            </Badge>
            <Button size="sm" variant="outlined" onClick={table.retry}>
              <RefreshCw size={14} />
              {tr('Refresh')}
            </Button>
          </div>
        </div>
        <DataTable
          data={table.rows}
          columns={columns}
          getRowId={(member) => member.id}
          server={table.server}
          loading={table.loading}
          error={localize(table.error)}
          onRetry={table.retry}
          itemLabel={tr('members')}
          aria-label={tr('Remote team directory')}
          emptyState={<SearchEmptyState onReset={() => table.setSearch('')} />}
        />
      </DemoCard>
    </>
  )
}
