import { IllustrationFrame, type IllustrationProps } from './frame'

export function TasksIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="77"
        y="39"
        width="107"
        height="110"
        rx="11"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <rect
        x="108"
        y="29"
        width="46"
        height="21"
        rx="7"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d="M121 39h20"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[65, 91, 117].map((y, index) => (
        <g key={y}>
          <rect
            x="94"
            y={y}
            width="15"
            height="15"
            rx="4"
            fill={index < 2 ? 'var(--illustration-tint)' : 'var(--illustration-surface)'}
            stroke="var(--illustration-line)"
            strokeWidth="2"
          />
          {index < 2 && (
            <path
              d={`m98 ${y + 7} 3 3 5-6`}
              stroke="var(--illustration-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <path
            d={`M121 ${y + 7}h43`}
            stroke="var(--illustration-line)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      ))}
      <circle cx="62" cy="105" r="9" fill="var(--illustration-accent)" opacity=".25" />
    </IllustrationFrame>
  )
}
