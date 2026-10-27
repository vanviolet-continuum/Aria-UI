import { useSelector } from '@tanstack/react-form'
import { Button, type ButtonProps } from '../../ui/button/button'
import { useFormContext } from './form.context'

export function SubmitButton({ disabled, loading, ...props }: ButtonProps) {
  const form = useFormContext()
  const pending = useSelector(form.store, (state) => state.isSubmitting)
  const canSubmit = useSelector(form.store, (state) => state.canSubmit)
  return (
    <Button
      {...props}
      type="submit"
      disabled={disabled || !canSubmit || pending}
      loading={loading || pending}
    />
  )
}
