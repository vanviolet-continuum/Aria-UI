import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function MessagesIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <path
        d="M110 83h76a12 12 0 0 1 12 12v34a12 12 0 0 1-12 12h-12v15l-20-15h-44a12 12 0 0 1-12-12V95a12 12 0 0 1 12-12Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M65 39h91a13 13 0 0 1 13 13v43a13 13 0 0 1-13 13h-50l-24 19v-19H65a13 13 0 0 1-13-13V52a13 13 0 0 1 13-13Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M72 60h58M72 72h77M72 84h45"
        stroke="var(--illustration-line)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="126" cy="120" r="3" fill="var(--illustration-primary)" />
      <circle cx="141" cy="120" r="3" fill="var(--illustration-primary)" opacity=".65" />
      <circle cx="156" cy="120" r="3" fill="var(--illustration-primary)" opacity=".35" />
      <path
        d="m190 57 8-3m-19-18 3-8"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
