import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ElectricKettleIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M150 66c44-16 59 49 15 61m-8-51c29-7 33 34 5 41" fill={c.tint} stroke={c.line} />
      <path d="M93 67h58l18 61c4 16-8 22-47 22s-51-6-47-22l18-61Z" fill={c.surface} />
      <path d="M87 84 63 71l12 41 9 5" fill={c.tint} />
      <path d="M91 65c0-10 63-10 63 0v5H91v-5Zm24-12v-7h17v7" fill={c.tint} stroke={c.line} />
      <path
        d="M118 87h14v44h-14V87Zm3 10h8m-8 12h8m-8 12h8M83 150h80v7H83v-7Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M107 35c-6-8 7-11 1-20m23 20c-6-8 7-11 1-20" stroke={c.line} />
    </Scene>
  )
}
