import { useI18n } from '../../i18n/use-i18n'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import { useDrawerDismiss, type OutsideClose } from './use-drawer-dismiss'

export interface DrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
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

  const { onPointerDownOutside, reset } = useDrawerDismiss(
    open,
    () => onOpenChange(false),
    outsideClose,
  )
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="drawer-overlay" />
        <Dialog.Content
          className={clsx('drawer', `drawer--${wide ? 'lg' : size}`, className)}
          onPointerDownOutside={onPointerDownOutside}
          onPointerDownCapture={reset}
          onKeyDownCapture={reset}
          {...(!description ? { 'aria-describedby': undefined } : {})}
        >
          <header className="drawer-header">
            <div>
              <span className="drawer-eyebrow">{tr('Details & information')}</span>
              <Dialog.Title>{localize(title)}</Dialog.Title>
              {description && <Dialog.Description>{localize(description)}</Dialog.Description>}
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
