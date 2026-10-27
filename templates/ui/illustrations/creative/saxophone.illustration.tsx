import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SaxophoneIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M111 40c-14 1-19-8-13-18l8 3c-3 5 1 7 7 5 17-4 23 6 23 21v65c0 22 28 22 28 0V99h14v17c0 42-56 42-56 0V51c0-9-3-11-11-11Z"
        fill={c.surface}
      />
      <path d="m155 77 31 1-8 23h-14l-9-24Z" fill={c.tint} />
      <ellipse cx="170.5" cy="77" rx="16" ry="5" fill={c.surface} stroke={c.line} />
      <path
        d="M137 62h13m-13 15h13m-13 15h13m-13 15h13m-7-50v56m-24-59 7 4m-8 63 8 3m-10-24 10 2"
        stroke={c.line}
      />
      <path d="M114 155h58" stroke={c.line} />
    </Scene>
  )
}
