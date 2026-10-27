import { Children, type ReactNode } from 'react'
import { Text } from '../text/text'
import type { TypographyRole } from '../../theme/typography.types'

/** Only primitive slot content is wrapped; application components keep their own structure. */
export function TextContent({
  children,
  variant = 'body',
}: {
  children: ReactNode
  variant?: TypographyRole
}) {
  if (children === '') return null
  if (typeof children === 'string' || typeof children === 'number')
    return (
      <Text as="span" variant={variant}>
        {children}
      </Text>
    )
  if (Array.isArray(children))
    return (
      <>
        {Children.map(children, (child) =>
          typeof child === 'string' || typeof child === 'number' ? (
            <Text as="span" variant={variant}>
              {child}
            </Text>
          ) : (
            child
          ),
        )}
      </>
    )
  return <>{children}</>
}
