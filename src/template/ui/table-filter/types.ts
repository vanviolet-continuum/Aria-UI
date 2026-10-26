import type { DateRange } from '../calendar/date-utils'

export type FilterValue = string[] | DateRange
export type TableFilterValue = Record<string, FilterValue>
interface FilterBase<T> {
  id: string
  label: string
  accessor?: keyof T | ((row: T) => string | number | Date | null | undefined)
}
export interface ChoiceFilter<T> extends FilterBase<T> {
  type: 'choice'
  options: { value: string; label: string }[]
}
export interface DateFilter<T> extends FilterBase<T> {
  type: 'date'
}
export type TableFilterDef<T> = ChoiceFilter<T> | DateFilter<T>

export function isFilterActive(value?: FilterValue) {
  return Array.isArray(value) ? value.length > 0 : !!(value?.from || value?.to)
}
/** OR within a field, AND between fields. Date boundaries are inclusive local dates. */
export function filterTableData<T>(
  rows: T[],
  definitions: TableFilterDef<T>[],
  values: TableFilterValue,
) {
  const active = definitions.filter((definition) => isFilterActive(values[definition.id]))
  if (!active.length) return rows
  return rows.filter((row) =>
    active.every((definition) => {
      const accessor = definition.accessor ?? (definition.id as keyof T)
      const raw = typeof accessor === 'function' ? accessor(row) : row[accessor]
      const value = values[definition.id]
      if (Array.isArray(value)) return value.includes(String(raw ?? ''))
      const date =
        raw instanceof Date
          ? `${raw.getFullYear()}-${String(raw.getMonth() + 1).padStart(2, '0')}-${String(raw.getDate()).padStart(2, '0')}`
          : String(raw ?? '').slice(0, 10)
      return (
        /^\d{4}-\d{2}-\d{2}$/.test(date) &&
        (!value.from || date >= value.from) &&
        (!value.to || date <= value.to)
      )
    }),
  )
}
