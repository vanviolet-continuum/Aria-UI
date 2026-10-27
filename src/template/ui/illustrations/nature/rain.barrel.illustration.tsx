import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function RainBarrelIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M91 62h78v80c0 20-78 20-78 0V62Z" fill={c.surface} />
      <ellipse cx="130" cy="62" rx="39" ry="9" fill={c.tint} />
      <path
        d="M92 78c20 8 56 8 76 0m-76 43c20 8 56 8 76 0m-62-52v76m16-72v76m16-76v76m16-80v76"
        stroke={c.line}
      />
      <path d="M156 126h24v16h-9v-7h-15m10-16v14m-7-14h14" fill={c.surface} stroke={c.line} />
      <path d="M130 53V32h37V21" stroke={c.line} strokeWidth="5" />
      <path d="M178 148c-8 11-8 16 0 16s8-5 0-16Z" fill={c.tint} stroke={c.line} />
    </Scene>
  )
}
