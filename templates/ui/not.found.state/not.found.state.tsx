import { Heading } from '../heading/heading'

import { Eyebrow } from '../eyebrow/eyebrow'

import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import type { ReactNode } from 'react'
import { NotFoundIllustration } from '../illustrations/states/not.found.illustration'

export function NotFoundState({
  title = 'This page wandered off.',
  description = 'The page you’re looking for may have moved or no longer exists.',
  action,
}: {
  title?: string
  description?: string
  action?: ReactNode
}) {
  const { t: tr, text: localize } = useI18n()

  return (
    <Text as="div" variant="body" className="empty-state not-found-state">
      <NotFoundIllustration />
      <Eyebrow as="span" variant="eyebrow" className="state-eyebrow">
        {tr('404 · PAGE NOT FOUND')}
      </Eyebrow>
      <Heading as="h3" variant="card">
        {localize(title)}
      </Heading>
      <Text as="p" variant="body">
        {localize(description)}
      </Text>
      {action}
    </Text>
  )
}
