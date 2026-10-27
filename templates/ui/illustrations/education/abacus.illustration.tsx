import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function AbacusIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M62 44h136v105H62V44Z" fill={c.surface} />
      <path d="M72 55h116v83H72V55Z" fill={c.tint} stroke={c.line} />
      <path d="M72 72h116M72 94h116M72 116h116" stroke={c.line} />
      <g fill={c.surface}>
        <ellipse cx="87" cy="72" rx="7" ry="10" />
        <ellipse cx="104" cy="72" rx="7" ry="10" />
        <ellipse cx="121" cy="72" rx="7" ry="10" />
        <ellipse cx="170" cy="72" rx="7" ry="10" />
        <ellipse cx="87" cy="94" rx="7" ry="10" />
        <ellipse cx="136" cy="94" rx="7" ry="10" />
        <ellipse cx="153" cy="94" rx="7" ry="10" />
        <ellipse cx="170" cy="94" rx="7" ry="10" />
        <ellipse cx="87" cy="116" rx="7" ry="10" />
        <ellipse cx="104" cy="116" rx="7" ry="10" />
        <ellipse cx="153" cy="116" rx="7" ry="10" />
        <ellipse cx="170" cy="116" rx="7" ry="10" />
      </g>
      <path d="M55 156h150m-125-7-5 7m105-7 5 7m-59-125v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}
