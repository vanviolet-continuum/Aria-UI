import { useI18n } from '../i18n/use-i18n'
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { LoadingOverlay } from '../ui/loading-overlay/loading-overlay'
import { toast } from '../ui/toast/toast'

export type TaskResult<T> = { success: true; data: T } | { success: false; error: Error }
interface MutationContextValue {
  runTask: <T>(label: string, task: () => Promise<T>) => Promise<TaskResult<T>>
  pending: boolean
}
const MutationContext = createContext<MutationContextValue | null>(null)

export function MutationProvider({ children }: { children: ReactNode }) {
  const { t: tr, text: localize } = useI18n()

  const [tasks, setTasks] = useState<{ id: string; label: string }[]>([])
  const runTask = useCallback(
    async <T,>(label: string, task: () => Promise<T>): Promise<TaskResult<T>> => {
      const id = crypto.randomUUID()
      setTasks((previous) => [...previous, { id, label }])
      try {
        return { success: true, data: await task() }
      } catch (reason) {
        const error = reason instanceof Error ? reason : new Error('Please try again.')
        toast.error(tr('We couldn’t complete that action'), {
          description: localize(error.message),
        })
        return { success: false, error }
      } finally {
        setTasks((previous) => previous.filter((task) => task.id !== id))
      }
    },
    [tr, localize],
  )
  const value = useMemo(() => ({ runTask, pending: tasks.length > 0 }), [runTask, tasks.length])
  return (
    <MutationContext.Provider value={value}>
      {children}
      <LoadingOverlay
        fullscreen
        loading={tasks.length > 0}
        label={localize(tasks.at(-1)?.label ?? 'Saving changes…')}
      />
    </MutationContext.Provider>
  )
}
export function useMutationTask() {
  const context = useContext(MutationContext)
  if (!context) throw new Error('useMutationTask requires MutationProvider')
  return context
}
