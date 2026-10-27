import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function ElectricCircuitIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M77 77H54v63h155V77h-30m-64 0h24" stroke={c.line} />
      <path d="M78 54h36v45H78V54Z" fill={c.surface} />
      <path d="M88 54v-9h16v9m-26 36h36m-26-25v13m-6-6h12m10 0h6" stroke={c.line} />
      <path d="M150 91c0-13-10-17-10-31a23 23 0 0 1 46 0c0 14-10 18-10 31h-26Z" fill={c.tint} />
      <path d="M151 91h24v14h-24V91Zm5 14v7h14v-7m-14-14V75l-8-10m22 26V75l8-10" stroke={c.line} />
      <path d="M104 140h11l15-17m4 17h12m17-110v-8m29 23 6-5m-64 4-6-5" stroke={c.accent} />
      <circle cx="115" cy="140" r="3" fill={c.surface} />
      <circle cx="134" cy="140" r="3" fill={c.surface} />
    </EducationScene>
  )
}
