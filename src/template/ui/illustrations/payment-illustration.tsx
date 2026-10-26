import { IllustrationFrame, type IllustrationProps } from './frame'

export function PaymentIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <g transform="rotate(-8 125 98)">
        <rect
          x="53"
          y="52"
          width="145"
          height="93"
          rx="12"
          fill="var(--illustration-surface)"
          stroke="var(--illustration-line)"
          strokeWidth="2"
        />
        <path d="M53 73h145v19H53Z" fill="var(--illustration-tint)" />
        <rect
          x="71"
          y="105"
          width="23"
          height="18"
          rx="4"
          fill="var(--illustration-tint)"
          stroke="var(--illustration-primary)"
          strokeWidth="1.5"
        />
        <path
          d="M71 114h23m-15-9v18M110 116h27m-27 12h39"
          stroke="var(--illustration-line)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <circle
        cx="183"
        cy="126"
        r="25"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <circle cx="183" cy="126" r="18" fill="var(--illustration-tint)" />
      <path
        d="m173 126 7 7 13-15"
        stroke="var(--illustration-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m93 33 3 7m69-9-4 7"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
