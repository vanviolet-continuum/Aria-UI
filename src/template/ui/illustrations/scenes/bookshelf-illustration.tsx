import { IllustrationFrame, type IllustrationProps } from '../frame'

export function BookshelfIllustration(props: IllustrationProps) {
  return (
    <IllustrationFrame {...props}>
      <rect
        x="57"
        y="38"
        width="147"
        height="110"
        rx="7"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M57 99h147m-134 49v7m119-7v7"
        stroke="var(--illustration-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[
        { x: 70, h: 45 },
        { x: 87, h: 39 },
        { x: 104, h: 49 },
      ].map(({ x, h }, index) => (
        <g key={x}>
          <rect
            x={x}
            y={99 - h}
            width="13"
            height={h}
            rx="3"
            fill={index === 1 ? 'var(--illustration-primary)' : 'var(--illustration-tint)'}
            fillOpacity={index === 1 ? '.35' : '1'}
            stroke="var(--illustration-line)"
            strokeWidth="1.5"
          />
          <path
            d={`M${x + 4} ${99 - h + 8}h5m-5 ${h - 17}h5`}
            stroke="var(--illustration-line)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      ))}
      <rect
        x="129"
        y="62"
        width="14"
        height="37"
        rx="3"
        transform="rotate(-15 129 62)"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="1.5"
      />
      <rect
        x="76"
        y="115"
        width="61"
        height="13"
        rx="3"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="1.5"
      />
      <rect
        x="83"
        y="129"
        width="61"
        height="12"
        rx="3"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="1.5"
      />
      <path
        d="M166 82h21l-3 15h-15l-3-15Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-line)"
        strokeWidth="1.5"
      />
      <path
        d="M177 81V60m0 15c-10-1-14-7-13-15 9 1 13 6 13 15Zm0-6c0-9 5-14 13-15 0 8-5 14-13 15Z"
        fill="var(--illustration-tint)"
        stroke="var(--illustration-accent)"
        strokeWidth="1.5"
      />
    </IllustrationFrame>
  )
}
