import { forwardRef, type InputHTMLAttributes } from 'react'
import clsx from 'clsx'

export const Switch = forwardRef<
  HTMLInputElement,
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>
>(function Switch({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      type="checkbox"
      role="switch"
      className={clsx('switch', className)}
      {...props}
    />
  )
})
