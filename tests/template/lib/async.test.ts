import { afterEach, describe, expect, it, vi } from 'vitest'
import { abortableDelay, isAbortError } from '../../../templates/lib/async'

afterEach(() => vi.useRealTimers())
describe('abortable async operations', () => {
  it('rejects cancelled requests immediately and clears the pending timer', async () => {
    vi.useFakeTimers()
    const controller = new AbortController()
    const pending = abortableDelay(1000, controller.signal)
    const assertion = expect(pending).rejects.toMatchObject({ name: 'AbortError' })
    controller.abort()
    await assertion
    expect(vi.getTimerCount()).toBe(0)
  })
  it('handles an already cancelled signal and distinguishes real failures', async () => {
    const controller = new AbortController()
    controller.abort()
    await expect(abortableDelay(1000, controller.signal)).rejects.toMatchObject({
      name: 'AbortError',
    })
    expect(isAbortError(new DOMException('Cancelled', 'AbortError'))).toBe(true)
    expect(isAbortError(new Error('Network failed'))).toBe(false)
  })
})
