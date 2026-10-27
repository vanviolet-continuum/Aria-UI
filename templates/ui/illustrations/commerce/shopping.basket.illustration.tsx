import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ShoppingBasketIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m90 87 22-51h15l-21 51m48 0-21-51h15l22 51" fill={c.surface} />
      <path d="m65 83 15 69h101l15-69H65Z" fill={c.surface} />
      <path d="M60 82h141v14H60V82Z" fill={c.tint} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path
          key={i}
          d={`M${85 + i * 18} 106l${i < 3 ? 3 : -3} 35`}
          stroke={c.line}
          strokeWidth="4"
        />
      ))}
      <path d="M74 121h113m-70 27h27M90 87h16m48 0h16" stroke={c.line} />
    </Scene>
  )
}
