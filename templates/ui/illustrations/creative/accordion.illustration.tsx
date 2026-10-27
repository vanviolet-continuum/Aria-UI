import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function AccordionIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M58 54h37v89H58V54Zm108 0h36v89h-36V54Z" fill={c.surface} />
      <path d="M95 61h71v75H95V61Z" fill={c.tint} stroke={c.line} />
      <path d="M104 62v73m10-73v73m10-73v73m10-73v73m10-73v73m10-73v73" stroke={c.line} />
      <path
        d="M66 62h20v73H66V62Zm0 12h20m-20 12h20m-20 12h20m-20 12h20m-20 12h20"
        stroke={c.line}
      />
      <path d="M67 69h11m-11 24h11m-11 24h11" strokeWidth="3" />
      {[72, 89, 106, 123].map((y) => (
        <g key={y}>
          <circle cx="178" cy={y} r="2" fill={c.tint} stroke={c.line} />
          <circle cx="190" cy={y + 5} r="2" fill={c.tint} stroke={c.line} />
        </g>
      ))}
      <path d="M91 54V43h77v11m-85 91h97" stroke={c.line} />
    </Scene>
  )
}
