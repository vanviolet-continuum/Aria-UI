import { CodeText } from '../code.text/code.text'

import { Text } from '../text/text'
import * as Primitive from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import { Check } from 'lucide-react'
import { Fragment, type ReactNode } from 'react'
import { useI18n } from '../../i18n/use.i18n'

export interface MenuItem {
  id: string
  label: string
  description?: string
  icon?: ReactNode
  shortcut?: string
  trailing?: ReactNode
  disabled?: boolean
  destructive?: boolean
  separator?: boolean
  checked?: boolean
  keepOpen?: boolean
  onSelect?: () => void
  onCheckedChange?: (checked: boolean) => void
}

export interface MenuProps {
  trigger: ReactNode
  items: MenuItem[]
  label?: string
  description?: string
  footer?: ReactNode
  variant?: 'default' | 'compact' | 'rich'
  size?: 'sm' | 'md' | 'lg'
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  open?: boolean
  onOpenChange?: (open: boolean) => void
  selection?: 'none' | 'single'
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}

export function Menu({
  trigger,
  items,
  label,
  description,
  footer,
  variant = 'default',
  size = 'md',
  align = 'end',
  side = 'bottom',
  open,
  onOpenChange,
  selection = 'none',
  value,
  onValueChange,
  className,
}: MenuProps) {
  const { text: localize } = useI18n()
  return (
    <Primitive.Root modal={false} open={open} onOpenChange={onOpenChange}>
      <Primitive.Trigger asChild>{trigger}</Primitive.Trigger>
      <Primitive.Portal>
        <Primitive.Content
          className={clsx(
            'ui-floating-surface',
            'ui-menu',
            `ui-menu--${variant}`,
            `ui-menu--${size}`,
            className,
          )}
          align={align}
          side={side}
          sideOffset={8}
          collisionPadding={12}
          aria-label={label ? localize(label) : undefined}
        >
          {(label || description) && (
            <Primitive.Label className="ui-menu-heading">
              {label && (
                <Text as="strong" variant="label">
                  {localize(label)}
                </Text>
              )}
              {description && (
                <Text as="span" variant="menu">
                  {localize(description)}
                </Text>
              )}
            </Primitive.Label>
          )}
          <Primitive.RadioGroup value={value} onValueChange={onValueChange}>
            {items.map((item) => {
              const selected = selection === 'single' ? value === item.id : item.checked
              const content = (
                <>
                  {item.icon && (
                    <Text
                      as="span"
                      variant="menu"
                      tone="inherit"
                      className="ui-menu-icon"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </Text>
                  )}
                  <Text as="span" variant="menu" tone="inherit" className="ui-menu-copy">
                    <Text as="span" variant="menu">
                      {localize(item.label)}
                    </Text>
                    {item.description && (
                      <Text as="small" variant="description">
                        {localize(item.description)}
                      </Text>
                    )}
                  </Text>
                  {(item.shortcut || item.trailing) && (
                    <Text as="span" variant="menu" tone="inherit" className="ui-menu-trailing">
                      {item.trailing}
                      {item.shortcut && (
                        <CodeText as="kbd" variant="code">
                          {item.shortcut}
                        </CodeText>
                      )}
                    </Text>
                  )}
                  {(selection === 'single' || item.checked !== undefined) && (
                    <Text
                      as="span"
                      variant="menu"
                      tone="inherit"
                      className="ui-menu-check"
                      aria-hidden="true"
                    >
                      {selected && <Check size={15} />}
                    </Text>
                  )}
                </>
              )
              const shared = {
                className: clsx('ui-menu-item', item.destructive && 'ui-menu-item--danger'),
                disabled: item.disabled,
                textValue: localize(item.label),
                'data-selected': selected || undefined,
                onSelect: (event: Event) => {
                  if (item.keepOpen) event.preventDefault()
                  item.onSelect?.()
                },
              }
              return (
                <Fragment key={item.id}>
                  {item.separator && <Primitive.Separator className="ui-menu-separator" />}
                  {selection === 'single' ? (
                    <Primitive.RadioItem {...shared} value={item.id}>
                      {content}
                    </Primitive.RadioItem>
                  ) : item.checked !== undefined ? (
                    <Primitive.CheckboxItem
                      {...shared}
                      checked={item.checked}
                      onCheckedChange={(checked) => item.onCheckedChange?.(checked === true)}
                    >
                      {content}
                    </Primitive.CheckboxItem>
                  ) : (
                    <Primitive.Item {...shared}>{content}</Primitive.Item>
                  )}
                </Fragment>
              )
            })}
          </Primitive.RadioGroup>
          {footer && <div className="ui-menu-footer">{footer}</div>}
        </Primitive.Content>
      </Primitive.Portal>
    </Primitive.Root>
  )
}
