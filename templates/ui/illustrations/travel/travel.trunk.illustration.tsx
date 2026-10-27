import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TravelTrunkIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="54" y="62" width="152" height="89" rx="9" fill={c.surface} />
      <path d="M54 91h152M82 63v88m96-88v88" stroke={c.line} />
      <path
        d="M63 63v13H54m143-13v13h9M63 151v-13H54m143 13v-13h9M105 91V77h50v14"
        fill={c.tint}
        stroke={c.line}
      />
      <rect x="75" y="84" width="15" height="19" rx="2" fill={c.surface} />
      <rect x="170" y="84" width="15" height="19" rx="2" fill={c.surface} />
      <path d="M110 120h40m-36 10h32m-9-69V46h-15v15" stroke={c.line} />
    </Scene>
  )
}
