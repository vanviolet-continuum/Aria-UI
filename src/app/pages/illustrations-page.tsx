import { useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Blocks, Check, Code2, Copy, Download, Image, Palette, Sparkles } from 'lucide-react'
import {
  Badge,
  Button,
  Combobox,
  IconButton,
  SearchEmptyState,
  SearchInput,
  Tabs,
  toast,
  type IllustrationTone,
} from '../../template'
import { useI18n } from '../../template/i18n'
import {
  illustrationCatalog,
  illustrationCategories,
  type IllustrationEntry,
} from '../illustrations/illustration-catalog'
import { serializeIllustration } from '../illustrations/serialize-illustration'
import './illustrations-page.css'

function IllustrationCard({
  item,
  size,
  tone,
}: {
  item: IllustrationEntry
  size: number
  tone?: IllustrationTone
}) {
  const { t: tr } = useI18n()
  const preview = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState<'component' | 'svg' | null>(null)
  const Artwork = item.component
  const svg = () => {
    const element = preview.current?.querySelector('svg')
    if (!element) throw new Error('The illustration is not ready yet.')
    return serializeIllustration(element, tr(item.name))
  }
  const copy = async (kind: 'component' | 'svg') => {
    try {
      const caption =
        item.category === 'decoration' ? '' : `\n  title={${JSON.stringify(tr(item.name))}}`
      const source =
        kind === 'svg'
          ? svg()
          : `import { ${item.componentName} } from '@/template/ui/illustrations'\n\n<${item.componentName}\n  size={${size}}${tone ? `\n  tone="${tone}"` : ''}${caption}\n/>`
      await navigator.clipboard.writeText(source)
      setCopied(kind)
      setTimeout(() => setCopied((value) => (value === kind ? null : value)), 1800)
      toast.success(tr(kind === 'svg' ? 'SVG copied' : 'Component code copied'))
    } catch {
      toast.error(tr('Unable to copy. Please try downloading the SVG instead.'))
    }
  }
  const download = () => {
    try {
      const url = URL.createObjectURL(new Blob([svg()], { type: 'image/svg+xml;charset=utf-8' }))
      const link = document.createElement('a')
      link.href = url
      link.download = `aria-ui-${item.id}.svg`
      link.click()
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    } catch {
      toast.error(tr('Unable to download this illustration. Please try again.'))
    }
  }

  return (
    <article className="illustration-card">
      <div
        ref={preview}
        className="illustration-card-art"
        data-decoration={item.category === 'decoration' || undefined}
      >
        {item.isNew && (
          <Badge
            className="illustration-new-label"
            variant="primary"
            appearance="outline"
            size="sm"
          >
            {tr('New')}
          </Badge>
        )}
        <Artwork size={size} tone={tone} title={tr(item.name)} />
      </div>
      <div className="illustration-card-content">
        <div className="illustration-card-heading">
          <h3>{tr(item.name)}</h3>
          <span>
            {tr(
              illustrationCategories.find((category) => category.id === item.category)?.label ??
                item.category,
            )}
          </span>
        </div>
        <p>{tr(item.description)}</p>
        <code>{item.componentName}</code>
      </div>
      <footer className="illustration-card-actions">
        <Button variant="text" size="sm" onClick={() => void copy('component')}>
          {copied === 'component' ? <Check size={13} /> : <Code2 size={13} />}
          {tr(copied === 'component' ? 'Copied' : 'Copy component')}
        </Button>
        <div>
          <IconButton
            label={tr('Copy SVG')}
            variant="text"
            size="sm"
            onClick={() => void copy('svg')}
          >
            {copied === 'svg' ? <Check size={14} /> : <Copy size={14} />}
          </IconButton>
          <IconButton label={tr('Download SVG')} variant="text" size="sm" onClick={download}>
            <Download size={14} />
          </IconButton>
        </div>
      </footer>
    </article>
  )
}

