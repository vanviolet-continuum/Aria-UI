import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SubmarineIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M85 74h87c52 0 52 65 0 65H85c-50 0-50-65 0-65Z" fill={c.surface} />
      <path d="M107 74V58h46v16m-24-16V38h30v9h-20v11" fill={c.tint} stroke={c.line} />
      <circle cx="95" cy="105" r="14" fill={c.tint} />
      <circle cx="133" cy="105" r="14" fill={c.tint} />
      <circle cx="171" cy="105" r="14" fill={c.tint} />
      <path
        d="M88 100c2-3 5-4 9-4m29 4c2-3 5-4 9-4m29 4c2-3 5-4 9-4M53 97H39v18h14m-14-27v37M90 131h84"
        stroke={c.line}
      />
      <path d="M55 153h30m22 5h46m24-5h25" stroke={c.line} />
    </Scene>
  )
}
