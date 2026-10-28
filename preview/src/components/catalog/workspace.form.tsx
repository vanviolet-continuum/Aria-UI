import { useState } from 'react'
import { z } from 'zod'
import { useZodValidation } from '@templates/integrations/zod'
import { useI18n } from '@templates/i18n'
import { useUnsavedRouteGuard } from '@templates/integrations/react.router'
import { Stack } from '@templates/ui/stack'
import { Inline } from '@templates/ui/inline'
import { Grid } from '@templates/ui/grid'
import { Field } from '@templates/ui/field'
import { Input } from '@templates/ui/input'
import { Textarea } from '@templates/ui/textarea'
import { Combobox } from '@templates/ui/combobox'
import { CheckboxField } from '@templates/ui/checkbox'
import { Button } from '@templates/ui/button'
import { Text } from '@templates/ui/text'
import { Mail, Check } from '@templates/icons'
import { toast } from '@templates/ui/toast'

const initial = { name: '', email: '', team: '', description: '', updates: true }
const workspaceFormSchema = z.object({
  name: z.string().trim().min(2, 'Enter at least 2 characters.'),
  email: z.email('Enter a valid email address.'),
  team: z.string().min(1, 'Choose a team size.'),
  description: z.string(),
  updates: z.boolean(),
})

export function WorkspaceForm() {
  const { t } = useI18n()
  const [values, setValues] = useState(initial)
  const [baseline, setBaseline] = useState(initial)
  const validation = useZodValidation(workspaceFormSchema, values)
  const errors = validation.errors
  const [saved, setSaved] = useState(false)
  const guard = useUnsavedRouteGuard(JSON.stringify(values) !== JSON.stringify(baseline))
  const update = <K extends keyof typeof initial>(key: K, value: (typeof initial)[K]) => {
    setValues((current) => ({ ...current, [key]: value }))
    setSaved(false)
    validation.touch(key)
  }
  return (
    <>
      <Stack
        as="form"
        gap="md"
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          const result = validation.validate()
          if (!result.success) return
          validation.reset()
          setBaseline(values)
          setSaved(true)
          toast.success(t('Workspace saved in this demo session.'), {
            description: t('The workspace details are ready for your next step.'),
          })
        }}
      >
        <Grid columns={{ base: 1, md: 2 }} gap="md">
          <Field label={t('Workspace name')} required error={errors.name}>
            <Input
              value={values.name}
              onChange={(event) => update('name', event.target.value)}
              placeholder="Studio North"
              autoComplete="organization"
            />
          </Field>
          <Field label={t('Work email')} required error={errors.email}>
            <Input
              type="email"
              leadingIcon={<Mail size={15} />}
              value={values.email}
              onChange={(event) => update('email', event.target.value)}
              placeholder="hello@studio.design"
              autoComplete="email"
            />
          </Field>
        </Grid>
        <Field label={t('Team size')} required error={errors.team}>
          <Combobox
            value={values.team}
            onChange={(value) => update('team', value)}
            placeholder={t('Choose a team size')}
            options={[
              { value: 'solo', label: t('Just me') },
              { value: 'small', label: t('2–10 people') },
              { value: 'growing', label: t('11–50 people') },
              { value: 'large', label: t('51+ people') },
            ]}
          />
        </Field>
        <Field label={t('A little about your team')} hint={t('Optional. A few words will do.')}>
          <Textarea
            value={values.description}
            onChange={(event) => update('description', event.target.value)}
            placeholder={t('What are you working on?')}
            rows={3}
          />
        </Field>
        <CheckboxField
          variant="card"
          label={t('Keep me in the loop')}
          description={t('Occasional updates about this workspace.')}
          checked={values.updates}
          onChange={(event) => update('updates', event.target.checked)}
        />
        <Inline justify="between">
          <Text variant="caption" role="status">
            {t(saved ? 'Saved for this session.' : 'Demo form. No data is sent.')}
          </Text>
          <Inline gap="xs">
            <Button
              onClick={() => {
                setValues(initial)
                setBaseline(initial)
                validation.reset()
                setSaved(false)
              }}
            >
              {t('Reset')}
            </Button>
            <Button type="submit" variant="contained">
              {saved && <Check size={14} />}
              {t(saved ? 'Saved' : 'Save workspace')}
            </Button>
          </Inline>
        </Inline>
      </Stack>
      {guard.confirmation}
    </>
  )
}
