import { useI18n } from '../../src/template/i18n'
import { ArrowRight, Check, Monitor, Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Stepper } from '@/template/ui'
import { useTheme, type ThemeMode } from '@/template/theme/theme-provider'
import { projectSteps } from '../workflows/wizard/wizard-data'
import { DemoCard } from './demo-card'

export function WorkflowDemos() {
  const { t: tr, text: localize } = useI18n()

  const [step, setStep] = useState(1)
  const { theme, setTheme, resolvedTheme } = useTheme()
  return (
    <>
      <DemoCard
        title={tr('Stepper & Wizard')}
        description={tr('One clear next step, from the first idea to the final check.')}
        code={`<Stepper steps={steps} activeStep={step} onStepChange={setStep} />\n// A full example with per-step validation lives at /wizard.`}
      >
        <div className="demo-stack">
          <Stepper steps={projectSteps} activeStep={step} onStepChange={setStep} />
          <div className="demo-tab-content">
            {tr('Step') + ' '}
            {step + 1}
            {' ' + tr('of 3 ·') + ' '}
            <strong>{localize(projectSteps[step].title)}</strong>
          </div>
          <div className="demo-row">
            <Button
              size="sm"
              variant="outlined"
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
            >
              {tr('Back')}
            </Button>
            <Button size="sm" variant="contained" onClick={() => setStep((step + 1) % 3)}>
              {tr('Next step')}
              <ArrowRight size={14} />
            </Button>
          </div>
          <Link className="text-link" to="/wizard">
            {tr('Open the full wizard example')}
            <ArrowRight size={14} />
          </Link>
        </div>
      </DemoCard>
      <DemoCard
        title={tr('Light, Dark & System')}
        description={tr('A familiar space, in whatever light feels right.')}
        code={`const { theme, setTheme, resolvedTheme } = useTheme()\nsetTheme('light')\nsetTheme('dark')\nsetTheme('system')\n// Saved across reloads; follows system changes in system mode.`}
      >
        <div className="demo-stack">
          <div className="theme-mode-grid">
            {[
              { value: 'light', label: 'Light', icon: Sun },
              { value: 'dark', label: 'Dark', icon: Moon },
              { value: 'system', label: 'System', icon: Monitor },
            ].map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                className={`theme-mode-card${theme === value ? ' theme-mode-card--selected' : ''}`}
                aria-pressed={theme === value}
                onClick={() => setTheme(value as ThemeMode)}
              >
                <Icon size={25} strokeWidth={1.5} />
                <span>{localize(label)}</span>
                {theme === value && <Check size={12} />}
              </button>
            ))}
          </div>
          <div className="demo-selection">
            {tr('Current appearance')}
            <strong>{resolvedTheme}</strong>
          </div>
          <p className="demo-note">
            {tr('One set of semantic tokens. The same components, with a different feel.')}
          </p>
        </div>
      </DemoCard>
    </>
  )
}
