import * as Primitive from '@radix-ui/react-slider'
import clsx from 'clsx'
import {
  forwardRef,
  useId,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { useControllableState } from '../../hooks/use.controllable.state'
import { useI18n } from '../../i18n/use.i18n'
import type { SemanticColor } from '../button/button.types'
import { Text } from '../text/text'

interface SliderCommonProps extends Omit<
  ComponentPropsWithoutRef<typeof Primitive.Root>,
  'value' | 'defaultValue' | 'onValueChange' | 'onValueCommit' | 'children' | 'color'
> {
  label?: ReactNode
  showValue?: boolean
  formatValue?: (value: number) => string
  size?: 'sm' | 'md' | 'lg'
  color?: SemanticColor
  marks?: readonly { value: number; label?: ReactNode }[]
  thumbClassName?: string
  trackClassName?: string
}
export interface SliderProps extends SliderCommonProps {
  value?: number
  defaultValue?: number
  onValueChange?: (value: number) => void
  onValueCommit?: (value: number) => void
}
export interface RangeSliderProps extends SliderCommonProps {
  value?: [number, number]
  defaultValue?: [number, number]
  onValueChange?: (value: [number, number]) => void
  onValueCommit?: (value: [number, number]) => void
  thumbLabels?: readonly [string, string]
}
interface SliderControlProps extends SliderCommonProps {
  values: number[]
  onValuesChange: (values: number[]) => void
  onValuesCommit?: (values: number[]) => void
  thumbLabels?: readonly string[]
}
const SliderControl = /* @__PURE__ */ forwardRef<HTMLSpanElement, SliderControlProps>(
  function SliderControl(
    {
      label,
      values,
      onValuesChange,
      onValuesCommit,
      thumbLabels,
      showValue = false,
      formatValue,
      size = 'md',
      color = 'primary',
      marks,
      thumbClassName,
      trackClassName,
      min = 0,
      max = 100,
      step = 1,
      orientation = 'horizontal',
      className,
      style,
      id,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref,
  ) {
    const labelId = useId()
    const { t, locale } = useI18n()
    const format = formatValue ?? ((value) => value.toLocaleString(locale))
    const names = thumbLabels ?? [t('Value')]
    const rendered = values.map(format).join(' – ')
    return (
      <div
        className={clsx('ui-slider-field', className)}
        dir={props.dir}
        data-orientation={orientation}
        data-disabled={props.disabled || undefined}
        style={{ '--slider-color': 'var(--' + color + ')', ...style } as CSSProperties}
      >
        {(label || showValue) && (
          <div className="ui-slider-heading">
            {label && (
              <Text as="span" variant="label" id={labelId}>
                {label}
              </Text>
            )}
            {showValue && (
              <Text as="output" variant="label" tone="primary">
                {rendered}
              </Text>
            )}
          </div>
        )}
        <Primitive.Root
          {...props}
          ref={ref}
          id={id}
          min={min}
          max={max}
          step={step}
          orientation={orientation}
          value={values}
          onValueChange={onValuesChange}
          onValueCommit={onValuesCommit}
          className={clsx('ui-slider', 'ui-slider--' + size)}
        >
          <Primitive.Track className={clsx('ui-slider-track', trackClassName)}>
            <Primitive.Range className="ui-slider-range" />
          </Primitive.Track>
          {values.map((value, index) => (
            <Primitive.Thumb
              key={index}
              className={clsx('ui-slider-thumb', thumbClassName)}
              aria-label={
                ariaLabel
                  ? values.length > 1
                    ? ariaLabel + ': ' + names[index]
                    : ariaLabel
                  : names[index]
              }
              aria-labelledby={
                ariaLabelledBy || (!ariaLabel && label)
                  ? [
                      ariaLabelledBy ?? labelId,
                      values.length > 1 ? labelId + '-thumb-' + index : undefined,
                    ]
                      .filter(Boolean)
                      .join(' ')
                  : undefined
              }
              aria-describedby={ariaDescribedBy}
              aria-invalid={ariaInvalid}
              aria-valuetext={format(value)}
            />
          ))}
        </Primitive.Root>
        {values.length > 1 &&
          names.map((name, index) => (
            <span key={index} id={labelId + '-thumb-' + index} className="ui-visually-hidden">
              {name}
            </span>
          ))}
        {!!marks?.length && orientation === 'horizontal' && (
          <div className="ui-slider-marks" aria-hidden="true">
            {marks
              .filter((mark) => mark.value >= min && mark.value <= max)
              .map((mark) => (
                <Text
                  as="span"
                  variant="caption"
                  key={mark.value}
                  style={{
                    insetInlineStart: ((mark.value - min) / Math.max(1, max - min)) * 100 + '%',
                  }}
                >
                  {mark.label ?? format(mark.value)}
                </Text>
              ))}
          </div>
        )}
      </div>
    )
  },
)

export const Slider = /* @__PURE__ */ forwardRef<HTMLSpanElement, SliderProps>(function Slider(
  { value, defaultValue, onValueChange, onValueCommit, ...props },
  ref,
) {
  const [current, set] = useControllableState(value, defaultValue ?? props.min ?? 0, onValueChange)
  return (
    <SliderControl
      {...props}
      ref={ref}
      values={[current]}
      onValuesChange={(values) => set(values[0])}
      onValuesCommit={(values) => onValueCommit?.(values[0])}
    />
  )
})
export const RangeSlider = /* @__PURE__ */ forwardRef<HTMLSpanElement, RangeSliderProps>(
  function RangeSlider(
    { value, defaultValue, onValueChange, onValueCommit, thumbLabels, ...props },
    ref,
  ) {
    const { t } = useI18n()
    const [current, set] = useControllableState<[number, number]>(
      value,
      defaultValue ?? [props.min ?? 0, props.max ?? 100],
      onValueChange,
    )
    return (
      <SliderControl
        {...props}
        ref={ref}
        preserveThumbOrder
        values={current}
        thumbLabels={thumbLabels ?? [t('Minimum value'), t('Maximum value')]}
        onValuesChange={(values) => set([values[0], values[1]])}
        onValuesCommit={(values) => onValueCommit?.([values[0], values[1]])}
      />
    )
  },
)
