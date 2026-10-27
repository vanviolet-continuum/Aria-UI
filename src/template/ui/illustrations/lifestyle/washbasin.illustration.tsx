import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WashbasinIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M75 91h110c-3 38-23 49-55 49s-52-11-55-49Z" fill={c.surface} />
      <ellipse cx="130" cy="91" rx="55" ry="13" fill={c.tint} stroke={c.line} />
      <ellipse cx="130" cy="91" rx="36" ry="7" fill={c.surface} stroke={c.line} />
      <path
        d="M124 80V45c0-20 33-20 33 0v10h-12V45c0-7-10-7-10 0v35m-11-15h11"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M118 140v15h24v-15m-37-74v13m-5-13h10m44 10h12m-6-6v12M103 156h54" stroke={c.line} />
    </Scene>
  )
}
