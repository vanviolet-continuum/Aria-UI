import type { IllustrationProps } from '../shared/illustration.frame'
import { DecorationFrame } from '../shared/decoration.frame'

export function AuroraDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent, glow }) => (
        <>
          <ellipse cx="210" cy="135" rx="230" ry="155" fill={`url(#${glow})`} />
          <path
            d="M-60 207C28 37 117 30 202 116s158 43 253-92v93c-92 122-174 128-263 58S40 105-60 257v-50Z"
            fill={`url(#${primary})`}
            opacity=".7"
          />
          <path
            d="M-44 124C50 240 133 210 198 99S346 8 453 101v48C340 60 278 75 221 167S65 304-44 179v-55Z"
            fill={`url(#${accent})`}
            opacity=".5"
          />
          {[0, 1, 2, 3].map((line) => (
            <path
              key={line}
              d={`M-30 ${208 + line * 9}C60 ${40 + line * 10} 133 ${65 + line * 11} 207 ${140 + line * 8}S350 ${180 + line * 6} 434 ${38 + line * 7}`}
              stroke="var(--illustration-primary)"
              strokeOpacity={0.18 - line * 0.03}
              strokeWidth="1.5"
            />
          ))}
        </>
      )}
    </DecorationFrame>
  )
}
