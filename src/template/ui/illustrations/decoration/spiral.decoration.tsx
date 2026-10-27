import type { IllustrationProps } from '../shared/illustration.frame'
import { DecorationFrame } from '../shared/decoration.frame'

export function SpiralDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent, glow }) => (
        <>
          <circle cx="200" cy="140" r="138" fill={`url(#${glow})`} />
          {Array.from({ length: 6 }, (_, arm) => {
            const points = Array.from({ length: 100 }, (_, step) => {
              const angle = (step / 99) * Math.PI * 3.5 + (arm * Math.PI) / 3
              const radius = 5 + step * 1.2
              return `${step ? 'L' : 'M'}${(200 + Math.cos(angle) * radius).toFixed(2)} ${(140 + Math.sin(angle) * radius).toFixed(2)}`
            }).join(' ')
            return (
              <path
                key={arm}
                d={points}
                stroke={`url(#${arm % 2 ? accent : primary})`}
                strokeWidth="3"
                strokeLinecap="round"
                opacity=".7"
              />
            )
          })}
          <circle
            cx="200"
            cy="140"
            r="134"
            stroke="var(--illustration-line)"
            strokeDasharray="2 9"
          />
        </>
      )}
    </DecorationFrame>
  )
}
