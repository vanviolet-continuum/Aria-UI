import * as Primitive from '@radix-ui/react-radio-group'
import clsx from 'clsx'
import {
  createContext,
  forwardRef,
  useContext,
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'
import { Text } from '../text/text'

const DisabledContext = /* @__PURE__ */ createContext(false)
export interface RadioGroupOption {
  value: string
  label: ReactNode
  description?: ReactNode
  leading?: ReactNode
  disabled?: boolean
}
export interface RadioGroupProps extends ComponentPropsWithoutRef<typeof Primitive.Root> {
  options?: readonly RadioGroupOption[]
  variant?: 'plain' | 'card'
  columns?: number
}
export const RadioGroup = /* @__PURE__ */ forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup(
    {
      options,
      children,
      variant = 'plain',
      orientation = 'vertical',
      columns,
      disabled,
      className,
      style,
      ...props
    },
    ref,
  ) {
    return (
      <DisabledContext.Provider value={!!disabled}>
        <Primitive.Root
          {...props}
          disabled={disabled}
          ref={ref}
          orientation={orientation}
          className={clsx('ui-radio-group', 'ui-radio-group--' + variant, className)}
          style={{
            display: columns ? 'grid' : undefined,
            gridTemplateColumns: columns ? 'repeat(' + columns + ', minmax(0, 1fr))' : undefined,
            ...style,
          }}
        >
          {options
            ? options.map((option) => <RadioGroupItem key={option.value} {...option} />)
            : children}
        </Primitive.Root>
      </DisabledContext.Provider>
    )
  },
)
export interface RadioGroupItemProps extends Omit<
  ComponentPropsWithoutRef<typeof Primitive.Item>,
  'children'
> {
  label: ReactNode
  description?: ReactNode
  leading?: ReactNode
  trailing?: ReactNode
  wrapperClassName?: string
}
export const RadioGroupItem = /* @__PURE__ */ forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  function RadioGroupItem(
    { label, description, leading, trailing, wrapperClassName, id, disabled, className, ...props },
    ref,
  ) {
    const generated = useId()
    const groupDisabled = useContext(DisabledContext)
    const unavailable = groupDisabled || disabled
    const inputId = id ?? generated
    return (
      <label
        className={clsx('ui-radio-option', wrapperClassName)}
        htmlFor={inputId}
        data-disabled={unavailable || undefined}
      >
        <Primitive.Item
          {...props}
          id={inputId}
          disabled={unavailable}
          ref={ref}
          aria-labelledby={inputId + '-label'}
          aria-describedby={description ? inputId + '-description' : undefined}
          className={clsx('ui-radio', className)}
        >
          <Primitive.Indicator className="ui-radio-indicator" />
        </Primitive.Item>
        {leading && (
          <span className="ui-radio-leading" aria-hidden="true">
            {leading}
          </span>
        )}
        <span className="ui-radio-copy">
          <Text as="span" variant="label" id={inputId + '-label'}>
            {label}
          </Text>
          {description && (
            <Text as="span" variant="description" id={inputId + '-description'}>
              {description}
            </Text>
          )}
        </span>
        {trailing && <span className="ui-radio-trailing">{trailing}</span>}
      </label>
    )
  },
)