export function IllustrationsPage() {
  const { t: tr } = useI18n()
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const requestedCategory = params.get('category') ?? 'all'
  const category = illustrationCategories.some((item) => item.id === requestedCategory)
    ? requestedCategory
    : 'all'
  const setCategory = (value: string) => {
    const next = new URLSearchParams(params)
    if (value === 'all') next.delete('category')
    else next.set('category', value)
    setParams(next, { replace: true })
  }
  const [size, setSize] = useState(220)
  const [tone, setTone] = useState<IllustrationTone | 'default'>('default')
  const query = search.trim().toLowerCase()
  const visible = illustrationCatalog.filter(
    (item) =>
      (category === 'all' || item.category === category) &&
      `${item.id} ${item.componentName} ${tr(item.name)} ${tr(item.description)}`
        .toLowerCase()
        .includes(query),
  )
  const selectedTone = tone === 'default' ? undefined : tone

  return (
    <div className="standard-page illustrations-page page-enter">
      <header className="illustrations-page-heading">
        <div>
          <span className="eyebrow">
            <Image size={13} /> ARIA UI / {tr('SVG LIBRARY')}
          </span>
          <h2>{tr('Small stories for every state.')}</h2>
          <p>
            {tr('Reusable SVG illustrations for empty states, feedback, and everyday workflows.')}
          </p>
          <div className="illustrations-heading-tags">
            <Badge variant="primary" appearance="outline">
              {illustrationCatalog.length} {tr('illustrations')}
            </Badge>
            <span>
              <Palette size={12} />
              {tr('Theme aware')}
            </span>
            <span>
              <Sparkles size={12} />
              {illustrationCatalog.filter((item) => item.isNew).length} {tr('new illustrations')}
            </span>
          </div>
        </div>
        <Button onClick={() => navigate('/components?component=illustrations')}>
          <Blocks size={14} />
          {tr('Component UI')}
        </Button>
      </header>
      <section className="illustrations-library" aria-label={tr('Illustration gallery')}>
        <div className="illustrations-toolbar">
          <SearchInput
            value={search}
            onChange={setSearch}
            label={tr('Search illustrations')}
            placeholder={tr('Search illustrations…')}
          />
          <div className="illustrations-preview-controls">
            <label>
              <span>{tr('Color')}</span>
              <Combobox
                searchable={false}
                size="sm"
                value={tone}
                onChange={(value) => setTone(value as IllustrationTone | 'default')}
                options={[
                  { value: 'default', label: tr('Follow theme') },
                  { value: 'primary', label: tr('Primary') },
                  { value: 'success', label: tr('Success') },
                  { value: 'warning', label: tr('Warning') },
                  { value: 'violet', label: tr('Violet') },
                ]}
              />
            </label>
            <label>
              <span>{tr('Preview size')}</span>
              <Combobox
                searchable={false}
                size="sm"
                value={String(size)}
                onChange={(value) => setSize(Number(value))}
                options={[
                  { value: '160', label: tr('Small') },
                  { value: '220', label: tr('Medium') },
                  { value: '260', label: tr('Large') },
                ]}
              />
            </label>
          </div>
        </div>
        <div className="illustrations-categories">
          <Tabs
            variant="pill"
            value={category}
            onChange={setCategory}
            label={tr('Illustration categories')}
            items={illustrationCategories.map((item) => ({
              value: item.id,
              label: tr(item.label),
              count:
                item.id === 'all'
                  ? illustrationCatalog.length
                  : illustrationCatalog.filter((illustration) => illustration.category === item.id)
                      .length,
            }))}
          />
        </div>
        <div className="illustrations-results">
          <span aria-live="polite">
            {visible.length} {tr('illustrations available')}
          </span>
          <span>{tr('Copy the React component or download a standalone SVG.')}</span>
        </div>
        {category === 'decoration' && (
          <div className="decoration-library-note">
            <Sparkles size={18} />
            <div>
              <strong>{tr('Designed for login, onboarding, and hero sections.')}</strong>
              <p>
                {tr(
                  'Transparent SVGs with soft gradients and open space for your content. Layer them around a form or use them as a page accent.',
                )}
              </p>
              <code>{'<AuroraDecoration size="100%" />'}</code>
            </div>
          </div>
        )}
        {visible.length ? (
          <div className="illustrations-grid">
            {visible.map((item) => (
              <IllustrationCard key={item.id} item={item} size={size} tone={selectedTone} />
            ))}
          </div>
        ) : (
          <SearchEmptyState
            title={tr('No illustrations found')}
            description={tr('Try another keyword or choose a different category.')}
            onReset={() => {
              setSearch('')
              setCategory('all')
            }}
          />
        )}
      </section>
      <footer className="illustrations-usage">
        <Code2 size={18} />
        <div>
          <strong>{tr('Made to travel with your UI kit.')}</strong>
          <p>
            {tr(
              'All illustrations are vector components with size, title, and tone props. They follow light mode, dark mode, and your theme palette.',
            )}
          </p>
          <code>import {'{ SuccessIllustration }'} from '@/template/ui/illustrations'</code>
        </div>
      </footer>
    </div>
  )
}
