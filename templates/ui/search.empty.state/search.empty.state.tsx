import { Text } from '../text/text'

import { Heading } from '../heading/heading'
import { useI18n } from '../../i18n/use.i18n'
import type { ReactNode } from 'react'
import { SearchIllustration } from '../illustrations/states/search.illustration'
import { Button } from '../button/button'

export function SearchEmptyState({
  title = 'No matching results',
  description = 'Try a different keyword or adjust your filters.',
  onReset,
  action,
}: {
  title?: string
  description?: string
  onReset?: () => void
  action?: ReactNode
}) {
  const { t: tr, text: localize } = useI18n()

  return (
    <div className="empty-state search-empty-state">
      <SearchIllustration />
      <Heading as="h3" variant="card">
        {localize(title)}
      </Heading>
      <Text as="p" variant="body">
        {localize(description)}
      </Text>
      {action ??
        (onReset && (
          <Button variant="outlined" size="sm" onClick={onReset}>
            {tr('Clear filters')}
          </Button>
        ))}
    </div>
  )
}
