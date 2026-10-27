import { useI18n } from '../../i18n/use.i18n'
import { forwardRef } from 'react'
import clsx from 'clsx'
import { Button, type ButtonProps } from '../button/button'

export interface IconButtonProps extends Omit<ButtonProps, 'size'> {
  label: string
  size?: 'sm' | 'md' | 'lg' | 'default'
  shape?: 'rounded' | 'circle'
}
export const IconButton = /* @__PURE__ */ forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    { label, size = 'default', shape = 'rounded', className, title, ...props },
    ref,
  ) {
    const { text: localize } = useI18n()

    return (
      <Button
        ref={ref}
        {...props}
        size="icon"
        aria-label={localize(label)}
        title={localize(title ?? label)}
        data-icon-size={size}
        data-shape={shape}
        className={clsx('ui-icon-button', className)}
      />
    )
  },
)
