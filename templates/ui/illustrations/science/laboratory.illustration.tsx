import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function LaboratoryIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M43 137h174v8H43v-8Zm12 8v13m150-13v13M64 136V51m-8 0h53" fill={c.surface} />
      <path d="M79 51v22m16-22v22" stroke={c.line} />
      <path d="M78 73h19v12l15 37c3 8-39 8-37 0l13-37V73" fill={c.surface} />
      <path d="M81 113h23l4 10H78l3-10Z" fill={c.tint} stroke={c.line} />
      <path d="M133 69h67m-62 0v44a8 8 0 0 0 16 0V69m13 0v44a8 8 0 0 0 16 0V69" fill={c.surface} />
      <path d="M140 95h12m17-10h12m-50-23v73m69-73v73m-75-23h80m-80 23h80" stroke={c.line} />
      <path d="M144 114h4m25-17h4m-93 35h17" stroke={c.accent} strokeWidth="3" />
      <rect x="122" y="28" width="60" height="24" rx="4" fill={c.surface} stroke={c.line} />
      <path d="M131 40h12l4-5 7 11 5-6h14" stroke={c.accent} />
    </CollectionScene>
  )
}
