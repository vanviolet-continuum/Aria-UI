import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ThunderstormIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M78 102c-29 0-33-36-9-46 7-31 48-35 61-10 24-15 50 1 49 22 30 5 27 35-1 35H78Z"
        fill={c.surface}
      />
      <path d="M90 59c8-7 18-7 26-1m36 17c9-3 16-1 21 4" stroke={c.line} />
      <path d="m127 93-22 35h22l-10 30 36-43h-24l11-22h-13Z" fill={c.tint} stroke={c.accent} />
      <path d="m82 121-8 16m99-16-8 16m-76 7-4 8m86-6-4 8" stroke={c.line} />
    </Scene>
  )
}
