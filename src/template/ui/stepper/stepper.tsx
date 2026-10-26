import { useI18n } from '../../i18n/use-i18n'
import { Check, CircleAlert } from 'lucide-react'
import clsx from 'clsx'

export interface StepItem {
  id: string
  title: string
  description?: string
}
export interface StepperProps {
  steps: StepItem[]
  activeStep: number
  onStepChange?: (step: number) => void
  orientation?: 'horizontal' | 'vertical'
  errorStep?: number
}
export function Stepper({
  steps,
  activeStep,
  onStepChange,
  orientation = 'horizontal',
  errorStep,
}: StepperProps) {
  const { t: tr, text: localize } = useI18n()

  return (
    <nav aria-label={tr('Progress')} className={clsx('ui-stepper', `ui-stepper--${orientation}`)}>
      <ol>
        {steps.map((step, index) => {
          const status =
            errorStep === index
              ? 'error'
              : index < activeStep
                ? 'complete'
                : index === activeStep
                  ? 'current'
                  : 'upcoming'
          return (
            <li key={step.id} className={`stepper-step stepper-step--${status}`}>
              <button
                type="button"
                aria-current={index === activeStep ? 'step' : undefined}
                disabled={!onStepChange || index > activeStep}
                onClick={() => onStepChange?.(index)}
              >
                <span className="stepper-indicator">
                  {status === 'complete' ? (
                    <Check size={16} />
                  ) : status === 'error' ? (
                    <CircleAlert size={17} />
                  ) : (
                    String(index + 1).padStart(2, '0')
                  )}
                </span>
                <span>
                  <strong>{localize(step.title)}</strong>
                  {step.description && <small>{localize(step.description)}</small>}
                </span>
              </button>
              {index < steps.length - 1 && (
                <span className="stepper-connector" aria-hidden="true" />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
