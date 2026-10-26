import { useI18n } from '../../i18n/use-i18n'
import { ArrowUpRight, Check, Mail, Plus, Sparkles } from 'lucide-react'
import { useState } from 'react'
import {
  Badge,
  Button,
  Checkbox,
  Combobox,
  DatePicker,
  Field,
  Input,
  EmptyIllustration,
  toast,
} from '../../ui'
import { useTheme } from '../theme-provider'

export function ThemePreview() {
  const { t: tr } = useI18n()

  const { config, storageStatus } = useTheme()
  const [priority, setPriority] = useState('normal')
  const [date, setDate] = useState<string>()
  return (
    <aside className="theme-preview">
      <div className="theme-preview-heading">
        <span>
          <Sparkles size={14} />
          {' ' + tr('LIVE PREVIEW')}
        </span>
        <Badge variant={storageStatus === 'saved' ? 'success' : 'warning'} dot>
          {tr(storageStatus === 'saved' ? 'All changes saved' : 'Session only')}
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
        <div className="theme-preview-controls">
          <Field label={tr('Priority')}>
            <Combobox
              searchable={false}
              value={priority}
              onChange={setPriority}
              options={[
                { value: 'normal', label: 'Normal priority' },
                { value: 'high', label: 'High priority' },
              ]}
            />
          </Field>
          <Field label={tr('Target date')}>
            <DatePicker value={date} onChange={setDate} />
          </Field>
        </div>
        {storageStatus === 'unavailable' && (
          <p className="theme-storage-note">
            {tr('Browser storage is unavailable. Export your theme to keep these settings.')}
          </p>
        )}
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
            <span>{tr('BORDER')}</span>
            <strong>{config.borderWidth}px</strong>
          </div>
          <div>
            <span>{tr('SHADOW')}</span>
            <strong>{Math.round(config.shadowStrength * 100)}%</strong>
          </div>
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
