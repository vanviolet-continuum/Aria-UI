import * as Primitive from '@radix-ui/react-popover'
import clsx from 'clsx'
import { forwardRef, type ComponentPropsWithoutRef, type ComponentRef, type ReactNode } from 'react'

export interface PopoverContentProps extends ComponentPropsWithoutRef<typeof Primitive.Content> {
  variant?: 'default' | 'menu' | 'form'
  size?: 'sm' | 'md' | 'lg' | 'auto'
  /** Content composites can own their one scrolling region. */
  scrollArea?: 'panel' | 'content'
}
export const PopoverContent = /* @__PURE__ */ forwardRef<
  ComponentRef<typeof Primitive.Content>,
  PopoverContentProps
>(function PopoverContent(
  {
    variant = 'default',
    size = 'md',
    scrollArea = 'panel',
    className,
    sideOffset = 8,
    collisionPadding = 12,
    ...props
  },
  ref,
) {
  return (
    <Primitive.Content
      ref={ref}
      className={clsx(
        'ui-floating-surface',
        'popover',
        `popover--${variant}`,
        `popover--${size}`,
        `popover--scroll-${scrollArea}`,
        className,
      )}
      sideOffset={sideOffset}
      collisionPadding={collisionPadding}
      {...props}
    />
  )
})
export interface PopoverProps extends PopoverContentProps {
  trigger: ReactNode
  children: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Popover({
  trigger,
  children,
  open,
  onOpenChange,
  align = 'start',
  ...props
}: PopoverProps) {
  return (
    <Primitive.Root open={open} onOpenChange={onOpenChange}>
      <Primitive.Trigger asChild>{trigger}</Primitive.Trigger>
      <Primitive.Portal>
        <PopoverContent align={align} {...props}>
          {children}
        </PopoverContent>
      </Primitive.Portal>
    </Primitive.Root>
  )
}
