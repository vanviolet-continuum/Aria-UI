import { CodeBlock } from '../../template/ui/code.block/code.block'

import { Heading } from '../../template/ui/heading/heading'

import { CodeText } from '../../template/ui/code.text/code.text'

import { Text } from '../../template/ui/text/text'
import { lazy, Suspense, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Blocks, Check, ChevronRight, Code2, Copy, Folder, Layers3 } from 'lucide-react'
import { Badge, Button, PageHeader, SearchInput, Spinner, toast } from '../../template'
import { useI18n } from '../../template/i18n'
import { componentCatalog } from '../components/component.catalog'
import './components.page.css'

const ComponentPreview = lazy(() =>
  import('../components/component.preview').then((module) => ({
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
      <PageHeader
        eyebrow={
          <>
            <Blocks size={13} /> ARIA UI / {tr('COMPONENT LIBRARY')}
          </>
        }
        title={tr('Small pieces. Endless possibilities.')}
        description={tr(
          'Choose a component from the sidebar. Explore the preview, then take the code with you.',
        )}
        actions={
          <Badge variant="primary" appearance="outline">
            <Layers3 size={12} />
            {componentCatalog.length} {tr('components')}
          </Badge>
        }
      />
      <div className="component-catalog-layout">
        <aside className="catalog-sidebar">
          <div className="catalog-sidebar-heading">
            <Folder size={15} />
            <Text as="strong" variant="navigation" tone="inherit">
              {tr('Components')}
            </Text>
            <Text as="span" variant="navigation" tone="inherit">
              {componentCatalog.length}
            </Text>
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
              <Text
                as="button"
                variant="button"
                tone="inherit"
                key={item.id}
                className={`catalog-component-link${item.id === selected.id ? ' catalog-component-link--active' : ''}`}
                aria-current={item.id === selected.id ? 'page' : undefined}
                onClick={() => {
                  setParams({ component: item.id })
                  setCode(false)
                }}
              >
                <Text as="span" variant="navigation" tone="inherit" className="catalog-folder-icon">
                  <Folder size={13} />
                </Text>
                <Text as="span" variant="navigation" tone="inherit">
                  {item.id}
                </Text>
                {item.id === selected.id && <ChevronRight size={13} />}
              </Text>
            ))}
            {!matching.length && (
              <div className="catalog-no-results">
                <Text as="span" variant="navigation" tone="inherit">
                  {tr('No components found.')}
                </Text>
                <Button variant="text" size="sm" onClick={() => setSearch('')}>
                  {tr('Clear search')}
                </Button>
              </div>
            )}
          </nav>
          <div className="catalog-sidebar-footer">
            <CodeText as="code" variant="code">
              src/template/ui/
            </CodeText>
          </div>
        </aside>
        <div className="catalog-component-content">
          <div className="catalog-component-heading">
            <div>
              <div className="catalog-path">
                <Folder size={12} />
                <Text as="span" variant="label">
                  ui
                </Text>
                <ChevronRight size={11} />
                <CodeText as="code" variant="code">
                  {selected.id}
                </CodeText>
              </div>
              <Heading as="h3" variant="card">
                {selected.name}
              </Heading>
              <Text as="p" variant="body">
                {tr(selected.description)}
              </Text>
            </div>
            <Badge variant="neutral" size="sm">
              React + TypeScript
            </Badge>
          </div>
          <section className="catalog-preview-panel" aria-label={selected.name}>
            <div className="catalog-panel-toolbar">
              <div className="catalog-panel-tabs">
                <Text
                  as="button"
                  variant="button"
                  tone="inherit"
                  aria-pressed={!code}
                  className={!code ? 'is-active' : ''}
                  onClick={() => setCode(false)}
                >
                  <Layers3 size={14} />
                  {tr('Preview')}
                </Text>
                <Text
                  as="button"
                  variant="button"
                  tone="inherit"
                  aria-pressed={code}
                  className={code ? 'is-active' : ''}
                  onClick={() => setCode(true)}
                >
                  <Code2 size={14} />
                  {tr('Code')}
                </Text>
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
              <CodeBlock as="pre" variant="code" className="catalog-code">
                <CodeText as="code" variant="code">
                  {selected.code}
                </CodeText>
              </CodeBlock>
            ) : (
              <div className="catalog-component-preview">
                <Suspense
                  fallback={
                    <Text as="div" variant="body" className="catalog-preview-loading">
                      <Spinner />
                      {tr('Preparing your component…')}
                    </Text>
                  }
                >
                  <ComponentPreview key={selected.id} id={selected.id} />
                </Suspense>
              </div>
            )}
            <footer className="catalog-panel-footer">
              <span className="catalog-live-dot" />
              {tr('Interactive preview')}
              <Text as="span" variant="label">
                {tr('Follows your theme and language')}
              </Text>
            </footer>
          </section>
          <div className="catalog-usage-note">
            <Code2 size={16} />
            <div>
              <Text as="strong" variant="label">
                {tr('Ready for your workspace')}
              </Text>
              <Text as="p" variant="description">
                {tr(
                  'Import from the UI kit and pass your own data. Components stay independent from application logic.',
                )}
              </Text>
              <CodeText as="code" variant="code">
                import {'{ … }'} from '@/template/ui'
              </CodeText>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
