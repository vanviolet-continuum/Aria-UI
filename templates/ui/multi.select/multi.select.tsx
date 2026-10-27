import * as Primitive from '@radix-ui/react-popover'
import clsx from 'clsx'
import {
  forwardRef,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import { ChevronsUpDown } from '../../icons/navigation/chevrons.up.down.icon'
import { Search } from '../../icons/interface/search.icon'
import { useControllableState } from '../../hooks/use.controllable.state'
import { useI18n } from '../../i18n/use.i18n'
import { PopoverContent, type PopoverContentProps } from '../popover/popover'
import { Checkbox } from '../checkbox/checkbox'
import { Chip } from '../chip/chip'
import { Text } from '../text/text'
import { Button } from '../button/button'
import { ErrorState } from '../error.state/error.state'
import { SearchEmptyState } from '../search.empty.state/search.empty.state'
import { Spinner } from '../loading.overlay/loading.overlay'
import type { ComboboxOption } from '../combobox/types'

export interface MultiSelectProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'value' | 'defaultValue' | 'onChange' | 'children'
> {
  options: readonly ComboboxOption[]
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  selectedOptions?: readonly ComboboxOption[]
  placeholder?: string
  searchPlaceholder?: string
  searchable?: boolean
  search?: string
  onSearchChange?: (search: string) => void
  loading?: boolean
  error?: unknown
  onRetry?: () => unknown
  hasMore?: boolean
  loadingMore?: boolean
  onLoadMore?: () => unknown
  maxSelected?: number
  showChips?: boolean
  clearable?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  renderOption?: (option: ComboboxOption, selected: boolean) => ReactNode
  renderValue?: (selected: readonly ComboboxOption[]) => ReactNode
  contentProps?: Omit<PopoverContentProps, 'children'>
}
export const MultiSelect = /* @__PURE__ */ forwardRef<HTMLButtonElement, MultiSelectProps>(
  function MultiSelect(
    {
      options,
      value,
      defaultValue = [],
      onValueChange,
      selectedOptions = [],
      placeholder = 'Select options',
      searchPlaceholder = 'Search options…',
      searchable = true,
      search,
      onSearchChange,
      loading,
      error,
      onRetry,
      hasMore,
      loadingMore,
      onLoadMore,
      maxSelected,
      showChips = true,
      clearable = true,
      open,
      onOpenChange,
      renderOption,
      renderValue,
      contentProps,
      disabled,
      name,
      form,
      onBlur,
      className,
      ...props
    },
    ref,
  ) {
    const { t, locale } = useI18n()
    const [selected, setSelected] = useControllableState(value, defaultValue, onValueChange)
    const [visible, setVisible] = useControllableState(open, false, onOpenChange)
    const [query, setQuery] = useControllableState(search, '', onSearchChange)
    const [retrying, setRetrying] = useState(false)
    const [pageLoading, setPageLoading] = useState(false)
    const listId = useId()
    const content = useRef<HTMLDivElement>(null)
    // Retain labels for selected values while the server returns a different search/page.
    const labels = useRef(new Map<string, ComboboxOption>())
    for (const option of [...selectedOptions, ...options]) labels.current.set(option.value, option)
    const picked = selected.map((item) => labels.current.get(item) ?? { value: item, label: item })
    const filtered = onSearchChange
      ? options
      : options.filter((option) =>
          (option.label + ' ' + (option.description ?? ''))
            .toLocaleLowerCase(locale)
            .includes(query.toLocaleLowerCase(locale)),
        )
    const toggle = (option: ComboboxOption) => {
      if (disabled || option.disabled) return
      const exists = selected.includes(option.value)
      if (!exists && maxSelected !== undefined && selected.length >= maxSelected) return
      setSelected(
        exists ? selected.filter((item) => item !== option.value) : [...selected, option.value],
      )
    }
    const moveFocus = (event: KeyboardEvent<HTMLElement>) => {
      const choices = Array.from(
        content.current?.querySelectorAll<HTMLInputElement>(
          '.ui-multi-option input:not(:disabled)',
        ) ?? [],
      )
      if (!choices.length) return
      const target = event.target
      const index = choices.indexOf(target as HTMLInputElement)
      if (index < 0 && event.key !== 'ArrowDown') return
      const next =
        event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? choices.length - 1
            : event.key === 'ArrowDown'
              ? (index + 1) % choices.length
              : event.key === 'ArrowUp'
                ? (index - 1 + choices.length) % choices.length
                : -1
      if (next >= 0) {
        event.preventDefault()
        choices[next]?.focus()
      }
    }
    const changeOpen = (next: boolean) => {
      setVisible(next)
      if (!next) setQuery('')
    }
    return (
      <div className="ui-multi-select">
        {selected.map((item) =>
          name ? (
            <input
              key={item}
              type="hidden"
              name={name}
              form={form}
              value={item}
              disabled={disabled}
            />
          ) : null,
        )}
        <Primitive.Root open={visible} onOpenChange={changeOpen}>
          <Primitive.Trigger asChild>
            <button
              {...props}
              ref={ref}
              type="button"
              disabled={disabled}
              onBlur={onBlur}
              className={clsx('combobox-trigger', 'ui-multi-trigger', className)}
              aria-controls={visible ? listId : undefined}
            >
              <Text as="span" variant="body" tone={selected.length ? 'inherit' : 'muted'}>
                {renderValue
                  ? renderValue(picked)
                  : selected.length
                    ? picked.length <= 2
                      ? picked.map((option) => option.label).join(', ')
                      : t('{{count}} selected', { count: picked.length })
                    : t(placeholder)}
              </Text>
              <ChevronsUpDown size={16} aria-hidden="true" />
            </button>
          </Primitive.Trigger>
          <Primitive.Portal>
            <PopoverContent
              align="start"
              size="auto"
              variant="menu"
              scrollArea="content"
              {...contentProps}
              ref={content}
              className={clsx('ui-multi-popover', contentProps?.className)}
              onKeyDown={(event) => {
                contentProps?.onKeyDown?.(event)
                if (!event.defaultPrevented) moveFocus(event)
              }}
            >
              {searchable && (
                <div className="ui-multi-search">
                  <Search size={16} aria-hidden="true" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={t(searchPlaceholder)}
                    aria-label={t(searchPlaceholder)}
                    disabled={disabled}
                  />
                </div>
              )}
              <div
                id={listId}
                className="ui-multi-results"
                aria-busy={loading || retrying || undefined}
                role="group"
                aria-label={t('Options')}
              >
                {error != null ? (
                  <ErrorState
                    compact
                    error={error}
                    retrying={retrying || loading}
                    onRetry={
                      onRetry
                        ? async () => {
                            setRetrying(true)
                            try {
                              await onRetry()
                            } finally {
                              setRetrying(false)
                            }
                          }
                        : undefined
                    }
                  />
                ) : loading ? (
                  <div className="ui-multi-loading" role="status">
                    <Spinner size={20} />
                    <Text variant="description">{t('Loading…')}</Text>
                  </div>
                ) : !filtered.length ? (
                  <SearchEmptyState title="No options found." />
                ) : (
                  filtered.map((option) => {
                    const checked = selected.includes(option.value)
                    const blocked =
                      disabled ||
                      option.disabled ||
                      (!checked && maxSelected !== undefined && selected.length >= maxSelected)
                    return (
                      <label
                        key={option.value}
                        className="ui-multi-option"
                        data-selected={checked || undefined}
                        data-disabled={blocked || undefined}
                      >
                        <Checkbox
                          checked={checked}
                          disabled={blocked}
                          onChange={() => toggle(option)}
                        />
                        {renderOption ? (
                          renderOption(option, checked)
                        ) : (
                          <span className="ui-multi-option-copy">
                            <Text as="span" variant="label" tone="inherit">
                              {option.label}
                            </Text>
                            {option.description && (
                              <Text as="span" variant="description">
                                {option.description}
                              </Text>
                            )}
                          </span>
                        )}
                      </label>
                    )
                  })
                )}
                {error == null && hasMore && onLoadMore && (
                  <Button
                    variant="text"
                    size="sm"
                    fullWidth
                    loading={loadingMore || pageLoading}
                    onClick={async () => {
                      setPageLoading(true)
                      try {
                        await onLoadMore()
                      } catch {
                        /* Query owner renders the error inline. */
                      } finally {
                        setPageLoading(false)
                      }
                    }}
                  >
                    {t('Load more')}
                  </Button>
                )}
              </div>
              <div className="ui-multi-footer">
                <Text as="span" variant="caption">
                  {t('{{count}} selected', { count: selected.length })}
                </Text>
                {clearable && selected.length > 0 && (
                  <Button
                    size="xs"
                    variant="text"
                    disabled={disabled}
                    onClick={() =>
                      setSelected(selected.filter((item) => labels.current.get(item)?.disabled))
                    }
                  >
                    {t('Clear selection')}
                  </Button>
                )}
              </div>
            </PopoverContent>
          </Primitive.Portal>
        </Primitive.Root>
        {showChips && !!picked.length && (
          <div className="ui-multi-chips">
            {picked.map((option) => (
              <Chip
                key={option.value}
                size="sm"
                variant="primary"
                disabled={disabled || option.disabled}
                onRemove={disabled || option.disabled ? undefined : () => toggle(option)}
                removeLabel={t('Remove {{value0}}', { value0: option.label })}
              >
                <span>{option.label}</span>
              </Chip>
            ))}
          </div>
        )}
      </div>
    )
  },
)
