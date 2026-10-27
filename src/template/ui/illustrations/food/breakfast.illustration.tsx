import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function BreakfastIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="128" cy="113" rx="65" ry="42" fill={c.surface} stroke={c.line} />
      <ellipse cx="128" cy="113" rx="52" ry="31" stroke={c.line} />
      <path
        d="M91 96c-10 3-13 18-4 26-1 15 16 18 25 10 16 7 28-6 20-18 5-15-9-25-22-18-7-5-12-5-19 0Z"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="109" cy="113" r="11" fill={c.accent} fillOpacity=".45" />
      <path d="M147 88c-4-10 8-19 15-9 6-4 13 3 8 9l-10 35-23-7 10-28Z" fill={c.tint} />
      <path d="m146 94 18 5m-21 4 18 5m-21 3 18 5" stroke={c.line} />
      <path d="M46 76v29m-5-29v15c0 7 10 7 10 0V76m-5 29v45m165-74c-9 10-9 26 0 31v43m0-74v31" />
      <path d="M88 37h36v22c0 13-36 13-36 0V37Z" fill={c.surface} />
      <path
        d="M124 42h6c13 0 12 17-6 17m-26-32c-7-5 5-8 0-13m12 13c-7-5 5-8 0-13"
        stroke={c.line}
      />
      <ellipse cx="106" cy="37" rx="18" ry="4" fill={c.tint} />
    </CollectionScene>
  )
}
