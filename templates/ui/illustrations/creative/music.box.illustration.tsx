import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function MusicBoxIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M75 90V38a6 6 0 0 1 6-6h98a6 6 0 0 1 6 6v52" fill={c.surface} />
      <path d="M85 43h90v36H85V43Z" fill={c.tint} stroke={c.line} />
      <path d="M68 90h124v60H68V90Z" fill={c.surface} />
      <path d="M68 104h124m-109 34h94" stroke={c.line} />
      <path
        d="M99 98v-9h61v9m-50-17v17m12-17v17m12-17v17m12-17v17m12-17v17m34 17h14v12h-14m-34-68v-9l14-3v10"
        stroke={c.line}
      />
      <path d="M123 121h14m-7-4v8" stroke={c.line} />
    </Scene>
  )
}
