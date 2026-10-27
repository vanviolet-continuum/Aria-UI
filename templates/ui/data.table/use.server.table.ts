import { useCallback, useEffect, useRef, useState } from 'react'
import type { SortState } from './types'

export interface TablePageRequest {
  search: string
  page: number
  pageSize: number
  sort?: SortState
  signal: AbortSignal
}
export interface TablePage<T> {
  rows: T[]
  total: number
}
export type TablePageLoader<T> = (request: TablePageRequest) => Promise<TablePage<T>>

export function useServerTable<T>({
  loadPage,
  initialPageSize = 5,
  initialSort = { column: 'name', direction: 'asc' },
  debounceMs = 300,
  cacheKey = 'table',
}: {
  loadPage: TablePageLoader<T>
  initialPageSize?: number
  initialSort?: SortState
  debounceMs?: number
  cacheKey?: string
}) {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [sort, setSort] = useState<SortState>(initialSort)
  const [data, setData] = useState<TablePage<T>>({ rows: [], total: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retry, setRetry] = useState(0)
  const loader = useRef(loadPage)
  loader.current = loadPage
  const cache = useRef(new Map<string, { data: TablePage<T>; expires: number }>())
  const key = JSON.stringify([cacheKey, search, page, pageSize, sort])
  useEffect(() => {
    const request = new AbortController()
    const cached = cache.current.get(key)
    if (cached && cached.expires > Date.now()) {
      setData(cached.data)
      setLoading(false)
      setError(null)
      return
    }
    setLoading(true)
    setError(null)
    const timer = setTimeout(
      async () => {
        try {
          const result = await loader.current({
            search,
            page,
            pageSize,
            sort,
            signal: request.signal,
          })
          if (request.signal.aborted) return
          cache.current.set(key, { data: result, expires: Date.now() + 30_000 })
          if (cache.current.size > 20) cache.current.delete(cache.current.keys().next().value!)
          setData(result)
          setLoading(false)
        } catch (error) {
          if (!request.signal.aborted) {
            setError(error instanceof Error ? error.message : 'Unable to load records.')
            setLoading(false)
          }
        }
      },
      search ? debounceMs : 0,
    )
    return () => {
      clearTimeout(timer)
      request.abort()
    }
  }, [key, search, page, pageSize, sort, retry, debounceMs])
  const changeSearch = useCallback((value: string) => {
    setSearch(value)
    setPage(1)
  }, [])
  return {
    ...data,
    search,
    loading,
    error,
    setSearch: changeSearch,
    retry: () => {
      cache.current.delete(key)
      setRetry((value) => value + 1)
    },
    server: {
      page,
      pageSize,
      totalItems: data.total,
      sort,
      onPageChange: setPage,
      onPageSizeChange: (size: number) => {
        setPageSize(size)
        setPage(1)
      },
      onSortChange: (value: SortState) => {
        setSort(value)
        setPage(1)
      },
    },
  }
}
