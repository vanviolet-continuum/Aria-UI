import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GiftBagIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m81 63-7-25 27 10 15-23 19 18 27-12 9 32H81Z" fill={c.tint} stroke={c.line} />
      <path d="M77 62h106l8 92H69l8-92Z" fill={c.surface} />
      <path d="M107 72V57c0-32 46-32 46 0v15" stroke={c.line} />
      <path
        d="m121 100 9-7 9 7-9 10-9-10Zm9 9-14-6c-16-4-18 14-5 15l19-9Zm0 0 14-6c16-4 18 14 5 15l-19-9Zm-2 6-10 23 11-4 5 8 1-27"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M82 146h97" stroke={c.line} />
    </Scene>
  )
}
