export interface ComboboxOption {
  value: string
  label: string
  description?: string
  disabled?: boolean
}
export interface OptionsRequest {
  search: string
  cursor?: string
  signal: AbortSignal
}
export interface OptionsPage {
  options: ComboboxOption[]
  nextCursor?: string | null
}
export type OptionsLoader = (request: OptionsRequest) => Promise<OptionsPage>
export interface ComboboxProps {
  options?: ComboboxOption[]
  value?: string
  onChange: (value: string) => void
  onOptionChange?: (option: ComboboxOption) => void
  selectedOption?: ComboboxOption
  loadOptions?: OptionsLoader
  debounceMs?: number
  cacheKey?: string
  loading?: boolean
  loadingMore?: boolean
  hasMore?: boolean
  onLoadMore?: () => void
  onSearchChange?: (search: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  disabled?: boolean
  clearable?: boolean
  /** Hide search for short, simple option lists, such as page sizes. */
  searchable?: boolean
  size?: 'sm' | 'md'
  id?: string
  name?: string
  className?: string
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-invalid'?: boolean
}
