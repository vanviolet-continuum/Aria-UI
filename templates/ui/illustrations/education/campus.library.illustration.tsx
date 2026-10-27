import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function CampusLibraryIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="49" y="35" width="163" height="119" rx="4" fill={c.surface} />
      <path d="M58 47h144v42H58V47Zm0 54h144v42H58v-42Z" fill={c.tint} stroke={c.line} />
      <path
        d="M66 55v25h9V55m6 3v22h8V58m6-7v29h9V51m7 6v23h9V57m21-4v27h9V53m6 8v19h9V61m6-9v28h9V52m6 8v20h8V60m-127 52v23h8v-23m7-3v26h9v-26m7 7v19h9v-19m57-4v23h9v-23m7-4v27h9v-27m7 7v20h9v-20"
        stroke={c.line}
      />
      <path
        d="M111 121c8-3 13-1 19 2 6-3 11-5 19-2v24c-8-3-14-1-19 2-5-3-11-5-19-2v-24Zm19 2v24"
        fill={c.surface}
      />
      <path d="M103 154h56" stroke={c.line} />
    </EducationScene>
  )
}
