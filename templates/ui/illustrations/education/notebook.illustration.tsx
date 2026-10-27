import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function NotebookIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <g transform="rotate(-7 128 91)">
        <rect
          x="79"
          y="32"
          width="101"
          height="119"
          rx="10"
          fill="var(--illustration-tint)"
          stroke="var(--illustration-primary)"
          strokeWidth="2"
        />
        <rect x="93" y="40" width="78" height="102" rx="5" fill="var(--illustration-surface)" />
        {[50, 69, 88, 107, 126].map((y) => (
          <path
            key={y}
            d={`M73 ${y}h14`}
            stroke="var(--illustration-primary)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
        <rect x="107" y="57" width="48" height="19" rx="4" fill="var(--illustration-tint)" />
        <path
          d="M107 92h47m-47 13h34m-34 13h42"
          stroke="var(--illustration-line)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <g transform="rotate(24 186 100)">
        <path
          d="M180 62h12v70l-6 14-6-14V62Z"
          fill="var(--illustration-tint)"
          stroke="var(--illustration-primary)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M180 73h12m-12 59h12m-6-59v59" stroke="var(--illustration-line)" strokeWidth="2" />
      </g>
    </IllustrationFrame>
  )
}
