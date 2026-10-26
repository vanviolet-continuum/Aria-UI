import type { IllustrationProps } from '../frame'
import { DecorationFrame } from './decoration-frame'

export function PetalsDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent, glow }) => (
        <>
          <circle cx="200" cy="140" r="140" fill={`url(#${glow})`} />
          {Array.from({ length: 8 }, (_, index) => (
            <ellipse
              key={index}
              cx="200"
              cy="84"
              rx="28"
              ry="64"
              transform={`rotate(${index * 45} 200 140)`}
              fill={`url(#${index % 2 ? accent : primary})`}
              fillOpacity=".65"
              stroke="var(--illustration-surface)"
              strokeOpacity=".35"
            />
          ))}
          <circle
            cx="200"
            cy="140"
            r="29"
            fill="var(--illustration-tint)"
            stroke="var(--illustration-primary)"
            strokeOpacity=".2"
          />
          <circle cx="200" cy="140" r="15" fill="var(--illustration-primary)" opacity=".2" />
          <circle cx="55" cy="84" r="4" fill="var(--illustration-accent)" opacity=".5" />
          <circle cx="346" cy="205" r="6" fill="var(--illustration-primary)" opacity=".2" />
        </>
      )}
    </DecorationFrame>
  )
}
