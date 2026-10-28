import { describe, expect, it } from 'vitest'
import { createWorkspace, saveUser, deleteUsers, emptyUser, workspaceSchema, UserValidationError } from './model'

describe('local workspace data', () => {
  it('normalizes new profiles and rejects duplicate emails without changing existing data', () => {
    const initial = createWorkspace()
    const added = saveUser(initial, { ...emptyUser, name: '  Demo User  ', email: '  DEMO@EXAMPLE.COM  ' })
    expect(added.users[0]).toMatchObject({ name: 'Demo User', email: 'demo@example.com' })
    expect(initial.users).toHaveLength(12)
    expect(() => saveUser(added, { ...emptyUser, name: 'Another User', email: 'Demo@example.com' })).toThrow(UserValidationError)
    expect(added.users).toHaveLength(13)
  })
  it('keeps identity and the original join date while updating a profile', () => {
    const initial = createWorkspace(new Date('2026-10-01T00:00:00Z'))
    const user = initial.users[0]
    const updated = saveUser(initial, { ...user, name: 'Updated Person', status: 'inactive' }, user.id, new Date('2026-10-02T00:00:00Z'))
    expect(updated.users[0]).toMatchObject({ id: user.id, joinedAt: user.joinedAt, updatedAt: '2026-10-02T00:00:00.000Z', name: 'Updated Person', status: 'inactive' })
    expect(updated.activities[0]).toMatchObject({ action: 'updated', name: 'Updated Person' })
    expect(() => saveUser(updated, user, 'missing-user')).toThrow('This user no longer exists.')
  })
  it('deletes exactly the selected profiles and records each deletion', () => {
    const initial = createWorkspace()
    const result = deleteUsers(initial, [initial.users[1].id, initial.users[3].id, 'missing-user'])
    expect(result.users.map(user => user.id)).toEqual(initial.users.filter((_, index) => ![1, 3].includes(index)).map(user => user.id))
    expect(result.activities.filter(item => item.action === 'deleted').map(item => item.name)).toEqual([initial.users[1].name, initial.users[3].name])
  })
  it('validates saved workspace snapshots before restoring them', () => {
    const initial = createWorkspace()
    expect(workspaceSchema.safeParse(JSON.parse(JSON.stringify(initial))).success).toBe(true)
    expect(workspaceSchema.safeParse({ ...initial, users: [{ ...initial.users[0], role: 'unknown' }] }).success).toBe(false)
  })
})
