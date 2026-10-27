import type { ComponentPropsWithoutRef, InputHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import { useI18n } from '../../i18n/use.i18n'
import { Checkbox } from './checkbox'
import { Text } from '../text/text'

export interface CheckboxFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'children' | 'size'
> {
  label: ReactNode
  description?: ReactNode
  trailing?: ReactNode
  labelHidden?: boolean
  indeterminate?: boolean
  variant?: 'plain' | 'row' | 'card'
  inputClassName?: string
  containerProps?: Omit<ComponentPropsWithoutRef<'label'>, 'children' | 'className' | 'htmlFor'>
}

/** The native label owns the entire row/card, including its padding. */
export function CheckboxField({
  label,
  description,
  trailing,
  labelHidden,
  indeterminate,
  variant = 'plain',
  className,
  inputClassName,
  containerProps,
  disabled,
  ...inputProps
}: CheckboxFieldProps) {
  const { text: localize } = useI18n()
  return (
    <label
      {...containerProps}
      className={clsx('checkbox-field', `checkbox-field--${variant}`, className)}
      data-disabled={disabled || undefined}
    >
      <Checkbox
        {...inputProps}
        disabled={disabled}
        indeterminate={indeterminate}
        className={inputClassName}
      />
      <span className={clsx('checkbox-field-content', labelHidden && 'sr-only')}>
        <Text as="span" variant="label" tone="inherit">
          {localize(label)}
        </Text>
        {description && (
          <Text as="span" variant="description">
            {localize(description)}
          </Text>
        )}
      </span>
      {trailing && <span className="checkbox-field-trailing">{trailing}</span>}
    </label>
  )
}
