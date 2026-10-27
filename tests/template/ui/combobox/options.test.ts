import { expect, it } from 'vitest'
import { mergeOptions } from '../../../../templates/ui/combobox/use.async.options'

it('merges overlapping API pages while retaining option order and fresh labels', () => {
  expect(
    mergeOptions(
      [
        { value: '1', label: 'Old name' },
        { value: '2', label: 'Second' },
      ],
      [
        { value: '1', label: 'Updated name' },
        { value: '3', label: 'Third' },
      ],
    ),
  ).toEqual([
    { value: '1', label: 'Updated name' },
    { value: '2', label: 'Second' },
    { value: '3', label: 'Third' },
  ])
})
