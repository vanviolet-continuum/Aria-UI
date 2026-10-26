import { useI18n } from '../../../src/template/i18n'
import { CurrencyInput, Combobox, DatePicker, Field, Input, Textarea } from '@/template/ui'
import type { ProjectDraft } from './wizard-data'

export function ProjectDetailsStep({
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
      <Field label={tr('Project name')} required error={localize(errors.name)}>
        <Input
          autoFocus
          placeholder={tr('e.g. A brighter patient experience')}
          maxLength={100}
          value={draft.name}
          onChange={(event) => update({ name: event.target.value })}
        />
      </Field>
      <Field
        label={tr('A little context')}
        hint={tr('A short description will help your team get started.')}
      >
        <Textarea
          rows={3}
          placeholder={tr('What would you like to make possible?')}
          maxLength={1000}
          value={draft.description}
          onChange={(event) => update({ description: event.target.value })}
        />
      </Field>
      <div className="form-grid">
        <Field label={tr('Category')} error={localize(errors.category)}>
          <Combobox
            value={draft.category}
            onChange={(category) => update({ category })}
            options={[
              { value: 'design', label: 'Design & experience' },
              { value: 'development', label: 'Product development' },
              { value: 'operations', label: 'Practice operations' },
            ]}
          />
        </Field>
        <Field label={tr('Project budget')} error={localize(errors.budget)}>
          <CurrencyInput
            currency="IDR"
            value={draft.budget}
            maximum={1000000000000}
            onChange={(budget) => update({ budget })}
          />
        </Field>
      </div>
      <Field label={tr('Planned start date')}>
        <DatePicker value={draft.startDate} onChange={(startDate) => update({ startDate })} />
      </Field>
    </div>
  )
}
