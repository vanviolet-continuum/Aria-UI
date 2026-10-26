import { lazy, Suspense, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Blocks, Check, ChevronRight, Code2, Copy, Folder, Layers3 } from 'lucide-react'
import { Badge, Button, SearchInput, Spinner, toast } from '../../template'
import { useI18n } from '../../template/i18n'
import { componentCatalog } from '../components/component-catalog'
import './components-page.css'

const ComponentPreview = lazy(() =>
  import('../components/component-preview').then((module) => ({
    default: module.ComponentPreview,
  })),
)

export function ComponentsPage() {
  const { t: tr } = useI18n()
  const [params, setParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [code, setCode] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const selected =
    componentCatalog.find((item) => item.id === (params.get('component') ?? 'button')) ??
    componentCatalog[0]
  const matching = componentCatalog.filter((item) =>
    `${item.id} ${item.name} ${tr(item.description)}`
      .toLowerCase()
      .includes(search.trim().toLowerCase()),
  )

  if (!selected) return null

  return (
    <div className="standard-page component-catalog-page page-enter">
      <div className="catalog-page-heading">
        <div>
          <span className="eyebrow">
            <Blocks size={13} /> ARIA UI / {tr('COMPONENT LIBRARY')}
          </span>
          <h2>{tr('Small pieces. Endless possibilities.')}</h2>
          <p>
            {tr(
              'Choose a component from the sidebar. Explore the preview, then take the code with you.',
            )}
          </p>
        </div>
        <Badge variant="primary" appearance="outline">
          <Layers3 size={12} />
          {componentCatalog.length} {tr('components')}
        </Badge>
      </div>
      <div className="component-catalog-layout">
        <aside className="catalog-sidebar">
          <div className="catalog-sidebar-heading">
            <Folder size={15} />
            <strong>{tr('Components')}</strong>
            <span>{componentCatalog.length}</span>
          </div>
          <div className="catalog-sidebar-search">
            <SearchInput
              value={search}
              onChange={setSearch}
              label={tr('Search components')}
              placeholder={tr('Find a component…')}
            />
          </div>
          <nav aria-label={tr('Component folders')} className="catalog-component-list">
            {matching.map((item) => (
              <button
                key={item.id}
                className={`catalog-component-link${item.id === selected.id ? ' catalog-component-link--active' : ''}`}
                aria-current={item.id === selected.id ? 'page' : undefined}
                onClick={() => {
                  setParams({ component: item.id })
                  setCode(false)
                }}
              >
                <span className="catalog-folder-icon">
                  <Folder size={13} />
                </span>
                <span>{item.id}</span>
                {item.id === selected.id && <ChevronRight size={13} />}
              </button>
            ))}
            {!matching.length && (
              <div className="catalog-no-results">
                <span>{tr('No components found.')}</span>
                <Button variant="text" size="sm" onClick={() => setSearch('')}>
                  {tr('Clear search')}
                </Button>
              </div>
            )}
          </nav>
          <div className="catalog-sidebar-footer">
            <code>src/template/ui/</code>
          </div>
        </aside>
        <div className="catalog-component-content">
          <div className="catalog-component-heading">
            <div>
              <div className="catalog-path">
                <Folder size={12} />
                <span>ui</span>
                <ChevronRight size={11} />
                <code>{selected.id}</code>
              </div>
              <h3>{selected.name}</h3>
              <p>{tr(selected.description)}</p>
            </div>
            <Badge variant="neutral" size="sm">
              React + TypeScript
            </Badge>
          </div>
          <section className="catalog-preview-panel" aria-label={selected.name}>
            <div className="catalog-panel-toolbar">
              <div className="catalog-panel-tabs">
                <button
                  aria-pressed={!code}
                  className={!code ? 'is-active' : ''}
                  onClick={() => setCode(false)}
                >
                  <Layers3 size={14} />
                  {tr('Preview')}
                </button>
                <button
                  aria-pressed={code}
                  className={code ? 'is-active' : ''}
                  onClick={() => setCode(true)}
                >
                  <Code2 size={14} />
                  {tr('Code')}
                </button>
              </div>
              <Button
                variant="text"
                size="sm"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(selected.code)
                    setCopiedId(selected.id)
                    setTimeout(
                      () => setCopiedId((current) => (current === selected.id ? null : current)),
                      1800,
                    )
                  } catch {
                    toast.error(tr('Clipboard unavailable. Select and copy the code manually.'))
                  }
                }}
              >
                {copiedId === selected.id ? <Check size={13} /> : <Copy size={13} />}
                {tr(copiedId === selected.id ? 'Copied' : 'Copy code')}
              </Button>
            </div>
            {code ? (
              <pre className="catalog-code">
                <code>{selected.code}</code>
              </pre>
            ) : (
              <div className="catalog-component-preview">
                <Suspense
                  fallback={
                    <div className="catalog-preview-loading">
                      <Spinner />
                      {tr('Preparing your component…')}
                    </div>
                  }
                >
                  <ComponentPreview key={selected.id} id={selected.id} />
                </Suspense>
              </div>
            )}
            <footer className="catalog-panel-footer">
              <span className="catalog-live-dot" />
              {tr('Interactive preview')}
              <span>{tr('Follows your theme and language')}</span>
            </footer>
          </section>
          <div className="catalog-usage-note">
            <Code2 size={16} />
            <div>
              <strong>{tr('Ready for your workspace')}</strong>
              <p>
                {tr(
                  'Import from the UI kit and pass your own data. Components stay independent from application logic.',
                )}
              </p>
              <code>import {'{ … }'} from '@/template/ui'</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
