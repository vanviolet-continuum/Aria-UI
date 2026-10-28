import { useEffect, useId, useRef, useState } from 'react'
import type { z } from 'zod'
import { useI18n } from '@templates/i18n'
import { useZodValidation } from '@templates/integrations/zod'
import { useUnsavedRouteGuard } from '@templates/integrations/react.router'
import { Drawer } from '@templates/ui/drawer'
import { Stack } from '@templates/ui/stack'
import { Button } from '@templates/ui/button'
import { Text } from '@templates/ui/text'
import { Alert } from '@templates/ui/alert'
import { Save } from '@templates/icons/files/save.icon'
import { toast } from '@templates/ui/toast'
import { RecordFields, type RecordField } from './record.fields'

export function RecordEditor<V extends object>({
  open,
  title,
  successTitle,
  initial,
  schema,
  fields,
  onSave,
  onClose,
  onAfterClose,
}: {
  open: boolean
  title: string
  successTitle: string
  initial: V
  schema: z.ZodType<V, V>
  fields: RecordField<V>[]
  onSave: (values: V) => void
  onClose: () => void
  onAfterClose: () => void
}) {
  const { t } = useI18n()
  const id = useId()
  const [values, setValues] = useState(initial)
  const [baseline, setBaseline] = useState(initial)
  const [error, setError] = useState('')
  const [saved, setSaved] = useState(false)
  const validation = useZodValidation(schema, values)
  const close = useRef(onClose)
  close.current = onClose
  const dirty = JSON.stringify(values) !== JSON.stringify(baseline)
  const guard = useUnsavedRouteGuard(open && dirty && !saved)
  useEffect(() => {
    if (saved) close.current()
  }, [saved])
  const update = <K extends keyof V>(name: K, value: V[K]) => {
    validation.touch(String(name))
    setValues((previous) => ({ ...previous, [name]: value }))
    setError('')
  }
  return (
    <>
      <Drawer
        open={open}
        onAfterClose={onAfterClose}
        onOpenChange={(next) => {
          if (!next) onClose()
        }}
        title={title}
        description={t('Keep the details clear so your team can move forward.')}
        size="lg"
        footer={
          <>
            <Text as="span" variant="caption" className="me-auto self-center">
              {t(dirty ? 'Unsaved changes' : 'Changes are up to date')}
            </Text>
            <Button onClick={onClose}>{t('Cancel')}</Button>
            <Button variant="contained" type="submit" form={id} disabled={saved}>
              <Save size={16} />
              {t('Save changes')}
            </Button>
          </>
        }
      >
        <Stack
          as="form"
          id={id}
          gap="lg"
          noValidate
          onSubmit={(event) => {
            event.preventDefault()
            const parsed = validation.validate()
            if (!parsed.success) {
              const element = event.currentTarget
              requestAnimationFrame(() =>
                element.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(),
              )
              return
            }
            try {
              onSave(parsed.data)
              setValues(parsed.data)
              setBaseline(parsed.data)
              setSaved(true)
              toast.success(successTitle, {
                description: t('The changes are now available in your workspace.'),
              })
            } catch (reason) {
              setError(reason instanceof Error ? reason.message : 'Unable to save this record.')
            }
          }}
        >
          {error && <Alert severity="error" description={t(error)} />}
          <RecordFields fields={fields} form={{ values, update, errors: validation.errors }} />
          <Text variant="caption">
            {t('Demo data is stored in this browser. No external service is contacted.')}
          </Text>
        </Stack>
      </Drawer>
      {guard.confirmation}
    </>
  )
}
