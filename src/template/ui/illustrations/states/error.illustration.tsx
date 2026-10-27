import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function ErrorIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props} tone={props.tone ?? 'error'}>
      <g transform="rotate(-6 116 89)">
        <rect
          x="64"
          y="37"
          width="112"
          height="104"
          rx="10"
          fill="var(--illustration-surface)"
          stroke="var(--illustration-line)"
          strokeWidth="2"
        />
        <path d="M64 61h112" stroke="var(--illustration-line)" strokeWidth="2" />
        <circle cx="77" cy="49" r="3" fill="var(--illustration-primary)" opacity=".5" />
        <circle cx="87" cy="49" r="3" fill="var(--illustration-line)" />
        <path
          d="M81 79h45M81 91h32M81 103h24"
          stroke="var(--illustration-line)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      <path
        d="m158 74 39 65c3 5 0 11-6 11h-78c-6 0-9-6-6-11l39-65c3-5 9-5 12 0Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="m152 87 28 48h-56l28-48Z" fill="var(--illustration-tint)" />
      <path
        d="M152 103v15"
        stroke="var(--illustration-primary)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="152" cy="129" r="2.5" fill="var(--illustration-primary)" />
      <path
        d="m195 54-5 7m-6-19-1 8M60 126l-7 3"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
