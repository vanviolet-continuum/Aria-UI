import { useI18n } from '../../i18n/use-i18n'
import { Command as Cmdk } from 'cmdk'
import { CalendarDays, Check, ListFilter, Search } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../button/button'
import { Chip } from '../chip/chip'
import { Popover } from '../popover/popover'
import { Calendar } from '../calendar/calendar'
import type { DateRange } from '../calendar/date-utils'
import { isFilterActive, type TableFilterDef, type TableFilterValue } from './types'

export interface TableFilterProps<T> {
  filters: TableFilterDef<T>[]
  value: TableFilterValue
  onChange: (value: TableFilterValue) => void
  disabled?: boolean
}
export function TableFilter<T>({ filters, value, onChange, disabled }: TableFilterProps<T>) {
  const { t: tr, text: localize } = useI18n()

  const [dateField, setDateField] = useState<string | null>(null)
  const active = filters.filter((filter) => isFilterActive(value[filter.id]))
  const update = (id: string, next: string[] | DateRange) => onChange({ ...value, [id]: next })
  const remove = (id: string) => {
    const next = { ...value }
    delete next[id]
    onChange(next)
  }
  const date = filters.find((filter) => filter.id === dateField)
  return (
    <div className="table-filters">
      <Popover
        className="table-filter-popover"
        onOpenChange={(open) => {
          if (!open) setDateField(null)
        }}
        trigger={
          <Button variant="outlined" size="sm" disabled={disabled}>
            <ListFilter size={14} />
            {tr('Filters')}
            {active.length > 0 && <span className="filter-count">{active.length}</span>}
          </Button>
        }
      >
        {date ? (
          <div className="table-filter-calendar">
            <Button variant="text" size="sm" onClick={() => setDateField(null)}>
              {tr('← All filters')}
            </Button>
            <strong>{localize(date.label)}</strong>
            <Calendar
              mode="range"
              value={(value[date.id] as DateRange) ?? {}}
              onChange={(range) => update(date.id, range)}
            />
            <Button variant="outlined" size="sm" onClick={() => remove(date.id)}>
              {tr('Clear date range')}
            </Button>
          </div>
        ) : (
          <Cmdk className="ui-command" loop label={tr('Table filters')}>
            <div className="command-search">
              <Search size={16} />
              <Cmdk.Input
                placeholder={tr('Find a filter or value…')}
                aria-label={tr('Search table filters')}
              />
            </div>
            <Cmdk.List className="command-list">
              <Cmdk.Empty className="command-empty">{tr('No matching filters.')}</Cmdk.Empty>
              {filters.map((filter) => (
                <Cmdk.Group
                  key={filter.id}
                  heading={<div className="command-group">{localize(filter.label)}</div>}
                >
                  {filter.type === 'date' ? (
                    <Cmdk.Item
                      className="command-item"
                      value={localize(filter.label)}
                      onSelect={() => setDateField(filter.id)}
                    >
                      <CalendarDays size={15} />
                      <span>{tr('Choose date range')}</span>
                    </Cmdk.Item>
                  ) : (
                    filter.options.map((option) => {
                      const selected = Array.isArray(value[filter.id])
                        ? (value[filter.id] as string[])
                        : []
                      const checked = selected.includes(option.value)
                      return (
                        <Cmdk.Item
                          key={option.value}
                          className="command-item"
                          value={`${localize(filter.label)} ${localize(option.label)}`}
                          onSelect={() =>
                            update(
                              filter.id,
                              checked
                                ? selected.filter((item) => item !== option.value)
                                : [...selected, option.value],
                            )
                          }
                        >
                          <span className={`filter-check${checked ? ' filter-check--active' : ''}`}>
                            {checked && <Check size={12} />}
                          </span>
                          <span>{localize(option.label)}</span>
                          {checked && <small>{tr('Selected')}</small>}
                        </Cmdk.Item>
                      )
                    })
                  )}
                </Cmdk.Group>
              ))}
            </Cmdk.List>
            <div className="command-footer">
              <span>{tr('↑ ↓ Navigate · ↵ Toggle')}</span>
              <button type="button" disabled={!active.length} onClick={() => onChange({})}>
                {tr('Clear all')}
              </button>
            </div>
          </Cmdk>
        )}
      </Popover>
      {active.map((filter) => {
        const selected = value[filter.id]
        const label = Array.isArray(selected)
          ? selected
              .map((item) =>
                filter.type === 'choice'
                  ? localize(filter.options.find((option) => option.value === item)?.label ?? item)
                  : item,
              )
              .join(', ')
          : `${selected.from ?? '…'} – ${selected.to ?? '…'}`
        return (
          <Chip key={filter.id} variant="primary" onRemove={() => remove(filter.id)}>
            {tr('{{value0}}: {{value1}}', {
              value0: localize(filter.label),
              value1: localize(label),
            })}
          </Chip>
        )
      })}
      {active.length > 0 && (
        <Button size="sm" variant="text" onClick={() => onChange({})}>
          {tr('Clear all')}
        </Button>
      )}
    </div>
  )
}
