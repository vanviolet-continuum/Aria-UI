import { useI18n } from '../../i18n/use-i18n'
import { Check } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { LoadingIllustration, SearchIllustration } from '../illustrations'
import { Spinner } from '../loading-overlay/loading-overlay'
import type { ComboboxOption } from './types'

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
}: Props) {
  const { t: tr, text: localize } = useI18n()

  const list = useRef<HTMLDivElement>(null)
  const sentinel = useRef<HTMLDivElement>(null)
  const [scroll, setScroll] = useState(0)
  const virtual = options.length > 80
  const start = virtual ? Math.max(0, Math.floor(scroll / 52) - 4) : 0
  const visible = virtual ? options.slice(start, start + 15) : options
  useEffect(() => {
    if (!list.current) return
    const top = active * 52
    if (top < list.current.scrollTop) list.current.scrollTop = top
    else if (top + 52 > list.current.scrollTop + list.current.clientHeight)
      list.current.scrollTop = top + 52 - list.current.clientHeight
  }, [active])
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
      onScroll={(event) => setScroll(event.currentTarget.scrollTop)}
    >
      {loading && (
        <div className="combobox-status" role="status">
          <LoadingIllustration size={65} label={tr('')} />
          <span>{tr('Finding your options…')}</span>
        </div>
      )}
      {!loading && (
        <div style={virtual ? { height: options.length * 52, position: 'relative' } : undefined}>
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
                    ? { position: 'absolute', top: index * 52, left: 0, width: '100%' }
                    : undefined
                }
                className={clsx('combobox-option', active === index && 'combobox-option--active')}
              >
                <span>
                  {localize(option.label)}
                  {option.description && <small>{localize(option.description)}</small>}
                </span>
                {option.value === selected && <Check size={15} />}
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
            'Scroll for more options'
          )}
        </div>
      )}
    </div>
  )
}
