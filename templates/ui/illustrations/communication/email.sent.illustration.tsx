import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function EmailSentIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="53"
        y="77"
        width="124"
        height="71"
        rx="10"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="m56 82 54 38a9 9 0 0 0 10 0l54-38M56 142l38-30m80 30-38-30"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m136 59 69-22-24 69-15-29-30-18Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m166 77 39-40"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M130 57c-26-26-55-7-40 10m-7-10c-20 0-36 15-28 29"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeDasharray="3 5"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
