import { describe, expect, it } from 'vitest'
import { filterTableData, type TableFilterDef } from '../../../../templates/ui/table.filter/types'

const rows = [
  { status: 'active', role: 'admin', joined: '2026-01-01T12:00:00' },
  { status: 'away', role: 'admin', joined: '2026-02-03' },
  { status: 'active', role: 'user', joined: '2026-02-28' },
]
const definitions: TableFilterDef<(typeof rows)[number]>[] = [
  { id: 'status', label: 'Status', type: 'choice', options: [] },
  { id: 'role', label: 'Role', type: 'choice', options: [] },
  { id: 'joined', label: 'Joined', type: 'date' },
]
describe('command table filters', () => {
  it('combines options with OR and fields with AND', () => {
    expect(
      filterTableData(rows, definitions, { status: ['active', 'away'], role: ['admin'] }),
    ).toEqual(rows.slice(0, 2))
  })
  it('keeps date boundaries inclusive and supports one-sided ranges', () => {
    expect(
      filterTableData(rows, definitions, { joined: { from: '2026-01-01', to: '2026-02-03' } }),
    ).toEqual(rows.slice(0, 2))
    expect(filterTableData(rows, definitions, { joined: { from: '2026-02-28' } })).toEqual([
      rows[2],
    ])
  })
  it('ignores empty or unknown filters and supports computed accessors', () => {
    expect(filterTableData(rows, definitions, { status: [], joined: {}, ignored: ['x'] })).toBe(
      rows,
    )
    expect(
      filterTableData(
        rows,
        [
          {
            id: 'computed',
            label: 'Status',
            type: 'choice',
            options: [],
            accessor: (row) => row.status.toUpperCase(),
          },
        ],
        { computed: ['AWAY'] },
      ),
    ).toEqual([rows[1]])
  })
})
