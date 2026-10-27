import type { IllustrationProps } from '../shared/illustration.frame'
import { DecorationFrame } from '../shared/decoration.frame'

export function PrismDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent, glow }) => (
        <>
          <ellipse cx="200" cy="145" rx="163" ry="135" fill={`url(#${glow})`} />
          <path
            d="m200 27 132 192-132 36-132-36L200 27Z"
            fill={`url(#${primary})`}
            opacity=".65"
            stroke="var(--illustration-primary)"
            strokeOpacity=".25"
            strokeLinejoin="round"
          />
          <path d="M200 27v228L68 219 200 27Z" fill={`url(#${accent})`} opacity=".5" />
          <path d="m200 27 132 192-132-86V27Z" fill="var(--illustration-primary)" opacity=".12" />
          <path
            d="m68 219 132-86 132 86M200 133v122"
            stroke="var(--illustration-surface)"
            strokeOpacity=".45"
            strokeWidth="1.5"
          />
          <ellipse
            cx="200"
            cy="179"
            rx="176"
            ry="42"
            transform="rotate(-18 200 179)"
            stroke="var(--illustration-primary)"
            strokeOpacity=".25"
            strokeWidth="1.5"
          />
          <circle cx="354" cy="128" r="7" fill="var(--illustration-accent)" opacity=".75" />
        </>
      )}
    </DecorationFrame>
  )
}
