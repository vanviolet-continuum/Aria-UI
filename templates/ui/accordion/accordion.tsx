import * as Primitive from '@radix-ui/react-accordion'
import clsx from 'clsx'
import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { ChevronDown } from '../../icons/navigation/chevron.down.icon'
import { Text } from '../text/text'

export interface AccordionEntry {
  value: string
  title: ReactNode
  description?: ReactNode
  content: ReactNode
  leading?: ReactNode
  disabled?: boolean
}
type SharedProps = {
  items?: readonly AccordionEntry[]
  variant?: 'bordered' | 'separated' | 'plain'
}
export type AccordionProps = ComponentPropsWithoutRef<typeof Primitive.Root> & SharedProps
export const Accordion = /* @__PURE__ */ forwardRef<HTMLDivElement, AccordionProps>(
  function Accordion({ items, children, variant = 'bordered', className, ...props }, ref) {
    return (
      <Primitive.Root
        {...props}
        ref={ref}
        className={clsx('ui-accordion', 'ui-accordion--' + variant, className)}
      >
        {items
          ? items.map((item) => (
              <AccordionItem key={item.value} value={item.value} disabled={item.disabled}>
                <AccordionTrigger>
                  {item.leading && (
                    <span className="ui-accordion-leading" aria-hidden="true">
                      {item.leading}
                    </span>
                  )}
                  <span className="ui-accordion-copy">
                    <Text as="span" variant="label">
                      {item.title}
                    </Text>
                    {item.description && (
                      <Text as="span" variant="description">
                        {item.description}
                      </Text>
                    )}
                  </span>
                </AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))
          : children}
      </Primitive.Root>
    )
  },
)
export const AccordionItem = /* @__PURE__ */ forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof Primitive.Item>
>(function AccordionItem({ className, ...props }, ref) {
  return <Primitive.Item {...props} ref={ref} className={clsx('ui-accordion-item', className)} />
})
export const AccordionTrigger = /* @__PURE__ */ forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof Primitive.Trigger>
>(function AccordionTrigger({ className, children, ...props }, ref) {
  return (
    <Primitive.Header className="ui-accordion-header">
      <Primitive.Trigger {...props} ref={ref} className={clsx('ui-accordion-trigger', className)}>
        {children}
        <ChevronDown size={16} className="ui-accordion-chevron" aria-hidden="true" />
      </Primitive.Trigger>
    </Primitive.Header>
  )
})
export const AccordionContent = /* @__PURE__ */ forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof Primitive.Content>
>(function AccordionContent({ className, children, ...props }, ref) {
  return (
    <Primitive.Content {...props} ref={ref} className={clsx('ui-accordion-content', className)}>
      <div className="ui-accordion-body">{children}</div>
    </Primitive.Content>
  )
})
