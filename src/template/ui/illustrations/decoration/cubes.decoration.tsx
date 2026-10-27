import type { IllustrationProps } from '../shared/illustration.frame'
import { DecorationFrame } from '../shared/decoration.frame'

export function CubesDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent }) => (
        <>
          <path
            d="m45 193 157-91 155 89-155 90-157-88Zm0-70 157-91 155 89M91 220l155-90m-87 129 155-90"
            stroke="var(--illustration-line)"
            strokeOpacity=".7"
            strokeDasharray="3 7"
          />
          {[
            { x: 200, y: 93, s: 57 },
            { x: 100, y: 171, s: 32 },
            { x: 304, y: 177, s: 39 },
          ].map(({ x, y, s }, index) => (
            <g
              key={x}
              transform={`translate(${x} ${y})`}
              stroke="var(--illustration-primary)"
              strokeOpacity=".3"
              strokeLinejoin="round"
            >
              <path
                d={`M0 ${-s} ${s} 0 0 ${s} ${-s} 0 0 ${-s}Z`}
                fill={`url(#${index % 2 ? accent : primary})`}
              />
              <path
                d={`M${-s} 0 0 ${s}v${s}l${-s} ${-s}V0Z`}
                fill="var(--illustration-primary)"
                fillOpacity=".17"
              />
              <path
                d={`M0 ${s} ${s} 0v${s}L0 ${s * 2}V${s}Z`}
                fill="var(--illustration-accent)"
                fillOpacity=".28"
              />
            </g>
          ))}
        </>
      )}
    </DecorationFrame>
  )
}
