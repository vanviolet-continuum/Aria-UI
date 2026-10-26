import { IllustrationFrame, type IllustrationProps } from './frame'

export function DeliveryIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="65"
        y="59"
        width="96"
        height="75"
        rx="8"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="M161 83h28l23 27v24h-51V83Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M172 91h13l15 19h-28V91Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <rect
        x="88"
        y="76"
        width="47"
        height="40"
        rx="4"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M108 77v16h10V77"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle
        cx="90"
        cy="136"
        r="12"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <circle
        cx="185"
        cy="136"
        r="12"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <circle cx="90" cy="136" r="4" fill="var(--illustration-line)" />
      <circle cx="185" cy="136" r="4" fill="var(--illustration-line)" />
      <path
        d="M41 83h15m-25 15h25m-12 15h12"
        stroke="var(--illustration-accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
