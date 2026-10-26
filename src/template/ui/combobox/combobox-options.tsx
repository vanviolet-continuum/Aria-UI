import { useI18n } from '../../i18n/use-i18n'
import { Check } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { LoadingIllustration, SearchIllustration } from '../illustrations'
import { Spinner } from '../loading-overlay/loading-overlay'
import type { ComboboxOption } from './types'
import { useOptionalTheme } from '../../theme/theme-provider'
import { controlMetrics } from '../../theme/control-metrics'
import { defaultTheme } from '../../theme/defaults'

interface Props {
  options: ComboboxOption[]
  selected?: string
  active: number
  onActive: (index: number) => void
  onChoose: (option: ComboboxOption) => void
  id: string
  loading?: boolean
  loadingMore?: boolean
  hasMore?: boolean
  onLoadMore?: () => void
  error?: string | null
  onRetry: () => void
  emptyMessage: string
  focusable?: boolean
}
export function ComboboxOptions({
  options,
  selected,
  active,
  onActive,
  onChoose,
  id,
  loading,
  loadingMore,
  hasMore,
  onLoadMore,
  error,
  onRetry,
  emptyMessage,
  focusable,
}: Props) {
  const { t: tr, text: localize } = useI18n()

  const list = useRef<HTMLDivElement>(null)
  const sentinel = useRef<HTMLDivElement>(null)
  const [scroll, setScroll] = useState(0)
  const typed = useRef({ text: '', at: 0 })
  const theme = useOptionalTheme()
  const { optionHeight, richOptionHeight } = controlMetrics(theme?.config ?? defaultTheme)
  const heights = useMemo(
    () => options.map((option) => (option.description ? richOptionHeight : optionHeight)),
    [options, optionHeight, richOptionHeight],
  )
  const offsets = useMemo(() => {
    const values = [0]
    for (const height of heights) values.push(values[values.length - 1] + height)
    return values
  }, [heights])
  const virtual = options.length > 80
  const start = virtual
    ? Math.max(0, heights.findIndex((height, index) => offsets[index] + height > scroll) - 4)
    : 0
  const visible = virtual ? options.slice(start, start + 15) : options
  useEffect(() => {
    if (!list.current) return
    const top = offsets[active] ?? 0
    const height = heights[active] ?? optionHeight
    if (top < list.current.scrollTop) list.current.scrollTop = top
    else if (top + height > list.current.scrollTop + list.current.clientHeight)
      list.current.scrollTop = top + height - list.current.clientHeight
  }, [active, offsets, heights, optionHeight])
  useEffect(() => {
    if (!sentinel.current || !hasMore || loading || loadingMore || !onLoadMore) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) onLoadMore()
      },
      { root: list.current, rootMargin: '0px 0px 70px 0px' },
    )
    observer.observe(sentinel.current)
    return () => observer.disconnect()
  }, [hasMore, loading, loadingMore, onLoadMore])
  return (
    <div
      ref={list}
      className="combobox-options"
      id={id}
      role="listbox"
      aria-label={tr('Available options')}
      aria-busy={loading || loadingMore}
      tabIndex={focusable ? 0 : undefined}
      aria-activedescendant={focusable && options[active] ? `${id}-${active}` : undefined}
      onKeyDown={(event) => {
        if (!focusable || event.target !== event.currentTarget) return
        const enabled = options
          .map((option, index) => ({ option, index }))
          .filter(({ option }) => !option.disabled)
        if (!enabled.length) return
        const current = enabled.findIndex((item) => item.index === active)
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          event.preventDefault()
          const direction = event.key === 'ArrowDown' ? 1 : -1
          onActive(enabled[(current + direction + enabled.length) % enabled.length].index)
        } else if (event.key === 'Home' || event.key === 'End') {
          event.preventDefault()
          onActive(event.key === 'Home' ? enabled[0].index : enabled[enabled.length - 1].index)
        } else if (
          (event.key === 'Enter' || event.key === ' ') &&
          options[active] &&
          !options[active].disabled
        ) {
          event.preventDefault()
          onChoose(options[active])
        } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
          event.preventDefault()
          const now = Date.now()
          const text =
            (now - typed.current.at > 750 ? '' : typed.current.text) + event.key.toLowerCase()
          typed.current = { text, at: now }
          const match = enabled.find(({ option }) =>
            localize(option.label).toLowerCase().startsWith(text),
          )
          if (match) onActive(match.index)
        }
      }}
      onScroll={(event) => setScroll(event.currentTarget.scrollTop)}
    >
      {loading && (
        <div className="combobox-status" role="status">
          <LoadingIllustration size={65} label={tr('')} />
          <span>{tr('Finding your options…')}</span>
        </div>
      )}
      {!loading && (
        <div
          style={
            virtual ? { height: offsets[offsets.length - 1], position: 'relative' } : undefined
          }
        >
          {visible.map((option, position) => {
            const index = start + position
            return (
              <button
                type="button"
                key={option.value}
                id={`${id}-${index}`}
                role="option"
                aria-selected={option.value === selected}
                disabled={option.disabled}
                aria-disabled={option.disabled}
                tabIndex={-1}
                onMouseEnter={() => onActive(index)}
                onClick={() => onChoose(option)}
                style={
                  virtual
                    ? {
                        position: 'absolute',
                        top: offsets[index],
                        left: 0,
                        width: '100%',
                        height: heights[index],
                      }
                    : { height: heights[index] }
                }
                className={clsx(
                  'combobox-option',
                  option.description && 'combobox-option--rich',
                  active === index && 'combobox-option--active',
                )}
              >
                <span className="combobox-option-copy">
                  <span className="combobox-option-label">{localize(option.label)}</span>
                  {option.description && <small>{localize(option.description)}</small>}
                </span>
                <span className="combobox-option-check" aria-hidden="true">
                  {option.value === selected && <Check size={15} />}
                </span>
              </button>
            )
          })}
        </div>
      )}
      {!loading && !options.length && !error && (
        <div className="combobox-status">
          <SearchIllustration />
          <span>{localize(emptyMessage)}</span>
        </div>
      )}
      {error && (
        <div className="combobox-error" role="alert">
          <span>{localize(error)}</span>
          <button type="button" onClick={onRetry}>
            {tr('Try again')}
          </button>
        </div>
      )}
      {hasMore && !error && (
        <div ref={sentinel} className="combobox-more">
          {loadingMore ? (
            <>
              <Spinner size={13} />
              {tr('Loading more…')}
            </>
          ) : (
            tr('Scroll for more options')
          )}
        </div>
      )}
    </div>
  )
}
