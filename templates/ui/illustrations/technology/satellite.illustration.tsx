import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function SatelliteIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m99 77 27-27 36 36-27 27-36-36Z" fill={c.surface} />
      <path d="m106 70 36 36m-23-36 14-14m-3 25 14-14m-3 25 14-14" stroke={c.line} />
      <path d="m53 94 32-32 29 29-32 32-29-29Zm93 24 32-32 29 29-32 32-29-29Z" fill={c.tint} />
      <path
        d="m64 84 29 28m-18-39 29 28m-42 2 32-32m63 37 29 28m-18-39 29 28m-42 2 32-32"
        stroke={c.line}
      />
      <path d="m140 62 13-13m-11-12 22 23c7-7 6-16 0-22s-15-7-22-1Z" fill={c.surface} />
      <path d="m162 40 10-10m-1-9c13 1 20 8 21 21m-21-12c8 1 11 4 12 12" stroke={c.line} />
      <path d="M47 153c27-27 72-27 99 0" fill={c.tint} stroke={c.line} />
      <path d="M63 153c19-15 43-15 64 0" stroke={c.line} />
    </CollectionScene>
  )
}
