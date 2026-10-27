import { useCallback, useEffect, useRef, useState } from 'react'
import { Dialog } from '../ui/dialog/dialog'
import { Button } from '../ui/button/button'
import { useI18n } from '../i18n/use.i18n'

export interface UnsavedChangesOptions {
  title?: string
  description?: string
  stayLabel?: string
  discardLabel?: string
  beforeUnload?: boolean
}
export function useUnsavedChangesGuard(when: boolean, options: UnsavedChangesOptions = {}) {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const active = useRef(when)
  active.current = when
  const pending = useRef<
    { promise: Promise<boolean>; resolve: (allow: boolean) => void } | undefined
  >(undefined)
  const settle = useCallback((allow: boolean) => {
    pending.current?.resolve(allow)
    pending.current = undefined
    setOpen(false)
  }, [])
  const confirmDiscard = useCallback((): Promise<boolean> => {
    if (!active.current) return Promise.resolve(true)
    if (pending.current) return pending.current.promise
    let resolve!: (allow: boolean) => void
    const promise = new Promise<boolean>((accept) => {
      resolve = accept
    })
    pending.current = { promise, resolve }
    setOpen(true)
    return promise
  }, [])
  useEffect(() => {
    if (!when && pending.current) settle(true)
  }, [when, settle])
  useEffect(() => {
    if (!when || options.beforeUnload === false) return
    const prevent = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = ''
    }
    window.addEventListener('beforeunload', prevent)
    return () => window.removeEventListener('beforeunload', prevent)
  }, [when, options.beforeUnload])
  useEffect(
    () => () => {
      pending.current?.resolve(false)
      pending.current = undefined
    },
    [],
  )
  const requestClose = useCallback(
    async (close: () => void) => {
      const allowed = await confirmDiscard()
      if (allowed) close()
      return allowed
    },
    [confirmDiscard],
  )
  const confirmation = (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) settle(false)
      }}
      title={t(options.title ?? 'Discard unsaved changes?')}
      description={t(
        options.description ??
          'Your changes have not been saved. You can stay and continue editing.',
      )}
      size="sm"
      layer="confirmation"
      footer={
        <>
          <Button variant="outlined" onClick={() => settle(false)}>
            {t(options.stayLabel ?? 'Keep editing')}
          </Button>
          <Button variant="contained" color="error" onClick={() => settle(true)}>
            {t(options.discardLabel ?? 'Discard changes')}
          </Button>
        </>
      }
    ></Dialog>
  )
  return { confirmDiscard, requestClose, confirmation, isConfirming: open }
}
