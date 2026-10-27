import { defaultTypography, typographyRoles } from './typography.defaults'
import type {
  TypographyConfig,
  TypographyOverrides,
  TypographyRole,
  TypographyStyle,
  TypographyTone,
} from './typography.types'

export const typographyTones: TypographyTone[] = [
  'inherit',
  'text',
  'secondary',
  'muted',
  'primary',
  'success',
  'warning',
  'error',
  'info',
  'violet',
  'mint',
]
const record = (value: unknown): value is Record<string, unknown> =>
  !!value && typeof value === 'object' && !Array.isArray(value)
export function isTypographyConfig(value: unknown): value is TypographyOverrides {
  if (!record(value)) return false
  return Object.entries(value).every(([role, style]) => {
    if (!typographyRoles.includes(role as TypographyRole) || !record(style)) return false
    return Object.entries(style).every(([key, setting]) => {
      if (key === 'tone') return typographyTones.includes(setting as TypographyTone)
      if (key === 'textTransform')
        return ['none', 'uppercase', 'lowercase', 'capitalize'].includes(String(setting))
      const limits: Record<string, [number, number]> = {
        fontSize: [8, 72],
        fontWeight: [100, 900],
        lineHeight: [1, 2.5],
        letterSpacing: [-0.1, 0.3],
      }
      const range = limits[key]
      return (
        !!range &&
        typeof setting === 'number' &&
        Number.isFinite(setting) &&
        setting >= range[0] &&
        setting <= range[1]
      )
    })
  })
}
export function normalizeTypography(overrides?: TypographyOverrides): TypographyConfig {
  return Object.fromEntries(
    typographyRoles.map((role) => [
      role,
      {
        ...defaultTypography[role],
        ...Object.fromEntries(
          Object.entries(overrides?.[role] ?? {}).filter(([, value]) => value !== undefined),
        ),
      },
    ]),
  ) as TypographyConfig
}
export function typographyVariables(typography: TypographyConfig) {
  const variables: Record<string, string> = {}
  for (const role of typographyRoles) {
    const style = typography[role]
    const prefix = `--typography-${role}`
    variables[`${prefix}-size`] = `calc(${style.fontSize}px * var(--font-scale, 1))`
    variables[`${prefix}-weight`] = String(style.fontWeight)
    variables[`${prefix}-leading`] = String(style.lineHeight)
    variables[`${prefix}-tracking`] = `${style.letterSpacing}em`
    variables[`${prefix}-transform`] = style.textTransform
    variables[`${prefix}-color`] = typographyColor(style.tone)
  }
  return variables
}
export function typographyColor(tone: TypographyTone) {
  return tone === 'inherit'
    ? 'currentColor'
    : tone === 'secondary'
      ? 'var(--text-secondary)'
      : `var(--${tone})`
}
export function mergeTypography(
  previous: TypographyConfig,
  updates: TypographyOverrides,
): TypographyConfig {
  return Object.fromEntries(
    typographyRoles.map((role) => [
      role,
      {
        ...previous[role],
        ...Object.fromEntries(
          Object.entries(updates[role] ?? {}).filter(([, value]) => value !== undefined),
        ),
      } satisfies TypographyStyle,
    ]),
  ) as TypographyConfig
}
