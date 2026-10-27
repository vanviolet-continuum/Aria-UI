import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function SearchIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="53"
        y="49"
        width="123"
        height="94"
        rx="9"
        transform="rotate(-6 53 49)"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="m72 65 72-8M74 79l42-5m-40 20 66-7m-64 23 45-5"
        stroke="var(--illustration-line)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle
        cx="158"
        cy="91"
        r="34"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="5"
      />
      <circle cx="158" cy="91" r="25" fill="var(--illustration-tint)" />
      <path
        d="m183 116 24 24"
        stroke="var(--illustration-primary)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="m151 84 14 14m0-14-14 14"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M185 44v9m-4-4h8"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
