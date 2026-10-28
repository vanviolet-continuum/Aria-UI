import { useI18n } from '@templates/i18n'
import type { CourseFormProps } from './types'
import { Field } from '@templates/ui/field'
import { NumericInput } from '@templates/ui/number.input'
import { MultiSelect } from '@templates/ui/multi.select'
import { RadioGroup } from '@templates/ui/radio.group'
import { useScenarios } from '../../../data/scenarios/scenarios.provider'
import type { Draft } from './types'
export function AccessStep({
  values,
  update,
  message,
  students,
  setStudents,
}: CourseFormProps & { students: string[]; setStudents: (students: string[]) => void }) {
  const { t } = useI18n(),
    { data } = useScenarios()
  return (
    <div className="space-y-aria-lg">
      <Field label={t('Launch visibility')}>
        <RadioGroup
          value={values.status}
          onValueChange={(value) => {
            update('status', value as Draft['status'])
            if (value !== 'published') setStudents([])
          }}
          variant="card"
          options={[
            {
              value: 'draft',
              label: t('Save as a draft'),
              description: t('Keep refining. Learners cannot enroll yet.'),
            },
            {
              value: 'published',
              label: t('Publish to the catalog'),
              description: t('Make the course available for enrollment immediately.'),
            },
            {
              value: 'archived',
              label: t('Keep in the archive'),
              description: t(
                'Existing enrollments keep their progress. New enrollments are unavailable.',
              ),
            },
          ]}
        />
      </Field>
      <Field
        label={t('Course price')}
        error={message('price')}
        hint={t('Demo pricing only. No checkout or payment is processed.')}
      >
        <NumericInput
          value={values.price}
          prefix="Rp "
          decimalScale={0}
          onChange={(next) => update('price', Number(next))}
        />
      </Field>
      <Field
        label={t('Invite your first learners')}
        hint={t('Selected students are enrolled when the course is published.')}
      >
        <MultiSelect
          disabled={values.status !== 'published'}
          value={students}
          onValueChange={setStudents}
          options={data.students
            .filter((item) => item.status === 'active')
            .map((item) => ({ value: item.id, label: item.name, description: item.email }))}
        />
      </Field>
    </div>
  )
}
