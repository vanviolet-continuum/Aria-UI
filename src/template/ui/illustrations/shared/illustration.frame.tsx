import { useI18n } from '../../../i18n/use.i18n'
import type { CSSProperties, ReactNode } from 'react'

export type IllustrationTone =
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'violet'
  | 'mint'

export interface IllustrationProps {
  className?: string
  title?: string
  size?: CSSProperties['width']
  tone?: IllustrationTone
  style?: CSSProperties
}
export function illustrationStyle({ size, tone, style }: IllustrationProps): CSSProperties {
  return {
    ...(tone
      ? {
          '--illustration-primary': `color-mix(in srgb, var(--${tone}) 75%, var(--text-secondary))`,
          '--illustration-accent': `color-mix(in srgb, var(--${tone}) 65%, var(--surface))`,
          '--illustration-line': `color-mix(in srgb, var(--${tone}) 22%, var(--border))`,
          '--illustration-tint': `color-mix(in srgb, var(--${tone}) 9%, var(--surface))`,
        }
      : {}),
    width: size,
    ...style,
  } as CSSProperties
}
export function IllustrationFrame({
  children,
  className = '',
  title,
  size,
  tone,
  style,
}: IllustrationProps & { children: ReactNode }) {
  const { text: localize } = useI18n()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 180"
      fill="none"
      className={`ui-illustration ${className}`}
      role={title ? 'img' : undefined}
      aria-label={localize(title)}
      aria-hidden={title ? undefined : true}
      focusable="false"
      style={illustrationStyle({ size, tone, style })}
    >
      {title && <title>{localize(title)}</title>}
      <ellipse cx="130" cy="158" rx="86" ry="10" fill="var(--illustration-wash)" />
      <circle cx="132" cy="84" r="67" fill="var(--illustration-wash)" opacity=".7" />
      {children}
      <path
        d="M36 71v8m-4-4h8M221 99v8m-4-4h8"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="210" cy="43" r="3" fill="var(--illustration-accent)" opacity=".6" />
      <circle cx="48" cy="128" r="2" fill="var(--illustration-primary)" opacity=".4" />
    </svg>
  )
}
