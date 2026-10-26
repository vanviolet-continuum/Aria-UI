import { useSearchParams } from 'react-router-dom'
import type { DateRange } from '@/template/ui/calendar/date-utils'

export function useStockFilters() {
  const [params, setParams] = useSearchParams()
  const tab = params.get('tab') === 'inventory' ? 'inventory' : 'orders'
  const query = params.get('q') ?? ''
  const status = params.get('status') ?? ''
  const vendor = params.get('vendor') ?? ''
  const category = params.get('category') ?? ''
  const dateRange: DateRange = {
    from: params.get('from') ?? undefined,
    to: params.get('to') ?? undefined,
  }
  const update = (key: string, value: string) =>
    setParams(
      (previous) => {
        const next = new URLSearchParams(previous)
        if (value) next.set(key, value)
        else next.delete(key)
        return next
      },
      { replace: true },
    )
  return {
    tab,
    query,
    status,
    vendor,
    category,
    dateRange,
    filterCount:
      Number(!!status) +
      Number(!!(tab === 'orders' ? vendor : category)) +
      Number(!!dateRange.from),
    form: params.get('new'),
    productId: params.get('product') ?? undefined,
    update,
    setTab: (value: string) => setParams(value === 'inventory' ? { tab: 'inventory' } : {}),
    reset: () => setParams(tab === 'inventory' ? { tab: 'inventory' } : {}, { replace: true }),
    setDateRange: (range: DateRange) =>
      setParams(
        (previous) => {
          const next = new URLSearchParams(previous)
          if (range.from) next.set('from', range.from)
          else next.delete('from')
          if (range.to) next.set('to', range.to)
          else next.delete('to')
          return next
        },
        { replace: true },
      ),
    openOrder: (productId?: string) =>
      setParams(
        (previous) => {
          const next = new URLSearchParams(previous)
          next.set('new', 'order')
          if (productId) next.set('product', productId)
          else next.delete('product')
          return next
        },
        { replace: true },
      ),
    closeForm: () =>
      setParams(
        (previous) => {
          const next = new URLSearchParams(previous)
          next.delete('new')
          next.delete('product')
          return next
        },
        { replace: true },
      ),
  }
}
