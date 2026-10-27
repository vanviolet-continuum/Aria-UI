import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function SchoolSportsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M135 31h67v49h-67V31Z" fill={c.surface} />
      <path d="M151 45h34v25h-34V45Zm17 35v76m-18 0h36" stroke={c.line} />
      <path d="M147 79h43l-9 27h-25l-9-27Z" fill={c.tint} stroke={c.line} />
      <path d="m157 80 6 26m7-26v26m11-26-5 26m-26-17h37m-34 9h31" stroke={c.line} />
      <circle cx="86" cy="124" r="31" fill={c.surface} />
      <path
        d="M55 124h62m-31-31v62m-21-54c22 10 28 30 19 54m23-54c-22 10-28 30-19 54"
        stroke={c.line}
      />
      <path d="M57 69h52m-44-10h36m-36 20h36M47 157h165" stroke={c.line} />
    </EducationScene>
  )
}
