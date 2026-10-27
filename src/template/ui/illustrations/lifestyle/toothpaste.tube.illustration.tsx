import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ToothpasteTubeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(15 131 91)">
        <path d="M105 31h51l-11 106h-29L105 31Z" fill={c.surface} />
        <path d="M102 22h57v12h-57V22Zm14 115h29v18h-29v-18Z" fill={c.tint} stroke={c.line} />
        <path
          d="M120 142v8m7-8v8m7-8v8m7-8v8M111 60h39m-35 43h31m-30-34h28v23h-28V69Z"
          fill={c.tint}
          stroke={c.line}
        />
        <path d="m121 80 5 5 11-12" stroke={c.line} />
      </g>
      <path d="M75 151h26m61 0h27" stroke={c.line} />
    </Scene>
  )
}
