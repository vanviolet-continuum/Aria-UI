import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function FractionsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <circle cx="97" cy="80" r="40" fill={c.surface} />
      <path d="M97 40v40h40a40 40 0 0 0-40-40Z" fill={c.tint} />
      <path d="M57 80h80m-40 0v40m0-40L69 52m28 28 28 28m-28-28-28 28" stroke={c.line} />
      <path d="M162 50v20m-10 8h29m-26 10v13h22m-3-13v26" strokeWidth="3" />
      <path d="M61 136h137v14H61v-14Z" fill={c.surface} />
      <path d="M61 136h51v14H61v-14Z" fill={c.tint} stroke={c.accent} />
      <path d="M78 137v12m17-12v12m17-12v12m17-12v12m17-12v12m17-12v12m17-12v12" stroke={c.line} />
      <path d="M141 78h8m-8 6h8M207 57v10m-5-5h10" stroke={c.line} />
    </EducationScene>
  )
}
