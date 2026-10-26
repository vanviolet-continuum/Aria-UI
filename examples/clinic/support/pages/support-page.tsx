import { useI18n } from '../../../../src/template/i18n'
import { SearchEmptyState } from '@/template/ui/search-empty-state/search-empty-state'
import { faqs } from '../../data/faqs'
import { useState } from 'react'
import { BookOpen, Check, ChevronDown, LifeBuoy, MessageCircle, Package, Plus } from 'lucide-react'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'
import { useWorkspace } from '../../workspace/workspace-context'
import { Button } from '@/template/ui/button/button'
import { Drawer } from '@/template/ui/drawer/drawer'
import { SearchInput } from '@/template/ui/search-input/search-input'
import { StatusBadge } from '@/template/ui/status-badge/status-badge'
import { Field, Input, Textarea } from '@/template/ui'

export function SupportPage() {
  const { t: tr, locale } = useI18n()

  const { records, saveRecords } = useWorkspace()
  const tickets = records.support ?? []
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState<number | null>(0)
  const [open, setOpen] = useState(false)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const visible = faqs.filter((faq) =>
    `${tr(faq.question)} ${tr(faq.answer)}`.toLowerCase().includes(query.toLowerCase()),
  )
  return (
    <div className="standard-page support-page page-enter">
      <div className="support-hero">
        <span className="support-icon">
          <LifeBuoy size={30} strokeWidth={1.5} />
        </span>
        <span className="eyebrow">{tr('A helping hand')}</span>
        <h2>{tr('Make yourself at home.')}</h2>
        <p>{tr('A little guidance to make your everyday a little easier.')}</p>
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder={tr('What can we help you with?')}
          label={tr('Search help articles')}
        />
      </div>
      <div className="support-cards">
        <Link to="/stocks">
          <Package size={22} />
          <h3>{tr('Stock management')}</h3>
          <p>{tr('Your supplies, orders, and deliveries.')}</p>
          <span>{tr('Open workspace →')}</span>
        </Link>
        <a href="#frequently-asked">
          <BookOpen size={22} />
          <h3>{tr('Quick answers')}</h3>
          <p>{tr('Get to know your new workspace.')}</p>
          <span>{tr('Browse the guide →')}</span>
        </a>
        <button
          onClick={() => {
            setSubject('')
            setMessage('')
            setOpen(true)
          }}
        >
          <MessageCircle size={22} />
          <h3>{tr('Your support requests')}</h3>
          <p>{tr('Keep your questions in one place.')}</p>
          <span>{tr('Create a request →')}</span>
        </button>
      </div>
      <section className="faq-section" id="frequently-asked">
        <h3>{tr('Good questions. Simple answers.')}</h3>
        <p>{tr('Everything you need to get started.')}</p>
        <div className="faq-list">
          {visible.map((faq, index) => (
            <article
              className={expanded === index ? 'faq-item faq-item--open' : 'faq-item'}
              key={faq.question}
            >
              <button
                aria-expanded={expanded === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                {tr(faq.question)}
                <ChevronDown size={17} />
              </button>
              {expanded === index && <p id={`faq-answer-${index}`}>{tr(faq.answer)}</p>}
            </article>
          ))}
          {!visible.length && (
            <SearchEmptyState title={tr('No matching articles')} onReset={() => setQuery('')} />
          )}
        </div>
      </section>
      {tickets.length > 0 && (
        <section className="panel ticket-panel">
          <div className="panel-heading">
            <div>
              <h3>{tr('Your saved requests')}</h3>
              <p>{tr('Demo requests are saved locally and aren’t sent to a support team.')}</p>
            </div>
            <Button
              size="sm"
              onClick={() => {
                setSubject('')
                setMessage('')
                setOpen(true)
              }}
            >
              <Plus size={15} />
              {tr('New request')}
            </Button>
          </div>
          {tickets.map((ticket) => (
            <article className="saved-ticket" key={ticket.id}>
              <div>
                <strong>{ticket.name}</strong>
                <p>{ticket.detail}</p>
                <small>{ticket.value}</small>
              </div>
              <StatusBadge status="pending" label={tr('Saved locally')} />
            </article>
          ))}
        </section>
      )}
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title={tr('Create a support request')}
        description={tr(
          'Save your question here for your team to review. This demo does not submit requests externally.',
        )}
      >
        <form
          onSubmit={async (event) => {
            event.preventDefault()
            if (!subject.trim() || !message.trim()) return
            if (
              !(await saveRecords('support', [
                {
                  id: crypto.randomUUID(),
                  name: subject.trim(),
                  detail: message.trim(),
                  value: new Date().toLocaleDateString(locale),
                  status: 'Saved locally',
                },
                ...tickets,
              ]))
            )
              return
            toast.success(tr('Support request saved in this browser'))
            setOpen(false)
          }}
        >
          <div className="form-fields">
            <Field label={tr('Subject')} required>
              <Input
                required
                autoFocus
                maxLength={120}
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
            </Field>
            <Field label={tr('How can we help?')} required>
              <Textarea
                required
                maxLength={2000}
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Field>
          </div>
          <div className="drawer-form-footer">
            <Button onClick={() => setOpen(false)}>{tr('Cancel')}</Button>
            <Button variant="primary" type="submit">
              <Check size={15} />
              {tr('Save request')}
            </Button>
          </div>
        </form>
      </Drawer>
    </div>
  )
}
