import type { IllustrationProps } from '../frame'
import { ScenePerson } from '../scenes/scene-person'
import {
  CollectionScene as EducationScene,
  SceneCloud,
  sceneColors as c,
} from '../collections/collection-scene'

export function SchoolBuildingIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M55 79h150v75H55V79Z" fill={c.surface} />
      <path d="M102 55h55v99h-55V55Z" fill={c.surface} />
      <path d="m93 55 37-25 36 25H93Z" fill={c.tint} />
      <circle cx="130" cy="73" r="11" fill={c.tint} stroke={c.line} />
      <path
        d="M130 66v7l5 3m-17 78v-44h23v44M67 94h21v18H67V94Zm0 30h21v18H67v-18Zm106-30h20v18h-20V94Zm0 30h20v18h-20v-18Z"
        stroke={c.line}
      />
      <path d="M130 30V12m0 0 23 5-23 8M47 156h166" fill={c.tint} stroke={c.line} />
      <SceneCloud x={60} y={32} scale={0.5} />
    </EducationScene>
  )
}

export function UniversityCampusIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m73 61 57-32 57 32H73Z" fill={c.surface} />
      <path d="M83 67h94v12H83V67Z" fill={c.tint} stroke={c.line} />
      <path d="M88 79h13v58H88V79Zm35 0h13v58h-13V79Zm35 0h13v58h-13V79Z" fill={c.surface} />
      <path d="M76 137h109v10H76v-10Zm-7 10h123v9H69v-9Z" fill={c.tint} stroke={c.line} />
      <circle cx="130" cy="50" r="6" fill={c.tint} stroke={c.line} />
      <path
        d="M47 155v-40m0 20c-21 0-24-25-11-33-4-25 27-25 23-1 15 10 10 34-12 34Zm166 20v-40m0 20c-21 0-24-25-11-33-4-25 27-25 23-1 15 10 10 34-12 34Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M72 93H57m131 0h15" stroke={c.line} />
    </EducationScene>
  )
}

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

export function SchoolBusIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M47 64h129c12 0 19 8 22 19l9 29v26H47V64Z" fill={c.tint} />
      <path
        d="M57 76h25v28H57V76Zm34 0h25v28H91V76Zm34 0h25v28h-25V76Zm34 0h17c5 0 7 4 9 10l5 18h-31V76Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M48 113h158m-158 10h158m-48-48v63" stroke={c.line} />
      <circle cx="76" cy="140" r="15" fill={c.surface} />
      <circle cx="178" cy="140" r="15" fill={c.surface} />
      <circle cx="76" cy="140" r="6" fill={c.tint} stroke={c.line} />
      <circle cx="178" cy="140" r="6" fill={c.tint} stroke={c.line} />
      <path d="M89 54h55v10H89V54Zm-42 63H36v13h11m154-13h8" fill={c.surface} stroke={c.line} />
      <SceneCloud x={61} y={22} scale={0.6} />
    </EducationScene>
  )
}

export function SchoolLockerIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M58 33h144v121H58V33Z" fill={c.surface} />
      <path
        d="M106 33v121m48-121v121M68 47h28m-28 7h28m-28 7h28m20-14h28m-28 7h28m-28 7h28m20-14h28m-28 7h28m-28 7h28m-124 72h28m20 0h28m20 0h28"
        stroke={c.line}
      />
      <path d="M91 86v14m48-14v14m48-14v14" strokeWidth="3" stroke={c.line} />
      <path d="M116 45h27v25h-27V45Z" fill={c.tint} stroke={c.line} />
      <path d="m122 58 5 5 10-11" stroke={c.accent} />
      <path d="M169 125h34l7 29h-48l7-29Zm6 0v-7h21v7" fill={c.tint} stroke={c.line} />
      <path d="M178 136h18m-119 18v5m85-5v5" stroke={c.line} />
    </EducationScene>
  )
}

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

export function PlaygroundIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m50 152 19-99 21 99m-27-70h112m-7-29 20 99m-20-99-19 99M69 53h99" stroke={c.line} />
      <path d="M85 53v63m32-63v63m-37 0h43v7H80v-7Z" fill={c.surface} />
      <path d="M151 75h26v15l35 59h-18l-43-59V75Z" fill={c.tint} />
      <path d="M151 75v76m-15-76v76m0-58h15m-15 20h15m-15 20h15m-15-58h41" stroke={c.line} />
      <path d="M40 155h181" stroke={c.line} />
      <SceneCloud x={110} y={17} scale={0.6} />
      <path d="m48 126-5-8m161-30h12" stroke={c.line} />
    </EducationScene>
  )
}

export function ScienceFairIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m53 49 41 13V42h74v20l40-13v79l-40 13V42M94 62v79l-41-13V49" fill={c.surface} />
      <path
        d="M106 55h48m-48 11h30M64 71h19m-19 10h19m-19 10h12m104-20h16m-16 10h16m-16 10h10"
        stroke={c.line}
      />
      <path
        d="M118 112c-9-18-4-32 12-44 16 12 21 26 12 44h-24Zm0-13-10 13v12l11-12m23-13 10 13v12l-11-12"
        fill={c.tint}
      />
      <circle cx="130" cy="88" r="6" fill={c.surface} stroke={c.line} />
      <path d="M125 115v12m10-12v12M47 142h167v8H47v-8Zm11 8v8m146-8v8" stroke={c.line} />
      <circle cx="184" cy="119" r="10" fill={c.tint} stroke={c.accent} />
    </EducationScene>
  )
}

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

export function FieldTripIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <ScenePerson x={75} y={55} scale={0.82} pose="waving" />
      <ScenePerson x={189} y={55} scale={0.82} mirror pose="pointing" accent />
      <path d="m105 83 19-8 18 9 17-7v59l-17 7-18-9-19 8V83Z" fill={c.surface} />
      <path
        d="M124 75v59m18-50v59m-29-43 5 3m13 2 5-7m11 8 5-4"
        stroke={c.line}
        strokeDasharray="3 3"
      />
      <path d="M133 39c-15-19-27 1 0 22 27-21 15-41 0-22Z" fill={c.tint} stroke={c.line} />
      <circle cx="133" cy="43" r="4" fill={c.surface} stroke={c.accent} />
      <path d="M49 154h162m-84-6h9m7 8h9" stroke={c.line} />
    </EducationScene>
  )
}
