import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BlenderIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M99 44h61l-8 66h-45l-8-66Z" fill={c.surface} />
      <path d="M160 52h12c20 0 16 39-17 39m4-30h10c8 0 6 20-13 21" stroke={c.line} />
      <path d="M103 72c18-6 34 6 51 0l-4 32h-41l-6-32Z" fill={c.tint} stroke="none" />
      <path d="M106 56h16m-14 11h10m-9 13h13m-12 13h9" stroke={c.line} />
      <path
        d="M94 36h71v9H94v-9Zm25-7h21v7h-21v-7M107 110h45l13 36a6 6 0 0 1-6 8h-59a6 6 0 0 1-6-8l13-36Z"
        fill={c.surface}
      />
      <circle cx="129" cy="134" r="10" fill={c.tint} stroke={c.line} />
      <path d="m129 134 4-4m-28 20h48" stroke={c.line} />
    </Scene>
  )
}
