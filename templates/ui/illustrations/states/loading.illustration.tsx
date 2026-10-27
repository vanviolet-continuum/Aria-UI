import { useI18n } from '../../../i18n/use.i18n'
import { illustrationStyle, type IllustrationProps } from '../shared/illustration.frame'

export function LoadingIllustration({
  size = 100,
  label = 'Loading',
  title,
  tone,
  style,
  className = '',
}: IllustrationProps & {
  label?: string
}) {
  const { text: localize } = useI18n()
  const accessibleTitle = title ?? label

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={`loading-illustration ${className}`}
      role={accessibleTitle ? 'img' : undefined}
      aria-label={localize(accessibleTitle || undefined)}
      aria-hidden={accessibleTitle ? undefined : true}
      focusable="false"
      style={illustrationStyle({ size, tone, style })}
    >
      {accessibleTitle && <title>{localize(accessibleTitle)}</title>}
      <circle cx="60" cy="60" r="46" fill="var(--illustration-wash)" />
      <circle
        className="loader-orbit"
        cx="60"
        cy="60"
        r="42"
        fill="none"
        stroke="var(--illustration-line)"
        strokeWidth="1.5"
        strokeDasharray="3 8"
      />
      <g className="loader-float">
        <path
          d="m60 32 27 16-27 16-27-16 27-16Z"
          fill="var(--illustration-tint)"
          stroke="var(--illustration-primary)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="m33 58 27 16 27-16m-54 10 27 16 27-16"
          fill="none"
          stroke="var(--illustration-primary)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M60 64v20" fill="none" stroke="var(--illustration-primary)" strokeWidth="1.5" />
      </g>
      <circle
        className="loader-dot loader-dot--one"
        cx="23"
        cy="37"
        r="4"
        fill="var(--illustration-accent)"
      />
      <circle
        className="loader-dot loader-dot--two"
        cx="100"
        cy="72"
        r="3"
        fill="var(--illustration-primary)"
      />
      <circle
        className="loader-dot loader-dot--three"
        cx="38"
        cy="100"
        r="2.5"
        fill="var(--illustration-accent)"
      />
    </svg>
  )
}
