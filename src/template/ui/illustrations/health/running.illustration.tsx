import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function RunningIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <circle cx="151" cy="43" r="13" fill={c.surface} stroke={c.line} />
      <path d="M140 38c-2-14 20-17 24-4l-13-2-11 6Z" fill={c.tint} stroke={c.line} />
      <path d="m131 60 19 9-19 33-27-8 27-34Z" fill={c.surface} />
      <path d="m130 65-22 5-12 21m50-18 15 13 19-8" strokeWidth="4" />
      <path d="m107 95-17 26-27 8 3 10 38-11 21-25m3 0 19 17-5 28h11l8-35-19-24" fill={c.tint} />
      <path d="m62 139-10 5 5 4 17-5m67 6 5 7h16v-6" />
      <path d="M58 65h29M48 78h29m-15 14h17M40 157h178m-30-46 16 0m-13 13h20" stroke={c.line} />
      <path d="M188 48v-9m-4 5h8" stroke={c.accent} />
    </CollectionScene>
  )
}
