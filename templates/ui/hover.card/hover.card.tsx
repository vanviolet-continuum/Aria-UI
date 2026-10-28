import * as Primitive from '@radix-ui/react-hover-card'
import clsx from 'clsx'
import { useId, useState, type ComponentPropsWithoutRef, type ReactNode } from 'react'

export interface HoverCardProps extends Omit<
  ComponentPropsWithoutRef<typeof Primitive.Content>,
  'content'
> {
  children: ReactNode
  content: ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  openDelay?: number
  closeDelay?: number
}
/** Rich, read-only preview. Use a Popover for content containing actions or fields. */
export function HoverCard({
  children,
  content,
  open,
  onOpenChange,
  openDelay = 350,
  closeDelay = 120,
  className,
  sideOffset = 8,
  id,
  ...props
}: HoverCardProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const generatedId = useId()
  const contentId = id ?? generatedId
  const change = (next: boolean) => {
    setInternalOpen(next)
    onOpenChange?.(next)
  }
  return (
    <Primitive.Root
      open={open ?? internalOpen}
      onOpenChange={change}
      openDelay={openDelay}
      closeDelay={closeDelay}
    >
      <Primitive.Trigger
        asChild
        aria-describedby={(open ?? internalOpen) ? contentId : undefined}
        onFocus={() => change(true)}
        onBlur={() => change(false)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') change(false)
        }}
      >
        {children}
      </Primitive.Trigger>
      <Primitive.Portal>
        <Primitive.Content
          {...props}
          id={contentId}
          role="tooltip"
          sideOffset={sideOffset}
          collisionPadding={12}
          className={clsx('ui-hover-card', className)}
        >
          {content}
          <Primitive.Arrow className="ui-hover-card-arrow" />
        </Primitive.Content>
      </Primitive.Portal>
    </Primitive.Root>
  )
}
