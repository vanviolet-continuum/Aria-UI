import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function DatabaseIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <path
        d="M73 53v76c0 11 24 20 54 20s54-9 54-20V53"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <ellipse
        cx="127"
        cy="53"
        rx="54"
        ry="20"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="M73 78c0 11 24 20 54 20s54-9 54-20m-108 25c0 11 24 20 54 20s54-9 54-20"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <ellipse cx="127" cy="53" rx="30" ry="9" stroke="var(--illustration-line)" strokeWidth="2" />
      <circle
        cx="185"
        cy="125"
        r="25"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="m175 125 7 7 13-15"
        stroke="var(--illustration-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IllustrationFrame>
  )
}
