import type { IllustrationProps } from '../frame'
import { CollectionScene, ScenePlant, sceneColors as c } from './collection-scene'

export function HeartCareIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M130 145S63 108 63 71c0-31 42-44 67-16 25-28 67-15 67 16 0 37-67 74-67 74Z"
        fill={c.tint}
      />
      <path d="M49 93h44l13-21 17 43 14-29 9 7h66" stroke={c.surface} strokeWidth="7" />
      <path d="M49 93h44l13-21 17 43 14-29 9 7h66" />
      <path d="M79 62c3-9 12-13 21-10" stroke={c.line} strokeWidth="3" />
      <circle cx="196" cy="132" r="18" fill={c.surface} />
      <path d="M196 122v20m-10-10h20" stroke={c.accent} strokeWidth="4" />
      <path d="M67 143h27m-15 9h27" stroke={c.line} />
    </CollectionScene>
  )
}

export function MedicalKitIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M101 57V39a7 7 0 0 1 7-7h43a7 7 0 0 1 7 7v18m-46 0V43h35v14"
        fill={c.surface}
        stroke={c.line}
      />
      <rect x="54" y="58" width="151" height="94" rx="12" fill={c.surface} />
      <path d="M54 84h151m-137 0v68m123-68v68" stroke={c.line} />
      <path d="M119 93h21v15h15v21h-15v15h-21v-15h-15v-21h15V93Z" fill={c.tint} stroke={c.accent} />
      <rect x="76" y="76" width="10" height="16" rx="2" fill={c.tint} />
      <rect x="172" y="76" width="10" height="16" rx="2" fill={c.tint} />
      <path d="M41 116v-13m-6 6h12m169-54v-12m-6 6h12" stroke={c.accent} />
      <path d="M92 63h72" stroke={c.line} />
    </CollectionScene>
  )
}

export function WellnessIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="126" cy="151" rx="71" ry="9" fill={c.surface} stroke={c.line} />
      <path
        d="M65 137c0-10 47-10 47 0s-47 10-47 0Zm8-19c0-9 32-9 32 0s-32 9-32 0Zm6-17c0-8 21-8 21 0s-21 8-21 0Z"
        fill={c.tint}
        stroke={c.line}
      />
      <rect x="126" y="83" width="47" height="63" rx="8" fill={c.surface} />
      <path d="M138 83V65h23v18m-29 21h35v28h-35v-28Z" fill={c.tint} stroke={c.line} />
      <path d="M143 64V51h16" strokeWidth="4" />
      <path d="M150 111c-8 10-8 14 0 14s8-4 0-14Z" fill={c.surface} stroke={c.accent} />
      <ScenePlant x={169} y={76} scale={0.8} />
      <path d="M87 76c-8-10 10-14 1-27m23 29c-8-10 10-14 1-27" stroke={c.line} />
      <path d="M68 54c-7-16 0-25 12-25-1 11-5 18-12 25Z" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}

export function YogaIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="130" cy="154" rx="85" ry="10" fill={c.tint} stroke={c.line} />
      <circle cx="132" cy="59" r="14" fill={c.surface} stroke={c.line} />
      <path d="M120 54c-3-16 22-21 26-5l-12-4-14 9Z" fill={c.tint} stroke={c.line} />
      <path d="M126 74h12l15 36-15 10-23-7 11-39Z" fill={c.surface} />
      <path d="m124 78-18-15 13-30m19 45 17-15-13-30m-23 0 9-8 8 1 6 7" />
      <path d="m117 113-22 33h15l22-24 17 25h15l-25-36" fill={c.tint} />
      <path d="m119 131 16 9m-33 7H89m60 0h22" stroke={c.line} />
      <ScenePlant x={49} y={94} scale={0.75} />
      <path
        d="M181 68c-16-7-21-23-13-30 12 4 16 14 13 30Zm0 0c2-20 17-27 25-21-5 14-11 19-25 21Z"
        fill={c.tint}
        stroke={c.line}
      />
    </CollectionScene>
  )
}

export function FitnessIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M49 153h169" stroke={c.line} />
      <g transform="rotate(-18 114 116)">
        <rect x="69" y="108" width="88" height="16" rx="4" fill={c.tint} />
        <rect x="57" y="92" width="17" height="48" rx="4" fill={c.surface} />
        <rect x="42" y="100" width="15" height="32" rx="3" fill={c.tint} />
        <rect x="154" y="92" width="17" height="48" rx="4" fill={c.surface} />
        <rect x="171" y="100" width="15" height="32" rx="3" fill={c.tint} />
      </g>
      <path d="M178 65V51h25v14l6 9v69a7 7 0 0 1-7 7h-23a7 7 0 0 1-7-7V74l6-9Z" fill={c.surface} />
      <path d="M178 51v-8h25v8m-29 38h33m-33 34h33" fill={c.tint} stroke={c.line} />
      <path d="m189 95-7 13h10l-3 10 12-15h-11l3-8" fill={c.tint} stroke={c.accent} />
      <path
        d="M73 75c-15-24 19-38 29-15 11-23 44-9 29 15l-29 22-29-22Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m83 68 5 5 9-10" stroke={c.accent} />
    </CollectionScene>
  )
}

