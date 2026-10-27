import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WeatherVaneIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M130 32v109m-28 16 28-17 28 17M81 55h83m-83-8v16l20-8-20-8Zm83-6 18 6-18 6V49Z"
        fill={c.surface}
      />
      <path d="M98 100h64m-32-16v32m-26-39 52 47m-52 0 52-47" stroke={c.line} />
      <circle cx="130" cy="55" r="5" fill={c.tint} />
      <path
        d="M125 22V12l10 10V12m-53 83-4 5 4 5m96-10h-7v10h7m-7-5h5M114 156h32"
        stroke={c.line}
      />
    </Scene>
  )
}
