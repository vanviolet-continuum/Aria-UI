import { useI18n } from '../../../../src/template/i18n'
import { Check } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button, DateTimePicker, Drawer, Field, Input, Combobox } from '@/template/ui'
import { toDateKey } from '@/template/ui/calendar/date-utils'
import type { DirectoryRecord } from '../../types'
import type { DirectoryConfig } from '../../data/directories'

interface Draft {
  name: string
  detail: string
  value: string
  status: string
}
export function RecordDrawer({
  open,
  onOpenChange,
  record,
  config,
  onSave,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  record: DirectoryRecord | null
  config: DirectoryConfig
  onSave: (draft: Draft) => void
}) {
  const { t: tr, text: localize } = useI18n()

  const reservation = config.singular === 'reservation'
  const [draft, setDraft] = useState<Draft>({
    name: '',
    detail: '',
    value: '',
    status: config.statuses[0],
  })
  useEffect(() => {
    if (!open) return
    let value = record?.value ?? ''
    if (reservation) {
      const date = value ? new Date(value.replace(' · ', ' ')) : new Date()
      const valid = Number.isFinite(date.getTime()) ? date : new Date()
      value = value.includes('T')
        ? value
        : `${toDateKey(valid)}T${String(valid.getHours()).padStart(2, '0')}:${String(valid.getMinutes()).padStart(2, '0')}`
    }
    setDraft(
      record ? { ...record, value } : { name: '', detail: '', value, status: config.statuses[0] },
    )
  }, [open, record, config, reservation])
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      title={tr('{{value0}} {{value1}}', {
        value0: localize(record ? 'Edit' : 'Add'),
        value1: localize(config.singular),
      })}
      description={tr('Keep the little details in the right place.')}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault()
          if (draft.name.trim() && draft.value) onSave({ ...draft, name: draft.name.trim() })
        }}
      >
        <div className="form-fields">
          <Field label={localize(config.nameLabel)} required>
            <Input
              autoFocus
              required
              maxLength={120}
              pattern=".*\S.*"
              value={draft.name}
              onChange={(event) => setDraft({ ...draft, name: event.target.value })}
            />
          </Field>
          <Field label={localize(config.detailLabel)} required>
            <Input
              required
              maxLength={180}
              value={draft.detail}
              onChange={(event) => setDraft({ ...draft, detail: event.target.value })}
            />
          </Field>
          <Field label={localize(config.valueLabel)} required>
            {reservation ? (
              <DateTimePicker
                value={draft.value}
                clearable={false}
                minuteStep={15}
                onChange={(value) => setDraft({ ...draft, value: value ?? '' })}
              />
            ) : (
              <Input
                required
                maxLength={120}
                value={draft.value}
                onChange={(event) => setDraft({ ...draft, value: event.target.value })}
              />
            )}
          </Field>
          <Field label={tr('Status')}>
            <Combobox
              value={draft.status}
              options={config.statuses.map((status) => ({ value: status, label: status }))}
              onChange={(nextValue) => setDraft({ ...draft, status: nextValue })}
            />
          </Field>
        </div>
        <div className="drawer-form-footer">
          <Button onClick={() => onOpenChange(false)}>{tr('Cancel')}</Button>
          <Button variant="primary" type="submit">
            <Check size={15} />
            {tr('Save') + ' '}
            {config.singular}
          </Button>
        </div>
      </form>
    </Drawer>
  )
}
