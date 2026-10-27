import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BathTowelsIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M75 116h116v35H75c-24 0-24-35 0-35Z" fill={c.surface} />
      <path d="M77 126h101v14H77c-10 0-10-14 0-14Z" fill={c.tint} stroke={c.line} />
      <path d="M180 83H70v32h110c24 0 24-32 0-32Z" fill={c.surface} />
      <path d="M177 93H81v12h96c9 0 9-12 0-12Z" fill={c.tint} stroke={c.line} />
      <path d="M87 49h79v34H87c-22 0-22-34 0-34Z" fill={c.surface} />
      <path d="M91 59h64v14H91c-9 0-9-14 0-14Z" fill={c.tint} stroke={c.line} />
      <path d="M170 122v22m-18-55v20m-15-55v22M73 157h118" stroke={c.line} />
    </Scene>
  )
}
