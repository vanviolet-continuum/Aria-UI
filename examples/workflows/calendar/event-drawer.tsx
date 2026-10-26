import { useI18n } from '../../../src/template/i18n'
import { Check, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button, Combobox, DateTimePicker, Drawer, Field, Input } from '@/template/ui'
import { eventCategories, type CalendarEntry } from './event-data'

export function EventDrawer({
  open,
  onOpenChange,
  event,
  onSave,
  onDelete,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  event: CalendarEntry | null
  onSave: (event: CalendarEntry) => Promise<boolean>
  onDelete: (event: CalendarEntry) => void
}) {
  const { t: tr, text: localize } = useI18n()

  const [draft, setDraft] = useState<CalendarEntry | null>(event)
  const [error, setError] = useState('')
  useEffect(() => {
    if (open) {
      setDraft(event)
      setError('')
    }
  }, [open, event])
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      title={localize(event?.id ? 'Edit event' : 'Make a little time')}
      description={tr('Give your next appointment, meeting, or idea a place on the calendar.')}
    >
      {draft && (
        <form
          onSubmit={async (e) => {
            e.preventDefault()
            if (!draft.start || !draft.end || new Date(draft.end) <= new Date(draft.start)) {
              setError('The end time must be after the start time.')
              return
            }
            if (await onSave({ ...draft, title: draft.title.trim() })) onOpenChange(false)
          }}
        >
          <div className="form-fields">
            <Field label={tr('Event title')} required>
              <Input
                autoFocus
                required
                pattern=".*\S.*"
                maxLength={100}
                placeholder={tr('e.g. A fresh idea for the team')}
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              />
            </Field>
            <Field label={tr('Category')}>
              <Combobox
                value={draft.category}
                onChange={(category) => setDraft({ ...draft, category })}
                options={eventCategories}
              />
            </Field>
            <Field label={tr('Starts')}>
              <DateTimePicker
                value={draft.start}
                clearable={false}
                minuteStep={15}
                onChange={(start) => setDraft({ ...draft, start: start ?? '' })}
              />
            </Field>
            <Field label={tr('Ends')} error={localize(error)}>
              <DateTimePicker
                value={draft.end}
                clearable={false}
                minuteStep={15}
                onChange={(end) => {
                  setDraft({ ...draft, end: end ?? '' })
                  setError('')
                }}
              />
            </Field>
          </div>
          <div className="drawer-form-footer">
            {draft.id && (
              <Button variant="text" color="error" onClick={() => onDelete(draft)}>
                <Trash2 size={15} />
                {tr('Delete')}
              </Button>
            )}
            <Button variant="outlined" color="secondary" onClick={() => onOpenChange(false)}>
              {tr('Cancel')}
            </Button>
            <Button variant="contained" type="submit">
              <Check size={15} />
              {draft.id ? tr('Save changes') : tr('Create event')}
            </Button>
          </div>
        </form>
      )}
    </Drawer>
  )
}
