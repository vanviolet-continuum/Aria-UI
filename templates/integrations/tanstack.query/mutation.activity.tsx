import { useEffect, useRef } from 'react'
import { useMutationState } from '@tanstack/react-query'
import { useMutationTask } from '../../providers/mutation.provider'
import { mutationFeedback } from './query.meta'

/** Observe the actual mutation lifecycle, including awaited invalidations and concurrent writes. */
export function MutationActivity() {
  const { beginTask } = useMutationTask()
  const tasks = useRef(new Map<number, () => void>())
  const pending = useMutationState({
    filters: { status: 'pending' },
    select: (mutation) => ({
      id: mutation.mutationId,
      paused: mutation.state.isPaused,
      ...mutationFeedback(mutation.meta),
    }),
  })
  useEffect(() => {
    const active = new Set<number>()
    for (const mutation of pending) {
      if (mutation.overlay === false || mutation.paused) continue
      active.add(mutation.id)
      if (!tasks.current.has(mutation.id))
        tasks.current.set(mutation.id, beginTask(mutation.label ?? 'Saving changes…'))
    }
    for (const [id, finish] of tasks.current) {
      if (!active.has(id)) {
        finish()
        tasks.current.delete(id)
      }
    }
  }, [pending, beginTask])
  useEffect(
    () => () => {
      for (const finish of tasks.current.values()) finish()
      tasks.current.clear()
    },
    [],
  )
  return null
}
