import { useId, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react'
import clsx from 'clsx'
import { Stepper, type StepItem } from '../stepper/stepper'
import { Progress } from '../progress/progress'
import { useI18n } from '../../i18n/use.i18n'

export interface WizardProps extends HTMLAttributes<HTMLDivElement> {
  steps: StepItem[]
  activeStep: number
  onStepChange?: (step: number) => void
  errorStep?: number
  introduction?: ReactNode
  aside?: ReactNode
  footer?: ReactNode
  orientation?: 'horizontal' | 'vertical'
}
/** Presentation only: the application owns validation, draft state and submission. */
export function Wizard({
  steps,
  activeStep,
  onStepChange,
  errorStep,
  introduction,
  aside,
  footer,
  orientation = 'vertical',
  children,
  className,
  style,
  ...props
}: WizardProps) {
  const id = useId()
  const { t } = useI18n()
  return (
    <div
      {...props}
      style={
        {
          '--wizard-mobile-columns': Math.max(1, Math.min(4, steps.length)),
          ...style,
        } as CSSProperties
      }
      className={clsx('ui-wizard', `ui-wizard--${orientation}`, className)}
    >
      <aside className="ui-wizard-sidebar">
        {introduction}
        <Progress
          value={steps.length ? (activeStep / steps.length) * 100 : 0}
          label={t('Progress')}
          showValue
          size="sm"
        />
        <Stepper
          steps={steps}
          activeStep={activeStep}
          onStepChange={onStepChange}
          errorStep={errorStep}
          orientation={orientation}
        />
        {aside}
      </aside>
      <section className="ui-wizard-panel" aria-label={steps[activeStep]?.title} id={id}>
        <div className="ui-wizard-content" key={steps[activeStep]?.id}>
          {children}
        </div>
        {footer && <footer className="ui-wizard-footer">{footer}</footer>}
      </section>
    </div>
  )
}
