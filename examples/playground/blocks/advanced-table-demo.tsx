import { useI18n } from '../../../src/template/i18n'
import { useMemo, useState } from 'react'
import {
  DataTable,
  SearchEmptyState,
  SearchInput,
  TableColumnMenu,
  TableFilter,
  filterTableData,
  useTableColumns,
  type TableFilterValue,
} from '@/template/ui'
import { DemoCard } from '../demo-card'
import { memberColumns, memberFilters, projectMembers } from './table-data'

export function AdvancedTableDemo() {
  const { t: tr } = useI18n()

  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState<TableFilterValue>({})
  const [selected, setSelected] = useState<string[]>([])
  const columns = useTableColumns({ pinning: { left: ['name'], right: ['actions'] } })
  const rows = useMemo(
    () =>
      filterTableData(projectMembers, memberFilters, filters).filter((row) =>
        `${row.name} ${row.email} ${row.role}`.toLowerCase().includes(search.toLowerCase()),
      ),
    [search, filters],
  )
  return (
    <DemoCard
      full
      title={tr('Table controls & command filters')}
      description={tr(
        'Keep the important columns in view. Choose what to show. Find exactly what you need.',
      )}
      code={`const columns = useTableColumns({ pinning: { left: ['name'], right: ['actions'] } })\nconst [filters, setFilters] = useState<TableFilterValue>({})\nconst rows = filterTableData(data, filterDefinitions, filters)\n\n<TableFilter filters={filterDefinitions} value={filters} onChange={setFilters} />\n<TableColumnMenu columns={columnDefinitions}\n  visibility={columns.visibility} onVisibilityChange={columns.setVisibility}\n  pinning={columns.pinning} onPinningChange={columns.setPinning}\n  onReset={columns.reset} />\n<DataTable data={rows} columns={columnDefinitions} getRowId={row => row.id}\n  columnVisibility={columns.visibility} columnPinning={columns.pinning} />\n// For server filtering, pass filters to your API loader instead of filterTableData.`}
    >
      <div className="demo-stack">
        <div className="demo-table-toolbar">
          <SearchInput
            value={search}
            onChange={setSearch}
            label={tr('Search advanced team table')}
            placeholder={tr('Search name, email, or role…')}
          />
          <TableColumnMenu
            columns={memberColumns}
            visibility={columns.visibility}
            onVisibilityChange={columns.setVisibility}
            pinning={columns.pinning}
            onPinningChange={columns.setPinning}
            onReset={columns.reset}
          />
        </div>
        <TableFilter filters={memberFilters} value={filters} onChange={setFilters} />
        <DataTable
          data={rows}
          columns={memberColumns}
          columnVisibility={columns.visibility}
          columnPinning={columns.pinning}
          getRowId={(row) => row.id}
          selection={{ selectedIds: selected, onChange: setSelected }}
          initialPageSize={5}
          resetKey={search + JSON.stringify(filters)}
          aria-label={tr('Advanced team table')}
          itemLabel={tr('members')}
          emptyState={
            <SearchEmptyState
              onReset={() => {
                setFilters({})
                setSearch('')
              }}
            />
          }
        />
        <p className="demo-note">
          {tr(
            'Scroll horizontally: the member, selection, and actions stay visible. Use Columns to pin any column on either side.',
          )}
        </p>
      </div>
    </DemoCard>
  )
}
