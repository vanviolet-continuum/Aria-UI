import { IllustrationFrame, type IllustrationProps } from '../shared/illustration.frame'

export function ServerIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <path
        d="M130 35v110m-48 6h96"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[43, 80, 117].map((y) => (
        <g key={y}>
          <rect
            x="68"
            y={y}
            width="124"
            height="28"
            rx="7"
            fill="var(--illustration-surface)"
            stroke="var(--illustration-primary)"
            strokeWidth="2"
          />
          <circle cx="83" cy={y + 14} r="4" fill="var(--illustration-accent)" />
          <path
            d={`M98 ${y + 14}h39m26-4h14m-14 8h14`}
            stroke="var(--illustration-line)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      ))}
      <path
        d="M59 61H47v64h12m142-64h12v64h-12"
        stroke="var(--illustration-line)"
        strokeWidth="2"
        strokeDasharray="3 5"
        strokeLinecap="round"
      />
    </IllustrationFrame>
  )
}
