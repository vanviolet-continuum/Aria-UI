import { forwardRef, type TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'

export const Textarea = /* @__PURE__ */ forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }
>(function Textarea({ className, invalid, rows = 4, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={clsx('ui-textarea', className)}
      data-typography="input"
      aria-invalid={invalid || undefined}
      {...props}
    />
  )
})
