import type { IllustrationProps } from '../frame'
import { DecorationFrame } from './decoration-frame'

export function CornerFlourishDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent }) => (
        <>
          <circle cx="0" cy="0" r="166" fill={`url(#${accent})`} opacity=".18" />
          <circle cx="400" cy="280" r="166" fill={`url(#${primary})`} opacity=".18" />
          {[80, 108, 136, 164].map((radius, index) => (
            <g key={radius}>
              <circle
                cx="0"
                cy="0"
                r={radius}
                stroke={`url(#${primary})`}
                strokeWidth={index === 1 ? 12 : 2}
                opacity=".6"
              />
              <circle
                cx="400"
                cy="280"
                r={radius}
                stroke={`url(#${accent})`}
                strokeWidth={index === 2 ? 12 : 2}
                opacity=".7"
              />
            </g>
          ))}
          <rect
            x="106"
            y="104"
            width="18"
            height="18"
            rx="4"
            transform="rotate(30 115 113)"
            fill="var(--illustration-accent)"
            opacity=".4"
          />
          <path
            d="m294 40 18 27h-36l18-27Z"
            stroke="var(--illustration-primary)"
            strokeOpacity=".35"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M56 234h16m-8-8v16m271-148h14m-7-7v14"
            stroke="var(--illustration-accent)"
            strokeOpacity=".55"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </DecorationFrame>
  )
}
