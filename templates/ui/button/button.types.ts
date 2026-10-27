export type SemanticColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
export type ButtonVariant =
  | 'contained'
  | 'outlined'
  | 'soft'
  | 'text'
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger'
  | 'outline'
  | 'link'

export function resolveButtonStyle(variant: ButtonVariant, color?: SemanticColor) {
  const legacy: Partial<Record<ButtonVariant, { variant: string; color: SemanticColor }>> = {
    primary: { variant: 'contained', color: 'primary' },
    secondary: { variant: 'outlined', color: 'secondary' },
    ghost: { variant: 'text', color: 'secondary' },
    danger: { variant: 'contained', color: 'error' },
    outline: { variant: 'outlined', color: 'primary' },
    link: { variant: 'text', color: 'primary' },
  }
  const resolved = legacy[variant]
  return { variant: resolved?.variant ?? variant, color: color ?? resolved?.color ?? 'primary' }
}
