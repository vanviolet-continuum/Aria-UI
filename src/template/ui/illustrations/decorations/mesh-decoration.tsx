import type { IllustrationProps } from '../frame'
import { DecorationFrame } from './decoration-frame'

export function MeshDecoration(props: IllustrationProps) {
  return (
    <DecorationFrame {...props}>
      {({ primary, accent, glow }) => (
        <>
          <ellipse cx="100" cy="85" rx="178" ry="146" fill={`url(#${glow})`} />
          <ellipse cx="292" cy="174" rx="176" ry="148" fill={`url(#${glow})`} />
          <path
            d="M16 122C-3 46 94 12 171 44s98 105 48 157-185 5-203-79Z"
            fill={`url(#${primary})`}
            opacity=".3"
          />
          <path
            d="M183 92C238 18 361 40 383 120s-44 137-118 115-133-72-82-143Z"
            fill={`url(#${accent})`}
            opacity=".45"
          />
          {[0, 1, 2, 3, 4, 5].map((row) => (
            <path
              key={row}
              d={`M-10 ${54 + row * 32}C102 ${-13 + row * 37} 250 ${170 + row * 12} 415 ${79 + row * 30}`}
              stroke="var(--illustration-surface)"
              strokeOpacity=".28"
              strokeWidth="1.5"
            />
          ))}
          {[0, 1, 2, 3, 4, 5, 6].map((column) => (
            <path
              key={column}
              d={`M${14 + column * 54} -20C${100 + column * 23} 90 ${-20 + column * 66} 170 ${61 + column * 50} 300`}
              stroke="var(--illustration-line)"
              strokeOpacity=".4"
            />
          ))}
        </>
      )}
    </DecorationFrame>
  )
}
