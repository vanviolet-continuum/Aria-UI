import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function PhotographyStudioIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M91 42h93v95H91V42Z" fill={c.tint} stroke={c.line} />
      <path d="M91 136c10-7 21-9 32-3 16 8 41-1 61 3m-101 9h109m-55-9v13" stroke={c.line} />
      <path d="m45 56 25-14 19 30-25 15-19-31Z" fill={c.surface} />
      <path d="M64 87v65m-15 5 15-14 15 14m-24-96 24 17" stroke={c.line} />
      <path d="M104 81h56v31h-56V81Zm9 0v-8h24v8" fill={c.surface} />
      <circle cx="135" cy="96" r="11" fill={c.tint} />
      <circle cx="135" cy="96" r="5" stroke={c.line} />
      <path d="m129 112-17 44m23-44 16 44m-19-44v44" stroke={c.line} />
      <path
        d="m193 77 18-9 8 22-18 9-8-22Zm13 20v55m-13 5 13-12 13 12"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M99 35h77" stroke={c.line} />
    </CollectionScene>
  )
}
