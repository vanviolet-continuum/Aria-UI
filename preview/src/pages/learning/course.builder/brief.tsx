import { useI18n } from '@templates/i18n'
import type { CourseFormProps } from './types'
import { Field } from '@templates/ui/field'
import { Input } from '@templates/ui/input'
import { Textarea } from '@templates/ui/textarea'
import { Combobox } from '@templates/ui/combobox'
import { categoryLabels } from '../../../data/scenarios/model'
import type { Draft } from './types'
export function BriefStep({ values, update, message }: CourseFormProps) {
  const { t } = useI18n()
  return (
    <div className="space-y-aria-md">
      <Field label={t('Course title')} required error={message('name')}>
        <Input
          value={values.name}
          onChange={(event) => update('name', event.target.value)}
          placeholder={t('A clear title for a useful course')}
        />
      </Field>
      <Field
        label={t('Course introduction')}
        required
        error={message('description')}
        hint={t('What will learners be able to do by the end?')}
      >
        <Textarea
          value={values.description}
          onChange={(event) => update('description', event.target.value)}
          rows={4}
        />
      </Field>
      <div className="grid gap-aria-md sm:grid-cols-2">
        <Field label={t('Category')} error={message('category')}>
          <Combobox
            value={values.category}
            options={['design', 'development', 'business'].map((value) => ({
              value,
              label: t(categoryLabels[value]),
            }))}
            onChange={(value) => update('category', value as Draft['category'])}
          />
        </Field>
        <Field label={t('Level')} error={message('level')}>
          <Combobox
            value={values.level}
            options={['beginner', 'intermediate', 'advanced'].map((value) => ({
              value,
              label: t(value),
            }))}
            onChange={(value) => update('level', value as Draft['level'])}
          />
        </Field>
      </div>
      <Field label={t('Instructor')} required error={message('instructor')}>
        <Input
          value={values.instructor}
          onChange={(event) => update('instructor', event.target.value)}
        />
      </Field>
    </div>
  )
}
