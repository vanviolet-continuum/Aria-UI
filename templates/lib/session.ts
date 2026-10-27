import { ApiError } from './api.error'

export interface SessionSnapshot {
  readonly key: string | null
  readonly epoch: number
}
export interface SessionScope {
  getSnapshot: () => SessionSnapshot
  subscribe: (listener: () => void) => () => void
  advance: (key?: string | null) => SessionSnapshot
  isCurrent: (snapshot: SessionSnapshot) => boolean
  assertCurrent: (snapshot: SessionSnapshot) => void
}

/** The epoch also changes when logging back into the same account. */
export function createSessionScope(key: string | null = null): SessionScope {
  let current: SessionSnapshot = Object.freeze({ key, epoch: 0 })
  const listeners = new Set<() => void>()
  return {
    getSnapshot: () => current,
    subscribe(listener) {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    },
    advance(next = current.key) {
      current = Object.freeze({ key: next, epoch: current.epoch + 1 })
      listeners.forEach((listener) => listener())
      return current
    },
    isCurrent: (snapshot) => snapshot === current,
    assertCurrent(snapshot) {
      if (snapshot !== current)
        throw new ApiError('The session has changed.', {
          source: 'cancelled',
          code: 'SESSION_CHANGED',
        })
    },
  }
}
