import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import clsx from 'clsx'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { Spinner } from '../loading.overlay/loading.overlay'
import { resolveButtonStyle, type ButtonVariant, type SemanticColor } from './button.types'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  color?: SemanticColor
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'icon' | 'default'
  loading?: boolean
  loadingText?: string
  fullWidth?: boolean
}
export const Button = /* @__PURE__ */ forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant = 'secondary',
    color,
    size = 'default',
    type = 'button',
    loading,
    loadingText,
    fullWidth,
    children,
    disabled,
    style: customStyle,
    ...props
  },
  ref,
) {
  const { t: tr } = useI18n()

  const style = resolveButtonStyle(variant, color)
  const explicitFont =
    size === 'xs'
      ? 'calc(var(--typography-button-size) * 0.833333)'
      : size === 'sm'
        ? 'calc(var(--typography-button-size) * 0.916667)'
        : size === 'md'
          ? 'var(--typography-button-size)'
          : size === 'lg'
            ? 'calc(var(--typography-button-size) * 1.083333)'
            : undefined
  return (
    <Text
      as="button"
      variant="button"
      tone="inherit"
      ref={ref}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      data-variant={style.variant}
      data-color={style.color}
      className={clsx(
        'button',
        `button--${variant}`,
        `button--${size}`,
        fullWidth && 'button--full',
        className,
      )}
      {...props}
      style={{ ...(explicitFont ? { fontSize: explicitFont } : {}), ...customStyle }}
    >
      {loading && <Spinner size={15} label={tr('')} />}
      {loading && loadingText ? loadingText : children}
    </Text>
  )
})
