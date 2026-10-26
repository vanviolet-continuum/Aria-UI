import { useI18n } from '../../../src/template/i18n'
import { ArrowLeft, ArrowRight, Check, Lightbulb, Plus } from 'lucide-react'
import { useState } from 'react'
import { Button, EmptyState, Stepper, toast } from '@/template/ui'
import { ProjectDetailsStep } from './project-details-step'
import { ProjectTeamStep } from './project-team-step'
import { ProjectReviewStep } from './project-review-step'
import {
  emptyProject,
  isProjects,
  projectSteps,
  validateProjectStep,
  type ProjectDraft,
  type SavedProject,
} from './wizard-data'
import { useLocalStorage } from '@/template/hooks/use-local-storage'
import { useMutationTask } from '@/template/providers/mutation-provider'
import { abortableDelay } from '@/template/lib/async'

export function WizardPage() {
  const { t: tr, text: localize } = useI18n()

  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState<ProjectDraft>({ ...emptyProject })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [created, setCreated] = useState(false)
  const [projects, setProjects] = useLocalStorage<SavedProject[]>(
    'zendenta-projects',
    [],
    isProjects,
  )
  const { runTask, pending } = useMutationTask()
  const update = (value: Partial<ProjectDraft>) => {
    setDraft((previous) => ({ ...previous, ...value }))
    setErrors({})
  }
  const next = async () => {
    const errors = validateProjectStep(step, draft)
    setErrors(errors)
    if (Object.keys(errors).length) return
    if (step < 2) {
      setStep(step + 1)
      return
    }
    const result = await runTask('Bringing your project to life…', async () => {
      await abortableDelay(1000)
      setProjects((previous) => [
        { ...draft, id: crypto.randomUUID(), createdAt: new Date().toISOString() },
        ...previous,
      ])
    })
    if (result.success) {
      setCreated(true)
      setStep(3)
      toast.success(tr('Your project is ready'))
    }
  }
  return (
    <div className="standard-page wizard-page page-enter">
      <div className="page-intro">
        <span className="eyebrow">{tr('One thoughtful step at a time')}</span>
        <h2>{tr('Make room for your next idea.')}</h2>
        <p>{tr('A simple setup. A solid starting point.')}</p>
      </div>
      <div className="wizard-layout">
        <section className="wizard-panel">
          <Stepper
            steps={projectSteps}
            activeStep={step}
            onStepChange={
              created
                ? undefined
                : (value) => {
                    setStep(value)
                    setErrors({})
                  }
            }
            errorStep={Object.keys(errors).length ? step : undefined}
          />
          {created ? (
            <EmptyState
              title={tr('A good idea, made official.')}
              description={tr('“{{value0}}” is ready for your team.', {
                value0: localize(draft.name),
              })}
              action={
                <Button
                  variant="contained"
                  onClick={() => {
                    setDraft({ ...emptyProject })
                    setStep(0)
                    setCreated(false)
                  }}
                >
                  <Plus size={15} />
                  {tr('Create another project')}
                </Button>
              }
            />
          ) : (
            <>
              <div className="wizard-step-heading">
                <span>
                  {tr('STEP') + ' '}
                  {String(step + 1).padStart(2, '0')}
                  {' ' + tr('OF 03')}
                </span>
                <h3>{localize(projectSteps[step].title)}</h3>
                <p>
                  {step === 0
                    ? tr('The little details that give your project direction.')
                    : step === 1
                      ? tr('A good team makes every next step a little easier.')
                      : tr('Take a moment. Everything you need is right here.')}
                </p>
              </div>
              {step === 0 && <ProjectDetailsStep draft={draft} update={update} errors={errors} />}
              {step === 1 && <ProjectTeamStep draft={draft} update={update} errors={errors} />}
              {step === 2 && <ProjectReviewStep draft={draft} />}
              <div className="wizard-footer">
                <Button
                  variant="text"
                  color="secondary"
                  disabled={step === 0 || pending}
                  onClick={() => setStep(step - 1)}
                >
                  <ArrowLeft size={15} />
                  {tr('Back')}
                </Button>
                <span>{tr('Your progress stays here while you work.')}</span>
                <Button variant="contained" disabled={pending} onClick={next}>
                  {step === 2 ? (
                    <>
                      <Check size={15} />
                      {tr('Create project')}
                    </>
                  ) : (
                    <>
                      {tr('Continue')}
                      <ArrowRight size={15} />
                    </>
                  )}
                </Button>
              </div>
            </>
          )}
        </section>
        <aside className="wizard-aside">
          <span>
            <Lightbulb size={23} />
          </span>
          <h3>{tr('Small steps. Good beginnings.')}</h3>
          <p>
            {tr(
              'You don’t need every answer to get started. A name, a little direction, and the right person can go a long way.',
            )}
          </p>
          <div>
            <Check size={13} />
            {tr('Clear, focused steps')}
          </div>
          <div>
            <Check size={13} />
            {tr('Validation as you go')}
          </div>
          <div>
            <Check size={13} />
            {tr('Nothing lost between steps')}
          </div>
          <small>
            {projects.length} {projects.length === 1 ? tr('project') : tr('projects')}
            {' ' + tr('created in this workspace')}
          </small>
        </aside>
      </div>
    </div>
  )
}
