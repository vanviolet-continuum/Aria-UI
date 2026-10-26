import { useI18n } from '../../i18n/use-i18n'
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
        <span>
          <Layers3 size={17} />
          <strong>{tr('Workstreams')}</strong>
        </span>
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
                <span className="parallel-track-icon">{track.icon ?? <Layers3 size={18} />}</span>
                <div>
                  <h4>{localize(track.title)}</h4>
                  <small>
                    {localize(track.description) ??
                      tr('{{completed}} of {{total}} complete', {
                        completed,
                        total: track.steps.length,
                      })}
                  </small>
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
                    <button
                      type="button"
                      disabled={disabled || !onStepSelect || index > completed}
                      aria-current={index === completed ? 'step' : undefined}
                      onClick={() => onStepSelect?.(track.id, step.id)}
                    >
                      <span className="parallel-step-dot">
                        {index < completed ? <Check size={13} /> : index + 1}
                      </span>
                      <span>
                        <strong>{localize(step.title)}</strong>
                        {step.description && <small>{localize(step.description)}</small>}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
              {track.error && (
                <p className="ui-field-error" role="alert">
                  {localize(track.error)}
                </p>
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
        <span className="parallel-integration-icon">
          {integration.complete ? (
            <Check size={22} />
          ) : progress.ready ? (
            <GitMerge size={22} />
          ) : (
            <LockKeyhole size={20} />
          )}
        </span>
        <div>
          <h4>{localize(integration.title)}</h4>
          <p aria-live="polite">
            {integration.complete
              ? tr('All workstreams have been integrated.')
              : progress.ready
                ? localize(
                    integration.description ?? 'All tracks are complete. Ready to integrate.',
                  )
                : tr('Complete every workstream to unlock integration.')}
          </p>
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
