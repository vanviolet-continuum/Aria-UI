import type { IllustrationProps } from '../shared/illustration.frame'
import { DecorationFrame } from '../shared/decoration.frame'

export function WavesDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent }) => (
        <>
          <path
            d="M-20 92C71 14 137 164 229 91s132-67 194-10v219H-20V92Z"
            fill={`url(#${primary})`}
            opacity=".24"
          />
          <path
            d="M-20 130C68 49 143 194 229 130s130-62 194-5v175H-20V130Z"
            fill={`url(#${accent})`}
            opacity=".46"
          />
          <path
            d="M-20 171C66 100 144 224 229 168s137-50 194-2v134H-20V171Z"
            fill={`url(#${primary})`}
            opacity=".6"
          />
          <path
            d="M-20 217C65 147 143 257 229 210s137-34 194 5v85H-20v-83Z"
            fill="var(--illustration-primary)"
            opacity=".13"
          />
          <path
            d="M-20 153C67 78 144 209 229 149s133-55 194-4"
            stroke="var(--illustration-primary)"
            strokeOpacity=".3"
            strokeWidth="1.5"
          />
          <circle cx="304" cy="39" r="12" fill="var(--illustration-accent)" opacity=".3" />
        </>
      )}
    </DecorationFrame>
  )
}
