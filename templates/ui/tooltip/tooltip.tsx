import * as Primitive from '@radix-ui/react-tooltip'
import clsx from 'clsx'
import { createContext, useContext, type ComponentPropsWithoutRef, type ReactNode } from 'react'

const ProviderContext = /* @__PURE__ */ createContext(false)
export function TooltipProvider({
  children,
  delayDuration = 400,
  ...props
}: ComponentPropsWithoutRef<typeof Primitive.Provider>) {
  return (
    <ProviderContext.Provider value={true}>
      <Primitive.Provider {...props} delayDuration={delayDuration}>
        {children}
      </Primitive.Provider>
    </ProviderContext.Provider>
  )
}
export interface TooltipProps extends Omit<
  ComponentPropsWithoutRef<typeof Primitive.Content>,
  'content'
> {
  content: ReactNode
  children: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  delayDuration?: number
  disableHoverableContent?: boolean
}
export function Tooltip({
  content,
  children,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  disableHoverableContent,
  className,
  sideOffset = 7,
  ...props
}: TooltipProps) {
  const provided = useContext(ProviderContext)
  const tooltip = (
    <Primitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <Primitive.Trigger asChild>{children}</Primitive.Trigger>
      <Primitive.Portal>
        <Primitive.Content
          {...props}
          sideOffset={sideOffset}
          collisionPadding={12}
          className={clsx('ui-tooltip', className)}
        >
          {content}
          <Primitive.Arrow className="ui-tooltip-arrow" />
        </Primitive.Content>
      </Primitive.Portal>
    </Primitive.Root>
  )
  return provided ? tooltip : <TooltipProvider>{tooltip}</TooltipProvider>
}
