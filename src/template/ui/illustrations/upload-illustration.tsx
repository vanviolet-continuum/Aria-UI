import { IllustrationFrame, type IllustrationProps } from './frame'

export function UploadIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="66"
        y="34"
        width="128"
        height="116"
        rx="15"
        stroke="var(--illustration-line)"
        strokeDasharray="5 6"
        strokeWidth="2"
      />
      <g transform="rotate(-10 84 100)">
        <rect
          x="48"
          y="74"
          width="56"
          height="62"
          rx="8"
          fill="var(--illustration-surface)"
          stroke="var(--illustration-line)"
          strokeWidth="2"
        />
        <rect x="57" y="85" width="38" height="27" rx="4" fill="var(--illustration-tint)" />
        <path
          d="m59 108 10-10 8 6 6-6 10 10m-31 15h28"
          stroke="var(--illustration-primary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <path
        d="M109 110h56a19 19 0 0 0 1-38 28 28 0 0 0-53-3 21 21 0 0 0-4 41Z"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="M138 128V88m-12 12 12-12 12 12"
        stroke="var(--illustration-primary)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="192" cy="131" r="14" fill="var(--illustration-accent)" opacity=".25" />
      <path
        d="m186 131 4 4 8-9"
        stroke="var(--illustration-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IllustrationFrame>
  )
}
