export type TypographyTone =
  | 'inherit'
  | 'text'
  | 'secondary'
  | 'muted'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'violet'
  | 'mint'
export type HeadingVariant = 'display' | 'page' | 'section' | 'card' | 'dialog'
export type TextVariant =
  | 'body'
  | 'description'
  | 'label'
  | 'caption'
  | 'helper'
  | 'button'
  | 'input'
  | 'table'
  | 'menu'
  | 'navigation'
export type TypographyRole =
  | HeadingVariant
  | TextVariant
  | 'eyebrow'
  | 'error'
  | 'link'
  | 'code'
  | 'metric'
export interface TypographyStyle {
  fontSize: number
  fontWeight: number
  lineHeight: number
  /** em, independent of fontScale. */
  letterSpacing: number
  tone: TypographyTone
  textTransform: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
}
export type TypographyConfig = Record<TypographyRole, TypographyStyle>
export type TypographyOverrides = Partial<Record<TypographyRole, Partial<TypographyStyle>>>
