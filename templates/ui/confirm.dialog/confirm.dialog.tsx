import { FieldError } from '../field.error/field.error'

import { Text } from '../text/text'

import { Eyebrow } from '../eyebrow/eyebrow'
import { useI18n } from '../../i18n/use.i18n'
import * as Dialog from '@radix-ui/react-dialog'
import { AlertTriangle, Trash2 } from 'lucide-react'
import { useRef, useState } from 'react'
import { Button } from '../button/button'
import { LoadingOverlay } from '../loading.overlay/loading.overlay'

export interface ConfirmDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description: string
  onConfirm: () => void | boolean | Promise<void | boolean>
  confirmLabel?: string
  loading?: boolean
}
export function ConfirmDialog({
  open,
  onOpenChange,
  title = 'Delete this record?',
  description,
  onConfirm,
  confirmLabel = 'Yes, delete it',
  loading,
}: ConfirmDialogProps) {
  const { t: tr, text: localize } = useI18n()

  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const cancelButton = useRef<HTMLButtonElement>(null)
  const busy = loading || pending
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (!busy) {
          setError('')
          onOpenChange(next)
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="confirm-backdrop" />
        <Dialog.Content
          className="confirm-dialog"
          onOpenAutoFocus={(event) => {
            event.preventDefault()
            cancelButton.current?.focus()
          }}
        >
          <LoadingOverlay loading={!!busy} label={tr('Updating your workspace…')}>
            <Text as="span" variant="label" tone="inherit" className="confirm-dialog-icon">
              <AlertTriangle size={26} strokeWidth={1.6} />
            </Text>
            <Eyebrow as="span" variant="eyebrow" className="state-eyebrow">
              {tr('A QUICK DOUBLE-CHECK')}
            </Eyebrow>
            <Dialog.Title>
              <Text as="span" variant="dialog">
                {localize(title)}
              </Text>
            </Dialog.Title>
            <Dialog.Description>
              <Text as="span" variant="description">
                {localize(description)}
              </Text>
            </Dialog.Description>
            {error && (
              <FieldError as="p" variant="error" className="ui-field-error" role="alert">
                {localize(error)}
              </FieldError>
            )}
            <div className="confirm-dialog-actions">
              <Button
                ref={cancelButton}
                disabled={busy}
                variant="outlined"
                color="secondary"
                onClick={() => onOpenChange(false)}
              >
                {tr('Keep it')}
              </Button>
              <Button
                variant="contained"
                color="error"
                disabled={busy}
                onClick={async () => {
                  setPending(true)
                  setError('')
                  try {
                    const result = await onConfirm()
                    if (result !== false) onOpenChange(false)
                  } catch (error) {
                    setError(
                      error instanceof Error
                        ? error.message
                        : 'Unable to complete this action. Please try again.',
                    )
                  } finally {
                    setPending(false)
                  }
                }}
              >
                <Trash2 size={15} />
                {confirmLabel}
              </Button>
            </div>
          </LoadingOverlay>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
