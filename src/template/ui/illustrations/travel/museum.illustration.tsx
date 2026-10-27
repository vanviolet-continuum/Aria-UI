import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function MuseumIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m56 64 74-36 74 36H56Z" fill={c.surface} />
      <path d="M64 70h132v13H64V70Z" fill={c.tint} />
      <path
        d="M72 83h15v56H72V83Zm33 0h15v56h-15V83Zm35 0h15v56h-15V83Zm33 0h15v56h-15V83Z"
        fill={c.surface}
      />
      <path
        d="M68 90h23m10 0h23m12 0h23m10 0h23m-124 42h23m10 0h23m12 0h23m10 0h23M62 139h136v10H62v-10Zm-9 10h154v9H53v-9Z"
        stroke={c.line}
      />
      <path d="M123 46h14v6c0 10-14 10-14 0v-6Zm-4 0h22" fill={c.tint} stroke={c.line} />
    </Scene>
  )
}
