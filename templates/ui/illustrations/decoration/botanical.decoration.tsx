import type { IllustrationProps } from '../shared/illustration.frame'
import { DecorationFrame } from '../shared/decoration.frame'

export function BotanicalDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent }) => {
        const branch = (
          <>
            <path
              d="M62 290C69 209 103 118 163 25"
              stroke="var(--illustration-primary)"
              strokeOpacity=".45"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M77 225C26 215 32 177 35 157c38 4 56 30 42 68Zm20-52c-47-18-39-53-32-74 36 13 46 42 32 74Zm28-55c-35-21-28-52-18-71 30 15 38 40 18 71Zm24-56c-5-35 18-52 40-60 5 33-9 54-40 60Z"
              fill={`url(#${primary})`}
              opacity=".5"
            />
            <path
              d="M72 239c16-45 45-58 76-51-12 37-37 56-76 51Zm20-57c16-40 43-50 68-41-12 34-34 48-68 41Zm28-60c18-31 42-38 62-27-15 28-34 39-62 27Z"
              fill={`url(#${accent})`}
              opacity=".65"
            />
          </>
        )
        return (
          <>
            {branch}
            <g transform="translate(400 0) scale(-1 1)" opacity=".65">
              {branch}
            </g>
            <circle cx="201" cy="81" r="3" fill="var(--illustration-accent)" opacity=".5" />
            <circle cx="199" cy="215" r="6" fill="var(--illustration-primary)" opacity=".15" />
          </>
        )
      }}
    </DecorationFrame>
  )
}
