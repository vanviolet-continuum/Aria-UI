import type { IllustrationProps } from '../frame'
import { DecorationFrame } from './decoration-frame'

export function RibbonDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent }) => (
        <>
          <path
            d="M-25 199C45 31 173 7 258 84s63 150-2 150-67-92 11-128S379 97 428 34"
            stroke={`url(#${primary})`}
            strokeWidth="41"
            strokeLinecap="round"
            opacity=".68"
          />
          <path
            d="M-25 187C45 19 173-5 258 72s63 150-2 150-67-92 11-128S379 85 428 22"
            stroke="var(--illustration-surface)"
            strokeOpacity=".55"
            strokeWidth="2"
          />
          <path
            d="M10 287C92 103 214 80 301 156s61 127 7 153"
            stroke={`url(#${accent})`}
            strokeWidth="25"
            strokeLinecap="round"
            opacity=".55"
          />
          <circle cx="93" cy="46" r="4" fill="var(--illustration-accent)" />
          <circle cx="353" cy="244" r="6" fill="var(--illustration-primary)" opacity=".2" />
        </>
      )}
    </DecorationFrame>
  )
}
