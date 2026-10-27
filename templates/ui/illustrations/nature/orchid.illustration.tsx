import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function OrchidIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M128 132c1-36 13-57 37-74m-35 60c-28-1-44-15-42-30 21 2 36 12 42 30Zm0 0c5-25 24-36 38-28-6 19-18 28-38 28Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M160 58c-24-1-28-22-10-22 2-21 23-21 26-1 21-4 26 17 7 23 8 19-12 27-21 11-17 10-27-5-10-13l8 2Z"
        fill={c.surface}
      />
      <path d="m160 54 8-8 9 8-9 10-8-10Z" fill={c.tint} stroke={c.accent} />
      <path d="m103 130 6 27h43l6-27h-55Z" fill={c.surface} />
      <path
        d="M106 138h49m-39 11h28m-20-81c-14-1-17-13-7-14 2-12 15-12 17 0 12-2 15 10 3 14l-6 8-7-8Z"
        fill={c.tint}
        stroke={c.line}
      />
    </Scene>
  )
}
