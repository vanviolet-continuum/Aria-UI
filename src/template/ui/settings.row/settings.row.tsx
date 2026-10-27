import {
  cloneElement,
  isValidElement,
  useId,
  useRef,
  type ElementType,
  type ReactNode,
  type MouseEventHandler,
} from 'react'
import clsx from 'clsx'
import { Box, type BoxProps } from '../box/box'
import type { BoxOptions, LayoutProps, Responsive } from '../layout.shared/layout.types'
import { renderBox, responsiveStyle } from '../layout.shared/layout.utils'
import { Text } from '../text/text'
import { TextContent } from '../block.shared/text.content'
import { hasContent, mergeIds } from '../block.shared/block.utils'
import { SettingsRowContent, SettingsRowControl } from './settings.row.parts'

export interface SettingsControlProps {
  id: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
}
export interface SettingsRowOptions extends BoxOptions {
  label?: ReactNode
  description?: ReactNode
  leading?: ReactNode
  control?: ReactNode | ((props: SettingsControlProps) => ReactNode)
  controlId?: string
  size?: 'sm' | 'md' | 'lg'
  direction?: Responsive<'row' | 'column'>
  divider?: boolean
  children?: ReactNode
  slotProps?: {
    content?: BoxProps
    label?: Omit<BoxProps, 'as' | 'ref'>
    description?: BoxProps
    control?: BoxProps
    leading?: BoxProps
  }
}
export type SettingsRowProps<E extends ElementType = 'div'> = LayoutProps<E, SettingsRowOptions>

export function SettingsRow<E extends ElementType = 'div'>({
  label,
  description,
  leading,
  control,
  controlId,
  size = 'md',
  direction,
  divider = false,
  slotProps = {},
  children,
  ...props
}: SettingsRowProps<E>) {
  const generatedId = useId()
  const forwardingClick = useRef(false)
  const element = isValidElement<Partial<SettingsControlProps>>(control) ? control : null
  const id = element?.props.id ?? controlId ?? `${generatedId}-control`
  const labelId = slotProps.label?.id ?? `${generatedId}-label`
  const descriptionId = slotProps.description?.id ?? `${generatedId}-description`
  const connection: SettingsControlProps = {
    id,
    'aria-labelledby': mergeIds(
      element?.props['aria-labelledby'],
      hasContent(label) ? labelId : undefined,
    ),
    'aria-describedby': mergeIds(
      element?.props['aria-describedby'],
      hasContent(description) ? descriptionId : undefined,
    ),
  }
  const linkedControl =
    children !== undefined
      ? undefined
      : typeof control === 'function'
        ? control(connection)
        : element
          ? cloneElement(element, connection)
          : control
  const renderedLabel = hasContent(label)
    ? renderBox(
        { ...slotProps.label, as: element || typeof control === 'function' ? 'label' : 'div' },
        clsx('aria-settings-row-label', slotProps.label?.className),
        undefined,
        {
          id: labelId,
          htmlFor: element || typeof control === 'function' ? id : undefined,
          children: <TextContent variant="label">{label}</TextContent>,
        },
      )
    : undefined
  const content =
    children !== undefined ? (
      children
    ) : (
      <>
        {hasContent(leading) && <Box {...slotProps.leading}>{leading}</Box>}
        {(hasContent(label) || hasContent(description)) && (
          <SettingsRowContent {...slotProps.content}>
            {renderedLabel}
            {hasContent(description) && (
              <Box {...slotProps.description} id={descriptionId}>
                <Text as="div" variant="description">
                  {description}
                </Text>
              </Box>
            )}
          </SettingsRowContent>
        )}
        {hasContent(linkedControl) && (
          <SettingsRowControl {...slotProps.control}>{linkedControl}</SettingsRowControl>
        )}
      </>
    )
  const onRowClick: MouseEventHandler<HTMLElement> = (event) => {
    if (forwardingClick.current) {
      event.stopPropagation()
      return
    }
    ;(props as { onClick?: MouseEventHandler<HTMLElement> }).onClick?.(event)
    if (
      event.defaultPrevented ||
      !(event.target instanceof Element) ||
      event.target.closest(
        'input, button, a, label, select, textarea, [role="button"], [role="switch"], [data-no-toggle]',
      )
    )
      return
    const controls = event.currentTarget.querySelectorAll<HTMLInputElement>(
      '.aria-settings-row-control input[type="checkbox"]',
    )
    if (controls.length !== 1 || controls[0].disabled || controls[0].readOnly) return
    controls[0].focus({ preventScroll: true })
    forwardingClick.current = true
    try {
      controls[0].click()
    } finally {
      forwardingClick.current = false
    }
  }
  return renderBox(
    props,
    clsx('aria-settings-row', divider && 'aria-settings-row--divider'),
    {
      ...responsiveStyle('direction', direction),
      ...responsiveStyle('settings-align', direction, (value) =>
        value === 'column' ? 'stretch' : 'center',
      ),
    },
    { 'data-settings-size': size, children: content, onClick: onRowClick },
  )
}
