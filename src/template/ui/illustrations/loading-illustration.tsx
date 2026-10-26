import { useI18n } from '../../i18n/use-i18n'
export function LoadingIllustration({
  size = 100,
  label = 'Loading',
}: {
  size?: number
  label?: string
}) {
  const { text: localize } = useI18n()

  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className="loading-illustration"
      role={label ? 'img' : undefined}
      aria-label={localize(label || undefined)}
      aria-hidden={label ? undefined : true}
    >
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
