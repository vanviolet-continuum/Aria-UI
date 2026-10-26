import { useI18n } from '../../i18n/use-i18n'
import { ArrowUpRight, Check, Mail, Plus, Sparkles } from 'lucide-react'
import { Badge, Button, Checkbox, Field, Input, EmptyIllustration, toast } from '../../ui'
import { useTheme } from '../theme-provider'

export function ThemePreview() {
  const { t: tr } = useI18n()

  const { config } = useTheme()
  return (
    <aside className="theme-preview">
      <div className="theme-preview-heading">
        <span>
          <Sparkles size={14} />
          {' ' + tr('LIVE PREVIEW')}
        </span>
        <Badge variant="success" dot>
          {tr('All changes saved')}
        </Badge>
      </div>
      <div className="theme-preview-body">
        <span className="theme-preview-icon">
          <Mail size={21} strokeWidth={1.6} />
        </span>
        <h3>{tr('A little more you.')}</h3>
        <p>{tr('A few familiar pieces, wearing your new theme.')}</p>
        <Field
          label={tr('Project name')}
          hint={tr('Your default font, radius, size, and spacing.')}
        >
          <Input placeholder={tr('Something worth making')} />
        </Field>
        <div className="theme-preview-buttons">
          <Button
            variant="contained"
            onClick={() =>
              toast.success(tr('Looking good'), {
                description: 'Your toast follows the same theme tokens.',
              })
            }
          >
            <Plus size={14} />
            {tr('Create project')}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() =>
              toast.info(tr('A little preview'), {
                description: 'Changes are saved automatically in this browser.',
              })
            }
          >
            {tr('Preview toast')}
          </Button>
        </div>
        <div className="theme-preview-tags">
          <Badge variant="primary">{tr('In progress')}</Badge>
          <Badge variant="success">{tr('Complete')}</Badge>
          <Badge variant="warning">{tr('Review')}</Badge>
          <Badge variant="danger">{tr('Attention')}</Badge>
        </div>
        <label className="theme-preview-check">
          <Checkbox defaultChecked />
          <span>{tr('Make room for the details')}</span>
        </label>
        <div className="theme-preview-illustration">
          <EmptyIllustration />
          <span>{tr('One palette. Every little detail.')}</span>
        </div>
        <div className="theme-preview-metrics">
          <div>
            <span>{tr('DEFAULT SIZE')}</span>
            <strong>
              {config.controlSize.toUpperCase()} <ArrowUpRight size={13} />
            </strong>
          </div>
          <div>
            <span>{tr('CORNERS')}</span>
            <strong>
              {config.radius}
              {tr('px') + ' '}
              <Check size={13} />
            </strong>
          </div>
        </div>
      </div>
    </aside>
  )
}
