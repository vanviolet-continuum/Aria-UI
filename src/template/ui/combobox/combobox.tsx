import { useI18n } from '../../i18n/use-i18n'
import * as Popover from '@radix-ui/react-popover'
import { ChevronsUpDown } from 'lucide-react'
import { useEffect, useId, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { Spinner } from '../loading-overlay/loading-overlay'
import { ComboboxOptions } from './combobox-options'
import { ComboboxSearch } from './combobox-search'
import { useAsyncOptions } from './use-async-options'
import type { ComboboxOption, ComboboxProps } from './types'

export type {
  ComboboxOption,
  ComboboxProps,
  OptionsLoader,
  OptionsPage,
  OptionsRequest,
} from './types'
const noOptions: ComboboxOption[] = []
export function Combobox({
  options = noOptions,
  value,
  onChange,
  onOptionChange,
  selectedOption,
  loadOptions,
  debounceMs,
  cacheKey,
  loading,
  loadingMore,
  hasMore,
  onLoadMore,
  onSearchChange,
  placeholder = 'Select an option',
  searchPlaceholder = 'Search options…',
  emptyMessage = 'No options found.',
  disabled,
  clearable,
  id,
  name,
  className,
  ...aria
}: ComboboxProps) {
  const { t: tr, text: localize } = useI18n()

  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const listId = useId()
  const searchRef = useRef<HTMLInputElement>(null)
  const labels = useRef(new Map<string, ComboboxOption>())
  const async = useAsyncOptions(open, query, loadOptions, debounceMs, cacheKey)
  const remote = !!loadOptions || !!onSearchChange
  const source = loadOptions ? async.options : options
  const filtered = useMemo(
    () =>
      remote
        ? source
        : source.filter((option) =>
            `${localize(option.label)} ${localize(option.description ?? '')} ${option.label}`
              .toLowerCase()
              .includes(query.toLowerCase()),
          ),
    [source, remote, query, localize],
  )
  const selected =
    selectedOption ??
    source.find((option) => option.value === value) ??
    options.find((option) => option.value === value) ??
    (value ? labels.current.get(value) : undefined)
  const pending = loadOptions ? async.loading : loading
  useEffect(() => {
    setActive((previous) => Math.max(0, Math.min(previous, filtered.length - 1)))
  }, [filtered.length])
  const choose = (option: ComboboxOption) => {
    if (option.disabled) return
    onOptionChange?.(option)
    labels.current.set(option.value, option)
    if (labels.current.size > 30) labels.current.delete(labels.current.keys().next().value!)
    onChange(clearable && option.value === value ? '' : option.value)
    setOpen(false)
  }
  return (
    <Popover.Root
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        setQuery('')
        onSearchChange?.('')
        setActive(
          Math.max(
            0,
            source.findIndex((option) => option.value === value),
          ),
        )
      }}
    >
      {name && <input type="hidden" name={name} value={value ?? ''} />}
      <Popover.Trigger asChild>
        <button
          type="button"
          id={id}
          disabled={disabled}
          className={clsx('combobox-trigger', className)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          aria-busy={pending || undefined}
          {...aria}
        >
          <span className={selected ? '' : 'ui-placeholder'}>
            {localize(selected?.label ?? placeholder)}
          </span>
          <span className="combobox-trigger-icons">
            {pending ? <Spinner size={13} label={tr('')} /> : <ChevronsUpDown size={15} />}
          </span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="combobox-popover"
          align="start"
          sideOffset={6}
          onOpenAutoFocus={(event) => {
            event.preventDefault()
            searchRef.current?.focus()
          }}
        >
          <ComboboxSearch
            ref={searchRef}
            query={query}
            onQuery={(next) => {
              setQuery(next)
              setActive(0)
              onSearchChange?.(next)
            }}
            listId={listId}
            active={active}
            onActive={setActive}
            options={filtered}
            onChoose={choose}
            placeholder={localize(searchPlaceholder)}
          />
          <ComboboxOptions
            options={filtered}
            selected={value}
            active={active}
            onActive={setActive}
            onChoose={choose}
            id={listId}
            loading={pending}
            loadingMore={loadOptions ? async.loadingMore : loadingMore}
            hasMore={loadOptions ? !!async.nextCursor : hasMore}
            onLoadMore={loadOptions ? async.loadMore : onLoadMore}
            error={localize(loadOptions ? async.error : null)}
            onRetry={async.retry}
            emptyMessage={localize(emptyMessage)}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
