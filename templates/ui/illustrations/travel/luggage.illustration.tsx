import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function LuggageIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M106 52V31a5 5 0 0 1 5-5h38a5 5 0 0 1 5 5v21m-38 0V35h28v17"
        fill={c.surface}
        stroke={c.line}
      />
      <rect x="81" y="51" width="99" height="102" rx="12" fill={c.surface} />
      <path d="M100 56v92m61-92v92m-40-80v62m19-62v62" stroke={c.line} />
      <rect
        x="101"
        y="88"
        width="37"
        height="26"
        rx="3"
        fill={c.tint}
        transform="rotate(-12 119 101)"
        stroke={c.accent}
      />
      <path d="m106 106 8-12 6 7 7-10 8 10" stroke={c.line} />
      <path d="M173 71h20v29h-20V71Z" fill={c.tint} />
      <path d="M173 72c-17-20-4-26 5-17 7 6 6 12 4 17" stroke={c.line} />
      <circle cx="183" cy="80" r="2" stroke={c.line} />
      <path d="M93 154v5m74-5v5" strokeWidth="6" />
      <path d="M60 148h10m119-16h15" stroke={c.line} />
    </CollectionScene>
  )
}
