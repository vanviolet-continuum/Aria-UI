import { useI18n } from '../../../src/template/i18n'
import { useEffect, useState } from 'react'
import { Check, Mail, Rows3 } from 'lucide-react'
import { useWorkspace } from '../workspace/workspace-context'
import { Drawer } from '@/template/ui/drawer/drawer'
import { Button } from '@/template/ui/button/button'
import { Field, FormSection } from '@/template/ui/field/field'
import { Input } from '@/template/ui/input/input'
import { Switch } from '@/template/ui/switch/switch'
import { toast } from '@/template/ui/toast/toast'
import { Combobox } from '@/template/ui/combobox/combobox'
import { useTheme, type ThemeMode } from '@/template/theme/theme-provider'
import { Link } from 'react-router-dom'

export function SettingsDrawer({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { t: tr } = useI18n()

  const { settings, updateSettings } = useWorkspace()
  const { theme, setTheme } = useTheme()
  const [draft, setDraft] = useState(settings)
  useEffect(() => {
    if (open) setDraft(settings)
  }, [open, settings])
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      title={tr('Workspace settings')}
      description={tr('A few details that make this space yours.')}
    >
      <form
        onSubmit={async (event) => {
          event.preventDefault()
          if (
            !(await updateSettings({
              ...draft,
              clinicName: draft.clinicName.trim(),
              address: draft.address.trim(),
            }))
          )
            return
          toast.success(tr('Workspace settings saved'))
          onOpenChange(false)
        }}
      >
        <FormSection
          title={tr('Clinic details')}
          description={tr('How your practice appears across the workspace.')}
        >
          <div className="form-fields">
            <Field label={tr('Clinic name')} required>
              <Input
                required
                maxLength={60}
                pattern=".*\S.*"
                value={draft.clinicName}
                onChange={(event) => setDraft({ ...draft, clinicName: event.target.value })}
              />
            </Field>
            <Field label={tr('Address')} required>
              <Input
                required
                maxLength={100}
                pattern=".*\S.*"
                value={draft.address}
                onChange={(event) => setDraft({ ...draft, address: event.target.value })}
              />
            </Field>
          </div>
        </FormSection>
        <FormSection
          title={tr('Appearance')}
          description={tr('A familiar workspace, in the light that feels right.')}
        >
          <Field label={tr('Color theme')}>
            <Combobox
              value={theme}
              onChange={(value) => setTheme(value as ThemeMode)}
              options={[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'system', label: 'Follow system' },
              ]}
            />
          </Field>
          <Link
            to="/settings/appearance"
            className="theme-settings-link"
            onClick={() => onOpenChange(false)}
          >
            {tr('Open Theme studio →') + ' '}
            <span>{tr('Colors, corners, typography, spacing, and export')}</span>
          </Link>
        </FormSection>
        <FormSection title={tr('Your preferences')}>
          <label className="toggle-field">
            <span>
              <Mail size={18} />
              <span>
                <strong>{tr('Show stock reminders')}</strong>
                <small>{tr('Low stock alerts in your notification panel.')}</small>
              </span>
            </span>
            <Switch
              checked={draft.emailNotifications}
              onChange={(event) => setDraft({ ...draft, emailNotifications: event.target.checked })}
            />
          </label>
          <label className="toggle-field">
            <span>
              <Rows3 size={18} />
              <span>
                <strong>{tr('Compact tables')}</strong>
                <small>{tr('Fit more records into your workspace.')}</small>
              </span>
            </span>
            <Switch
              checked={draft.compactRows}
              onChange={(event) => setDraft({ ...draft, compactRows: event.target.checked })}
            />
          </label>
        </FormSection>
        <div className="drawer-form-footer">
          <Button onClick={() => onOpenChange(false)}>{tr('Cancel')}</Button>
          <Button variant="primary" type="submit">
            <Check size={15} />
            {tr('Save changes')}
          </Button>
        </div>
      </form>
    </Drawer>
  )
}
