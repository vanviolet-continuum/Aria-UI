import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function InvoiceIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <path
        d="M80 35h92a8 8 0 0 1 8 8v107l-12-7-12 7-12-7-12 7-12-7-12 7-12-7-12 7-12-7V43a8 8 0 0 1 8-8Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="91"
        y="52"
        width="45"
        height="8"
        rx="4"
        fill="var(--illustration-primary)"
        opacity=".2"
      />
      <path
        d="M91 77h49m12 0h12M91 91h39m22 0h12M91 106h73"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M91 122h31"
        stroke="var(--illustration-primary)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle
        cx="181"
        cy="126"
        r="25"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="M181 112v28m8-22h-12a5 5 0 0 0 0 10h8a5 5 0 0 1 0 10h-12"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
