import { toDateKey } from '@/template/ui/calendar/date-utils'

export interface ProjectDraft {
  name: string
  description: string
  category: string
  budget: string
  owner: string
  ownerLabel: string
  phone: string
  startDate?: string
  notify: boolean
}
export interface SavedProject extends ProjectDraft {
  id: string
  createdAt: string
}
export const emptyProject: ProjectDraft = {
  name: '',
  description: '',
  category: 'design',
  budget: '2500000',
  owner: '',
  ownerLabel: '',
  phone: '',
  startDate: toDateKey(new Date()),
  notify: true,
}
export const projectSteps = [
  { id: 'details', title: 'The essentials', description: 'Give your idea a name' },
  { id: 'team', title: 'Your people', description: 'Find the right owner' },
  { id: 'review', title: 'A final look', description: 'Everything in its place' },
]
export function validateProjectStep(step: number, draft: ProjectDraft) {
  const errors: Record<string, string> = {}
  if (step === 0) {
    if (draft.name.trim().length < 3)
      errors.name = 'Use at least 3 characters for your project name.'
    if (!draft.category) errors.category = 'Choose a project category.'
    if (!draft.budget || !Number.isFinite(Number(draft.budget)) || Number(draft.budget) < 0)
      errors.budget = 'Enter a valid project budget.'
  }
  if (step === 1 && !draft.owner) errors.owner = 'Choose someone to lead this project.'
  return errors
}
export const isProjects = (value: unknown): value is SavedProject[] =>
  Array.isArray(value) &&
  value.every(
    (project) =>
      project &&
      typeof project.id === 'string' &&
      typeof project.name === 'string' &&
      typeof project.owner === 'string',
  )
