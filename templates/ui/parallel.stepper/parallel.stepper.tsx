import { FieldError } from '../field.error/field.error'

import { Heading } from '../heading/heading'

import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import { ArrowRight, Check, GitMerge, Layers3, LockKeyhole, RotateCcw } from 'lucide-react'
import { Button } from '../button/button'
import { Badge } from '../badge/badge'
import { parallelProgress, type ParallelStepperProps } from './types'

export function ParallelStepper({
  tracks,
  onProgressChange,
  integration,
  onStepSelect,
  disabled,
}: ParallelStepperProps) {
  const { t: tr, text: localize } = useI18n()

  const progress = parallelProgress(tracks)
  return (
    <section className="parallel-stepper" aria-label={tr('Parallel workflow')}>
      <div className="parallel-summary">
        <Text as="span" variant="label" tone="inherit">
          <Layers3 size={17} />
          <Text as="strong" variant="label">
            {tr('Workstreams')}
          </Text>
        </Text>
        <Badge variant={progress.ready ? 'success' : 'primary'}>
          {progress.completed} / {progress.total}
          {' ' + tr('steps complete')}
        </Badge>
      </div>
      <div className="parallel-tracks">
        {tracks.map((track) => {
          const completed = Math.max(
            0,
            Math.min(track.steps.length, Math.floor(track.completed) || 0),
          )
          return (
            <section className="parallel-track" key={track.id} aria-label={localize(track.title)}>
              <header>
                <Text as="span" variant="label" tone="inherit" className="parallel-track-icon">
                  {track.icon ?? <Layers3 size={18} />}
                </Text>
                <div>
                  <Heading as="h4" variant="card">
                    {localize(track.title)}
                  </Heading>
                  <Text as="small" variant="caption">
                    {localize(track.description) ??
                      tr('{{completed}} of {{total}} complete', {
                        completed,
                        total: track.steps.length,
                      })}
                  </Text>
                </div>
                <Badge variant={completed === track.steps.length ? 'success' : 'neutral'}>
                  {completed}/{track.steps.length}
                </Badge>
              </header>
              <ol>
                {track.steps.map((step, index) => (
                  <li
                    key={step.id}
                    data-status={
                      index < completed ? 'complete' : index === completed ? 'current' : 'upcoming'
                    }
                  >
                    <Text
                      as="button"
                      variant="button"
                      tone="inherit"
                      type="button"
                      disabled={disabled || !onStepSelect || index > completed}
                      aria-current={index === completed ? 'step' : undefined}
                      onClick={() => onStepSelect?.(track.id, step.id)}
                    >
                      <Text as="span" variant="label" tone="inherit" className="parallel-step-dot">
                        {index < completed ? <Check size={13} /> : index + 1}
                      </Text>
                      <Text as="span" variant="label" tone="inherit">
                        <Text as="strong" variant="label">
                          {localize(step.title)}
                        </Text>
                        {step.description && (
                          <Text as="small" variant="caption">
                            {localize(step.description)}
                          </Text>
                        )}
                      </Text>
                    </Text>
                  </li>
                ))}
              </ol>
              {track.error && (
                <FieldError as="p" variant="error" className="ui-field-error" role="alert">
                  {localize(track.error)}
                </FieldError>
              )}
              <footer>
                <Button
                  size="sm"
                  variant="text"
                  aria-label={tr('Reset {{value0}}', { value0: localize(track.title) })}
                  disabled={disabled || completed === 0}
                  onClick={() => onProgressChange(track.id, 0)}
                >
                  <RotateCcw size={13} />
                  {tr('Reset')}
                </Button>
                <Button
                  size="sm"
                  variant="outlined"
                  disabled={
                    disabled ||
                    completed >= track.steps.length ||
                    !!track.error ||
                    integration.complete
                  }
                  onClick={() => onProgressChange(track.id, completed + 1)}
                >
                  {tr('Advance') + ' '}
                  {localize(track.title)}
                  <ArrowRight size={13} />
                </Button>
              </footer>
            </section>
          )
        })}
      </div>
      <div className="parallel-convergence" aria-hidden="true">
        <span />
        <GitMerge size={20} />
        <span />
      </div>
      <div className="parallel-integration" data-ready={progress.ready || undefined}>
        <Text as="span" variant="label" tone="inherit" className="parallel-integration-icon">
          {integration.complete ? (
            <Check size={22} />
          ) : progress.ready ? (
            <GitMerge size={22} />
          ) : (
            <LockKeyhole size={20} />
          )}
        </Text>
        <div>
          <Heading as="h4" variant="card">
            {localize(integration.title)}
          </Heading>
          <Text as="p" variant="body" aria-live="polite">
            {integration.complete
              ? tr('All workstreams have been integrated.')
              : progress.ready
                ? localize(
                    integration.description ?? 'All tracks are complete. Ready to integrate.',
                  )
                : tr('Complete every workstream to unlock integration.')}
          </Text>
        </div>
        <Button
          variant="contained"
          size="sm"
          disabled={disabled || !progress.ready || integration.complete}
          onClick={integration.onIntegrate}
        >
          {integration.complete ? tr('Integrated') : tr('Integrate')}
          <ArrowRight size={14} />
        </Button>
      </div>
    </section>
  )
}
