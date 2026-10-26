import type { IllustrationProps } from '../frame'
import { DecorationFrame } from './decoration-frame'

export function BubblesDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent, glow }) => (
        <>
          <ellipse cx="198" cy="140" rx="191" ry="140" fill={`url(#${glow})`} />
          {[
            { x: 77, y: 75, r: 35 },
            { x: 129, y: 201, r: 46 },
            { x: 222, y: 125, r: 72 },
            { x: 325, y: 65, r: 31 },
            { x: 333, y: 219, r: 25 },
            { x: 51, y: 213, r: 13 },
            { x: 187, y: 37, r: 14 },
          ].map(({ x, y, r }, index) => (
            <g key={x}>
              <circle
                cx={x}
                cy={y}
                r={r}
                fill={`url(#${index % 2 ? accent : primary})`}
                fillOpacity=".28"
                stroke="var(--illustration-primary)"
                strokeOpacity=".22"
                strokeWidth="1.5"
              />
              <path
                d={`M${x - r * 0.57} ${y - r * 0.42}a${r * 0.7} ${r * 0.7} 0 0 1 ${r * 0.7} ${-r * 0.25}`}
                stroke="var(--illustration-surface)"
                strokeOpacity=".7"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          ))}
        </>
      )}
    </DecorationFrame>
  )
}
