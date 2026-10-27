import { Text } from '../text/text'
import { PopoverContent } from '../popover/popover'
import { useI18n } from '../../i18n/use.i18n'
import * as Popover from '@radix-ui/react-popover'
import { ChevronsUpDown } from 'lucide-react'
import { useEffect, useId, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { Spinner } from '../loading.overlay/loading.overlay'
import { ComboboxOptions } from './combobox.options'
import { ComboboxSearch } from './combobox.search'
import { useAsyncOptions } from './use.async.options'
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
  onBlur,
  onOpenChange,
  error,
  onRetry,
  placeholder = 'Select an option',
  searchPlaceholder = 'Search options…',
  emptyMessage = 'No options found.',
  disabled,
  clearable,
  searchable = true,
  size = 'md',
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
  const contentRef = useRef<HTMLDivElement>(null)
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
  const failure = loadOptions ? async.error : error
  const visibleOptions = pending || failure ? noOptions : filtered
  useEffect(() => {
    setActive((previous) => Math.max(0, Math.min(previous, filtered.length - 1)))
  }, [filtered.length])
  const changeOpen = (next: boolean) => {
    if (!next) onBlur?.()
    onOpenChange?.(next)
    setOpen(next)
    setQuery('')
    onSearchChange?.('')
    setActive(
      Math.max(
        0,
        source.findIndex((option) => option.value === value),
      ),
    )
  }
  const choose = (option: ComboboxOption) => {
    if (option.disabled) return
    onOptionChange?.(option)
    labels.current.set(option.value, option)
    if (labels.current.size > 30) labels.current.delete(labels.current.keys().next().value!)
    onChange(clearable && option.value === value ? '' : option.value)
    changeOpen(false)
  }
  return (
    <Popover.Root open={open} onOpenChange={changeOpen}>
      {name && <input type="hidden" name={name} value={value ?? ''} />}
      <Popover.Trigger asChild>
        <Text
          as="button"
          variant="button"
          tone="inherit"
          type="button"
          id={id}
          disabled={disabled}
          className={clsx('combobox-trigger', `combobox-trigger--${size}`, className)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          aria-busy={pending || undefined}
          {...aria}
        >
          <Text
            as="span"
            variant="menu"
            tone="inherit"
            className={selected ? '' : 'ui-placeholder'}
          >
            {localize(selected?.label ?? placeholder)}
          </Text>
          <Text as="span" variant="menu" tone="inherit" className="combobox-trigger-icons">
            {pending ? <Spinner size={13} label={tr('')} /> : <ChevronsUpDown size={15} />}
          </Text>
        </Text>
      </Popover.Trigger>
      <Popover.Portal>
        <PopoverContent
          ref={contentRef}
          size="auto"
          variant="form"
          scrollArea="content"
          className="combobox-popover"
          data-searchable={searchable}
          align="start"
          sideOffset={6}
          onOpenAutoFocus={(event) => {
            event.preventDefault()
            if (searchable) searchRef.current?.focus()
            else contentRef.current?.querySelector<HTMLElement>('[role="listbox"]')?.focus()
          }}
        >
          {searchable && (
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
              options={visibleOptions}
              onChoose={choose}
              placeholder={localize(searchPlaceholder)}
            />
          )}
          <ComboboxOptions
            options={visibleOptions}
            selected={value}
            active={active}
            onActive={setActive}
            onChoose={choose}
            id={listId}
            loading={pending}
            loadingMore={loadOptions ? async.loadingMore : loadingMore}
            hasMore={loadOptions ? !!async.nextCursor : hasMore}
            onLoadMore={loadOptions ? async.loadMore : onLoadMore}
            error={failure}
            onRetry={loadOptions ? async.retry : onRetry}
            emptyMessage={localize(emptyMessage)}
            focusable={!searchable}
          />
        </PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  )
}
