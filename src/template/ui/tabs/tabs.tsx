import { useI18n } from '../../i18n/use-i18n'
import { useId, useRef, type ReactNode } from 'react'
import clsx from 'clsx'

export interface TabItem {
  value: string
  label: ReactNode
  count?: number
  disabled?: boolean
}
export function Tabs({
  items,
  value,
  onChange,
  label = 'Views',
  variant = 'underline',
}: {
  items: TabItem[]
  value: string
  onChange: (value: string) => void
  label?: string
  variant?: 'underline' | 'pill'
}) {
  const { text: localize } = useI18n()

  const id = useId()
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      className={clsx('ui-tabs', `ui-tabs--${variant}`)}
      role="tablist"
      aria-label={localize(label)}
      ref={ref}
    >
      {items.map((item) => (
        <button
          type="button"
          key={item.value}
          role="tab"
          id={`${id}-${item.value}`}
          aria-selected={value === item.value}
          disabled={item.disabled}
          tabIndex={value === item.value ? 0 : -1}
          className={clsx('ui-tab', value === item.value && 'ui-tab--active')}
          onClick={() => onChange(item.value)}
          onKeyDown={(event) => {
            const enabled = items.filter((tab) => !tab.disabled)
            const index = enabled.findIndex((tab) => tab.value === item.value)
            let next: TabItem | undefined
            if (event.key === 'ArrowRight') next = enabled[(index + 1) % enabled.length]
            if (event.key === 'ArrowLeft')
              next = enabled[(index - 1 + enabled.length) % enabled.length]
            if (event.key === 'Home') next = enabled[0]
            if (event.key === 'End') next = enabled.at(-1)
            if (next) {
              event.preventDefault()
              onChange(next.value)
              ref.current?.querySelector<HTMLButtonElement>(`[id="${id}-${next.value}"]`)?.focus()
            }
          }}
        >
          {localize(item.label)}
          {item.count !== undefined && <span>{item.count}</span>}
        </button>
      ))}
    </div>
  )
}
