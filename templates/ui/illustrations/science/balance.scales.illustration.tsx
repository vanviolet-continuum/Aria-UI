import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BalanceScalesIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M130 39v106m-24 10h48m-57 0h66M77 61h106m-106 0-18 48m18-48 18 48m88-48-18 48m18-48 18 48"
        stroke={c.line}
      />
      <circle cx="130" cy="56" r="6" fill={c.surface} />
      <path d="M52 109h50c-4 28-46 28-50 0Zm106 0h50c-4 28-46 28-50 0Z" fill={c.tint} />
      <path
        d="M121 145h18v10h-18v-10m-42-36h-5m111 0h-5m-57-75h14v9h-14v-9Z"
        fill={c.surface}
        stroke={c.line}
      />
    </Scene>
  )
}
