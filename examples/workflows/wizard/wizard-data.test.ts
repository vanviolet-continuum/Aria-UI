import { describe, expect, it } from 'vitest'
import { emptyProject, validateProjectStep } from './wizard-data'

describe('wizard step validation', () => {
  it('validates only fields in the current step', () => {
    expect(validateProjectStep(0, { ...emptyProject, name: 'Project Alpha' })).toEqual({})
    expect(validateProjectStep(1, emptyProject)).toHaveProperty('owner')
    expect(validateProjectStep(1, { ...emptyProject, owner: 'member-1' })).toEqual({})
  })
  it('rejects whitespace names and nonnumeric or negative budgets', () => {
    expect(validateProjectStep(0, { ...emptyProject, name: '   ', budget: '-1' })).toHaveProperty(
      'name',
    )
    for (const budget of ['-1', 'NaN', 'Infinity', '']) {
      expect(validateProjectStep(0, { ...emptyProject, name: 'Alpha', budget })).toHaveProperty(
        'budget',
      )
    }
    expect(validateProjectStep(0, { ...emptyProject, name: 'Alpha', budget: '0' })).toEqual({})
  })
})
