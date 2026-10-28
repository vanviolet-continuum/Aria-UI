import { createContext, useContext, useRef, useState, type ReactNode } from 'react'
import {
  createWorkspace,
  deleteUsers,
  saveUser,
  workspaceSchema,
  workspaceStorageKey,
  type WorkspaceData,
  type UserValues,
  type Activity,
} from './model'

interface WorkspaceContextValue {
  data: WorkspaceData
  persistent: boolean
  saveUser: (values: UserValues, id?: string) => void
  deleteUsers: (ids: string[]) => void
  saveSettings: (settings: WorkspaceData['settings']) => void
  reset: () => WorkspaceData
  resetRevision: number
  recordActivity: (action: Activity['action'], name: string, entity?: Activity['entity']) => void
}
const WorkspaceContext = createContext<WorkspaceContextValue | null>(null)

function readWorkspace() {
  try {
    const stored = localStorage.getItem(workspaceStorageKey)
    if (stored) {
      const result = workspaceSchema.safeParse(JSON.parse(stored))
      if (result.success) return result.data
    }
  } catch {
    /* A blocked or invalid local store falls back to usable sample data. */
  }
  return createWorkspace()
}

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(readWorkspace)
  const [persistent, setPersistent] = useState(true)
  const [resetRevision, setResetRevision] = useState(0)
  const current = useRef(data)
  const commit = (next: WorkspaceData) => {
    current.current = next
    setData(next)
    try {
      localStorage.setItem(workspaceStorageKey, JSON.stringify(next))
      setPersistent(true)
    } catch {
      setPersistent(false)
    }
  }
  return (
    <WorkspaceContext.Provider
      value={{
        data,
        persistent,
        resetRevision,
        recordActivity: (action, name, entity) =>
          commit({
            ...current.current,
            activities: [
              { id: crypto.randomUUID(), action, name, entity, at: new Date().toISOString() },
              ...current.current.activities,
            ].slice(0, 100),
          }),
        saveUser: (values, id) => commit(saveUser(current.current, values, id)),
        deleteUsers: (ids) => commit(deleteUsers(current.current, ids)),
        saveSettings: (settings) =>
          commit({
            ...current.current,
            settings,
            activities: [
              {
                id: crypto.randomUUID(),
                action: 'settings' as const,
                name: settings.name,
                at: new Date().toISOString(),
              },
              ...current.current.activities,
            ].slice(0, 100),
          }),
        reset: () => {
          const next = createWorkspace()
          commit(next)
          setResetRevision((value) => value + 1)
          return next
        },
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  )
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext)
  if (!context) throw new Error('useWorkspace requires WorkspaceProvider')
  return context
}
