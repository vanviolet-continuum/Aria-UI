import { useI18n } from '../../../src/template/i18n'
import { Check, FolderKanban, UserRound } from 'lucide-react'
import { Badge } from '@/template/ui'
import type { ProjectDraft } from './wizard-data'

export function ProjectReviewStep({ draft }: { draft: ProjectDraft }) {
  const { t: tr, locale } = useI18n()

  return (
    <div className="wizard-review">
      <div className="wizard-review-title">
        <span>
          <FolderKanban size={23} />
        </span>
        <div>
          <h3>{draft.name}</h3>
          <p>{draft.description || tr('A fresh start for your next idea.')}</p>
        </div>
        <Badge variant="success" dot>
          {tr('Ready to create')}
        </Badge>
      </div>
      <dl>
        <div>
          <dt>{tr('Category')}</dt>
          <dd>{draft.category}</dd>
        </div>
        <div>
          <dt>{tr('Budget')}</dt>
          <dd>
            {new Intl.NumberFormat(locale, {
              style: 'currency',
              currency: 'IDR',
              maximumFractionDigits: 0,
            }).format(Number(draft.budget))}
          </dd>
        </div>
        <div>
          <dt>{tr('Project lead')}</dt>
          <dd>
            <UserRound size={14} />
            {draft.ownerLabel}
          </dd>
        </div>
        <div>
          <dt>{tr('Starts on')}</dt>
          <dd>{draft.startDate ?? 'To be decided'}</dd>
        </div>
        <div>
          <dt>{tr('Contact number')}</dt>
          <dd>{draft.phone ? `+62 ${draft.phone}` : tr('Not provided')}</dd>
        </div>
        <div>
          <dt>{tr('Team updates')}</dt>
          <dd>{draft.notify ? tr('Enabled') : tr('Disabled')}</dd>
        </div>
      </dl>
      <div className="wizard-review-note">
        <Check size={16} />
        <p>{tr('Looks good? Your project details will be saved in this workspace.')}</p>
      </div>
    </div>
  )
}
