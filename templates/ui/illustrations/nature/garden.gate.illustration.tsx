import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GardenGateIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M67 61c0-50 126-50 126 0v94h-12V61c0-33-102-33-102 0v94H67V61Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M80 85c29-15 70-15 100 0v63H80V85Z" fill={c.surface} />
      <path
        d="M130 76v72m-37-68v67m13-71v71m12-73v73m24-73v73m12-71v71m13-67v67M80 102h100m-100 30h100"
        stroke={c.line}
      />
      <circle cx="124" cy="116" r="2" fill={c.accent} stroke="none" />
      <circle cx="136" cy="116" r="2" fill={c.accent} stroke="none" />
      <path d="M55 155h150m-143-8-4-9m141 9 4-9" stroke={c.line} />
    </Scene>
  )
}
