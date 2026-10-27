interface ScenePersonProps {
  x: number
  y: number
  scale?: number
  mirror?: boolean
  accent?: boolean
  pose?: 'standing' | 'seated' | 'waving' | 'pointing' | 'reading'
}

/** Shared character proportions; each illustration supplies its own scene and activity. */
export function ScenePerson({
  x,
  y,
  scale = 1,
  mirror,
  accent,
  pose = 'standing',
}: ScenePersonProps) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${mirror ? -scale : scale} ${scale})`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d={
          pose === 'seated'
            ? 'M-16 79v20H6l6 17h12L17 88 5 79H-16Z'
            : 'M-16 79l-3 36H-7L0 87l7 28h12l-3-36H-16Z'
        }
        fill="var(--illustration-tint)"
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path
        d={pose === 'seated' ? 'M10 116h19M-20 99h-10' : 'M-20 116h15m11 0h15'}
        stroke="var(--illustration-primary)"
        strokeWidth="3"
      />
      <path
        d="M-5 29v12H5V29"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M-23 53c0-11 7-17 17-17H6c10 0 17 6 17 17l-7 28h-32l-7-28Z"
        fill={accent ? 'var(--illustration-accent)' : 'var(--illustration-tint)'}
        fillOpacity={accent ? '.35' : '1'}
        stroke="var(--illustration-primary)"
        strokeWidth="2"
      />
      <path d="m-6 37 6 8 6-8" stroke="var(--illustration-line)" strokeWidth="2" />
      <circle
        cy="17"
        r="15"
        fill="var(--illustration-surface)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M-15 15c-3-14 7-21 17-18 12-3 19 8 13 19-3-7-8-5-11-12-4 8-11 9-19 11Z"
        fill="var(--illustration-primary)"
        opacity=".75"
      />
      <path
        d="M-5 17v1m10-1v1m-8 7c2 2 4 2 6 0"
        stroke="var(--illustration-primary)"
        strokeWidth="1.7"
      />
      {pose === 'waving' ? (
        <>
          <path
            d="M-22 49c-6 11-7 21-2 29m46-29c12-7 14-18 10-28"
            stroke="var(--illustration-primary)"
            strokeWidth="2.5"
          />
          <path
            d="m29 21-2-6m5 6 1-7m2 10 4-4"
            stroke="var(--illustration-primary)"
            strokeWidth="1.5"
          />
        </>
      ) : pose === 'pointing' ? (
        <>
          <path
            d="M-22 49c-6 10-7 21-1 30m45-30 20-12 13-2"
            stroke="var(--illustration-primary)"
            strokeWidth="2.5"
          />
          <path d="m51 35 5-4" stroke="var(--illustration-primary)" strokeWidth="1.5" />
        </>
      ) : pose === 'reading' ? (
        <path
          d="M-22 50c-5 13 0 20 14 18m30-18c5 13 0 20-14 18"
          stroke="var(--illustration-primary)"
          strokeWidth="2.5"
        />
      ) : pose === 'seated' ? (
        <path
          d="m-22 49-7 16 22 3m29-19 9 15 18-1"
          stroke="var(--illustration-primary)"
          strokeWidth="2.5"
        />
      ) : (
        <path
          d="M-22 49c-7 11-7 21-2 30m46-30c7 11 7 21 2 30"
          stroke="var(--illustration-primary)"
          strokeWidth="2.5"
        />
      )}
    </g>
  )
}
