import { Text } from '../text/text'
import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'
import clsx from 'clsx'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
  leadingIcon?: ReactNode
  trailing?: ReactNode
  inputSize?: 'sm' | 'md' | 'lg' | 'default'
}

export const Input = /* @__PURE__ */ forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, invalid, leadingIcon, trailing, inputSize = 'default', ...props },
  ref,
) {
  return (
    <Text
      as="span"
      variant="label"
      tone="inherit"
      className={clsx(
        'ui-input-wrap',
        `ui-input-wrap--${inputSize}`,
        {
          'ui-input-wrap--invalid': invalid,
          'ui-input-wrap--disabled': props.disabled,
        },
        className,
      )}
    >
      {leadingIcon && (
        <Text as="span" variant="label" className="ui-input-icon">
          {leadingIcon}
        </Text>
      )}
      <input
        ref={ref}
        className="ui-input"
        data-typography="input"
        aria-invalid={invalid || undefined}
        {...props}
      />
      {trailing && (
        <Text as="span" variant="label" tone="inherit" className="ui-input-trailing">
          {trailing}
        </Text>
      )}
    </Text>
  )
})
