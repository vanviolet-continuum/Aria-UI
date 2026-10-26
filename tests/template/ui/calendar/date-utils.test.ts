import { describe, expect, it } from 'vitest'
import {
  addDays,
  calendarDays,
  fromDateKey,
  isDateDisabled,
  selectRange,
  toDateKey,
} from '../../../../src/template/ui/calendar/date-utils'

describe('calendar date values', () => {
  it('retains the local calendar date without a UTC conversion', () => {
    expect(toDateKey(fromDateKey('2026-10-26'))).toBe('2026-10-26')
  })
  it('crosses leap days and year boundaries correctly', () => {
    expect(addDays('2024-02-28', 1)).toBe('2024-02-29')
    expect(addDays('2024-02-28', 2)).toBe('2024-03-01')
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01')
  })
  it('shows a complete six-week grid starting on Monday', () => {
    const days = calendarDays(new Date(2026, 9, 1))
    expect(days).toHaveLength(42)
    expect(fromDateKey(days[0]).getDay()).toBe(1)
    expect(days).toContain('2026-10-01')
    expect(days).toContain('2026-10-31')
    expect(new Set(days).size).toBe(42)
  })
  it('completes a range and starts over when choosing an earlier date', () => {
    expect(selectRange({ from: '2026-10-10' }, '2026-10-20')).toEqual({
      from: '2026-10-10',
      to: '2026-10-20',
    })
    expect(selectRange({ from: '2026-10-10' }, '2026-10-05')).toEqual({ from: '2026-10-05' })
    expect(selectRange({ from: '2026-10-10', to: '2026-10-20' }, '2026-10-15')).toEqual({
      from: '2026-10-15',
    })
  })
  it('supports a one-day range and inclusive minimum/maximum dates', () => {
    expect(selectRange({ from: '2026-10-10' }, '2026-10-10')).toEqual({
      from: '2026-10-10',
      to: '2026-10-10',
    })
    expect(isDateDisabled('2026-10-10', '2026-10-10', '2026-10-20')).toBe(false)
    expect(isDateDisabled('2026-10-20', '2026-10-10', '2026-10-20')).toBe(false)
    expect(isDateDisabled('2026-10-21', '2026-10-10', '2026-10-20')).toBe(true)
  })
})
