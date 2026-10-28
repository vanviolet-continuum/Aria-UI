import {
  defaultValidationLogic,
  type ValidationLogicFn,
  type ValidationLogicValidatorsFn,
} from '@tanstack/react-form'

/** Standard Schema rules remain reactive even when a caller registered them on blur/submit.
 * Custom callbacks keep their explicitly chosen event; API work is not moved to keystrokes.
 */
export const liveValidationLogic: ValidationLogicFn = (props) => {
  if (!props.validators || !['change', 'blur'].includes(props.event.type))
    return defaultValidationLogic(props)
  return defaultValidationLogic({
    ...props,
    runValidation: (current) => {
      const validators = [...current.validators]
      const rules = props.validators as Record<string, unknown>
      for (const cause of ['change', 'blur', 'submit'] as const) {
        if (validators.some((validator) => validator?.cause === cause && validator.fn)) continue
        const key =
          'on' + cause[0].toUpperCase() + cause.slice(1) + (props.event.async ? 'Async' : '')
        const rule = rules[key]
        if (rule && typeof rule === 'object' && '~standard' in rule)
          validators.push({ cause, fn: rule as ValidationLogicValidatorsFn['fn'] })
      }
      return props.runValidation({ ...current, validators })
    },
  })
}
