import { useI18n } from '../../src/template/i18n'
import { useMutationTask } from '@/template/providers/mutation-provider'
import { abortableDelay } from '@/template/lib/async'
import { ArrowRight, Check, FolderPlus } from 'lucide-react'
import { useId, useState } from 'react'
import {
  Button,
  Combobox,
  DateTimePicker,
  Drawer,
  Field,
  FormSection,
  Input,
  Switch,
  Textarea,
  toast,
} from '@/template/ui'
import { DemoCard } from './demo-card'

export function DrawerDemo() {
  const { t: tr, text: localize } = useI18n()

  const { runTask } = useMutationTask()
  const [open, setOpen] = useState(false)
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [name, setName] = useState('')
  const [priority, setPriority] = useState('normal')
  const [date, setDate] = useState<string>()
  const [saving, setSaving] = useState(false)
  const formId = useId()
  return (
    <>
      <DemoCard
        title={tr('Drawer')}
        description={tr('A little breathing room. A smooth entrance from the right.')}
        code={`import { Drawer, Button } from '@/template/ui'\n\n<Drawer\n  open={open}\n  onOpenChange={setOpen}\n  title="Create project"\n  description="A fresh start for your next idea."\n  size="md"\n  footer={<Button onClick={save}>Save project</Button>}\n>\n  <ProjectForm />\n</Drawer>`}
      >
        <div className="demo-drawer-illustration">
          <div>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div>
            <i />
            <strong>{tr('A space for the details.')}</strong>
            <span />
            <span />
            <span />
            <button tabIndex={-1} aria-hidden="true" />
          </div>
        </div>
        <div className="demo-row">
          {(['sm', 'md', 'lg'] as const).map((value) => (
            <Button
              key={value}
              variant={value === 'md' ? 'primary' : 'secondary'}
              onClick={() => {
                setSize(value)
                setName('')
                setOpen(true)
              }}
            >
              {value === 'sm' ? tr('Small') : value === 'md' ? tr('Open drawer') : tr('Large')}
              <ArrowRight size={14} />
            </Button>
          ))}
        </div>
      </DemoCard>
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title={tr('Create a project')}
        size={size}
        description={tr('A fresh start for your next idea. Let’s get the details right.')}
        footer={
          <>
            <Button disabled={saving} onClick={() => setOpen(false)}>
              {tr('Cancel')}
            </Button>
            <Button
              variant="primary"
              type="submit"
              form={formId}
              loading={saving}
              loadingText="Creating…"
            >
              <Check size={15} />
              {tr('Create project')}
            </Button>
          </>
        }
      >
        <form
          id={formId}
          onSubmit={async (event) => {
            event.preventDefault()
            setSaving(true)
            const result = await runTask('Creating your project…', () => abortableDelay(1200))
            setSaving(false)
            if (result.success) {
              setOpen(false)
              toast.success(tr('“{{value0}}” created', { value0: localize(name) }), {
                description: 'This is an interactive component preview.',
              })
            }
          }}
        >
          <FormSection
            title={tr('Project details')}
            description={tr('A good name is a great place to begin.')}
          >
            <div className="form-fields">
              <Field label={tr('Project name')} required>
                <Input
                  autoFocus
                  required
                  maxLength={100}
                  pattern=".*\S.*"
                  placeholder={tr('e.g. A brighter workspace')}
                  leadingIcon={<FolderPlus size={16} />}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Field>
              <Field
                label={tr('Description')}
                hint={tr('A few words about what you’re working on.')}
              >
                <Textarea rows={4} placeholder={tr('What’s the idea?')} />
              </Field>
            </div>
          </FormSection>
          <FormSection
            title={tr('A little planning')}
            description={tr('Set the pace and make room on the calendar.')}
          >
            <div className="form-fields">
              <Field label={tr('Priority')}>
                <Combobox
                  value={priority}
                  onChange={setPriority}
                  options={[
                    { value: 'low', label: 'Low priority' },
                    { value: 'normal', label: 'Normal priority' },
                    { value: 'high', label: 'High priority' },
                  ]}
                />
              </Field>
              <Field label={tr('Kickoff date & time')}>
                <DateTimePicker value={date} onChange={setDate} />
              </Field>
            </div>
          </FormSection>
          <label className="demo-switch-row">
            <span>
              <strong>{tr('Keep the team updated')}</strong>
              <small>{tr('Send project activity notifications.')}</small>
            </span>
            <Switch defaultChecked />
          </label>
        </form>
      </Drawer>
    </>
  )
}
