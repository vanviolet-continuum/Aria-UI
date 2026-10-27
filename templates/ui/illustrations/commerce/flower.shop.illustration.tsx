import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function FlowerShopIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M65 63h130v91H65V63Z" fill={c.surface} />
      <path d="m59 64 12-26h118l12 26H59Z" fill={c.tint} />
      <path d="M76 75h66v57H76V75Zm79 0h28v79h-28V75Z" stroke={c.line} />
      <path d="M109 76v55m-32-26h64m29 7v10" stroke={c.line} />
      {[87, 113, 139].map((x) => (
        <g key={x}>
          <path d={`M${x} 140v-23m-8 23 3 15h10l3-15h-16Z`} fill={c.surface} stroke={c.line} />
          <path
            d={`M${x} 118c-12-2-12-14-4-14 4-9 13-4 10 3 9 4 4 13-6 11Z`}
            fill={c.tint}
            stroke={c.line}
          />
        </g>
      ))}
      <path d="M115 48h31m-21 7h12M55 156h149" stroke={c.line} />
    </Scene>
  )
}
