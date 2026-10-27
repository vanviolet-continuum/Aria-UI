import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BakeryShopIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M65 62h130v91H65V62Z" fill={c.surface} />
      <path d="M61 48h138v20H61V48Z" fill={c.tint} />
      <path d="m61 68-8 22h154l-8-22H61Z" fill={c.surface} />
      <path d="M77 69v21m20-21v21m21-21v21m23-21v21m22-21v21m20-21v21" stroke={c.line} />
      <path d="M78 102h65v36H78v-36Zm77 0h27v51h-27v-51Z" fill={c.tint} stroke={c.line} />
      <path
        d="M85 131c0-20 24-20 24 0m5 0c0-20 23-20 23 0m-42-13-2 7m32-7-2 7m53 2v8M55 155h150"
        stroke={c.line}
      />
      <path d="M99 58h62" stroke={c.line} />
    </Scene>
  )
}
