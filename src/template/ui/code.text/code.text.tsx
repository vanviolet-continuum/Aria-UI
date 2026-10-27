import type { ElementType } from 'react'
import { renderTypography, type TextSize, type TypographyProps } from '../block.shared/typography'
export type CodeTextProps<E extends ElementType = 'code'> = TypographyProps<E, TextSize>
export function CodeText<E extends ElementType = 'code'>(props: CodeTextProps<E>) {
  return renderTypography(
    {
      ...props,
      as: props.as ?? 'code',
      variant: props.variant ?? 'code',
      style: { fontFamily: 'var(--font-mono)', ...props.style },
    },
    'text',
    'aria-code-text',
  )
}
