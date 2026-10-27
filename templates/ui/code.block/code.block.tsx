import type { ElementType } from 'react'
import { renderTypography, type TextSize, type TypographyProps } from '../block.shared/typography'
export type CodeBlockProps<E extends ElementType = 'pre'> = TypographyProps<E, TextSize> & {
  wrap?: boolean
}
export function CodeBlock<E extends ElementType = 'pre'>({
  wrap = true,
  ...props
}: CodeBlockProps<E>) {
  return renderTypography(
    {
      ...props,
      as: props.as ?? 'pre',
      variant: props.variant ?? 'code',
      style: {
        fontFamily: 'var(--font-mono)',
        whiteSpace: wrap ? 'pre-wrap' : 'pre',
        overflow: wrap ? 'visible' : undefined,
        overflowX: wrap ? undefined : 'auto',
        ...props.style,
      },
    },
    'text',
    'aria-code-block',
  )
}
