import type { ScenarioValues } from '../../../data/scenarios/model'
export type Draft = ScenarioValues['courses']
export interface CourseFormProps {
  values: Draft
  update: <K extends keyof Draft>(key: K, value: Draft[K]) => void
  message: (name: string) => string | undefined
}
