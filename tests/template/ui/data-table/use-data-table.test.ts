import { describe, expect, it } from 'vitest'
import { getCellValue, pageBounds } from '../../../../templates/ui/data.table/use.data.table'

describe('reusable table pagination', () => {
  it('keeps empty results on a valid first page', () => {
    expect(pageBounds(0, 3, 8)).toEqual({ page: 1, pageCount: 1, start: 0, end: 0, offset: 0 })
  })
  it('clamps the page when a filter or deletion reduces the results', () => {
    expect(pageBounds(12, 8, 5)).toEqual({ page: 3, pageCount: 3, start: 11, end: 12, offset: 10 })
    expect(pageBounds(12, -1, 5).page).toBe(1)
  })
  it('supports both property and computed accessors', () => {
    const row = { price: 24, quantity: 3 }
    expect(getCellValue(row, 'quantity')).toBe(3)
    expect(getCellValue(row, (item) => item.price * item.quantity)).toBe(72)
  })
})
