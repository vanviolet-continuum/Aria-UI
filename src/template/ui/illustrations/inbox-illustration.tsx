import { IllustrationFrame, type IllustrationProps } from './frame'

export function InboxIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="84"
        y="38"
        width="91"
        height="65"
        rx="8"
        transform="rotate(-7 84 38)"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="m87 49 43 22 42-31"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m68 106 16-25h91l17 25v35a9 9 0 0 1-9 9H77a9 9 0 0 1-9-9v-35Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M68 106h37l8 12h35l8-12h36v35a9 9 0 0 1-9 9H77a9 9 0 0 1-9-9v-35Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M113 135h34"
        stroke="var(--illustration-primary)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".35"
      />
      <circle cx="195" cy="66" r="14" fill="var(--illustration-accent)" />
      <path
        d="m189 66 4 4 8-9"
        stroke="var(--illustration-surface)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IllustrationFrame>
  )
}
