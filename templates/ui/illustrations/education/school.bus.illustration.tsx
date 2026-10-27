import type { IllustrationProps } from '../shared/illustration.frame'
import {
  CollectionScene as EducationScene,
  SceneCloud,
  sceneColors as c,
} from '../shared/collection.scene'

export function SchoolBusIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M47 64h129c12 0 19 8 22 19l9 29v26H47V64Z" fill={c.tint} />
      <path
        d="M57 76h25v28H57V76Zm34 0h25v28H91V76Zm34 0h25v28h-25V76Zm34 0h17c5 0 7 4 9 10l5 18h-31V76Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M48 113h158m-158 10h158m-48-48v63" stroke={c.line} />
      <circle cx="76" cy="140" r="15" fill={c.surface} />
      <circle cx="178" cy="140" r="15" fill={c.surface} />
      <circle cx="76" cy="140" r="6" fill={c.tint} stroke={c.line} />
      <circle cx="178" cy="140" r="6" fill={c.tint} stroke={c.line} />
      <path d="M89 54h55v10H89V54Zm-42 63H36v13h11m154-13h8" fill={c.surface} stroke={c.line} />
      <SceneCloud x={61} y={22} scale={0.6} />
    </EducationScene>
  )
}
