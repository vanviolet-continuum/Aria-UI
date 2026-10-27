import { useI18n } from '../i18n/use.i18n'
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { LoadingOverlay } from '../ui/loading.overlay/loading.overlay'
import { normalizeApiErrorAsync, type ApiError } from '../lib/api.error'
import { showApiErrorToast } from '../ui/toast/api.error.toast'

export type TaskResult<T> = { success: true; data: T } | { success: false; error: ApiError }
interface MutationContextValue {
  beginTask: (label: string) => () => void
  runTask: <T>(label: string, task: () => Promise<T>) => Promise<TaskResult<T>>
  pending: boolean
}
const MutationContext = /* @__PURE__ */ createContext<MutationContextValue | null>(null)

export function MutationProvider({ children }: { children: ReactNode }) {
  const { t: tr, text: localize } = useI18n()

  const [tasks, setTasks] = useState<{ id: string; label: string }[]>([])
  const beginTask = useCallback((label: string) => {
    const id = crypto.randomUUID()
    setTasks((previous) => [...previous, { id, label }])
    let finished = false
    return () => {
      if (finished) return
      finished = true
      setTasks((previous) => previous.filter((task) => task.id !== id))
    }
  }, [])
  const runTask = useCallback(
    async <T,>(label: string, task: () => Promise<T>): Promise<TaskResult<T>> => {
      const finish = beginTask(label)
      try {
        return { success: true, data: await task() }
      } catch (reason) {
        const error = await normalizeApiErrorAsync(reason, {
          fallbackMessage: tr('Unable to complete the request.'),
        })
        showApiErrorToast(error)
        return { success: false, error }
      } finally {
        finish()
      }
    },
    [tr, beginTask],
  )
  const value = useMemo(
    () => ({ beginTask, runTask, pending: tasks.length > 0 }),
    [beginTask, runTask, tasks.length],
  )
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
