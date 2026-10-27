import type { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { normalizeApiError } from '../../lib/api.error'
import { useI18n } from '../../i18n/use.i18n'
import { ErrorIllustration } from '../illustrations/states/error.illustration'
import { Button } from '../button/button'
import { Heading } from '../heading/heading'
import { Text } from '../text/text'

export interface ErrorStateProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  error: unknown
  title?: ReactNode
  illustration?: ReactNode
  onRetry?: () => unknown
  retrying?: boolean
  compact?: boolean
}

export function ErrorState({
  error,
  title = 'Unable to load data.',
  illustration,
  onRetry,
  retrying,
  compact,
  className,
  ...props
}: ErrorStateProps) {
  const { t, text } = useI18n()
  const failure = normalizeApiError(error)
  return (
    <div
      role="alert"
      {...props}
      className={clsx('ui-error-state', compact && 'ui-error-state--compact', className)}
    >
      {illustration ?? <ErrorIllustration size={compact ? 96 : 144} tone="error" />}
      <Heading as="h3" variant="card">
        {text(title)}
      </Heading>
      <Text variant="description" className="ui-error-state-message">
        {failure.source === 'api' ? failure.message : t(failure.message)}
      </Text>
      {onRetry && (
        <Button
          variant="outlined"
          size="sm"
          loading={retrying}
          onClick={async () => {
            try {
              await onRetry()
            } catch {
              /* The request owner retains its inline error state. */
            }
          }}
        >
          {t('Try again')}
        </Button>
      )}
    </div>
  )
}
