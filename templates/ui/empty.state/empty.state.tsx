import { Heading } from '../heading/heading'

import { Text } from '../text/text'
import { useI18n } from '../../i18n/use.i18n'
import type { ReactNode } from 'react'
import { EmptyIllustration } from '../illustrations/states/empty.illustration'

export interface EmptyStateProps {
  title?: string
  description?: string
  icon?: ReactNode
  action?: ReactNode
}
export function EmptyState({
  title = 'Nothing here just yet.',
  description = 'A fresh start. Your new records will appear here.',
  icon,
  action,
}: EmptyStateProps) {
  const { text: localize } = useI18n()

  return (
    <Text as="div" variant="body" className="empty-state">
      {icon ? <div className="state-custom-icon">{icon}</div> : <EmptyIllustration />}
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
