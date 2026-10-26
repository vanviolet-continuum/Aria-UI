import { describe, expect, it } from 'vitest'
import { getColumnLayout } from '../../../../src/template/ui/data-table/column-layout'
import type { ColumnDef } from '../../../../src/template/ui/data-table/types'

const columns: ColumnDef<{ id: string }>[] = [
  { id: 'name', header: 'Name', width: 200, enableHiding: false },
  { id: 'email', header: 'Email', width: 250 },
  { id: 'role', header: 'Role', width: 150 },
  { id: 'actions', header: 'Actions', width: 80 },
]
describe('column visibility and pinning', () => {
  it('preserves mandatory columns and removes hidden columns before calculating offsets', () => {
    const result = getColumnLayout(
      columns,
      { name: false, email: false },
      { left: ['name', 'role'], right: ['actions'] },
      true,
    )
    expect(result.map((item) => item.column.id)).toEqual(['name', 'role', 'actions'])
    expect(result[0].style.left).toBe(44)
    expect(result[1].style.left).toBe(244)
    expect(result[2].style.right).toBe(0)
  })
  it('calculates multiple right pins from the outer edge and ignores unknown or duplicated pins', () => {
    const result = getColumnLayout(
      columns,
      {},
      { left: ['name', 'unknown'], right: ['name', 'role', 'actions', 'actions'] },
    )
    expect(result.map((item) => item.column.id)).toEqual(['name', 'email', 'role', 'actions'])
    expect(result.find((item) => item.column.id === 'role')?.style.right).toBe(80)
    expect(result.filter((item) => item.edge).map((item) => item.column.id)).toEqual([
      'name',
      'role',
    ])
  })
  it('keeps original widths without pinning and normalizes non-pixel widths only for fixed layouts', () => {
    const relative: ColumnDef<unknown>[] = [
      { id: 'x', header: 'X', width: '30%' },
      { id: 'y', header: 'Y', width: '120px' },
    ]
    expect(getColumnLayout(relative)[0].style.width).toBe('30%')
    expect(
      getColumnLayout(relative, {}, { left: ['x'], right: ['y'] }).map((item) => item.style.width),
    ).toEqual([180, 120])
  })
})
