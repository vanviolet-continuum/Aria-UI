import { useI18n } from '../../../src/template/i18n'
import { Combobox, Field, PhoneInput, Switch } from '@/template/ui'
import { loadMemberOptions } from '../../mocks/services/demo-members'
import type { ProjectDraft } from './wizard-data'

export function ProjectTeamStep({
  draft,
  update,
  errors,
}: {
  draft: ProjectDraft
  update: (value: Partial<ProjectDraft>) => void
  errors: Record<string, string>
}) {
  const { t: tr, text: localize } = useI18n()

  return (
    <div className="form-fields wizard-fields">
      <div className="wizard-team-note">
        <span>✦</span>
        <div>
          <strong>{tr('Good things are built together.')}</strong>
          <p>{tr('Choose a lead to help your idea find its feet.')}</p>
        </div>
      </div>
      <Field
        label={tr('Project owner')}
        required
        error={localize(errors.owner)}
        hint={tr('Search the directory. More people load as you scroll.')}
      >
        <Combobox
          value={draft.owner}
          onChange={(owner) => update({ owner })}
          loadOptions={loadMemberOptions}
          selectedOption={draft.owner ? { value: draft.owner, label: draft.ownerLabel } : undefined}
          onOptionChange={(option) => update({ ownerLabel: option.label })}
          placeholder={tr('Find a teammate…')}
        />
      </Field>
      <Field
        label={tr('Contact number')}
        hint={tr('Optional. Format is configurable for your region.')}
      >
        <PhoneInput
          value={draft.phone}
          onChange={(phone) => update({ phone })}
          placeholder={tr('+62 812-3456-7890')}
        />
      </Field>
      <label className="demo-switch-row">
        <span>
          <strong>{tr('Keep the team in the loop')}</strong>
          <small>{tr('Record a preference for project updates.')}</small>
        </span>
        <Switch
          checked={draft.notify}
          onChange={(event) => update({ notify: event.target.checked })}
        />
      </label>
    </div>
  )
}
