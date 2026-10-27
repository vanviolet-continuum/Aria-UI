import { isApiCancellation } from '../../lib/api.error'

export class FormSubmissionError extends Error {
  constructor(cause: unknown) {
    super('Form submission failed.', { cause })
    this.name = 'FormSubmissionError'
  }
}

/** A native submit boundary: known failures remain in the form, unexpected failures are reported. */
export async function submitAriaForm(
  form: { handleSubmit: () => Promise<void>; state?: { isSubmitSuccessful: boolean } },
  element: HTMLFormElement,
  onUnexpectedError: (error: unknown) => void = (error) => console.error(error),
): Promise<boolean> {
  try {
    await form.handleSubmit()
    return form.state?.isSubmitSuccessful ?? true
  } catch (error) {
    if (!(error instanceof FormSubmissionError) && !isApiCancellation(error))
      onUnexpectedError(error)
    return false
  } finally {
    requestAnimationFrame(() => {
      if (element.isConnected)
        element.querySelector<HTMLElement>('[aria-invalid="true"]:not(:disabled)')?.focus()
    })
  }
}
