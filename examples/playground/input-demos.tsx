import { useI18n } from '../../src/template/i18n'
import { AtSign, Search } from 'lucide-react'
import { useState } from 'react'
import { Checkbox, Combobox, Field, Input, Switch, Textarea } from '@/template/ui'
import { DemoCard } from './demo-card'

export function InputDemos() {
  const { t: tr } = useI18n()

  const [email, setEmail] = useState('')
  const [priority, setPriority] = useState('normal')
  const [role, setRole] = useState('designer')
  const [checked, setChecked] = useState(true)
  return (
    <>
      <DemoCard
        title={tr('Input & Field')}
        description={tr('Labels, helper text, icons, and clear validation.')}
        code={`import { Field, Input } from '@/template/ui'\n\n<Field label="Email address" hint="We’ll never share your email.">\n  <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />\n</Field>`}
      >
        <div className="demo-stack">
          <Field label={tr('Email address')} hint={tr('We’ll never share your email.')} required>
            <Input
              type="email"
              leadingIcon={<AtSign size={16} />}
              placeholder={tr('you@company.com')}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Field>
          <Field label={tr('Project name')} error={tr('A project with this name already exists.')}>
            <Input invalid defaultValue="My workspace" />
          </Field>
          <Input
            placeholder={tr('Search your workspace…')}
            leadingIcon={<Search size={16} />}
            trailing={<kbd>⌘ K</kbd>}
          />
          <Input disabled placeholder={tr('This field is disabled')} />
        </div>
      </DemoCard>
      <DemoCard
        title={tr('Combobox')}
        description={tr('Find the right option, even in a long list.')}
        code={`import { Combobox } from '@/template/ui'\n\n<Combobox\n  value={role}\n  onChange={setRole}\n  options={[{ value: 'designer', label: 'Product designer' }]}\n/>`}
      >
        <div className="demo-stack">
          <Field label={tr('Team role')} hint={tr('Type to search. Use ↑ ↓ and Enter to choose.')}>
            <Combobox
              value={role}
              onChange={setRole}
              options={[
                {
                  value: 'designer',
                  label: 'Product designer',
                  description: 'Design meaningful experiences',
                },
                {
                  value: 'developer',
                  label: 'Frontend developer',
                  description: 'Build the things people use',
                },
                {
                  value: 'manager',
                  label: 'Project manager',
                  description: 'Keep everything moving',
                },
                { value: 'researcher', label: 'UX researcher' },
                { value: 'admin', label: 'Administrator', disabled: true },
              ]}
            />
          </Field>
          <Field label={tr('Project priority')}>
            <Combobox
              value={priority}
              onChange={setPriority}
              options={[
                { value: 'low', label: 'Low priority' },
                { value: 'normal', label: 'Normal priority' },
                { value: 'high', label: 'High priority' },
                { value: 'urgent', label: 'Urgent' },
              ]}
            />
          </Field>
          <div className="demo-selection">
            {tr('Selected role') + ' '}
            <strong>{role}</strong>
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title={tr('Textarea, Checkbox & Switch')}
        description={tr('Thoughtful controls for everyday preferences.')}
        code={`import { Textarea, Checkbox, Switch } from '@/template/ui'\n\n<Textarea placeholder="Tell us a little more…" rows={3} />\n<Checkbox checked={agreed} onChange={e => setAgreed(e.target.checked)} />\n<Switch aria-label="Notifications" defaultChecked />`}
      >
        <div className="demo-stack">
          <Field label={tr('A little context')} hint={tr('Good details make a difference.')}>
            <Textarea placeholder={tr('Tell us a little more about your project…')} rows={3} />
          </Field>
          <label className="demo-check-row">
            <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} />
            {tr('Keep me in the loop with project updates')}
          </label>
          <label className="demo-check-row">
            <Checkbox indeterminate onChange={() => {}} />
            {tr('A partially selected group')}
          </label>
          <label className="demo-switch-row">
            <span>
              <strong>{tr('Email notifications')}</strong>
              <small>{tr('Get the updates that matter to you.')}</small>
            </span>
            <Switch defaultChecked />
          </label>
        </div>
      </DemoCard>
    </>
  )
}
