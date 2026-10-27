import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function CrayonsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M73 105V48l8-17 8 17v57m14 0V43l8-17 8 17v62m14 0V50l8-17 8 17v55m14 0V55l8-17 8 17v50"
        fill={c.surface}
      />
      <path
        d="M73 61h16m14-6h16m14 8h16m14 4h16M73 89h16m14-6h16m14 8h16m14 4h16"
        stroke={c.line}
      />
      <path d="m65 101 9 54h109l10-54H65Z" fill={c.tint} />
      <path d="M77 113h103m-99 30h94" stroke={c.line} />
      <path
        d="M110 135c-13-8-12-15-5-17 6-2 10 5 10 5s5-7 10-5c9 4 2 11-15 17Z"
        fill={c.surface}
        stroke={c.accent}
      />
      <path d="M49 79v10m-5-5h10m156 33h12" stroke={c.line} />
    </EducationScene>
  )
}
