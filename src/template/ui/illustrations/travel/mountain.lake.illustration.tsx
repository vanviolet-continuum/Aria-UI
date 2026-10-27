import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function MountainLakeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m44 114 47-72 48 72H44Zm75 0 41-85 54 85h-95Z" fill={c.surface} />
      <path
        d="m77 64 14-22 15 22-9-3-7 7-5-8-8 4Zm69-5 14-30 20 31-12-7-9 11-5-10-8 5Z"
        fill={c.tint}
        stroke={c.line}
      />
      <ellipse cx="130" cy="134" rx="81" ry="22" fill={c.tint} stroke={c.line} />
      <path d="M91 131h79m-58 9h45m-30 8h14m-77-26 13-9m101 9-13-9" stroke={c.line} />
      <path d="M47 128v-23m-7 8 7-14 7 14m151 15v-23m-7 8 7-14 7 14" stroke={c.line} />
    </Scene>
  )
}
