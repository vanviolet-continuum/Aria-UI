import type { IllustrationProps } from '../frame'
import { DecorationFrame } from './decoration-frame'

export function GridDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, glow }) => (
        <>
          <ellipse cx="233" cy="135" rx="170" ry="138" fill={`url(#${glow})`} />
          <g transform="translate(12 6) skewY(-17)">
            {Array.from({ length: 11 }, (_, index) => (
              <path
                key={`v${index}`}
                d={`M${index * 40} -30v430`}
                stroke="var(--illustration-line)"
                strokeOpacity=".8"
              />
            ))}
            {Array.from({ length: 12 }, (_, index) => (
              <path
                key={`h${index}`}
                d={`M-20 ${index * 35}h450`}
                stroke="var(--illustration-line)"
                strokeOpacity=".8"
              />
            ))}
            <rect
              x="200"
              y="105"
              width="80"
              height="70"
              rx="5"
              fill={`url(#${primary})`}
              opacity=".65"
            />
            <rect
              x="80"
              y="175"
              width="40"
              height="35"
              rx="4"
              fill="var(--illustration-accent)"
              opacity=".2"
            />
          </g>
          <circle
            cx="296"
            cy="54"
            r="20"
            stroke="var(--illustration-primary)"
            strokeOpacity=".4"
            strokeWidth="1.5"
          />
        </>
      )}
    </DecorationFrame>
  )
}
