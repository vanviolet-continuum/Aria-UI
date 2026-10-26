import { abortableDelay } from '@/template/lib/async'
import type { OptionsLoader } from '@/template/ui/combobox/types'
import type { SortState } from '@/template/ui/data-table/types'
import fixtureUrl from '../members.json?url'

export interface DemoMember {
  id: string
  name: string
  email: string
  role: string
  status: string
  projects: number
}
export interface MembersPage {
  items: DemoMember[]
  total: number
  nextCursor: string | null
}
interface Request {
  search?: string
  cursor?: string
  page?: number
  pageSize?: number
  sort?: SortState
  signal: AbortSignal
}
let fixture: Promise<DemoMember[]> | undefined
export async function fetchMembers({
  search = '',
  cursor,
  page = 1,
  pageSize = 20,
  sort,
  signal,
}: Request): Promise<MembersPage> {
  const params = new URLSearchParams({
    search,
    page: String(page),
    limit: String(pageSize),
    sort: sort?.column ?? 'name',
    direction: sort?.direction ?? 'asc',
  })
  if (cursor) params.set('cursor', cursor)
  const response = await fetch(`/api/demo/members?${params}`, { signal })
  if (response.ok && response.headers.get('content-type')?.includes('application/json'))
    return response.json()
  if (response.status !== 404 && !response.ok) {
    const body = await response.json().catch(() => null)
    throw new Error(body?.message ?? 'Could not load the team. Please try again.')
  }
  // A static host can run the same playground without a backend.
  fixture ??= fetch(fixtureUrl)
    .then((response) => {
      if (!response.ok) throw new Error('Demo data is unavailable.')
      return response.json() as Promise<DemoMember[]>
    })
    .catch((error) => {
      fixture = undefined
      throw error
    })
  const data = await fixture
  await abortableDelay(500, signal)
  if (search.trim().toLowerCase() === 'error')
    throw new Error('Demo service unavailable. Clear “error” to retry.')
  const filtered = data
    .filter((member) =>
      `${member.name} ${member.email} ${member.role}`.toLowerCase().includes(search.toLowerCase()),
    )
    .sort(
      (a, b) =>
        (sort?.direction === 'desc' ? -1 : 1) *
        (sort?.column === 'projects' ? a.projects - b.projects : a.name.localeCompare(b.name)),
    )
  const offset = cursor ? Number(cursor) : (page - 1) * pageSize
  return {
    items: filtered.slice(offset, offset + pageSize),
    total: filtered.length,
    nextCursor: offset + pageSize < filtered.length ? String(offset + pageSize) : null,
  }
}
export const loadMemberOptions: OptionsLoader = async ({ search, cursor, signal }) => {
  const page = await fetchMembers({ search, cursor, signal })
  return {
    options: page.items.map((member) => ({
      value: member.id,
      label: member.name,
      description: member.role,
    })),
    nextCursor: page.nextCursor,
  }
}
