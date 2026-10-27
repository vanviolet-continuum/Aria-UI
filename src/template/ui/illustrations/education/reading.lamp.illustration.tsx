import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function ReadingLampIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M44 147h172m-161 0v10m149-10v10" stroke={c.line} />
      <path d="M162 140V95l-25-35m-11-11 24-13 18 30-24 13-18-30Z" fill={c.surface} />
      <path d="m146 78-20 47h58l-20-47" fill={c.tint} stroke="none" opacity=".65" />
      <path d="M146 142h34" strokeWidth="4" />
      <path
        d="M64 105c24-8 43-4 60 6 17-10 36-14 60-6v29c-23-6-44-3-60 7-17-10-37-13-60-7v-29Z"
        fill={c.surface}
      />
      <path d="M124 111v30m-47-23c12-1 24 1 36 6m23 0c12-5 24-7 36-6" stroke={c.line} />
      <path d="M60 77h20v18H60V77Zm20 4h5c8 0 8 10-5 10m-13-22c-5-5 4-8 0-12" stroke={c.line} />
    </EducationScene>
  )
}
