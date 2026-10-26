import { useI18n } from '../../i18n/use-i18n'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

export interface InputOTPProps {
  value: string
  onChange: (value: string) => void
  length?: number
  onComplete?: (value: string) => void
  disabled?: boolean
  invalid?: boolean
  mask?: boolean
  id?: string
  name?: string
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-invalid'?: boolean
}
export function InputOTP({
  value,
  onChange,
  length = 6,
  onComplete,
  disabled,
  invalid,
  mask,
  id,
  name,
  'aria-label': label = 'Verification code',
  'aria-describedby': describedBy,
  'aria-invalid': ariaInvalid,
}: InputOTPProps) {
  const { text: localize } = useI18n()

  const input = useRef<HTMLInputElement>(null)
  const completed = useRef('')
  const [active, setActive] = useState(0)
  const size = Math.min(12, Math.max(1, length))
  useEffect(() => {
    if (value.length === size && completed.current !== value) {
      completed.current = value
      onComplete?.(value)
    }
    if (value.length < size) completed.current = ''
  }, [value, size, onComplete])
  const update = (next: string) => {
    const clean = next.replace(/\D/g, '').slice(0, size)
    onChange(clean)
    setActive(Math.min(clean.length, size - 1))
  }
  return (
    <div
      className={clsx(
        'input-otp',
        (invalid || ariaInvalid) && 'input-otp--invalid',
        disabled && 'input-otp--disabled',
      )}
    >
      <input
        ref={input}
        id={id}
        name={name}
        className="input-otp-native"
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        aria-label={localize(label)}
        aria-describedby={describedBy}
        aria-invalid={invalid || ariaInvalid || undefined}
        disabled={disabled}
        value={value}
        maxLength={size}
        pattern={`[0-9]{${size}}`}
        onChange={(event) => update(event.target.value)}
        onSelect={(event) => setActive(Math.min(event.currentTarget.selectionStart ?? 0, size - 1))}
        onPaste={(event) => {
          event.preventDefault()
          update(event.clipboardData.getData('text'))
        }}
      />
      {Array.from({ length: size }, (_, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={clsx(
            'otp-cell',
            index === active && 'otp-cell--active',
            index === Math.floor(size / 2) && 'otp-cell--separated',
          )}
          onClick={() => {
            if (disabled) return
            input.current?.focus()
            input.current?.setSelectionRange(index, index)
            setActive(index)
          }}
        >
          {value[index] ? mask ? '•' : value[index] : <i />}
        </span>
      ))}
    </div>
  )
}
