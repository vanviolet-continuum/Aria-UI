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
    <div className="empty-state not-found-state">
      <NotFoundIllustration />
      <span className="state-eyebrow">{tr('404 · PAGE NOT FOUND')}</span>
      <h3>{localize(title)}</h3>
      <p>{localize(description)}</p>
      {action}
    </div>
  )
}
