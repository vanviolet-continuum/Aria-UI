import * as Primitive from '@radix-ui/react-dialog'
import clsx from 'clsx'
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { X } from '../../icons/interface/x.icon'
import { useControllableState } from '../../hooks/use.controllable.state'
import { useCloseGuard } from '../../hooks/use.close.guard'
import { useI18n } from '../../i18n/use.i18n'
import { Text } from '../text/text'

export interface DialogProps extends Omit<
  ComponentPropsWithoutRef<typeof Primitive.Content>,
  'title'
> {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  onBeforeClose?: () => boolean | Promise<boolean>
  trigger?: ReactNode
  title: ReactNode
  description?: ReactNode
  footer?: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  hideClose?: boolean
  closeOnOutside?: boolean
  /** Raised for a confirmation opened from another dialog/drawer. */
  layer?: 'default' | 'confirmation'
  overlayClassName?: string
  bodyClassName?: string
}
export function Dialog({
  open,
  defaultOpen = false,
  onOpenChange,
  onBeforeClose,
  trigger,
  title,
  description,
  footer,
  size = 'md',
  hideClose,
  closeOnOutside = true,
  layer = 'default',
  overlayClassName,
  bodyClassName,
  children,
  className,
  onPointerDownOutside,
  ...props
}: DialogProps) {
  const { t } = useI18n()
  const [visible, setVisible] = useControllableState(open, defaultOpen, onOpenChange)
  const requestChange = useCloseGuard(visible, setVisible, onBeforeClose)
  return (
    <Primitive.Root open={visible} onOpenChange={requestChange}>
      {trigger && <Primitive.Trigger asChild>{trigger}</Primitive.Trigger>}
      <Primitive.Portal>
        <Primitive.Overlay
          className={clsx('ui-dialog-overlay', 'ui-dialog-layer--' + layer, overlayClassName)}
        />
        <Primitive.Content
          {...(!description ? { 'aria-describedby': undefined } : {})}
          {...props}
          className={clsx(
            'ui-dialog',
            'ui-dialog--' + size,
            'ui-dialog-layer--' + layer,
            className,
          )}
          onPointerDownOutside={(event) => {
            onPointerDownOutside?.(event)
            if (!closeOnOutside) event.preventDefault()
          }}
        >
          <DialogHeader>
            <div className="ui-dialog-heading">
              <DialogTitle>{title}</DialogTitle>
              {description && <DialogDescription>{description}</DialogDescription>}
            </div>
            {!hideClose && (
              <Primitive.Close
                type="button"
                className="ui-dialog-close"
                aria-label={t('Close dialog')}
              >
                <X size={18} />
              </Primitive.Close>
            )}
          </DialogHeader>
          <DialogBody className={bodyClassName}>{children}</DialogBody>
          {footer && <DialogFooter>{footer}</DialogFooter>}
        </Primitive.Content>
      </Primitive.Portal>
    </Primitive.Root>
  )
}
export const DialogClose = Primitive.Close
export const DialogTitle = /* @__PURE__ */ forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<typeof Primitive.Title>
>(function DialogTitle({ children, className, ...props }, ref) {
  return (
    <Primitive.Title {...props} ref={ref} className={clsx('ui-dialog-title', className)}>
      <Text as="span" variant="dialog">
        {children}
      </Text>
    </Primitive.Title>
  )
})
export const DialogDescription = /* @__PURE__ */ forwardRef<
  HTMLParagraphElement,
  ComponentPropsWithoutRef<typeof Primitive.Description>
>(function DialogDescription({ children, className, ...props }, ref) {
  return (
    <Primitive.Description
      {...props}
      ref={ref}
      className={clsx('ui-dialog-description', className)}
    >
      <Text as="span" variant="description">
        {children}
      </Text>
    </Primitive.Description>
  )
})
export function DialogHeader({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <header {...props} className={clsx('ui-dialog-header', className)} />
}
export function DialogBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={clsx('ui-dialog-body', className)} />
}
export function DialogFooter({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <footer {...props} className={clsx('ui-dialog-footer', className)} />
}
