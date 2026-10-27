import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function VintageCarIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M54 105h22l16-42h54l28 31h18c15 0 20 13 20 27v15H49v-19c0-7 2-12 5-12Z"
        fill={c.surface}
      />
      <path d="m100 72-9 24h31V72h-22Zm31 0v24h31l-22-24h-9Z" fill={c.tint} stroke={c.line} />
      <path d="M49 121h162m-80-17h11m45-5v21m-8-13h8m-128 4h11" stroke={c.line} />
      <circle cx="83" cy="135" r="19" fill={c.surface} />
      <circle cx="177" cy="135" r="19" fill={c.surface} />
      <circle cx="83" cy="135" r="9" fill={c.tint} stroke={c.line} />
      <circle cx="177" cy="135" r="9" fill={c.tint} stroke={c.line} />
      <path d="M45 157h173" stroke={c.line} />
    </Scene>
  )
}
