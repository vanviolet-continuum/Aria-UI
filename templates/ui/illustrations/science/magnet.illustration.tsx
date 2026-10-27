import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function MagnetIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M75 57h30v45a25 25 0 0 0 50 0V57h30v45a55 55 0 0 1-110 0V57Z" fill={c.tint} />
      <path d="M75 57h30v25H75V57Zm80 0h30v25h-30V57Z" fill={c.surface} />
      <path d="M86 66v9m-4-4h8m76 0h9" stroke={c.accent} />
      <path
        d="M103 38c13-10 41-10 54 0m-62-8c19-16 51-16 70 0m-77-9c23-20 61-20 84 0M61 74l-10-5m8 26H45m15 21-13 5m152-47 10-5m-8 26h14m-15 21 13 5"
        stroke={c.line}
      />
      <path d="m122 65 10-17-1 13h11l-14 20 2-16h-8Z" fill={c.surface} stroke={c.accent} />
      <path d="M114 157h32" stroke={c.line} />
    </CollectionScene>
  )
}
