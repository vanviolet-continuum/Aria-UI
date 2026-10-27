import { describe, expect, it } from 'vitest'
import { evaluatePassword } from '../../../templates/ui/password.input/password.strength'

describe('password rule feedback', () => {
  it('never marks an empty password as meeting requirements', () => {
    expect(evaluatePassword('')).toMatchObject({ score: 0, valid: false })
  })
  it('updates rule feedback for missing and satisfied rules', () => {
    expect(evaluatePassword('password')).toMatchObject({ score: 1, valid: false })
    expect(evaluatePassword('Workspace-2026')).toMatchObject({ score: 4, valid: true })
    expect(evaluatePassword('Aa1!').score).toBeLessThanOrEqual(2)
  })
  it('supports custom policies and does not accept an empty policy', () => {
    const rules = [{ id: 'long', label: '12 or more', test: (value: string) => value.length >= 12 }]
    expect(evaluatePassword('a long passphrase', rules).valid).toBe(true)
    expect(evaluatePassword('short', rules).valid).toBe(false)
    expect(evaluatePassword('anything', []).valid).toBe(false)
  })
})
