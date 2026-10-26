import type { IllustrationProps } from '../frame'
import { DecorationFrame } from './decoration-frame'

export function BlobDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent }) => (
        <>
          <path
            d="M198 32c49-26 106 2 122 48s1 70-18 104-57 76-108 58S95 227 81 184s-8-89 29-111 58-25 88-41Z"
            fill={`url(#${primary})`}
            opacity=".8"
          />
          <path
            d="M106 39c33-8 64 18 69 48s-12 55-43 59-59-3-65-32 6-66 39-75Z"
            fill={`url(#${accent})`}
            opacity=".65"
          />
          <path
            d="M215 46c43-23 90 3 102 42s0 62-17 90-49 65-92 50-86-14-97-50-6-77 25-96 54-22 79-36Z"
            stroke="var(--illustration-surface)"
            strokeOpacity=".5"
            strokeWidth="1.5"
          />
          <circle cx="326" cy="222" r="14" fill="var(--illustration-accent)" opacity=".3" />
          <circle cx="63" cy="189" r="7" fill="var(--illustration-primary)" opacity=".25" />
        </>
      )}
    </DecorationFrame>
  )
}
