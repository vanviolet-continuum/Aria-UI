import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'
import clsx from 'clsx'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
  leadingIcon?: ReactNode
  trailing?: ReactNode
  inputSize?: 'sm' | 'md' | 'lg' | 'default'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, invalid, leadingIcon, trailing, inputSize = 'default', ...props },
  ref,
) {
  return (
    <span
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
      {leadingIcon && <span className="ui-input-icon">{leadingIcon}</span>}
      <input ref={ref} className="ui-input" aria-invalid={invalid || undefined} {...props} />
      {trailing && <span className="ui-input-trailing">{trailing}</span>}
    </span>
  )
})
