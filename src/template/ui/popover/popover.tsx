import * as Primitive from '@radix-ui/react-popover'
import type { ReactNode } from 'react'

export function Popover({
  trigger,
  children,
  open,
  onOpenChange,
  align = 'start',
  className = '',
}: {
  trigger: ReactNode
  children: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  align?: 'start' | 'center' | 'end'
  className?: string
}) {
  return (
    <Primitive.Root open={open} onOpenChange={onOpenChange}>
      <Primitive.Trigger asChild>{trigger}</Primitive.Trigger>
      <Primitive.Portal>
        <Primitive.Content className={`popover ${className}`} align={align} sideOffset={8}>
          {children}
        </Primitive.Content>
      </Primitive.Portal>
    </Primitive.Root>
  )
}
