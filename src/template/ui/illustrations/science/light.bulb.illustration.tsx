import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function LightBulbIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M109 122c-1-25-26-29-26-55a47 47 0 0 1 94 0c0 26-25 30-26 55h-42Z"
        fill={c.surface}
      />
      <path d="M111 122h38v23h-38v-23Zm8 23v11h22v-11" fill={c.tint} />
      <path d="M112 131h36m-36 7h36m-26-17V93l-11-14h17l4 8 4-8h17l-12 14v28" stroke={c.line} />
      <path
        d="M130 12V4m59 62h12M59 66h12m105-43 9-9m-101 9-9-9m-13 92 9-5m119 5-9-5"
        stroke={c.accent}
        strokeWidth="3"
      />
      <path d="M97 60c1-12 10-22 21-25" stroke={c.line} strokeWidth="3" />
      <path d="M100 148H83v-13H61m99 13h17v-13h22" stroke={c.line} />
      <circle cx="61" cy="135" r="4" fill={c.tint} stroke={c.line} />
      <circle cx="199" cy="135" r="4" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}
