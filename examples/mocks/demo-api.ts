import { readFileSync } from 'node:fs'
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'

interface Member {
  id: string
  name: string
  email: string
  role: string
  status: string
  projects: number
}
export function demoApiPlugin(): Plugin {
  let members: Member[] | undefined
  const middleware = (request: IncomingMessage, response: ServerResponse, next: () => void) => {
    const url = new URL(request.url ?? '/', 'http://localhost')
    if (url.pathname !== '/api/demo/members') {
      next()
      return
    }
    members ??= JSON.parse(
      readFileSync(new URL('./members.json', import.meta.url), 'utf8'),
    ) as Member[]
    const timer = setTimeout(() => {
      if (response.destroyed) return
      response.setHeader('Content-Type', 'application/json')
      response.setHeader('Cache-Control', 'no-store')
      const search = (url.searchParams.get('search') ?? '').trim().toLowerCase()
      if (search === 'error') {
        response.statusCode = 503
        response.end(
          JSON.stringify({
            message: 'The demo service is temporarily unavailable. Clear “error” and try again.',
          }),
        )
        return
      }
      const size = Math.min(50, Math.max(1, Number(url.searchParams.get('limit')) || 20))
      const page = Math.max(1, Number(url.searchParams.get('page')) || 1)
      const offset = Math.max(0, Number(url.searchParams.get('cursor')) || (page - 1) * size)
      const sort = url.searchParams.get('sort') === 'projects' ? 'projects' : 'name'
      const direction = url.searchParams.get('direction') === 'desc' ? -1 : 1
      const filtered = members!
        .filter((member) =>
          `${member.name} ${member.email} ${member.role}`.toLowerCase().includes(search),
        )
        .sort(
          (a, b) =>
            direction *
            (sort === 'projects' ? a.projects - b.projects : a.name.localeCompare(b.name)),
        )
      response.end(
        JSON.stringify({
          items: filtered.slice(offset, offset + size),
          total: filtered.length,
          nextCursor: offset + size < filtered.length ? String(offset + size) : null,
        }),
      )
    }, 650)
    response.on('close', () => clearTimeout(timer))
  }
  return {
    name: 'zendenta-demo-api',
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}
