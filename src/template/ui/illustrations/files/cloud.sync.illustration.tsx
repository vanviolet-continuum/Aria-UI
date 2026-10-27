import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function CloudSyncIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <path
        d="M80 107h103a25 25 0 0 0-1-50 39 39 0 0 0-74-9 30 30 0 0 0-28 59Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <circle
        cx="132"
        cy="105"
        r="38"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <circle cx="132" cy="105" r="29" fill="var(--illustration-tint)" />
      <path
        d="M115 97a20 20 0 0 1 34-5m0-9v10h-10m10 21a20 20 0 0 1-34 5m0 9v-10h10"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M82 134v10m-5-5h10m105-109v8m-4-4h8"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
