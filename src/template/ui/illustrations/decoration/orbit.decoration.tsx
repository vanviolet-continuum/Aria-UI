import type { IllustrationProps } from '../shared/illustration.frame'
import { DecorationFrame } from '../shared/decoration.frame'

export function OrbitDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, glow }) => (
        <>
          <circle cx="200" cy="140" r="130" fill={`url(#${glow})`} />
          <g transform="rotate(-24 200 140)">
            <ellipse
              cx="200"
              cy="140"
              rx="171"
              ry="70"
              stroke="var(--illustration-line)"
              strokeWidth="1.5"
            />
            <ellipse
              cx="200"
              cy="140"
              rx="141"
              ry="105"
              stroke="var(--illustration-primary)"
              strokeOpacity=".3"
              strokeWidth="1.5"
            />
            <ellipse
              cx="200"
              cy="140"
              rx="86"
              ry="122"
              stroke="var(--illustration-line)"
              strokeWidth="1.5"
            />
          </g>
          <circle cx="200" cy="140" r="47" fill={`url(#${primary})`} />
          <circle
            cx="200"
            cy="140"
            r="60"
            stroke="var(--illustration-primary)"
            strokeOpacity=".13"
          />
          <circle cx="69" cy="179" r="12" fill="var(--illustration-accent)" opacity=".8" />
          <circle cx="308" cy="66" r="8" fill="var(--illustration-primary)" opacity=".6" />
          <circle cx="266" cy="231" r="5" fill="var(--illustration-accent)" />
          <circle cx="132" cy="37" r="3" fill="var(--illustration-primary)" />
        </>
      )}
    </DecorationFrame>
  )
}
