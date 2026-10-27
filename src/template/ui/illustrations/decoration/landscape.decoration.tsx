import type { IllustrationProps } from '../shared/illustration.frame'
import { DecorationFrame } from '../shared/decoration.frame'

export function LandscapeDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent, glow }) => (
        <>
          <circle cx="286" cy="68" r="89" fill={`url(#${glow})`} />
          <circle cx="286" cy="68" r="32" fill={`url(#${accent})`} opacity=".7" />
          <path
            d="m-20 207 105-99 84 74 75-61 73 62 103-77v194H-20v-93Z"
            fill={`url(#${primary})`}
            opacity=".2"
          />
          <path
            d="M-20 217c72-76 113-74 183-17s128 18 174-19 69-36 101-20v139H-20v-83Z"
            fill={`url(#${accent})`}
            opacity=".6"
          />
          <path
            d="M-20 251c74-65 132-26 200-6s107-41 169-23 71 23 88 35v43H-20v-49Z"
            fill={`url(#${primary})`}
            opacity=".7"
          />
          <path
            d="M32 71h40m-25 13h46m82-48h27"
            stroke="var(--illustration-line)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </DecorationFrame>
  )
}
