import { useI18n } from '../../../src/template/i18n'
import { useState } from 'react'
import { Field, PasswordInput } from '@/template/ui'
import { DemoCard } from '../demo-card'

export function PasswordDemo() {
  const { t: tr } = useI18n()

  const [password, setPassword] = useState('')
  return (
    <DemoCard
      title={tr('Password strength')}
      description={tr('Live feedback, a visibility toggle, and requirements you can adapt.')}
      code={`<Field label="Create password">\n  <PasswordInput value={password} onChange={e => setPassword(e.target.value)}\n    autoComplete="new-password" />\n</Field>\n// Customize requirements={[{ id: 'length', label: '12+ characters', test: v => v.length >= 12 }]}\n// This meter measures the supplied rules. Validate your policy again on the server.`}
    >
      <Field
        label={tr('Create password')}
        hint={tr('Use a unique passphrase. The meter checks length and character rules.')}
      >
        <PasswordInput
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="new-password"
          placeholder={tr('Enter a new password')}
        />
      </Field>
    </DemoCard>
  )
}
