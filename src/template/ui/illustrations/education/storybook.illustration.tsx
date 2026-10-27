import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function StorybookIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M50 110c31-12 56-8 80 5 24-13 49-17 80-5v39c-30-8-57-4-80 8-23-12-50-16-80-8v-39Z"
        fill={c.surface}
      />
      <path d="M130 115v42m-64-29c16-3 31 0 48 6m32 0c17-6 32-9 48-6" stroke={c.line} />
      <path d="M87 103V64h23v39m40 0V64h23v39m-63 0V79h40v24H87Z" fill={c.tint} />
      <path d="m82 64 17-24 17 24H82Zm63 0 17-24 17 24h-34Z" fill={c.surface} />
      <path d="M120 103V90h20v13m-44-29v9m66-9v9m-31-4V46m0 0 20 4-20 10" stroke={c.line} />
      <path d="M65 63v8m-4-4h8m126-25v10m-5-5h10m-25 51 4-5" stroke={c.accent} />
    </EducationScene>
  )
}
