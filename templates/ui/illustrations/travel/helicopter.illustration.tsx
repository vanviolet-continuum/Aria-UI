import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function HelicopterIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M96 73h39c51 0 63 61 14 61h-46c-25 0-39-25-27-45L45 79V64l51 9Z" fill={c.surface} />
      <path
        d="M135 82c25 0 37 15 34 30h-37V82Zm-40 5h25v25H87c-1-9 2-18 8-25Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M119 73V51m-58 0h121m-58-13v13m-28 83-7 14m62-14 7 14m-80 0h101m-50-30h8M45 64V47m-12 17h24"
        stroke={c.line}
      />
      <path d="M87 157h91" stroke={c.line} />
    </Scene>
  )
}
