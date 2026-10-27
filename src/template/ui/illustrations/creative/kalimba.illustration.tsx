import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function KalimbaIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="87" y="43" width="87" height="111" rx="12" fill={c.surface} />
      <circle cx="130" cy="115" r="18" fill={c.tint} stroke={c.line} />
      <path d="M97 63h67v10H97V63Z" fill={c.tint} />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path
          key={i}
          d={`M${104 + i * 9} 60v${56 - Math.abs(3 - i) * 7}`}
          stroke={c.line}
          strokeWidth="3"
        />
      ))}
      <path d="M101 143h59m-56-12h-7m61 0h7m-62-81h54" stroke={c.line} />
    </Scene>
  )
}
