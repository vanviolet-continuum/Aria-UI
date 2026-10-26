import { sceneColors as c } from '../collections/collection-scene'

export function StudyBook({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M8 0h47v66H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8Z" fill={c.tint} />
      <path d="M8 0v56h47M0 58c0-5 3-8 8-8h47m-43 8h37" stroke={c.line} />
      <path d="M20 17h23m-23 9h16" stroke={c.line} strokeWidth="3" />
      <path d="M35 50v14l5-3 5 3V50" fill={c.accent} fillOpacity=".3" stroke={c.line} />
    </g>
  )
}

export function StudyPencil({
  x,
  y,
  angle = 0,
  scale = 1,
}: {
  x: number
  y: number
  angle?: number
  scale?: number
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${scale})`}>
      <path d="M0 11h12v55L6 80 0 66V11Z" fill={c.surface} />
      <path
        d="M0 11V4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v7m-12 5h12M6 20v43m-6 3 6-2 6 2"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m4 75 2 5 2-5" fill={c.ink} stroke="none" />
    </g>
  )
}
