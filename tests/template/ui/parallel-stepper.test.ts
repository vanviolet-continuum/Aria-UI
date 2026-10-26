import { describe, expect, it } from 'vitest'
import {
  parallelProgress,
  type ParallelTrack,
} from '../../../src/template/ui/parallel-stepper/types'

const tracks: ParallelTrack[] = [
  { id: 'a', title: 'A', steps: [{ id: '1', title: 'First' }], completed: 1 },
  {
    id: 'b',
    title: 'B',
    steps: [
      { id: '1', title: 'First' },
      { id: '2', title: 'Second' },
    ],
    completed: 1,
  },
]
describe('parallel integration gate', () => {
  it('unlocks only after all independent tracks finish', () => {
    expect(parallelProgress(tracks)).toEqual({ completed: 2, total: 3, ready: false })
    expect(
      parallelProgress(tracks.map((track) => ({ ...track, completed: track.steps.length }))).ready,
    ).toBe(true)
  })
  it('blocks errors and empty workflows and clamps invalid progress totals', () => {
    expect(parallelProgress([]).ready).toBe(false)
    expect(
      parallelProgress(tracks.map((track) => ({ ...track, completed: 99, error: 'Retry needed' }))),
    ).toEqual({ completed: 3, total: 3, ready: false })
    expect(parallelProgress([{ ...tracks[0], completed: -5 }]).completed).toBe(0)
  })
})
