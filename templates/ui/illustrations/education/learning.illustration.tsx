import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function LearningIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="54"
        y="37"
        width="149"
        height="103"
        rx="11"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <rect x="65" y="48" width="127" height="69" rx="5" fill="var(--illustration-tint)" />
      <circle
        cx="126"
        cy="81"
        r="21"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path d="m121 70 17 11-17 11V70Z" fill="var(--illustration-primary)" opacity=".7" />
      <path
        d="M73 128h75m16 0h17"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M145 112c12-3 22-1 31 5 10-6 21-8 32-5v35c-12-2-22 0-32 6-9-6-20-8-31-6v-35Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M176 117v36m-23-29 15 2m-15 9 15 2m16-11 16-2m-16 13 16-2"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
