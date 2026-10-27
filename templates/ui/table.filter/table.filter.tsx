import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import { Command as Cmdk } from 'cmdk'
import { ArrowLeft, CalendarDays, ListFilter, Search } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../button/button'
import { Chip } from '../chip/chip'
import { Popover } from '../popover/popover'
import { RangeCalendar } from '../calendar/range.calendar'
import { formatDate, type DateRange } from '../calendar/date.utils'
import { Checkbox } from '../checkbox/checkbox'
import { isFilterActive, type TableFilterDef, type TableFilterValue } from './types'

export interface TableFilterProps<T> {
  filters: TableFilterDef<T>[]
  value: TableFilterValue
  onChange: (value: TableFilterValue) => void
  disabled?: boolean
}
export function TableFilter<T>({ filters, value, onChange, disabled }: TableFilterProps<T>) {
  const { t: tr, text: localize, locale } = useI18n()

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
        variant="menu"
        scrollArea="content"
        className={`table-filter-popover${date ? ' table-filter-popover--date' : ''}`}
        onOpenChange={(open) => {
          if (!open) setDateField(null)
        }}
        trigger={
          <Button variant="outlined" size="sm" disabled={disabled}>
            <ListFilter size={14} />
            {tr('Filters')}
            {active.length > 0 && (
              <Text as="span" variant="table" className="filter-count">
                {active.length}
              </Text>
            )}
          </Button>
        }
      >
        {date ? (
          <div className="table-filter-calendar">
            <div className="table-filter-date-heading">
              <Button variant="text" size="sm" onClick={() => setDateField(null)}>
                <ArrowLeft size={14} />
                {tr('All filters')}
              </Button>
              <Text variant="label">{localize(date.label)}</Text>
              <Text variant="caption">{tr('Choose a start and end date')}</Text>
            </div>
            <div className="table-filter-date-body">
              <RangeCalendar
                value={(value[date.id] as DateRange) ?? {}}
                onChange={(range) => update(date.id, range)}
              />
            </div>
            <div className="table-filter-date-footer">
              <Button
                variant="text"
                size="sm"
                disabled={!isFilterActive(value[date.id])}
                onClick={() => remove(date.id)}
              >
                {tr('Clear date range')}
              </Button>
            </div>
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
                  heading={
                    <Text as="div" variant="table" className="command-group">
                      {localize(filter.label)}
                    </Text>
                  }
                >
                  {filter.type === 'date' ? (
                    <Cmdk.Item
                      className="command-item"
                      value={localize(filter.label)}
                      onSelect={() => setDateField(filter.id)}
                    >
                      <CalendarDays size={15} />
                      <Text as="span" variant="table">
                        {tr('Choose date range')}
                      </Text>
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
                          <Checkbox
                            checked={checked}
                            readOnly
                            tabIndex={-1}
                            aria-hidden="true"
                            className="filter-choice-checkbox"
                          />
                          <Text as="span" variant="table">
                            {localize(option.label)}
                          </Text>
                          {checked && (
                            <Text as="small" variant="caption">
                              {tr('Selected')}
                            </Text>
                          )}
                        </Cmdk.Item>
                      )
                    })
                  )}
                </Cmdk.Group>
              ))}
            </Cmdk.List>
            <div className="command-footer">
              <Text as="span" variant="table">
                {tr('↑ ↓ Navigate · ↵ Toggle')}
              </Text>
              <Text
                as="button"
                variant="button"
                tone="inherit"
                type="button"
                disabled={!active.length}
                onClick={() => onChange({})}
              >
                {tr('Clear all')}
              </Text>
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
          : `${selected.from ? formatDate(selected.from, undefined, locale) : '…'} – ${selected.to ? formatDate(selected.to, undefined, locale) : '…'}`
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
