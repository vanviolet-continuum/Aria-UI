import { NumericFormat, PatternFormat, type NumberFormatValues } from 'react-number-format'
import { Input, type InputProps } from '../input/input'

export interface NumericInputProps extends Omit<
  InputProps,
  'type' | 'value' | 'defaultValue' | 'onChange'
> {
  value?: string | number
  onChange?: (value: string) => void
  onValueChange?: (values: NumberFormatValues) => void
  prefix?: string
  suffix?: string
  decimalScale?: number
  fixedDecimalScale?: boolean
  thousandSeparator?: string | boolean
  decimalSeparator?: string
  allowNegative?: boolean
  maximum?: number
  minimum?: number
}
export function NumericInput({
  value,
  onChange,
  onValueChange,
  decimalScale = 2,
  thousandSeparator = ',',
  decimalSeparator = '.',
  allowNegative = false,
  maximum,
  minimum,
  ...props
}: NumericInputProps) {
  return (
    <NumericFormat
      {...props}
      customInput={Input}
      value={value}
      valueIsNumericString={typeof value === 'string'}
      decimalScale={decimalScale}
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      allowNegative={allowNegative}
      inputMode={decimalScale ? 'decimal' : 'numeric'}
      isAllowed={({ floatValue }) =>
        floatValue === undefined ||
        ((maximum === undefined || floatValue <= maximum) &&
          (minimum === undefined || floatValue >= minimum))
      }
      onValueChange={(values) => {
        onChange?.(values.value)
        onValueChange?.(values)
      }}
    />
  )
}
export interface CurrencyInputProps extends NumericInputProps {
  currency?: 'IDR' | 'USD' | 'EUR'
}
export function CurrencyInput({ currency = 'IDR', ...props }: CurrencyInputProps) {
  const defaults =
    currency === 'IDR'
      ? { prefix: 'Rp ', thousandSeparator: '.', decimalSeparator: ',', decimalScale: 0 }
      : {
          prefix: currency === 'USD' ? '$ ' : '€ ',
          thousandSeparator: ',',
          decimalSeparator: '.',
          decimalScale: 2,
          fixedDecimalScale: true,
        }
  return <NumericInput {...defaults} {...props} />
}
export interface PatternInputProps extends Omit<
  InputProps,
  'type' | 'value' | 'defaultValue' | 'onChange'
> {
  value?: string
  onChange?: (value: string) => void
  format: string
  mask?: string
}
export function PatternInput({ value, onChange, mask = '_', ...props }: PatternInputProps) {
  return (
    <PatternFormat
      {...props}
      customInput={Input}
      value={value}
      valueIsNumericString
      mask={mask}
      inputMode="numeric"
      onValueChange={(values) => onChange?.(values.value)}
    />
  )
}
export function PhoneInput({
  format = '+62 ###-####-#####',
  ...props
}: Omit<PatternInputProps, 'format'> & { format?: string }) {
  return <PatternInput {...props} format={format} autoComplete="tel-national" />
}
export function PercentageInput(props: NumericInputProps) {
  return <NumericInput suffix=" %" maximum={100} {...props} />
}
