import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function TheaterIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M49 39h163v113H49V39Z" fill={c.surface} stroke={c.line} />
      <path
        d="M49 39c2 42 9 58 33 71l-10 42H49V39Zm163 0c-2 42-9 58-33 71l10 42h23V39Z"
        fill={c.tint}
      />
      <path d="M48 31h165v13H48V31Z" fill={c.surface} />
      <path d="M57 48v89m9-89c0 27 2 42 10 53m128-53v89m-9-89c0 27-2 42-10 53" stroke={c.line} />
      <path d="M86 64c18 8 37 8 54 0v31c-3 25-42 25-54 0V64Z" fill={c.surface} />
      <path d="M97 82h6m17 0h6m-26 14c8 8 18 8 26 0" stroke={c.line} />
      <path d="M126 84c17 7 34 7 50 0v28c-3 23-39 23-50 0V84Z" fill={c.tint} />
      <path d="M136 101h6m15 0h6m-26 17c7-8 16-8 24 0M44 154h174" stroke={c.line} />
    </CollectionScene>
  )
}
