import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function CafeteriaIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m53 117 143-7 18 36-154 9-7-38Z" fill={c.surface} />
      <path d="m64 123 124-6 12 23-133 8-3-25Z" fill={c.tint} stroke={c.line} />
      <ellipse cx="120" cy="130" rx="28" ry="11" fill={c.surface} stroke={c.line} />
      <path d="M107 127c-5-10 17-13 25-3m-19 7h17" stroke={c.line} />
      <path d="M68 111V79l14-14h23v44m-37-30h24l13-14m-13 14v31" fill={c.surface} stroke={c.line} />
      <path
        d="M76 87h9m-9 8h9m78 18c-18-17-5-31 7-22 13-9 25 5 8 22h-15Zm8-22v-9"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M185 106V78m-4 0v12c0 7 8 7 8 0V78m6 28V78c-7 5-7 15 0 18" stroke={c.line} />
      <path d="M119 65h48m-40 10h32" stroke={c.line} />
    </EducationScene>
  )
}
