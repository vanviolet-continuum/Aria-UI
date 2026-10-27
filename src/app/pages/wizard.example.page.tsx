import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check, CircleCheck, FolderPlus, Sparkles } from 'lucide-react'
import {
  Badge,
  Button,
  Combobox,
  DetailList,
  Field,
  Input,
  Stepper,
  Switch,
  Textarea,
} from '../../template'
import { useI18n } from '../../template/i18n'
import './examples.css'

const emptyDraft = {
  name: '',
  description: '',
  category: 'Website',
  owner: '',
  email: '',
  access: 'Team only',
  notifications: true,
}

export function WizardExamplePage() {
  const { t: tr } = useI18n()
  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState(emptyDraft)
  const [finished, setFinished] = useState(false)
  const [projectId, setProjectId] = useState('')
  const steps = [
    { id: 'project', title: 'Project details', description: 'Give your idea a shape' },
    { id: 'team', title: 'Team & access', description: 'Bring the right people together' },
    { id: 'review', title: 'Review & create', description: 'One last look before you begin' },
  ]
  const summary = [
    { id: 'name', label: tr('Project name'), value: draft.name },
    { id: 'type', label: tr('Project type'), value: tr(draft.category) },
    { id: 'owner', label: tr('Project owner'), value: draft.owner },
    { id: 'email', label: tr('Email address'), value: draft.email },
    { id: 'access', label: tr('Access'), value: tr(draft.access) },
    {
      id: 'notifications',
      label: tr('Notifications'),
      value: tr(draft.notifications ? 'Enabled' : 'Disabled'),
    },
    { id: 'description', label: tr('Description'), value: draft.description, fullWidth: true },
  ]
  const download = () => {
    const url = URL.createObjectURL(
      new Blob([JSON.stringify({ id: projectId, ...draft }, null, 2)], {
        type: 'application/json',
      }),
    )
    const link = document.createElement('a')
    link.href = url
    link.download = 'aria-ui-project.json'
    link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  return (
    <div className="standard-page example-page page-enter">
      <div className="example-page-heading">
        <span className="eyebrow">{tr('EXAMPLE WIZARD')}</span>
        <h2>{tr('A good beginning, step by step.')}</h2>
        <p>{tr('A guided project setup with validation, a review step, and a clear finish.')}</p>
      </div>
      <div className="wizard-layout">
        <aside className="wizard-guide">
          <h3>
            <Sparkles size={16} /> {tr('Create something new')}
          </h3>
          <Stepper
            steps={steps}
            activeStep={finished ? steps.length : step}
            onStepChange={finished ? undefined : setStep}
            orientation="vertical"
          />
          <p className="wizard-guide-note">
            {tr(
              'Your changes stay in place as you move between steps. Review everything before creating your project.',
            )}
          </p>
        </aside>
        <section className="example-panel">
          {finished ? (
            <div className="wizard-success" role="status">
              <CircleCheck size={48} strokeWidth={1.4} />
              <h3>{tr('Your project is ready.')}</h3>
              <p>
                {projectId} · {draft.name}
              </p>
              <Badge variant="success" dot>
                {tr('Ready to build')}
              </Badge>
              <DetailList items={summary} />
              <div className="wizard-success-actions">
                <Button onClick={download}>{tr('Download project')}</Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    setDraft(emptyDraft)
                    setStep(0)
                    setFinished(false)
                  }}
                >
                  <FolderPlus size={15} />
                  {tr('Create another project')}
                </Button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                if (step < 2) setStep(step + 1)
                else {
                  setProjectId(`ARIA-${crypto.randomUUID().slice(0, 8).toUpperCase()}`)
                  setFinished(true)
                }
              }}
            >
              <div className="wizard-body">
                <div className="wizard-body-heading">
                  <h3>{tr(steps[step].title)}</h3>
                  <p>{tr(steps[step].description)}</p>
                </div>
                {step === 0 && (
                  <div className="example-form-stack">
                    <Field label={tr('Project name')} required>
                      <Input
                        required
                        maxLength={100}
                        pattern=".*\S.*"
                        placeholder={tr('e.g. Aria Studio website')}
                        value={draft.name}
                        onChange={(event) => setDraft({ ...draft, name: event.target.value })}
                      />
                    </Field>
                    <Field label={tr('Project type')}>
                      <Combobox
                        value={draft.category}
                        onChange={(category) => setDraft({ ...draft, category })}
                        options={['Website', 'Mobile app', 'Brand identity', 'Internal tool'].map(
                          (value) => ({ value, label: tr(value) }),
                        )}
                      />
                    </Field>
                    <Field
                      label={tr('Description')}
                      hint={tr('A few words about what you want to create.')}
                    >
                      <Textarea
                        rows={5}
                        maxLength={1000}
                        value={draft.description}
                        onChange={(event) =>
                          setDraft({ ...draft, description: event.target.value })
                        }
                        placeholder={tr('What is the idea?')}
                      />
                    </Field>
                  </div>
                )}
                {step === 1 && (
                  <div className="example-form-stack">
                    <div className="example-form-grid">
                      <Field label={tr('Project owner')} required>
                        <Input
                          required
                          maxLength={80}
                          pattern=".*\S.*"
                          value={draft.owner}
                          onChange={(event) => setDraft({ ...draft, owner: event.target.value })}
                          placeholder="Nadia Putri"
                        />
                      </Field>
                      <Field label={tr('Email address')} required>
                        <Input
                          type="email"
                          required
                          value={draft.email}
                          onChange={(event) => setDraft({ ...draft, email: event.target.value })}
                          placeholder="nadia@example.com"
                        />
                      </Field>
                    </div>
                    <Field label={tr('Access')}>
                      <Combobox
                        value={draft.access}
                        onChange={(access) => setDraft({ ...draft, access })}
                        options={['Team only', 'Workspace members'].map((value) => ({
                          value,
                          label: tr(value),
                        }))}
                      />
                    </Field>
                    <label className="example-toggle-row">
                      <span>
                        {tr('Project notifications')}
                        <small>{tr('Keep the team informed about project activity.')}</small>
                      </span>
                      <Switch
                        checked={draft.notifications}
                        onChange={(event) =>
                          setDraft({ ...draft, notifications: event.target.checked })
                        }
                      />
                    </label>
                  </div>
                )}
                {step === 2 && (
                  <div className="example-form-stack">
                    <Badge variant="primary">{tr('Almost there')}</Badge>
                    <DetailList items={summary} />
                  </div>
                )}
              </div>
              <footer className="wizard-footer">
                <span>
                  {step + 1} / {steps.length}
                </span>
                <div>
                  {step > 0 && (
                    <Button onClick={() => setStep(step - 1)}>
                      <ArrowLeft size={14} />
                      {tr('Back')}
                    </Button>
                  )}
                  <Button type="submit" variant="contained">
                    {tr(step === 2 ? 'Create project' : 'Continue')}
                    {step === 2 ? <Check size={14} /> : <ArrowRight size={14} />}
                  </Button>
                </div>
              </footer>
            </form>
          )}
        </section>
      </div>
    </div>
  )
}
