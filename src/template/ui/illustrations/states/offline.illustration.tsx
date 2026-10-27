import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function OfflineIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props} tone={props.tone ?? 'info'}>
      <path
        d="M84 98h91a24 24 0 0 0 1-48 38 38 0 0 0-71-4 27 27 0 0 0-21 52Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M104 69c15-12 36-12 51 0m-42 11c10-7 23-7 33 0"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="130" cy="90" r="3" fill="var(--illustration-primary)" />
      <path
        d="M55 145h32c12 0 19-8 19-20m48 0c0 12 7 20 19 20h31"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g transform="rotate(-12 105 119)">
        <path
          d="M90 110h25v15c0 7-5 12-12 12s-13-5-13-12v-15Z"
          fill="var(--illustration-tint)"
          stroke="var(--illustration-primary)"
          strokeWidth="2"
        />
        <path
          d="M96 110V99m13 11V99"
          stroke="var(--illustration-primary)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <g transform="rotate(12 155 119)">
        <path
          d="M142 110h25v15c0 7-5 12-12 12s-13-5-13-12v-15Z"
          fill="var(--illustration-surface)"
          stroke="var(--illustration-line)"
          strokeWidth="2"
        />
        <path
          d="M149 117v7m11-7v7"
          stroke="var(--illustration-line)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <path
        d="m124 116 4-6m4 7 4-6"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
