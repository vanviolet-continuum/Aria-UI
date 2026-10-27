import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function StudentDeskIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M75 103h122v10H75v-10Zm9 10v43m104-43v43m-104-29h104" fill={c.surface} />
      <path
        d="M69 84H50v49h45m-44 0v23m44-23v23M51 118h45v15H51v-15Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M110 87c13-5 23-3 32 3 9-6 19-8 32-3v15c-13-2-23-1-32 5-9-6-20-7-32-5V87Z"
        fill={c.surface}
      />
      <path d="M142 90v17m-45-9 12 2" stroke={c.line} />
      <path d="M156 131c0-16 28-16 28 0v22h-28v-22Zm7-10v-7h14v7" fill={c.tint} stroke={c.line} />
      <path d="M164 138h12v8h-12v-8m-58-89h44m-44 10h28" stroke={c.line} />
      <path d="M177 57v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
