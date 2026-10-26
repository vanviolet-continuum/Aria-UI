import { useI18n } from '../../i18n/use-i18n'
import type { ReactNode } from 'react'
import { EmptyIllustration } from '../illustrations'

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
    <div className="empty-state">
      {icon ? <div className="state-custom-icon">{icon}</div> : <EmptyIllustration />}
      <h3>{localize(title)}</h3>
      <p>{localize(description)}</p>
      {action}
    </div>
  )
}
