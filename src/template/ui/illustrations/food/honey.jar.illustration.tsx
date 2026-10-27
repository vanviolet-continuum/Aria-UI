import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function HoneyJarIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M96 58h67v20c12 8 16 14 16 28v37a10 10 0 0 1-10 10H90a10 10 0 0 1-10-10v-37c0-14 4-20 16-28V58Z"
        fill={c.surface}
      />
      <rect x="91" y="42" width="77" height="18" rx="4" fill={c.tint} />
      <path
        d="M84 102c30-8 60 7 91 0v39c0 7-6 9-12 9H96c-6 0-12-2-12-9v-39Z"
        fill={c.tint}
        stroke="none"
      />
      <path
        d="m119 105 11-6 11 6v13l-11 6-11-6v-13Zm11 19v13l11 6 11-6v-13l-11-6"
        stroke={c.line}
      />
      <path
        d="m182 116 15-63m-3-9 11 3m-13 4 11 3m-13 4 11 3m-13 4 11 3m-13 4 11 3"
        stroke={c.line}
        strokeWidth="3"
      />
    </Scene>
  )
}
