import { useI18n } from '../../src/template/i18n'
import { KeyRound, Wallet } from 'lucide-react'
import { useState } from 'react'
import {
  Button,
  CurrencyInput,
  Field,
  InputOTP,
  NumericInput,
  PercentageInput,
  PhoneInput,
  toast,
} from '@/template/ui'
import { DemoCard } from './demo-card'

export function AdvancedInputDemos() {
  const { t: tr } = useI18n()

  const [amount, setAmount] = useState('1250000')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  return (
    <>
      <DemoCard
        title={tr('Formatted inputs')}
        description={tr('Careful formatting. Natural typing. Clean values for your API.')}
        code={`import { CurrencyInput, PhoneInput, NumericInput } from '@/template/ui'\n\n<CurrencyInput currency="IDR" value={amount} onChange={setAmount} />\n<PhoneInput value={phone} onChange={setPhone} />\n<NumericInput decimalScale={0} thousandSeparator="," />\n// onChange receives an unformatted numeric string.`}
      >
        <div className="demo-stack">
          <Field label={tr('Project budget (IDR)')}>
            <CurrencyInput
              currency="IDR"
              value={amount}
              onChange={setAmount}
              leadingIcon={<Wallet size={15} />}
            />
          </Field>
          <Field label={tr('Contact number')}>
            <PhoneInput value={phone} onChange={setPhone} placeholder={tr('+62 812-3456-7890')} />
          </Field>
          <div className="form-grid">
            <Field label={tr('Quantity')}>
              <NumericInput decimalScale={0} placeholder={tr('10,000')} />
            </Field>
            <Field label={tr('Discount')}>
              <PercentageInput placeholder={tr('15 %')} />
            </Field>
          </div>
          <div className="demo-selection">
            {tr('Raw amount')}
            <code>{amount || 'empty'}</code>
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title={tr('Input OTP')}
        description={tr('One seamless input. Paste, autofill, and keyboard support.')}
        code={`import { InputOTP } from '@/template/ui'\n\n<InputOTP value={code} onChange={setCode} length={6}\n  onComplete={code => verifyCode(code)}\n/>`}
      >
        <div className="demo-stack">
          <div className="otp-demo-heading">
            <span>
              <KeyRound size={22} />
            </span>
            <h4>{tr('A little extra reassurance.')}</h4>
            <p>{tr('Enter a six-digit code to try the interaction.')}</p>
          </div>
          <InputOTP
            value={code}
            onChange={setCode}
            onComplete={() =>
              toast.success(tr('All six digits are ready'), {
                description: 'Connect onComplete to your verification endpoint.',
              })
            }
          />
          <div className="demo-row">
            <Button variant="text" color="primary" size="sm" onClick={() => setCode('482916')}>
              {tr('Use sample code')}
            </Button>
            <Button variant="text" color="secondary" size="sm" onClick={() => setCode('')}>
              {tr('Clear')}
            </Button>
          </div>
          <p className="demo-note">
            {tr(
              'Supports SMS autofill and pasting a complete code. No authentication service is connected.',
            )}
          </p>
        </div>
      </DemoCard>
    </>
  )
}