export function RunningIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <circle cx="151" cy="43" r="13" fill={c.surface} stroke={c.line} />
      <path d="M140 38c-2-14 20-17 24-4l-13-2-11 6Z" fill={c.tint} stroke={c.line} />
      <path d="m131 60 19 9-19 33-27-8 27-34Z" fill={c.surface} />
      <path d="m130 65-22 5-12 21m50-18 15 13 19-8" strokeWidth="4" />
      <path d="m107 95-17 26-27 8 3 10 38-11 21-25m3 0 19 17-5 28h11l8-35-19-24" fill={c.tint} />
      <path d="m62 139-10 5 5 4 17-5m67 6 5 7h16v-6" />
      <path d="M58 65h29M48 78h29m-15 14h17M40 157h178m-30-46 16 0m-13 13h20" stroke={c.line} />
      <path d="M188 48v-9m-4 5h8" stroke={c.accent} />
    </CollectionScene>
  )
}

export function HydrationIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M105 54V37h48v17l13 15v77a9 9 0 0 1-9 9h-56a9 9 0 0 1-9-9V69l13-15Z"
        fill={c.surface}
      />
      <rect x="104" y="26" width="50" height="12" rx="3" fill={c.tint} />
      <path d="M113 28v8m10-8v8m11-8v8m11-8v8m-52 43h72m-72 55h72" stroke={c.line} />
      <path
        d="M94 106c15-10 27 7 41 0 12-9 23-4 29 0v38a6 6 0 0 1-6 6h-58a6 6 0 0 1-6-6v-38Z"
        fill={c.tint}
        stroke="none"
      />
      <path d="M94 106c15-10 27 7 41 0 12-9 23-4 29 0" stroke={c.line} />
      <path
        d="M129 87c-14 17-17 24-8 30 15 9 23-5 18-13l-10-17Z"
        fill={c.surface}
        stroke={c.accent}
      />
      <path
        d="M102 85v34m0 10v11m81-61c-15-21-16-25-16-25s-17 20-10 29c8 9 16 4 16-4"
        transform="translate(24 10)"
        stroke={c.line}
      />
      <path d="M58 133h17m-9-8v16" stroke={c.accent} />
    </CollectionScene>
  )
}

export function SleepIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M47 91v64m166-43v43M48 132h164v-20H48v20Z" fill={c.tint} />
      <path d="M55 94h51a9 9 0 0 1 9 9v9H55V94Z" fill={c.surface} stroke={c.line} />
      <path d="M106 89h71c21 0 35 9 35 23H106V89Z" fill={c.surface} />
      <path d="M119 95v17m0 28h70" stroke={c.line} />
      <path
        d="M87 24c-11 19 5 36 24 30-15 17-37 6-35-12 0-8 4-15 11-18Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M133 44h12l-12 15h12m13-34h16l-16 20h16m-60 19h8l-8 10h8" stroke={c.accent} />
      <path d="M190 58v9m-4-4h8m-66-37v6m-3-3h6" stroke={c.line} />
    </CollectionScene>
  )
}

export function HealthyMealIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M69 98c0 34 21 56 61 56s61-22 61-56H69Z" fill={c.surface} />
      <ellipse cx="130" cy="98" rx="61" ry="13" fill={c.tint} stroke={c.line} />
      <path
        d="M90 95C60 74 78 51 100 70c-5-29 19-34 28-10 20-23 43-10 30 13 31-10 42 14 21 26"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="m97 87-14-12m35 11 2-25m27 27 8-14m-14 53c-17-9-23 2-30 4" stroke={c.line} />
      <path d="m152 93 9-37 17 5-17 35" fill={c.tint} />
      <path d="m161 56-2-15m5 16 7-16m-1 18 12-12" stroke={c.accent} />
      <circle cx="106" cy="91" r="12" fill={c.tint} stroke={c.accent} />
      <path d="m106 84 1 7 6 1m-8 0-5 5" stroke={c.line} />
      <path d="m51 49 18 43M47 51l6-3 17 40m126-20-11 27" strokeWidth="3" />
      <path d="M93 155h74" />
    </CollectionScene>
  )
}

export function MeditationIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <circle cx="130" cy="72" r="53" stroke={c.line} strokeDasharray="3 6" />
      <circle cx="130" cy="59" r="14" fill={c.surface} stroke={c.line} />
      <path d="M118 55c-2-17 22-20 25-5l-15-4-10 9Z" fill={c.tint} stroke={c.line} />
      <path d="M124 63h3m6 0h3m-8 6h5" stroke={c.line} />
      <path d="M120 77h20l14 34-24 10-24-10 14-34Z" fill={c.surface} />
      <path d="m120 82-22 28-18 5m60-33 22 28 18 5" />
      <path d="M128 119c-42-18-51-1-40 10l38 15m7-25c42-18 51-1 40 10l-38 15" fill={c.tint} />
      <path d="m111 126 24 18m14-18-23 18M73 151h114" stroke={c.line} />
      <path
        d="M56 95c-10-4-15-13-11-19 9 1 13 7 11 19Zm148-8c-3-12 4-19 12-18 2 10-4 16-12 18Z"
        fill={c.tint}
        stroke={c.line}
      />
    </CollectionScene>
  )
}
