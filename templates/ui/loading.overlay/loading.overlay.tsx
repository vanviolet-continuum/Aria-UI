import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import { LoaderCircle } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import type { ReactNode } from 'react'
import { LoadingIllustration } from '../illustrations/states/loading.illustration'

export function Spinner({ size = 19, label = 'Loading' }: { size?: number; label?: string }) {
  const { text: localize } = useI18n()

  return (
    <LoaderCircle
      size={size}
      className="ui-spinner"
      aria-label={localize(label || undefined)}
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
    />
  )
}
export interface LoadingOverlayProps {
  loading: boolean
  children?: ReactNode
  label?: string
  description?: string
  fullscreen?: boolean
}
function LoadingContent({ label, description }: { label: string; description: string }) {
  const { t: tr, text: localize } = useI18n()

  return (
    <div className="loading-overlay-card">
      <LoadingIllustration label={tr('')} size={95} />
      <Text as="strong" variant="label">
        {localize(label)}
      </Text>
      <Text as="small" variant="caption">
        {localize(description)}
      </Text>
    </div>
  )
}
export function LoadingOverlay({
  loading,
  children,
  label = 'Getting things ready…',
  description = 'Just a moment. We’re taking care of the details.',
  fullscreen = false,
}: LoadingOverlayProps) {
  const { text: localize } = useI18n()

  if (fullscreen)
    return (
      <>
        {children}
        <Dialog.Root open={loading}>
          <Dialog.Portal>
            <Dialog.Overlay className="mutation-backdrop" />
            <Dialog.Content
              className="mutation-overlay"
              aria-describedby={undefined}
              onEscapeKeyDown={(event) => event.preventDefault()}
              onPointerDownOutside={(event) => event.preventDefault()}
            >
              <Dialog.Title className="sr-only">
                <Text as="span" variant="dialog">
                  {localize(label)}
                </Text>
              </Dialog.Title>
              <div role="status" aria-live="polite">
                <LoadingContent label={localize(label)} description={localize(description)} />
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </>
    )
  return (
    <div className="loading-container" aria-busy={loading}>
      {children}
      {loading && (
        <div className="loading-overlay" role="status" aria-live="polite">
          <LoadingContent label={localize(label)} description={localize(description)} />
        </div>
      )}
    </div>
  )
}
