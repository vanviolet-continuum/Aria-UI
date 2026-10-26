import { IllustrationFrame, type IllustrationProps } from './frame'

export function TeamIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="49"
        y="60"
        width="65"
        height="81"
        rx="10"
        transform="rotate(-8 49 60)"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <circle
        cx="83"
        cy="87"
        r="13"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M64 123c1-13 8-20 19-20s18 7 19 20"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <rect
        x="149"
        y="52"
        width="65"
        height="81"
        rx="10"
        transform="rotate(8 149 52)"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <circle
        cx="177"
        cy="85"
        r="13"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M158 121c1-13 8-20 19-20s18 7 19 20"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <rect
        x="94"
        y="39"
        width="74"
        height="110"
        rx="12"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <circle
        cx="131"
        cy="76"
        r="17"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="M106 124c1-18 10-27 25-27s24 9 25 27"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M116 136h30"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="173" cy="45" r="13" fill="var(--illustration-accent)" />
      <path
        d="M173 39v12m-6-6h12"
        stroke="var(--illustration-surface)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
