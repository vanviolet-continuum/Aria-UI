import { useId, type ReactNode } from 'react'
import { useI18n } from '../../../i18n/use-i18n'
import { illustrationStyle, type IllustrationProps } from '../frame'

interface DecorationIds {
  primary: string
  accent: string
  glow: string
  clip: string
}

/** Transparent artwork for backgrounds; scoped IDs keep repeated instances independent. */
export function DecorationFrame({
  children,
  size,
  title,
  tone,
  style,
  className = '',
}: IllustrationProps & { children: ReactNode | ((ids: DecorationIds) => ReactNode) }) {
  const { text: localize } = useI18n()
  const seed = `decoration-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
  const ids = {
    primary: `${seed}-primary`,
    accent: `${seed}-accent`,
    glow: `${seed}-glow`,
    clip: `${seed}-clip`,
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 280"
      fill="none"
      className={`ui-illustration ui-decoration ${className}`}
      role={title ? 'img' : undefined}
      aria-label={localize(title)}
      aria-hidden={title ? undefined : true}
      focusable="false"
      style={illustrationStyle({ size, tone, style })}
    >
      {title && <title>{localize(title)}</title>}
      <defs>
        <linearGradient id={ids.primary} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="var(--illustration-primary)" stopOpacity=".9" />
          <stop offset=".55" stopColor="var(--illustration-accent)" stopOpacity=".55" />
          <stop offset="1" stopColor="var(--illustration-primary)" stopOpacity=".2" />
        </linearGradient>
        <linearGradient id={ids.accent} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop stopColor="var(--illustration-accent)" stopOpacity=".7" />
          <stop offset="1" stopColor="var(--illustration-primary)" stopOpacity=".1" />
        </linearGradient>
        <radialGradient id={ids.glow}>
          <stop stopColor="var(--illustration-primary)" stopOpacity=".35" />
          <stop offset=".65" stopColor="var(--illustration-accent)" stopOpacity=".14" />
          <stop offset="1" stopColor="var(--illustration-primary)" stopOpacity="0" />
        </radialGradient>
        <clipPath id={ids.clip}>
          <rect width="400" height="280" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${ids.clip})`}>
        {typeof children === 'function' ? children(ids) : children}
      </g>
    </svg>
  )
}
