import { useI18n } from '../../src/template/i18n'
import { Check, Code2, Copy } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { toast } from '@/template/ui/toast/toast'

export function DemoCard({
  title,
  description,
  children,
  code,
  full,
}: {
  title: string
  description: string
  children: ReactNode
  code: string
  full?: boolean
}) {
  const { t: tr, text: localize } = useI18n()

  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)
  return (
    <section className={`demo-card${full ? ' demo-card--full' : ''}`}>
      <div className="demo-card-header">
        <div>
          <h3>{localize(title)}</h3>
          <p>{localize(description)}</p>
        </div>
        <button
          className={`demo-code-toggle${showCode ? ' demo-code-toggle--active' : ''}`}
          aria-label={tr('Show {{value0}} code', { value0: localize(title) })}
          aria-expanded={showCode}
          onClick={() => setShowCode(!showCode)}
        >
          <Code2 size={16} />
        </button>
      </div>
      <div className="demo-card-preview">{children}</div>
      {showCode && (
        <div className="demo-code">
          <div>
            <span>{tr('React · TypeScript')}</span>
            <button
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(code)
                  setCopied(true)
                  setTimeout(() => setCopied(false), 1800)
                } catch {
                  toast.error(tr('Clipboard unavailable. Select and copy the example manually.'))
                }
              }}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? tr('Copied') : tr('Copy code')}
            </button>
          </div>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      )}
      <div className="demo-card-footer">
        <span className="demo-status-dot" />
        {tr('Interactive preview')}
        <button onClick={() => setShowCode(!showCode)}>
          {showCode ? tr('Hide') : tr('View')}
          {' ' + tr('example')}
          <Code2 size={12} />
        </button>
      </div>
    </section>
  )
}
