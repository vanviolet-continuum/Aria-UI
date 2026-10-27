import { useEffect, useRef, type InputHTMLAttributes } from 'react'
import clsx from 'clsx'

export function Checkbox({
  indeterminate,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { indeterminate?: boolean }) {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate
  }, [indeterminate])
  return <input ref={ref} type="checkbox" className={clsx('checkbox', className)} {...props} />
}
