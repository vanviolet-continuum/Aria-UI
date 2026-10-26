import type { ReactNode } from 'react'
import type { StepItem } from '../stepper/stepper'

export interface ParallelTrack {
  id: string
  title: string
  description?: string
  icon?: ReactNode
  steps: StepItem[]
  /** Number of completed steps; the next step is active. */
  completed: number
  error?: string
}
export interface ParallelStepperProps {
  tracks: ParallelTrack[]
  onProgressChange: (trackId: string, completed: number) => void
  integration: { title: string; description?: string; complete: boolean; onIntegrate: () => void }
  onStepSelect?: (trackId: string, stepId: string) => void
  disabled?: boolean
}
export function parallelProgress(tracks: ParallelTrack[]) {
  const completed = tracks.reduce(
    (sum, track) =>
      sum + Math.max(0, Math.min(track.steps.length, Math.floor(track.completed) || 0)),
    0,
  )
  const total = tracks.reduce((sum, track) => sum + track.steps.length, 0)
  return {
    completed,
    total,
    ready:
      tracks.length > 0 &&
      tracks.every((track) => !track.error && track.completed >= track.steps.length),
  }
}
