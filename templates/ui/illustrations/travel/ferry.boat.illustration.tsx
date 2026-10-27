import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function FerryBoatIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M47 116h167l-25 33H72l-25-33Z" fill={c.surface} />
      <path d="M65 82h128v34H65V82Zm17-30h87v30H82V52Z" fill={c.surface} />
      <path d="M77 76h101v8H77v-8M96 52V38h14v14m37 0V38h14v14" fill={c.tint} stroke={c.line} />
      <path
        d="M75 93h19v15H75V93Zm29 0h19v15h-19V93Zm29 0h19v15h-19V93Zm29 0h19v15h-19V93ZM94 61h18v11H94V61Zm28 0h18v11h-18V61Zm28 0h10v11h-10V61Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M64 130h132m-137 25h43m55 0h45" stroke={c.line} />
    </Scene>
  )
}
