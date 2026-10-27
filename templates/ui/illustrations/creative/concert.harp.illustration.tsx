import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ConcertHarpIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M81 36c22 17 38 21 52 6 14-15 34-9 39 9l-23 96H93L81 36Z" fill={c.surface} />
      <path
        d="M92 50c16 11 28 13 45 1 11-8 19-6 21 2l-23 83h-30L92 50Z"
        fill={c.tint}
        stroke={c.line}
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${108 + i * 8} ${58 - i * 2}V${136 - i * 12}`} stroke={c.line} />
      ))}
      <path d="M87 147h66v10H87v-10Zm3-107 13 99m61-90-24 90m-41 13h42" stroke={c.line} />
    </Scene>
  )
}
