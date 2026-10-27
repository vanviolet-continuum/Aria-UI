import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WoodenStoolIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="m98 81-15 74h11l17-73m51-1 15 74h-11l-17-73m-19 2v70"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M89 125h82m-70-8h58" stroke={c.line} />
      <path d="M86 68h88v13c0 18-88 18-88 0V68Z" fill={c.tint} />
      <ellipse cx="130" cy="68" rx="44" ry="15" fill={c.surface} />
      <path d="M104 66c15-5 34-5 50 0m-50 9h49M72 157h116" stroke={c.line} />
    </Scene>
  )
}
