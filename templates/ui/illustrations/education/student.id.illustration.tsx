import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function StudentIdIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M110 78 88 26h15l24 52m23 0 22-52h-15l-24 52" fill={c.tint} stroke={c.line} />
      <path d="M123 75h15v16h-15V75Z" fill={c.surface} />
      <rect x="69" y="87" width="122" height="68" rx="8" fill={c.surface} />
      <rect x="80" y="99" width="30" height="37" rx="3" fill={c.tint} stroke={c.line} />
      <circle cx="95" cy="110" r="6" fill={c.surface} stroke={c.line} />
      <path
        d="M85 130c0-15 20-15 20 0m17-24h55m-55 11h36m-36 11h43m-83 17v-5m5 5v-5m5 5v-5m5 5v-5m6 5v-5m6 5v-5m6 5v-5m5 5v-5m6 5v-5m6 5v-5"
        stroke={c.line}
      />
      <path d="M54 62h15m-7-7v14" stroke={c.accent} />
    </EducationScene>
  )
}
