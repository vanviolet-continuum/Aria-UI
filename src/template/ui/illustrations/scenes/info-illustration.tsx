import { IllustrationFrame, type IllustrationProps } from '../frame'

export function InfoIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="60"
        y="34"
        width="144"
        height="104"
        rx="12"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        transform="rotate(5 132 86)"
      />
      <path
        d="M61 42h128a10 10 0 0 1 10 10v76a10 10 0 0 1-10 10h-78l-23 17v-17H61a10 10 0 0 1-10-10V52a10 10 0 0 1 10-10Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="89" cy="85" r="23" fill="var(--illustration-tint)" />
      <circle cx="89" cy="74" r="2.5" fill="var(--illustration-primary)" />
      <path
        d="M86 84h4v16m-7 0h14"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M126 73h52m-52 12h43m-43 12h30M69 119h57"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle
        cx="191"
        cy="43"
        r="13"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="m186 43 3 3 6-6"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IllustrationFrame>
  )
}
