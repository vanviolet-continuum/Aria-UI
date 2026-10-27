import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function NotificationsIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <g transform="rotate(-7 90 104)">
        <rect
          x="49"
          y="83"
          width="77"
          height="57"
          rx="9"
          fill="var(--illustration-surface)"
          stroke="var(--illustration-line)"
          strokeWidth="2"
        />
        <circle cx="65" cy="100" r="6" fill="var(--illustration-tint)" />
        <path
          d="M79 98h31M62 117h44M62 126h29"
          stroke="var(--illustration-line)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <path
        d="M115 118c8-8 10-20 10-36a30 30 0 0 1 60 0c0 16 2 28 10 36 3 3 1 8-4 8h-72c-5 0-7-5-4-8Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="M133 91V81a22 22 0 0 1 44 0v10c0 10 1 17 4 23h-52c3-6 4-13 4-23Z"
        fill="var(--illustration-tint)"
      />
      <path
        d="M145 136a11 11 0 0 0 20 0m-10-94v-7m-37 26-7-7m81 7 7-7"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="184" cy="51" r="16" fill="var(--illustration-accent)" />
      <path
        d="M184 44v14m-5-10 5-4"
        stroke="var(--illustration-surface)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IllustrationFrame>
  )
}
