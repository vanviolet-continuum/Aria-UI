import type { IllustrationProps } from '../frame'
import { DecorationFrame } from './decoration-frame'

export function SparklesDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent, glow }) => (
        <>
          <ellipse cx="200" cy="140" rx="172" ry="135" fill={`url(#${glow})`} />
          <path
            d="M202 35c8 69 25 89 91 102-66 13-83 33-91 102-10-69-28-89-94-102 66-13 84-33 94-102Z"
            fill={`url(#${primary})`}
            opacity=".8"
          />
          <path
            d="M83 42c3 28 11 37 39 43-28 5-36 14-39 43-5-29-13-38-41-43 28-6 36-15 41-43Zm243 126c3 27 10 35 36 40-26 5-33 13-36 40-4-27-12-35-38-40 26-5 34-13 38-40Z"
            fill={`url(#${accent})`}
          />
          <path
            d="M315 45v19m-9-9h19M81 199v15m-7-7h15"
            stroke="var(--illustration-primary)"
            strokeOpacity=".55"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="137" cy="35" r="3" fill="var(--illustration-accent)" />
          <circle cx="264" cy="240" r="4" fill="var(--illustration-primary)" opacity=".4" />
        </>
      )}
    </DecorationFrame>
  )
}
