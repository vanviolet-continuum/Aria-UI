import { IllustrationFrame, type IllustrationProps } from './frame'

export function NotFoundIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <path
        d="M40 111c22-47 53-70 93-70 40 0 65 30 85 76"
        stroke="var(--illustration-line)"
        strokeDasharray="4 7"
        strokeWidth="2"
      />
      <text
        x="54"
        y="125"
        fontFamily="inherit"
        fontSize="67"
        fontWeight="600"
        fill="var(--illustration-primary)"
        opacity=".85"
      >
        4
      </text>
      <text
        x="164"
        y="125"
        fontFamily="inherit"
        fontSize="67"
        fontWeight="600"
        fill="var(--illustration-primary)"
        opacity=".85"
      >
        4
      </text>
      <g transform="rotate(12 132 95)">
        <rect
          x="108"
          y="60"
          width="49"
          height="73"
          rx="12"
          fill="var(--illustration-surface)"
          stroke="var(--illustration-line)"
          strokeWidth="2"
        />
        <rect x="116" y="72" width="33" height="40" rx="5" fill="var(--illustration-tint)" />
        <path
          d="m123 89 4 4m-4 0 4-4m9 0 4 4m-4 0 4-4m-11 10h6"
          stroke="var(--illustration-primary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="132" cy="122" r="3" fill="var(--illustration-primary)" opacity=".45" />
      </g>
      <path
        d="m61 33 5 8m-16-1 9 2m134-8-6 6"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
