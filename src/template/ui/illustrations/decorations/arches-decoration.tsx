import type { IllustrationProps } from '../frame'
import { DecorationFrame } from './decoration-frame'

export function ArchesDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, glow }) => (
        <>
          <ellipse cx="200" cy="165" rx="175" ry="150" fill={`url(#${glow})`} />
          {Array.from({ length: 6 }, (_, index) => {
            const x = 74 + index * 21
            const radius = 126 - index * 21
            return (
              <path
                key={index}
                d={`M${x} 286V136a${radius} ${radius} 0 0 1 ${radius * 2} 0v150`}
                stroke={`url(#${primary})`}
                strokeWidth="14"
                opacity={0.24 + index * 0.1}
              />
            )
          })}
          <path
            d="M42 230h29m271-126h18m-9-9v18"
            stroke="var(--illustration-accent)"
            strokeOpacity=".5"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </DecorationFrame>
  )
}
