import { useI18n } from '../../i18n/use-i18n'
import { Search, X } from 'lucide-react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  className?: string
}
export function SearchInput({
  value,
  onChange,
  placeholder = 'Search anything...',
  label = 'Search',
  className = '',
}: SearchInputProps) {
  const { t: tr, text: localize } = useI18n()

  return (
    <div className={`search-input ${className}`}>
      <Search size={16} aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={localize(placeholder)}
        aria-label={localize(label)}
      />
      {value && (
        <button type="button" aria-label={tr('Clear search')} onClick={() => onChange('')}>
          <X size={14} />
        </button>
      )}
    </div>
  )
}
