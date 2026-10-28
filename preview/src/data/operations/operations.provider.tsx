import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { useWorkspace } from '../workspace/workspace.provider'
import {
  createOperations,
  displayName,
  operationsSchema,
  operationsStorageKey,
  valueSchemas,
  type Collection,
  type OperationsData,
  type Records,
  type Values,
} from './model'

interface OperationsContextValue {
  data: OperationsData
  persistent: boolean
  save: <K extends Collection>(collection: K, values: Values[K], id?: string) => Records[K]
  remove: (collection: Collection, id: string) => void
}
const OperationsContext = createContext<OperationsContextValue | null>(null)
export function OperationsProvider({ children }: { children: ReactNode }) {
  const workspace = useWorkspace()
  const [data, setData] = useState<OperationsData>(() => {
    try {
      const stored = localStorage.getItem(operationsStorageKey)
      if (stored) {
        const parsed = operationsSchema.safeParse(JSON.parse(stored))
        if (parsed.success) return parsed.data
      }
    } catch {
      /* Sample data remains usable without storage. */
    }
    return createOperations(workspace.data.users)
  })
  const [persistent, setPersistent] = useState(true)
  const current = useRef(data)
  const revision = useRef(workspace.resetRevision)
  const commit = (next: OperationsData) => {
    current.current = next
    setData(next)
    try {
      localStorage.setItem(operationsStorageKey, JSON.stringify(next))
      setPersistent(true)
    } catch {
      setPersistent(false)
    }
  }
  useEffect(() => {
    if (revision.current !== workspace.resetRevision) {
      revision.current = workspace.resetRevision
      commit(createOperations(workspace.data.users))
      return
    }
    const available = new Set(workspace.data.users.map((user) => user.id))
    const previous = current.current
    if (
      previous.projects.some((item) => item.ownerId && !available.has(item.ownerId)) ||
      previous.tasks.some((item) => item.assigneeId && !available.has(item.assigneeId)) ||
      previous.documents.some((item) => item.authorId && !available.has(item.authorId)) ||
      previous.meetings.some((item) => item.attendees.some((id) => !available.has(id)))
    )
      commit({
        ...previous,
        projects: previous.projects.map((item) =>
          item.ownerId && !available.has(item.ownerId) ? { ...item, ownerId: '' } : item,
        ),
        tasks: previous.tasks.map((item) =>
          item.assigneeId && !available.has(item.assigneeId) ? { ...item, assigneeId: '' } : item,
        ),
        documents: previous.documents.map((item) =>
          item.authorId && !available.has(item.authorId) ? { ...item, authorId: '' } : item,
        ),
        meetings: previous.meetings.map((item) => ({
          ...item,
          attendees: item.attendees.filter((id) => available.has(id)),
        })),
      })
  }, [workspace.resetRevision, workspace.data.users])
  function save<K extends Collection>(collection: K, values: Values[K], id?: string): Records[K] {
    const parsed = valueSchemas[collection].parse(values) as Values[K]
    const previous = current.current[collection].find((record) => record.id === id)
    if (id && !previous) throw new Error('This record no longer exists.')
    if (collection === 'invoices') {
      const invoice = parsed as Values['invoices']
      if (!current.current.clients.some((client) => client.id === invoice.clientId))
        throw new Error('Choose an available client.')
      if (
        invoice.projectId &&
        !current.current.projects.some(
          (project) => project.id === invoice.projectId && project.clientId === invoice.clientId,
        )
      )
        throw new Error('Choose a project belonging to this client, or select no project.')
      if (
        current.current.invoices.some(
          (record) =>
            record.id !== id && record.number.toLowerCase() === invoice.number.toLowerCase(),
        )
      )
        throw new Error('This invoice number is already in use.')
    }
    const at = new Date().toISOString()
    const record = {
      ...parsed,
      id: id ?? crypto.randomUUID(),
      createdAt: previous?.createdAt ?? at,
      updatedAt: at,
    } as Records[K]
    const rows = current.current[collection].filter((item) => item.id !== record.id)
    commit({ ...current.current, [collection]: [record, ...rows] })
    workspace.recordActivity(id ? 'updated' : 'created', displayName(record), collection)
    return record
  }
  const remove = (collection: Collection, id: string) => {
    const record = current.current[collection].find((item) => item.id === id)
    if (!record) throw new Error('This record no longer exists.')
    if (
      collection === 'clients' &&
      (current.current.projects.some((item) => item.clientId === id) ||
        current.current.invoices.some((item) => item.clientId === id))
    )
      throw new Error('This client still has linked projects or invoices.')
    const next = {
      ...current.current,
      [collection]: current.current[collection].filter((item) => item.id !== id),
    }
    if (collection === 'projects') {
      next.tasks = next.tasks.map((item) =>
        item.projectId === id ? { ...item, projectId: '' } : item,
      )
      next.meetings = next.meetings.map((item) =>
        item.projectId === id ? { ...item, projectId: '' } : item,
      )
      next.invoices = next.invoices.map((item) =>
        item.projectId === id ? { ...item, projectId: '' } : item,
      )
    }
    commit(next)
    workspace.recordActivity('deleted', displayName(record), collection)
  }
  return (
    <OperationsContext.Provider value={{ data, persistent, save, remove }}>
      {children}
    </OperationsContext.Provider>
  )
}
export function useOperations() {
  const value = useContext(OperationsContext)
  if (!value) throw new Error('useOperations requires OperationsProvider')
  return value
}
