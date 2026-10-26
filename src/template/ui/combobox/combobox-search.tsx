import { useI18n } from '../../i18n/use-i18n'
import { Search } from 'lucide-react'
import { forwardRef } from 'react'
import type { ComboboxOption } from './types'

interface Props {
  query: string
  onQuery: (query: string) => void
  listId: string
  active: number
  onActive: (index: number) => void
  options: ComboboxOption[]
  onChoose: (option: ComboboxOption) => void
  placeholder: string
}
export const ComboboxSearch = forwardRef<HTMLInputElement, Props>(function ComboboxSearch(
  { query, onQuery, listId, active, onActive, options, onChoose, placeholder },
  ref,
) {
  const { t: tr, text: localize } = useI18n()

  const enabled = options
    .map((option, index) => ({ option, index }))
    .filter(({ option }) => !option.disabled)
  return (
    <div className="combobox-search">
      <Search size={16} />
      <input
        ref={ref}
        role="combobox"
        aria-label={tr('Search options')}
        aria-expanded="true"
        aria-controls={listId}
        aria-autocomplete="list"
        autoComplete="off"
        aria-activedescendant={options[active] ? `${listId}-${active}` : undefined}
        value={query}
        placeholder={localize(placeholder)}
        onChange={(event) => onQuery(event.target.value)}
        onKeyDown={(event) => {
          const current = enabled.findIndex((item) => item.index === active)
          if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && enabled.length) {
            event.preventDefault()
            const direction = event.key === 'ArrowDown' ? 1 : -1
            onActive(enabled[(current + direction + enabled.length) % enabled.length].index)
          }
          if (event.key === 'Enter' && options[active]) {
            event.preventDefault()
            onChoose(options[active])
          }
          if (event.key === 'Home' && enabled.length) {
            event.preventDefault()
            onActive(enabled[0].index)
          }
          if (event.key === 'End' && enabled.length) {
            event.preventDefault()
            onActive(enabled.at(-1)!.index)
          }
        }}
      />
    </div>
  )
})
