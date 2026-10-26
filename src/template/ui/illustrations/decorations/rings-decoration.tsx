import type { IllustrationProps } from '../frame'
import { DecorationFrame } from './decoration-frame'

export function RingsDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent }) => (
        <>
          {[124, 100, 76, 52].map((radius, index) => (
            <circle
              key={radius}
              cx="145"
              cy="164"
              r={radius}
              stroke={index % 2 ? `url(#${accent})` : `url(#${primary})`}
              strokeWidth="15"
              opacity={0.25 + index * 0.12}
            />
          ))}
          <circle cx="145" cy="164" r="25" fill="var(--illustration-tint)" />
          <circle
            cx="303"
            cy="68"
            r="53"
            stroke="var(--illustration-primary)"
            strokeOpacity=".2"
            strokeWidth="1.5"
          />
          <circle
            cx="303"
            cy="68"
            r="35"
            stroke="var(--illustration-accent)"
            strokeOpacity=".5"
            strokeWidth="8"
          />
          <circle cx="303" cy="68" r="11" fill="var(--illustration-primary)" opacity=".25" />
          <path
            d="M279 194h21m-10-10v21"
            stroke="var(--illustration-accent)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </DecorationFrame>
  )
}
