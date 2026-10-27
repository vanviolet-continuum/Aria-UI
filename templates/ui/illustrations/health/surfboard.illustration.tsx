import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SurfboardIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M130 22c-24 17-38 48-33 97 2 20 11 31 33 38 22-7 31-18 33-38 5-49-9-80-33-97Z"
        fill={c.surface}
      />
      <path d="M130 23v132m-16-16c-11-33-12-68 1-100m30 100c11-33 12-68-1-100" stroke={c.line} />
      <path d="M111 83c10-10 24 10 37 0m-38 10c11-10 24 10 39 0m-34 25h29" stroke={c.line} />
      <path d="M130 157c0 9 45 12 53-1 7-12-8-16-13-6" stroke={c.line} />
    </Scene>
  )
}
