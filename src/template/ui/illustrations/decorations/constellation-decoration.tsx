import type { IllustrationProps } from '../frame'
import { DecorationFrame } from './decoration-frame'

export function ConstellationDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ glow }) => (
        <>
          <ellipse cx="205" cy="144" rx="190" ry="135" fill={`url(#${glow})`} />
          <path
            d="m51 156 56-91 83 36 61-65 90 75-35 102-89 29-70-61-96-25Zm56-91 40 116 43-80 116 112-55-177M51 156l139-55 151 10-124 131m-70-61 159 32"
            stroke="var(--illustration-primary)"
            strokeOpacity=".26"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {[
            { x: 51, y: 156, r: 5 },
            { x: 107, y: 65, r: 7 },
            { x: 190, y: 101, r: 10 },
            { x: 251, y: 36, r: 4 },
            { x: 341, y: 111, r: 7 },
            { x: 306, y: 213, r: 6 },
            { x: 217, y: 242, r: 4 },
            { x: 147, y: 181, r: 6 },
          ].map(({ x, y, r }, index) => (
            <g key={x}>
              <circle cx={x} cy={y} r={r + 7} fill="var(--illustration-primary)" opacity=".07" />
              <circle
                cx={x}
                cy={y}
                r={r}
                fill={
                  index % 3 === 0 ? 'var(--illustration-accent)' : 'var(--illustration-primary)'
                }
                opacity=".65"
              />
            </g>
          ))}
          <circle cx="65" cy="36" r="2" fill="var(--illustration-accent)" />
          <circle cx="365" cy="243" r="3" fill="var(--illustration-primary)" opacity=".3" />
        </>
      )}
    </DecorationFrame>
  )
}
