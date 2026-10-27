import type { IllustrationProps } from '../shared/illustration.frame'
import { DecorationFrame } from '../shared/decoration.frame'

export function DotsDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ glow }) => (
        <>
          <ellipse cx="213" cy="137" rx="184" ry="139" fill={`url(#${glow})`} />
          {Array.from({ length: 12 }, (_, column) =>
            Array.from({ length: 8 }, (_, row) => {
              const distance = Math.hypot(column - 5.5, row - 3.5)
              return (
                <circle
                  key={`${column}-${row}`}
                  cx={35 + column * 30}
                  cy={35 + row * 30}
                  r={Math.max(1.6, 5.8 - distance * 0.65)}
                  fill={
                    (column + row) % 3 === 0
                      ? 'var(--illustration-accent)'
                      : 'var(--illustration-primary)'
                  }
                  opacity={Math.max(0.12, 0.65 - distance * 0.07)}
                />
              )
            }),
          )}
          <circle
            cx="198"
            cy="140"
            r="77"
            stroke="var(--illustration-line)"
            strokeDasharray="2 9"
          />
        </>
      )}
    </DecorationFrame>
  )
}
