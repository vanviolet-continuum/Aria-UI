import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import { Check, Circle, Eye, EyeOff } from 'lucide-react'
import { forwardRef, useId, useState } from 'react'
import { Input, type InputProps } from '../input/input'
import { IconButton } from '../icon.button/icon.button'
import {
  defaultPasswordRequirements,
  evaluatePassword,
  type PasswordRequirement,
} from './password.strength'

export interface PasswordInputProps extends Omit<
  InputProps,
  'type' | 'trailing' | 'value' | 'defaultValue'
> {
  value?: string
  defaultValue?: string
  showStrength?: boolean
  showRequirements?: boolean
  requirements?: PasswordRequirement[]
}
export const PasswordInput = /* @__PURE__ */ forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(
    {
      value,
      defaultValue = '',
      onChange,
      showStrength = true,
      showRequirements = true,
      requirements = defaultPasswordRequirements,
      ...props
    },
    ref,
  ) {
    const { t: tr, text: localize } = useI18n()

    const [local, setLocal] = useState(defaultValue)
    const [visible, setVisible] = useState(false)
    const id = useId()
    const result = evaluatePassword(value ?? local, requirements)
    const description =
      [props['aria-describedby'], showStrength ? id : null].filter(Boolean).join(' ') || undefined
    return (
      <div className="password-input" data-strength={result.score}>
        <Input
          {...props}
          ref={ref}
          type={visible ? 'text' : 'password'}
          value={value ?? local}
          aria-describedby={description}
          onChange={(event) => {
            setLocal(event.target.value)
            onChange?.(event)
          }}
          trailing={
            <IconButton
              variant="text"
              size="sm"
              label={localize(visible ? 'Hide password' : 'Show password')}
              aria-pressed={visible}
              disabled={props.disabled}
              onClick={() => setVisible((previous) => !previous)}
            >
              {visible ? <EyeOff size={16} /> : <Eye size={16} />}
            </IconButton>
          }
        />
        {showStrength && (
          <div className="password-strength" id={id}>
            <div
              role="meter"
              aria-label={tr('Password strength')}
              aria-valuemin={0}
              aria-valuemax={4}
              aria-valuenow={result.score}
              aria-valuetext={result.label}
              className="password-strength-bars"
            >
              {[1, 2, 3, 4].map((step) => (
                <span key={step} data-filled={step <= result.score || undefined} />
              ))}
            </div>
            <Text as="small" variant="caption" aria-live="polite">
              {localize(result.label)}
            </Text>
          </div>
        )}
        {showRequirements && (
          <ul className="password-requirements">
            {result.checks.map((rule) => (
              <li key={rule.id} data-met={rule.met || undefined}>
                {rule.met ? <Check size={13} /> : <Circle size={11} />}
                <Text as="span" variant="label">
                  {localize(rule.label)}
                </Text>
                <Text as="span" variant="label" className="sr-only">
                  {rule.met ? tr('met') : tr('not met')}
                </Text>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  },
)
