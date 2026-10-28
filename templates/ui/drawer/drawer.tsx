import { Text } from '../text/text'

import { Eyebrow } from '../eyebrow/eyebrow'
import { useI18n } from '../../i18n/use.i18n'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import clsx from 'clsx'
import { useCallback, useEffect, useRef, type ReactNode } from 'react'
import { useDrawerDismiss, type OutsideClose } from './use.drawer.dismiss'
import { useCloseGuard } from '../../hooks/use.close.guard'

export interface DrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onBeforeClose?: () => boolean | Promise<boolean>
  onAfterClose?: () => void
  restoreFocus?: boolean
  title: string
  description?: string
  children: ReactNode
  footer?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  wide?: boolean
  className?: string
  outsideClose?: OutsideClose
}

export function Drawer({
  open,
  onOpenChange,
  onBeforeClose,
  onAfterClose,
  restoreFocus = true,
  title,
  description,
  children,
  footer,
  size = 'md',
  wide,
  className,
  outsideClose = 'double-click',
}: DrawerProps) {
  const { t: tr, text: localize } = useI18n()
  const requestChange = useCloseGuard(open, onOpenChange, onBeforeClose)
  const content = useRef<HTMLDivElement>(null)
  const wasOpen = useRef(open)
  const closing = useRef(false)
  const exitTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const afterClose = useRef(onAfterClose)
  afterClose.current = onAfterClose
  const finishClose = useCallback(() => {
    if (!closing.current) return
    closing.current = false
    clearTimeout(exitTimer.current)
    afterClose.current?.()
  }, [])
  useEffect(() => {
    if (open) {
      wasOpen.current = true
      closing.current = false
      return
    }
    if (!wasOpen.current) return
    wasOpen.current = false
    closing.current = true
    const style = content.current ? getComputedStyle(content.current) : undefined
    const milliseconds = (value: string) =>
      value.endsWith('ms') ? parseFloat(value) : parseFloat(value) * 1000
    const duration =
      style?.animationName !== 'none'
        ? Math.max(
            0,
            ...(style?.animationDuration.split(',').map((value) => milliseconds(value.trim())) ??
              []),
          )
        : 0
    const delay = Math.max(
      0,
      ...(style?.animationDelay.split(',').map((value) => milliseconds(value.trim())) ?? []),
    )
    exitTimer.current = setTimeout(finishClose, duration + delay + 32)
    return () => clearTimeout(exitTimer.current)
  }, [open, finishClose])

  const { onPointerDownOutside, reset } = useDrawerDismiss(
    open,
    () => requestChange(false),
    outsideClose,
  )
  return (
    <Dialog.Root open={open} onOpenChange={requestChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="drawer-overlay" />
        <Dialog.Content
          ref={content}
          className={clsx('drawer', `drawer--${wide ? 'lg' : size}`, className)}
          onPointerDownOutside={onPointerDownOutside}
          onPointerDownCapture={reset}
          onKeyDownCapture={reset}
          onCloseAutoFocus={(event) => {
            if (!restoreFocus) event.preventDefault()
          }}
          onAnimationEnd={(event) => {
            if (!open && event.target === event.currentTarget) finishClose()
          }}
          {...(!description ? { 'aria-describedby': undefined } : {})}
        >
          <header className="drawer-header">
            <div>
              <Eyebrow as="span" variant="eyebrow" className="drawer-eyebrow">
                {tr('Details & information')}
              </Eyebrow>
              <Dialog.Title>
                <Text as="span" variant="dialog">
                  {localize(title)}
                </Text>
              </Dialog.Title>
              {description && (
                <Dialog.Description>
                  <Text as="span" variant="description">
                    {localize(description)}
                  </Text>
                </Dialog.Description>
              )}
            </div>
            <Dialog.Close className="icon-button drawer-close" aria-label={tr('Close panel')}>
              <X size={19} />
            </Dialog.Close>
          </header>
          <div className="drawer-body">{children}</div>
          {footer && <DrawerFooter>{footer}</DrawerFooter>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function DrawerFooter({ children }: { children: ReactNode }) {
  return <footer className="drawer-footer">{children}</footer>
}
