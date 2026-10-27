import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function SchoolBellIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M106 50v-9a23 23 0 0 1 46 0v9" stroke={c.line} />
      <path d="M87 103V80a42 42 0 0 1 84 0v23l14 21H73l14-21Z" fill={c.surface} />
      <path d="M75 124h109v10H75v-10Z" fill={c.tint} />
      <path d="M115 134c0 19 29 19 29 0m-42-38V77c0-10 7-19 15-22" stroke={c.line} />
      <path
        d="M58 64c-10 13-10 31 0 44m-10-53c-14 18-14 43 0 61m151-52c10 13 10 31 0 44m10-53c14 18 14 43 0 61"
        stroke={c.accent}
      />
      <path d="M94 156h71m-36-139v8" stroke={c.line} />
    </EducationScene>
  )
}
