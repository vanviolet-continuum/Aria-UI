import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SuitcaseOrganizerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="59" y="45" width="94" height="98" rx="10" fill={c.surface} />
      <rect x="69" y="55" width="74" height="58" rx="5" fill={c.tint} stroke={c.line} />
      <path
        d="M70 70h72m-72 13h72m-72 13h72m-58-40v56m20-56v56m21-56v56M62 126h88"
        stroke={c.line}
      />
      <rect x="130" y="102" width="75" height="53" rx="9" fill={c.surface} />
      <path d="M133 116h69m-28 0v8m-31 16h49" stroke={c.line} />
      <path d="M142 102v-9h49v9m-89-58v-9h23v9" stroke={c.line} />
    </Scene>
  )
}
